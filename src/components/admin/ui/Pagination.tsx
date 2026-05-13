import Link from 'next/link'
import styles from './Pagination.module.css'

interface PaginationProps {
  /** Page courante (1-indexed) */
  page: number
  /** Nombre total d'entités */
  total: number
  /** Taille de page */
  pageSize: number
  /** Chemin de base (ex: "/admin/clients") */
  basePath: string
  /** SearchParams à conserver (q, statut, etc.) — sans `page` */
  searchParams: Record<string, string | undefined>
}

/**
 * Pagination URL-based. Server Component (pas d'état client nécessaire).
 * Fenêtre glissante de 5 pages autour de la page courante avec ellipses.
 */
export default function Pagination({ page, total, pageSize, basePath, searchParams }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  if (totalPages <= 1) return null

  const buildHref = (targetPage: number) => {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(searchParams)) {
      if (value && key !== 'page') params.set(key, value)
    }
    if (targetPage > 1) params.set('page', String(targetPage))
    const query = params.toString()
    return query ? `${basePath}?${query}` : basePath
  }

  // Fenêtre glissante : max 5 pages visibles + ellipses si besoin
  const pages: Array<number | 'ellipsis'> = []
  const window = 2 // pages avant/après la courante
  const showFirst = page - window > 1
  const showLast = page + window < totalPages

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - window && i <= page + window)) {
      pages.push(i)
    }
  }

  // Insertion des ellipses
  const withEllipses: Array<number | 'ellipsis'> = []
  for (let i = 0; i < pages.length; i++) {
    if (i > 0 && (pages[i] as number) - (pages[i - 1] as number) > 1) {
      withEllipses.push('ellipsis')
    }
    withEllipses.push(pages[i])
  }

  const firstItem = (page - 1) * pageSize + 1
  const lastItem = Math.min(page * pageSize, total)

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <p className={styles.count}>
        {firstItem.toLocaleString('fr-FR')}–{lastItem.toLocaleString('fr-FR')} sur{' '}
        <strong>{total.toLocaleString('fr-FR')}</strong>
      </p>

      <ul className={styles.list}>
        <li>
          {page > 1 ? (
            <Link href={buildHref(page - 1)} className={styles.pageBtn} aria-label="Page précédente">
              ← Précédent
            </Link>
          ) : (
            <span className={`${styles.pageBtn} ${styles.disabled}`}>← Précédent</span>
          )}
        </li>

        {withEllipses.map((p, i) =>
          p === 'ellipsis' ? (
            <li key={`ellipsis-${i}`}>
              <span className={styles.ellipsis}>…</span>
            </li>
          ) : (
            <li key={p}>
              {p === page ? (
                <span className={`${styles.pageBtn} ${styles.current}`} aria-current="page">
                  {p}
                </span>
              ) : (
                <Link href={buildHref(p)} className={styles.pageBtn}>
                  {p}
                </Link>
              )}
            </li>
          )
        )}

        <li>
          {page < totalPages ? (
            <Link href={buildHref(page + 1)} className={styles.pageBtn} aria-label="Page suivante">
              Suivant →
            </Link>
          ) : (
            <span className={`${styles.pageBtn} ${styles.disabled}`}>Suivant →</span>
          )}
        </li>
      </ul>
    </nav>
  )
}
