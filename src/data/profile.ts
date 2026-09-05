// Parcours issu du CV fourni par Pierre, poste Pharmagreen confirmé en cours le 5 septembre 2026.
// Le périmètre du poste est déclaré par Pierre ; aucun résultat non documenté n'est ajouté.
export const professionalProfile = {
  title: "Responsable des Opérations",
  company: "Pharmagreen",
  period: "Depuis septembre 2026",
  scope: ["Logistique", "Administration", "Data"],
  summary: "Dix ans dans les opérations et la logistique, avec une conviction : une organisation solide repose sur des équipes bien coordonnées, des processus clairs et des outils adaptés au terrain.",
};

export const careerHighlights = [
  { value: "10 ans", label: "dans les opérations et la logistique" },
  { value: "8", label: "collaborateurs encadrés en direct au maximum" },
];

export const capabilities = [
  {
    number: "01", title: "Piloter les opérations",
    description: "Relier les équipes, les stocks, les prestataires et les échéances pour garder la maîtrise de l’exécution.",
    evidence: "Transport, entrepôt, installation · GL Events Live, Factory",
  },
  {
    number: "02", title: "Structurer pour avancer",
    description: "Clarifier les processus, organiser les responsabilités et accompagner la montée en charge.",
    evidence: "Création d’une filiale logistique · Groupe Eddifis",
  },
  {
    number: "03", title: "Relier la data au terrain",
    description: "Rendre l’information exploitable avec des indicateurs, des tableaux de bord et des automatisations.",
    evidence: "Tableaux de bord automatisés · GL Events Live",
  },
];

export const experiences = [
  {
    id: "pharmagreen", company: "Pharmagreen", role: "Responsable des Opérations",
    period: "Sept. 2026 — Aujourd’hui", marker: "POSTE ACTUEL",
    context: "Périmètre du poste : logistique, administration et data.",
    highlights: ["Je pilote la logistique, l’administration et la data de Pharmagreen."],
    tags: ["Logistique", "Administration", "Data"],
  },
  {
    id: "gl-events", company: "GL Events Live", role: "Responsable Exploitation",
    period: "Sept. 2025 — Avr. 2026", marker: "ÉVÉNEMENTIEL",
    context: "Fiabiliser un dépôt et les flux de livraison et de retour de salon.",
    highlights: [
      "Réorganisation du dépôt : adressage, inventaire et processus de livraison et de retour.",
      "Renégociation des contrats transporteurs et déploiement de tableaux de bord automatisés.",
      "Management de 8 personnes et conduite de travaux d’amélioration du site.",
    ],
    tags: ["Exploitation", "Management", "Pilotage par la donnée"],
  },
  {
    id: "parenthese", company: "Parenthèse familiale", role: "Apprendre et construire autrement",
    period: "Sept. 2024 — Août 2025", marker: "APPRENTISSAGE",
    context: "Une période également consacrée à me former à la création d’outils web pour automatiser le suivi opérationnel.",
    highlights: [], tags: ["Outils web", "Automatisation"],
  },
  {
    id: "factory", company: "Factory", role: "Responsable Logistique & Exploitation",
    period: "Nov. 2019 — Sept. 2024", marker: "AMÉNAGEMENT D’ESPACES DE TRAVAIL",
    context: "Structurer les opérations dans un contexte de forte croissance et de projets complexes.",
    highlights: [
      "Pilotage opérationnel d’un portefeuille de projets passé de 400 k€ à 10 M€ de chiffre d’affaires annuel en cinq ans.",
      "Projets de plus de 1 M€, jusqu’à 5 000 m² et plus de 1 000 postes ; coordination du devis à la réception.",
      "Gestion ADV, maîtrise des coûts et de la marge, encadrement de 3 collaborateurs et supervision des équipes d’installation.",
    ],
    tags: ["Gestion de projets", "ADV", "Coordination terrain"],
  },
  {
    id: "eddifis", company: "Groupe Eddifis", role: "Responsable Logistique",
    period: "Janv. 2019 — Nov. 2019", marker: "STRUCTURATION",
    context: "Créer une filiale d’approvisionnement au service des sociétés du groupe.",
    highlights: ["Mise en place du dépôt, d’EBP, de la base produits, du sourcing et des processus de commande et de facturation."],
    tags: ["Création d’activité", "ERP", "Approvisionnement"],
  },
  {
    id: "dbs", company: "DBS Drive", role: "Responsable d’Agence",
    period: "Déc. 2017 — Janv. 2019", marker: "DISTRIBUTION SPÉCIALISÉE",
    context: "Supervision logistique d’une agence de robinetterie et de chauffage.",
    highlights: ["Animation de 3 vendeurs et pilotage de 8 500 références : seuils, réassort et inventaires."],
    tags: ["Stocks", "Management", "Relation client"],
  },
  {
    id: "nutrition", company: "Toute la Nutrition", role: "Responsable Adjoint Entrepôt",
    period: "Avr. 2015 — Déc. 2017", marker: "LOGISTIQUE E-COMMERCE",
    context: "Organiser les préparations et les expéditions au quotidien.",
    highlights: ["Supervision de 400 commandes par jour et management d’une équipe de 3 à 4 préparateurs."],
    tags: ["Préparation", "Expédition", "Équipe terrain"],
  },
];

export const skillGroups = [
  { title: "Opérations & organisation", items: ["Pilotage de projets", "Management", "Coordination de prestataires", "Stocks & flux", "ADV", "Négociation"] },
  { title: "Outils métier & data", items: ["EBP", "Axapta / WMS", "Excel", "Google Sheets", "Tableaux de bord", "Automatisation"] },
  { title: "Création numérique", items: ["Next.js / React", "React Native / Expo", "TypeScript", "Python", "PostgreSQL / Supabase", "API & IA"] },
];

export const education = { title: "Bac professionnel · Commerce", school: "Afipe", period: "2008 — 2010" };
export const languages = ["Français · langue maternelle", "Anglais · bilingue"];
export const interests = ["Tech & IA", "Football", "Golf", "Cuisine", "Horlogerie", "Voyages"];
