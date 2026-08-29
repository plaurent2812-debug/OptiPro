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
    code: "PROJET 01 / PROBALAB",
    status: "Développement actif",
    statusTone: "cyan",
    statement: "Une question personnelle devenue un écosystème web et mobile complet.",
    description:
      "J’ai créé ProbaLab pour rendre les décisions liées aux paris sportifs plus lisibles et responsables. Le projet réunit lecture du marché, analyse factuelle, suivi de bankroll, journal et apprentissage — avec une règle importante : les données doivent aussi savoir dire quand elles ne savent pas.",
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
    code: "PROJET 02 / FERDINAND",
    status: "Produit en évolution",
    statusTone: "amber",
    statement: "Mon idée d’un assistant personnel discret qui n’oublie jamais l’essentiel.",
    description:
      "Ferdinand est né de toutes ces échéances du quotidien que l’on note quelque part avant de les oublier : véhicules, appareils, contrats ou entretien. J’explore avec lui l’idée d’un majordome numérique calme, fiable et réellement utile.",
    image: "/projects/ferdinand-app.jpg",
    icon: "/projects/ferdinand-icon.png",
    imageAlt: "Tableau de bord de l’application Ferdinand",
    platforms: ["iOS", "Android", "Web"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "Push"],
    capabilities: ["Échéances", "Récurrence", "Notifications", "Mode sombre", "Accessibilité"],
  },
];
