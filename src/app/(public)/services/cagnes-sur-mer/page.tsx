import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Cagnes-sur-Mer — artisans, TPE',
  description: "Création de site internet à Cagnes-sur-Mer pour artisans et commerces : site vitrine 990€ HT livré en 3 semaines. Développeur basé à Vence, à 15 km.",
  alternates: { canonical: '/services/cagnes-sur-mer' },
  openGraph: {
    title: 'Création de site internet à Cagnes-sur-Mer — OptiPro',
    description: "Site vitrine 990€ HT livré en 3 semaines, web app sur devis. Développeur indépendant basé à Vence, à 15 km de Cagnes-sur-Mer.",
    url: 'https://www.opti-pro.fr/services/cagnes-sur-mer',
    type: 'website',
  },
};

export default function CagnesSurMerPage() {
  return (
    <CityServicePage
      cityName="Cagnes-sur-Mer"
      cityNameInClause="à Cagnes-sur-Mer"
      citySlug="cagnes-sur-mer"
      postalCodes={['06800']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Création de site internet à Cagnes-sur-Mer pour artisans et TPE"
      intro="Vous cherchez quelqu'un tout près pour vous faire un site internet à Cagnes-sur-Mer. Je suis développeur web indépendant, basé à Vence, à une quinzaine de kilomètres de Cagnes : je construis des sites vitrines et des outils métier sur mesure pour les artisans, les commerces et les TPE. Site vitrine à 990€ HT, livré en 3 semaines, hébergement et nom de domaine inclus."
      economicContext="Cagnes-sur-Mer repose largement sur le commerce de proximité et l'artisanat : les commerces du centre-ville, les restaurants et les activités du Cros-de-Cagnes, les boutiques du Haut-de-Cagnes, ainsi que l'animation liée à l'hippodrome de la Côte d'Azur. À cela s'ajoutent de nombreux artisans du bâtiment et prestataires de services qui interviennent aussi bien sur la commune que sur Nice et Antibes, toutes proches. Cette clientèle est locale, fidèle, mais elle vérifie de plus en plus en ligne avant d'appeler — et une entreprise sans site apparaît souvent moins fiable qu'un concurrent qui en a un."
      geo={{ latitude: 43.6634, longitude: 7.1495 }}
      whyHere={[
        {
          title: "À quinze kilomètres de chez vous",
          description: "Je suis installé à Vence (06140), la commune voisine par la route de la vallée du Loup. Cagnes est à une quinzaine de kilomètres : un rendez-vous sur place pour cadrer le projet ne pose aucun problème.",
        },
        {
          title: "Pensé pour la clientèle de proximité",
          description: "Vos clients sont surtout des habitants du secteur. Le site doit répondre vite aux questions de base — ce que vous faites, où vous êtes, à quels horaires, comment vous joindre — et être impeccable sur mobile.",
        },
        {
          title: "Utile si vous couvrez plusieurs communes",
          description: "Beaucoup d'artisans cagnois travaillent aussi sur Nice, Saint-Laurent-du-Var et Antibes. Le site peut indiquer clairement votre zone d'intervention, ce qui évite les demandes hors périmètre.",
        },
        {
          title: "Périmètre et prix définis au devis",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Le périmètre et les livrables sont écrits avant de démarrer, sans surprise à la livraison.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure : votre activité, vos prestations, votre adresse ou votre zone d'intervention à Cagnes-sur-Mer. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 3 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. C'est ce qui compte le plus pour un commerce ou un artisan qui vit de la recherche « près de moi ».",
        },
        {
          icon: '🏪',
          title: "Pages pour le commerce de proximité",
          description: "Horaires, adresse, plan d'accès, photos de la boutique, présentation de vos produits ou services. De quoi donner envie de pousser la porte plutôt que d'aller au centre commercial voisin.",
        },
        {
          icon: '🗺️',
          title: "Page zone d'intervention",
          description: "Si vous intervenez entre Cagnes, Nice, Saint-Laurent-du-Var et Antibes, une page dédiée à votre zone clarifie votre périmètre pour vos clients comme pour Google.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Suivi de chantiers, planning d'interventions, gestion de commandes, portail client, catalogue produits, tableaux de bord. Pour remplacer le carnet et les fichiers Excel par un outil accessible depuis le téléphone.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois : textes, photos, horaires) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). Sans engagement de durée.",
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
          href: '/services/plombier',
          label: 'Site internet pour plombier',
          description: "La page dédiée aux plombiers : urgences, zone d'intervention, devis.",
        },
        {
          href: '/services/electricien',
          label: 'Site internet pour électricien',
          description: "La page dédiée aux électriciens : prestations, dépannage, contact rapide.",
        },
        {
          href: '/services/vence',
          label: 'Création de site internet à Vence',
          description: "La commune voisine, où OptiPro est installé — rendez-vous sur place possible.",
        },
      ]}
      faq={[
        {
          question: "Vous travaillez dans tous les quartiers de Cagnes-sur-Mer ?",
          answer: "Oui. Cagnes-Centre, Cros-de-Cagnes, Haut-de-Cagnes, Val Fleuri, Les Vespins, le secteur de l'hippodrome, et les communes voisines comme Villeneuve-Loubet, Saint-Laurent-du-Var ou La Colle-sur-Loup. Je suis basé à Vence, à une quinzaine de kilomètres : on peut se voir sur place pour cadrer le projet.",
        },
        {
          question: "Combien coûte un site internet pour un artisan ou un commerce cagnois ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Web app ou outil métier : sur devis.",
        },
        {
          question: "En combien de temps mon site est-il en ligne ?",
          answer: "Un site vitrine est livré en 3 semaines. Pour une web app ou un outil métier, le délai dépend du périmètre retenu : il est défini avec vous et écrit dans le devis avant le démarrage.",
        },
        {
          question: "Je travaille sur Cagnes mais aussi sur Nice et Antibes. Comment le montrer ?",
          answer: "Le site indique votre zone d'intervention réelle, commune par commune si nécessaire. C'est utile pour vos clients, qui savent immédiatement si vous vous déplacez chez eux, et pour Google, qui comprend mieux où vous travaillez. C'est inclus dans la structure du site, sans supplément.",
        },
        {
          question: "Je n'ai qu'une page Facebook. Est-ce suffisant ?",
          answer: "Une page Facebook vous donne une présence, mais elle ne vous appartient pas, elle ressort mal dans les recherches Google et elle ne convertit pas très bien un visiteur en demande de devis. Un site vitrine avec votre propre nom de domaine et une fiche Google My Business à jour joue un rôle différent et complémentaire. Les deux peuvent cohabiter.",
        },
        {
          question: "Que se passe-t-il après la première année d'hébergement ?",
          answer: "L'hébergement est inclus pendant un an dans le pack Site vitrine. Au terme de cette période, on fait le point : soit vous continuez avec moi, éventuellement via une formule de maintenance à 79€ ou 129€ par mois, soit vous récupérez votre site et votre nom de domaine pour les héberger ailleurs. Rien n'est verrouillé de votre côté.",
        },
      ]}
    />
  );
}
