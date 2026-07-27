'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Receipt, Check, Archive } from 'lucide-react'
import {
  archiveDevisAction,
  markDevisAsAcceptedAction,
} from '../actions'
import { convertirDevisEnFactureAction } from '../../factures/actions'
import ConfirmDialog from '@/components/admin/ui/ConfirmDialog'
import styles from '../../clients/clients.module.css'

interface DevisActionsProps {
  devisId: string
  statut: string
}

export default function DevisActions({ devisId, statut }: DevisActionsProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleMarkAccepted = async () => {
    const result = await markDevisAsAcceptedAction(devisId)
    if (result?.error) toast.error(result.error)
    else toast.success(result?.message || 'Devis marqué accepté')
  }

  const handleConvertirEnFacture = async () => {
    const result = await convertirDevisEnFactureAction(devisId)
    if (result?.error) {
      toast.error(result.error)
    } else if (result?.factureId) {
      toast.success('Facture créée — redirection…')
      router.push(`/admin/factures/${result.factureId}`)
    }
  }

  const handleArchive = () => {
    startTransition(async () => {
      const result = await archiveDevisAction(devisId)
      if (result?.error) toast.error(result.error)
      else toast.success(result?.message || 'Devis archivé')
    })
  }

  const canMarkAccepted = statut === 'envoye' || statut === 'brouillon'
  const canConvert = statut === 'accepte'
  const canArchive = statut !== 'archive'

  const btnStyle = { display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      {canConvert && (
        <ConfirmDialog
          trigger={
            <button
              className={styles.primaryBtn}
              style={{ ...btnStyle, background: '#059669' }}
              disabled={isPending}
              title="Créer une facture à partir de ce devis"
            >
              <Receipt size={16} strokeWidth={2} />
              <span>Convertir en facture</span>
            </button>
          }
          title="Convertir le devis en facture ?"
          description={
            <p>
              Une nouvelle facture <strong>brouillon</strong> sera créée avec les mêmes lignes. Vous pourrez la modifier avant validation.
            </p>
          }
          confirmLabel="Créer la facture"
          variant="primary"
          onConfirm={handleConvertirEnFacture}
        />
      )}

      {canMarkAccepted && (
        <ConfirmDialog
          trigger={
            <button
              className={styles.secondaryBtn}
              style={{ ...btnStyle, borderColor: '#059669', color: '#059669' }}
              disabled={isPending}
              title="Marquer comme accepté"
            >
              <Check size={16} strokeWidth={2.2} />
              <span>Marquer accepté</span>
            </button>
          }
          title="Marquer ce devis comme accepté ?"
          description={
            <p>
              À utiliser quand la vente est fermée (téléphone, e-mail, etc.). Le statut sera mis à jour côté OptiPro.
            </p>
          }
          confirmLabel="Marquer accepté"
          variant="primary"
          onConfirm={handleMarkAccepted}
        />
      )}

      {canArchive && (
        <button
          className={styles.secondaryBtn}
          style={{ ...btnStyle, color: '#6B7280' }}
          onClick={handleArchive}
          disabled={isPending}
        >
          <Archive size={16} strokeWidth={2} />
          <span>{isPending ? 'En cours…' : 'Archiver'}</span>
        </button>
      )}
    </div>
  )
}
