import type { CSSProperties } from 'react';

const circleStyle: CSSProperties = {
  width: '3rem',
  height: '3rem',
  borderRadius: '999px',
  background: 'var(--accent)',
  color: 'var(--on-accent)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  fontWeight: 800,
  flexShrink: 0,
};

const liStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '1.5rem',
  alignItems: 'flex-start',
};

export default function TimelineMethode() {
  return (
    <ol style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      position: 'relative',
    }}>
      {/* Étape 1 — L'appel découverte */}
      <li style={liStyle}>
        <span aria-hidden="true" style={circleStyle}>1</span>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
            L&apos;appel découverte
          </h3>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            <strong>30 minutes en visio. Gratuit, sans engagement.</strong>
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.75rem' }}>
            Je vous pose 5-6 questions :
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            <li>Votre activité, vos volumes</li>
            <li>Vos outils actuels (Pennylane, Sage, Excel…)</li>
            <li>Ce qui vous prend le plus de temps</li>
            <li>Votre comptable et comment il travaille</li>
            <li>Vos pain points concrets</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            À l&apos;issue : je vous dis si on est faits pour travailler ensemble. Si oui, je propose une mission ponctuelle ou un pack adapté dans les 24h.
          </p>
        </div>
      </li>

      {/* Étape 2 — Le démarrage */}
      <li style={liStyle}>
        <span aria-hidden="true" style={circleStyle}>2</span>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
            Le démarrage
          </h3>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            Une fois la mission ou le pack validé, on cadre rapidement :
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            <li>Audit rapide de votre existant (devis, factures, outils)</li>
            <li>Validation du périmètre des tâches à prendre en charge</li>
            <li>Premier RDV de cadrage (30 min) pour caler les codes et le ton</li>
            <li>Accès aux outils que vous utilisez (Pennylane, Sage, Excel…)</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            Pas de mise en route facturée à part : c&apos;est inclus dans les premières heures de mission.
          </p>
        </div>
      </li>

      {/* Étape 3 — Le quotidien */}
      <li style={liStyle}>
        <span aria-hidden="true" style={circleStyle}>3</span>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
            Le quotidien
          </h3>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1rem', fontWeight: 500 }}>
            Vous bossez. Je gère.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.75rem' }}>
            <strong>Vous m&apos;envoyez (vocal, photo, ou message WhatsApp) :</strong>
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            <li>« Devis pour Madame Dupont, rénovation salle de bain, douche italienne, environ 5000€ »</li>
            <li>Photo d&apos;un ticket de caisse fournisseur</li>
            <li>« RDV demain 14h chez Mr Martin pour le devis »</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.75rem' }}>
            <strong>Je m&apos;occupe de :</strong>
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            <li>Créer le devis détaillé et l&apos;envoyer</li>
            <li>Saisir et classer le ticket dans le bon chantier</li>
            <li>Ajouter le RDV à votre planning</li>
            <li>Relancer les factures impayées</li>
            <li>Préparer votre dossier comptable mensuel</li>
            <li>Suivre votre trésorerie</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.75rem' }}>
            <strong>Le rythme régulier :</strong>
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: 0 }}>
            <li>WhatsApp dédié, réponse sous 4h en jour ouvré</li>
            <li>Visio bilan mensuelle (30 min) : point trésorerie, devis en cours, factures impayées, anticipation</li>
            <li>Reporting mensuel des heures consommées par tâche</li>
          </ul>
        </div>
      </li>
    </ol>
  );
}
