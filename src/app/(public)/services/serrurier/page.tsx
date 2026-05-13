import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Assistant administratif pour serruriers — OptiPro PACA',
  description:
    'Service d\'assistant admin externalisé pour serruriers et métalliers. Devis urgents 24/7 traités sous 1h, factures, relances, comptable. À partir de 650€/mois ou 75€/h. Vence (06), interventions PACA et France.',
  alternates: { canonical: '/services/serrurier' },
  openGraph: {
    title: 'Assistant admin pour serruriers — OptiPro',
    description: 'Vous gérez les urgences, je gère votre admin. Mission ou pack mensuel — dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/serrurier',
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
        { '@type': 'ListItem', position: 3, name: 'Serrurier', item: 'https://www.opti-pro.fr/services/serrurier' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/services/serrurier#service',
      name: 'Assistant administratif externalisé pour serruriers et métalliers',
      serviceType: 'AdministrativeService',
      description: 'Service d\'assistant administratif externalisé pour serruriers indépendants et TPE de métallerie. Gestion des devis urgents, factures, relances, trésorerie, planning, dossier comptable mensuel.',
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      audience: { '@type': 'Audience', name: 'Serruriers, métalliers, dépanneurs urgents 24/7' },
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
          name: "Comment gérer mes devis urgents quand je suis en intervention de nuit ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vous m'envoyez un vocal WhatsApp depuis l'intervention (« porte forcée chez M. Martin, remplacement cylindre 5 points + serrure 3 points, environ 380€ »). Je crée le devis détaillé et l'envoie au client dans l'heure, même la nuit. Le client peut signer en ligne et payer par carte. Vous, vous repartez sur l'urgence suivante.",
          },
        },
        {
          '@type': 'Question',
          name: "Et le suivi des factures impayées ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je gère les relances. Je tiens un calendrier de relance personnalisé (J+15, J+30, J+45) sur les factures impayées, sans intervention de votre part. Sur les serruriers que je connais, ça récupère en moyenne 2 à 4k€/mois de factures qui passent à la trappe.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien ça coûte pour un serrurier indépendant ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible pour un suivi régulier : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous avec des serruriers ailleurs qu'en PACA ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios. La PACA est ma zone prioritaire (Vence, Nice, Antibes, Cannes), mais j'accepte les serruriers partout en France.",
          },
        },
      ],
    },
  ],
};

export default function SerrurierPage() {
  return (
    <LandingPage
      badge="Pour serruriers et métalliers"
      h1="L'assistant administratif des serruriers"
      intro="Vous gérez les urgences à 3h du matin. Vous n'avez pas le temps de faire des devis sous 24h, de relancer les impayés, de tenir un dossier comptable propre. Voilà précisément ce que je prends en charge pour vous, à partir de 650€/mois ou 75€/h."
      painSection={{
        title: "Quels sont les vrais blocages d'un serrurier indépendant aujourd'hui ?",
        points: [
          "Vous arrivez sur une urgence à 23h, vous repartez à 1h. Le devis ? Pas avant 3 jours, et le client a déjà appelé un autre serrurier.",
          "Vous oubliez de relancer les factures impayées entre deux interventions. 2-4k€/mois passent à la trappe.",
          "Votre conjoint(e) fait l'admin le soir et le week-end. Tension permanente, erreurs, retards URSSAF.",
          "Aucune visibilité sur la trésorerie réelle. Vous ne savez jamais ce qui est encaissé, ce qui est en attente.",
          "Votre comptable râle parce que vos justificatifs arrivent en vrac à la fin de l'année.",
        ],
      }}
      featuredOffer={{
        name: 'Pack Croissance — 20h',
        price: '1 200 € HT/mois',
        delay: 'Démarrage en moins de 2 semaines',
        description: "Pour un suivi régulier de votre admin — devis, ADV, fournisseurs, suivi de projet, facturation. 20 heures dédiées par mois, sans engagement long.",
        features: [
          'Devis structurés, envoyés sans délai après votre brief',
          'Facturation, suivi des paiements, conforme PDP 2026-2027',
          'Frais & dépenses saisis et classés par chantier',
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
          description: "On parle de votre activité : volumes, type d'interventions, outils actuels. Je vous dis si on est faits pour bosser ensemble. Si oui, mission ponctuelle ou pack adapté proposé sous 24h.",
        },
        {
          step: '2',
          title: 'Le démarrage',
          description: "Audit rapide de votre existant. Accès aux outils que vous utilisez déjà (Pennylane, Sage, Excel…). Premier RDV de cadrage 30 min. Pas de mise en route facturée à part — c'est inclus dans les premières heures.",
        },
        {
          step: '3',
          title: 'Le quotidien',
          description: "Vous m'envoyez vocaux/photos WhatsApp. Je crée les devis, envoie les factures, relance les impayés, classe les frais. Visio bilan mensuelle. Préavis 15 jours sur les packs.",
        },
      ]}
      faq={[
        {
          question: "Comment gérer mes devis urgents quand je suis en intervention de nuit ?",
          answer: "Vous m'envoyez un vocal WhatsApp depuis l'intervention. Je crée le devis détaillé et l'envoie au client dans l'heure, même la nuit. Le client peut signer en ligne et payer par carte. Vous, vous repartez sur l'urgence suivante.",
        },
        {
          question: "Et le suivi des factures impayées ?",
          answer: "Je gère les relances. Je tiens un calendrier de relance personnalisé (J+15, J+30, J+45) sur les factures impayées, sans intervention de votre part. Sur les serruriers que je connais, ça récupère en moyenne 2 à 4k€/mois de factures qui passent à la trappe.",
        },
        {
          question: "Combien ça coûte pour un serrurier indépendant ?",
          answer: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible pour un suivi régulier : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
        },
        {
          question: "Travaillez-vous avec des serruriers ailleurs qu'en PACA ?",
          answer: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios. La PACA est ma zone prioritaire, mais j'accepte les serruriers partout en France.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "toute la PACA et la France à distance"]}
      industryContext={{
        title: "La réalité du serrurier indépendant en 2026 — pourquoi déléguer l'admin n'est plus un luxe",
        intro: "Pendant 10 ans, j'ai piloté des opérations en logistique et exploitation, dont des sous-traitants serruriers et métalliers. J'ai vu de l'intérieur ce qui distingue les serruriers qui gagnent leur vie sereinement de ceux qui s'épuisent. Voici ce que j'ai appris, appliqué à la réalité d'un serrurier indépendant.",
        keyFacts: [
          {
            stat: '60-80%',
            label: "des interventions serrurier sont des urgences (porte claquée, vol, perte de clés)",
            source: 'CNAMS — étude métier serrurerie',
          },
          {
            stat: '4 à 8h',
            label: "consacrées chaque semaine à l'administratif (devis, factures, relances)",
            source: 'CAPEB',
          },
          {
            stat: '15-25%',
            label: "de factures impayées non relancées chez les serruriers indépendants",
            source: 'Estimation propre, échantillon PACA 2026',
          },
          {
            stat: '2-4k€',
            label: "récupérables par mois en moyenne avec un système de relances automatiques",
            source: 'Estimation OptiPro',
          },
        ],
        miniCases: [
          {
            situation: "Un serrurier de Cagnes-sur-Mer, 6 ans d'activité, 4-5 interventions par jour dont 2 urgences. Il fait ses devis le dimanche soir sur Word. Délai moyen : 3 jours après l'intervention. 1 client sur 4 part chez un concurrent entre-temps.",
            result: "Pack Essentiel (10h) à 650€/mois. Devis envoyés sous 1h après vocal WhatsApp. Taux de signature passé de 75% à 92%. Gain estimé : ~1 500 € de CA additionnel par mois + 5h/semaine récupérées.",
          },
          {
            situation: "Un serrurier-métallier d'Antibes avec 2 salariés. Sa femme fait l'admin le soir, ils sont en désaccord permanent sur l'organisation. Factures impayées qui s'accumulent (3-4k€ en cours).",
            result: "Pack Croissance (20h) à 1 200€/mois. Les relances rattrapent 2 800€ d'impayés en 2 mois. Sa femme reprend une activité pro ailleurs. Le couple respire.",
          },
        ],
        insight: "La spécificité d'un serrurier sur la Côte d'Azur : pic d'activité l'été (cambriolages secondaires, locataires saisonniers, professionnels touristiques), creux en hiver. Avoir un système qui tourne tout seul pendant les pics et qui ne pèse rien pendant les creux change tout.",
      }}
      jsonLd={jsonLd}
    />
  );
}
