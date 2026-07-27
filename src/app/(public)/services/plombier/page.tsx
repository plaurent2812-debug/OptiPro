import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Création de site internet pour plombier — PACA',
  description:
    "Site internet pour plombier et plombier-chauffagiste : être trouvé en urgence sur Google mobile, présenter vos interventions, recevoir des demandes de devis. Dès 990€ HT, livré en 4 semaines.",
  alternates: { canonical: '/services/plombier' },
  openGraph: {
    title: 'Création de site internet pour plombier — OptiPro',
    description:
      "Un site qui vous fait appeler quand la fuite tombe à 19h. Site vitrine dès 990€ HT, livré en 4 semaines. Vence (06), toute la PACA.",
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
      name: 'Création de site internet pour plombier et plombier-chauffagiste',
      serviceType: 'WebDevelopment',
      description:
        "Création de sites vitrines et d'outils web sur mesure pour plombiers et plombiers-chauffagistes : visibilité Google mobile sur les recherches d'urgence, présentation des interventions, formulaire de demande de devis, fiche Google My Business et SEO local.",
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
      ],
      audience: { '@type': 'Audience', name: 'Plombiers, plombiers-chauffagistes, installateurs sanitaire' },
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
          name: "Un site internet sert vraiment à quelque chose quand la plomberie marche au bouche-à-oreille ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le bouche-à-oreille amène le nom, le site confirme le choix. Quand un voisin vous recommande, la personne tape votre nom sur Google avant d'appeler. Si elle ne trouve rien, ou une page qui s'affiche mal sur téléphone, elle appelle le plombier suivant sur la liste. Le site ne remplace pas votre réputation : il évite de la perdre au moment de la décision.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment le site aide-t-il sur une recherche d'urgence type fuite d'eau ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Une urgence se cherche sur téléphone, debout, avec de l'eau au sol. Le site est donc construit pour ça : numéro de téléphone cliquable visible dès le premier écran sans scroller, zone d'intervention et communes annoncées noir sur blanc, chargement rapide même en 4G, et vos types d'intervention listés en clair (fuite, dégorgement, chauffe-eau, recherche de fuite). L'objectif est un appel en moins de dix secondes.",
          },
        },
        {
          '@type': 'Question',
          name: "Je peux recevoir des demandes de devis directement depuis le site ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, avec le pack Site vitrine Pro. Le formulaire est pensé pour la plomberie : nature des travaux, commune, urgence ou travaux planifiés, possibilité de joindre une photo du chauffe-eau ou de l'arrivée d'eau. Vous recevez la demande par email avec les informations utiles, ce qui évite trois allers-retours téléphoniques avant de pouvoir chiffrer.",
          },
        },
        {
          '@type': 'Question',
          name: "Faut-il montrer ses chantiers de rénovation sur le site ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour le dépannage, non, c'est le téléphone qui compte. Pour les rénovations de salle de bain ou les remplacements de chaudière, oui : ce sont des devis à plusieurs milliers d'euros et le client compare. Une page de réalisations avec des photos avant/après de vos propres chantiers fait plus pour votre crédibilité que n'importe quel argumentaire.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien coûte un site internet de plombier et en combien de temps est-il en ligne ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Le délai annoncé pour un site vitrine est de 4 semaines. Maintenance ensuite en option, à partir de 79€ par mois.",
          },
        },
        {
          '@type': 'Question',
          name: "Qui s'occupe de mettre à jour mes tarifs ou mes horaires après la livraison ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Deux possibilités. Soit vous prenez un forfait de maintenance et vous m'envoyez simplement la modification à faire : Maintenance Essentiel à 79€ par mois pour 1h mensuelle de mises à jour de contenu, Maintenance Pro à 129€ par mois pour 2h avec petites évolutions et traitement prioritaire. Soit vous n'en prenez pas, et le site continue de fonctionner : vous restez libre de me recontacter ponctuellement.",
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
      h1="Création de site internet pour plombier"
      intro="Quand un chauffe-eau lâche un dimanche soir, le client ne fouille pas les Pages Jaunes : il tape « plombier » sur son téléphone et appelle l'un des trois premiers résultats. Je construis le site qui vous met dans ces trois premiers résultats, avec un numéro cliquable et une zone d'intervention claire. Site vitrine à partir de 990€ HT, livré en 4 semaines."
      painSection={{
        title: "Pourquoi les appels partent chez le plombier d'à côté ?",
        points: [
          "Vous n'apparaissez pas quand quelqu'un cherche « plombier » plus le nom de votre commune sur son téléphone. Vos concurrents, oui.",
          "Votre seule présence en ligne est un annuaire ou une page Facebook qui n'a pas bougé depuis deux ans, avec un ancien numéro.",
          "Sur mobile, il faut zoomer pour lire votre numéro et il n'est pas cliquable. Personne ne recopie dix chiffres à la main avec de l'eau au sol.",
          "Rien n'indique les communes que vous couvrez : on ne sait pas si vous vous déplacez, donc on n'essaie pas.",
          "Vos belles rénovations de salle de bain n'existent nulle part en photo, alors que c'est exactement ce que le client veut voir avant de signer un devis à 6 000€.",
          "Vous recevez des appels pour des interventions que vous ne faites pas, et aucun pour celles que vous cherchez à développer.",
        ],
      }}
      featuredOffer={{
        name: 'Site vitrine Pro',
        price: '1 390 € HT',
        delay: '4 semaines',
        description:
          "La formule adaptée à la plomberie : être trouvé sur les recherches d'urgence de votre secteur, être appelable en un geste, et recevoir des demandes de devis chiffrables sans jouer au ping-pong téléphonique.",
        features: [
          'Tout le pack Site vitrine (3 à 4 pages sur mesure)',
          'Hébergement 1 an, nom de domaine et adresse email professionnelle inclus',
          'Numéro cliquable visible dès le premier écran sur mobile',
          'Formulaire de demande de devis avec photo du matériel et commune',
          'Fiche Google My Business créée et renseignée',
          'SEO local sur vos communes et vos types d’intervention',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Premier appel — gratuit',
          description:
            "On fait le tour de votre activité : dépannage, rénovation, chauffage, part de particuliers et de syndics, communes que vous acceptez de couvrir. Je vous dis franchement si un site vitrine suffit ou si vous avez besoin d'autre chose.",
        },
        {
          step: '2',
          title: 'Contenu et structure',
          description:
            "Je rédige les pages à partir de nos échanges, vous n'avez pas de texte à écrire. Vous me fournissez vos photos de chantiers, ou on part sur une structure sans photos et on les ajoutera plus tard. Le périmètre et les livrables sont fixés au devis.",
        },
        {
          step: '3',
          title: 'Développement et mise en ligne',
          description:
            "Je développe le site, le teste sur téléphone, et je le mets en ligne sur votre nom de domaine. Délai annoncé : 4 semaines pour un site vitrine. Vous validez avant publication.",
        },
        {
          step: '4',
          title: 'Après la livraison',
          description:
            "Le site vous appartient. Vous pouvez prendre un forfait de maintenance pour que je gère les mises à jour (tarifs, horaires, nouvelles photos), ou ne rien prendre du tout et me recontacter au besoin.",
        },
      ]}
      faq={[
        {
          question: "Un site internet sert vraiment à quelque chose quand la plomberie marche au bouche-à-oreille ?",
          answer:
            "Le bouche-à-oreille amène le nom, le site confirme le choix. Quand un voisin vous recommande, la personne tape votre nom sur Google avant d'appeler. Si elle ne trouve rien, ou une page qui s'affiche mal sur téléphone, elle appelle le plombier suivant sur la liste. Le site ne remplace pas votre réputation : il évite de la perdre au moment de la décision.",
        },
        {
          question: "Comment le site aide-t-il sur une recherche d'urgence type fuite d'eau ?",
          answer:
            "Une urgence se cherche sur téléphone, debout, avec de l'eau au sol. Le site est donc construit pour ça : numéro de téléphone cliquable visible dès le premier écran sans scroller, zone d'intervention et communes annoncées noir sur blanc, chargement rapide même en 4G, et vos types d'intervention listés en clair (fuite, dégorgement, chauffe-eau, recherche de fuite). L'objectif est un appel en moins de dix secondes.",
        },
        {
          question: "Je peux recevoir des demandes de devis directement depuis le site ?",
          answer:
            "Oui, avec le pack Site vitrine Pro. Le formulaire est pensé pour la plomberie : nature des travaux, commune, urgence ou travaux planifiés, possibilité de joindre une photo du chauffe-eau ou de l'arrivée d'eau. Vous recevez la demande par email avec les informations utiles, ce qui évite trois allers-retours téléphoniques avant de pouvoir chiffrer.",
        },
        {
          question: "Faut-il montrer ses chantiers de rénovation sur le site ?",
          answer:
            "Pour le dépannage, non, c'est le téléphone qui compte. Pour les rénovations de salle de bain ou les remplacements de chaudière, oui : ce sont des devis à plusieurs milliers d'euros et le client compare. Une page de réalisations avec des photos avant/après de vos propres chantiers fait plus pour votre crédibilité que n'importe quel argumentaire.",
        },
        {
          question: "Combien coûte un site internet de plombier et en combien de temps est-il en ligne ?",
          answer:
            "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Le délai annoncé pour un site vitrine est de 4 semaines. Maintenance ensuite en option, à partir de 79€ par mois.",
        },
        {
          question: "Qui s'occupe de mettre à jour mes tarifs ou mes horaires après la livraison ?",
          answer:
            "Deux possibilités. Soit vous prenez un forfait de maintenance et vous m'envoyez simplement la modification à faire : Maintenance Essentiel à 79€ par mois pour 1h mensuelle de mises à jour de contenu, Maintenance Pro à 129€ par mois pour 2h avec petites évolutions et traitement prioritaire. Soit vous n'en prenez pas, et le site continue de fonctionner : vous restez libre de me recontacter ponctuellement.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', 'Cagnes-sur-Mer']}
      industryContext={{
        title: "Ce que j'ai retenu de trois ans derrière un comptoir de plombiers",
        intro:
          "Chez DBS Drive, j'ai passé mes journées au contact de plombiers et de chauffagistes qui venaient chercher leurs pièces, dans une agence de 8 500 références. J'ai entendu les mêmes phrases pendant trois ans : le client qui a rappelé trois fois, celui qui a pris l'autre parce qu'il répondait, le chantier perdu parce que personne n'avait vu les photos du précédent. Ce n'est pas un métier où l'on manque de travail : c'est un métier où l'on perd des appels sans jamais le savoir.",
        insight:
          "Un site de plombier ne se juge pas sur son esthétique mais sur une seule question : combien de secondes entre l'arrivée sur la page depuis un téléphone et le déclenchement de l'appel ? Tout le reste — les pages de présentation, les photos de chantiers, la page de contact — sert les devis de rénovation, pas l'urgence. Ce sont deux usages différents sur un même site, et ils se construisent différemment.",
      }}
      relatedLinks={{
        title: 'Pour aller plus loin',
        intro:
          "Les tarifs détaillés, la façon dont je travaille, et les pages dédiées aux communes des Alpes-Maritimes que je couvre le plus souvent.",
        links: [
          {
            href: '/tarifs',
            label: 'Tarifs',
            description: 'Site vitrine 990€, Site vitrine Pro 1 390€, web app sur devis, maintenance dès 79€/mois.',
          },
          {
            href: '/le-service',
            label: 'Le service',
            description: 'Comment se déroule un projet, ce qui est inclus, ce qui ne l’est pas.',
          },
          {
            href: '/services/nice',
            label: 'Plombiers à Nice',
            description: 'Métropole niçoise : forte densité, concurrence élevée sur les recherches d’urgence.',
          },
          {
            href: '/services/cagnes-sur-mer',
            label: 'Plombiers à Cagnes-sur-Mer',
            description: 'Résidentiel et copropriétés du littoral, à quinze minutes de Vence.',
          },
          {
            href: '/services/grasse',
            label: 'Plombiers à Grasse',
            description: 'Arrière-pays et habitat ancien : beaucoup de rénovation et de remplacement de chauffage.',
          },
        ],
      }}
      jsonLd={jsonLd}
    />
  );
}
