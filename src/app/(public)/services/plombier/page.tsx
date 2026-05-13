import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Assistant administratif pour plombiers — OptiPro PACA',
  description:
    'Service d\'assistant admin externalisé pour plombiers indépendants et plombiers-chauffagistes. Devis, factures, relances, comptable. À partir de 650€/mois ou 75€/h. Vence (06), interventions PACA et France.',
  alternates: { canonical: '/services/plombier' },
  openGraph: {
    title: 'Assistant admin pour plombiers — OptiPro',
    description: 'Vous gérez les fuites et les chantiers, je gère votre admin. Mission ou pack mensuel — dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/plombier',
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
        { '@type': 'ListItem', position: 3, name: 'Plombier', item: 'https://www.opti-pro.fr/services/plombier' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/services/plombier#service',
      name: 'Assistant administratif externalisé pour plombiers',
      serviceType: 'AdministrativeService',
      description: 'Service d\'assistant administratif externalisé pour plombiers indépendants et plombiers-chauffagistes. Gestion des devis (urgences et chantiers), factures, relances, trésorerie, frais, planning, dossier comptable mensuel.',
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
      audience: { '@type': 'Audience', name: 'Plombiers, plombiers-chauffagistes, sanitaire' },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '600',
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
          name: "Comment gérer mes devis quand je sors d'une intervention ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vous m'envoyez un vocal WhatsApp depuis le chantier (« remplacement chauffe-eau 200L chez Mme Dupont, environ 1 200€, RDV mardi prochain »). Je crée le devis détaillé et l'envoie au client dans l'heure. Le client peut signer en ligne. Vous, vous repartez sur la prochaine intervention.",
          },
        },
        {
          '@type': 'Question',
          name: "Et le suivi des factures impayées entre deux dépannages ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je gère les relances. Je tiens un calendrier de relance personnalisé (J+15, J+30, J+45) sur les factures impayées, sans intervention de votre part. Sur les plombiers que je connais, ça récupère en moyenne 2 à 5k€/mois de factures qui passent à la trappe entre deux fuites.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien ça coûte pour un plombier indépendant ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible pour un suivi régulier : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous avec des plombiers ailleurs qu'en PACA ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios. La PACA est ma zone prioritaire (Vence, Nice, Antibes, Cannes, Grasse), mais j'accepte les plombiers partout en France.",
          },
        },
      ],
    },
  ],
};

export default function PlombierPage() {
  return (
    <LandingPage
      badge="Pour plombiers et plombiers-chauffagistes"
      h1="L'assistant administratif des plombiers"
      intro="Vous excellez dans la plomberie, pas dans Excel. Vous n'avez pas le temps de faire des devis sous 24h, de relancer les impayés, de tenir un dossier comptable propre. Voilà ce que je prends en charge pour vous, à partir de 650€/mois ou 75€/h."
      painSection={{
        title: "Quels sont les vrais blocages d'un plombier indépendant aujourd'hui ?",
        points: [
          "Vous sortez d'une fuite à 19h. Le devis pour la rénovation salle de bain ? Pas avant 3 jours, et le client a déjà appelé un autre plombier.",
          "Vous oubliez de relancer les factures impayées entre deux interventions urgentes. 2-5k€/mois passent à la trappe.",
          "Votre conjoint(e) fait l'admin le soir et le week-end. Tension permanente, erreurs, retards URSSAF.",
          "Aucune visibilité sur la trésorerie réelle. Vous ne savez jamais ce qui est encaissé, ce qui est en attente.",
          "Justificatifs en vrac, comptable qui râle en fin d'année, marge réelle inconnue.",
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
          question: "Comment gérer mes devis quand je sors d'une intervention ?",
          answer: "Vous m'envoyez un vocal WhatsApp depuis le chantier. Je crée le devis détaillé et l'envoie au client dans l'heure. Le client peut signer en ligne. Vous, vous repartez sur la prochaine intervention.",
        },
        {
          question: "Et le suivi des factures impayées entre deux dépannages ?",
          answer: "Je gère les relances. Je tiens un calendrier de relance personnalisé (J+15, J+30, J+45) sur les factures impayées, sans intervention de votre part. Sur les plombiers que je connais, ça récupère en moyenne 2 à 5k€/mois de factures qui passent à la trappe.",
        },
        {
          question: "Combien ça coûte pour un plombier indépendant ?",
          answer: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible pour un suivi régulier : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
        },
        {
          question: "Travaillez-vous avec des plombiers ailleurs qu'en PACA ?",
          answer: "Oui. Service 100% à distance — vocaux WhatsApp, visios. PACA prioritaire, mais j'accepte les plombiers partout en France.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "toute la PACA et la France à distance"]}
      industryContext={{
        title: "La réalité du plombier indépendant en 2026 — pourquoi déléguer l'admin n'est plus un luxe",
        intro: "Pendant 10 ans, j'ai piloté des opérations en logistique et exploitation, dont des entreprises de plomberie et second œuvre. J'ai vu de l'intérieur ce qui distingue les plombiers qui gagnent leur vie sereinement de ceux qui s'épuisent. Voici ce que j'ai appris, appliqué à la réalité d'un plombier indépendant.",
        keyFacts: [
          {
            stat: '6 à 8h',
            label: "consacrées chaque semaine à l'administratif (devis, factures, relances) chez un plombier indépendant",
            source: 'CAPEB',
          },
          {
            stat: '2 à 5k€/mois',
            label: "récupérables avec un système de relances automatiques sur les factures impayées",
            source: 'Estimation OptiPro',
          },
          {
            stat: '60-90 jours',
            label: "délai moyen de paiement client en B2B plomberie/chauffage",
            source: 'INSEE 2024',
          },
          {
            stat: '42€/h',
            label: "taux horaire moyen facturable d'un plombier indépendant en France",
            source: 'INSEE 2024',
          },
        ],
        miniCases: [
          {
            situation: "Un plombier de Cagnes-sur-Mer, 8 ans d'activité, 2-3 chantiers par jour. Il fait ses devis le dimanche soir sur Excel. Délai moyen : 2-3 jours après l'intervention. 1 client sur 4 part chez un concurrent entre-temps.",
            result: "Pack Essentiel (10h) à 650€/mois. Devis envoyés sous 1h après vocal WhatsApp. Taux de signature passé de 75% à 90%. Gain estimé : ~1 200€/mois de CA additionnel + 5h/semaine récupérées.",
          },
          {
            situation: "Un plombier-chauffagiste d'Antibes avec 2 salariés. Sa femme fait l'admin le soir, factures impayées qui s'accumulent (4-5k€ en cours). Spécialité PAC et installations chauffage.",
            result: "Pack Croissance (20h) à 1 200€/mois. Les relances rattrapent 3 200€ d'impayés en 2 mois. Sa femme arrête l'admin et reprend du temps libre. Le couple respire.",
          },
        ],
        insight: "La spécificité du plombier sur la Côte d'Azur : pic d'activité avant l'été (rénovations, climatisations) et pendant l'hiver (chauffage), creux entre. Avoir un système qui tourne tout seul pendant les pics et qui ne pèse rien pendant les creux change tout.",
      }}
      jsonLd={jsonLd}
    />
  );
}
