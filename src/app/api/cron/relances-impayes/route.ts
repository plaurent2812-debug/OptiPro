import { NextResponse, type NextRequest } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { sendMail } from '@/lib/mailer'
import { buildRelanceEmail, computeNextRelanceLevel } from '@/lib/relance-templates'
import { formatDate, formatMontant } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

/**
 * Cron Vercel — relances automatiques d'impayés.
 *
 * Tous les jours à 09:00 UTC, scanne les factures `envoyee` ou `en_retard`
 * dont l'échéance est dépassée et envoie un email de relance gradué :
 * - Niveau 1 (J+7)   : rappel doux
 * - Niveau 2 (J+15)  : rappel ferme
 * - Niveau 3 (J+30)  : mise en demeure
 *
 * Logique anti-spam :
 * - Une fois un niveau envoyé, on attend que le seuil suivant soit atteint
 *   avant de remonter. Pas de double-envoi possible.
 * - Si le cron tourne plusieurs fois le même jour : seules les factures dont
 *   le niveau cible a changé reçoivent un nouvel email.
 *
 * Sécurité :
 * - Vercel Cron envoie Authorization: Bearer <CRON_SECRET> (vars Vercel).
 * - Utilise le service_role Supabase pour contourner RLS.
 */
export async function GET(req: NextRequest) {
  const expectedSecret = process.env.CRON_SECRET
  if (expectedSecret) {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${expectedSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const supabase = createAdminClient()
  const today = new Date()
  const todayISO = today.toISOString().slice(0, 10)

  // Sélection des factures candidates : envoyée ou en retard, échéance dépassée
  const { data: factures, error: fetchErr } = await supabase
    .from('factures')
    .select(`
      id, numero, montant_ht, date_echeance, niveau_relance, derniere_relance_at,
      clients ( prenom, nom, entreprise, email )
    `)
    .in('statut', ['envoyee', 'en_retard'])
    .not('date_echeance', 'is', null)
    .lt('date_echeance', todayISO)

  if (fetchErr) {
    console.error('[cron/relances-impayes] fetch error:', fetchErr.message)
    return NextResponse.json({ error: fetchErr.message }, { status: 500 })
  }

  if (!factures || factures.length === 0) {
    return NextResponse.json({
      ok: true,
      processed: 0,
      message: 'Aucune facture en retard à relancer aujourd\'hui.',
    })
  }

  const results: Array<{ facture_id: string; niveau?: number; status: string; reason?: string }> = []

  for (const facture of factures) {
    // Supabase typecheck imparfait sur joins : .clients peut être typé array,
    // mais en pratique c'est un objet unique (FK 1-N inversée).
    const clientRaw = facture.clients as unknown
    const client = (Array.isArray(clientRaw) ? clientRaw[0] : clientRaw) as
      | { prenom: string | null; nom: string | null; entreprise: string | null; email: string | null }
      | null

    if (!client?.email) {
      results.push({ facture_id: facture.id, status: 'skipped', reason: 'client sans email' })
      continue
    }

    // Calcul jours de retard
    const echeance = new Date(facture.date_echeance!)
    const joursRetard = Math.floor((today.getTime() - echeance.getTime()) / (1000 * 60 * 60 * 24))

    const niveauActuel = facture.niveau_relance ?? 0
    const niveauCible = computeNextRelanceLevel(joursRetard, niveauActuel)

    if (!niveauCible) {
      results.push({
        facture_id: facture.id,
        status: 'skipped',
        reason: `seuil pas atteint (niveau ${niveauActuel}, retard ${joursRetard}j)`,
      })
      continue
    }

    // Construit le label client lisible
    const clientLabel = client.entreprise
      ? `${client.prenom ?? ''} ${client.nom ?? ''}`.trim() || client.entreprise
      : `${client.prenom ?? ''} ${client.nom ?? ''}`.trim() || 'cher client'

    const { subject, html } = buildRelanceEmail(niveauCible, {
      clientLabel,
      numero: facture.numero,
      montant: formatMontant(Number(facture.montant_ht) || 0),
      dateEcheance: formatDate(facture.date_echeance),
      joursRetard,
    })

    // BCC à Pierre pour garder une trace dans sa boîte
    const mailResult = await sendMail({
      to: client.email,
      subject,
      html,
    })

    if (!mailResult.ok) {
      console.error(`[cron/relances-impayes] échec envoi facture ${facture.numero}:`, mailResult.error)
      results.push({ facture_id: facture.id, niveau: niveauCible, status: 'error', reason: mailResult.error })
      continue
    }

    // Met à jour Supabase : niveau + timestamp
    const { error: updateErr } = await supabase
      .from('factures')
      .update({
        niveau_relance: niveauCible,
        derniere_relance_at: new Date().toISOString(),
      })
      .eq('id', facture.id)

    if (updateErr) {
      console.error(`[cron/relances-impayes] update échec facture ${facture.id}:`, updateErr.message)
      results.push({ facture_id: facture.id, niveau: niveauCible, status: 'sent_but_db_error', reason: updateErr.message })
      continue
    }

    results.push({ facture_id: facture.id, niveau: niveauCible, status: mailResult.simulated ? 'simulated' : 'sent' })
  }

  const sent = results.filter((r) => r.status === 'sent' || r.status === 'simulated').length
  const skipped = results.filter((r) => r.status === 'skipped').length
  const errors = results.filter((r) => r.status === 'error' || r.status === 'sent_but_db_error').length

  console.log(`[cron/relances-impayes] ${sent} envoyées, ${skipped} ignorées, ${errors} erreurs sur ${results.length} factures candidates`)

  if (sent > 0) {
    revalidatePath('/admin/factures')
    revalidatePath('/admin')
  }

  return NextResponse.json({
    ok: true,
    processed: results.length,
    sent,
    skipped,
    errors,
    results,
  })
}
