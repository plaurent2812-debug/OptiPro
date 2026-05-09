// src/components/ui/MockupTableauDeBord.tsx

export default function MockupTableauDeBord() {
  return (
    <div className="mockup-grid" style={{
      display: 'grid',
      gridTemplateColumns: '0.6fr 1fr',
      gap: '2rem',
      alignItems: 'center',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Mobile mockup */}
      <div aria-label="Aperçu mobile du tableau de bord" style={{
        width: '240px',
        margin: '0 auto',
        borderRadius: '24px',
        background: '#0f172a',
        padding: '12px 10px',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25)',
      }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CA encaissé</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>12 450 €</div>
            <div style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 600 }}>↑ +18% vs mois dernier</div>
          </div>
          <div style={{ height: '1px', background: '#e2e8f0' }} />
          <div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Factures à relancer</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#dc2626' }}>3 200 €</div>
          </div>
          <div style={{
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '0.5rem',
            padding: '0.5rem 0.65rem',
            fontSize: '0.7rem',
            color: '#9a3412',
            fontWeight: 600,
          }}>🎉 Devis Dupont signé hier</div>
        </div>
      </div>

      {/* Desktop mockup */}
      <div aria-label="Aperçu desktop du tableau de bord" style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>Vue d&apos;ensemble — Mai 2026</strong>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Mis à jour il y a 2 min</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { label: 'CA encaissé', value: '12 450 €', accent: '#16a34a' },
            { label: 'À relancer', value: '3 200 €', accent: '#dc2626' },
            { label: 'Devis ouverts', value: '4', accent: '#0ea5e9' },
            { label: 'Trésorerie', value: '8 230 €', accent: '#0f172a' },
          ].map((kpi) => (
            <div key={kpi.label} style={{
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '0.5rem',
              borderTop: `3px solid ${kpi.accent}`,
            }}>
              <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase' }}>{kpi.label}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '0.2rem' }}>{kpi.value}</div>
            </div>
          ))}
        </div>
        <div style={{
          height: '90px',
          background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.08), rgba(249, 115, 22, 0))',
          border: '1px dashed #fed7aa',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9a3412',
          fontSize: '0.8rem',
        }}>📈 CA des 6 derniers mois</div>
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Prochains événements</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#0f172a' }}>
            <li>• RDV mardi 14h — M. Martin (devis chantier)</li>
            <li>• Échéance URSSAF — 15 mai</li>
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .mockup-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
