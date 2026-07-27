import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Nice — artisans et TPE',
  description: "Création de site internet à Nice pour artisans et TPE : site vitrine 990€ HT, livré en 4 semaines. Développeur indépendant basé à Vence (06).",
  alternates: { canonical: '/services/nice' },
  openGraph: {
    title: 'Création de site internet à Nice — OptiPro',
    description: "Site vitrine 990€ HT livré en 4 semaines, web app sur devis. Développeur indépendant basé à Vence, proche de Nice.",
    url: 'https://www.opti-pro.fr/services/nice',
    type: 'website',
  },
};

export default function NicePage() {
  return (
    <CityServicePage
      cityName="Nice"
      cityNameInClause="à Nice"
      citySlug="nice"
      postalCodes={['06000', '06100', '06200', '06300']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Création de site internet à Nice pour artisans et TPE"
      intro="Vous cherchez quelqu'un près de vous pour vous faire un site internet à Nice. Je suis développeur web indépendant, basé à Vence, à une vingtaine de kilomètres de Nice : je construis des sites vitrines et des outils métier sur mesure pour les artisans et les TPE. Site vitrine à 990€ HT, livré en 4 semaines, hébergement et nom de domaine inclus."
      economicContext="Nice concentre une densité de TPE et d'indépendants rare sur la Côte d'Azur : artisans du bâtiment, commerces de quartier, restauration, services à la personne, professions libérales. L'activité y est fortement marquée par le tourisme, ce qui signifie une clientèle qui change souvent et qui cherche presque toujours sur son téléphone avant d'appeler. Dans ce contexte, un artisan niçois sans site — ou avec une page Facebook laissée à l'abandon — devient difficile à trouver, à comparer et à contacter. Un site vitrine clair, rapide et bien référencé localement est souvent le premier outil commercial qui manque."
      geo={{ latitude: 43.7102, longitude: 7.2620 }}
      whyHere={[
        {
          title: "Un développeur réellement local",
          description: "Je suis installé à Vence (06140), à une vingtaine de kilomètres de Nice. On peut se voir pour cadrer le projet. Beaucoup d'agences produisent des pages « site internet Nice » sans jamais mettre les pieds dans les Alpes-Maritimes — ce n'est pas mon cas.",
        },
        {
          title: "Un seul interlocuteur",
          description: "Pas de commercial, pas de chef de projet, pas de sous-traitance à l'étranger. Vous parlez à la personne qui écrit le code, du premier appel jusqu'à la mise en ligne, puis pour les évolutions.",
        },
        {
          title: "Un prix et un périmètre annoncés d'avance",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Le périmètre et les livrables sont écrits dans le devis avant de démarrer : vous savez ce que vous payez et ce que vous recevez.",
        },
        {
          title: "Je comprends le métier avant la technique",
          description: "10 ans en exploitation et logistique avant de me reconvertir au développement en 2026. J'ai piloté des flux et coordonné des prestataires : je pose des questions sur votre organisation avant de parler de code.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure pour présenter votre activité à Nice : vos prestations, votre zone d'intervention, vos coordonnées. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 4 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact réellement fonctionnel, la création ou la reprise de votre fiche Google My Business et le SEO local — pour apparaître sur les recherches « près de moi » à Nice.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Une plateforme web construite autour de vos process : catalogue produits, portail client, suivi de chantiers, gestion de commandes, tableaux de bord. De quoi remplacer les classeurs et les fichiers Excel qui circulent par mail.",
        },
        {
          icon: '📱',
          title: 'Un site pensé pour le mobile',
          description: "À Nice, une bonne partie de vos visiteurs vous cherchent depuis leur téléphone, souvent dans la rue. Le site est construit pour être lisible et rapide sur mobile d'abord, avec le numéro de téléphone accessible en un geste.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois pour vos mises à jour de contenu) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). Sans obligation.",
        },
        {
          icon: '🏭',
          title: 'Référence : SAPAL Signalisation',
          description: "Ma réalisation de référence : une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Le même soin est appliqué à un site vitrine de 4 pages.",
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
          description: "Ce que je construis, comment, et pourquoi un profil ops + dev change la donne.",
        },
        {
          href: '/services/plombier',
          label: 'Site internet pour plombier',
          description: "La page dédiée aux plombiers : urgences, zone d'intervention, demandes de devis.",
        },
        {
          href: '/services/electricien',
          label: 'Site internet pour électricien',
          description: "La page dédiée aux électriciens : prestations, certifications, contact rapide.",
        },
      ]}
      faq={[
        {
          question: "Vous créez des sites pour des artisans partout dans la métropole de Nice ?",
          answer: "Oui. Nice-Centre, Vieux-Nice, Cimiez, Magnan, Saint-Roch, Nice-Nord, Nice-Ouest, mais aussi La Trinité, Saint-André-de-la-Roche, Saint-Laurent-du-Var et le reste de la métropole Nice Côte d'Azur. Étant basé à Vence, je peux venir sur place pour cadrer le projet, puis on avance à distance.",
        },
        {
          question: "Combien coûte un site internet pour un artisan niçois ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Une web app ou un outil métier se chiffre sur devis, après un premier appel.",
        },
        {
          question: "En combien de temps mon site est-il en ligne ?",
          answer: "Un site vitrine est livré en 4 semaines. Pour une web app ou un outil métier, le délai dépend du périmètre : il est défini avec vous et écrit dans le devis avant de démarrer.",
        },
        {
          question: "Je veux surtout être trouvé sur Google à Nice. C'est possible ?",
          answer: "C'est l'objet du pack Site vitrine Pro : fiche Google My Business créée ou reprise, et SEO local travaillé sur vos prestations et votre zone d'intervention niçoise. Sur un marché aussi dense que Nice, aucun prestataire honnête ne peut vous garantir une place précise dans les résultats — en revanche, on met en place tout ce qui permet à Google de comprendre où vous êtes et ce que vous faites.",
        },
        {
          question: "J'ai déjà un site, mais il est vieux. Vous le reprenez ?",
          answer: "On regarde ensemble pendant l'appel découverte. Selon l'état de l'existant, il est parfois plus rapide et moins cher de repartir d'une base neuve que de rafistoler un site ancien. Dans les deux cas, vous récupérez votre nom de domaine et vos contenus : ils restent à vous.",
        },
        {
          question: "J'ai besoin d'un outil interne plutôt que d'un site vitrine. Vous faites ça ?",
          answer: "Oui, c'est même une grande partie de mon travail. Suivi de chantiers, gestion de commandes, portail client, catalogue produits, tableaux de bord : tout ce que vous gérez aujourd'hui sur papier ou sur Excel peut devenir un outil web accessible depuis n'importe quel appareil. Ma réalisation de référence, SAPAL Signalisation, est une plateforme B2B avec un catalogue de plus de 2 500 références et un portail client.",
        },
      ]}
    />
  );
}
