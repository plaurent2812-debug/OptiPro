import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import styles from '../clients/clients.module.css'
import { FACTURE_STATUT_LABELS, formatMontant, formatDate } from '@/lib/utils'
import ListFilters from '@/components/admin/ui/ListFilters'
import Pagination from '@/components/admin/ui/Pagination'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 20

type SearchParams = Promise<{ q?: string; statut?: string; page?: string }>

// On expose "en_retard" en option de filtre même si le statut est calculé côté front
const FACTURE_FILTER_OPTIONS: Array<{ value: string; label: string }> = [
  { value: 'brouillon', label: 'Brouillon' },
  { value: 'envoyee', label: 'Envoyée' },
  { value: 'en_retard', label: 'En retard' },
  { value: 'payee', label: 'Payée' },
  { value: 'annulee', label: 'Annulée' },
]

export default async function FacturesPage({ searchParams }: { searchParams: SearchParams }) {
  const supabase = await createClient()
  const params = await searchParams
  const q = (params.q ?? '').trim()
  const statut = (params.statut ?? '').trim()
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1)
  const today = new Date().toISOString().split('T')[0]

  let query = supabase
    .from('factures')
    .select(
      `
      *,
      clients ( prenom, nom, entreprise )
    `,
      { count: 'exact' }
    )
    .order('created_at', { ascending: false })

  // Filtre statut — cas spécial "en_retard" qui n'est pas un vrai statut DB
  if (statut === 'en_retard') {
    query = query
      .in('statut', ['envoyee'])
      .lt('date_echeance', today)
  } else if (statut) {
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
      query = query.or(`numero.ilike.%${escaped}%,client_id.in.(${clientIds.join(',')})`)
    } else {
      query = query.ilike('numero', `%${escaped}%`)
    }
  }

  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1
  const { data: facturesList, error, count } = await query.range(from, to)

  const hasActiveFilters = q !== '' || statut !== ''
  const total = count ?? 0

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Factures</h1>
          <p className={styles.subtitle}>Suivez vos encaissements et gérez les relances</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link href="/admin/factures/new" className={styles.primaryBtn}>
            + Nouvelle facture
          </Link>
        </div>
      </div>

      <ListFilters
        searchPlaceholder="Rechercher (numéro de facture ou nom client)…"
        statusOptions={FACTURE_FILTER_OPTIONS}
      />

      {error && (
        <div className={styles.errorBanner}>
          <p>Une erreur est survenue lors du chargement des factures.</p>
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
                <th>Émise le</th>
                <th>Net à payer</th>
                <th>Statut</th>
                <th className={styles.actionsBox}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {facturesList?.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '3rem' }}>
                    <div className={styles.emptyState} style={{ padding: 0 }}>
                      <p>{hasActiveFilters ? 'Aucune facture ne correspond à vos filtres.' : 'Aucune facture émise.'}</p>
                      {!hasActiveFilters && (
                        <small style={{ color: '#6B7280' }}>
                          Pour générer une facture, convertissez un devis accepté ou facturez un abonnement.
                        </small>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                facturesList?.map((facture) => {
                  const isLate =
                    facture.statut !== 'payee' &&
                    facture.statut !== 'annulee' &&
                    facture.date_echeance &&
                    facture.date_echeance < today

                  return (
                    <tr key={facture.id}>
                      <td>
                        <strong>{facture.numero}</strong>
                      </td>
                      <td>
                        {facture.clients ? (
                          <>
                            <div>
                              {facture.clients.prenom} {facture.clients.nom}
                            </div>
                            {facture.clients.entreprise && (
                              <small style={{ color: '#6B7280' }}>({facture.clients.entreprise})</small>
                            )}
                          </>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>{formatDate(facture.date_emission)}</td>
                      <td style={{ fontWeight: 600 }}>{formatMontant(facture.montant_ht || 0)}</td>
                      <td>
                        <span
                          className={`${styles.badge} ${
                            isLate ? styles['badge--en_retard'] : styles[`badge--${facture.statut}`]
                          }`}
                        >
                          {isLate ? 'En retard' : FACTURE_STATUT_LABELS[facture.statut] || facture.statut}
                        </span>
                      </td>
                      <td className={styles.actionsBox}>
                        <Link href={`/admin/factures/${facture.id}`} className={styles.actionBtn}>
                          Voir la facture
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
        basePath="/admin/factures"
        searchParams={{ q: q || undefined, statut: statut || undefined }}
      />
    </div>
  )
}
