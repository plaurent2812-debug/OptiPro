// Villes des Alpes-Maritimes qui ont leur page locale, et leur position sur la carte.
// Règles : aucun chiffre, client ni avis inventé ; uniquement de la géographie vérifiable
// (quartiers, communes voisines, codes postaux) et ce qu’un site local doit montrer.
// Pierre est installé à Vence : les autres villes sont servies par téléphone et par e-mail,
// aucune page ne promet de déplacement.

export type ZoneFaq = { q: string; a: string };

export type Zone = {
  slug: string;
  name: string;
  /** Préposition + nom, pour les phrases (« à Nice », « à Cagnes-sur-Mer ») */
  at: string;
  postalCode: string;
  /** Coordonnées réelles de la commune (degrés décimaux) */
  lat: number;
  lon: number;
  /** Fin du titre de la page, après « Création de site internet à … » */
  h1Tail: string;
  /** Une ligne pour la liste des zones */
  summary: string;
  intro: string;
  localTitle: string;
  local: string[];
  essentials: string[];
  searches: string[];
  nearby: string[];
  faq: ZoneFaq[];
};

// Vence garde sa page dédiée (/creation-site-internet/vence) : elle figure ici pour la carte et les liens.
export const home = {
  slug: "vence",
  name: "Vence",
  postalCode: "06140",
  lat: 43.7225,
  lon: 7.1119,
  summary: "Là où je suis installé : commerces, artisans et restaurants de la ville et des villages voisins.",
};

export const zones: Zone[] = [
  {
    slug: "nice",
    name: "Nice",
    at: "à Nice",
    postalCode: "06000",
    lat: 43.7102,
    lon: 7.262,
    h1Tail: "quartier par quartier.",
    summary: "Se distinguer dans la plus grande ville du département, en nommant son quartier.",
    intro: "Je conçois et je réalise les sites internet des commerces, artisans, restaurants et indépendants de Nice, je les mets en ligne, puis je les tiens à jour. Je suis installé à Vence, dans le même département : nos échanges se font par téléphone et par e-mail.",
    localTitle: "À Nice, on vous cherche par quartier",
    local: [
      "Nice est la plus grande ville des Alpes-Maritimes : pour un même métier, vos clients ont le choix entre de nombreuses adresses. Sur Google, ils précisent souvent leur quartier : Libération, le Port, Riquier, Cimiez, Nice-Nord ou Saint-Isidore.",
      "Votre site doit donc dire clairement où vous êtes : votre quartier, les rues proches, l’arrêt de tramway ou le parking le plus pratique. Ce sont ces précisions qui vous distinguent d’une adresse située à l’autre bout de la ville.",
      "Pour un artisan, la question est différente : Nice s’étend des collines à la plaine du Var. Votre site précise les quartiers et les communes où vous vous déplacez, pour que l’on vous appelle pour des chantiers qui vous conviennent.",
    ],
    essentials: [
      "Votre quartier, écrit en toutes lettres, et pas seulement « Nice ».",
      "Comment venir : ligne de tramway, parking, accès à pied dans le Vieux-Nice.",
      "Vos horaires, y compris le dimanche et les jours fériés.",
      "Pour un artisan : les quartiers et les communes voisines où vous intervenez.",
      "Votre numéro de téléphone, qui s’appelle d’un geste depuis un téléphone.",
    ],
    searches: ["plombier Nice Nord", "restaurant Vieux-Nice", "coiffeur Libération Nice"],
    nearby: ["Saint-Laurent-du-Var", "Villefranche-sur-Mer", "La Trinité", "Saint-André-de-la-Roche", "Cagnes-sur-Mer"],
    faq: [
      { q: "Vous êtes à Vence : comment travaille-t-on ensemble si je suis à Nice ?", a: "Par téléphone et par e-mail. Je suis installé à Vence, dans le même département : vous avez un interlocuteur direct, avant comme après la mise en ligne." },
      { q: "Mon activité est dans un seul quartier de Nice, le site peut-il le mettre en avant ?", a: "Oui. Les textes, les titres et les données structurées du site nomment votre quartier et votre adresse, comme votre fiche Google." },
    ],
  },
  {
    slug: "cagnes-sur-mer",
    name: "Cagnes-sur-Mer",
    at: "à Cagnes-sur-Mer",
    postalCode: "06800",
    lat: 43.6636,
    lon: 7.1489,
    h1Tail: "avec un interlocuteur tout proche.",
    summary: "Du Cros-de-Cagnes au Haut-de-Cagnes : des horaires et un accès toujours à jour.",
    intro: "Je conçois et je réalise les sites internet des commerces, artisans et restaurants de Cagnes-sur-Mer, je les mets en ligne, puis je les tiens à jour. Je suis installé à Vence, juste au-dessus : nos échanges se font par téléphone et par e-mail.",
    localTitle: "Plusieurs quartiers, plusieurs clientèles",
    local: [
      "Cagnes-sur-Mer, ce sont plusieurs villes en une : le Cros-de-Cagnes et son bord de mer, le centre-ville, le Haut-de-Cagnes et ses ruelles, les quartiers autour de l’hippodrome. Vos clients n’y cherchent pas la même chose et n’y viennent pas de la même façon.",
      "Votre site dit dans quel quartier vous êtes, comment on se gare et à quelle saison vous ouvrez. Au bord de mer, les horaires changent entre l’été et l’hiver : c’est souvent la première information que l’on vient chercher.",
      "Vous gardez le même interlocuteur après la mise en ligne : un changement d’horaires ou de carte se règle par un appel ou un e-mail.",
    ],
    essentials: [
      "Votre quartier : Cros-de-Cagnes, centre-ville, Haut-de-Cagnes…",
      "Vos horaires d’été et d’hiver, à jour.",
      "Où se garer, au bord de mer comme dans le Haut-de-Cagnes.",
      "Votre carte, vos prestations ou vos produits, avec des prix quand c’est possible.",
      "Pour un artisan : Cagnes-sur-Mer et les communes où vous intervenez.",
    ],
    searches: ["restaurant Cros-de-Cagnes", "électricien Cagnes-sur-Mer", "institut de beauté Cagnes-sur-Mer"],
    nearby: ["Villeneuve-Loubet", "Saint-Laurent-du-Var", "La Colle-sur-Loup", "Saint-Paul-de-Vence", "Vence"],
    faq: [
      { q: "Mes horaires changent entre l’été et l’hiver, qui met le site à jour ?", a: "Moi. Vous m’appelez ou vous m’écrivez, je m’en occupe : ces changements entrent dans le temps de modifications compris chaque mois dans l’abonnement." },
      { q: "Vous êtes à Vence, pas à Cagnes-sur-Mer : est-ce la même offre ?", a: "Oui. Mêmes conditions et même prix dans tout le département. Vence est juste à côté, et nos échanges se font par téléphone et par e-mail." },
    ],
  },
  {
    slug: "antibes",
    name: "Antibes",
    at: "à Antibes",
    postalCode: "06600",
    lat: 43.5808,
    lon: 7.1239,
    h1Tail: "du Vieil Antibes à Juan-les-Pins.",
    summary: "Habitants, visiteurs ou entreprises de Sophia Antipolis : un site qui sait à qui il parle.",
    intro: "Je conçois et je réalise les sites internet des commerces, artisans, restaurants et entreprises de services d’Antibes et de Juan-les-Pins, je les mets en ligne, puis je les tiens à jour. Je suis installé à Vence, dans le même département : tout se fait par téléphone et par e-mail.",
    localTitle: "D’abord savoir à qui votre site parle",
    local: [
      "Antibes réunit des activités très différentes : les commerces et restaurants du Vieil Antibes, la saison de Juan-les-Pins, les métiers du port, et les entreprises tournées vers Sophia Antipolis. Un site efficace commence par dire à laquelle de ces clientèles vous vous adressez.",
      "Si vos clients sont des habitants, ils cherchent vos horaires, vos prix et votre téléphone. Si ce sont des visiteurs, ils cherchent où vous êtes et comment venir. Si ce sont des entreprises, ils veulent voir vos services et demander un devis. Les pages de votre site suivent cet ordre.",
      "Du premier échange aux mises à jour mensuelles, vous avez un seul interlocuteur.",
    ],
    essentials: [
      "Votre secteur : Vieil Antibes, Juan-les-Pins, la Fontonne…",
      "Vos horaires selon la saison.",
      "Pour une clientèle d’entreprises : vos services et une demande de devis simple.",
      "L’accès et le stationnement, à pied comme en voiture.",
      "Votre numéro de téléphone, qui s’appelle d’un geste.",
    ],
    searches: ["restaurant Vieil Antibes", "plombier Antibes", "coiffeur Juan-les-Pins"],
    nearby: ["Vallauris", "Biot", "Valbonne", "Villeneuve-Loubet", "Mougins"],
    faq: [
      { q: "Mon entreprise travaille surtout avec Sophia Antipolis, l’offre est-elle adaptée ?", a: "Oui. L’offre est la même pour un commerce et pour une entreprise de services : un site qui présente clairement vos prestations et permet de vous contacter. On part de vos clients et de ce qu’ils cherchent." },
      { q: "Je suis à Juan-les-Pins : faut-il écrire Antibes ou Juan-les-Pins sur le site ?", a: "Les deux. Vos clients utilisent l’un ou l’autre : le site nomme votre quartier et votre commune, dans les textes comme dans les titres." },
    ],
  },
  {
    slug: "cannes",
    name: "Cannes",
    at: "à Cannes",
    postalCode: "06400",
    lat: 43.5528,
    lon: 7.0174,
    h1Tail: "pour ceux qui y travaillent toute l’année.",
    summary: "Être trouvé pendant la saison et les congrès, rester utile aux habitués le reste de l’année.",
    intro: "Je conçois et je réalise les sites internet des commerces, artisans et restaurants de Cannes, je les mets en ligne, puis je les tiens à jour. Je suis installé à Vence, dans le même département : nos échanges se font par téléphone et par e-mail.",
    localTitle: "Une ville qui change avec le calendrier",
    local: [
      "À Cannes, l’activité suit le calendrier : la saison d’été, les congrès et les festivals remplissent la ville, puis elle retrouve ses habitants. Votre site doit servir aux deux moments : être trouvé par quelqu’un de passage, et rester utile à vos clients habituels.",
      "Entre la Croisette, la rue d’Antibes, le Suquet et Cannes-la-Bocca, on ne vient pas pour les mêmes raisons. Votre site dit où vous êtes, ce que vous proposez et à quels moments vous êtes ouvert, sans obliger à appeler pour le savoir.",
      "C’est moi qui tiens votre site à jour quand vos horaires ou vos prestations changent : vous me prévenez, je m’en occupe.",
    ],
    essentials: [
      "Votre quartier : Croisette, rue d’Antibes, Suquet, Cannes-la-Bocca…",
      "Vos horaires et vos périodes d’ouverture, à jour avant chaque saison.",
      "Ce que vous proposez, avec des prix quand c’est possible.",
      "Pour un artisan : Cannes, Le Cannet, Mandelieu et les communes où vous intervenez.",
      "Votre numéro et votre adresse, identiques à ceux de votre fiche Google.",
    ],
    searches: ["restaurant Le Suquet Cannes", "serrurier Cannes", "coiffeur Cannes-la-Bocca"],
    nearby: ["Le Cannet", "Mandelieu-la-Napoule", "Mougins", "Vallauris", "Théoule-sur-Mer"],
    faq: [
      { q: "Mon activité est très saisonnière, le site peut-il changer selon la période ?", a: "Oui. Horaires, carte, fermeture annuelle : vous me prévenez, je mets le site à jour. Ces changements entrent dans le temps de modifications compris chaque mois." },
      { q: "Vous n’êtes pas à Cannes, est-ce un problème ?", a: "Non. Je suis installé à Vence, dans les Alpes-Maritimes, et tout se fait par téléphone et par e-mail. Vous avez un seul interlocuteur, avant comme après la mise en ligne." },
    ],
  },
  {
    slug: "grasse",
    name: "Grasse",
    at: "à Grasse",
    postalCode: "06130",
    lat: 43.6589,
    lon: 6.9239,
    h1Tail: "jusqu’au pays grassois.",
    summary: "Centre historique, hameaux et communes du pays grassois : une zone d’intervention écrite noir sur blanc.",
    intro: "Je conçois et je réalise les sites internet des artisans, commerces et restaurants de Grasse et du pays grassois, je les mets en ligne, puis je les tiens à jour. Je suis installé à Vence, dans le même département : nos échanges se font par téléphone et par e-mail.",
    localTitle: "Grasse ne s’arrête pas à son centre",
    local: [
      "À Grasse, le centre historique, les quartiers en hauteur et les hameaux comme Magagnosc, Le Plan-de-Grasse ou Plascassier n’ont pas les mêmes clients. Et un artisan installé ici travaille souvent bien au-delà de la ville.",
      "Pour un artisan, le site précise donc les communes où vous intervenez : Mouans-Sartoux, Peymeinade, Châteauneuf-Grasse, Le Bar-sur-Loup… Pour un commerce ou un restaurant du centre, il dit comment venir et où se garer avant de monter dans les ruelles.",
      "Grasse est connue pour le parfum, et ses visiteurs viennent aussi pour cela. Si votre activité les concerne, votre site le dit dès le premier écran ; sinon, il parle d’abord aux habitants.",
    ],
    essentials: [
      "Votre secteur : centre historique, Magagnosc, Le Plan-de-Grasse, Plascassier…",
      "Pour un artisan : la liste des communes du pays grassois où vous intervenez.",
      "Comment venir et où se garer.",
      "Vos prestations et vos réalisations en photos.",
      "Votre numéro de téléphone, qui s’appelle d’un geste.",
    ],
    searches: ["maçon Grasse", "restaurant centre historique Grasse", "électricien Mouans-Sartoux"],
    nearby: ["Mouans-Sartoux", "Peymeinade", "Châteauneuf-Grasse", "Le Bar-sur-Loup", "Cabris"],
    faq: [
      { q: "J’interviens dans plusieurs communes autour de Grasse, le site peut-il toutes les citer ?", a: "Oui. Votre zone d’intervention est écrite en toutes lettres sur le site et dans ses données structurées, lisible par vos clients comme par Google." },
      { q: "Vous êtes à Vence : comment se passent les échanges ?", a: "Par téléphone et par e-mail. Vous avez un seul interlocuteur, joignable directement, avant comme après la mise en ligne." },
    ],
  },
];

export const zoneBySlug = (slug: string) => zones.find((zone) => zone.slug === slug);

// Toutes les villes de la carte, Vence en premier.
export const mapCities = [
  { slug: home.slug, name: home.name, lat: home.lat, lon: home.lon, summary: home.summary },
  ...zones.map(({ slug, name, lat, lon, summary }) => ({ slug, name, lat, lon, summary })),
];

// Tracé schématique du littoral, d’ouest en est (points réels de la côte, simplifiés).
export const coastline: [number, number][] = [
  [43.4300, 6.8700], [43.4680, 6.9250], [43.5080, 6.9400], [43.5400, 6.9550], [43.5500, 7.0150], [43.5350, 7.0370],
  [43.5650, 7.0750], [43.5460, 7.1310], [43.5850, 7.1280], [43.6360, 7.1400], [43.6550, 7.1600],
  [43.6560, 7.2000], [43.6930, 7.2500], [43.6950, 7.2850], [43.6850, 7.3000], [43.6750, 7.3300],
  [43.7070, 7.3330], [43.7200, 7.4050], [43.7350, 7.4250], [43.7500, 7.4850], [43.7750, 7.5050],
  [43.7860, 7.5300], [43.7900, 7.6200],
];
