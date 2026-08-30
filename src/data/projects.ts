export type ProductProject = {
  slug: "probalab" | "ferdinand" | "ro-nutritionniste" | "odysio";
  name: string;
  code: string;
  status: string;
  statusTone: "cyan" | "amber" | "sage";
  visual: "phone" | "browser" | "identity";
  statement: string;
  description: string;
  image: string;
  icon: string;
  imageAlt: string;
  href?: string;
  waitLabel?: string;
  platforms: string[];
  technologies: string[];
  capabilities: string[];
  role: string;
  demonstrates: string;
};

export const projects: ProductProject[] = [
  {
    slug: "probalab",
    name: "ProbaLab",
    code: "PROJET 01 / PROBALAB",
    status: "Développement actif",
    statusTone: "cyan",
    visual: "phone",
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
    role: "Conception et développement de l’écosystème web et mobile",
    demonstrates: "Relier des données complexes, rendre l’analyse lisible et expliciter les limites de l’information.",
  },
  {
    slug: "ferdinand",
    name: "Ferdinand",
    code: "PROJET 02 / FERDINAND",
    status: "Produit en évolution",
    statusTone: "amber",
    visual: "phone",
    statement: "Mon idée d’un assistant personnel discret qui n’oublie jamais l’essentiel.",
    description:
      "Ferdinand est né de toutes ces échéances du quotidien que l’on note quelque part avant de les oublier : véhicules, appareils, contrats ou entretien. J’explore avec lui l’idée d’un majordome numérique calme, fiable et réellement utile.",
    image: "/projects/ferdinand-app.jpg",
    icon: "/projects/ferdinand-icon.png",
    imageAlt: "Tableau de bord de l’application Ferdinand",
    platforms: ["iOS", "Android", "Web"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "Push"],
    capabilities: ["Échéances", "Récurrence", "Notifications", "Mode sombre", "Accessibilité"],
    role: "Conception et développement d’un assistant du quotidien",
    demonstrates: "Transformer un besoin récurrent en parcours simple, avec rappels, suivi et attention aux détails.",
  },
  {
    slug: "ro-nutritionniste",
    name: "Ro Nutritionniste",
    code: "PROJET 03 / RO NUTRITIONNISTE",
    status: "Prototype avancé",
    statusTone: "sage",
    visual: "browser",
    statement: "Un univers nutritionnel doux transformé en expérience web complète.",
    description:
      "J’ai conçu pour Romain ONESTA une démonstration de site qui réunit présentation, recettes, contenus, prise de rendez-vous et outils de personnalisation. Ce projet me permet d’explorer une interface plus éditoriale et chaleureuse, sans perdre la précision du produit.",
    image: "/projects/ro-nutritionniste.webp",
    icon: "/projects/ro-nutritionniste.webp",
    imageAlt: "Univers visuel naturel du site Ro Nutritionniste",
    href: "https://ro-nutritionniste-mi0hamiri-optipro-projects.vercel.app",
    platforms: ["Web", "Démo interactive"],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Design system"],
    capabilities: ["Recettes", "Rendez-vous", "Générateur", "Contenus", "Administration"],
    role: "Conception de l’interface et développement de la démonstration",
    demonstrates: "Comprendre un métier et réunir ses contenus et ses outils dans une expérience cohérente.",
  },
  {
    slug: "odysio",
    name: "Odysio",
    code: "PROJET 04 / ODYSIO",
    status: "Projet en pause",
    statusTone: "cyan",
    visual: "identity",
    statement: "Un carnet d’explorateur qui transforme les habitudes en quêtes personnelles.",
    description:
      "Odysio donne une dimension narrative aux habitudes : quêtes, progression, XP, chapitres, avatar et rappels contextualisés. Une version iOS a été testée sur appareil ; j’ai volontairement mis le projet en pause avant de poursuivre le widget, les achats sandbox et le lancement public.",
    image: "/projects/odysio-icon.png",
    icon: "/projects/odysio-icon.png",
    imageAlt: "Icône actuelle de l’application Odysio",
    waitLabel: "Reprise prévue plus tard",
    platforms: ["iOS", "TestFlight"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "RevenueCat"],
    capabilities: ["Quêtes", "Narration IA", "Progression", "Chapitres", "Notifications"],
    role: "Conception et développement d’un prototype mobile",
    demonstrates: "Explorer l’engagement par la narration et l’IA, tester sur appareil et prioriser la suite du produit.",
  },
];
