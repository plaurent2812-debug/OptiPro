import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Assistant administratif à Cannes — Bras droit admin & opérationnel OptiPro',
  description: 'Externalisation administrative pour artisans, indépendants et TPE à Cannes. Devis, factures, relances, fournisseurs. Dès 650€/mois ou 75€/h. Service à distance et déplacements ponctuels.',
  alternates: { canonical: '/services/cannes' },
  openGraph: {
    title: 'Assistant administratif à Cannes — OptiPro',
    description: 'Le bras droit admin & opérationnel des artisans et TPE cannois. Mission ou pack mensuel dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/cannes',
    type: 'website',
  },
};

export default function CannesPage() {
  return (
    <CityServicePage
      cityName="Cannes"
      cityNameInClause="à Cannes"
      citySlug="cannes"
      postalCodes={['06150', '06400']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Le bras droit administratif des artisans et TPE cannois"
      intro="Vous êtes artisan ou dirigeant de TPE à Cannes. Entre la Croisette, la Bocca, le centre-ville et l'arrière-pays, votre activité tourne — mais l'admin déborde. Devis qui traînent, factures envoyées avec 3 semaines de retard, fournisseurs relancés par WhatsApp. OptiPro reprend tout l'admin et l'opérationnel pour que vous restiez sur votre métier."
      economicContext="Cannes vit au rythme de ses événements internationaux (Festival, MIPIM, MIPCOM, marchés professionnels) qui amplifient la saisonnalité des activités locales. Les artisans cannois sont confrontés à des pics de demande très marqués : rénovations avant le Festival, agencements pour les villas saisonnières, urgences plomberie/électricité pour les locations meublées. La capacité à envoyer un devis structuré sous 24h et à facturer immédiatement après l'intervention fait la différence entre un chantier gagné et un chantier perdu."
      geo={{ latitude: 43.5528, longitude: 7.0174 }}
      whyHere={[
        {
          title: 'Anticipation des pics événementiels',
          description: 'Avant le Festival, le MIPIM ou les saisons touristiques, votre flux de devis explose. OptiPro absorbe ce pic sans que vous ayez à embaucher ou refuser des chantiers.',
        },
        {
          title: 'Connaissance du SAPAL et tissu local',
          description: 'Pierre a accompagné SAPAL Signalisation à Cannes (plateforme B2B 2 500 produits, automatisations Telegram, sync Pennylane). Il connaît le tissu pro cannois.',
        },
        {
          title: 'Service 100% à distance',
          description: 'WhatsApp dédié, visios, partage d\'écran. Aucun déplacement nécessaire au quotidien. Possibilité d\'un audit initial sur place si besoin (Vence à 40 km).',
        },
        {
          title: 'Adapté aux activités à forte saisonnalité',
          description: 'Les packs mensuels s\'ajustent : Essentiel hors saison, Croissance ou Pilotage en pic. Période d\'essai 30 jours sans frais pour tester sans risque.',
        },
      ]}
      services={[
        {
          icon: '📄',
          title: 'Devis & factures saisonniers',
          description: 'Capacité à traiter 2-3x votre volume habituel pendant les pics. Devis envoyés sous 1h après votre vocal WhatsApp depuis le chantier.',
        },
        {
          icon: '💰',
          title: 'Relances impayés',
          description: 'Calendrier de relance (J+15, J+30, J+45). Particulièrement efficace sur les clients saisonniers difficiles à recontacter après leur départ.',
        },
        {
          icon: '🤝',
          title: 'Fournisseurs et sous-traitants',
          description: 'Coordination des commandes urgentes en pic d\'activité. Suivi des livraisons, gestion des litiges. Indispensable pour les rénovations express avant événements.',
        },
        {
          icon: '📋',
          title: 'Dossier comptable mensuel',
          description: 'FEC propre, factures classées, frais saisis. Votre comptable cannois reçoit un dossier qui tient en 30 min de revue. Économies réelles sur ses honoraires.',
        },
        {
          icon: '📊',
          title: 'Suivi de marge par chantier',
          description: 'Visibilité sur ce que rapporte vraiment chaque chantier — fournitures, main d\'œuvre, sous-traitance. Indispensable sur les chantiers gros budget Croisette.',
        },
        {
          icon: '🗓️',
          title: 'Agenda commercial',
          description: 'Prises de RDV clients, confirmations, relances post-RDV. Vous n\'oubliez plus un client qui voulait un devis "rapide".',
        },
      ]}
      useCases={[
        {
          profile: 'Agenceur indépendant à Cannes-Centre',
          situation: 'Spécialisé dans la rénovation de villas locatives. 6 mois de pic d\'activité (mars-août), 6 mois calmes. Faisait tout lui-même : devis, factures, fournisseurs.',
          result: 'Pack Croissance 20h pendant la saison (mars-août), Pack Essentiel hors saison. Système flexible, +18 000€ de CA capté sur la saison grâce aux devis envoyés rapidement.',
        },
        {
          profile: 'Plombier-chauffagiste à La Bocca',
          situation: '12 ans d\'activité, 1 salarié, locations meublées de plus en plus nombreuses. Urgences 24/7 qui généraient des factures parties en retard.',
          result: 'Pack Croissance 20h à 1 200€/mois. Facturation J+1 systématique, relances automatiques. 3 200€ d\'impayés rattrapés en 2 mois. La femme du dirigeant arrête l\'admin.',
        },
        {
          profile: 'TPE événementielle à Cannes-Ouest',
          situation: '5 salariés, 60% du CA réalisé sur 6 événements/an. Suivi fournisseurs catastrophique, marges floues, comptable mécontent.',
          result: 'Pack Pilotage 35h à 1 950€/mois. Dashboards par événement, process documentés. Marges connues à J+5 après chaque événement. Dirigeant retrouve 15h/semaine.',
        },
      ]}
      faq={[
        {
          question: 'Vous travaillez avec des artisans dans tout Cannes ?',
          answer: 'Oui. Cannes-Centre, La Bocca, Le Cannet, Cannes-Ouest, et toute l\'agglomération CAPL (Cannes Pays de Lérins) : Mougins, Mandelieu, Théoule, La Roquette-sur-Siagne. Service 100% à distance.',
        },
        {
          question: 'Vous avez l\'habitude des pics liés aux événements (Festival, MIPIM) ?',
          answer: 'Oui. Pierre a accompagné des entreprises de la région qui vivent au rythme des événements internationaux. Les packs s\'ajustent en montant pendant les pics et redescendent hors saison. Pas de surfacturation cachée.',
        },
        {
          question: 'Vous pouvez vous déplacer à Cannes si besoin ?',
          answer: 'Oui, possible pour un audit initial ou un point ponctuel. Vence est à 40 km de Cannes. Le déplacement est inclus dans le forfait, aucun frais facturé sur la zone PACA.',
        },
        {
          question: 'Combien ça coûte pour un artisan cannois ?',
          answer: 'Deux formules. Mission à l\'heure (75€/h HT) pour les besoins ponctuels. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. Préavis 15 jours fin de mois. Période d\'essai 30 jours sans frais.',
        },
        {
          question: 'Vous avez des références à Cannes ?',
          answer: 'Pierre a accompagné SAPAL Signalisation (Cannes) sur une plateforme B2B avec catalogue de 2 500 références, automatisations Telegram et synchronisation Pennylane via API. Pour les autres références, on en parle en appel découverte (NDA si nécessaire).',
        },
      ]}
    />
  );
}
