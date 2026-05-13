'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { syncAllFromPennylaneAction } from './sync-actions'
import styles from './clients/clients.module.css'

export default function PennylaneSyncButton() {
  const [isPending, startTransition] = useTransition()

  const handleSync = () => {
    startTransition(async () => {
      const result = await syncAllFromPennylaneAction()
      if (result?.error) {
        toast.error(result.error)
      } else {
        toast.success(result.message || 'Synchronisation terminée')
      }
    })
  }

  return (
    <button
      className={styles.secondaryBtn}
      onClick={handleSync}
      disabled={isPending}
      style={{ whiteSpace: 'nowrap' }}
    >
      {isPending ? '⏳ Synchronisation…' : '↻ Synchroniser Pennylane'}
    </button>
  )
}
