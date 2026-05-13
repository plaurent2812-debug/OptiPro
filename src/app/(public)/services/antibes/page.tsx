import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Assistant administratif à Antibes — Bras droit admin & opérationnel OptiPro',
  description: 'Externalisation administrative pour artisans, indépendants et TPE à Antibes et Juan-les-Pins. Devis, factures, fournisseurs, suivi. Dès 650€/mois ou 75€/h.',
  alternates: { canonical: '/services/antibes' },
  openGraph: {
    title: 'Assistant administratif à Antibes — OptiPro',
    description: 'Le bras droit admin & opérationnel des artisans antibois. Mission ou pack mensuel dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/antibes',
    type: 'website',
  },
};

export default function AntibesPage() {
  return (
    <CityServicePage
      cityName="Antibes"
      cityNameInClause="à Antibes"
      citySlug="antibes"
      postalCodes={['06600', '06160']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Le bras droit administratif des artisans et TPE antibois"
      intro="Vous êtes artisan ou dirigeant de TPE à Antibes ou Juan-les-Pins. Vous bossez entre les villas du Cap, les chantiers du centre-ville et les locations saisonnières — et chaque semaine, 5 à 10h disparaissent dans l'admin au lieu d'aller sur le terrain. OptiPro prend en charge devis, facturation, relances, fournisseurs et préparation comptable."
      economicContext="Antibes et Juan-les-Pins concentrent un tissu d'artisans BTP particulièrement dense, lié à l'entretien et à la rénovation des villas du Cap d'Antibes, des résidences secondaires et des locations meublées saisonnières. La clientèle est exigeante (souvent internationale, fortunée, attentive à la qualité et aux délais), ce qui rend la réactivité commerciale décisive. Un devis envoyé en 24h après la visite est devenu le standard ; au-delà, le concurrent passe avant. La gestion administrative classique au stylo et Excel ne tient plus."
      geo={{ latitude: 43.5808, longitude: 7.1239 }}
      whyHere={[
        {
          title: 'Réactivité face à une clientèle exigeante',
          description: 'Cap d\'Antibes, propriétaires internationaux, agences de location haut de gamme : la qualité du devis et son délai d\'envoi font la différence. OptiPro envoie vos devis sous 1h après votre vocal.',
        },
        {
          title: 'Volumes en pic saisonnier',
          description: 'Avril à octobre, l\'activité explose sur Juan-les-Pins et le Cap. OptiPro absorbe les pics sans embauche ni surcoût caché.',
        },
        {
          title: 'Connaissance des artisans de la zone',
          description: 'Pierre a 10 ans d\'expérience en pilotage d\'exploitation en PACA, avec des chantiers BTP second œuvre. Il connaît les habitudes commerciales locales et les délais réalistes.',
        },
        {
          title: 'Service 100% à distance',
          description: 'Vence est à 30 km d\'Antibes. WhatsApp dédié, réponse sous 4h. Déplacement possible pour audit initial ou point trimestriel, sans frais sur la zone PACA.',
        },
      ]}
      services={[
        {
          icon: '📄',
          title: 'Devis structurés sous 1h',
          description: 'Vocal WhatsApp depuis la villa → devis détaillé envoyé au client dans l\'heure. Signature en ligne. Le client n\'a pas le temps d\'aller voir ailleurs.',
        },
        {
          icon: '💰',
          title: 'Relances multi-langues si besoin',
          description: 'Calendrier de relance professionnel sur les factures impayées. Possibilité d\'adapter le ton pour la clientèle internationale (français/anglais selon le profil).',
        },
        {
          icon: '🤝',
          title: 'Coordination fournisseurs',
          description: 'Suivi des commandes, livraisons, sous-traitants. Particulièrement utile pour les chantiers haut de gamme avec 10-30 corps de métier mobilisés.',
        },
        {
          icon: '📋',
          title: 'Préparation comptable mensuelle',
          description: 'Dossier propre livré chaque mois à votre expert-comptable antibois. Factures classées par chantier, frais saisis avec OCR, FEC à jour.',
        },
        {
          icon: '📊',
          title: 'Marge réelle par chantier',
          description: 'Sur les chantiers à 50-200k€, la marge se joue sur le tracking des fournitures et de la main d\'œuvre. OptiPro consolide les chiffres en temps réel.',
        },
        {
          icon: '🗓️',
          title: 'Agenda et visites',
          description: 'Planification des visites de chantier, RDV clients, points fournisseurs. Confirmations automatiques. Vous n\'oubliez plus un RDV important.',
        },
      ]}
      useCases={[
        {
          profile: 'Maçon-rénovateur au Cap d\'Antibes',
          situation: '15 ans d\'activité, 4 salariés. Chantiers de rénovation 80-300k€ pour propriétaires de villas. Faisait ses devis en soirée — délai moyen 4-5 jours. Perdait 20% des dossiers à cause du délai.',
          result: 'Pack Croissance 20h à 1 200€/mois. Devis structurés envoyés sous 24h. Taux de signature +15%. +35 000€ de CA capté sur 6 mois.',
        },
        {
          profile: 'Plombier-chauffagiste à Juan-les-Pins',
          situation: 'Activité mixte (résidentiel + locations meublées). Sa femme faisait l\'admin le soir. 4-5k€ d\'impayés en cours, factures locataires partis difficiles à relancer.',
          result: 'Pack Croissance 20h. Relances systématiques, 3 800€ rattrapés en 3 mois. Sa femme reprend une activité pro ailleurs. Couple soulagé.',
        },
        {
          profile: 'Concept store / artisan d\'art à Antibes-Centre',
          situation: 'Indépendante depuis 5 ans. Boutique + ventes en ligne + créations sur commande. Trop d\'éléments à gérer, perdait du temps sur la TVA et le suivi des commandes spéciales.',
          result: 'Pack Essentiel 10h à 650€/mois. Facturation centralisée, suivi commandes, préparation comptable. Reprend 6h/semaine pour la création.',
        },
      ]}
      faq={[
        {
          question: 'Vous travaillez avec des artisans dans tout Antibes ?',
          answer: 'Oui. Antibes-Centre, Juan-les-Pins, Cap d\'Antibes, Quartier des Semboules, La Fontonne, et toute la CASA (Communauté d\'Agglomération Sophia Antipolis). Service 100% à distance.',
        },
        {
          question: 'Vous pouvez vous adapter aux chantiers haut de gamme du Cap ?',
          answer: 'Oui. Pierre a une expérience de pilotage de portefeuilles ADV chez Factory (Top 150 Champions de la Croissance) sur des projets de 20k€ à 1M€. Les méthodes scalent du petit chantier au gros budget.',
        },
        {
          question: 'Vous gérez la facturation en anglais pour les clients internationaux ?',
          answer: 'Oui. Devis et factures bilingues FR/EN disponibles si besoin. Pierre travaille en français au quotidien mais maîtrise l\'anglais pour les échanges clients internationaux.',
        },
        {
          question: 'Combien ça coûte pour un artisan antibois ?',
          answer: 'Deux formules. Mission à l\'heure (75€/h HT) pour les besoins ponctuels. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. Préavis 15 jours fin de mois. Période d\'essai 30 jours sans frais.',
        },
        {
          question: 'Vous travaillez avec Sophia Antipolis ?',
          answer: 'Oui. Les TPE de Sophia Antipolis (consulting, services B2B, ingénierie) sont une cible naturelle pour OptiPro. Le besoin d\'admin externalisée y est encore plus fort qu\'en BTP — facturation B2B, suivi de projets, préparation comptable export.',
        },
      ]}
    />
  );
}
