import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Assistant administratif pour électriciens — OptiPro PACA',
  description:
    'Service d\'assistant admin externalisé pour électriciens. Devis multi-chantiers (rénovation, neuf, Consuel), factures, relances, comptable. À partir de 750€/mois. Vence (06), interventions PACA et France.',
  alternates: { canonical: '/services/electricien' },
  openGraph: {
    title: 'Assistant admin pour électriciens — OptiPro',
    description: 'Vous gérez les chantiers, je gère votre admin. Devis détaillés sur chantiers complexes, suivi Consuel, dossier comptable. Pilote dès 750€/mois.',
    url: 'https://www.opti-pro.fr/services/electricien',
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
        { '@type': 'ListItem', position: 3, name: 'Électricien', item: 'https://www.opti-pro.fr/services/electricien' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/services/electricien#service',
      name: 'Assistant administratif externalisé pour électriciens',
      serviceType: 'AdministrativeService',
      description: 'Service d\'assistant administratif externalisé pour électriciens indépendants et TPE. Gestion des devis multi-chantiers, factures, relances, trésorerie, suivi Consuel, dossier comptable mensuel. Tableau de bord temps réel inclus.',
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
      audience: { '@type': 'Audience', name: 'Électriciens, électriciens du bâtiment, installateurs RGE' },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '750',
        highPrice: '1500',
        priceCurrency: 'EUR',
        offerCount: 3,
        valueAddedTaxIncluded: false,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Comment gérer les devis sur un chantier de rénovation lourde ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vous m'envoyez le métré et le détail des prestations en vocal ou photo. Je structure le devis avec lots, postes, fournitures, main d'œuvre. Avenants pendant le chantier ? Vous me dites « ajoute 3 prises et 2 va-et-vient au salon », je fais l'avenant et je l'envoie pour signature. Pas besoin d'attendre le bureau le soir.",
          },
        },
        {
          '@type': 'Question',
          name: "Vous suivez les démarches Consuel ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je ne fais pas la démarche technique (c'est votre métier réglementé). Mais je suis le calendrier administratif : envoi des dossiers, relance Consuel si pas de réponse sous 30 jours, notif au client une fois l'attestation reçue. Vous gardez la main sur la partie technique, je gère le suivi calendaire.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien ça coûte pour un électricien indépendant ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le forfait Pilote 30 à 750€/mois HT couvre l'activité d'un électricien solo (jusqu'à 30 documents/mois). Avec 2-3 salariés et plus de volume, Pilote 60 à 1 150€/mois. TPE 4-8 personnes, Pilote 100 à 1 500€/mois. TVA non applicable.",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous avec des électriciens ailleurs qu'en PACA ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios, tableau de bord en ligne. La PACA est ma zone prioritaire, mais j'accepte les électriciens partout en France.",
          },
        },
      ],
    },
  ],
};

export default function ElectricienPage() {
  return (
    <LandingPage
      badge="Pour électriciens et installateurs"
      h1="L'assistant administratif des électriciens"
      intro="Vous tirez des câbles, vous validez des Consuel, vous coordonnez des chantiers. Vous n'avez pas le temps de structurer des devis détaillés à 23h ni de courir derrière les paiements. Voilà ce que je prends en charge pour vous, à partir de 750€/mois."
      painSection={{
        title: "Quels sont les vrais blocages d'un électricien indépendant aujourd'hui ?",
        points: [
          "Devis multi-chantiers (lots, postes, fournitures, MO) impossibles à faire entre deux interventions.",
          "Avenants oubliés sur les chantiers de rénovation, manque à gagner en fin de projet.",
          "Suivi Consuel : dossiers égarés, relances ratées, clients qui appellent pour savoir où ça en est.",
          "Factures impayées qui traînent — 1 800 à 3 500€/mois passent à la trappe.",
          "Justificatifs en vrac, comptable qui râle en fin d'année, marge réelle inconnue.",
        ],
      }}
      featuredOffer={{
        name: 'Pilote 30',
        price: '750 € HT/mois',
        delay: 'Mise en route en 4 semaines',
        description: "Pour un électricien solo (jusqu'à 30 devis+factures/mois). Devis structurés, avenants gérés, suivi Consuel, relances automatiques, dossier comptable mensuel.",
        features: [
          'Devis détaillés multi-chantiers (lots, postes, fournitures, MO)',
          'Avenants gérés à la volée depuis vos vocaux',
          'Suivi calendaire Consuel (envoi, relance, notif client)',
          'Facturation et relances automatiques (J+15/J+30/J+45)',
          'OCR des tickets et fournitures classés par chantier',
          'Tableau de bord temps réel : CA, marge par chantier, trésorerie',
          'Hotline WhatsApp dédiée 9h-17h jours ouvrés',
          'Dossier comptable mensuel propre',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Appel découverte (30 min, gratuit)',
          description: "On parle de votre activité : volume mensuel, type de chantiers (résidentiel, tertiaire, industriel), certifications RGE, outils actuels. Je vous dis si on est faits pour bosser ensemble. Devis envoyé sous 24h.",
        },
        {
          step: '2',
          title: 'Mise en route Mois 1 (750€ HT)',
          description: "Audit de votre existant, récupération de vos historiques chantiers, paramétrage Pennylane et WhatsApp dédié. Mise en place du tableau de bord avec marge par chantier. Premiers devis et factures faits ensemble.",
        },
        {
          step: '3',
          title: 'Le quotidien (M2 et au-delà)',
          description: "Vous m'envoyez le métré ou les photos. Je structure les devis détaillés, fais les avenants, suis les Consuel, relance les impayés. Vous, vous tirez les câbles.",
        },
        {
          step: '4',
          title: 'Le rythme régulier',
          description: "Visio bilan toutes les 2 semaines : marge par chantier, devis en cours, Consuel en attente, factures à relancer. Hotline WhatsApp 9h-17h. Reporting mensuel + dossier au comptable.",
        },
      ]}
      faq={[
        {
          question: "Comment gérer les devis sur un chantier de rénovation lourde ?",
          answer: "Vous m'envoyez le métré et le détail en vocal ou photo. Je structure le devis avec lots, postes, fournitures, main d'œuvre. Avenants pendant le chantier ? Vous me dites « ajoute 3 prises et 2 va-et-vient au salon », je fais l'avenant et je l'envoie pour signature.",
        },
        {
          question: "Vous suivez les démarches Consuel ?",
          answer: "Je ne fais pas la démarche technique (c'est votre métier réglementé). Mais je suis le calendrier administratif : envoi des dossiers, relance Consuel si pas de réponse sous 30 jours, notif au client une fois l'attestation reçue. Vous gardez la main sur la partie technique, je gère le suivi calendaire.",
        },
        {
          question: "Combien ça coûte pour un électricien indépendant ?",
          answer: "Pilote 30 à 750€/mois HT pour un solo. Pilote 60 à 1 150€/mois avec 2-3 salariés. Pilote 100 à 1 500€/mois pour 4-8 personnes. TVA non applicable. Tout inclus : devis, factures, relances, suivi Consuel, dossier comptable.",
        },
        {
          question: "Travaillez-vous avec des électriciens ailleurs qu'en PACA ?",
          answer: "Oui. Service 100% à distance. PACA prioritaire, mais j'accepte les électriciens partout en France.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "toute la PACA et la France à distance"]}
      industryContext={{
        title: "La réalité de l'électricien indépendant en 2026 — pourquoi déléguer l'admin n'est plus un luxe",
        intro: "Pendant 10 ans, j'ai piloté des opérations en logistique et exploitation, dont des entreprises d'électricité du bâtiment. J'ai vu de l'intérieur ce qui distingue les électriciens qui scalent leur activité de ceux qui restent coincés.",
        keyFacts: [
          {
            stat: '8-12h',
            label: "consacrées chaque semaine à l'administratif chez un électricien indépendant",
            source: 'CAPEB',
          },
          {
            stat: '15-30%',
            label: "des avenants ne sont pas facturés (oubliés ou jamais envoyés au client)",
            source: 'Estimation propre, échantillon PACA 2026',
          },
          {
            stat: '60-90 jours',
            label: "délai moyen de paiement client en B2B électricité",
            source: 'INSEE 2024',
          },
          {
            stat: '20%',
            label: "de marge perdue en moyenne quand les fournitures ne sont pas tracées par chantier",
            source: 'Estimation OptiPro',
          },
        ],
        miniCases: [
          {
            situation: "Un électricien d'Antibes, 8 ans d'activité, 1 salarié. Spécialité rénovation lourde. Il oublie systématiquement de faire les avenants, perd 1 500-2 500€ par chantier.",
            result: "Pilote 60 à 1 150€/mois. Tous les avenants sont systématiquement faits depuis ses vocaux. Sur 6 mois : +12 000€ de CA additionnel récupéré.",
          },
          {
            situation: "Un électricien-installateur RGE de Cagnes-sur-Mer, 3 salariés. Activité mixte (résidentiel + petit tertiaire). Suivi Consuel chaotique, plaintes clients régulières.",
            result: "Pilote 60 + suivi Consuel structuré. Délai moyen Consuel passé de 6 semaines à 3 semaines (relance systématique). Plaintes clients sur ce sujet : zéro.",
          },
        ],
        insight: "La spécificité d'un électricien : la marge réelle se joue sur le tracking des fournitures par chantier. Sans système qui classe automatiquement les tickets de caisse et les factures fournisseurs par projet, vous ne savez jamais quel chantier vous a vraiment rapporté.",
      }}
      jsonLd={jsonLd}
    />
  );
}
