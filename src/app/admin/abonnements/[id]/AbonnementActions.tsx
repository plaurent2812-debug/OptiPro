'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import {
  suspendreAbonnementAction,
  reactiverAbonnementAction,
  terminerAbonnementAction,
  deleteAbonnementAction,
} from '../actions'
import { genererFactureAbonnementAction } from '../../factures/actions'
import ConfirmDialog from '@/components/admin/ui/ConfirmDialog'
import styles from '../../clients/clients.module.css'

interface Props {
  abonnementId: string
  statut: string
}

export default function AbonnementActions({ abonnementId, statut }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleFacturer = async () => {
    const r = await genererFactureAbonnementAction(abonnementId)
    if (r?.error) {
      toast.error(r.error)
    } else if (r?.factureId) {
      toast.success('Facture générée — redirection…')
      router.push(`/admin/factures/${r.factureId}`)
    }
  }

  const handleSuspendre = async () => {
    const r = await suspendreAbonnementAction(abonnementId)
    if (r?.error) toast.error(r.error)
    else toast.success('Abonnement suspendu')
  }

  const handleTerminer = async () => {
    const r = await terminerAbonnementAction(abonnementId)
    if (r?.error) toast.error(r.error)
    else toast.success('Abonnement terminé')
  }

  const handleSupprimer = async () => {
    const r = await deleteAbonnementAction(abonnementId)
    if (r?.error) toast.error(r.error)
    else toast.success('Abonnement supprimé')
  }

  const handleReactiver = () => {
    startTransition(async () => {
      const r = await reactiverAbonnementAction(abonnementId)
      if (r?.error) toast.error(r.error)
      else toast.success('Abonnement réactivé')
    })
  }

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      {statut === 'actif' && (
        <>
          <ConfirmDialog
            trigger={
              <button
                type="button"
                className={styles.primaryBtn}
                style={{ background: '#059669' }}
                disabled={isPending}
              >
                💸 Facturer maintenant
              </button>
            }
            title="Générer une facture pour cet abonnement ?"
            description={<p>Une <strong>facture brouillon</strong> sera créée pour la période en cours. Vous pourrez la modifier avant validation.</p>}
            confirmLabel="Générer la facture"
            variant="primary"
            onConfirm={handleFacturer}
          />

          <ConfirmDialog
            trigger={
              <button
                type="button"
                className={styles.secondaryBtn}
                style={{ borderColor: '#F59E0B', color: '#F59E0B' }}
                disabled={isPending}
              >
                ⏸ Suspendre
              </button>
            }
            title="Suspendre cet abonnement ?"
            description={<p>Aucune facture ne sera générée tant que l&apos;abonnement est suspendu. Vous pourrez le réactiver à tout moment.</p>}
            confirmLabel="Suspendre"
            variant="primary"
            onConfirm={handleSuspendre}
          />

          <ConfirmDialog
            trigger={
              <button
                type="button"
                className={styles.secondaryBtn}
                style={{ borderColor: '#DC2626', color: '#DC2626' }}
                disabled={isPending}
              >
                ✕ Terminer
              </button>
            }
            title="Terminer cet abonnement ?"
            description={
              <>
                <p>L&apos;abonnement sortira de la liste des actifs.</p>
                <p>Vous pourrez le <strong>supprimer définitivement</strong> ensuite si besoin.</p>
              </>
            }
            confirmLabel="Terminer l'abonnement"
            variant="danger"
            onConfirm={handleTerminer}
          />
        </>
      )}

      {statut === 'suspendu' && (
        <button
          type="button"
          className={styles.primaryBtn}
          style={{ background: '#059669' }}
          disabled={isPending}
          onClick={handleReactiver}
        >
          {isPending ? '⏳…' : '▶ Réactiver'}
        </button>
      )}

      {statut === 'termine' && (
        <ConfirmDialog
          trigger={
            <button
              type="button"
              className={styles.secondaryBtn}
              style={{ color: '#DC2626' }}
              disabled={isPending}
            >
              🗑 Supprimer
            </button>
          }
          title="Supprimer définitivement cet abonnement ?"
          description={<p>Cette action est <strong>irréversible</strong>. Toutes les traces de l&apos;abonnement seront effacées (les factures déjà émises restent conservées).</p>}
          confirmLabel="Supprimer définitivement"
          variant="danger"
          onConfirm={handleSupprimer}
        />
      )}
    </div>
  )
}
