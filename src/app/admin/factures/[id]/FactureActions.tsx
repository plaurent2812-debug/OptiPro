'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import {
  validateFactureAction,
  markFactureAsPaidAction,
  pushFactureToPennylaneAction,
} from '../actions'

interface Props {
  factureId: string
  statut: string
  className?: string
}

/**
 * Boutons d'action contextuels affichés dans le header de la fiche facture.
 * "Valider & Envoyer" si brouillon, "Marquer payée" si envoyée/en retard.
 */
export function FactureHeaderActions({ factureId, statut, className }: Props) {
  const [pending, startTransition] = useTransition()

  const handleValidate = () => {
    startTransition(async () => {
      const result = await validateFactureAction(factureId)
      if (result?.error) toast.error(result.error)
      else toast.success('Facture validée et envoyée')
    })
  }

  const handleMarkPaid = () => {
    startTransition(async () => {
      const result = await markFactureAsPaidAction(factureId)
      if (result?.error) toast.error(result.error)
      else toast.success('Facture marquée comme payée')
    })
  }

  if (statut === 'brouillon') {
    return (
      <button
        type="button"
        onClick={handleValidate}
        disabled={pending}
        className={className}
        style={{ backgroundColor: '#2563EB' }}
      >
        {pending ? '…' : 'Valider & Envoyer'}
      </button>
    )
  }

  if (statut === 'envoyee' || statut === 'en_retard') {
    return (
      <button
        type="button"
        onClick={handleMarkPaid}
        disabled={pending}
        className={className}
        style={{ backgroundColor: '#059669' }}
      >
        {pending ? '…' : '✓ Marquer comme payée'}
      </button>
    )
  }

  return null
}

/**
 * Bouton "Synchroniser avec Pennylane" dans la carte PDF.
 * Affiché uniquement si brouillon ET pas encore poussée.
 */
export function PushPennylaneButton({ factureId, className }: { factureId: string; className?: string }) {
  const [pending, startTransition] = useTransition()

  const handlePush = () => {
    startTransition(async () => {
      const result = await pushFactureToPennylaneAction(factureId)
      if (result?.error) toast.error(result.error)
      else toast.success('Facture poussée vers Pennylane')
    })
  }

  return (
    <button
      type="button"
      onClick={handlePush}
      disabled={pending}
      className={className}
      style={{ background: '#2563EB' }}
    >
      {pending ? 'Synchronisation…' : 'Synchroniser avec Pennylane (Draft)'}
    </button>
  )
}
