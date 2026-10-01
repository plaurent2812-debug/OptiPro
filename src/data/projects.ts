export type ProductProject = {
  slug: "le-fond-du-sujet" | "ideoscope-2027" | "la-parallaxe" | "probalab" | "ferdinand" | "ro-nutritionniste" | "odysio";
  name: string;
  code: string;
  status: string;
  statusTone: "cyan" | "amber" | "sage";
  visual: "phone" | "browser" | "identity";
  statement: string;
  category: string;
  summary: string;
  linkLabel?: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
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
    slug: "le-fond-du-sujet",
    name: "Le Fond du sujet",
    code: "PROJET 01 / LE FOND DU SUJET",
    status: "Site en ligne",
    statusTone: "amber",
    visual: "browser",
    statement: "Partir d’une question d’actualité pour comprendre les mécanismes derrière les chiffres.",
    category: "Décryptage de l’actualité",
    summary: "Des dossiers à trois niveaux de lecture — L’essentiel, Comprendre, Explorer — avec des sources datées et des outils interactifs pour rendre les chiffres et leurs mécanismes plus lisibles.",
    linkLabel: "Lire les dossiers",
    description:
      "Le Fond du sujet propose une lecture progressive de l’actualité : une réponse courte, les mécanismes qui l’expliquent, puis les sources et les limites pour aller plus loin. Les dossiers associent explications, visualisations et simulations, en distinguant les données observées, les annonces et les scénarios.",
    image: "/projects/le-fond-du-sujet.webp",
    imageWidth: 1280,
    imageHeight: 720,
    icon: "/projects/le-fond-du-sujet-icon.svg",
    imageAlt: "Accueil du Fond du sujet : Au-delà du chiffre et dossier sur le prix à la pompe",
    href: "https://www.lefonddusujet.fr/",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript"],
    capabilities: ["Lecture progressive", "Simulations interactives", "Sources datées"],
    role: "Conception éditoriale et développement d’un site de décryptage interactif",
    demonstrates: "Rendre un sujet d’actualité compréhensible, relier les explications aux sources et expliciter les hypothèses des simulations.",
  },
  {
    slug: "ideoscope-2027",
    name: "Idéoscope 2027",
    code: "PROJET 02 / IDÉOSCOPE 2027",
    status: "Site en ligne",
    statusTone: "cyan",
    visual: "browser",
    statement: "Un outil civique pour comparer ses convictions aux textes publiés, sans transformer le résultat en consigne de vote.",
    category: "Outil civique",
    summary: "40 questions, 7 mouvements et une méthode transparente pour situer ses convictions à partir de sources officielles, sans collecte des réponses.",
    linkLabel: "Tester Idéoscope",
    description:
      "Idéoscope 2027 compare les réponses à un corpus de textes politiques publiés. Le questionnaire rend son calcul, ses sources, leur fraîcheur et ses limites visibles ; les réponses restent dans le navigateur et le résultat mesure une proximité sur les propositions couvertes, jamais une intention de vote.",
    image: "/projects/ideoscope-2027.webp",
    imageWidth: 1200,
    imageHeight: 630,
    icon: "/projects/ideoscope-2027-icon.svg",
    imageAlt: "Identité d’Idéoscope 2027 : comparer ses convictions, pas les étiquettes",
    href: "https://ideoscope2027.fr/",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript", "WebMCP"],
    capabilities: ["Questionnaire", "Score explicable", "Sources et transparence", "Données locales"],
    role: "Conception éditoriale et développement d’un questionnaire civique sourcé",
    demonstrates: "Comparer des positions politiques avec une méthode auditable, des sources datées et des limites clairement exposées.",
  },
  {
    slug: "la-parallaxe",
    name: "La Parallaxe",
    code: "PROJET 03 / LA PARALLAXE",
    status: "Site en ligne",
    statusTone: "sage",
    visual: "browser",
    statement: "Une expérience de vulgarisation scientifique où l’émerveillement ouvre la voie à la compréhension.",
    category: "Culture scientifique",
    summary: "Un site pour explorer des sujets scientifiques par couches, distinguer les faits établis des hypothèses et garder les sources à portée de regard.",
    linkLabel: "Visiter le site",
    description:
      "La Parallaxe propose de découvrir la science autrement : un premier regard pour s’étonner, un second pour comprendre. Chaque exploration relie une scène visuelle, des niveaux de profondeur, des interactions et des sources, sans transformer une hypothèse en certitude.",
    image: "/projects/la-parallaxe-cosmos.webp",
    imageWidth: 1672,
    imageHeight: 941,
    icon: "/projects/la-parallaxe-icon.png",
    imageAlt: "Scène cosmique de La Parallaxe autour d’un trou noir",
    href: "https://laparallaxe.fr",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript", "Design de marque"],
    capabilities: ["Explications par couches", "Interactions", "Sources"],
    role: "Identité, conception et développement d’une expérience éditoriale interactive",
    demonstrates: "Rendre un sujet complexe accessible sans effacer ses nuances, ses limites ni les sources qui permettent de le vérifier.",
  },
  {
    slug: "probalab",
    name: "ProbaLab",
    code: "PROJET 04 / PROBALAB",
    status: "Développement actif",
    statusTone: "cyan",
    visual: "phone",
    statement: "Une idée imaginée avec un ami, devenue un écosystème web et mobile.",
    category: "Data & décisions",
    summary: "Une idée pensée avec un ami pour mieux comprendre les paris sportifs, suivre ses décisions et en tirer des leçons. Un écosystème web et mobile qui assume aussi les limites de ses données.",
    linkLabel: "Visiter le site",
    description:
      "ProbaLab est né d’une idée pensée avec un ami : rendre les décisions liées aux paris sportifs plus lisibles et responsables. Le projet réunit lecture du marché, analyse factuelle, suivi de bankroll, journal et apprentissage — avec une règle importante : les données doivent aussi savoir dire quand elles ne savent pas.",
    image: "/projects/probalab-comparaison.webp",
    imageWidth: 390,
    imageHeight: 844,
    icon: "/projects/probalab-icon.png",
    imageAlt: "Interface mobile du site ProbaLab : comparaison d’une cote avec le consensus du marché, sur un exemple pédagogique",
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
    code: "PROJET 05 / FERDINAND",
    status: "Produit en évolution",
    statusTone: "amber",
    visual: "phone",
    statement: "Mon idée d’un assistant personnel discret qui n’oublie jamais l’essentiel.",
    category: "Assistant du quotidien",
    summary: "Véhicules, contrats, entretien : rassembler les échéances du quotidien dans un assistant calme, pour ne plus avoir à tout garder en tête.",
    waitLabel: "Application en développement",
    description:
      "Ferdinand est né de toutes ces échéances du quotidien que l’on note quelque part avant de les oublier : véhicules, appareils, contrats ou entretien. J’explore avec lui l’idée d’un majordome numérique calme, fiable et réellement utile.",
    image: "/projects/ferdinand-app.jpg",
    imageWidth: 1320,
    imageHeight: 2868,
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
    code: "PROJET 06 / RO NUTRITIONNISTE",
    status: "Prototype avancé",
    statusTone: "sage",
    visual: "browser",
    statement: "Un univers nutritionnel doux transformé en expérience web complète.",
    category: "Expérience web",
    summary: "Une démonstration pensée pour un nutritionniste : une identité chaleureuse, des recettes et des rendez-vous réunis dans une expérience cohérente.",
    linkLabel: "Visiter le site",
    description:
      "J’ai conçu pour Romain ONESTA une démonstration de site qui réunit présentation, recettes, contenus, prise de rendez-vous et outils de personnalisation. Ce projet me permet d’explorer une interface plus éditoriale et chaleureuse, sans perdre la précision du produit.",
    image: "/projects/ro-nutritionniste-site.webp",
    imageWidth: 1280,
    imageHeight: 720,
    icon: "/projects/ro-nutritionniste-icon.webp",
    imageAlt: "Accueil du site Ro Nutritionniste : identité sauge, assiette équilibrée et accompagnement de Romain ONESTA",
    href: "https://ro-nutritionniste.vercel.app",
    platforms: ["Web", "Démo interactive"],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Design system"],
    capabilities: ["Recettes", "Rendez-vous", "Générateur", "Contenus", "Administration"],
    role: "Conception de l’interface et développement de la démonstration",
    demonstrates: "Comprendre un métier et réunir ses contenus et ses outils dans une expérience cohérente.",
  },
  {
    slug: "odysio",
    name: "Odysio",
    code: "PROJET 07 / ODYSIO",
    status: "Projet en pause",
    statusTone: "cyan",
    visual: "identity",
    statement: "Un carnet d’explorateur qui transforme les habitudes en quêtes personnelles.",
    category: "Habitudes & narration",
    summary: "Et si les habitudes devenaient une aventure ? Un prototype mobile mêlant quêtes, progression et narration, testé sur iOS puis mis en pause.",
    description:
      "Odysio donne une dimension narrative aux habitudes : quêtes, progression, XP, chapitres, avatar et rappels contextualisés. Une version iOS a été testée sur appareil ; j’ai volontairement mis le projet en pause avant de poursuivre le widget, les achats sandbox et le lancement public.",
    image: "/projects/odysio-icon.png",
    imageWidth: 1024,
    imageHeight: 1024,
    icon: "/projects/odysio-icon.png",
    imageAlt: "Icône actuelle de l’application Odysio",
    waitLabel: "Prototype en pause",
    platforms: ["iOS", "TestFlight"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "RevenueCat"],
    capabilities: ["Quêtes", "Narration IA", "Progression", "Chapitres", "Notifications"],
    role: "Conception et développement d’un prototype mobile",
    demonstrates: "Explorer l’engagement par la narration et l’IA, tester sur appareil et prioriser la suite du produit.",
  },
];
