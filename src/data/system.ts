// Le schéma « Système » de la page Qui suis-je : cinq étapes, du terrain jusqu’au site en ligne.
// Les preuves reprennent uniquement des faits déjà publiés (profile.ts, projects.ts, offer.ts).
import type { IconName } from "@/components/ui/Icon";
import type { Tone } from "@/components/ui/Section";
import { contact, optipro } from "./offer";

export type StepId = "terrain" | "donnees" | "auto" | "apps" | "site";

export type Proof = {
  /** Chiffre (num) ou mot-clé (word) en tête de ligne */
  term: string;
  kind: "num" | "word";
  unit?: string;
  text: string;
  source: string;
};

export type SystemStep = {
  id: StepId;
  tone: Tone;
  icon: IconName;
  name: string;
  hint: string;
  /** Position du centre du nœud dans le repère 800 × 460 */
  x: number;
  y: number;
  hub?: boolean;
  /** Allumage du nœud (s) */
  delay: number;
  /** Teinte et départ de l’impulsion entrante, pour le flux vertical mobile */
  inTone?: Tone;
  inDelay?: number;
  step: string;
  title: string;
  lede: string;
  proofs: Proof[];
  link: { href: string; label: string };
  tools?: string;
};

export type Wire = {
  from: StepId;
  to: StepId;
  tone: Tone;
  path: string;
  ports: [[number, number], [number, number]];
  label: { x: number; y: number; text: string };
  /** Tracé (s), départ de l’impulsion (s) et durée d’un passage (s) */
  delay: number;
  pulseDelay: number;
  pulseDuration: number;
};

export const systemSteps: SystemStep[] = [
  {
    id: "terrain", tone: "amber", icon: "terrain", name: "Terrain", hint: "Entrepôts, transport",
    x: 120, y: 70, delay: .25,
    step: "Étape 1 sur 5, le terrain", title: "Opérations & logistique",
    lede: "Dix ans dans les entrepôts, les dépôts et le transport. Je sais comment une entreprise tourne vraiment.",
    proofs: [
      { term: "400", kind: "num", text: "commandes préparées et expédiées par jour", source: "Toute la Nutrition, 2015–2017" },
      { term: "8\u202f500", kind: "num", text: "références pilotées en agence", source: "DBS Drive, 2017–2019" },
      { term: "10\u00a0M€", kind: "num", text: "de CA annuel, contre 400\u00a0k€ cinq ans plus tôt", source: "Factory, 2019–2024" },
      { term: "8", unit: "pers.", kind: "num", text: "managées, contrats transporteurs renégociés", source: "GL Events Live, 2025–2026" },
    ],
    link: { href: "#parcours", label: "Voir le parcours en détail" },
  },
  {
    id: "donnees", tone: "cyan", icon: "data", name: "Données", hint: "Tableaux de bord",
    x: 680, y: 70, delay: .95, inTone: "amber", inDelay: 2.9,
    step: "Étape 2 sur 5, les chiffres", title: "Données",
    lede: "Je rassemble les chiffres éparpillés dans vos fichiers et vos logiciels, pour qu’ils servent à décider.",
    proofs: [
      { term: "8\u202f500", kind: "num", text: "références suivies\u00a0: seuils, réassort, inventaires", source: "DBS Drive, 2017–2019" },
      { term: "Base produits", kind: "word", text: "et logiciel de gestion (ERP EBP) mis en place pour une nouvelle filiale", source: "Groupe Eddifis, 2019" },
      { term: "Analyse", kind: "word", text: "chaîne de traitement et d’analyse des données", source: "ProbaLab" },
    ],
    link: { href: "#competences", label: "Voir les compétences et outils" },
    tools: "Python, PostgreSQL / Supabase",
  },
  {
    id: "auto", tone: "cyan", icon: "auto", name: "Automatisation & IA", hint: "Ce qui tourne tout seul",
    x: 400, y: 230, hub: true, delay: 1.55, inTone: "cyan", inDelay: 3.5,
    step: "Étape 3 sur 5, le moteur", title: "Automatisation & IA",
    lede: "Ce qui se répète peut tourner seul. J’automatise, et j’utilise l’IA quand elle apporte vraiment quelque chose.",
    proofs: [
      { term: "Tableaux de bord", kind: "word", text: "automatisés pour piloter l’activité", source: "GL Events Live, 2025–2026" },
      { term: "Simulations", kind: "word", text: "interactives et sourcées, pour comprendre l’actualité", source: "Le Fond du sujet" },
      { term: "API & IA", kind: "word", text: "relier vos logiciels entre eux et à l’intelligence artificielle", source: "Outils utilisés au quotidien" },
    ],
    link: { href: "#competences", label: "Voir les compétences et outils" },
    tools: "Python, TypeScript",
  },
  {
    id: "apps", tone: "green", icon: "app", name: "Applications", hint: "Web et mobile",
    x: 120, y: 390, delay: 2.15, inTone: "cyan", inDelay: 4.1,
    step: "Étape 4 sur 5, les outils", title: "Applications web & mobiles",
    lede: "Des applications que je conçois et que je réalise, de l’idée à l’écran.",
    proofs: [
      { term: "Ferdinand", kind: "word", text: "assistant du quotidien, iOS et Android", source: "En évolution" },
      { term: "ProbaLab", kind: "word", text: "écosystème web et mobile autour de la donnée", source: "Développement actif" },
      { term: "Idéoscope 2027", kind: "word", text: "questionnaire civique", source: "En ligne" },
      { term: "Odysio", kind: "word", text: "prototype iOS", source: "En pause" },
    ],
    link: { href: "/projets", label: "Voir les applications" },
    tools: "Next.js, React Native",
  },
  {
    id: "site", tone: "green", icon: "site", name: "Site vitrine", hint: `Offre ${optipro.brand}`,
    x: 680, y: 390, delay: 2.75, inTone: "green", inDelay: 4.7,
    step: "Étape 5 sur 5, la vitrine", title: `Sites vitrines ${optipro.brand}`,
    lede: "Le site qui présente votre entreprise à vos clients. Je le conçois, je le mets en ligne et je m’en occupe.",
    proofs: [
      { term: "Ro Nutritionniste", kind: "word", text: "démonstration de site pour un nutritionniste", source: "Démonstration" },
      { term: "La Parallaxe", kind: "word", text: "site éditorial scientifique", source: "En ligne" },
      { term: "Le Fond du sujet", kind: "word", text: "site de décryptage de l’actualité", source: "En ligne" },
      { term: optipro.setupPrice, kind: "num", text: `de mise en ligne, puis ${optipro.monthlyPrice} par mois`, source: contact.area },
    ],
    link: { href: "/optipro", label: `Découvrir l’offre ${optipro.brand}` },
  },
];

export const systemWires: Wire[] = [
  {
    from: "terrain", to: "donnees", tone: "amber", path: "M215 70H585", ports: [[215, 70], [585, 70]],
    label: { x: 400, y: 57, text: "commandes, stocks, livraisons" }, delay: .55, pulseDelay: 2.9, pulseDuration: 3.6,
  },
  {
    from: "donnees", to: "auto", tone: "cyan", path: "M680 103V212Q680 230 662 230H518", ports: [[680, 103], [518, 230]],
    label: { x: 590, y: 219, text: "chiffres rassemblés" }, delay: 1.15, pulseDelay: 3.5, pulseDuration: 3.4,
  },
  {
    from: "auto", to: "apps", tone: "cyan", path: "M282 230H138Q120 230 120 248V357", ports: [[282, 230], [120, 357]],
    label: { x: 210, y: 219, text: "tâches automatisées" }, delay: 1.75, pulseDelay: 4.1, pulseDuration: 3.4,
  },
  {
    from: "apps", to: "site", tone: "green", path: "M215 390H585", ports: [[215, 390], [585, 390]],
    label: { x: 400, y: 377, text: "en ligne, pour vos clients" }, delay: 2.35, pulseDelay: 4.7, pulseDuration: 3.6,
  },
];
