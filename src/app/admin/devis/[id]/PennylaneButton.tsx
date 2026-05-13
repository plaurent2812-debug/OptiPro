'use client'

import { useTransition, useState } from 'react'
import { toast } from 'sonner'
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
      style={{ marginTop: '1rem', background: isPending || done ? '#9CA3AF' : '#4F46E5', width: '100%' }}
      onClick={handlePush}
      disabled={isPending || done}
    >
      {isPending ? '⏳ Génération…' : done ? '✓ Devis généré' : 'Générer via API Partenaire'}
    </button>
  )
}
