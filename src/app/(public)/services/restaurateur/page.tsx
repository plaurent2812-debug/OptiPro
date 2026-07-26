import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Création de site internet pour restaurant — PACA',
  description:
    "Site internet pour restaurant : menu toujours à jour, réservation en ligne, photos de vos plats et fiche Google renseignée. Dès 990€ HT, livré en 3 semaines. Vence (06).",
  alternates: { canonical: '/services/restaurateur' },
  openGraph: {
    title: 'Création de site internet pour restaurant — OptiPro',
    description:
      "Carte à jour, réservation en ligne, photos qui donnent envie : le site qui remplit vos couverts. Dès 990€ HT, livré en 3 semaines.",
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
      name: 'Création de site internet pour restaurant, café et brasserie',
      serviceType: 'WebDevelopment',
      description:
        "Création de sites vitrines et d'outils web sur mesure pour restaurants, cafés et brasseries : carte et menus modifiables, réservation en ligne, galerie photo des plats et de la salle, horaires et fiche Google My Business, page privatisation et groupes, SEO local.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Mougins' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
      ],
      audience: { '@type': 'Audience', name: 'Restaurateurs, patrons de café, brasseries, traiteurs' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Site vitrine',
          description:
            "3 à 4 pages sur mesure, hébergement 1 an inclus, nom de domaine inclus, adresse email professionnelle.",
          price: 990,
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
          url: 'https://www.opti-pro.fr/tarifs',
        },
        {
          '@type': 'Offer',
          name: 'Site vitrine Pro',
          description:
            "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local.",
          price: 1390,
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
          url: 'https://www.opti-pro.fr/tarifs',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Comment prendre des réservations en ligne sur mon site ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Deux approches selon votre organisation. La plus simple : un formulaire de réservation avec date, service, nombre de couverts, téléphone et demande particulière, qui arrive sur votre email professionnel et que vous confirmez par téléphone ou par retour de mail. Vous gardez la main sur le plan de salle et vous ne payez aucune commission. L'autre approche consiste à intégrer proprement l'outil de réservation que vous utilisez déjà, ou à développer un vrai module de réservation avec gestion des créneaux et des places disponibles : dans ce cas on est sur l'offre web app, sur devis, parce que le périmètre dépend de votre fonctionnement.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment garder ma carte à jour quand je change de plats chaque semaine ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "C'est le point qui fait échouer la plupart des sites de restaurant : une carte périmée depuis huit mois avec des prix qui ne sont plus les bons. Deux solutions selon vos habitudes. Avec un forfait de maintenance, vous m'envoyez la nouvelle carte et je la mets en ligne : Maintenance Essentiel à 79€ par mois pour 1h mensuelle, Maintenance Pro à 129€ par mois pour 2h avec traitement prioritaire. Si vous changez trop souvent pour ça, on construit dès le départ le site pour que vous puissiez modifier vous-même les plats et les prix, sans toucher au reste.",
          },
        },
        {
          '@type': 'Question',
          name: "Le site sert à quoi si j'ai déjà une fiche Google et un compte Instagram ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Ils ne font pas le même travail. La fiche Google et Instagram donnent envie et amènent le visiteur ; le site est le seul endroit que vous contrôlez, où la carte complète, les horaires exacts, les allergènes, l'accès et le stationnement, la privatisation et la réservation sont réunis. Instagram ne dit pas si vous êtes ouvert lundi soir et ne prend pas une réservation pour douze personnes. Et sur un smartphone, la fiche Google affiche un lien vers votre site : c'est souvent lui qui transforme la curiosité en table réservée.",
          },
        },
        {
          '@type': 'Question',
          name: "Faut-il vraiment des photos professionnelles de mes plats ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "En restauration, la photo est l'argument de vente principal, avant le texte. Des photos nettes, prises en lumière du jour, de quelques plats emblématiques, de la salle et de la terrasse suffisent souvent — un bon smartphone et de la patience font le travail. Je ne fais pas de photographie, mais je vous dis précisément ce qu'il faut photographier, sous quel angle et dans quel ordre de priorité, et je construis le site autour de ces images plutôt que d'y coller des visuels de banque d'images qui se repèrent immédiatement.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment traiter les privatisations, les groupes et les événements ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Avec une page dédiée, parce que ce ne sont pas les mêmes clients ni le même panier. Une entreprise qui cherche un lieu pour un repas de fin d'année veut savoir la capacité, la configuration de la salle, s'il existe une formule groupe, un menu unique, la possibilité de privatiser en semaine. Un formulaire spécifique reprenant la date, le nombre de convives, le budget par personne et le type d'événement vous permet de répondre une seule fois, avec les bonnes informations, au lieu d'échanger cinq messages.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien coûte un site de restaurant et quel est le délai de livraison ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local, c'est la formule la plus adaptée à un restaurant. Le délai annoncé pour un site vitrine est de 3 semaines. Un module de réservation avancé relève de l'offre web app, sur devis.",
          },
        },
      ],
    },
  ],
};

export default function RestaurateurPage() {
  return (
    <LandingPage
      badge="Pour restaurants, cafés et brasseries"
      h1="Création de site internet pour restaurant"
      intro="Un client qui hésite entre votre restaurant et celui d'à côté cherche trois choses sur son téléphone : la carte, les horaires réels, et un moyen de réserver tout de suite. Si l'une des trois manque, il réserve ailleurs. Je construis le site qui répond aux trois, avec une carte que vous pouvez enfin garder à jour. Site vitrine à partir de 990€ HT, livré en 3 semaines."
      painSection={{
        title: "Pourquoi le client réserve chez le voisin ?",
        points: [
          "Votre carte en ligne est un PDF de l'an dernier, illisible sur téléphone, avec des plats que vous ne faites plus et des prix qui ont changé.",
          "Aucun moyen de réserver depuis le site : le client doit appeler, il tombe sur le répondeur en plein service, et il abandonne.",
          "Vos horaires ne sont pas les mêmes sur votre site, votre fiche Google et votre page Facebook. Le client vient un jour de fermeture.",
          "Vous n'avez aucune photo de vos plats en ligne, ou des visuels de banque d'images que tout le monde reconnaît.",
          "Les demandes de groupes et de privatisations arrivent par messages Instagram entre deux services, et vous répondez trois jours plus tard.",
          "Vous dépendez entièrement des plateformes d'avis et de réservation, avec leur commission sur chaque couvert et aucune relation directe avec vos clients.",
        ],
      }}
      featuredOffer={{
        name: 'Site vitrine Pro',
        price: '1 390 € HT',
        delay: '3 semaines',
        description:
          "La formule adaptée à la restauration : la carte au centre du site, un formulaire de réservation qui arrive directement dans votre boîte mail sans commission, et une fiche Google enfin cohérente avec vos horaires réels.",
        features: [
          'Tout le pack Site vitrine (3 à 4 pages sur mesure)',
          'Hébergement 1 an, nom de domaine et adresse email professionnelle inclus',
          'Carte et menus lisibles sur téléphone, pensés pour être mis à jour',
          'Formulaire de réservation : date, service, couverts, demandes particulières',
          'Page privatisations et groupes avec formulaire dédié',
          'Fiche Google My Business renseignée, horaires cohérents, SEO local',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Premier appel — gratuit',
          description:
            "On parle de votre établissement : type de cuisine, fréquence de changement de carte, part de touristes et d'habitués, saisonnalité, place des groupes et des privatisations. C'est ce qui détermine si vous avez besoin d'un formulaire de réservation simple ou d'un vrai module de créneaux.",
        },
        {
          step: '2',
          title: 'Carte, photos et contenu',
          description:
            "Je rédige les pages, vous fournissez votre carte à jour et vos photos. Je vous indique précisément quoi photographier si vous n'avez rien d'utilisable. Le périmètre et les livrables sont définis au devis.",
        },
        {
          step: '3',
          title: 'Développement et mise en ligne',
          description:
            "Je développe le site, teste la réservation de bout en bout et vérifie l'affichage de la carte sur téléphone, puis je publie sur votre nom de domaine. Délai annoncé pour un site vitrine : 3 semaines.",
        },
        {
          step: '4',
          title: 'Après la livraison — la carte doit vivre',
          description:
            "C'est le point critique en restauration. Soit vous prenez un forfait de maintenance et vous m'envoyez la nouvelle carte à chaque changement, soit on a prévu dès le départ que vous puissiez modifier vous-même plats, prix et horaires.",
        },
      ]}
      faq={[
        {
          question: "Comment prendre des réservations en ligne sur mon site ?",
          answer:
            "Deux approches selon votre organisation. La plus simple : un formulaire de réservation avec date, service, nombre de couverts, téléphone et demande particulière, qui arrive sur votre email professionnel et que vous confirmez par téléphone ou par retour de mail. Vous gardez la main sur le plan de salle et vous ne payez aucune commission. L'autre approche consiste à intégrer proprement l'outil de réservation que vous utilisez déjà, ou à développer un vrai module de réservation avec gestion des créneaux et des places disponibles : dans ce cas on est sur l'offre web app, sur devis, parce que le périmètre dépend de votre fonctionnement.",
        },
        {
          question: "Comment garder ma carte à jour quand je change de plats chaque semaine ?",
          answer:
            "C'est le point qui fait échouer la plupart des sites de restaurant : une carte périmée depuis huit mois avec des prix qui ne sont plus les bons. Deux solutions selon vos habitudes. Avec un forfait de maintenance, vous m'envoyez la nouvelle carte et je la mets en ligne : Maintenance Essentiel à 79€ par mois pour 1h mensuelle, Maintenance Pro à 129€ par mois pour 2h avec traitement prioritaire. Si vous changez trop souvent pour ça, on construit dès le départ le site pour que vous puissiez modifier vous-même les plats et les prix, sans toucher au reste.",
        },
        {
          question: "Le site sert à quoi si j'ai déjà une fiche Google et un compte Instagram ?",
          answer:
            "Ils ne font pas le même travail. La fiche Google et Instagram donnent envie et amènent le visiteur ; le site est le seul endroit que vous contrôlez, où la carte complète, les horaires exacts, les allergènes, l'accès et le stationnement, la privatisation et la réservation sont réunis. Instagram ne dit pas si vous êtes ouvert lundi soir et ne prend pas une réservation pour douze personnes. Et sur un smartphone, la fiche Google affiche un lien vers votre site : c'est souvent lui qui transforme la curiosité en table réservée.",
        },
        {
          question: "Faut-il vraiment des photos professionnelles de mes plats ?",
          answer:
            "En restauration, la photo est l'argument de vente principal, avant le texte. Des photos nettes, prises en lumière du jour, de quelques plats emblématiques, de la salle et de la terrasse suffisent souvent — un bon smartphone et de la patience font le travail. Je ne fais pas de photographie, mais je vous dis précisément ce qu'il faut photographier, sous quel angle et dans quel ordre de priorité, et je construis le site autour de ces images plutôt que d'y coller des visuels de banque d'images qui se repèrent immédiatement.",
        },
        {
          question: "Comment traiter les privatisations, les groupes et les événements ?",
          answer:
            "Avec une page dédiée, parce que ce ne sont pas les mêmes clients ni le même panier. Une entreprise qui cherche un lieu pour un repas de fin d'année veut savoir la capacité, la configuration de la salle, s'il existe une formule groupe, un menu unique, la possibilité de privatiser en semaine. Un formulaire spécifique reprenant la date, le nombre de convives, le budget par personne et le type d'événement vous permet de répondre une seule fois, avec les bonnes informations, au lieu d'échanger cinq messages.",
        },
        {
          question: "Combien coûte un site de restaurant et quel est le délai de livraison ?",
          answer:
            "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local, c'est la formule la plus adaptée à un restaurant. Le délai annoncé pour un site vitrine est de 3 semaines. Un module de réservation avancé relève de l'offre web app, sur devis.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Cannes', 'Antibes', 'Mougins']}
      industryContext={{
        title: "Le site d'un restaurant se juge en cuisine, pas en agence",
        intro:
          "Un restaurant a une contrainte qu'aucun autre commerce n'a : son offre change. La carte bouge avec les saisons et le marché, les horaires changent l'été, le service du midi n'est pas celui du soir. Un site conçu comme une plaquette figée est périmé au bout d'un mois — et une carte fausse en ligne coûte plus cher que pas de carte du tout, parce qu'elle crée une déception avant même l'arrivée du client. La vraie question n'est donc pas de quoi le site aura l'air le jour de la livraison, mais de savoir dans quel état il sera dans six mois.",
        insight:
          "C'est pour cette raison que je discute des mises à jour avant de parler du design. Si vous changez de carte deux fois par an, un forfait de maintenance suffit largement. Si vous l'ajustez chaque semaine, le site doit être construit dès l'origine pour que vous en preniez la main, sinon il mourra. La deuxième priorité est la réservation : chaque table prise en direct depuis votre site est une table sans commission de plateforme, avec un client dont vous avez enfin le contact.",
      }}
      relatedLinks={{
        title: 'Pour aller plus loin',
        intro:
          "Le détail des offres et de la maintenance, la méthode de travail, et les communes où j'accompagne le plus d'établissements.",
        links: [
          {
            href: '/tarifs',
            label: 'Tarifs',
            description: 'Site vitrine 990€, Site vitrine Pro 1 390€, web app sur devis, maintenance dès 79€/mois.',
          },
          {
            href: '/le-service',
            label: 'Le service',
            description: 'Le déroulé complet d’un projet et ce que vous avez à fournir de votre côté.',
          },
          {
            href: '/services/nice',
            label: 'Restaurants à Nice',
            description: 'Vieux-Nice et centre : clientèle touristique qui décide sur téléphone, à quelques mètres de la porte.',
          },
          {
            href: '/services/cannes',
            label: 'Restaurants à Cannes',
            description: 'Saisonnalité forte et événements : privatisations, groupes et menus de festival.',
          },
          {
            href: '/services/mougins',
            label: 'Restaurants à Mougins',
            description: 'Village gastronomique : clientèle qui réserve à l’avance et compare les cartes en ligne.',
          },
        ],
      }}
      jsonLd={jsonLd}
    />
  );
}
