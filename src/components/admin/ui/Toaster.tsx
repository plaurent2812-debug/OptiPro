'use client'

import { Toaster as SonnerToaster } from 'sonner'

/**
 * Toaster global du back-office.
 * Monté une seule fois dans admin/layout.tsx.
 *
 * Usage côté Client Component :
 *   import { toast } from 'sonner'
 *   toast.success('Facture marquée payée')
 *   toast.error('Erreur de synchronisation')
 *   toast.promise(syncAction(), { loading: 'Synchronisation…', success: 'Sync OK', error: 'Erreur' })
 */
export default function AdminToaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        style: {
          fontFamily: 'var(--font-body, system-ui, sans-serif)',
          fontSize: '0.92rem',
        },
      }}
    />
  )
}
