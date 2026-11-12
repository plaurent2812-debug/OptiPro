import { zones } from "./zones";

// Offre et coordonnées fournies par Pierre le 19 octobre 2026.
// Source unique : toute page qui affiche un prix ou un contact lit ce fichier.
export const contact = {
  name: "Pierre Laurent",
  phoneDisplay: "06 70 25 93 33",
  phoneHref: "tel:+33670259333",
  phoneIntl: "+33 6 70 25 93 33",
  email: "p.laurent@opti-pro.fr",
  emailHref: "mailto:p.laurent@opti-pro.fr",
  city: "Vence",
  area: "Alpes-Maritimes",
  // Le local reste l’ancrage (titres, recherche) ; le reste de la France se gère à distance.
  remoteArea: "partout en France à distance",
  linkedin: "https://www.linkedin.com/in/pierre-laurent-ops/",
  github: "https://github.com/plaurent2812-debug",
  // Fiche Google de l’établissement sur Maps (renommée « Pierre Laurent » le 12 novembre 2026).
  googleMaps: "https://www.google.com/maps?cid=18086748904423946936",
};

export const offer = {
  // La marque OptiPro n’est plus utilisée : Pierre vend sous son nom (décision du 12 novembre 2026).
  audience: "TPE et PME",
  setupPrice: "690 €",
  monthlyPrice: "59 €",
  yearlyPrice: "590 €",
  // 12 × 59 € = 708 € ; 708 € − 590 € = 118 €
  monthlyTotal: "708 €",
  yearlySaving: "118 €",
  // Coût des 12 premiers mois : 690 € + 708 € = 1 398 € ; 690 € + 590 € = 1 280 €
  firstYearMonthly: "1 398 €",
  firstYearYearly: "1 280 €",
  commitment: "12 mois",
  includedEdits: "1 h de modifications par mois",
  includedTime: "1 h",
  extraHourPrice: "60 €",
  vatNotice: "TVA non applicable, art. 293 B du CGI",
  // Conditions confirmées par Pierre le 21 octobre 2026.
  hostingIncluded: "Hébergement et nom de domaine compris",
  ownership: "Le nom de domaine est enregistré à votre nom, et le site comme ses contenus vous appartiennent : vous pouvez partir avec.",
  noticePeriod: "un mois",
  afterCommitment: "Après les 12 mois, l’abonnement continue sans engagement : vous pouvez l’arrêter à tout moment, avec un préavis d’un mois.",
  // Prix (690 € de mise en ligne, 59 € par mois ou 590 € par an) et délai (1 à 3 semaines selon la complexité) fixés par Pierre le 12 novembre 2026.
  deliveryTime: "1 à 3 semaines",
  deliveryNote: "selon la complexité du site",
};

// Ce que comprend la mise en ligne : uniquement des éléments confirmés par Pierre.
export const deliverables = [
  { icon: "site", title: "Un site conçu pour votre activité", copy: "Les pages sont construites à partir de ce que vous m’expliquez : vos services, vos clients, votre zone." },
  { icon: "doc", title: "Vos textes rédigés", copy: "J’écris les textes à partir de notre échange. Vous relisez et vous validez." },
  { icon: "terrain", title: "Le référencement local", copy: "Search Console, plan du site, balises et données structurées pour votre ville et votre métier." },
  { icon: "auto", title: "Un rapport de vitesse", copy: "Votre site est livré avec sa mesure Google Lighthouse : vitesse, accessibilité, bonnes pratiques, référencement." },
  { icon: "app", title: "Lisible sur téléphone", copy: "Pensé d’abord pour le téléphone, et votre numéro s’appelle d’un geste." },
  { icon: "lock", title: "Hébergement et domaine compris", copy: "Le nom de domaine est à votre nom. Vous n’avez rien à renouveler." },
] as const;

// Métiers pour lesquels Pierre crée des sites (confirmé le 21 octobre 2026) : exemples de besoins, pas de clients.
// Seule la page transporteurs existe : elle sert à la prospection et n’apparaît ni dans le menu ni sur l’accueil.
export const trades = [
  { icon: "terrain", title: "Artisans du bâtiment", who: "Plombiers, électriciens, maçons, menuisiers…", copy: "Demande de devis, zone d’intervention et réalisations en photos." },
  { icon: "user", title: "Coiffure et beauté", who: "Salons de coiffure, instituts, barbiers…", copy: "Prestations et tarifs, horaires et lien de prise de rendez-vous." },
  { icon: "doc", title: "Commerces et restaurants", who: "Boutiques, restaurants, traiteurs…", copy: "Horaires, carte ou produits, accès et appel en un geste." },
  { icon: "truck", title: "Transport et services", who: "Transporteurs, professions libérales, services aux entreprises…", copy: "Demande de devis guidée, présentation des services, recrutement.", href: "/creation-site-internet/transport" },
] as const;

// Garanties : chacune découle d’une condition publiée ci-dessus.
export const guarantees = [
  { title: `En ligne en ${offer.deliveryTime}`, copy: `${offer.deliveryNote.charAt(0).toUpperCase()}${offer.deliveryNote.slice(1)}, à partir de notre premier échange, une fois vos informations reçues.` },
  { title: "Un prix affiché, sans surprise", copy: `${offer.setupPrice} de mise en ligne, puis ${offer.monthlyPrice} par mois ou ${offer.yearlyPrice} par an. Au-delà de l’heure mensuelle, ${offer.extraHourPrice} de l’heure.` },
  { title: "Votre site vous appartient", copy: offer.ownership },
  { title: "Sans engagement après 12 mois", copy: `L’abonnement continue tant qu’il vous sert, avec un préavis d’${offer.noticePeriod} pour l’arrêter.` },
] as const;

// Mêmes conditions, sous forme de données structurées (schema.org) pour les pages /creation-site-internet.
export const offerSchema = {
  "@type": "Offer",
  priceCurrency: "EUR",
  priceSpecification: [
    { "@type": "UnitPriceSpecification", name: "Mise en ligne", price: 690, priceCurrency: "EUR" },
    { "@type": "UnitPriceSpecification", name: "Abonnement mensuel", price: 59, priceCurrency: "EUR", unitCode: "MON" },
    { "@type": "UnitPriceSpecification", name: "Abonnement annuel", price: 590, priceCurrency: "EUR", unitCode: "ANN" },
  ],
};

export const areaSchema = [
  { "@type": "AdministrativeArea", name: contact.area },
  { "@type": "City", name: "Vence" },
  // Les villes qui ont leur page locale (data/zones.ts).
  ...zones.map((zone) => ({ "@type": "City", name: zone.name })),
  { "@type": "Country", name: "France" },
];
