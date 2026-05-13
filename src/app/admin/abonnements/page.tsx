import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import styles from '../clients/clients.module.css'
import { ABONNEMENT_STATUT_LABELS, PERIODICITE_LABELS, formatMontant, formatDate } from '@/lib/utils'
import ListFilters from '@/components/admin/ui/ListFilters'
import Pagination from '@/components/admin/ui/Pagination'
import { AlertTriangle } from 'lucide-react'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 20

type SearchParams = Promise<{ q?: string; statut?: string; page?: string }>

export default async function AbonnementsPage({ searchParams }: { searchParams: SearchParams }) {
  const supabase = await createClient()
  const params = await searchParams
  const q = (params.q ?? '').trim()
  const statut = (params.statut ?? '').trim()
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1)

  let query = supabase
    .from('abonnements')
    .select(
      `
      *,
      clients ( prenom, nom, entreprise )
    `,
      { count: 'exact' }
    )
    .order('prochaine_facturation', { ascending: true, nullsFirst: false })

  if (statut) {
    query = query.eq('statut', statut)
  }

  if (q) {
    const escaped = q.replace(/[%_]/g, '\\$&')
    const { data: clientsMatch } = await supabase
      .from('clients')
      .select('id')
      .or(`nom.ilike.%${escaped}%,prenom.ilike.%${escaped}%,entreprise.ilike.%${escaped}%`)

    const clientIds = (clientsMatch ?? []).map((c) => c.id)
    if (clientIds.length > 0) {
      query = query.or(`nom.ilike.%${escaped}%,client_id.in.(${clientIds.join(',')})`)
    } else {
      query = query.ilike('nom', `%${escaped}%`)
    }
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1
  const { data: abonnements, error, count } = await query.range(from, to)

  const hasActiveFilters = q !== '' || statut !== ''
  const total = count ?? 0

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Abonnements & Contrats</h1>
          <p className={styles.subtitle}>Gérez les contrats de maintenance et les revenus récurrents</p>
        </div>
        <Link href="/admin/abonnements/new" className={styles.primaryBtn}>
          <span className={styles.icon}>+</span> Nouveau Contrat
        </Link>
      </div>

      <ListFilters
        searchPlaceholder="Rechercher (nom du contrat ou client)…"
        statusOptions={Object.entries(ABONNEMENT_STATUT_LABELS).map(([value, label]) => ({ value, label }))}
      />

      {error && (
        <div className={styles.errorBanner}>
          <p>Une erreur est survenue lors du chargement des abonnements.</p>
          <small>{error.message}</small>
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Contrat</th>
                <th>Client</th>
                <th>Montant /période</th>
                <th>Rythme</th>
                <th>Prochaine Facture</th>
                <th>Statut</th>
                <th className={styles.actionsBox}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {abonnements?.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '3rem' }}>
                    <div className={styles.emptyState} style={{ padding: 0 }}>
                      <p>
                        {hasActiveFilters
                          ? 'Aucun abonnement ne correspond à vos filtres.'
                          : 'Aucun abonnement ou contrat en cours.'}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                abonnements?.map((sub) => {
                  const today = new Date().toISOString().split('T')[0]
                  const isLate =
                    sub.prochaine_facturation && sub.prochaine_facturation <= today && sub.statut === 'actif'

                  return (
                    <tr key={sub.id}>
                      <td>
                        <strong>{sub.nom}</strong>
                      </td>
                      <td>
                        {sub.clients ? (
                          <>
                            {sub.clients.prenom} {sub.clients.nom}
                            <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>{sub.clients.entreprise}</div>
                          </>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td style={{ fontWeight: 600 }}>{formatMontant(sub.montant_mensuel_ht)}</td>
                      <td>{PERIODICITE_LABELS[sub.periodicite] || sub.periodicite}</td>
                      <td>
                        {sub.statut === 'actif' ? (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              color: isLate ? '#DC2626' : '#111827',
                              fontWeight: isLate ? 600 : 400,
                            }}
                          >
                            <span>{formatDate(sub.prochaine_facturation)}</span>
                            {isLate && <AlertTriangle size={14} strokeWidth={2.2} />}
                          </span>
                        ) : (
                          <span style={{ color: '#9CA3AF' }}>—</span>
                        )}
                      </td>
                      <td>
                        <span className={`${styles.badge} ${styles[`badge--${sub.statut}`]}`}>
                          {ABONNEMENT_STATUT_LABELS[sub.statut]}
                        </span>
                      </td>
                      <td className={styles.actionsBox}>
                        <Link href={`/admin/abonnements/${sub.id}`} className={styles.actionBtn}>
                          Gérer
                        </Link>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={page}
        total={total}
        pageSize={PAGE_SIZE}
        basePath="/admin/abonnements"
        searchParams={{ q: q || undefined, statut: statut || undefined }}
      />
    </div>
  )
}
