import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Grasse — artisans et TPE',
  description: "Création de site internet à Grasse pour artisans et TPE : site vitrine 990€ HT livré en 3 semaines, hébergement inclus. Développeur basé à Vence (06).",
  alternates: { canonical: '/services/grasse' },
  openGraph: {
    title: 'Création de site internet à Grasse — OptiPro',
    description: "Site vitrine 990€ HT livré en 3 semaines, web app sur devis. Développeur indépendant basé à Vence, dans les Alpes-Maritimes.",
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
      h1="Création de site internet à Grasse pour artisans et TPE"
      intro="Vous cherchez quelqu'un dans les Alpes-Maritimes pour créer votre site internet à Grasse. Je suis développeur web indépendant, basé à Vence, et je construis des sites vitrines et des outils métier sur mesure pour les artisans et les TPE. Site vitrine à 990€ HT, livré en 3 semaines, hébergement, nom de domaine et adresse email professionnelle inclus."
      economicContext="Grasse a deux visages économiques. D'un côté, la parfumerie et les arômes, avec des maisons historiques et tout un écosystème de sous-traitants techniques : conditionnement, logistique spécialisée, laboratoires, maintenance industrielle. De l'autre, un artisanat et un commerce de proximité qui desservent une zone étendue et vallonnée, du centre médiéval jusqu'à l'arrière-pays et au Pays de Grasse. Les artisans grassois couvrent souvent un territoire plus large et plus rural que leurs confrères du littoral, ce qui rend la visibilité en ligne d'autant plus utile : le client cherche « près de moi » sur une zone où les prestataires sont plus dispersés."
      geo={{ latitude: 43.6584, longitude: 6.9229 }}
      whyHere={[
        {
          title: "Implanté dans le département",
          description: "Je suis installé à Vence (06140), dans les Alpes-Maritimes comme vous. Un rendez-vous sur place pour cadrer le projet est possible, contrairement aux agences qui publient des pages « site internet Grasse » sans jamais y venir.",
        },
        {
          title: "Utile sur une zone étendue",
          description: "Quand votre clientèle est répartie entre Grasse, l'arrière-pays et les communes voisines, le site sert à qualifier les demandes en amont : ce que vous faites, jusqu'où vous vous déplacez, comment vous joindre. Moins d'appels hors sujet, moins de déplacements pour rien.",
        },
        {
          title: "Je comprends l'aspect industriel et logistique",
          description: "10 ans en exploitation et logistique avant de me reconvertir au développement en 2026. Si votre activité gravite autour de la sous-traitance industrielle ou du conditionnement, je parle votre langue avant de parler technique.",
        },
        {
          title: "Périmètre et prix définis au devis",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Ce qui est inclus est écrit avant de démarrer : vous savez ce que vous payez et ce que vous recevez.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure : votre activité, vos prestations, votre zone d'intervention autour de Grasse. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 3 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. C'est le pack qui compte le plus quand vos clients vous cherchent commune par commune.",
        },
        {
          icon: '🗺️',
          title: "Page zone d'intervention",
          description: "Une page qui indique clairement les communes que vous couvrez autour de Grasse. Cela évite les demandes venues de l'autre bout du département et rassure ceux qui sont dans votre périmètre.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Catalogue produits, portail client, suivi de chantiers ou d'interventions, gestion de commandes, tableaux de bord. Particulièrement pertinent pour les activités de sous-traitance qui suivent aujourd'hui leurs commandes sur Excel.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois : textes, photos, horaires) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). À prendre ou non, selon vos besoins.",
        },
        {
          icon: '🏭',
          title: 'Référence : SAPAL Signalisation',
          description: "Ma réalisation de référence : une plateforme B2B avec un catalogue de plus de 2 500 références, un portail client et des intégrations API. Un bon repère si vous travaillez en B2B avec des clients réguliers.",
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
          href: '/services/serrurier',
          label: 'Site internet pour serrurier',
          description: "La page dédiée aux serruriers : dépannage, communes couvertes, appel direct.",
        },
      ]}
      faq={[
        {
          question: "Vous travaillez dans tout le Pays de Grasse ?",
          answer: "Oui. Grasse et son centre historique, mais aussi Peymeinade, Mouans-Sartoux, Pégomas, Cabris, Saint-Vallier-de-Thiey, Spéracèdes et les communes voisines de l'agglomération du Pays de Grasse. Je suis basé à Vence, dans le même département, donc un rendez-vous sur place est envisageable pour cadrer le projet.",
        },
        {
          question: "Combien coûte un site internet pour un artisan grassois ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Web app ou outil métier : sur devis.",
        },
        {
          question: "Mon activité est liée à la parfumerie et je travaille en B2B. Un site sert-il à quelque chose ?",
          answer: "En B2B, le site sert moins à générer des appels qu'à crédibiliser : un donneur d'ordre qui vous a été recommandé va chercher votre nom en ligne avant de vous confier une commande. Une vitrine claire, à jour, qui explique vos moyens et vos certifications joue ce rôle. Et si votre besoin est plutôt d'outiller le suivi de commandes, c'est un projet de web app, chiffré sur devis.",
        },
        {
          question: "En combien de temps le site est-il en ligne ?",
          answer: "Un site vitrine est livré en 3 semaines. Pour une web app ou un outil métier, le délai dépend du périmètre : il est défini avec vous et inscrit dans le devis avant de démarrer.",
        },
        {
          question: "Je peux indiquer sur le site les communes où je me déplace ?",
          answer: "Oui, et c'est fortement conseillé sur une zone comme le Pays de Grasse. Une page ou une section listant vos communes d'intervention aide vos clients à savoir s'ils sont dans votre périmètre, et aide Google à comprendre où vous travaillez réellement.",
        },
        {
          question: "Je suis en micro-entreprise, ce budget est-il justifié pour moi ?",
          answer: "C'est une question légitime, et la réponse dépend de votre activité. Si vos clients vous trouvent uniquement par recommandation et que votre carnet est plein, un site est moins urgent. Si vous perdez des demandes parce que vous êtes introuvable en ligne, un site vitrine à 990€ HT se rembourse vite. Le premier appel est gratuit et sert précisément à répondre honnêtement à cette question.",
        },
      ]}
    />
  );
}
