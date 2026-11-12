import { contact, offer } from "./offer";

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

// Comparatif : colonnes « soi-même » et « agence » reformulées d’après la même source
// (hébergement compris chez les créateurs de site, maintenance « au devis », équipe d’agence,
// 80 % des sites livrés en 3 mois ou moins) ; colonne « Pierre Laurent » lue dans data/offer.ts.
export const comparison = {
  columns: ["Faire soi-même", "Agence", contact.name],
  rows: [
    { label: "Prix de départ", values: ["L’abonnement de l’outil, et votre temps", "3 500 € de médiane pour un site vitrine", `${offer.setupPrice}, puis ${offer.monthlyPrice} par mois`] },
    { label: "Textes", values: ["À écrire vous-même", "Selon le devis", "Rédigés pour vous"] },
    { label: "Modifications", values: ["Vous les faites", "Maintenance au devis", `${offer.includedTime} par mois comprise`] },
    { label: "Hébergement", values: ["Compris dans l’outil", "À vérifier dans le devis", "Compris, domaine à votre nom"] },
    { label: "Interlocuteur", values: ["Vous", "Une équipe : chef de projet, designer, développeur", `Une seule personne, à ${contact.city}`] },
    { label: "Délai", values: ["Votre temps libre", "80 % des sites livrés en 3 mois ou moins", offer.deliveryTime] },
  ],
};

// Exemple de coût récurrent relevé par la même source, grilles publiques d’octobre 2026.
export const domainRenewal = "7,79 € HT par an";
