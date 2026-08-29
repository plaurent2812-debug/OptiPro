export type ProductProject = {
  slug: "probalab" | "ferdinand";
  name: string;
  code: string;
  status: string;
  statusTone: "cyan" | "amber";
  statement: string;
  description: string;
  image: string;
  icon: string;
  imageAlt: string;
  href?: string;
  platforms: string[];
  technologies: string[];
  capabilities: string[];
};

export const projects: ProductProject[] = [
  {
    slug: "probalab",
    name: "ProbaLab",
    code: "PRJ-01 / DECISION INTELLIGENCE",
    status: "Développement actif",
    statusTone: "cyan",
    statement: "Rendre une décision complexe lisible, sans promettre ce que les données ne prouvent pas.",
    description:
      "Un écosystème web et mobile d’aide à la décision pour les paris sportifs : lecture du marché, analyse factuelle, suivi de bankroll, journal et apprentissage. Le produit privilégie les preuves, la traçabilité et le droit de passer.",
    image: "/projects/probalab-app.png",
    icon: "/projects/probalab-icon.png",
    imageAlt: "Écran Bankroll de l’application ProbaLab",
    href: "https://www.probalab.net",
    platforms: ["Web", "iOS", "Android"],
    technologies: ["Next.js", "React Native", "Python", "PostgreSQL", "Supabase"],
    capabilities: ["Data pipeline", "Analyse", "Abonnements", "Notifications", "IA visuelle"],
  },
  {
    slug: "ferdinand",
    name: "Ferdinand",
    code: "PRJ-02 / PERSONAL OPERATIONS",
    status: "Produit en évolution",
    statusTone: "amber",
    statement: "Confier une information une fois. Être prévenu quand elle devient utile.",
    description:
      "Un majordome numérique calme et fiable qui veille sur les échéances des véhicules, appareils et biens du quotidien. Ferdinand transforme les rappels dispersés en un système simple, personnel et durable.",
    image: "/projects/ferdinand-app.jpg",
    icon: "/projects/ferdinand-icon.png",
    imageAlt: "Tableau de bord de l’application Ferdinand",
    platforms: ["iOS", "Android", "Web"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "Push"],
    capabilities: ["Échéances", "Récurrence", "Notifications", "Mode sombre", "Accessibilité"],
  },
];
