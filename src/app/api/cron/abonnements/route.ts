import { NextResponse, type NextRequest } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { nextBillingDateFrom } from '@/lib/utils'

/**
 * Cron quotidien Vercel — facturation automatique des abonnements actifs.
 *
 * Scanne `abonnements` actifs dont `prochaine_facturation <= today` et crée
 * une facture brouillon pour chaque, puis avance `prochaine_facturation` à
 * la périodicité suivante.
 *
 * Sécurité :
 * - Vercel Cron envoie un header `Authorization: Bearer <CRON_SECRET>` (vars d'env Vercel).
 *   En dev, on accepte aussi l'absence de header pour pouvoir tester localement.
 * - Utilise le service_role Supabase pour contourner RLS — JAMAIS exposé au client.
 *
 * Schedule : voir vercel.json (par défaut tous les jours à 07:00 UTC).
 */
export async function GET(req: NextRequest) {
  // Vérification du secret Vercel Cron (https://vercel.com/docs/cron-jobs/manage-cron-jobs#securing-cron-jobs)
  const expectedSecret = process.env.CRON_SECRET
  if (expectedSecret) {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${expectedSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const supabase = createAdminClient()
  const today = new Date().toISOString().slice(0, 10)

  // Sélection des abonnements échus
  const { data: abos, error: fetchErr } = await supabase
    .from('abonnements')
    .select('id, client_id, nom, montant_mensuel_ht, periodicite, prochaine_facturation')
    .eq('statut', 'actif')
    .lte('prochaine_facturation', today)

  if (fetchErr) {
    console.error('[cron/abonnements] fetch error:', fetchErr.message)
    return NextResponse.json({ error: fetchErr.message }, { status: 500 })
  }

  if (!abos || abos.length === 0) {
    return NextResponse.json({ ok: true, processed: 0, message: 'Aucun abonnement à facturer aujourd\'hui.' })
  }

  const results: Array<{ abonnement_id: string; facture_id?: string; error?: string }> = []

  for (const abo of abos) {
    if (!abo.client_id) {
      results.push({ abonnement_id: abo.id, error: 'client_id manquant' })
      continue
    }

    const periodicite = (abo.periodicite ?? 'mensuel') as 'mensuel' | 'trimestriel' | 'annuel'
    const periodLabel =
      periodicite === 'annuel' ? 'annuel' : periodicite === 'trimestriel' ? 'trimestriel' : 'mensuel'

    // Génération du numéro de facture F-AAAA-MM-NN
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const prefix = `F-${year}-${month}-`
    const { data: lastNumeros } = await supabase
      .from('factures')
      .select('numero')
      .like('numero', `${prefix}%`)
      .order('numero', { ascending: false })
      .limit(1)
    let nextNum = 1
    if (lastNumeros && lastNumeros[0]) {
      const lastSeq = parseInt(lastNumeros[0].numero.replace(prefix, ''), 10)
      if (!Number.isNaN(lastSeq)) nextNum = lastSeq + 1
    }
    const numero = `${prefix}${nextNum}`

    // Échéance à +30 jours
    const echeance = new Date()
    echeance.setDate(echeance.getDate() + 30)

    const montant = Number(abo.montant_mensuel_ht) || 0

    const { data: facture, error: factureErr } = await supabase
      .from('factures')
      .insert({
        numero,
        client_id: abo.client_id,
        abonnement_id: abo.id,
        statut: 'brouillon',
        date_emission: today,
        date_echeance: echeance.toISOString().slice(0, 10),
        montant_ht: montant,
      })
      .select('id')
      .single()

    if (factureErr || !facture) {
      console.error(`[cron/abonnements] échec création facture pour abo ${abo.id}:`, factureErr?.message)
      results.push({ abonnement_id: abo.id, error: factureErr?.message ?? 'insertion échouée' })
      continue
    }

    // Ligne unique pour cet abonnement
    const { error: ligneErr } = await supabase.from('factures_lignes').insert({
      facture_id: facture.id,
      description: `${abo.nom} — abonnement ${periodLabel}`,
      quantite: 1,
      prix_unitaire_ht: montant,
      ordre: 0,
    })

    if (ligneErr) {
      console.error(`[cron/abonnements] facture ${facture.id} créée sans ligne:`, ligneErr.message)
      results.push({ abonnement_id: abo.id, facture_id: facture.id, error: `ligne en erreur: ${ligneErr.message}` })
      continue
    }

    // Avance la prochaine_facturation (ancre = valeur actuelle pour rester aligné sur le cycle)
    const anchor = abo.prochaine_facturation || today
    const nextDate = nextBillingDateFrom(anchor, periodicite)

    await supabase
      .from('abonnements')
      .update({ prochaine_facturation: nextDate })
      .eq('id', abo.id)

    results.push({ abonnement_id: abo.id, facture_id: facture.id })
  }

  const ok = results.filter((r) => !r.error).length
  const ko = results.length - ok

  console.log(`[cron/abonnements] ${ok} factures générées, ${ko} erreurs sur ${results.length} abonnements`)

  return NextResponse.json({
    ok: true,
    processed: results.length,
    succeeded: ok,
    failed: ko,
    results,
  })
}
