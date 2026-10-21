// Repères du marché cités dans le guide des prix. Chaque valeur a été relevée sur la source
// le 21 octobre 2026 ; ne rien ajouter qui ne figure pas sur la page citée.
export const marketSource = {
  name: "baromètre des prix de La Fabrique du Net",
  url: "https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs",
  scope: "budgets de projets confiés à des agences, relevé de juillet 2026",
  consulted: "21 octobre 2026",
};

export const marketFigures = [
  { value: "3 500 €", label: "budget médian d’un site vitrine", detail: "380 projets" },
  { value: "2 000 à 8 000 €", label: "la moitié des sites vitrines se situent dans cet écart", detail: "du premier au troisième quartile" },
  { value: "4 000 €", label: "budget médian d’un projet de TPE, tous types de sites", detail: "255 projets" },
];

// Exemple de coût récurrent relevé par la même source, grilles publiques d’octobre 2026.
export const domainRenewal = "7,79 € HT par an";
