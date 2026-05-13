'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { Mail, AlertCircle, Clock } from 'lucide-react'
import { sendRelanceManuelleAction } from '../actions'
import { formatDate } from '@/lib/utils'

interface RelanceCardProps {
  factureId: string
  statut: string
  dateEcheance: string | null
  niveauRelance: number
  derniereRelanceAt: string | null
  clientEmail: string | null
}

const NIVEAU_LABELS: Record<number, string> = {
  0: 'Aucune relance envoyée',
  1: 'Relance doux envoyée (J+7)',
  2: 'Relance ferme envoyée (J+15)',
  3: 'Mise en demeure envoyée (J+30)',
}

export default function RelanceCard({
  factureId,
  statut,
  dateEcheance,
  niveauRelance,
  derniereRelanceAt,
  clientEmail,
}: RelanceCardProps) {
  const [pending, startTransition] = useTransition()

  // N'affiche rien si la facture n'est pas relançable
  if (statut === 'payee' || statut === 'annulee' || statut === 'brouillon' || !dateEcheance) {
    return null
  }

  const today = new Date()
  const echeance = new Date(dateEcheance)
  const joursRetard = Math.floor((today.getTime() - echeance.getTime()) / (1000 * 60 * 60 * 24))

  // Pas en retard : on n'affiche pas la card
  if (joursRetard < 0) return null

  const handleRelance = () => {
    startTransition(async () => {
      const result = await sendRelanceManuelleAction(factureId)
      if (result?.error) toast.error(result.error)
      else toast.success(result?.message ?? 'Relance envoyée')
    })
  }

  const formattedLastRelance = derniereRelanceAt
    ? new Date(derniereRelanceAt).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : null

  const canSend = clientEmail && niveauRelance < 3

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        padding: '1rem 1.25rem',
        marginBottom: '1.5rem',
        background: niveauRelance === 0 ? '#fffbeb' : '#fef2f2',
        border: `1px solid ${niveauRelance === 0 ? '#fde68a' : '#fecaca'}`,
        borderRadius: '10px',
        fontSize: '0.92rem',
        lineHeight: 1.55,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', flex: '1 1 280px' }}>
        {niveauRelance === 0 ? (
          <Clock size={20} strokeWidth={2} color="#b45309" style={{ flexShrink: 0, marginTop: '2px' }} />
        ) : (
          <AlertCircle size={20} strokeWidth={2} color="#b91c1c" style={{ flexShrink: 0, marginTop: '2px' }} />
        )}
        <div>
          <p style={{ margin: 0, fontWeight: 600, color: niveauRelance === 0 ? '#92400e' : '#991b1b' }}>
            Facture en retard de {joursRetard} jour{joursRetard > 1 ? 's' : ''}
            {' '}
            (échéance : {formatDate(dateEcheance)})
          </p>
          <p style={{ margin: '0.25rem 0 0', color: '#475569', fontSize: '0.88rem' }}>
            {NIVEAU_LABELS[niveauRelance] ?? 'Statut inconnu'}
            {formattedLastRelance ? ` · dernière le ${formattedLastRelance}` : ''}
          </p>
          {!clientEmail && (
            <p style={{ margin: '0.5rem 0 0', color: '#dc2626', fontSize: '0.85rem' }}>
              Aucun email enregistré pour ce client — impossible d&apos;envoyer une relance.
            </p>
          )}
        </div>
      </div>

      {canSend && (
        <button
          type="button"
          onClick={handleRelance}
          disabled={pending}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.55rem 1rem',
            background: '#dc2626',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.88rem',
            cursor: pending ? 'wait' : 'pointer',
            opacity: pending ? 0.7 : 1,
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
          }}
        >
          <Mail size={16} strokeWidth={2} />
          <span>{pending ? 'Envoi…' : 'Relancer maintenant'}</span>
        </button>
      )}
    </div>
  )
}
