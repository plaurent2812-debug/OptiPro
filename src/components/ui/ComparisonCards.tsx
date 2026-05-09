// src/components/ui/ComparisonCards.tsx
import { COMPARISON_CARDS } from '@/data/comparison';

export default function ComparisonCards() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      {COMPARISON_CARDS.map((card) => (
        <article key={card.vs} style={{
          padding: '1.75rem',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
          background: 'var(--background)',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 1rem', color: 'var(--primary)' }}>
            vs {card.vs}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)', marginBottom: '0.35rem' }}>Eux</div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.55 }}>{card.eux}</p>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', marginBottom: '0.35rem' }}>Moi</div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.55, fontWeight: 500 }}>{card.moi}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
