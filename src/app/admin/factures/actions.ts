'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { nextBillingDateFrom, formatDate, formatMontant } from '@/lib/utils'
import { sendMail } from '@/lib/mailer'
import {
  buildRelanceEmail,
  computeNextRelanceLevel,
  type NiveauRelance,
} from '@/lib/relance-templates'

interface FactureLigne {
  description: string
  quantite: number
  prix_unitaire_ht: number
}

/**
 * Récupère le prochain numéro de facture (format F-AAAA-MM-NN).
 */
async function generateFactureNumero(): Promise<string> {
  const supabase = await createClient()
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const prefix = `F-${year}-${month}-`

  const { data } = await supabase
    .from('factures')
    .select('numero')
    .like('numero', `${prefix}%`)
    .order('numero', { ascending: false })
    .limit(1)

  let nextNum = 1
  if (data && data[0]) {
    const lastSeq = parseInt(data[0].numero.replace(prefix, ''), 10)
    if (!Number.isNaN(lastSeq)) nextNum = lastSeq + 1
  }
  return `${prefix}${nextNum}`
}

/**
 * Crée une nouvelle facture en brouillon avec ses lignes.
 */
export async function createFactureAction(payload: {
  client_id: string
  devis_id?: string | null
  abonnement_id?: string | null
  date_emission: string
  date_echeance?: string | null
  notes?: string | null
  lignes: FactureLigne[]
}): Promise<{ error?: string; factureId?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  if (!payload.client_id) return { error: 'Client requis.' }
  if (!payload.lignes || payload.lignes.length === 0) {
    return { error: 'Au moins une ligne est requise.' }
  }

  const numero = await generateFactureNumero()
  const montantHt = payload.lignes.reduce(
    (acc, l) => acc + (l.quantite || 0) * (l.prix_unitaire_ht || 0),
    0,
  )

  const { data: facture, error: factureErr } = await supabase
    .from('factures')
    .insert({
      numero,
      client_id: payload.client_id,
      devis_id: payload.devis_id ?? null,
      abonnement_id: payload.abonnement_id ?? null,
      statut: 'brouillon',
      date_emission: payload.date_emission,
      date_echeance: payload.date_echeance ?? null,
      montant_ht: montantHt,
      notes: payload.notes ?? null,
    })
    .select('id')
    .single()

  if (factureErr || !facture) {
    return { error: factureErr?.message ?? 'Erreur création facture' }
  }

  const lignesPayload = payload.lignes.map((l, i) => ({
    facture_id: facture.id,
    description: l.description,
    quantite: l.quantite,
    prix_unitaire_ht: l.prix_unitaire_ht,
    ordre: i,
  }))

  const { error: lignesErr } = await supabase
    .from('factures_lignes')
    .insert(lignesPayload)

  if (lignesErr) {
    return { error: `Facture créée mais lignes en erreur : ${lignesErr.message}` }
  }

  revalidatePath('/admin/factures')
  revalidatePath('/admin')
  return { factureId: facture.id }
}

/**
 * Convertit un devis accepté en facture (en brouillon).
 * Reprend toutes les lignes du devis.
 */
export async function convertirDevisEnFactureAction(devisId: string): Promise<{ error?: string; factureId?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: devis, error: devisErr } = await supabase
    .from('devis')
    .select('id, client_id, montant_ht, devis_lignes(description, quantite, prix_unitaire_ht, ordre)')
    .eq('id', devisId)
    .single()

  if (devisErr || !devis || !devis.client_id) {
    return { error: 'Devis introuvable ou sans client.' }
  }

  const lignes = ((devis.devis_lignes ?? []) as Array<{ description: string; quantite: number; prix_unitaire_ht: number; ordre: number }>)
    .sort((a, b) => a.ordre - b.ordre)
    .map((l) => ({
      description: l.description,
      quantite: Number(l.quantite),
      prix_unitaire_ht: Number(l.prix_unitaire_ht),
    }))

  if (lignes.length === 0) return { error: 'Devis sans lignes.' }

  const today = new Date().toISOString().slice(0, 10)
  const echeance = new Date()
  echeance.setDate(echeance.getDate() + 30)

  return createFactureAction({
    client_id: devis.client_id,
    devis_id: devis.id,
    date_emission: today,
    date_echeance: echeance.toISOString().slice(0, 10),
    lignes,
  })
}

/**
 * Génère une facture mensuelle pour un abonnement actif et avance
 * la `prochaine_facturation` de la périodicité (mensuel/trimestriel/annuel).
 *
 * L'ancre pour le calcul de la prochaine date est la `prochaine_facturation`
 * actuelle (et non `today`) : si la facturation a pris du retard, le rattrapage
 * reste aligné sur le cycle initial.
 */
export async function genererFactureAbonnementAction(abonnementId: string): Promise<{ error?: string; factureId?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: abo, error: aboErr } = await supabase
    .from('abonnements')
    .select('id, client_id, nom, montant_mensuel_ht, periodicite, prochaine_facturation, statut')
    .eq('id', abonnementId)
    .single()

  if (aboErr || !abo || !abo.client_id) return { error: 'Abonnement introuvable.' }
  if (abo.statut !== 'actif') return { error: 'L\'abonnement n\'est pas actif.' }

  const today = new Date().toISOString().slice(0, 10)
  const echeance = new Date()
  echeance.setDate(echeance.getDate() + 30)

  const periodicite = (abo.periodicite ?? 'mensuel') as 'mensuel' | 'trimestriel' | 'annuel'
  const periodLabel = periodicite === 'annuel' ? 'annuel' : periodicite === 'trimestriel' ? 'trimestriel' : 'mensuel'

  const result = await createFactureAction({
    client_id: abo.client_id,
    abonnement_id: abo.id,
    date_emission: today,
    date_echeance: echeance.toISOString().slice(0, 10),
    lignes: [
      {
        description: `${abo.nom} — abonnement ${periodLabel}`,
        quantite: 1,
        prix_unitaire_ht: Number(abo.montant_mensuel_ht) || 0,
      },
    ],
  })

  if (result.error) return result

  // Avance la prochaine_facturation : ancre sur la valeur actuelle si présente,
  // sinon sur aujourd'hui (cas premier lancement).
  const anchor = abo.prochaine_facturation || today
  const nextDate = nextBillingDateFrom(anchor, periodicite)

  await supabase
    .from('abonnements')
    .update({ prochaine_facturation: nextDate })
    .eq('id', abo.id)

  revalidatePath('/admin/abonnements')
  revalidatePath(`/admin/abonnements/${abo.id}`)

  return result
}

/**
 * Marque une facture comme payée (paiement reçu).
 */
export async function markFactureAsPaidAction(
  factureId: string,
): Promise<{ error?: string; success?: boolean; warning?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const today = new Date().toISOString().slice(0, 10)
  const { error } = await supabase
    .from('factures')
    .update({ statut: 'payee', date_paiement: today })
    .eq('id', factureId)

  if (error) return { error: error.message }

  revalidatePath(`/admin/factures/${factureId}`)
  revalidatePath('/admin/factures')
  revalidatePath('/admin')

  return { success: true }
}

/**
 * Valide et marque une facture brouillon comme envoyée.
 */
export async function validateFactureAction(factureId: string): Promise<{ error?: string; success?: boolean }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: facture } = await supabase
    .from('factures')
    .select('id, statut')
    .eq('id', factureId)
    .single()

  if (!facture) return { error: 'Facture introuvable.' }
  if (facture.statut !== 'brouillon') return { error: 'Cette facture n\'est plus en brouillon.' }

  await supabase.from('factures').update({ statut: 'envoyee' }).eq('id', factureId)

  revalidatePath(`/admin/factures/${factureId}`)
  revalidatePath('/admin/factures')
  revalidatePath('/admin')
  return { success: true }
}

/**
 * Action server pour redirection après création facture (utilisée par le form).
 */
export async function createFactureAndRedirectAction(payload: {
  client_id: string
  devis_id?: string | null
  abonnement_id?: string | null
  date_emission: string
  date_echeance?: string | null
  notes?: string | null
  lignes: FactureLigne[]
}) {
  const result = await createFactureAction(payload)
  if (result.error || !result.factureId) {
    return { error: result.error ?? 'Erreur inconnue' }
  }
  revalidatePath('/admin/factures')
  redirect(`/admin/factures/${result.factureId}`)
}

/**
 * Envoi MANUEL d'une relance d'impayé depuis la fiche facture.
 *
 * Bypass le seuil temporel : permet à Pierre de forcer un envoi quand le cron
 * automatique ne suffit pas. Calcule le niveau cible selon le retard, ou utilise
 * le niveau forcé si fourni.
 */
export async function sendRelanceManuelleAction(
  factureId: string,
  forcedLevel?: NiveauRelance,
): Promise<{ error?: string; success?: boolean; message?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: facture, error: fetchErr } = await supabase
    .from('factures')
    .select(`
      id, numero, montant_ht, date_echeance, statut, niveau_relance,
      clients ( prenom, nom, entreprise, email )
    `)
    .eq('id', factureId)
    .single()

  if (fetchErr || !facture) return { error: 'Facture introuvable.' }

  if (!facture.date_echeance) return { error: 'Pas d\'échéance définie sur cette facture.' }
  if (facture.statut === 'payee' || facture.statut === 'annulee') {
    return { error: 'Cette facture n\'a pas besoin d\'être relancée.' }
  }

  const clientRaw = facture.clients as unknown
  const client = (Array.isArray(clientRaw) ? clientRaw[0] : clientRaw) as
    | { prenom: string | null; nom: string | null; entreprise: string | null; email: string | null }
    | null

  if (!client?.email) return { error: 'Le client n\'a pas d\'email — impossible d\'envoyer une relance.' }

  const today = new Date()
  const echeance = new Date(facture.date_echeance)
  const joursRetard = Math.floor((today.getTime() - echeance.getTime()) / (1000 * 60 * 60 * 24))

  if (joursRetard < 0) {
    return { error: `L'échéance n'est pas encore dépassée (${-joursRetard} jours restants).` }
  }

  const niveauActuel = facture.niveau_relance ?? 0
  // Si forcedLevel fourni, on l'utilise ; sinon on calcule
  let niveauCible: NiveauRelance | null = forcedLevel ?? null
  if (!niveauCible) {
    niveauCible = computeNextRelanceLevel(joursRetard, niveauActuel)
    if (!niveauCible) {
      return {
        error: `Aucune relance à envoyer (niveau actuel ${niveauActuel}, retard ${joursRetard}j).`,
      }
    }
  }

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

  const mailResult = await sendMail({
    to: client.email,
    subject,
    html,
  })

  if (!mailResult.ok) {
    return { error: mailResult.error ?? 'Erreur d\'envoi.' }
  }

  await supabase
    .from('factures')
    .update({
      niveau_relance: niveauCible,
      derniere_relance_at: new Date().toISOString(),
    })
    .eq('id', factureId)

  revalidatePath(`/admin/factures/${factureId}`)
  revalidatePath('/admin/factures')

  const levelLabel = niveauCible === 1 ? 'doux (J+7)' : niveauCible === 2 ? 'ferme (J+15)' : 'mise en demeure (J+30)'
  return {
    success: true,
    message: mailResult.simulated
      ? `Relance ${levelLabel} simulée (DEV).`
      : `Relance ${levelLabel} envoyée à ${client.email}.`,
  }
}
