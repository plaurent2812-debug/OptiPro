// Utilitaires partagés pour l'admin OptiPro

export function formatMontant(montant: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(montant)
}

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return '—'
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0]
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function addMonths(date: Date, months: number): Date {
  const result = new Date(date)
  result.setMonth(result.getMonth() + months)
  return result
}

/**
 * Calcule la prochaine date de facturation à partir d'une date d'ancrage
 * et de la périodicité d'un abonnement. Retourne une chaîne ISO (YYYY-MM-DD).
 */
export function nextBillingDateFrom(anchor: string | Date, periodicite: 'mensuel' | 'trimestriel' | 'annuel'): string {
  const date = typeof anchor === 'string' ? new Date(anchor) : new Date(anchor)
  if (periodicite === 'mensuel') {
    date.setMonth(date.getMonth() + 1)
  } else if (periodicite === 'trimestriel') {
    date.setMonth(date.getMonth() + 3)
  } else {
    date.setFullYear(date.getFullYear() + 1)
  }
  return date.toISOString().slice(0, 10)
}

export function generateDevisNumero(existingCount: number): string {
  const year = new Date().getFullYear()
  const seq = String(existingCount + 1).padStart(3, '0')
  return `DEV-${year}-${seq}`
}

export function generateFactureNumero(existingCount: number): string {
  const year = new Date().getFullYear()
  const seq = String(existingCount + 1).padStart(3, '0')
  return `FAC-${year}-${seq}`
}

// Libellés lisibles pour les statuts
export const CLIENT_STATUT_LABELS: Record<string, string> = {
  prospect: 'Prospect',
  client_actif: 'Client actif',
  client_inactif: 'Client inactif',
}

export const DEVIS_STATUT_LABELS: Record<string, string> = {
  brouillon: 'Brouillon',
  envoye: 'Envoyé',
  accepte: 'Accepté',
  refuse: 'Refusé',
  expire: 'Expiré',
  archive: 'Archivé',
}

export const FACTURE_STATUT_LABELS: Record<string, string> = {
  brouillon: 'Brouillon',
  envoyee: 'Envoyée',
  payee: 'Payée',
  en_retard: 'En retard',
  annulee: 'Annulée',
}

export const ABONNEMENT_STATUT_LABELS: Record<string, string> = {
  actif: 'Actif',
  suspendu: 'Suspendu',
  termine: 'Terminé',
}

export const PERIODICITE_LABELS: Record<string, string> = {
  mensuel: 'Mensuel',
  trimestriel: 'Trimestriel',
  annuel: 'Annuel',
}

export const UNITE_LABELS: Record<string, string> = {
  forfait: 'Forfait',
  heure: 'Heure',
  jour: 'Jour',
  mois: 'Mois',
}

