import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Assistant administratif à Cagnes-sur-Mer — Bras droit admin & opérationnel OptiPro',
  description: 'Externalisation administrative pour artisans, indépendants et TPE à Cagnes-sur-Mer. Devis, factures, fournisseurs, suivi de chantier. Dès 650€/mois ou 75€/h.',
  alternates: { canonical: '/services/cagnes-sur-mer' },
  openGraph: {
    title: 'Assistant administratif à Cagnes-sur-Mer — OptiPro',
    description: 'Le bras droit admin & opérationnel des artisans cagnois. Mission ou pack mensuel dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/cagnes-sur-mer',
    type: 'website',
  },
};

export default function CagnesSurMerPage() {
  return (
    <CityServicePage
      cityName="Cagnes-sur-Mer"
      cityNameInClause="à Cagnes-sur-Mer"
      citySlug="cagnes-sur-mer"
      postalCodes={['06800']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Le bras droit administratif des artisans et TPE cagnois"
      intro="Vous êtes artisan ou dirigeant de TPE à Cagnes-sur-Mer. Entre le Cros-de-Cagnes, le Haut-de-Cagnes, le centre-ville et l'hippodrome, vous travaillez sur un territoire dense avec une clientèle mixte (locale, résidentielle, touristique). OptiPro reprend tout l'admin opérationnel pour que vous restiez sur le terrain."
      economicContext="Cagnes-sur-Mer cumule plusieurs profils économiques : commerces et artisans du centre-ville et du Cros-de-Cagnes, activités liées à l'hippodrome (événementiel, restauration, services), résidences saisonnières et locations meublées en bord de mer, et un tissu de TPE de services entre Nice et Antibes. La position géographique au cœur de la métropole niçoise (15 km de Nice, 10 km d'Antibes, 5 km de Saint-Laurent-du-Var) fait des artisans cagnois des prestataires multi-zones, ce qui complique la gestion administrative."
      geo={{ latitude: 43.6634, longitude: 7.1495 }}
      whyHere={[
        {
          title: 'Position centrale dans la métropole',
          description: 'Vos chantiers s\'étalent souvent entre Nice, Antibes et Cagnes. OptiPro centralise tout l\'admin pour que vous gardiez une vision claire malgré la dispersion géographique.',
        },
        {
          title: 'Connaissance du tissu local',
          description: 'Pierre est basé à Vence, à 15 km de Cagnes. Plusieurs artisans cagnois (plomberie, électricité, second œuvre) font partie de son réseau professionnel.',
        },
        {
          title: 'Service 100% à distance',
          description: 'WhatsApp dédié, visios. Aucun déplacement nécessaire au quotidien. Possibilité d\'un audit initial sur place, sans frais sur la zone PACA.',
        },
        {
          title: 'Adapté aux activités saisonnières',
          description: 'Si vous travaillez avec l\'hippodrome, les locations saisonnières ou l\'événementiel, les packs s\'ajustent — montée en saison, redescente hors saison.',
        },
      ]}
      services={[
        {
          icon: '📄',
          title: 'Devis & factures multi-zones',
          description: 'Vous gérez des chantiers entre Nice, Antibes et Cagnes — OptiPro centralise tous vos documents commerciaux dans un seul endroit.',
        },
        {
          icon: '💰',
          title: 'Relances et trésorerie',
          description: 'Calendrier de relance (J+15, J+30, J+45). Particulièrement utile pour les clients de location saisonnière, souvent injoignables après leur départ.',
        },
        {
          icon: '🤝',
          title: 'Coordination sous-traitants',
          description: 'Si vous travaillez avec d\'autres artisans cagnois ou de la métropole (plombier, électricien, peintre), OptiPro coordonne les plannings et les commandes.',
        },
        {
          icon: '📋',
          title: 'Préparation comptable',
          description: 'Dossier propre livré chaque mois à votre expert-comptable cagnois, niçois ou antibois. Factures classées, frais OCR, FEC à jour.',
        },
        {
          icon: '📊',
          title: 'Visibilité par zone',
          description: 'Si vous voulez savoir quel quartier vous rapporte le plus (Cros, Hippodrome, Haut-de-Cagnes), OptiPro met en place le suivi.',
        },
        {
          icon: '🗓️',
          title: 'Planning géographique',
          description: 'Organisation de votre journée par zone pour limiter les trajets. Vous concentrez Nice le matin, Cagnes l\'après-midi, Antibes le mercredi — pas l\'inverse.',
        },
      ]}
      useCases={[
        {
          profile: 'Plombier-chauffagiste à Cagnes-Centre',
          situation: '10 ans d\'activité, 2 salariés. Activité mixte (résidentiel + commerces + locations saisonnières au Cros). Sa femme faisait l\'admin le soir. Impayés récurrents sur les saisonniers.',
          result: 'Pack Croissance 20h à 1 200€/mois. Relances systématiques pour les locataires partis. 3 200€ rattrapés en 2 mois. Sa femme reprend une activité pro ailleurs.',
        },
        {
          profile: 'Électricien à La Villette / Hippodrome',
          situation: 'Spécialité résidentiel + événementiel hippodrome. Pics saisonniers, devis multi-chantiers complexes. Suivi des avenants oublié, 15-30% des avenants non facturés.',
          result: 'Pack Croissance 20h. Avenants systématiquement facturés. +9 000€ de CA récupéré sur 6 mois grâce aux avenants qui passaient à la trappe.',
        },
        {
          profile: 'Restauratrice indépendante au Cros-de-Cagnes',
          situation: 'Petit restaurant 30 couverts, ouvert avril-octobre. Saisonnalité forte, gestion des fournisseurs lourde (poissonnier, primeur, vins, bières).',
          result: 'Pack Essentiel 10h hors saison, Pack Croissance 20h en saison. Coordination fournisseurs centralisée, factures suivies. Marge connue chaque semaine au lieu de chaque trimestre.',
        },
      ]}
      faq={[
        {
          question: 'Vous travaillez avec des artisans dans tout Cagnes ?',
          answer: 'Oui. Cagnes-Centre, Cros-de-Cagnes, Haut-de-Cagnes, La Villette, Les Vespins, et toute la commune. Service 100% à distance.',
        },
        {
          question: 'Vous gérez les chantiers multi-zones (Nice, Antibes, Cagnes) ?',
          answer: 'Oui. Beaucoup d\'artisans cagnois interviennent dans toute la métropole. OptiPro centralise l\'admin quelle que soit la zone du chantier. Vous gardez une vision claire malgré la dispersion.',
        },
        {
          question: 'Vous avez l\'habitude des activités saisonnières (Cros, locations) ?',
          answer: 'Oui. Les packs s\'ajustent en montant pendant les pics (avril-octobre) et redescendent hors saison. Pas de surfacturation cachée. Préavis 15 jours fin de mois si vous voulez changer de palier.',
        },
        {
          question: 'Combien ça coûte pour un artisan cagnois ?',
          answer: 'Deux formules. Mission à l\'heure (75€/h HT) pour les besoins ponctuels. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. Préavis 15 jours fin de mois. Période d\'essai 30 jours sans frais.',
        },
        {
          question: 'Vous travaillez avec l\'hippodrome et l\'événementiel ?',
          answer: 'Oui. Pierre a une expérience de 1 an en logistique événementielle chez GL Events Live (équipe de 6, entrepôt événementiel). Il connaît les pics, les contraintes de timing, la gestion des sous-traitants en montage rapide.',
        },
      ]}
    />
  );
}
