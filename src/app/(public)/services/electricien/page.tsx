import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Assistant administratif pour électriciens — OptiPro PACA',
  description:
    'Service d\'assistant admin externalisé pour électriciens. Devis multi-chantiers (rénovation, neuf, Consuel), factures, relances, comptable. À partir de 650€/mois ou 75€/h. Vence (06), interventions PACA et France.',
  alternates: { canonical: '/services/electricien' },
  openGraph: {
    title: 'Assistant admin pour électriciens — OptiPro',
    description: 'Vous gérez les chantiers, je gère votre admin. Mission ou pack mensuel — dès 650€/mois.',
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
      description: 'Service d\'assistant administratif externalisé pour électriciens indépendants et TPE. Gestion des devis multi-chantiers, factures, relances, trésorerie, suivi Consuel, dossier comptable mensuel.',
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
            text: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible pour un suivi régulier : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous avec des électriciens ailleurs qu'en PACA ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Le service est 100% à distance — vocaux WhatsApp, visios. La PACA est ma zone prioritaire, mais j'accepte les électriciens partout en France.",
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
      intro="Vous tirez des câbles, vous validez des Consuel, vous coordonnez des chantiers. Vous n'avez pas le temps de structurer des devis détaillés à 23h ni de courir derrière les paiements. Voilà ce que je prends en charge pour vous, à partir de 650€/mois ou 75€/h."
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
          question: "Comment gérer les devis sur un chantier de rénovation lourde ?",
          answer: "Vous m'envoyez le métré et le détail en vocal ou photo. Je structure le devis avec lots, postes, fournitures, main d'œuvre. Avenants pendant le chantier ? Vous me dites « ajoute 3 prises et 2 va-et-vient au salon », je fais l'avenant et je l'envoie pour signature.",
        },
        {
          question: "Vous suivez les démarches Consuel ?",
          answer: "Je ne fais pas la démarche technique (c'est votre métier réglementé). Mais je suis le calendrier administratif : envoi des dossiers, relance Consuel si pas de réponse sous 30 jours, notif au client une fois l'attestation reçue. Vous gardez la main sur la partie technique, je gère le suivi calendaire.",
        },
        {
          question: "Combien ça coûte pour un électricien indépendant ?",
          answer: "Deux formules. Mission à l'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible pour un suivi régulier : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. TVA non applicable. Préavis 15 jours fin de mois sur les packs.",
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
            result: "Pack Croissance (20h) à 1 200€/mois. Tous les avenants sont systématiquement faits depuis ses vocaux. Sur 6 mois : +12 000€ de CA additionnel récupéré.",
          },
          {
            situation: "Un électricien-installateur RGE de Cagnes-sur-Mer, 3 salariés. Activité mixte (résidentiel + petit tertiaire). Suivi Consuel chaotique, plaintes clients régulières.",
            result: "Pack Croissance (20h) avec suivi Consuel structuré. Délai moyen Consuel passé de 6 semaines à 3 semaines (relance systématique). Plaintes clients sur ce sujet : zéro.",
          },
        ],
        insight: "La spécificité d'un électricien : la marge réelle se joue sur le tracking des fournitures par chantier. Sans système qui classe automatiquement les tickets de caisse et les factures fournisseurs par projet, vous ne savez jamais quel chantier vous a vraiment rapporté.",
      }}
      jsonLd={jsonLd}
    />
  );
}
