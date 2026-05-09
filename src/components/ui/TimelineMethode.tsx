import AccordionItem from './AccordionItem';

const ETAPE_2_SEMAINES = [
  {
    title: 'Semaine 1 : Audit & récupération',
    content: 'Audit de votre existant (devis, factures, outils en place). Récupération de votre historique : clients, projets, devis, factures déjà émis. Inventaire des prestataires en lien (comptable, banquier, etc.).',
  },
  {
    title: 'Semaine 2 : Paramétrage outils',
    content: 'Connexion à Pennylane (ou autre outil API). Configuration de Stripe si vous avez choisi l\'option paiement en ligne. Mise en place du WhatsApp Business dédié. Paramétrage Telegram ou Push selon votre préférence pour les notifs.',
  },
  {
    title: 'Semaine 3 : Formation & premiers tests',
    content: 'Visio de 30 min pour vous présenter votre tableau de bord. Premiers devis et factures envoyés ensemble pour valider le ton et les modèles. Vous validez tout avant l\'envoi au client.',
  },
  {
    title: 'Semaine 4 : Bilan & décision',
    content: 'Première visio bilan en fin de mois. On regarde ensemble ce qui a été fait, ce qui marche, ce qui doit être ajusté. Vous décidez : on continue (cycles 3 mois) ou on s\'arrête (sans frais).',
  },
];

const circleStyle: React.CSSProperties = {
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

const liStyle: React.CSSProperties = {
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
            <li>Votre activité, votre volume mensuel</li>
            <li>Vos outils actuels (Pennylane, Sage, Excel…)</li>
            <li>Ce qui vous prend le plus de temps</li>
            <li>Votre comptable et comment il travaille</li>
            <li>Vos pain points concrets</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            À l&apos;issue : je vous dis si on est faits pour travailler ensemble. Si oui, j&apos;envoie un devis adapté dans les 24h.
          </p>
        </div>
      </li>

      {/* Étape 2 — Le mois 1 : Mise en route */}
      <li style={liStyle}>
        <span aria-hidden="true" style={circleStyle}>2</span>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
            Le mois 1 : Mise en route
          </h3>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
            <strong>750€ HT — facturé une seule fois. Sans engagement à l&apos;issue.</strong>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {ETAPE_2_SEMAINES.map((semaine) => (
              <AccordionItem key={semaine.title} title={semaine.title}>
                <p style={{ margin: 0 }}>{semaine.content}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </li>

      {/* Étape 3 — Le quotidien (M2 et au-delà) */}
      <li style={liStyle}>
        <span aria-hidden="true" style={circleStyle}>3</span>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
            Le quotidien (M2 et au-delà)
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
            <li>Relancer les factures impayées chaque jour</li>
            <li>Préparer votre dossier comptable mensuel</li>
            <li>Suivre votre trésorerie en temps réel</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.75rem' }}>
            <strong>Vous recevez :</strong>
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: 0 }}>
            <li>Notifs Telegram ou Push à chaque événement (devis signé, facture payée, RDV à venir)</li>
            <li>Tableau de bord à jour 24h/24</li>
            <li>Reporting mensuel commenté</li>
          </ul>
        </div>
      </li>

      {/* Étape 4 — Le rythme régulier */}
      <li style={liStyle}>
        <span aria-hidden="true" style={circleStyle}>4</span>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Le rythme régulier
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.4rem' }}>
                <strong style={{ color: 'var(--primary)' }}>Toutes les 2 semaines :</strong> visio bilan 30 min
              </p>
              <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: 0 }}>
                <li>Point sur la trésorerie</li>
                <li>Devis en cours, factures impayées</li>
                <li>Anticipation (échéances URSSAF, périodes chargées…)</li>
                <li>Vos questions, vos demandes</li>
              </ul>
            </div>
            <div>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.4rem' }}>
                <strong style={{ color: 'var(--primary)' }}>Tous les jours ouvrés (9h-17h) :</strong>
              </p>
              <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: 0 }}>
                <li>Hotline WhatsApp dédiée</li>
                <li>Appels possibles (sans abus de part et d&apos;autre)</li>
              </ul>
            </div>
            <div>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 0.4rem' }}>
                <strong style={{ color: 'var(--primary)' }}>Chaque mois :</strong>
              </p>
              <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: 0 }}>
                <li>Reporting CA + commentaire</li>
                <li>Dossier mensuel transmis à votre comptable</li>
                <li>Réajustement du forfait si besoin</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
}
