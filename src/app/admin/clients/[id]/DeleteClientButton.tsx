'use client'

import { toast } from 'sonner'
import { deleteClientAction } from '../actions'
import ConfirmDialog from '@/components/admin/ui/ConfirmDialog'
import styles from '../clients.module.css'

export default function DeleteClientButton({ clientId, clientName }: { clientId: string; clientName?: string }) {
  const handleDelete = async () => {
    const r = await deleteClientAction(clientId)
    if (r?.error) {
      toast.error(r.error)
    } else {
      toast.success('Client supprimé')
    }
  }

  return (
    <ConfirmDialog
      trigger={
        <button
          type="button"
          className={styles.secondaryBtn}
          style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
          title="Supprimer ce client (impossible si des devis/factures sont liés)"
        >
          🗑 Supprimer
        </button>
      }
      title={clientName ? `Supprimer le client "${clientName}" ?` : 'Supprimer ce client ?'}
      description={
        <>
          <p>Cette action est <strong>irréversible</strong>.</p>
          <p>Si le client a des devis ou factures liés, la suppression sera refusée — vous devrez les supprimer ou les archiver d&apos;abord.</p>
        </>
      }
      confirmLabel="Supprimer définitivement"
      variant="danger"
      onConfirm={handleDelete}
    />
  )
}
