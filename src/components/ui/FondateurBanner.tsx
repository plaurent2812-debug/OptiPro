// src/components/ui/FondateurBanner.tsx
import Link from 'next/link';

interface Props {
  variant?: 'inline' | 'sticky';
  href?: string;
}

export default function FondateurBanner({ variant = 'inline', href = '/contact?cible=fondateur' }: Props) {
  if (variant === 'sticky') {
    return (
      <div style={{
        background: 'linear-gradient(90deg, #c2410c, #b91c1c)',
        color: 'var(--on-accent)',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: 600,
      }}>
        <span aria-hidden="true">⚡</span> 3 places Fondateurs disponibles — tarif progressif sur 6 mois.{' '}
        <Link href={href} style={{ color: 'var(--on-accent)', textDecoration: 'underline' }}>En savoir plus →</Link>
      </div>
    );
  }

  return (
    <aside style={{
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(239, 68, 68, 0.08))',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      borderRadius: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--accent)',
        color: 'var(--on-accent)',
        padding: '0.25rem 0.75rem',
        borderRadius: '999px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
      }}>3 places · fermeture dès le 3e signé</div>
      <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
        Programme Fondateur — tarif progressif sur 6 mois
      </h3>
      <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
        Vous êtes parmi les 3 premiers à me rejoindre ? Vous bénéficiez d&apos;un tarif progressif (-50% les 3 premiers mois, -25% les 3 suivants) en échange d&apos;un témoignage et d&apos;autorisation de communication. Économie de ~3 400€ sur un Pilote 60.
      </p>
      <Link href={href} style={{
        display: 'inline-block',
        padding: '0.85rem 1.5rem',
        background: 'var(--primary)',
        color: 'var(--on-primary)',
        borderRadius: '0.75rem',
        textDecoration: 'none',
        fontWeight: 600,
        alignSelf: 'flex-start',
      }}>
        Candidater au programme Fondateur →
      </Link>
    </aside>
  );
}
