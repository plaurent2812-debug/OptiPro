import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Création de site internet pour électricien — PACA',
  description:
    "Site internet pour électricien : rendre vos certifications visibles, montrer vos réalisations en photo et recevoir des demandes de devis qualifiées. Dès 990€ HT, livré en 3 semaines.",
  alternates: { canonical: '/services/electricien' },
  openGraph: {
    title: 'Création de site internet pour électricien — OptiPro',
    description:
      "Certifications visibles, réalisations en photo, devis en ligne : le site qui vous fait choisir avant l'appel. Dès 990€ HT. Vence (06), toute la PACA.",
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
      name: "Création de site internet pour électricien",
      serviceType: 'WebDevelopment',
      description:
        "Création de sites vitrines et d'outils web sur mesure pour électriciens : mise en avant des qualifications et assurances, galerie de réalisations, formulaire de demande de devis détaillé, fiche Google My Business et SEO local.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Mougins' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
      ],
      audience: { '@type': 'Audience', name: 'Électriciens, électriciens du bâtiment, installateurs' },
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
          name: "Comment mettre en avant mes qualifications et mes assurances sur le site ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "On leur donne une place dédiée plutôt qu'une ligne perdue en bas de page : vos qualifications, votre attestation d'assurance décennale, vos habilitations, vos partenariats fabricants. Vous me transmettez les intitulés exacts et les logos dont vous disposez, je les intègre. C'est souvent l'élément qui fait basculer un particulier qui hésite entre deux devis, et c'est indispensable face à un syndic ou une agence.",
          },
        },
        {
          '@type': 'Question',
          name: "Pourquoi les photos de réalisations comptent autant pour un électricien ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Parce que l'électricité est un métier dont le résultat est invisible : une fois les plaques posées, personne ne voit la qualité du travail. Un tableau électrique propre, un câblage rangé, une borne de recharge bien intégrée, ce sont des preuves visuelles de votre soin. Une galerie de réalisations avec vos propres photos, légendées par type de chantier, remplace tous les adjectifs.",
          },
        },
        {
          '@type': 'Question',
          name: "Le site peut-il m'aider à recevoir des demandes de devis plus précises ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "C'est l'objectif du formulaire du pack Site vitrine Pro. Au lieu d'un champ message vide, on demande les informations dont vous avez besoin pour chiffrer : type de logement, année de construction approximative, nature de la demande (mise aux normes, rénovation complète, borne de recharge, dépannage), surface, et photo du tableau existant. Vous arrivez au premier rendez-vous en sachant déjà de quoi il s'agit.",
          },
        },
        {
          '@type': 'Question',
          name: "Est-ce utile si je travaille surtout en sous-traitance pour des entreprises générales ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, mais pour une autre raison. En sous-traitance, le site ne génère pas d'appels de particuliers : il sert de référence professionnelle. Un donneur d'ordre qui reçoit votre devis vérifie qui vous êtes. Trouver un site propre avec vos qualifications, vos moyens et vos chantiers de référence vous met au niveau des structures plus grosses face auxquelles vous êtes comparé.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien coûte un site internet d'électricien et quel est le délai ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Le délai annoncé pour un site vitrine est de 3 semaines. La maintenance est ensuite optionnelle, à partir de 79€ par mois.",
          },
        },
        {
          '@type': 'Question',
          name: "Et si j'ai besoin de plus qu'un site vitrine, par exemple pour suivre mes chantiers ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "C'est l'offre web app, sur devis. Il s'agit d'une plateforme web construite autour de vos process : suivi de chantiers, tableau de bord, portail client. La première réalisation de ce type est SAPAL Signalisation, une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Le périmètre et les livrables sont définis au devis, avant de commencer.",
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
      h1="Création de site internet pour électricien"
      intro="En électricité, le client ne compare pas des prix : il compare des risques. Il cherche qui est qualifié, qui est assuré, et à quoi ressemble le travail livré. Je construis le site qui répond à ces trois questions avant même qu'il décroche son téléphone. Site vitrine à partir de 990€ HT, livré en 3 semaines."
      painSection={{
        title: "Pourquoi votre devis passe après celui du concurrent ?",
        points: [
          "Vos qualifications et votre assurance décennale n'apparaissent nulle part en ligne : le client doit vous croire sur parole, face à un concurrent qui les affiche.",
          "Vous avez des dizaines de tableaux électriques impeccables en photo sur votre téléphone, et zéro en ligne.",
          "Un particulier qui hésite entre trois devis va chercher chaque nom sur Google. Le seul qui n'a rien à montrer part en dernier.",
          "Les demandes que vous recevez sont trop vagues pour être chiffrées : vous vous déplacez pour découvrir qu'il s'agissait d'un simple changement de prise.",
          "Vous voulez développer un créneau précis — bornes de recharge, domotique, mise aux normes de copropriétés — mais rien ne le dit et on continue de vous appeler pour du dépannage.",
          "Les entreprises générales et les syndics vous découvrent par votre devis, sans aucun élément pour vérifier votre sérieux.",
        ],
      }}
      featuredOffer={{
        name: 'Site vitrine Pro',
        price: '1 390 € HT',
        delay: '3 semaines',
        description:
          "La formule pensée pour un métier où la confiance se gagne avant le premier rendez-vous : qualifications lisibles, réalisations montrées, demandes de devis exploitables dès leur réception.",
        features: [
          'Tout le pack Site vitrine (3 à 4 pages sur mesure)',
          'Hébergement 1 an, nom de domaine et adresse email professionnelle inclus',
          'Espace dédié aux qualifications, assurances et habilitations',
          'Galerie de réalisations classée par type de chantier',
          'Formulaire de devis détaillé avec photo du tableau existant',
          'Fiche Google My Business et SEO local sur vos spécialités',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Premier appel — gratuit',
          description:
            "On identifie ce que vous voulez développer et ce que vous voulez arrêter : part de particuliers et de professionnels, rénovation ou neuf, spécialités à mettre en avant. C'est ce choix qui détermine la structure du site, pas le graphisme.",
        },
        {
          step: '2',
          title: 'Preuves et contenu',
          description:
            "Vous me transmettez vos intitulés de qualification exacts, votre attestation d'assurance et vos photos de chantiers. Je rédige les pages, vous n'avez pas de texte à écrire. Le périmètre et les livrables sont fixés au devis.",
        },
        {
          step: '3',
          title: 'Développement et mise en ligne',
          description:
            "Je développe, je teste sur mobile et sur ordinateur, puis je publie sur votre nom de domaine. Délai annoncé pour un site vitrine : 3 semaines. Vous validez avant la mise en ligne.",
        },
        {
          step: '4',
          title: 'Après la livraison',
          description:
            "Le site est à vous. Ajouter un nouveau chantier à la galerie ou renouveler une attestation d'assurance rentre dans un forfait de maintenance si vous en prenez un, sinon vous me recontactez ponctuellement.",
        },
      ]}
      faq={[
        {
          question: "Comment mettre en avant mes qualifications et mes assurances sur le site ?",
          answer:
            "On leur donne une place dédiée plutôt qu'une ligne perdue en bas de page : vos qualifications, votre attestation d'assurance décennale, vos habilitations, vos partenariats fabricants. Vous me transmettez les intitulés exacts et les logos dont vous disposez, je les intègre. C'est souvent l'élément qui fait basculer un particulier qui hésite entre deux devis, et c'est indispensable face à un syndic ou une agence.",
        },
        {
          question: "Pourquoi les photos de réalisations comptent autant pour un électricien ?",
          answer:
            "Parce que l'électricité est un métier dont le résultat est invisible : une fois les plaques posées, personne ne voit la qualité du travail. Un tableau électrique propre, un câblage rangé, une borne de recharge bien intégrée, ce sont des preuves visuelles de votre soin. Une galerie de réalisations avec vos propres photos, légendées par type de chantier, remplace tous les adjectifs.",
        },
        {
          question: "Le site peut-il m'aider à recevoir des demandes de devis plus précises ?",
          answer:
            "C'est l'objectif du formulaire du pack Site vitrine Pro. Au lieu d'un champ message vide, on demande les informations dont vous avez besoin pour chiffrer : type de logement, année de construction approximative, nature de la demande (mise aux normes, rénovation complète, borne de recharge, dépannage), surface, et photo du tableau existant. Vous arrivez au premier rendez-vous en sachant déjà de quoi il s'agit.",
        },
        {
          question: "Est-ce utile si je travaille surtout en sous-traitance pour des entreprises générales ?",
          answer:
            "Oui, mais pour une autre raison. En sous-traitance, le site ne génère pas d'appels de particuliers : il sert de référence professionnelle. Un donneur d'ordre qui reçoit votre devis vérifie qui vous êtes. Trouver un site propre avec vos qualifications, vos moyens et vos chantiers de référence vous met au niveau des structures plus grosses face auxquelles vous êtes comparé.",
        },
        {
          question: "Combien coûte un site internet d'électricien et quel est le délai ?",
          answer:
            "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : le même pack plus le formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Le délai annoncé pour un site vitrine est de 3 semaines. La maintenance est ensuite optionnelle, à partir de 79€ par mois.",
        },
        {
          question: "Et si j'ai besoin de plus qu'un site vitrine, par exemple pour suivre mes chantiers ?",
          answer:
            "C'est l'offre web app, sur devis. Il s'agit d'une plateforme web construite autour de vos process : suivi de chantiers, tableau de bord, portail client. La première réalisation de ce type est SAPAL Signalisation, une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Le périmètre et les livrables sont définis au devis, avant de commencer.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Mougins', 'Grasse']}
      industryContext={{
        title: "Pourquoi je regarde d'abord vos chantiers, pas votre logo",
        intro:
          "Chez Factory, j'ai supervisé quinze à vingt artisans sous-traitants sur des chantiers d'aménagement, avec un portefeuille ADV de 7 M€ par an. Une partie de mon travail consistait à choisir qui intervenait. À chaque fois, je vérifiais la même chose avant de confier un lot : les qualifications, l'assurance à jour, et ce que la personne avait déjà livré. Jamais la plaquette commerciale. Les électriciens qui décrochaient les lots n'étaient pas les plus bavards, c'étaient ceux dont on pouvait vérifier le travail en trente secondes.",
        insight:
          "Un site d'électricien qui convertit est construit comme un dossier de candidature, pas comme une publicité : ce que vous êtes autorisé à faire, ce que vous avez déjà fait, et comment vous joindre. Dans cet ordre. Le particulier comme le donneur d'ordre cherchent exactement la même chose, à savoir de quoi se rassurer avant d'engager de l'argent sur une installation qu'ils ne pourront pas juger eux-mêmes.",
      }}
      relatedLinks={{
        title: 'Pour aller plus loin',
        intro:
          "Le détail des offres, la méthode de travail, et les communes des Alpes-Maritimes où les demandes sont les plus fréquentes.",
        links: [
          {
            href: '/tarifs',
            label: 'Tarifs',
            description: 'Site vitrine 990€, Site vitrine Pro 1 390€, web app sur devis, maintenance dès 79€/mois.',
          },
          {
            href: '/le-service',
            label: 'Le service',
            description: 'Le déroulé d’un projet, du premier appel à la mise en ligne.',
          },
          {
            href: '/services/mougins',
            label: 'Électriciens à Mougins',
            description: 'Villas et résidences haut de gamme : domotique, rénovation lourde, exigence de finition.',
          },
          {
            href: '/services/cannes',
            label: 'Électriciens à Cannes',
            description: 'Copropriétés, commerces et hôtellerie : beaucoup de mises aux normes et de donneurs d’ordre.',
          },
          {
            href: '/services/antibes',
            label: 'Électriciens à Antibes',
            description: 'Résidentiel dense et locatif saisonnier, avec des interlocuteurs professionnels réguliers.',
          },
        ],
      }}
      jsonLd={jsonLd}
    />
  );
}
