import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Témoignages — OptiPro' },
  description: 'Premiers témoignages clients en cours de signature. Le programme Fondateur démarre, les premiers retours seront publiés à partir du M3.',
  alternates: { canonical: '/temoignages' },
  robots: { index: true, follow: true },
};

export default function TemoignagesPage() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Témoignages clients
        </h1>

        <div style={{
          padding: '2rem 2rem 2.5rem',
          background: 'rgba(249, 115, 22, 0.06)',
          border: '1px solid rgba(249, 115, 22, 0.2)',
          borderRadius: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--primary)', lineHeight: 1.6, margin: '0 0 1.25rem', fontWeight: 600 }}>
            Premiers Fondateurs en cours de signature.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
            J&apos;ouvre 3 places Fondateur sur le programme OptiPro Pilote. Les premiers témoignages écrits seront publiés à partir du M3 du premier Fondateur (vers août 2026), puis les vidéos à partir du M6.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
            Plutôt qu&apos;inventer des témoignages bidons ou recopier des avis génériques, je préfère cette page vide pour le moment. Elle se remplira avec de vrais retours clients vérifiés.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <Link href="/programme-fondateur" style={{
            display: 'inline-block',
            padding: '0.95rem 2rem',
            background: 'var(--accent)',
            color: 'var(--on-accent)',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
          }}>
            Voir le programme Fondateur (3 places)
          </Link>
          <Link href="/" style={{
            color: 'var(--secondary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            marginTop: '0.75rem',
          }}>
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  );
}
