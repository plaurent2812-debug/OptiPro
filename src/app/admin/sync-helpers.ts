/**
 * Helpers de synchronisation Pennylane partagés entre :
 * - src/app/admin/sync-actions.ts (server actions UI)
 * - src/app/api/cron/sync-pennylane/route.ts (cron Vercel)
 *
 * Ce fichier n'a PAS de directive 'use server' — il contient uniquement des
 * types et fonctions synchrones qui peuvent être exportés librement.
 */

export interface SyncResult {
  devis: number
  factures: number
  facturesNouvelles: number
  errors: string[]
}

/**
 * Construit un message lisible à partir d'un SyncResult.
 * Utilisé pour le toast côté UI et les logs Vercel côté cron.
 */
export function formatSyncMessage(results: SyncResult): string {
  const parts: string[] = []
  if (results.devis > 0) parts.push(`${results.devis} devis`)
  if (results.facturesNouvelles > 0) parts.push(`${results.facturesNouvelles} nouvelle(s) facture(s) importée(s)`)
  if (results.factures > 0) parts.push(`${results.factures} facture(s) mise(s) à jour`)

  if (parts.length === 0 && results.errors.length === 0) {
    return 'Tout est déjà à jour.'
  }

  const base = parts.length > 0 ? `Mis à jour : ${parts.join(', ')}.` : ''
  if (results.errors.length > 0) {
    return `${base} ${results.errors.length} erreur(s).`.trim()
  }
  return base
}
