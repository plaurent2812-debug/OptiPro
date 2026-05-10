// src/components/ui/PricingCard.tsx
import Link from 'next/link';
import type { PiloteForfait } from '@/data/pricing';
import { formatPrice } from '@/data/pricing';

interface Props {
  forfait: PiloteForfait;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PricingCard({
  forfait,
  ctaHref = '/contact',
  ctaLabel = 'Réserver mon appel',
}: Props) {
  const isRecommended = forfait.recommended;

  return (
    <article style={{
      position: 'relative',
      marginTop: isRecommended ? '0.85rem' : 0,
      padding: '2rem 1.75rem',
      background: 'var(--background)',
      border: isRecommended ? '2px solid var(--accent)' : '1px solid var(--border)',
      borderRadius: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      boxShadow: isRecommended ? '0 8px 32px var(--accent-light)' : 'none',
    }}>
      {isRecommended && (
        <span style={{
          position: 'absolute',
          top: '-0.85rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--accent)',
          color: 'var(--on-accent)',
          padding: '0.3rem 0.85rem',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>Recommandé</span>
      )}

      <header>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{forfait.name}</h3>
        <p style={{ margin: '0.5rem 0 0', color: 'var(--secondary)', fontSize: '0.9rem' }}>
          {forfait.cible}
        </p>
      </header>

      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
          {formatPrice(forfait.price)}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginTop: '0.25rem' }}>
          HT par mois
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li style={{ fontSize: '0.9rem' }}>✓ Jusqu&apos;à <strong>{forfait.volumeDocs} documents/mois</strong></li>
        <li style={{ fontSize: '0.9rem' }}>✓ Jusqu&apos;à <strong>{forfait.volumeFrais} frais/mois</strong></li>
        <li style={{ fontSize: '0.9rem' }}>✓ 1 société</li>
        <li style={{ fontSize: '0.9rem' }}>✓ Tout l&apos;admin opérationnel inclus</li>
      </ul>

      <Link href={ctaHref} style={{
        display: 'block',
        textAlign: 'center',
        padding: '0.85rem 1.25rem',
        background: isRecommended ? 'var(--accent)' : 'var(--primary)',
        color: isRecommended ? 'var(--on-accent)' : 'var(--on-primary)',
        borderRadius: '0.75rem',
        fontWeight: 600,
        textDecoration: 'none',
        fontSize: '0.95rem',
      }}>
        {ctaLabel}
      </Link>
    </article>
  );
}
