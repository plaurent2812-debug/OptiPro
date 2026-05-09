const AUTOMATISE = [
  'OCR tickets de caisse',
  'Saisie auto des frais',
  'Numérotation devis & factures',
  'Synchronisation Pennylane',
  'Relances factures programmées',
  'Export FEC mensuel',
  'Notifications (Telegram, Push)',
  'Dashboard temps réel',
];

const HUMAIN = [
  'Décisions ambiguës ou cas particuliers',
  'Relations clients sensibles',
  'Anticipation des problèmes',
  'Adaptation au cas par cas',
  'Conseils opérationnels',
  'Coordination avec vos prestataires',
  'Visios bilan toutes les 2 semaines',
];

export default function AutomatedVsHuman() {
  return (
    <div className="auto-vs-human" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      {/* AUTOMATISÉ (70%) */}
      <article style={{
        padding: '2rem',
        background: 'rgba(14, 165, 233, 0.06)',
        border: '1px solid rgba(14, 165, 233, 0.2)',
        borderRadius: '1rem',
      }}>
        <header style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)', fontWeight: 600, marginBottom: '0.35rem' }}>
            Automatisé
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0ea5e9', lineHeight: 1 }}>
            70%
          </div>
        </header>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {AUTOMATISE.map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--secondary)', lineHeight: 1.5 }}>
              <span aria-hidden="true" style={{ color: '#0ea5e9', fontWeight: 700 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* HUMAIN (30%) */}
      <article style={{
        padding: '2rem',
        background: 'rgba(249, 115, 22, 0.06)',
        border: '1px solid rgba(249, 115, 22, 0.2)',
        borderRadius: '1rem',
      }}>
        <header style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)', fontWeight: 600, marginBottom: '0.35rem' }}>
            Humain — moi
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
            30%
          </div>
        </header>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {HUMAIN.map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--secondary)', lineHeight: 1.5 }}>
              <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <style>{`
        @media (max-width: 720px) {
          .auto-vs-human {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
