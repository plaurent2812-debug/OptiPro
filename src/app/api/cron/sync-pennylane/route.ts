import { NextResponse, type NextRequest } from 'next/server'
import { performPennylaneSyncForCron } from '@/app/admin/sync-actions'
import { formatSyncMessage } from '@/app/admin/sync-helpers'
import { revalidatePath } from 'next/cache'

/**
 * Cron Vercel — synchronisation horaire OptiPro ← Pennylane.
 *
 * Remplace les webhooks Pennylane (non disponibles côté V2 pour devis/factures :
 * Pennylane n'expose qu'un seul event `dms_file.created` en beta).
 *
 * Logique :
 * - Pull les statuts des devis OptiPro qui ont un pennylane_quote_id
 * - Pull TOUTES les factures Pennylane et upsert dans Supabase
 *   (matching client_id + quote_id, import des nouvelles factures)
 * - Met à jour les statuts qui ont changé côté Pennylane
 *
 * Sécurité :
 * - Vercel Cron envoie `Authorization: Bearer <CRON_SECRET>` (configurable).
 *   En l'absence de secret, on accepte (utile en local).
 * - Utilise le service_role Supabase (createAdminClient) côté serveur seulement.
 *
 * Schedule : voir vercel.json (toutes les heures à HH:00 UTC).
 */
export async function GET(req: NextRequest) {
  const expectedSecret = process.env.CRON_SECRET
  if (expectedSecret) {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${expectedSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const startedAt = Date.now()

  try {
    const results = await performPennylaneSyncForCron()
    const durationMs = Date.now() - startedAt
    const message = formatSyncMessage(results)

    // Logs visibles dans Vercel → Crons → Logs
    console.log(`[cron/sync-pennylane] ${message} (${durationMs} ms)`)
    if (results.errors.length > 0) {
      console.warn(`[cron/sync-pennylane] erreurs:`, results.errors.slice(0, 10))
    }

    // Revalide les pages admin pour que le prochain hit affiche les nouveaux statuts
    revalidatePath('/admin')
    revalidatePath('/admin/devis')
    revalidatePath('/admin/factures')

    return NextResponse.json({
      ok: true,
      message,
      stats: {
        devis_updated: results.devis,
        factures_updated: results.factures,
        factures_imported: results.facturesNouvelles,
        errors: results.errors.length,
      },
      duration_ms: durationMs,
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Erreur inconnue'
    console.error('[cron/sync-pennylane] crash:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
