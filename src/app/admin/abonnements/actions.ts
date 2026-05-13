'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Periodicite } from '@/types/admin'
import { nextBillingDateFrom } from '@/lib/utils'

export async function createAbonnementAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const clientId = formData.get('client_id') as string

  if (!clientId) {
    return { error: 'Vous devez sélectionner un client.' }
  }

  const rawData = {
    client_id: clientId,
    nom: formData.get('nom') as string,
    description: formData.get('description') as string || null,
    montant_mensuel_ht: parseFloat(formData.get('montant_mensuel_ht') as string || '0'),
    periodicite: (formData.get('periodicite') as Periodicite) || 'mensuel',
    date_debut: formData.get('date_debut') as string,
    statut: 'actif',
  }

  const dataToInsert = {
    ...rawData,
    prochaine_facturation: nextBillingDateFrom(rawData.date_debut, rawData.periodicite),
  }

  const { error } = await supabase
    .from('abonnements')
    .insert([dataToInsert])

  if (error) {
    console.error('Erreur création abonnement:', error)
    return { error: 'Erreur lors de la sauvegarde du contrat.' }
  }

  revalidatePath('/admin/abonnements')
  redirect('/admin/abonnements')
}

export async function suspendreAbonnementAction(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Session expirée.' }

  const { error } = await supabase
    .from('abonnements')
    .update({ statut: 'suspendu' })
    .eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/abonnements')
  revalidatePath(`/admin/abonnements/${id}`)
  return { success: true, message: 'Abonnement suspendu.' }
}

export async function reactiverAbonnementAction(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Session expirée.' }

  const { error } = await supabase
    .from('abonnements')
    .update({ statut: 'actif' })
    .eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/abonnements')
  revalidatePath(`/admin/abonnements/${id}`)
  return { success: true, message: 'Abonnement réactivé.' }
}

export async function terminerAbonnementAction(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Session expirée.' }

  const today = new Date().toISOString().slice(0, 10)
  const { error } = await supabase
    .from('abonnements')
    .update({ statut: 'termine', date_fin: today })
    .eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/abonnements')
  revalidatePath(`/admin/abonnements/${id}`)
  return { success: true, message: 'Abonnement terminé.' }
}

export async function deleteAbonnementAction(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Session expirée.' }

  const { error } = await supabase
    .from('abonnements')
    .delete()
    .eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin/abonnements')
  redirect('/admin/abonnements')
}
