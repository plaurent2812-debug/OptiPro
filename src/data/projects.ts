export type ProductProject = {
  slug: "le-fond-du-sujet" | "ideoscope-2027" | "la-parallaxe" | "probalab" | "ferdinand" | "ro-nutritionniste" | "odysio";
  name: string;
  code: string;
  status: string;
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
  /** État court affiché dans les pastilles de l’accueil */
  badge: string;
  badgeTone: "live" | "idle";
  /** Présentation en une ligne pour l’accueil */
  pitch: string;
  /** Supports, en clair */
  reach: string;
  /** Capture mobile sans barre d’état : l’écran réserve la place de l’îlot */
  insetScreen?: boolean;
  /** Capture du même site sur téléphone, prise à la même date que la capture ordinateur */
  mobileImage?: { src: string; width: number; height: number; alt: string };
};

export const projects: ProductProject[] = [
  {
    slug: "le-fond-du-sujet",
    name: "Le Fond du sujet",
    code: "PROJET 01 / LE FOND DU SUJET",
    status: "Site en ligne",
    visual: "browser",
    statement: "Partir d’une question d’actualité pour comprendre les mécanismes derrière les chiffres.",
    category: "Décryptage de l’actualité",
    summary: "Des dossiers à trois niveaux de lecture — L’essentiel, Comprendre, Explorer — avec des sources datées et des outils interactifs pour rendre les chiffres et leurs mécanismes plus lisibles.",
    linkLabel: "Lire les dossiers",
    description:
      "Chaque dossier part d’une question d’actualité, comme le prix de l’essence à la pompe, et se lit en trois temps : la réponse courte, les mécanismes qui l’expliquent, puis les sources et les limites. Graphiques et simulations aident à comprendre les chiffres.",
    image: "/projects/le-fond-du-sujet.webp",
    imageWidth: 1280,
    imageHeight: 720,
    icon: "/projects/le-fond-du-sujet-icon.svg",
    imageAlt: "Accueil du Fond du sujet : Au-delà du chiffre et dossier sur le prix à la pompe",
    href: "https://www.lefonddusujet.fr/",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript"],
    capabilities: ["Lecture progressive", "Simulations interactives", "Sources datées"],
    role: "Conception éditoriale et réalisation du site",
    demonstrates: "Organiser beaucoup d’informations pour que le lecteur trouve vite la réponse, puis le détail s’il le souhaite.",
    badge: "En ligne",
    badgeTone: "live",
    pitch: "Site de décryptage de l’actualité",
    reach: "Web",
  },
  {
    slug: "ideoscope-2027",
    name: "Idéoscope 2027",
    code: "PROJET 02 / IDÉOSCOPE 2027",
    status: "Site en ligne",
    visual: "browser",
    statement: "Un outil civique pour comparer ses convictions aux textes publiés, sans transformer le résultat en consigne de vote.",
    category: "Outil civique",
    summary: "40 questions, 7 mouvements et une méthode transparente pour situer ses convictions à partir de sources officielles, sans collecte des réponses.",
    linkLabel: "Tester Idéoscope",
    description:
      "Un questionnaire de 40 questions compare vos réponses aux textes publiés de 7 mouvements politiques. Le calcul et les sources sont affichés, et vos réponses ne quittent pas votre navigateur. Le résultat indique une proximité, jamais une consigne de vote.",
    image: "/projects/ideoscope-2027-interface.webp",
    imageWidth: 1280,
    imageHeight: 800,
    icon: "/projects/ideoscope-2027-icon.svg",
    imageAlt: "Interface d’Idéoscope 2027 : première question du questionnaire, choix de réponse et méthode transparente",
    href: "https://ideoscope2027.fr/",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript", "WebMCP"],
    capabilities: ["Questionnaire", "Score explicable", "Sources et transparence", "Données locales"],
    role: "Conception éditoriale et réalisation du questionnaire",
    demonstrates: "Rendre un calcul compréhensible et vérifiable par tous, sources à l’appui.",
    badge: "En ligne",
    badgeTone: "live",
    pitch: "Un questionnaire civique en ligne.",
    reach: "Web",
  },
  {
    slug: "la-parallaxe",
    name: "La Parallaxe",
    code: "PROJET 03 / LA PARALLAXE",
    status: "Site en ligne",
    visual: "browser",
    statement: "Un site de vulgarisation scientifique : s’étonner d’abord, comprendre ensuite.",
    category: "Culture scientifique",
    summary: "Un site pour explorer des sujets scientifiques par couches, distinguer les faits établis des hypothèses et garder les sources à portée de regard.",
    linkLabel: "Visiter le site",
    description:
      "Chaque sujet s’ouvre sur une grande image, puis se lit par niveaux : l’essentiel d’abord, le détail ensuite, avec les sources à portée de main. Les faits établis restent distingués des hypothèses.",
    image: "/projects/la-parallaxe-cosmos.webp",
    imageWidth: 1672,
    imageHeight: 941,
    icon: "/projects/la-parallaxe-icon.png",
    imageAlt: "Scène cosmique de La Parallaxe autour d’un trou noir",
    href: "https://laparallaxe.fr",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript", "Design de marque"],
    capabilities: ["Explications par couches", "Interactions", "Sources"],
    role: "Identité visuelle, conception et réalisation du site",
    demonstrates: "Rendre un sujet complexe facile à lire, sans sacrifier l’exactitude.",
    badge: "En ligne",
    badgeTone: "live",
    pitch: "Site éditorial scientifique",
    reach: "Web",
  },
  {
    slug: "probalab",
    name: "ProbaLab",
    code: "PROJET 04 / PROBALAB",
    status: "Développement actif",
    visual: "phone",
    statement: "Une idée imaginée avec un ami, devenue un site et une application mobile.",
    category: "Data & décisions",
    summary: "Une idée pensée avec un ami pour mieux comprendre les paris sportifs, suivre ses décisions et en tirer des leçons. Un écosystème web et mobile qui assume aussi les limites de ses données.",
    linkLabel: "Visiter le site",
    description:
      "ProbaLab est né d’une idée pensée avec un ami : rendre les décisions liées aux paris sportifs plus lisibles et plus responsables. On y compare une cote au reste du marché, on suit ses mises et on garde un journal de ses décisions, avec une règle : quand les données ne permettent pas de conclure, l’application le dit.",
    image: "/projects/probalab-comparaison.webp",
    imageWidth: 390,
    imageHeight: 844,
    icon: "/projects/probalab-icon.png",
    imageAlt: "Interface mobile du site ProbaLab : comparaison d’une cote avec le consensus du marché, sur un exemple pédagogique",
    href: "https://www.probalab.net",
    platforms: ["Web", "iOS", "Android"],
    technologies: ["Next.js", "React Native", "Python", "PostgreSQL", "Supabase"],
    capabilities: ["Lecture du marché", "Analyse", "Abonnements", "Notifications", "IA visuelle"],
    role: "Conception et réalisation du site et de l’application",
    demonstrates: "Présenter des données complexes simplement, sans cacher leurs limites.",
    badge: "Développement actif",
    badgeTone: "live",
    pitch: "Un écosystème web et mobile construit autour de la donnée.",
    reach: "Web et mobile",
    insetScreen: true,
  },
  {
    slug: "ferdinand",
    name: "Ferdinand",
    code: "PROJET 05 / FERDINAND",
    status: "Produit en évolution",
    visual: "phone",
    statement: "Une application qui garde l’œil sur les échéances du quotidien.",
    category: "Assistant du quotidien",
    summary: "Véhicules, contrats, entretien : rassembler les échéances du quotidien dans un assistant calme, pour ne plus avoir à tout garder en tête.",
    waitLabel: "Application en développement",
    description:
      "Ferdinand est né de toutes ces échéances que l’on note quelque part avant de les oublier : véhicules, appareils, contrats ou entretien. L’application les rassemble au même endroit et envoie un rappel au bon moment.",
    image: "/projects/ferdinand-app.jpg",
    imageWidth: 1320,
    imageHeight: 2868,
    icon: "/projects/ferdinand-icon.png",
    imageAlt: "Tableau de bord de l’application Ferdinand",
    platforms: ["iOS", "Android", "Web"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "Push"],
    capabilities: ["Échéances", "Récurrence", "Notifications", "Mode sombre", "Accessibilité"],
    role: "Conception et réalisation de l’application",
    demonstrates: "Transformer un besoin de tous les jours en un outil simple, avec des rappels qui arrivent au bon moment.",
    badge: "En évolution",
    badgeTone: "live",
    pitch: "Un assistant du quotidien, qui garde l’œil sur vos échéances.",
    reach: "iOS et Android",
  },
  {
    slug: "ro-nutritionniste",
    name: "Ro Nutritionniste",
    code: "PROJET 06 / RO NUTRITIONNISTE",
    status: "Prototype avancé",
    visual: "browser",
    statement: "Le site d’un nutritionniste : présenter son approche et faire demander un bilan.",
    category: "Expérience web",
    summary: "Une démonstration pensée pour un nutritionniste : une identité chaleureuse, des recettes et des rendez-vous réunis dans une expérience cohérente.",
    linkLabel: "Visiter le site",
    description:
      "Une démonstration de site conçue pour Romain ONESTA, nutritionniste : présentation, recettes, contenus, prise de rendez-vous et outils de personnalisation réunis au même endroit. Une identité chaleureuse, lisible sur ordinateur comme sur téléphone, avec la demande de bilan toujours à portée.",
    image: "/projects/ro-nutritionniste-site.webp",
    imageWidth: 1280,
    imageHeight: 720,
    icon: "/projects/ro-nutritionniste-icon.webp",
    // Captures ordinateur et téléphone refaites le 21 octobre 2026 sur le site en ligne.
    imageAlt: "Accueil du site Ro Nutritionniste sur ordinateur : « Mieux manger. À votre rythme. », assiette équilibrée et bouton de demande de bilan",
    mobileImage: { src: "/projects/ro-nutritionniste-mobile.webp", width: 780, height: 1600, alt: "Le même site Ro Nutritionniste sur téléphone, avec le bouton « Demander un bilan »" },
    href: "https://ro-nutritionniste.vercel.app",
    platforms: ["Web", "Démo interactive"],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Design system"],
    capabilities: ["Recettes", "Rendez-vous", "Générateur", "Contenus", "Administration"],
    role: "Conception de l’interface et réalisation du site de démonstration",
    demonstrates: "Partir d’un métier pour réunir au même endroit ce que ses clients cherchent : l’approche, les recettes et la prise de rendez-vous.",
    badge: "Démonstration",
    badgeTone: "idle",
    pitch: "Démonstration de site pour un nutritionniste",
    reach: "Web",
  },
  {
    slug: "odysio",
    name: "Odysio",
    code: "PROJET 07 / ODYSIO",
    status: "Projet en pause",
    visual: "identity",
    statement: "Un carnet d’explorateur qui transforme les habitudes en quêtes personnelles.",
    category: "Habitudes & narration",
    summary: "Et si les habitudes devenaient une aventure ? Un prototype mobile mêlant quêtes, progression et narration, testé sur iOS puis mis en pause.",
    description:
      "Odysio transforme les bonnes habitudes en aventure : des quêtes, une progression par chapitres, un avatar et des rappels. Une version iPhone a été testée sur appareil, puis j’ai mis le projet en pause avant son lancement public.",
    image: "/projects/odysio-icon.png",
    imageWidth: 1024,
    imageHeight: 1024,
    icon: "/projects/odysio-icon.png",
    imageAlt: "Icône actuelle de l’application Odysio",
    waitLabel: "Prototype en pause",
    platforms: ["iOS", "TestFlight"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "RevenueCat"],
    capabilities: ["Quêtes", "Narration IA", "Progression", "Chapitres", "Notifications"],
    role: "Conception et réalisation d’un prototype d’application",
    demonstrates: "Tester une idée sur un vrai téléphone avant d’aller plus loin.",
    badge: "En pause",
    badgeTone: "idle",
    pitch: "Un prototype d’application.",
    reach: "iOS",
  },
];

// Sites présentés comme exemples sur les pages commerciales (accueil, offre, transporteurs).
export const showcaseSites = (["ro-nutritionniste", "la-parallaxe", "le-fond-du-sujet"] as const).map((slug) => projects.find((project) => project.slug === slug)!);
