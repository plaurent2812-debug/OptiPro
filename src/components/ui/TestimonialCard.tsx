import Image from 'next/image';
import type { Testimonial } from '@/data/testimonials';

interface Props {
  testimonial: Testimonial;
  variant?: 'full' | 'compact';
}

export default function TestimonialCard({ testimonial: t, variant = 'full' }: Props) {
  const fullName = t.lastName ? `${t.firstName} ${t.lastName}` : t.firstName;

  if (variant === 'compact') {
    return (
      <article style={{
        padding: '1.75rem',
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <div aria-label={`Note : ${t.rating} sur 5`} style={{ display: 'flex', gap: '0.15rem', color: 'var(--accent)' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true" style={{ fontSize: '1.1rem' }}>
              {i < t.rating ? '★' : '☆'}
            </span>
          ))}
        </div>
        <p style={{ margin: 0, color: 'var(--primary)', lineHeight: 1.55, fontWeight: 500, fontSize: '1.05rem' }}>
          « {t.shortQuote} »
        </p>
        <footer style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: 'auto' }}>
          {t.photo && (
            <Image
              src={t.photo}
              alt={fullName}
              width={48}
              height={48}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          )}
          <div>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>
              {fullName}
            </p>
            <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.85rem' }}>
              {t.profession}{t.city ? ` · ${t.city}` : ''}
            </p>
          </div>
        </footer>
      </article>
    );
  }

  return (
    <article style={{
      padding: '2.25rem',
      background: 'var(--background)',
      border: '1px solid var(--border)',
      borderRadius: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    }}>
      {/* En-tête : étoiles + pack + dates */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div aria-label={`Note : ${t.rating} sur 5`} style={{ display: 'flex', gap: '0.15rem', color: 'var(--accent)' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true" style={{ fontSize: '1.3rem' }}>
              {i < t.rating ? '★' : '☆'}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{
            padding: '0.25rem 0.75rem',
            background: 'rgba(249, 115, 22, 0.08)',
            border: '1px solid rgba(249, 115, 22, 0.2)',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--accent)',
          }}>
            Pack {t.pack}
          </span>
          {t.verifiedReview && (
            <span style={{
              padding: '0.25rem 0.75rem',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#16a34a',
            }}>
              ✓ Avis Google vérifié
            </span>
          )}
        </div>
      </header>

      {/* Citation courte (mise en avant) */}
      <blockquote style={{
        margin: 0,
        padding: 0,
        fontSize: '1.15rem',
        lineHeight: 1.55,
        fontWeight: 600,
        color: 'var(--primary)',
      }}>
        « {t.shortQuote} »
      </blockquote>

      {/* Texte complet */}
      <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
        {t.fullText}
      </p>

      {/* Métriques chiffrées */}
      {t.metrics && t.metrics.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${t.metrics.length}, 1fr)`,
          gap: '0.75rem',
          padding: '1rem',
          background: 'rgba(249, 115, 22, 0.04)',
          borderRadius: '0.75rem',
        }}>
          {t.metrics.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1.1 }}>
                {m.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--secondary)', marginTop: '0.25rem' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Signature client */}
      <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
        {t.photo && (
          <Image
            src={t.photo}
            alt={fullName}
            width={56}
            height={56}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <div>
          <p style={{ margin: 0, fontWeight: 700, color: 'var(--primary)' }}>
            {fullName}
          </p>
          <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.9rem' }}>
            {t.profession}
            {t.company && ` · ${t.company}`}
          </p>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.85rem' }}>
            {t.city} · Client OptiPro depuis {t.collaborationStart}
          </p>
        </div>
      </footer>
    </article>
  );
}
