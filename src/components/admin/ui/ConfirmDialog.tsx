'use client'

import { useState, type ReactNode } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styles from './ConfirmDialog.module.css'

interface ConfirmDialogProps {
  /** Élément déclencheur (bouton, lien, etc.) — rendu en asChild */
  trigger: ReactNode
  title: string
  description: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  /** Variant visuelle du bouton de confirmation */
  variant?: 'danger' | 'primary'
  /** Callback async — le dialog reste ouvert pendant l'exécution */
  onConfirm: () => Promise<void> | void
}

export default function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  variant = 'danger',
  onConfirm,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(false)

  const handleConfirm = async () => {
    setPending(true)
    try {
      await onConfirm()
      setOpen(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>{title}</AlertDialog.Title>
          <AlertDialog.Description asChild>
            <div className={styles.description}>{description}</div>
          </AlertDialog.Description>
          <div className={styles.actions}>
            <AlertDialog.Cancel asChild>
              <button type="button" className={styles.cancelBtn} disabled={pending}>
                {cancelLabel}
              </button>
            </AlertDialog.Cancel>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={pending}
              className={variant === 'danger' ? styles.confirmDanger : styles.confirmPrimary}
            >
              {pending ? '…' : confirmLabel}
            </button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
