'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { generateDevisNumero } from '@/lib/utils'

export async function createDevisAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const clientId = formData.get('client_id') as string

  if (!clientId) {
    return { error: "Vous devez sélectionner un client." }
  }

  // 1. Récupérer le nombre de devis pour générer le numéro séquentiel
  const { count } = await supabase
    .from('devis')
    .select('*', { count: 'exact', head: true })
  
  const devisNumero = generateDevisNumero(count || 0)

  // 2. Extraire toutes les lignes du formulaire
  // Format attendu: lignes[0][description], lignes[0][quantite], etc.
  const lignes = []
  let index = 0
  
  while (formData.has(`lignes[${index}][description]`)) {
    const prix = parseFloat(formData.get(`lignes[${index}][prix_unitaire_ht]`) as string || "0")
    const qte = parseFloat(formData.get(`lignes[${index}][quantite]`) as string || "1")

    lignes.push({
      description: formData.get(`lignes[${index}][description]`),
      quantite: qte,
      unite: formData.get(`lignes[${index}][unite]`) || 'forfait',
      prix_unitaire_ht: prix,
      ordre: index
    })
    index++
  }

  if (lignes.length === 0) {
    return { error: "Le devis doit contenir au moins une ligne de prestation." }
  }

  const montantHtTotal = lignes.reduce((acc, ligne) => acc + (ligne.prix_unitaire_ht * ligne.quantite), 0)

  // 3. Créer le devis (en brouillon)
  const devisData = {
    numero: devisNumero,
    client_id: clientId,
    statut: 'brouillon',
    date_emission: new Date().toISOString().split('T')[0],
    date_validite: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // +30 jours
    montant_ht: montantHtTotal,
    notes: formData.get('notes') as string || null,
  }

  const { data: devisInsert, error: devisError } = await supabase
    .from('devis')
    .insert([devisData])
    .select()
    .single()

  if (devisError || !devisInsert) {
    console.error('Erreur devis_insert:', devisError)
    return { error: "Erreur lors de la création du devis principal." }
  }

  // 4. Insérer les lignes rattachées
  const lignesToInsert = lignes.map(l => ({
    ...l,
    devis_id: devisInsert.id
  }))

  const { error: lignesError } = await supabase
    .from('devis_lignes')
    .insert(lignesToInsert)

  if (lignesError) {
    console.error('Erreur lignes_insert:', lignesError)
    // En situation de prod, on ferait un rollback ou un clean-up ici.
    return { error: "Devis créé, mais erreur lors de la sauvegarde des lignes." }
  }

  // 5. Tout s'est bien passé
  revalidatePath('/admin/devis')
  redirect(`/admin/devis/${devisInsert.id}`)
}

export async function updateDevisAction(devisId: string, prevState: any, formData: FormData) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const clientId = formData.get('client_id') as string

  if (!clientId) {
    return { error: "Vous devez sélectionner un client." }
  }

  // Verify quote exists and is still editable
  const { data: existingDevis, error: checkError } = await supabase
    .from('devis')
    .select('statut')
    .eq('id', devisId)
    .single()

  if (checkError || !existingDevis) {
    return { error: "Devis introuvable." }
  }
  
  if (existingDevis.statut !== 'brouillon') {
    return { error: "Vous ne pouvez modifier qu'un devis en brouillon." }
  }

  // Extract lines from form
  const lignes = []
  let index = 0
  
  while (formData.has(`lignes[${index}][description]`)) {
    const prix = parseFloat(formData.get(`lignes[${index}][prix_unitaire_ht]`) as string || "0")
    const qte = parseFloat(formData.get(`lignes[${index}][quantite]`) as string || "1")

    lignes.push({
      description: formData.get(`lignes[${index}][description]`),
      quantite: qte,
      unite: formData.get(`lignes[${index}][unite]`) || 'forfait',
      prix_unitaire_ht: prix,
      ordre: index
    })
    index++
  }

  if (lignes.length === 0) {
    return { error: "Le devis doit contenir au moins une ligne de prestation." }
  }

  const montantHtTotal = lignes.reduce((acc, ligne) => acc + (ligne.prix_unitaire_ht * ligne.quantite), 0)

  // Update main quote record
  const devisUpdate = {
    client_id: clientId,
    montant_ht: montantHtTotal,
    notes: formData.get('notes') as string || null,
  }

  const { error: updateError } = await supabase
    .from('devis')
    .update(devisUpdate)
    .eq('id', devisId)

  if (updateError) {
    console.error('Erreur devis_update:', updateError)
    return { error: "Erreur lors de la mise à jour du devis." }
  }

  // Re-create lines
  const { error: deleteLinesError } = await supabase
    .from('devis_lignes')
    .delete()
    .eq('devis_id', devisId)

  if (deleteLinesError) {
    console.error('Erreur delete lignes:', deleteLinesError)
    return { error: "Erreur lors de la suppression des anciennes lignes." }
  }

  const lignesToInsert = lignes.map(l => ({
    ...l,
    devis_id: devisId
  }))

  const { error: lignesError } = await supabase
    .from('devis_lignes')
    .insert(lignesToInsert)

  if (lignesError) {
    console.error('Erreur lignes_insert:', lignesError)
    return { error: "Erreur lors de l'enregistrement des nouvelles lignes." }
  }

  revalidatePath('/admin/devis')
  revalidatePath(`/admin/devis/${devisId}`)
  redirect(`/admin/devis/${devisId}`)
}

/**
 * Marque un devis comme accepté (vente fermée).
 */
export async function markDevisAsAcceptedAction(devisId: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const { error } = await supabase
    .from('devis')
    .update({ statut: 'accepte' })
    .eq('id', devisId)

  if (error) {
    return { error: "Erreur lors du marquage du devis." }
  }

  revalidatePath(`/admin/devis/${devisId}`)
  revalidatePath('/admin/devis')
  revalidatePath('/admin')
  return { success: true, message: 'Devis marqué comme accepté.' }
}

export async function archiveDevisAction(devisId: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const { error } = await supabase
    .from('devis')
    .update({ statut: 'archive' })
    .eq('id', devisId)

  if (error) {
    return { error: "Erreur lors de l'archivage du devis." }
  }

  revalidatePath(`/admin/devis/${devisId}`)
  revalidatePath('/admin/devis')
  return { success: true, message: "Devis archivé." }
}
