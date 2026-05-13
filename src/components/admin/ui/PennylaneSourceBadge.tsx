import { ExternalLink, ShieldCheck } from 'lucide-react'

interface PennylaneSourceBadgeProps {
  /** URL UI Pennylane vers la fiche concernée (devis ou facture). */
  pennylaneUrl: string
  /** ID Pennylane, utilisé pour différencier "lié" vs "pas encore lié". */
  pennylaneId: string | null | undefined
  /** Type d'entité, pour le wording. */
  entityType: 'devis' | 'facture'
}

/**
 * Petit bandeau discret affiché en haut des fiches détail devis/facture.
 * Rappelle que Pennylane reste la source de vérité (PDF, envoi, signature,
 * conformité Factur-X / PDP 2026-2027) et propose un raccourci vers la fiche
 * Pennylane si elle est déjà synchronisée.
 */
export default function PennylaneSourceBadge({
  pennylaneUrl,
  pennylaneId,
  entityType,
}: PennylaneSourceBadgeProps) {
  const linked = Boolean(pennylaneId)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        padding: '0.75rem 1rem',
        marginBottom: '1.5rem',
        background: linked ? '#f0f9ff' : '#fffbeb',
        border: `1px solid ${linked ? '#bae6fd' : '#fde68a'}`,
        borderRadius: '10px',
        fontSize: '0.88rem',
        color: linked ? '#075985' : '#92400e',
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: '1 1 auto' }}>
        <ShieldCheck size={18} strokeWidth={2} style={{ flexShrink: 0 }} />
        <p style={{ margin: 0 }}>
          <strong>Pennylane est la source de vérité</strong> pour le PDF, l&apos;envoi, la
          signature et la conformité Factur-X.{' '}
          {linked
            ? `Ce ${entityType} est synchronisé — toute modification définitive se fait depuis Pennylane.`
            : `Ce ${entityType} n'est pas encore synchronisé. Envoyez-le vers Pennylane pour générer le PDF officiel.`}
        </p>
      </div>
      {linked && (
        <a
          href={pennylaneUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.4rem 0.75rem',
            background: '#ffffff',
            border: '1px solid #bae6fd',
            borderRadius: '6px',
            color: '#075985',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.82rem',
            whiteSpace: 'nowrap',
          }}
        >
          <ExternalLink size={14} strokeWidth={2} />
          <span>Ouvrir dans Pennylane</span>
        </a>
      )}
    </div>
  )
}
