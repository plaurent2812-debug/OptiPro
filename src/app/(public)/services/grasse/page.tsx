import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Assistant administratif à Grasse — Bras droit admin & opérationnel OptiPro',
  description: 'Externalisation administrative pour artisans, indépendants et TPE à Grasse et alentours. Devis, factures, relances, fournisseurs. Dès 650€/mois ou 75€/h.',
  alternates: { canonical: '/services/grasse' },
  openGraph: {
    title: 'Assistant administratif à Grasse — OptiPro',
    description: 'Le bras droit admin & opérationnel des artisans grassois. Mission ou pack mensuel dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/grasse',
    type: 'website',
  },
};

export default function GrassePage() {
  return (
    <CityServicePage
      cityName="Grasse"
      cityNameInClause="à Grasse"
      citySlug="grasse"
      postalCodes={['06130']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Le bras droit administratif des artisans et TPE grassois"
      intro="Vous êtes artisan ou dirigeant de TPE à Grasse. Entre le centre médiéval, les zones industrielles parfumées et l'arrière-pays vallonné, vous gérez une activité avec ses spécificités : chantiers en zones rurales, clientèle locale fidèle, fournisseurs disséminés. OptiPro reprend tout l'admin et l'opérationnel pour que vous restiez sur le terrain."
      economicContext="Grasse vit avec deux économies distinctes : l'industrie de la parfumerie et de l'arôme (Robertet, Mane, Givaudan, Charabot, Symrise) qui structure de nombreux sous-traitants techniques (chimie, conditionnement, transport spécialisé), et un tissu d'artisans BTP et de services qui dessert une zone géographique étendue (Pays de Grasse, Mougins, Peymeinade, Pégomas, Mouans-Sartoux). Les artisans grassois ont souvent des trajets plus longs entre chantiers que leurs confrères niçois ou cannois — chaque minute économisée sur l'admin compte double."
      geo={{ latitude: 43.6584, longitude: 6.9229 }}
      whyHere={[
        {
          title: 'Adapté aux artisans en zone semi-rurale',
          description: 'Grasse et son arrière-pays exigent des trajets plus longs entre chantiers. OptiPro vous fait gagner les 5-10h/semaine que vous perdriez à faire de l\'admin entre deux interventions.',
        },
        {
          title: 'Connaissance des fournisseurs industriels',
          description: 'Si votre activité est liée à l\'industrie parfumerie (sous-traitance, transport, conditionnement), Pierre maîtrise les enjeux ADV B2B technique grâce à ses 5 ans chez Factory (7M€ ADV/an).',
        },
        {
          title: 'Service 100% à distance',
          description: 'WhatsApp dédié, visios. Vence est à 50 km de Grasse. Déplacement possible pour audit initial ou point trimestriel, sans frais sur la zone PACA.',
        },
        {
          title: 'Aucun outil à apprendre',
          description: 'OptiPro utilise les outils que vous avez déjà : Pennylane, Sage, Excel, EBP. Pas de nouvelle plateforme à maîtriser, pas de migration imposée.',
        },
      ]}
      services={[
        {
          icon: '📄',
          title: 'Devis & factures',
          description: 'Vocal WhatsApp depuis le chantier → devis structuré envoyé sous 1h. Facturation J+1 après intervention. Conforme PDP 2026-2027.',
        },
        {
          icon: '💰',
          title: 'Trésorerie et relances',
          description: 'Suivi quotidien des encaissements, relances impayés (J+15, J+30, J+45). 2 à 5k€/mois récupérés en moyenne sur les factures qui dormaient.',
        },
        {
          icon: '🤝',
          title: 'Suivi fournisseurs',
          description: 'Indispensable pour les activités liées à l\'industrie parfumerie (commandes spécifiques, traçabilité, contrôle qualité fournisseur).',
        },
        {
          icon: '📋',
          title: 'Préparation comptable',
          description: 'Dossier mensuel propre livré à votre expert-comptable grassois ou cannois. FEC à jour, factures classées, frais saisis.',
        },
        {
          icon: '📊',
          title: 'Tableaux de bord',
          description: 'Visibilité sur votre trésorerie, vos en-cours, votre rentabilité par chantier ou par client. Visio mensuelle de 30 min.',
        },
        {
          icon: '🗓️',
          title: 'Planning et coordination',
          description: 'Gestion des RDV, coordination sous-traitants, planning chantier. Particulièrement utile en arrière-pays grassois où les trajets sont longs.',
        },
      ]}
      faq={[
        {
          question: 'Vous travaillez avec des artisans dans tout le Pays de Grasse ?',
          answer: 'Oui. Grasse, Mougins, Peymeinade, Mouans-Sartoux, Pégomas, Cabris, Saint-Vallier-de-Thiey, et toute l\'agglomération du Pays de Grasse. Service 100% à distance, sans frais de déplacement.',
        },
        {
          question: 'Vous avez l\'habitude des activités liées à la parfumerie ?',
          answer: 'Pierre a 5 ans d\'expérience en pilotage ADV chez Factory sur des projets B2B techniques (20k€ à 1M€). Les méthodes ADV s\'appliquent aux sous-traitants industriels parfumerie : cadenciers, multi-BC, traçabilité, facturation complexe.',
        },
        {
          question: 'Vous pouvez vous déplacer à Grasse si besoin ?',
          answer: 'Oui, possible pour un audit initial ou un point trimestriel. Vence est à 50 km de Grasse. Aucun frais de déplacement facturé sur la zone PACA.',
        },
        {
          question: 'Combien ça coûte pour un artisan grassois ?',
          answer: 'Deux formules. Mission à l\'heure (75€/h HT) pour les besoins ponctuels. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. Préavis 15 jours fin de mois. Période d\'essai 30 jours sans frais.',
        },
        {
          question: 'Vous gérez les déclarations URSSAF / RSI pour les auto-entrepreneurs ?',
          answer: 'Je prépare les éléments (chiffre d\'affaires, factures classées, suivi des plafonds). La déclaration elle-même reste à votre charge ou à celle de votre comptable. Mais avec un dossier propre, ça prend 10 min au lieu de 2h.',
        },
      ]}
    />
  );
}
