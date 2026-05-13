import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import styles from '../clients/clients.module.css' // On réutilise les styles pour rester cohérent
import { DEVIS_STATUT_LABELS, formatMontant, formatDate } from '@/lib/utils'
import ListFilters from '@/components/admin/ui/ListFilters'
import Pagination from '@/components/admin/ui/Pagination'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 20

type SearchParams = Promise<{ q?: string; statut?: string; page?: string }>

export default async function DevisPage({ searchParams }: { searchParams: SearchParams }) {
  const supabase = await createClient()
  const params = await searchParams
  const q = (params.q ?? '').trim()
  const statut = (params.statut ?? '').trim()
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1)

  let query = supabase
    .from('devis')
    .select(
      `
      *,
      clients ( prenom, nom, entreprise )
    `,
      { count: 'exact' }
    )
    .order('created_at', { ascending: false })

  if (statut) {
    query = query.eq('statut', statut)
  }

  if (q) {
    const escaped = q.replace(/[%_]/g, '\\$&')
    // 1. recherche sur le numéro de devis directement
    // 2. recherche sur les clients qui matchent → on récupère leurs IDs et on filtre
    const { data: clientsMatch } = await supabase
      .from('clients')
      .select('id')
      .or(`nom.ilike.%${escaped}%,prenom.ilike.%${escaped}%,entreprise.ilike.%${escaped}%`)

    const clientIds = (clientsMatch ?? []).map((c) => c.id)
    if (clientIds.length > 0) {
      query = query.or(`numero.ilike.%${escaped}%,client_id.in.(${clientIds.join(',')})`)
    } else {
      query = query.ilike('numero', `%${escaped}%`)
    }
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1
  const { data: devisList, error, count } = await query.range(from, to)

  const hasActiveFilters = q !== '' || statut !== ''
  const total = count ?? 0

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Devis</h1>
          <p className={styles.subtitle}>Supervisez l&apos;ensemble de vos propositions commerciales</p>
        </div>
        <Link href="/admin/devis/new" className={styles.primaryBtn}>
          <span className={styles.icon}>+</span> Nouveau Devis
        </Link>
      </div>

      <ListFilters
        searchPlaceholder="Rechercher (numéro de devis ou nom client)…"
        statusOptions={Object.entries(DEVIS_STATUT_LABELS).map(([value, label]) => ({ value, label }))}
      />

      {error && (
        <div className={styles.errorBanner}>
          <p>Une erreur est survenue lors du chargement des devis.</p>
          <small>{error.message}</small>
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Numéro</th>
                <th>Client</th>
                <th>Date d&apos;émission</th>
                <th>Montant HT</th>
                <th>Statut</th>
                <th className={styles.actionsBox}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {devisList?.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '3rem' }}>
                    <div className={styles.emptyState} style={{ padding: 0 }}>
                      <p>
                        {hasActiveFilters
                          ? 'Aucun devis ne correspond à vos filtres.'
                          : 'Aucun devis créé pour le moment.'}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                devisList?.map((devis) => (
                  <tr key={devis.id}>
                    <td>
                      <strong>{devis.numero}</strong>
                    </td>
                    <td>
                      {devis.clients ? (
                        <>
                          <div>
                            {devis.clients.prenom} {devis.clients.nom}
                          </div>
                          {devis.clients.entreprise && (
                            <small style={{ color: '#6B7280' }}>({devis.clients.entreprise})</small>
                          )}
                        </>
                      ) : (
                        <span style={{ color: '#9CA3AF' }}>Client supprimé</span>
                      )}
                    </td>
                    <td>{formatDate(devis.date_emission)}</td>
                    <td style={{ fontWeight: 600 }}>{formatMontant(devis.montant_ht || 0)}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[`badge--${devis.statut}`]}`}>
                        {DEVIS_STATUT_LABELS[devis.statut] || devis.statut}
                      </span>
                    </td>
                    <td className={styles.actionsBox}>
                      <Link href={`/admin/devis/${devis.id}`} className={styles.actionBtn}>
                        Détails
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={page}
        total={total}
        pageSize={PAGE_SIZE}
        basePath="/admin/devis"
        searchParams={{ q: q || undefined, statut: statut || undefined }}
      />
    </div>
  )
}
