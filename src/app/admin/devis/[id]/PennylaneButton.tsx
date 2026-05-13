'use client'

import { useTransition, useState } from 'react'
import { toast } from 'sonner'
import { Send, Check, Loader2 } from 'lucide-react'
import { pushDevisToPennylaneAction } from '../actions'
import styles from '../../clients/clients.module.css'

export default function PennylaneButton({ devisId }: { devisId: string }) {
  const [isPending, startTransition] = useTransition()
  const [done, setDone] = useState(false)

  const handlePush = () => {
    startTransition(async () => {
      const result = await pushDevisToPennylaneAction(devisId)
      if (result?.error) {
        toast.error(result.error)
      } else if (result?.success) {
        toast.success(result.message || 'Devis généré via Pennylane')
        setDone(true)
      }
    })
  }

  return (
    <button
      type="button"
      className={styles.primaryBtn}
      style={{
        marginTop: '1rem',
        background: isPending || done ? '#9CA3AF' : '#f97316',
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
      onClick={handlePush}
      disabled={isPending || done}
    >
      {isPending ? (
        <Loader2 size={16} strokeWidth={2} style={{ animation: 'spin 1s linear infinite' }} />
      ) : done ? (
        <Check size={16} strokeWidth={2.2} />
      ) : (
        <Send size={16} strokeWidth={2} />
      )}
      <span>{isPending ? 'Génération…' : done ? 'Devis généré' : 'Générer via API Partenaire'}</span>
    </button>
  )
}
