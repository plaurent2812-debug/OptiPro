import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Vence — développeur sur place',
  description: "Création de site internet à Vence (06140) par un développeur installé dans la commune : site vitrine 990€ HT livré en 3 semaines, web app sur devis.",
  alternates: { canonical: '/services/vence' },
  openGraph: {
    title: 'Création de site internet à Vence — OptiPro',
    description: "Développeur web installé à Vence (06140). Site vitrine 990€ HT livré en 3 semaines, web app et outil métier sur devis.",
    url: 'https://www.opti-pro.fr/services/vence',
    type: 'website',
  },
};

export default function VencePage() {
  return (
    <CityServicePage
      cityName="Vence"
      cityNameInClause="à Vence"
      citySlug="vence"
      postalCodes={['06140']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Création de site internet à Vence pour artisans, commerçants et TPE"
      intro="Je suis développeur web indépendant et je suis installé à Vence (06140) — pas dans une autre ville avec une page à votre nom. Je construis des sites vitrines et des outils métier sur mesure pour les artisans, les commerçants et les TPE de la commune. Site vitrine à 990€ HT, livré en 3 semaines, hébergement et nom de domaine inclus. Et si vous préférez qu'on se voie plutôt qu'un échange par mail, c'est faisable : on est dans la même ville."
      economicContext="Vence vit de son centre historique, de son tourisme, de son artisanat d'art et d'un tissu dense de commerces de proximité et de professions libérales. Le marché artisanal ARTISA'VENCE, place Clemenceau, réunit chaque mois d'avril à octobre une vingtaine d'artisans et créateurs : céramique, bijoux, luminaires, produits alimentaires, art de la table. Pour ces activités, la visibilité en ligne joue un rôle particulier — une bonne partie de la clientèle découvre le commerce à distance, avant même de venir jusqu'au village. Un céramiste ou un créateur sans vitrine web dépend entièrement du passage physique et du bouche-à-oreille, alors qu'un site simple et bien fait permet de montrer son travail toute l'année, y compris hors saison."
      geo={{ latitude: 43.72226, longitude: 7.11382 }}
      whyHere={[
        {
          title: "Je suis à Vence, pas ailleurs",
          description: "OptiPro est enregistré à Vence (06140). Les autres résultats que vous trouverez sur cette recherche sont des agences installées à Nice, ailleurs en région ou à l'autre bout de la France, qui publient une page par commune sans y avoir mis les pieds. Ici, on peut se rencontrer pour cadrer le projet.",
        },
        {
          title: "Un seul interlocuteur, celui qui code",
          description: "Du premier appel à la mise en ligne, vous parlez à la personne qui construit votre site. Pas de commercial, pas de chef de projet, pas de sous-traitance à l'étranger.",
        },
        {
          title: "Périmètre et prix écrits avant de démarrer",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Ce qui est inclus est détaillé dans le devis : pas de dérive de budget en cours de projet, pas de surprise à la livraison.",
        },
        {
          title: "Dix ans de terrain avant le développement",
          description: "J'ai passé dix ans en exploitation et logistique, notamment au contact quotidien d'artisans et de sous-traitants. Je comprends comment tourne une petite structure avant de parler technique — ça raccourcit beaucoup les explications.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure : votre activité, vos prestations, vos coordonnées et votre emplacement à Vence. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 3 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. C'est la version utile si vous voulez apparaître quand quelqu'un cherche votre métier « à Vence » ou « près de moi ».",
        },
        {
          icon: '🎨',
          title: "Pages pour l'artisanat d'art et les créateurs",
          description: "Galerie de réalisations soignée, présentation de votre travail et de votre atelier, page contact. De quoi montrer vos pièces toute l'année, et pas seulement les jours de marché.",
        },
        {
          icon: '🏪',
          title: 'Pages pour les commerces du centre',
          description: "Horaires justes, emplacement, ce que vous proposez, photos correctes. L'essentiel pour être trouvé par un visiteur qui cherche sur son téléphone avant de monter au village.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Suivi de chantiers, catalogue produits, portail client, planning d'interventions, tableaux de bord. Quand le papier et les fichiers Excel ne suivent plus le rythme de l'activité.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois de mises à jour de contenu) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). Facultatif, sans engagement de durée.",
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
          href: '/a-propos',
          label: 'Qui je suis',
          description: "Dix ans en exploitation logistique, puis le développement web. Mon parcours complet.",
        },
        {
          href: '/services/plombier',
          label: 'Site internet pour plombier',
          description: "La page dédiée aux plombiers : urgences, demandes de devis, visibilité mobile.",
        },
      ]}
      faq={[
        {
          question: "Vous êtes vraiment basé à Vence ?",
          answer: "Oui. OptiPro est une entreprise individuelle enregistrée à Vence (06140), SIREN 934 301 987. C'est la différence avec la plupart des autres résultats sur cette recherche : ce sont des agences basées ailleurs qui génèrent une page pour chaque commune. Si vous voulez qu'on se rencontre pour parler du projet, c'est possible.",
        },
        {
          question: "Combien coûte un site internet pour un commerce ou un artisan à Vence ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Une web app ou un outil métier se chiffre sur devis, après un premier appel pour définir le périmètre.",
        },
        {
          question: "En combien de temps le site est-il en ligne ?",
          answer: "Un site vitrine est livré en 3 semaines. Ce délai court à partir du moment où j'ai vos contenus — textes, photos, informations légales. Pour une web app, le délai dépend du périmètre et il est inscrit au devis avant le démarrage. Méfiez-vous des promesses de site livré en quelques jours : soit c'est un template rempli à la va-vite, soit le délai n'est pas tenu.",
        },
        {
          question: "Je suis créateur et je vends surtout sur les marchés. Un site me sert à quoi ?",
          answer: "À exister le reste de l'année. Le marché artisanal ne tourne que d'avril à octobre, et un client qui vous a découvert sur un stand n'a souvent aucun moyen de vous retrouver ensuite. Un site simple avec vos pièces, votre démarche et un moyen de vous contacter suffit à récupérer ces occasions perdues. Ce n'est pas forcément une boutique en ligne : souvent, une vitrine bien faite et un formulaire suffisent.",
        },
        {
          question: "Vous intervenez aussi autour de Vence ?",
          answer: "Oui. Saint-Paul-de-Vence, Tourrettes-sur-Loup, La Gaude, Saint-Jeannet, Cagnes-sur-Mer, Nice et le reste des Alpes-Maritimes. Je travaille aussi à distance pour des clients ailleurs en France, mais Vence et les communes voisines sont là où un rendez-vous sur place ne pose aucune difficulté.",
        },
        {
          question: "Qui écrit les textes et fournit les photos ?",
          answer: "Vous fournissez la matière — vos prestations, vos réalisations, vos photos — et je m'occupe de la structure, de la rédaction des pages et de la mise en forme. Si vos photos ne sont pas exploitables, je vous le dis franchement plutôt que de livrer un site qui vous dessert.",
        },
      ]}
    />
  );
}
