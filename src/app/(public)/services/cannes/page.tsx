import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Cannes — artisans et TPE',
  description: "Création de site internet à Cannes pour artisans, restaurateurs et TPE : site vitrine 990€ HT livré en 3 semaines. Développeur basé à Vence (06).",
  alternates: { canonical: '/services/cannes' },
  openGraph: {
    title: 'Création de site internet à Cannes — OptiPro',
    description: "Site vitrine 990€ HT livré en 3 semaines, web app sur devis. Développeur indépendant basé à Vence, dans les Alpes-Maritimes.",
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
      h1="Création de site internet à Cannes pour artisans, commerces et TPE"
      intro="Vous cherchez un développeur près de vous pour créer votre site internet à Cannes. Je suis développeur web indépendant, basé à Vence dans les Alpes-Maritimes, et je construis des sites vitrines et des outils métier sur mesure pour les artisans, les commerces et les TPE. Site vitrine à 990€ HT, livré en 3 semaines, hébergement et nom de domaine inclus."
      economicContext="Cannes vit largement de l'hôtellerie-restauration, du commerce et de l'événementiel professionnel : les congrès et festivals amènent une clientèle de passage, exigeante et internationale, qui réserve et compare en ligne. Autour de cette économie tournent des artisans et des prestataires — agencement, rénovation, entretien, traiteurs, services aux résidences et aux locations meublées. Beaucoup travaillent essentiellement par recommandation et n'ont aucune vitrine en ligne : quand un client de passage cherche un restaurant, un artisan disponible ou un prestataire cannois depuis son téléphone, ils sont invisibles."
      geo={{ latitude: 43.5528, longitude: 7.0174 }}
      whyHere={[
        {
          title: "Basé dans les Alpes-Maritimes, pas ailleurs",
          description: "Je suis installé à Vence (06140) et je travaille sur tout le département, Cannes comprise. On peut se rencontrer pour cadrer le projet, ce qu'une agence qui publie des pages ville en série depuis l'autre bout de la France ne vous proposera jamais.",
        },
        {
          title: "Pensé pour une clientèle de passage",
          description: "À Cannes, une partie de vos clients ne vous connaissent pas encore et vous découvrent sur leur téléphone. Le site est construit pour répondre vite aux questions de base : ce que vous faites, où, à quels horaires, comment vous joindre.",
        },
        {
          title: "Un seul interlocuteur",
          description: "Du premier appel à la mise en ligne, vous parlez à la personne qui construit votre site. Pas de commercial, pas de chef de projet intermédiaire, pas de sous-traitance.",
        },
        {
          title: "Périmètre et prix définis au devis",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Ce qui est inclus est écrit noir sur blanc avant le démarrage — pas de dérive de budget en cours de route.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure : votre activité, vos prestations ou votre carte, vos coordonnées et votre emplacement à Cannes. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 3 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. C'est le pack le plus adapté aux commerces et restaurants cannois, très dépendants de la recherche locale.",
        },
        {
          icon: '🍽️',
          title: 'Pages adaptées à la restauration',
          description: "Carte lisible sur mobile, horaires, emplacement, lien vers votre outil de réservation existant, galerie photo. Sans plugin superflu qui ralentit le site pendant les périodes de forte affluence.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Une plateforme sur mesure quand un site vitrine ne suffit plus : gestion de commandes, suivi de chantiers, portail client, catalogue produits, tableaux de bord. Périmètre défini au devis.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois : textes, photos, horaires) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). Utile quand votre carte ou vos horaires changent souvent.",
        },
        {
          icon: '🏭',
          title: 'Référence : SAPAL Signalisation',
          description: "Ma réalisation de référence : une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Même exigence technique pour un site vitrine de 4 pages.",
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
          href: '/services/restaurateur',
          label: 'Site internet pour restaurateur',
          description: "La page dédiée à la restauration : carte, réservation, visibilité locale.",
        },
        {
          href: '/services/serrurier',
          label: 'Site internet pour serrurier',
          description: "La page dédiée aux serruriers : urgences, zone couverte, appel en un clic.",
        },
      ]}
      faq={[
        {
          question: "Vous travaillez sur tout le bassin cannois ?",
          answer: "Oui. Cannes-Centre, La Croisette, La Bocca, Le Cannet, et le reste de l'agglomération Cannes Pays de Lérins : Mougins, Mandelieu-la-Napoule, Théoule-sur-Mer, La Roquette-sur-Siagne. Je suis basé à Vence, donc dans le même département : un rendez-vous sur place pour cadrer le projet est possible.",
        },
        {
          question: "Combien coûte un site internet pour un commerce ou un artisan à Cannes ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Web app ou outil métier : sur devis après un premier appel.",
        },
        {
          question: "Je suis restaurateur à Cannes, vous pouvez gérer ma carte et mes réservations ?",
          answer: "Votre carte, oui : elle est intégrée au site, lisible sur mobile, et modifiable via la maintenance quand elle change. Pour les réservations, le plus simple est généralement de brancher le site sur l'outil que vous utilisez déjà plutôt que d'en développer un nouveau. On en parle pendant l'appel découverte pour choisir la solution la plus simple à vivre au quotidien.",
        },
        {
          question: "En combien de temps le site est-il en ligne ?",
          answer: "Un site vitrine est livré en 3 semaines. Pour une web app ou un outil métier, le délai dépend du périmètre : il est défini avec vous et inscrit dans le devis avant le démarrage.",
        },
        {
          question: "Mes clients sont souvent étrangers. Le site peut être en anglais ?",
          answer: "C'est une demande fréquente à Cannes et cela se traite au moment du devis, car une version bilingue double le contenu à produire et à maintenir. On regarde ensemble si une seconde langue est vraiment utile pour votre activité, ou si des pages essentielles traduites suffisent.",
        },
        {
          question: "Vous avez des références à Cannes ?",
          answer: "Ma réalisation de référence est SAPAL Signalisation : une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Je préfère vous parler d'un projet réel que d'aligner des logos. Pendant l'appel découverte, je peux vous montrer concrètement ce qui a été construit.",
        },
      ]}
    />
  );
}
