import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Création de site web pour serrurier — PACA',
  description:
    "Site web pour serrurier : appel en un clic, disponibilité 24/7 affichée, zone d'intervention et tarifs de déplacement clairs. Dès 990€ HT, livré en 4 semaines. Vence (06).",
  alternates: { canonical: '/services/serrurier' },
  openGraph: {
    title: 'Création de site web pour serrurier — OptiPro',
    description:
      "Porte claquée à minuit : le client appelle le premier site qui charge et qui rassure. Site vitrine dès 990€ HT, livré en 4 semaines.",
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
      name: 'Création de site web pour serrurier et métallier',
      serviceType: 'WebDevelopment',
      description:
        "Création de sites vitrines et d'outils web sur mesure pour serruriers et métalliers : appel en un clic sur mobile, affichage de la disponibilité 24/7 et des plages horaires, zone d'intervention détaillée, transparence tarifaire, fiche Google My Business et SEO local.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
      ],
      audience: { '@type': 'Audience', name: 'Serruriers, métalliers, dépanneurs 24/7' },
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
          name: "Un site web change quoi pour un serrurier qui fait surtout du dépannage ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Il change qui reçoit l'appel. Une personne enfermée dehors ouvre Google sur son téléphone et appelle dans la minute. Elle ne lit pas, elle scanne. Un site conçu pour ce moment précis — bouton d'appel immédiat, mention de la disponibilité, nom de la commune visible — capte cet appel. Un site trop lent, trop chargé ou muet sur la disponibilité le laisse filer au concurrent suivant.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment le site rassure-t-il face à la mauvaise réputation du dépannage serrurerie ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "C'est le vrai sujet du métier. Beaucoup de particuliers redoutent l'arnaque au dépannage plus que la porte fermée. On répond avec des éléments concrets et vérifiables : identité et raison sociale affichées, adresse réelle de l'entreprise, ordre de grandeur des tarifs de déplacement et d'intervention, mention du devis signé avant travaux, description de la méthode d'ouverture sans destruction quand elle est possible. Ce sont ces informations, pas les promesses, qui déclenchent l'appel.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment afficher une disponibilité 24/7 sans recevoir des appels toute la nuit pour rien ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "En étant précis plutôt qu'en promettant tout. On distingue clairement ce qui relève de l'urgence nuit et week-end de ce qui se traite en horaires normaux, et on l'écrit noir sur blanc, avec la majoration éventuelle. Les demandes de blindage ou de rideau métallique passent alors par le formulaire, et le téléphone reste réservé aux vraies urgences.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment délimiter précisément ma zone d'intervention ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "En listant les communes une par une, ce que la plupart des sites de serrurerie ne font pas. Cela produit deux effets : le visiteur sait immédiatement si vous venez chez lui et n'hésite pas à appeler, et Google associe votre site à ces noms de communes, ce qui vous fait remonter sur les recherches locales. On peut aussi indiquer un délai d'intervention différent selon la distance.",
          },
        },
        {
          '@type': 'Question',
          name: "Le site peut-il aussi servir mon activité de métallerie ou de blindage ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, et il faut le séparer nettement du dépannage. Le blindage de porte, les rideaux métalliques, les grilles et les portails sont des projets réfléchis, avec devis et comparaison. Ces prestations méritent leurs propres pages, avec des photos de vos poses et un formulaire de demande de devis. Deux publics, deux parcours, un seul site.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien coûte un site de serrurier et sous quel délai est-il en ligne ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Le délai annoncé pour un site vitrine est de 4 semaines. Ensuite, la maintenance est optionnelle : 79€ par mois pour 1h mensuelle, 129€ par mois pour 2h avec petites évolutions et traitement prioritaire.",
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
      h1="Création de site web pour serrurier"
      intro="Porte claquée à minuit, clés à l'intérieur : le client cherche sur son téléphone et appelle dans la minute, presque toujours l'un des premiers résultats. Tout se joue sur la vitesse d'affichage, un bouton d'appel évident et de quoi le rassurer en trois lignes. C'est exactement ce que je construis. Site vitrine à partir de 990€ HT, livré en 4 semaines."
      painSection={{
        title: "Qu'est-ce qui fait raccrocher un client avant même de vous appeler ?",
        points: [
          "Votre numéro n'est pas cliquable, ou il faut scroller pour le trouver. À une heure du matin, dans le froid, personne ne cherche.",
          "Rien n'indique si vous intervenez la nuit et le week-end : le client suppose que non et passe au résultat suivant.",
          "Aucune mention de vos tarifs, même en ordre de grandeur, alors que la peur de l'arnaque au dépannage est le premier frein du métier.",
          "On ne sait pas d'où vous venez ni jusqu'où vous vous déplacez : impossible de savoir si vous couvrez sa commune.",
          "Vous êtes noyé parmi les plateformes nationales de dépannage qui achètent la publicité sur votre secteur et sous-traitent à prix cassé.",
          "Votre activité de blindage et de métallerie, la plus rentable, est invisible : on ne vous appelle que pour de l'ouverture de porte.",
        ],
      }}
      featuredOffer={{
        name: 'Site vitrine Pro',
        price: '1 390 € HT',
        delay: '4 semaines',
        description:
          "Construit pour le seul moment qui compte dans votre métier : les dix secondes entre l'arrivée sur la page et l'appel. Avec, en parallèle, un vrai parcours pour vos devis de blindage et de métallerie.",
        features: [
          'Tout le pack Site vitrine (3 à 4 pages sur mesure)',
          'Hébergement 1 an, nom de domaine et adresse email professionnelle inclus',
          'Bouton d’appel fixe et visible en permanence sur mobile',
          'Disponibilité, plages horaires et zone d’intervention commune par commune',
          'Transparence tarifaire : ordres de grandeur et devis avant travaux',
          'Fiche Google My Business et SEO local sur vos communes',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Premier appel — gratuit',
          description:
            "On clarifie votre modèle : quelle part de dépannage urgent, quelle part de pose et de métallerie, jusqu'où vous acceptez de vous déplacer et à quelles heures. Un site de serrurier mal calibré sur ces trois points génère des appels que vous ne voulez pas.",
        },
        {
          step: '2',
          title: 'Contenu et éléments de réassurance',
          description:
            "Je rédige les pages. Vous me confirmez vos plages d'astreinte, vos ordres de grandeur tarifaires, votre liste de communes et vos photos de poses. Le périmètre et les livrables sont fixés au devis.",
        },
        {
          step: '3',
          title: 'Développement et test en conditions réelles',
          description:
            "Je développe, puis je teste ce qui compte vraiment : vitesse d'affichage sur un téléphone en réseau mobile et déclenchement de l'appel en un geste. Délai annoncé pour un site vitrine : 4 semaines.",
        },
        {
          step: '4',
          title: 'Après la livraison',
          description:
            "Le site est votre propriété. Changer une plage d'astreinte, ajuster un tarif ou ajouter une commune se fait dans un forfait de maintenance si vous en prenez un, sinon ponctuellement à votre demande.",
        },
      ]}
      faq={[
        {
          question: "Un site web change quoi pour un serrurier qui fait surtout du dépannage ?",
          answer:
            "Il change qui reçoit l'appel. Une personne enfermée dehors ouvre Google sur son téléphone et appelle dans la minute. Elle ne lit pas, elle scanne. Un site conçu pour ce moment précis — bouton d'appel immédiat, mention de la disponibilité, nom de la commune visible — capte cet appel. Un site trop lent, trop chargé ou muet sur la disponibilité le laisse filer au concurrent suivant.",
        },
        {
          question: "Comment le site rassure-t-il face à la mauvaise réputation du dépannage serrurerie ?",
          answer:
            "C'est le vrai sujet du métier. Beaucoup de particuliers redoutent l'arnaque au dépannage plus que la porte fermée. On répond avec des éléments concrets et vérifiables : identité et raison sociale affichées, adresse réelle de l'entreprise, ordre de grandeur des tarifs de déplacement et d'intervention, mention du devis signé avant travaux, description de la méthode d'ouverture sans destruction quand elle est possible. Ce sont ces informations, pas les promesses, qui déclenchent l'appel.",
        },
        {
          question: "Comment afficher une disponibilité 24/7 sans recevoir des appels toute la nuit pour rien ?",
          answer:
            "En étant précis plutôt qu'en promettant tout. On distingue clairement ce qui relève de l'urgence nuit et week-end de ce qui se traite en horaires normaux, et on l'écrit noir sur blanc, avec la majoration éventuelle. Les demandes de blindage ou de rideau métallique passent alors par le formulaire, et le téléphone reste réservé aux vraies urgences.",
        },
        {
          question: "Comment délimiter précisément ma zone d'intervention ?",
          answer:
            "En listant les communes une par une, ce que la plupart des sites de serrurerie ne font pas. Cela produit deux effets : le visiteur sait immédiatement si vous venez chez lui et n'hésite pas à appeler, et Google associe votre site à ces noms de communes, ce qui vous fait remonter sur les recherches locales. On peut aussi indiquer un délai d'intervention différent selon la distance.",
        },
        {
          question: "Le site peut-il aussi servir mon activité de métallerie ou de blindage ?",
          answer:
            "Oui, et il faut le séparer nettement du dépannage. Le blindage de porte, les rideaux métalliques, les grilles et les portails sont des projets réfléchis, avec devis et comparaison. Ces prestations méritent leurs propres pages, avec des photos de vos poses et un formulaire de demande de devis. Deux publics, deux parcours, un seul site.",
        },
        {
          question: "Combien coûte un site de serrurier et sous quel délai est-il en ligne ?",
          answer:
            "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Le délai annoncé pour un site vitrine est de 4 semaines. Ensuite, la maintenance est optionnelle : 79€ par mois pour 1h mensuelle, 129€ par mois pour 2h avec petites évolutions et traitement prioritaire.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Cagnes-sur-Mer', 'Antibes', 'Cannes']}
      industryContext={{
        title: "La serrurerie est le métier où le site web se joue à la seconde",
        intro:
          "Aucun autre métier artisanal n'a un tunnel aussi court. Un plombier peut être rappelé le lendemain, un électricien est choisi après comparaison de trois devis. Le serrurier de dépannage, lui, est choisi en moins d'une minute, sur un téléphone, par quelqu'un de stressé qui n'a pas prévu la dépense. Conséquence : chaque seconde de chargement, chaque information manquante sur la disponibilité ou le prix se traduit directement par un appel qui part ailleurs.",
        insight:
          "La concurrence des plateformes nationales de dépannage change la façon de construire le site. Elles gagnent sur le budget publicitaire, jamais sur la crédibilité locale : elles n'ont pas d'adresse dans la commune, pas de nom de gérant, pas de photos de leurs propres interventions. Un serrurier indépendant qui affiche son identité réelle, son adresse et ses tarifs occupe le terrain qu'elles ne peuvent pas prendre.",
      }}
      relatedLinks={{
        title: 'Pour aller plus loin',
        intro:
          "Les offres et leur contenu exact, la méthode de travail, et les communes où la demande de dépannage est la plus forte.",
        links: [
          {
            href: '/tarifs',
            label: 'Tarifs',
            description: 'Site vitrine 990€, Site vitrine Pro 1 390€, web app sur devis, maintenance dès 79€/mois.',
          },
          {
            href: '/le-service',
            label: 'Le service',
            description: 'Ce qui est inclus, comment se déroule un projet, ce que vous avez à fournir.',
          },
          {
            href: '/services/nice',
            label: 'Serruriers à Nice',
            description: 'Volume de dépannage le plus élevé du département, et la concurrence publicitaire la plus dure.',
          },
          {
            href: '/services/cagnes-sur-mer',
            label: 'Serruriers à Cagnes-sur-Mer',
            description: 'Copropriétés et locatif saisonnier : beaucoup d’ouvertures de porte et de changements de cylindre.',
          },
          {
            href: '/services/antibes',
            label: 'Serruriers à Antibes',
            description: 'Résidences secondaires et commerces : blindage, rideaux métalliques, remises en sécurité.',
          },
        ],
      }}
      jsonLd={jsonLd}
    />
  );
}
