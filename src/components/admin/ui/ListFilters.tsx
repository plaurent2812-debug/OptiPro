'use client'

import { useCallback, useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './ListFilters.module.css'

interface ListFiltersProps {
  /** Placeholder du champ recherche (ex: "Rechercher un client…") */
  searchPlaceholder: string
  /** Options du filtre statut. Si absent, le select est masqué. */
  statusOptions?: Array<{ value: string; label: string }>
  /** Texte du bouton de reset si tu veux le forcer (par défaut affiché seulement si filtres actifs) */
}

/**
 * Filtres de liste back-office : champ recherche débouncé (250 ms) + select statut.
 * Les filtres sont stockés dans les searchParams de l'URL (?q=… &statut=… &page=…).
 * Le Server Component parent lit ces params pour filtrer la requête Supabase.
 *
 * Quand l'utilisateur tape ou change le statut, on reset la page à 1.
 */
export default function ListFilters({ searchPlaceholder, statusOptions }: ListFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [, startTransition] = useTransition()

  const currentQ = searchParams.get('q') ?? ''
  const currentStatut = searchParams.get('statut') ?? ''
  const [q, setQ] = useState(currentQ)

  // Sync local state si l'URL change depuis l'extérieur (back/forward)
  useEffect(() => {
    setQ(currentQ)
  }, [currentQ])

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      // Reset page sur tout changement de filtre
      params.delete('page')
      const queryString = params.toString()
      startTransition(() => {
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false })
      })
    },
    [router, pathname, searchParams, startTransition]
  )

  // Debounce recherche (250 ms)
  useEffect(() => {
    if (q === currentQ) return
    const t = setTimeout(() => updateParam('q', q), 250)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q])

  const handleReset = () => {
    setQ('')
    startTransition(() => {
      router.replace(pathname, { scroll: false })
    })
  }

  const hasActiveFilters = currentQ !== '' || currentStatut !== ''

  return (
    <div className={styles.bar}>
      <div className={styles.searchWrap}>
        <svg
          className={styles.searchIcon}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={searchPlaceholder}
          className={styles.searchInput}
          aria-label={searchPlaceholder}
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ('')}
            className={styles.clearBtn}
            aria-label="Effacer la recherche"
          >
            ×
          </button>
        )}
      </div>

      {statusOptions && statusOptions.length > 0 && (
        <select
          value={currentStatut}
          onChange={(e) => updateParam('statut', e.target.value)}
          className={styles.select}
          aria-label="Filtrer par statut"
        >
          <option value="">Tous les statuts</option>
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {hasActiveFilters && (
        <button type="button" onClick={handleReset} className={styles.resetBtn}>
          Réinitialiser
        </button>
      )}
    </div>
  )
}
