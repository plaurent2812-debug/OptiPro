import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Création site internet Mougins — artisans et TPE',
  description: "Création de site internet à Mougins pour artisans, restaurateurs et TPE : site vitrine 990€ HT livré en 4 semaines. Développeur basé à Vence (06).",
  alternates: { canonical: '/services/mougins' },
  openGraph: {
    title: 'Création de site internet à Mougins — OptiPro',
    description: "Site vitrine 990€ HT livré en 4 semaines, web app sur devis. Développeur indépendant basé à Vence, dans les Alpes-Maritimes.",
    url: 'https://www.opti-pro.fr/services/mougins',
    type: 'website',
  },
};

export default function MouginsPage() {
  return (
    <CityServicePage
      cityName="Mougins"
      cityNameInClause="à Mougins"
      citySlug="mougins"
      postalCodes={['06250']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Création de site internet à Mougins pour artisans, restaurants et TPE"
      intro="Vous cherchez un développeur près de vous pour créer votre site internet à Mougins. Je suis développeur web indépendant, basé à Vence dans les Alpes-Maritimes, et je construis des sites vitrines et des outils métier sur mesure pour les artisans, les restaurateurs et les TPE. Site vitrine à 990€ HT, livré en 4 semaines, hébergement et nom de domaine inclus."
      economicContext="Mougins est connue pour sa restauration et pour ses zones résidentielles. Le village perché attire une clientèle qui vient d'abord pour la table, tandis que les quartiers résidentiels et les résidences alentour font travailler en continu les artisans du bâtiment, les paysagistes, les entreprises d'entretien et de piscine, et les services à domicile. Deux publics très différents, mais un même point commun : ils se décident après une recherche en ligne. Un restaurant sans carte consultable sur mobile ou un artisan sans vitrine web perd des clients au profit du concurrent qui a fait le nécessaire."
      geo={{ latitude: 43.6004, longitude: 7.0001 }}
      whyHere={[
        {
          title: "Un développeur des Alpes-Maritimes",
          description: "Je suis installé à Vence (06140), à une trentaine de kilomètres de Mougins. On peut se rencontrer pour cadrer le projet — ce que ne fera pas une agence qui publie des pages ville en série sans être implantée dans le département.",
        },
        {
          title: "Un site à la hauteur de votre prestation",
          description: "À Mougins, la clientèle compare et regarde les détails. Un site propre, rapide, avec de bonnes photos et des informations à jour, envoie le même signal de sérieux que votre travail sur place.",
        },
        {
          title: "Un seul interlocuteur",
          description: "Du premier appel à la mise en ligne, vous parlez à la personne qui construit le site. Pas de commercial, pas de chef de projet, pas de sous-traitance.",
        },
        {
          title: "Périmètre et prix définis au devis",
          description: "Site vitrine 990€ HT, Site vitrine Pro 1 390€ HT, web app sur devis. Le contenu de la prestation est écrit avant le démarrage, sans dérive de budget en cours de projet.",
        },
      ]}
      services={[
        {
          icon: '🌐',
          title: 'Site vitrine — 990€ HT',
          description: "3 à 4 pages sur mesure : votre activité, vos prestations ou votre carte, vos coordonnées et votre emplacement à Mougins. Hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Livré en 4 semaines.",
        },
        {
          icon: '📍',
          title: 'Site vitrine Pro — 1 390€ HT',
          description: "Tout le pack Site vitrine, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local — déterminant pour un restaurant ou un commerce du village, très dépendant de la recherche locale et de Maps.",
        },
        {
          icon: '🍽️',
          title: 'Pages adaptées à la restauration',
          description: "Carte lisible sur mobile, horaires, emplacement, galerie photo soignée, lien vers votre outil de réservation existant. Léger et rapide, y compris en pleine saison.",
        },
        {
          icon: '🏡',
          title: "Pages pour les métiers de la maison",
          description: "Bâtiment, paysage, piscine, entretien, services à domicile : une page par prestation, avec des photos de réalisations et un formulaire qui vous remonte une demande déjà qualifiée.",
        },
        {
          icon: '⚙️',
          title: 'Web app et outil métier — sur devis',
          description: "Suivi de chantiers, planning d'interventions, portail client, gestion de commandes, tableaux de bord. Quand le papier et Excel ne suivent plus le rythme de l'activité.",
        },
        {
          icon: '🔧',
          title: 'Maintenance — 79€ ou 129€/mois',
          description: "Maintenance Essentiel à 79€/mois (1h par mois de mises à jour de contenu) ou Maintenance Pro à 129€/mois (2h par mois, petites évolutions et traitement prioritaire). Pratique si votre carte ou vos horaires bougent souvent.",
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
          href: '/services/electricien',
          label: 'Site internet pour électricien',
          description: "La page dédiée aux électriciens : prestations, dépannage, demandes de devis.",
        },
      ]}
      faq={[
        {
          question: "Vous créez des sites partout sur la commune de Mougins ?",
          answer: "Oui. Mougins-Village, Mougins-le-Haut, Tournamy, Saint-Basile, la Vallée de la Siagne et le reste de la commune, ainsi que les communes voisines comme Le Cannet, Valbonne ou Mouans-Sartoux. Je suis basé à Vence, dans le même département : un rendez-vous sur place est possible pour cadrer le projet.",
        },
        {
          question: "Combien coûte un site internet pour un restaurant ou un artisan à Mougins ?",
          answer: "Site vitrine à 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. Site vitrine Pro à 1 390€ HT : tout le pack précédent, plus un formulaire de contact fonctionnel, la fiche Google My Business et le SEO local. Une web app ou un outil métier se chiffre sur devis.",
        },
        {
          question: "Je suis restaurateur au village. Vous gérez la carte et les réservations ?",
          answer: "La carte, oui : elle est intégrée au site, lisible sur mobile, et modifiable via la maintenance quand elle change. Pour les réservations, le plus sain est en général de brancher le site sur l'outil que vous utilisez déjà plutôt que d'en redévelopper un. On tranche pendant l'appel découverte, en fonction de ce qui est le plus simple à vivre au quotidien.",
        },
        {
          question: "En combien de temps le site est-il en ligne ?",
          answer: "Un site vitrine est livré en 4 semaines. Pour une web app ou un outil métier, le délai dépend du périmètre : il est défini avec vous et inscrit dans le devis avant le démarrage.",
        },
        {
          question: "Une partie de ma clientèle est anglophone. Le site peut être bilingue ?",
          answer: "C'est possible et cela se décide au devis, car une version bilingue double le contenu à rédiger et à maintenir. Souvent, traduire les pages essentielles suffit. On regarde ensemble ce qui est réellement utile pour votre activité plutôt que de tout dupliquer par principe.",
        },
        {
          question: "Qui écrit les textes et fournit les photos ?",
          answer: "Vous fournissez la matière — vos prestations, vos réalisations, vos photos — et je m'occupe de la structure, de la rédaction des pages et de la mise en forme. Si vos photos ne sont pas exploitables, je vous le dis franchement : sur Mougins, des visuels médiocres desservent le site plus qu'ils ne l'aident.",
        },
      ]}
    />
  );
}
