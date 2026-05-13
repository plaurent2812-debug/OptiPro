'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { Check, Send, Loader2 } from 'lucide-react'
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

const btnStyle = { display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }

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
        style={{ ...btnStyle, backgroundColor: '#2563EB' }}
      >
        {pending ? (
          <Loader2 size={16} strokeWidth={2} style={{ animation: 'spin 1s linear infinite' }} />
        ) : (
          <Send size={16} strokeWidth={2} />
        )}
        <span>{pending ? 'En cours…' : 'Valider & Envoyer'}</span>
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
        style={{ ...btnStyle, backgroundColor: '#059669' }}
      >
        <Check size={16} strokeWidth={2.2} />
        <span>{pending ? 'En cours…' : 'Marquer comme payée'}</span>
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
      style={{ ...btnStyle, background: '#2563EB' }}
    >
      {pending ? (
        <Loader2 size={16} strokeWidth={2} style={{ animation: 'spin 1s linear infinite' }} />
      ) : (
        <Send size={16} strokeWidth={2} />
      )}
      <span>{pending ? 'Synchronisation…' : 'Synchroniser avec Pennylane (Draft)'}</span>
    </button>
  )
}
