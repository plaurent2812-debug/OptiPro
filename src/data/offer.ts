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
  commitment: "12 mois",
  includedEdits: "1 h de modifications par mois",
  includedTime: "1 h",
  extraHourPrice: "60 €",
  vatNotice: "TVA non applicable, art. 293 B du CGI",
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
];
