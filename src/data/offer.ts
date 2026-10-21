// Offre OptiPro et coordonnées fournies par Pierre le 19 octobre 2026.
// Source unique : toute page qui affiche un prix ou un contact lit ce fichier.
export const contact = {
  phoneDisplay: "06 70 25 93 33",
  phoneHref: "tel:+33670259333",
  phoneIntl: "+33 6 70 25 93 33",
  email: "p.laurent@opti-pro.fr",
  emailHref: "mailto:p.laurent@opti-pro.fr",
  city: "Vence",
  area: "Alpes-Maritimes",
  // Le local reste l’ancrage (titres, recherche) ; le reste de la France se gère à distance.
  remoteArea: "partout en France à distance",
  linkedin: "https://www.linkedin.com/in/pierre-laurent-809410123",
  github: "https://github.com/plaurent2812-debug",
};

export const optipro = {
  brand: "OptiPro",
  audience: "TPE et PME",
  setupPrice: "890 €",
  monthlyPrice: "79 €",
  yearlyPrice: "790 €",
  // 12 × 79 € = 948 € ; 948 € − 790 € = 158 €
  monthlyTotal: "948 €",
  yearlySaving: "158 €",
  // Coût des 12 premiers mois : 890 € + 948 € = 1 838 € ; 890 € + 790 € = 1 680 €
  firstYearMonthly: "1 838 €",
  firstYearYearly: "1 680 €",
  commitment: "12 mois",
  includedEdits: "1 h de modifications par mois",
  includedTime: "1 h",
  extraHourPrice: "60 €",
  vatNotice: "TVA non applicable, art. 293 B du CGI",
  // Conditions confirmées par Pierre le 21 octobre 2026.
  hostingIncluded: "Hébergement et nom de domaine compris",
  ownership: "Le nom de domaine est enregistré à votre nom, et le site comme ses contenus vous appartiennent : vous pouvez partir avec.",
  noticePeriod: "un mois",
  afterCommitment: "Après les 12 mois, l’abonnement continue sans engagement : vous pouvez l’arrêter à tout moment, avec un préavis d’un mois.",
};

// Mêmes conditions, sous forme de données structurées (schema.org) pour les pages /optipro.
export const optiproOfferSchema = {
  "@type": "Offer",
  priceCurrency: "EUR",
  priceSpecification: [
    { "@type": "UnitPriceSpecification", name: "Mise en ligne", price: 890, priceCurrency: "EUR" },
    { "@type": "UnitPriceSpecification", name: "Abonnement mensuel", price: 79, priceCurrency: "EUR", unitCode: "MON" },
    { "@type": "UnitPriceSpecification", name: "Abonnement annuel", price: 790, priceCurrency: "EUR", unitCode: "ANN" },
  ],
};

export const optiproAreaSchema = [
  { "@type": "AdministrativeArea", name: contact.area },
  { "@type": "City", name: "Vence" },
  { "@type": "City", name: "Nice" },
  { "@type": "Country", name: "France" },
];
