import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Assistant administratif pour serruriers — OptiPro PACA',
  description:
    'Service d\'assistant admin externalisé pour serruriers et métalliers. Devis urgents 24/7 traités sous 1h, factures, relances, comptable. À partir de 750€/mois. Vence (06), interventions PACA et France.',
  alternates: { canonical: '/services/serrurier' },
  openGraph: {
    title: 'Assistant admin pour serruriers — OptiPro',
    description: 'Vous gérez les urgences, je gère votre admin. Devis sous 1h, relances, dossier comptable mensuel. Pilote dès 750€/mois.',
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
      description: 'Service d\'assistant administratif externalisé pour serruriers indépendants et TPE de métallerie. Gestion des devis urgents, factures, relances, trésorerie, planning, dossier comptable mensuel. Tableau de bord temps réel inclus.',
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
        lowPrice: '750',
        highPrice: '1500',
        priceCurrency: 'EUR',
        offerCount: 3,
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
            text: "Les relances partent automatiquement à J+15, J+30, J+45 sur les factures impayées. Sans intervention de votre part. Sur les serruriers que je connais, ça récupère en moyenne 2 à 4k€/mois de factures qui passent à la trappe.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien ça coûte pour un serrurier indépendant ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le forfait Pilote 30 à 750€/mois HT couvre l'activité d'un serrurier solo (jusqu'à 30 documents/mois — devis et factures cumulés). Si vous avez 1 à 3 salariés et générez plus de volume, le Pilote 60 à 1 150€/mois. Tout est inclus : devis, factures, relances, trésorerie, dossier comptable. TVA non applicable (art. 293 B).",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous avec des serruriers ailleurs qu'en PACA ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios, tableau de bord en ligne. La PACA est ma zone prioritaire (Vence, Nice, Antibes, Cannes), mais j'accepte les serruriers partout en France.",
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
      intro="Vous gérez les urgences à 3h du matin. Vous n'avez pas le temps de faire des devis sous 24h, de relancer les impayés, de tenir un dossier comptable propre. Voilà précisément ce que je prends en charge pour vous, à partir de 750€/mois."
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
        name: 'Pilote 30',
        price: '750 € HT/mois',
        delay: 'Mise en route en 4 semaines',
        description: "Pour un serrurier solo (jusqu'à 30 devis+factures/mois). Tout votre admin opérationnel pris en charge. Vous m'envoyez un vocal WhatsApp depuis l'intervention, je m'occupe du reste.",
        features: [
          'Devis envoyés sous 1h après votre vocal — même la nuit',
          'Facturation, relances automatiques (J+15/J+30/J+45)',
          'OCR des tickets et frais classés par chantier',
          'Tableau de bord temps réel : CA, factures, trésorerie',
          'Notifications Telegram ou Push pour les événements importants',
          'Dossier comptable mensuel propre transmis à votre comptable',
          'Hotline WhatsApp dédiée 9h-17h jours ouvrés',
          'Visio bilan toutes les 2 semaines',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Appel découverte (30 min, gratuit)',
          description: "On parle de votre activité : volume mensuel, type d'interventions (urgences, B2B, particuliers), outils actuels. Je vous dis si on est faits pour bosser ensemble. Si oui, devis envoyé sous 24h.",
        },
        {
          step: '2',
          title: 'Mise en route Mois 1 (750€ HT)',
          description: "Audit de votre existant, récupération de vos historiques (clients, projets, factures), paramétrage Pennylane et WhatsApp dédié, formation 30 min. Premiers devis et factures faits ensemble pour valider le ton.",
        },
        {
          step: '3',
          title: 'Le quotidien (M2 et au-delà)',
          description: "Vous m'envoyez vocaux et photos depuis l'intervention. Je crée les devis, envoie les factures, relance les impayés, classe les frais, mets le planning à jour. Vous bossez. Je gère.",
        },
        {
          step: '4',
          title: 'Le rythme régulier',
          description: "Visio bilan toutes les 2 semaines (30 min) : trésorerie, devis en cours, factures à relancer. Hotline WhatsApp 9h-17h jours ouvrés pour vos questions. Reporting mensuel + dossier transmis au comptable.",
        },
      ]}
      faq={[
        {
          question: "Comment gérer mes devis urgents quand je suis en intervention de nuit ?",
          answer: "Vous m'envoyez un vocal WhatsApp depuis l'intervention. Je crée le devis détaillé et l'envoie au client dans l'heure, même la nuit. Le client peut signer en ligne et payer par carte. Vous, vous repartez sur l'urgence suivante.",
        },
        {
          question: "Et le suivi des factures impayées ?",
          answer: "Les relances partent automatiquement à J+15, J+30, J+45 sur les factures impayées. Sans intervention de votre part. Sur les serruriers que je connais, ça récupère en moyenne 2 à 4k€/mois de factures qui passent à la trappe.",
        },
        {
          question: "Combien ça coûte pour un serrurier indépendant ?",
          answer: "Le forfait Pilote 30 à 750€/mois HT couvre l'activité d'un serrurier solo (jusqu'à 30 documents/mois). Si vous avez 1 à 3 salariés, le Pilote 60 à 1 150€/mois. Tout est inclus : devis, factures, relances, trésorerie, dossier comptable. TVA non applicable.",
        },
        {
          question: "Travaillez-vous avec des serruriers ailleurs qu'en PACA ?",
          answer: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios, tableau de bord en ligne. La PACA est ma zone prioritaire, mais j'accepte les serruriers partout en France.",
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
            result: "Pilote 30 à 750€/mois. Devis envoyés sous 1h après vocal WhatsApp. Taux de signature passé de 75% à 92%. Gain estimé : ~1 500€/mois de CA additionnel + 5h/semaine récupérées.",
          },
          {
            situation: "Un serrurier-métallier d'Antibes avec 2 salariés. Sa femme fait l'admin le soir, ils sont en désaccord permanent sur l'organisation. Factures impayées qui s'accumulent (3-4k€ en cours).",
            result: "Pilote 60 à 1 150€/mois. Les relances automatiques rattrapent 2 800€ d'impayés en 2 mois. Sa femme reprend une activité pro ailleurs. Le couple respire.",
          },
        ],
        insight: "La spécificité d'un serrurier sur la Côte d'Azur : pic d'activité l'été (cambriolages secondaires, locataires saisonniers, professionnels touristiques), creux en hiver. Avoir un système qui tourne tout seul pendant les pics et qui ne pèse rien pendant les creux change tout.",
      }}
      jsonLd={jsonLd}
    />
  );
}
