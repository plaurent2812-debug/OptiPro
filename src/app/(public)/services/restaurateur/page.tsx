import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Assistant administratif pour restaurateurs — OptiPro PACA',
  description:
    'Service d\'assistant admin externalisé pour restaurateurs et patrons de café. Devis traiteur, factures, suivi fournisseurs, trésorerie, dossier comptable. À partir de 650€/mois ou 75€/h.',
  alternates: { canonical: '/services/restaurateur' },
  openGraph: {
    title: 'Assistant admin pour restaurateurs — OptiPro',
    description: 'Vous gérez la cuisine et la salle, je gère votre admin. Mission ou pack mensuel — dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/restaurateur',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
        { '@type': 'ListItem', position: 2, name: 'Le service', item: 'https://www.opti-pro.fr/le-service' },
        { '@type': 'ListItem', position: 3, name: 'Restaurateur', item: 'https://www.opti-pro.fr/services/restaurateur' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/services/restaurateur#service',
      name: 'Assistant administratif externalisé pour restaurateurs',
      serviceType: 'AdministrativeService',
      description: 'Service d\'assistant administratif externalisé pour restaurateurs, patrons de café et professionnels de la restauration. Gestion des devis traiteur/privatisation, factures, suivi fournisseurs, trésorerie, dossier comptable mensuel.',
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Mougins' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      audience: { '@type': 'Audience', name: 'Restaurateurs, patrons de café, traiteurs' },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '650',
        highPrice: '1950',
        priceCurrency: 'EUR',
        offerCount: 4,
        valueAddedTaxIncluded: false,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Comment gérer mes devis traiteur ou privatisation quand je suis en service ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vous m'envoyez un vocal WhatsApp entre deux services (« mariage 80 couverts samedi 12 juin, formule à 65€ avec apéritif, RDV dégustation jeudi »). Je crée le devis détaillé et l'envoie au client dans l'heure, signature en ligne. Vous restez focus sur le service.",
          },
        },
        {
          '@type': 'Question',
          name: "Et le suivi des fournisseurs et de la trésorerie ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je classe les factures fournisseurs (food, beverage, équipement) au fur et à mesure. Je tiens votre trésorerie hebdo, avec alertes sur les échéances et reporting mensuel commenté. Plus de mauvaise surprise en fin de mois.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien ça coûte pour un restaurateur indépendant ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous avec des restaurateurs ailleurs qu'en PACA ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Service 100% à distance — vocaux WhatsApp, visios. La PACA est ma zone prioritaire (Vence, Nice, Antibes, Cannes, Grasse, Mougins, Cagnes-sur-Mer), mais j'accepte les restaurateurs partout en France.",
          },
        },
      ],
    },
  ],
};

export default function RestaurateurPage() {
  return (
    <LandingPage
      badge="Pour restaurateurs et patrons de café"
      h1="L'assistant administratif des restaurateurs"
      intro="Vous excellez en cuisine et en salle, pas dans Excel. Vous n'avez pas le temps de faire des devis traiteur sous 24h, de suivre vos fournisseurs, de tenir un dossier comptable propre. Voilà ce que je prends en charge pour vous, à partir de 650€/mois ou 75€/h."
      painSection={{
        title: "Quels sont les vrais blocages d'un restaurateur indépendant aujourd'hui ?",
        points: [
          "Une demande de devis traiteur ou privatisation arrive : vous répondez 3 jours plus tard, le client a déjà signé ailleurs.",
          "Vos factures fournisseurs s'accumulent. Vous payez en retard, perdez les escomptes, voire des conditions commerciales.",
          "Aucune visibilité sur la trésorerie réelle au-delà de 7 jours. Vous pilotez à l'instinct, pas aux chiffres.",
          "Votre conjoint(e) fait l'admin le soir après le service. Erreurs de saisie, fatigue, tension permanente.",
          "Justificatifs en vrac, comptable qui râle en fin d'année, marge réelle inconnue par poste.",
        ],
      }}
      featuredOffer={{
        name: 'Pack Croissance — 20h',
        price: '1 200 € HT/mois',
        delay: 'Démarrage en moins de 2 semaines',
        description: "Pour un suivi régulier de votre admin — devis traiteur/privatisation, factures clients, suivi fournisseurs, trésorerie. 20 heures dédiées par mois, sans engagement long.",
        features: [
          'Devis traiteur/privatisation structurés, envoyés sans délai',
          'Facturation, suivi des paiements, conforme PDP 2026-2027',
          'Factures fournisseurs classées par catégorie (food, beverage, équipement)',
          'Trésorerie suivie, reporting mensuel commenté',
          'Préparation du dossier mensuel pour votre comptable',
          'WhatsApp dédié, réponse sous 4h en jour ouvré',
          'Visio bilan mensuelle (30 min)',
          'Préavis 15 jours fin de mois — vous gardez la main',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Appel découverte (30 min, gratuit)',
          description: "On parle de votre activité : type d'établissement, volume de couverts, événementiel ou pas, outils actuels. Je vous dis si on est faits pour bosser ensemble. Si oui, mission ponctuelle ou pack adapté proposé sous 24h.",
        },
        {
          step: '2',
          title: 'Le démarrage',
          description: "Audit rapide de votre existant. Accès aux outils que vous utilisez déjà (Pennylane, Sage, Excel…). Premier RDV de cadrage 30 min. Pas de mise en route facturée à part — c'est inclus dans les premières heures.",
        },
        {
          step: '3',
          title: 'Le quotidien',
          description: "Vous m'envoyez vocaux/photos WhatsApp entre deux services. Je crée les devis, envoie les factures, suis les fournisseurs et la trésorerie, classe les frais. Visio bilan mensuelle. Préavis 15 jours sur les packs.",
        },
      ]}
      faq={[
        {
          question: "Comment gérer mes devis traiteur quand je suis en service ?",
          answer: "Vous m'envoyez un vocal WhatsApp entre deux services. Je crée le devis détaillé et l'envoie au client dans l'heure, signature en ligne. Vous restez focus sur la cuisine et la salle.",
        },
        {
          question: "Et le suivi des fournisseurs et de la trésorerie ?",
          answer: "Je classe les factures fournisseurs (food, beverage, équipement) au fur et à mesure. Je tiens votre trésorerie hebdo, avec alertes sur les échéances et reporting mensuel commenté.",
        },
        {
          question: "Combien ça coûte pour un restaurateur indépendant ?",
          answer: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
        },
        {
          question: "Travaillez-vous avec des restaurateurs ailleurs qu'en PACA ?",
          answer: "Oui. Service 100% à distance — vocaux WhatsApp, visios. PACA prioritaire (Vence, Nice, Antibes, Cannes, Grasse, Mougins, Cagnes-sur-Mer), mais j'accepte les restaurateurs partout en France.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', 'Mougins', "toute la PACA et la France à distance"]}
      industryContext={{
        title: "La réalité du restaurateur indépendant en 2026 — pourquoi déléguer l'admin n'est plus un luxe",
        intro: "Pendant 10 ans, j'ai piloté des opérations dans la logistique et l'événementiel (dont GL Events Live). J'ai vu de l'intérieur ce qui distingue les exploitants qui pilotent leur activité sereinement de ceux qui s'épuisent. La restauration partage ces mêmes leviers : devis rapide, trésorerie pilotée, fournisseurs maîtrisés.",
        keyFacts: [
          {
            stat: '8-12h',
            label: "consacrées chaque semaine à l'administratif chez un restaurateur indépendant",
            source: 'UMIH',
          },
          {
            stat: '60-90 jours',
            label: "délai moyen de paiement client B2B sur les événements et privatisations",
            source: 'INSEE 2024',
          },
        ],
        insight: "La spécificité du restaurateur indépendant : forte saisonnalité (été pour la PACA touristique, fêtes pour les privatisations), pression cash quotidienne, et fournisseurs nombreux (food, beverage, fluides, équipement). Un système admin qui tient la cadence pendant les pics et qui ne pèse rien en creux change tout.",
      }}
      jsonLd={jsonLd}
    />
  );
}
