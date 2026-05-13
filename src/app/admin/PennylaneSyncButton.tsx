'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { RefreshCw } from 'lucide-react'
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
      style={{
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
      }}
    >
      <RefreshCw
        size={16}
        strokeWidth={2}
        style={isPending ? { animation: 'spin 1s linear infinite' } : undefined}
      />
      <span>{isPending ? 'Synchronisation…' : 'Synchroniser Pennylane'}</span>
    </button>
  )
}
