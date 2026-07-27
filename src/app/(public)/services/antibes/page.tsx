import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Antibes — artisans et TPE',
  description: "Création de site internet à Antibes et Juan-les-Pins pour artisans et TPE : site vitrine 990€ HT livré en 4 semaines. Développeur basé à Vence (06).",
  alternates: { canonical: '/services/antibes' },
  openGraph: {
    title: 'Création de site internet à Antibes — OptiPro',
    description: "Site vitrine 990€ HT livré en 4 semaines, web app sur devis. Développeur indépendant basé à Vence, proche d'Antibes.",
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
      h1="Création de site internet à Antibes et Juan-les-Pins"
      intro="Vous cherchez un développeur proche de vous pour créer votre site internet à Antibes ou à Juan-les-Pins. Je suis développeur web indépendant, basé à Vence dans les Alpes-Maritimes, et je construis des sites vitrines et des outils métier sur mesure pour les artisans et les TPE. Site vitrine à 990€ HT, livré en 4 semaines, hébergement et nom de domaine inclus."
      economicContext="Antibes est marquée par le nautisme : le port Vauban et les activités qui l'entourent — entretien et réparation de bateaux, sellerie marine, mécanique, électronique embarquée, avitaillement, services aux équipages — font vivre un tissu dense de petites entreprises très spécialisées. À cela s'ajoutent les artisans du bâtiment qui entretiennent et rénovent les villas du Cap et les résidences de Juan-les-Pins, ainsi qu'un environnement de TPE de services lié à la proximité de Sophia Antipolis. Ces métiers de niche sont souvent difficiles à trouver en ligne : le savoir-faire existe, la vitrine web manque."
      geo={{ latitude: 43.5808, longitude: 7.1239 }}
      whyHere={[
        {
          title: "Un développeur du 06, pas une agence à distance",
          description: "Je suis installé à Vence (06140), à une trentaine de kilomètres d'Antibes. Un rendez-vous sur place pour cadrer le projet est possible — ce que ne propose pas une agence qui génère des pages « site internet Antibes » sans être implantée dans le département.",
        },
        {
          title: "Adapté aux métiers très spécialisés",
          description: "Sellerie marine, électronique embarquée, mécanique, second œuvre : plus votre métier est de niche, plus il est important que le site explique précisément ce que vous faites. C'est ce qui vous rend trouvable par les bons clients.",
        },
        {
          title: "Un seul interlocuteur",
          description: "Vous parlez à la personne qui construit le site, du premier appel jusqu'à la mise en ligne. Pas de commercial, pas d'intermédiaire, pas de sous-traitance.",
        },
        {
          title: "Périmètre et prix écrits au devis",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Le périmètre et les livrables sont définis avant de commencer, ce qui évite les discussions à la livraison.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure : votre activité, vos prestations, votre atelier ou votre zone d'intervention à Antibes et Juan-les-Pins. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 4 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local — pour être trouvé sur les recherches locales autour du port Vauban, du Cap et de Juan-les-Pins.",
        },
        {
          icon: '⚓',
          title: 'Pages métier pour le nautisme',
          description: "Une page par spécialité plutôt qu'une page fourre-tout : entretien, réparation, sellerie, électronique, hivernage. Un client qui cherche une prestation précise tombe sur la page qui y répond.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Catalogue de pièces ou de références, portail client, suivi d'interventions et de chantiers, gestion de commandes, tableaux de bord. De quoi remplacer les fichiers Excel qui circulent entre l'atelier et le bureau.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois de mises à jour de contenu) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). Sans engagement de durée.",
        },
        {
          icon: '🏭',
          title: 'Référence : SAPAL Signalisation',
          description: "Ma réalisation de référence : une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Un bon repère si vous avez un catalogue technique à mettre en ligne.",
        },
      ]}
      relatedLinks={[
        {
          href: '/tarifs',
          label: 'Tarifs détaillés',
          description: "Site vitrine, Site vitrine Pro, web app, maintenance : les prix et ce qui est inclus.",
        },
        {
          href: '/le-service',
          label: 'Le service en détail',
          description: "Ce que je construis, comment se déroule un projet, et ce que vous recevez.",
        },
        {
          href: '/services/electricien',
          label: 'Site internet pour électricien',
          description: "La page dédiée aux électriciens : prestations, dépannage, demandes de devis.",
        },
        {
          href: '/services/plombier',
          label: 'Site internet pour plombier',
          description: "La page dédiée aux plombiers : urgences, zone couverte, contact rapide.",
        },
      ]}
      faq={[
        {
          question: "Vous créez des sites sur tout Antibes et Juan-les-Pins ?",
          answer: "Oui. Antibes-Centre, le Vieil Antibes, Juan-les-Pins, le Cap d'Antibes, La Fontonne, Les Semboules, et le reste de la Communauté d'agglomération Sophia Antipolis. Je suis basé à Vence, dans le même département : un rendez-vous sur place pour cadrer le projet est possible.",
        },
        {
          question: "Combien coûte un site internet pour un artisan antibois ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Une web app ou un outil métier se chiffre sur devis.",
        },
        {
          question: "Je travaille dans le nautisme au port Vauban. Un site vitrine est-il utile ?",
          answer: "Oui, surtout pour un métier spécialisé. Un propriétaire ou un équipage qui cherche une prestation précise commence presque toujours par une recherche en ligne, parfois avant même d'arriver au port. Un site qui décrit clairement vos spécialités, votre atelier et vos moyens de contact vous rend comparable — et joignable — au moment où la demande se présente.",
        },
        {
          question: "En combien de temps le site est-il en ligne ?",
          answer: "Un site vitrine est livré en 4 semaines. Pour une web app ou un outil métier, le délai dépend du périmètre : il est défini avec vous et écrit dans le devis avant le démarrage.",
        },
        {
          question: "J'ai un catalogue de pièces et de références. Vous pouvez le mettre en ligne ?",
          answer: "Oui, c'est typiquement un projet de web app plutôt que de site vitrine, et cela se chiffre sur devis. Ma réalisation de référence, SAPAL Signalisation, est exactement ça : une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API.",
        },
        {
          question: "Je suis une TPE de services vers Sophia Antipolis. Vous travaillez aussi pour ce profil ?",
          answer: "Oui. Conseil, ingénierie, services B2B : le besoin est souvent moins un site vitrine classique qu'un outil interne — suivi de projets, portail client, tableaux de bord. On regarde pendant l'appel découverte ce qui vous fait réellement gagner du temps, puis je chiffre sur devis.",
        },
      ]}
    />
  );
}
