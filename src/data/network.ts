// Le plan de lignes de l'accueil : chaque compétence est une ligne, chaque preuve une station.
// Les stations reprennent uniquement des faits déjà publiés (profile.ts, projects.ts, offer.ts).
import { optipro } from "./offer";

export type LineId = "ops" | "apps" | "data" | "web";

export type Stop = {
  name: string;
  detail: string;
  x: number;
  y: number;
  /** Position de l'étiquette sur le plan */
  label: "above" | "below" | "left" | "right" | "aboveLeft" | "belowRight";
  interchange?: boolean;
  terminus?: boolean;
};

export type NetworkLine = {
  id: LineId;
  code: string;
  name: string;
  pitch: string;
  path: string;
  stops: Stop[];
  link: { href: string; label: string };
};

export const networkLines: NetworkLine[] = [
  {
    id: "ops",
    code: "O",
    name: "Opérations & logistique",
    pitch: "Dix ans à faire tourner des entrepôts, des agences et des chantiers.",
    path: "M50 110 H480 L540 50",
    stops: [
      { name: "Toute la Nutrition", detail: "Supervision de 400 commandes préparées et expédiées par jour.", x: 50, y: 110, label: "below", terminus: true },
      { name: "DBS Drive", detail: "8 500 références pilotées : seuils, réassort et inventaires.", x: 140, y: 110, label: "above" },
      { name: "Groupe Eddifis", detail: "Création d’une filiale d’approvisionnement : dépôt, ERP, achats.", x: 230, y: 110, label: "below" },
      { name: "Factory", detail: "Un portefeuille de projets passé de 400 k€ à 10 M€ de chiffre d’affaires annuel en cinq ans.", x: 320, y: 110, label: "above" },
      { name: "GL Events Live", detail: "Renégociation des contrats transporteurs, dépôt réorganisé, équipe de 8 personnes.", x: 420, y: 110, label: "above", interchange: true },
      { name: "Aujourd’hui", detail: "Responsable des Opérations : logistique, administration et data.", x: 540, y: 50, label: "right", terminus: true },
    ],
    link: { href: "/a-propos", label: "Voir mon parcours" },
  },
  {
    id: "apps",
    code: "A",
    name: "Applications web & mobiles",
    pitch: "Des applications conçues et développées de bout en bout, du besoin jusqu’à l’écran.",
    path: "M100 200 H560",
    stops: [
      { name: "Ferdinand", detail: "Un assistant du quotidien pour ne plus oublier aucune échéance, sur iOS et Android.", x: 100, y: 200, label: "above", terminus: true },
      { name: "ProbaLab", detail: "Un écosystème web et mobile construit autour de la donnée.", x: 330, y: 200, label: "aboveLeft", interchange: true },
      { name: "Odysio", detail: "Un prototype iOS testé sur appareil, aujourd’hui en pause.", x: 560, y: 200, label: "above", terminus: true },
    ],
    link: { href: "/projets", label: "Voir les projets" },
  },
  {
    id: "data",
    code: "D",
    name: "Automatisation, IA & data",
    pitch: "Faire parler les chiffres et supprimer les tâches qui se répètent.",
    path: "M420 110 L170 360",
    stops: [
      { name: "GL Events Live", detail: "Des tableaux de bord automatisés pour piloter l’exploitation.", x: 420, y: 110, label: "above", interchange: true },
      { name: "ProbaLab", detail: "Collecte et analyse de données, avec une part d’IA visuelle.", x: 330, y: 200, label: "aboveLeft", interchange: true },
      { name: "Le Fond du sujet", detail: "Des simulations interactives appuyées sur des sources datées.", x: 240, y: 290, label: "belowRight", interchange: true },
      { name: "Mes outils", detail: "Python, PostgreSQL et Supabase, API et IA.", x: 170, y: 360, label: "right", terminus: true },
    ],
    link: { href: "/a-propos#competences", label: "Voir mes compétences" },
  },
  {
    id: "web",
    code: "S",
    name: "Sites vitrines OptiPro",
    pitch: "Des sites clairs et rapides pour les TPE et PME des Alpes-Maritimes.",
    path: "M60 290 H380 L440 350 H590",
    stops: [
      { name: "Ro Nutritionniste", detail: "Une démonstration de site pour un nutritionniste : recettes et rendez-vous.", x: 60, y: 290, label: "above", terminus: true },
      { name: "La Parallaxe", detail: "Un site éditorial en ligne, pensé pour être lu sur tous les écrans.", x: 150, y: 290, label: "below" },
      { name: "Le Fond du sujet", detail: "Un site de décryptage de l’actualité, en ligne.", x: 240, y: 290, label: "belowRight", interchange: true },
      { name: "Votre entreprise", detail: `${optipro.setupPrice} de mise en ligne, puis ${optipro.monthlyPrice} par mois.`, x: 590, y: 350, label: "above", terminus: true },
    ],
    link: { href: "/optipro", label: "Voir l’offre OptiPro" },
  },
];
