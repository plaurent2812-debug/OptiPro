import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import styles from './clients.module.css'
import { CLIENT_STATUT_LABELS, formatDate } from '@/lib/utils'
import ListFilters from '@/components/admin/ui/ListFilters'
import Pagination from '@/components/admin/ui/Pagination'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 20

type SearchParams = Promise<{ q?: string; statut?: string; page?: string }>

export default async function ClientsPage({ searchParams }: { searchParams: SearchParams }) {
  const supabase = await createClient()
  const params = await searchParams
  const q = (params.q ?? '').trim()
  const statut = (params.statut ?? '').trim()
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1)

  let query = supabase
    .from('clients')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })

  if (q) {
    // Recherche sur nom, prenom, entreprise, email
    const escaped = q.replace(/[%_]/g, '\\$&')
    query = query.or(
      `nom.ilike.%${escaped}%,prenom.ilike.%${escaped}%,entreprise.ilike.%${escaped}%,email.ilike.%${escaped}%`
    )
  }

  if (statut) {
    query = query.eq('statut', statut)
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1
  const { data: clients, error, count } = await query.range(from, to)

  const hasActiveFilters = q !== '' || statut !== ''
  const total = count ?? 0

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Clients</h1>
          <p className={styles.subtitle}>Gérez votre base de contacts et prospects</p>
        </div>
        <Link href="/admin/clients/new" className={styles.primaryBtn}>
          <span className={styles.icon}>+</span> Nouveau Client
        </Link>
      </div>

      <ListFilters
        searchPlaceholder="Rechercher un client (nom, entreprise, email)…"
        statusOptions={Object.entries(CLIENT_STATUT_LABELS).map(([value, label]) => ({ value, label }))}
      />

      {error ? (
        <div className={styles.errorBanner}>
          <p>Une erreur est survenue lors du chargement des clients.</p>
          <small>{error.message}</small>
        </div>
      ) : (
        <div className={styles.card}>
          {clients?.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>👤</div>
              <h3>{hasActiveFilters ? 'Aucun client ne correspond à vos filtres' : 'Aucun client'}</h3>
              <p>
                {hasActiveFilters
                  ? 'Essayez d\'élargir votre recherche ou réinitialisez les filtres.'
                  : 'Commencez par ajouter votre premier prospect ou client.'}
              </p>
            </div>
          ) : (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Contact</th>
                    <th>Ajouté le</th>
                    <th>Statut</th>
                    <th className={styles.actionsBox}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients?.map((client) => (
                    <tr key={client.id}>
                      <td>
                        <div className={styles.clientName}>
                          {client.prenom} {client.nom}
                        </div>
                        {client.entreprise && <div className={styles.clientCompany}>{client.entreprise}</div>}
                      </td>
                      <td>
                        <div className={styles.contactInfo}>
                          {client.email && <a href={`mailto:${client.email}`}>{client.email}</a>}
                          {client.telephone && <span>{client.telephone}</span>}
                        </div>
                      </td>
                      <td>{formatDate(client.created_at)}</td>
                      <td>
                        <span className={`${styles.badge} ${styles[`badge--${client.statut}`]}`}>
                          {CLIENT_STATUT_LABELS[client.statut] || client.statut}
                        </span>
                      </td>
                      <td className={styles.actionsBox}>
                        <Link href={`/admin/clients/${client.id}`} className={styles.actionBtn}>
                          Voir la fiche
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <Pagination
        page={page}
        total={total}
        pageSize={PAGE_SIZE}
        basePath="/admin/clients"
        searchParams={{ q: q || undefined, statut: statut || undefined }}
      />
    </div>
  )
}
