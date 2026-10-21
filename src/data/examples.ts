// Maquettes d’exemple OptiPro : entreprises, textes et coordonnées inventés.
// Les noms ont été choisis pour ne correspondre à aucune entreprise des Alpes-Maritimes
// (vérification sur recherche-entreprises.api.gouv.fr, octobre 2026).
// À remplacer par de vraies références dès qu’un client a donné son accord.
export type SiteMockup = {
  slug: string;
  name: string;
  sector: string;
  city: string;
  /** Ce que la maquette montre, en une phrase */
  shows: string;
  accent: string;
  nav: string[];
  cta: string;
  headline: string;
  sub: string;
  panel: { title: string; fields: { label: string; value: string }[]; button: string };
  band: { label: string; items: string[] };
};

export const mockups: SiteMockup[] = [
  {
    slug: "transport",
    name: "Transports Calvelle",
    sector: "Transport de marchandises",
    city: "Plaine du Var",
    shows: "Demande de devis guidée et annonces de recrutement de conducteurs.",
    accent: "#1f4c96",
    nav: ["Services", "Recrutement", "Contact"],
    cta: "Devis",
    headline: "Transport de marchandises dans les Alpes-Maritimes",
    sub: "Messagerie, palettes et lots complets, au départ de la plaine du Var.",
    panel: {
      title: "Demande de devis",
      fields: [
        { label: "Départ", value: "Carros" },
        { label: "Arrivée", value: "Marseille" },
        { label: "Date", value: "Mardi" },
        { label: "Palettes", value: "4" },
      ],
      button: "Envoyer ma demande",
    },
    band: { label: "Nous recrutons", items: ["Conducteur SPL", "Conducteur PL"] },
  },
  {
    slug: "plomberie",
    name: "Plomberie Sarnelle",
    sector: "Plombier chauffagiste",
    city: "Vence",
    shows: "Appel en un geste sur téléphone, zone d’intervention et horaires visibles.",
    accent: "#0f766e",
    nav: ["Dépannage", "Chauffage", "Contact"],
    cta: "Appeler",
    headline: "Plombier chauffagiste à Vence et alentours",
    sub: "Dépannage, rénovation de salle de bains et entretien de chaudière.",
    panel: {
      title: "Intervention",
      fields: [
        { label: "Zone", value: "Vence" },
        { label: "Horaires", value: "8 h – 18 h" },
        { label: "Urgence", value: "Oui" },
        { label: "Devis", value: "Gratuit" },
      ],
      button: "Être rappelé",
    },
    band: { label: "Prestations", items: ["Fuite", "Chaudière", "Salle de bains"] },
  },
  {
    slug: "traiteur",
    name: "Maison Ravelin",
    sector: "Traiteur",
    city: "Nice",
    shows: "Carte des prestations et demande pour un événement.",
    accent: "#8a2d3b",
    nav: ["Carte", "Événements", "Contact"],
    cta: "Commander",
    headline: "Traiteur pour vos repas d’entreprise à Nice",
    sub: "Plateaux repas, cocktails et buffets préparés chaque matin.",
    panel: {
      title: "Votre événement",
      fields: [
        { label: "Type", value: "Cocktail" },
        { label: "Invités", value: "40" },
        { label: "Date", value: "Vendredi" },
        { label: "Lieu", value: "Nice" },
      ],
      button: "Demander un tarif",
    },
    band: { label: "À la carte", items: ["Plateaux", "Cocktails", "Buffets"] },
  },
];

export const mockupBySlug = (slug: string) => mockups.find((mockup) => mockup.slug === slug)!;
