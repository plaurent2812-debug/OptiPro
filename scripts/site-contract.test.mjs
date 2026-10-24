import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";

const requiredFiles = [
  "src/app/(public)/page.tsx",
  "src/app/(public)/projets/page.tsx",
  "src/app/(public)/a-propos/page.tsx",
  "src/app/(public)/contact/page.tsx",
  "src/app/(public)/mentions-legales/page.tsx",
  "src/app/(public)/confidentialite/page.tsx",
  "src/app/(public)/optipro/page.tsx",
  "src/app/(public)/optipro/transport/page.tsx",
  "src/app/(public)/optipro/vence/page.tsx",
  "src/components/visuals/SystemMap.tsx",
  "src/components/visuals/SystemMap.module.css",
  "src/components/offer/OfferCard.tsx",
  "src/data/offer.ts",
  "src/data/system.ts",
];

const retiredPaths = [
  "src/components/visuals/NetworkMap.tsx",
  "src/components/visuals/NetworkMap.module.css",
  "src/data/network.ts",
  "src/app/admin",
  "src/app/api/contact",
  "src/app/api/cron",
  "src/app/(public)/tarifs",
  "src/app/(public)/services",
  "src/app/(public)/blog",
];

function containsFile(path) {
  if (!existsSync(path)) return false;
  return readdirSync(path, { withFileTypes: true }).some((entry) =>
    entry.isFile() || (entry.isDirectory() && containsFile(`${path}/${entry.name}`)),
  );
}

test("le site expose uniquement les routes prévues", () => {
  requiredFiles.forEach((file) => assert.equal(existsSync(file), true, `${file} doit exister`));
  retiredPaths.forEach((path) => assert.equal(containsFile(path), false, `${path} ne doit contenir aucun fichier`));
});

test("les dépendances commerciales et back-office sont absentes", () => {
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  const dependencies = { ...pkg.dependencies, ...pkg.devDependencies };
  ["@supabase/ssr", "@supabase/supabase-js", "resend", "@react-pdf/renderer", "gsap"].forEach((name) => {
    assert.equal(dependencies[name], undefined, `${name} ne doit plus être installé`);
  });
});

test("les anciens parcours commerciaux sont redirigés", () => {
  const config = readFileSync("next.config.ts", "utf8");
  ["/tarifs", "/services/:path*", "/blog/:path*", "/admin/:path*", "/cgv"].forEach((route) => {
    assert.equal(config.includes(route), true, `redirection manquante : ${route}`);
  });
});

test("l’ancienne offre ne réapparaît pas", () => {
  const contentFiles = [
    ...requiredFiles,
    "src/components/layout/Header.tsx",
    "src/components/layout/Footer.tsx",
    "src/app/layout.tsx",
  ];
  const files = contentFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  [
    "990",
    "1 390",
    "appel découverte",
    "demander un devis",
    "maintenance mensuelle",
    "product builder",
    "client work",
    "studio de produits",
  ].forEach((phrase) => {
    assert.equal(files.toLowerCase().includes(phrase.toLowerCase()), false, `ancien discours commercial résiduel : ${phrase}`);
  });
});

test("l’accueil vend l’offre avant de présenter le parcours", () => {
  const home = readFileSync("src/app/(public)/page.tsx", "utf8");
  assert.match(home, /Création de site internet à Vence et dans les Alpes-Maritimes/);
  assert.match(home, /<OfferCard \/>/);
  assert.match(home, /contact\.phoneHref/);
  // Le site parle de tous les métiers : la page transporteurs sert à la prospection, hors accueil et hors menu.
  assert.match(home, /<Trades\b/);
  assert.doesNotMatch(home, /\/optipro\/transport/);
  assert.doesNotMatch(home, /@\/data\/profile|SystemMap/, "le parcours et le schéma de compétences restent sur /a-propos");

  const header = readFileSync("src/components/layout/Header.tsx", "utf8");
  const firstLink = header.match(/\{ href: "([^"]+)", label/);
  assert.equal(firstLink?.[1], "/optipro", "l’offre ouvre la navigation principale");
  assert.doesNotMatch(header, /href="\/cv"|Savoir-faire/, "le CV sort de la navigation principale");
  assert.doesNotMatch(header, /href: "\/optipro\/transport"/, "la page transporteurs reste hors du menu");

  const footer = readFileSync("src/components/layout/Footer.tsx", "utf8");
  assert.match(footer, /href="\/cv"/, "le CV reste accessible depuis le pied de page");
  const rootLayout = readFileSync("src/app/layout.tsx", "utf8");
  assert.match(rootLayout, /Création de site internet dans les Alpes-Maritimes/);
});

test("l’offre OptiPro affiche les conditions validées par Pierre", () => {
  const offer = readFileSync("src/data/offer.ts", "utf8");
  ["890 €", "79 €", "790 €", "12 mois", "1 h de modifications par mois", "60 €", "Alpes-Maritimes", "tel:+33670259333", "p.laurent@opti-pro.fr", "TVA non applicable, art. 293 B du CGI"].forEach((value) => {
    assert.equal(offer.includes(value), true, `condition manquante : ${value}`);
  });
  const page = readFileSync("src/app/(public)/optipro/page.tsx", "utf8");
  assert.match(page, /non cumulable/);
  assert.match(page, /contact\.phoneHref/);
  assert.match(page, /contact\.emailHref/);
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  assert.match(sitemap, /\/optipro/);
  assert.match(sitemap, /\/optipro\/transport/);
});

test("la page transporteurs vise la recherche locale sans inventer de références", () => {
  const page = readFileSync("src/app/(public)/optipro/transport/page.tsx", "utf8");
  assert.match(page, /Sites internet pour transporteurs des Alpes-Maritimes/);
  assert.match(page, /canonical: "\/optipro\/transport"/);
  assert.match(page, /"@type": "Service"/);
  ["témoignage", "clients satisfaits", "aggregaterating", "\"review\"", "★"].forEach((word) => {
    assert.equal(page.toLowerCase().includes(word), false, `preuve inventée possible : ${word}`);
  });
  const optiproPage = readFileSync("src/app/(public)/optipro/page.tsx", "utf8");
  assert.match(optiproPage, /Création de site internet à Vence et Nice/);
  // Toujours accessible (et explorable par Google) depuis /optipro, via la carte « Transport et services ».
  assert.match(optiproPage, /<Trades withPageLinks \/>/);
  assert.match(readFileSync("src/data/offer.ts", "utf8"), /href: "\/optipro\/transport"/);
});

test("la page Vence vise la recherche locale, reliée au site et sans référence inventée", () => {
  const page = readFileSync("src/app/(public)/optipro/vence/page.tsx", "utf8");
  assert.match(page, /Création de site internet à Vence \(06140\)/);
  assert.match(page, /<>Création de site internet à Vence/);
  assert.match(page, /canonical: "\/optipro\/vence"/);
  assert.match(page, /"@type": "Service"/);
  assert.match(page, /optiproOfferSchema/);
  // Aucun montant en dur : prix, délai et conditions viennent de data/offer.ts.
  assert.doesNotMatch(page, /\d[\d\u202f\u00a0 ]*(?:€|euros)/, "montant en dur sur la page Vence");
  ["témoignage", "clients satisfaits", "aggregaterating", "\"review\"", "★"].forEach((word) => {
    assert.equal(page.toLowerCase().includes(word), false, `preuve inventée possible : ${word}`);
  });
  assert.match(readFileSync("src/app/sitemap.ts", "utf8"), /\/optipro\/vence/);
  assert.match(readFileSync("next.config.ts", "utf8"), /source: "\/creation-site-web-vence", destination: "\/optipro\/vence"/);
  // Au moins un lien entrant, pour que la page ne soit pas orpheline.
  assert.match(readFileSync("src/components/layout/Footer.tsx", "utf8"), /href="\/optipro\/vence"/);
  assert.match(readFileSync("src/app/(public)/optipro/page.tsx", "utf8"), /href: "\/optipro\/vence"/);
});

test("les pages commerciales montrent de vrais sites, sans maquette ni mention « personnelle »", () => {
  ["src/components/offer/SiteMockup.tsx", "src/data/examples.ts"].forEach((file) => assert.equal(existsSync(file), false, `${file} ne doit plus exister`));
  const showcase = readFileSync("src/data/projects.ts", "utf8");
  assert.match(showcase, /showcaseSites = \(\["ro-nutritionniste", "la-parallaxe", "le-fond-du-sujet"\]/);
  const pages = ["src/app/(public)/page.tsx", "src/app/(public)/optipro/page.tsx", "src/app/(public)/optipro/transport/page.tsx", "src/components/offer/SiteShowcase.tsx"].map((file) => readFileSync(file, "utf8")).join("\n");
  assert.match(pages, /showcaseSites|<SiteShowcase \/>/);
  // Le statut réel de chaque site reste affiché (« Démonstration », « En ligne ») : aucun faux client.
  assert.match(pages, /site\.badge/);
  ["maquette", "fictive", "projet personnel", "projets personnels", "mes sites", "par mes soins"].forEach((phrase) => {
    assert.equal(pages.toLowerCase().includes(phrase), false, `formulation à retirer des pages commerciales : ${phrase}`);
  });
});

test("la zone reste locale dans les titres et s’ouvre à toute la France à distance", () => {
  const offer = readFileSync("src/data/offer.ts", "utf8");
  assert.match(offer, /remoteArea: "partout en France à distance"/);
  assert.match(offer, /"@type": "Country", name: "France"/);
  assert.match(readFileSync("src/components/offer/OfferCard.tsx", "utf8"), /contact\.remoteArea/);
  assert.match(readFileSync("src/app/(public)/optipro/page.tsx", "utf8"), /Où intervenez-vous \?.*contact\.remoteArea/);
  assert.match(readFileSync("src/app/(public)/page.tsx", "utf8"), /Création de site internet à Vence et dans les Alpes-Maritimes/);
});

test("le guide des prix ne cite que des chiffres sourcés ou tirés de l’offre", () => {
  const guide = readFileSync("src/app/(public)/optipro/prix-site-internet/page.tsx", "utf8");
  const market = readFileSync("src/data/market.ts", "utf8");
  assert.match(market, /lafabriquedunet\.fr\/agences\/pages\/agences-site-internet\/tarifs/);
  assert.match(market, /consulted: "21 octobre 2026"/);
  assert.match(guide, /marketSource\.url/);
  assert.match(guide, /canonical: "\/optipro\/prix-site-internet"/);
  // Aucun montant écrit en dur dans la page : tout vient de data/market.ts ou de data/offer.ts.
  assert.doesNotMatch(guide, /\d[\d\u202f\u00a0 ]*(?:€|euros)/, "montant en dur dans le guide");
  const offer = readFileSync("src/data/offer.ts", "utf8");
  assert.match(offer, /firstYearMonthly: "1 838 €"/);
  assert.match(offer, /firstYearYearly: "1 680 €"/);
  assert.match(readFileSync("src/app/sitemap.ts", "utf8"), /\/optipro\/prix-site-internet/);
  assert.match(readFileSync("src/app/(public)/optipro/page.tsx", "utf8"), /href="\/optipro\/prix-site-internet"/);
  assert.match(readFileSync("src/app/(public)/page.tsx", "utf8"), /href="\/optipro\/prix-site-internet"/);
});

test("les conditions de l’abonnement validées par Pierre sont affichées", () => {
  const offer = readFileSync("src/data/offer.ts", "utf8");
  ["Hébergement et nom de domaine compris", "enregistré à votre nom", "vous appartiennent", "sans engagement", "préavis d’un mois"].forEach((value) => {
    assert.equal(offer.includes(value), true, `condition manquante : ${value}`);
  });
  const card = readFileSync("src/components/offer/OfferCard.tsx", "utf8");
  assert.match(card, /optipro\.noticePeriod/);
  assert.match(card, /Hébergement et domaine/);
  const faq = readFileSync("src/app/(public)/optipro/page.tsx", "utf8");
  assert.match(faq, /À qui appartient mon site \?/);
  assert.match(faq, /optipro\.afterCommitment/);
  assert.match(readFileSync("src/app/(public)/optipro/prix-site-internet/page.tsx", "utf8"), /optipro\.ownership/);
});

test("les preuves affichées sont mesurées, datées ou confirmées par Pierre", () => {
  const proof = readFileSync("src/data/proof.ts", "utf8");
  assert.match(proof, /measuredOn: "21 octobre 2026"/);
  assert.match(proof, /Lighthouse 12\.8/);
  assert.match(proof, /lcp: "1,9 s"/);
  const offer = readFileSync("src/data/offer.ts", "utf8");
  assert.match(offer, /deliveryTime: "3 semaines"/);
  ["Vos textes rédigés", "Le référencement local", "Un rapport de vitesse", "Hébergement et domaine compris"].forEach((value) => {
    assert.equal(offer.includes(value), true, `livrable manquant : ${value}`);
  });
  assert.doesNotMatch(offer, /Google Business/, "la fiche Google Business n’est pas incluse dans l’offre");
  const market = readFileSync("src/data/market.ts", "utf8");
  assert.match(market, /80 % des sites livrés en 3 mois ou moins/);
  assert.match(readFileSync("src/components/offer/Comparison.tsx", "utf8"), /marketSource\.url/);
  // Le comparatif vit sur /optipro ; l’accueil y renvoie.
  assert.match(readFileSync("src/app/(public)/optipro/page.tsx", "utf8"), /<Comparison \/>/);
  assert.match(readFileSync("src/app/(public)/page.tsx", "utf8"), /href="\/optipro#comparatif"/);
  const home = readFileSync("src/app/(public)/page.tsx", "utf8");
  ["<ProofStrip", "<Deliverables", "<LighthouseProof", "<Guarantees"].forEach((component) => {
    assert.equal(home.includes(component), true, `bloc manquant sur l’accueil : ${component}`);
  });
  // Premier écran : le même site sur ordinateur et sur téléphone, captures réelles.
  assert.match(home, /<PhoneFrame/);
  assert.match(readFileSync("src/data/projects.ts", "utf8"), /mobileImage: \{ src: "\/projects\/ro-nutritionniste-mobile\.webp"/);
  assert.equal(existsSync("public/projects/ro-nutritionniste-mobile.webp"), true);
  // Le score affiché est calculé depuis la mesure, jamais écrit en dur.
  assert.doesNotMatch(home, /\b(99|100)\/100\b/);
});

test("Qui suis-je présente le créateur de sites, sans le poste salarié actuel", () => {
  const about = readFileSync("src/app/(public)/a-propos/page.tsx", "utf8");
  assert.match(about, /experience\.id !== "pharmagreen"/);
  assert.doesNotMatch(about, /href="#pharmagreen"/);
  assert.match(readFileSync("src/app/(public)/layout.tsx", "utf8"), /jobTitle: "Créateur de sites internet, fondateur d’OptiPro"/);
});

test("la barre d’appel fixe n’existe que sur téléphone", () => {
  const layout = readFileSync("src/app/(public)/layout.tsx", "utf8");
  assert.match(layout, /<MobileCallBar \/>/);
  const css = readFileSync("src/components/layout/layout.module.css", "utf8");
  assert.match(css, /\.callBar \{ display: none; \}/);
  assert.match(css, /@media print \{\n  \.callBar \{ display: none; \}/);
  assert.match(readFileSync("src/components/layout/MobileCallBar.tsx", "utf8"), /contact\.phoneHref/);
});

test("le site ne prétend pas que Pierre code lui-même ses sites", () => {
  // Les sites et applications sont réalisés avec des outils d’IA (Claude, Codex) : formulation neutre « je conçois et je réalise ».
  const files = ["src/app/(public)/page.tsx", "src/app/(public)/optipro/page.tsx", "src/app/(public)/optipro/transport/page.tsx", "src/app/(public)/optipro/vence/page.tsx", "src/app/(public)/a-propos/page.tsx", "src/app/(public)/projets/page.tsx", "src/data/system.ts", "src/data/projects.ts", "src/data/offer.ts"];
  const text = files.map((file) => readFileSync(file, "utf8")).join("\n").toLowerCase();
  ["je code", "code moi-même", "développe moi-même", "je développe", "développés de bout en bout", "conçus et développés"].forEach((phrase) => {
    assert.equal(text.includes(phrase), false, `affirmation inexacte : ${phrase}`);
  });
});

test("les mentions légales reflètent l’activité et la franchise de TVA", () => {
  const legal = readFileSync("src/app/(public)/mentions-legales/page.tsx", "utf8");
  assert.doesNotMatch(legal, /ne propose pas de prestations/i);
  assert.match(legal, /TVA non applicable, art\. 293 B du CGI/);
  assert.match(legal, /Code APE : 70\.22Z/);
});

test("aucune donnée ni aucun projet Pharmagreen n’est présenté comme réalisation", () => {
  ["src/data/projects.ts", "src/data/system.ts", "src/app/(public)/page.tsx", "src/app/(public)/optipro/page.tsx", "src/components/offer/OfferCard.tsx"].forEach((file) => {
    assert.equal(readFileSync(file, "utf8").toLowerCase().includes("pharmagreen"), false, `${file} ne doit pas citer Pharmagreen`);
  });
});

test("le seul portrait publié est celui fourni par Pierre", () => {
  assert.equal(existsSync("public/pierre-laurent-portrait.webp"), true);
  const portrait = readFileSync("src/data/portrait.ts", "utf8");
  assert.match(portrait, /src: "\/pierre-laurent-portrait\.webp"/);
  assert.match(readFileSync("src/app/(public)/page.tsx", "utf8"), /portrait\.src/);
  assert.match(readFileSync("src/app/(public)/a-propos/page.tsx", "utf8"), /portrait\.src/);
});

test("les anciens portraits ne reviennent pas et LinkedIn est conservé", () => {
  ["public/pierre-laurent-tech-hero.png", "public/pierre-laurent.png"].forEach((file) => {
    assert.equal(existsSync(file), false, `${file} ne doit plus être publié`);
  });

  const sources = [
    "src/app/(public)/page.tsx",
    "src/app/(public)/a-propos/page.tsx",
    "src/app/(public)/layout.tsx",
    "src/components/layout/Footer.tsx",
    "src/app/(public)/contact/page.tsx",
    "src/data/offer.ts",
  ].map((file) => readFileSync(file, "utf8")).join("\n");

  assert.equal(sources.includes("pierre-laurent-tech-hero.png"), false);
  assert.equal(sources.includes("pierre-laurent.png"), false);
  assert.match(sources, /https:\/\/www\.linkedin\.com\/in\/pierre-laurent-809410123/);
});

test("la direction minimaliste ne réintroduit pas le chrome système", () => {
  const files = [
    "src/app/(public)/page.tsx",
    "src/app/(public)/a-propos/page.tsx",
    "src/app/(public)/home.module.css",
    "src/app/(public)/content.module.css",
  ].map((file) => readFileSync(file, "utf8")).join("\n");

  ["AI CORE", "NEURAL LAYER", "SCROLL TO DISCOVER", "TELEMETRY"].forEach((phrase) => {
    assert.equal(files.includes(phrase), false, `chrome système résiduel : ${phrase}`);
  });
  assert.equal(existsSync("public/hero-particles.webp"), false, "le visuel IA généré ne doit plus être publié");
});

test("le schéma ne masque pas le contenu et ne tourne pas en permanence", () => {
  const component = readFileSync("src/components/visuals/SystemMap.tsx", "utf8");
  const styles = readFileSync("src/components/visuals/SystemMap.module.css", "utf8");
  const globals = readFileSync("src/app/globals.css", "utf8");
  assert.match(component, /aria-hidden="true"/);
  assert.match(styles, /pointer-events: none/);
  assert.doesNotMatch(styles, /infinite/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(globals, /prefers-reduced-motion: reduce/);
});

test("le graphique Factory n’affiche que les deux valeurs connues", () => {
  const home = readFileSync("src/app/(public)/page.tsx", "utf8");
  const profile = readFileSync("src/data/profile.ts", "utf8");
  assert.doesNotMatch(home, /× ?25|x ?25/);
  assert.match(profile, /400\\u00a0k€/);
  assert.match(profile, /10\\u00a0M€/);
});

test("le thème clair et ses polices ont disparu", () => {
  const layout = readFileSync("src/app/layout.tsx", "utf8");
  const globals = readFileSync("src/app/globals.css", "utf8");
  assert.doesNotMatch(layout, /Barlow/);
  assert.match(layout, /Geist/);
  assert.match(layout, /colorScheme: "dark"/);
  assert.doesNotMatch(globals, /#eef0eb|#f2b705|--font-condensed/i);
});

test("la navigation reste native et les exemples fonctionnent sans JavaScript", () => {
  const layout = readFileSync("src/app/(public)/layout.tsx", "utf8");
  const header = readFileSync("src/components/layout/Header.tsx", "utf8");
  const core = readFileSync("src/components/visuals/SystemMap.tsx", "utf8");
  const offerCard = readFileSync("src/components/offer/OfferCard.tsx", "utf8");
  const globals = readFileSync("src/app/globals.css", "utf8");
  assert.doesNotMatch(layout, /CustomCursor/);
  assert.doesNotMatch(globals, /cursor: none/);
  assert.match(header, /href="#contenu"/);
  assert.match(header, /Escape/);
  assert.match(core, /<fieldset/);
  assert.match(core, /type="radio"/);
  assert.doesNotMatch(core, /use client|useEffect|requestAnimationFrame|<canvas/);
  assert.match(offerCard, /type="radio"/);
  assert.doesNotMatch(offerCard, /use client|useEffect|useState/);
});

test("Ro Nutritionniste est présenté comme un prototype web", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "ro-nutritionniste"/);
  assert.match(projects, /status: "Prototype avancé"/);
  assert.match(projects, /visual: "browser"/);
  assert.match(projects, /href: "https:\/\/ro-nutritionniste\.vercel\.app"/);
  assert.equal(existsSync("public/projects/ro-nutritionniste-site.webp"), true);
});

test("La Parallaxe est présentée comme un site scientifique publié", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "la-parallaxe"/);
  assert.match(projects, /status: "Site en ligne"/);
  assert.match(projects, /href: "https:\/\/laparallaxe\.fr"/);
  assert.equal(existsSync("public/projects/la-parallaxe-cosmos.webp"), true);
  assert.equal(existsSync("public/projects/la-parallaxe-icon.png"), true);
});

test("Idéoscope 2027 est présenté comme un outil civique publié et transparent", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "ideoscope-2027"/);
  assert.match(projects, /status: "Site en ligne"/);
  assert.match(projects, /href: "https:\/\/ideoscope2027\.fr\/"/);
  assert.match(projects, /sans collecte des réponses/);
  assert.equal(existsSync("public/projects/ideoscope-2027-interface.webp"), true);
  assert.equal(existsSync("public/projects/ideoscope-2027-icon.svg"), true);
});

test("Odysio est présenté sans inventer de disponibilité publique", () => {
  const projects = readFileSync("src/data/projects.ts", "utf8");

  assert.match(projects, /slug: "odysio"/);
  assert.match(projects, /status: "Projet en pause"/);
  assert.match(projects, /visual: "identity"/);
  assert.match(projects, /platforms: \["iOS", "TestFlight"\]/);
  assert.equal(existsSync("public/projects/odysio-icon.png"), true);
});

test("l’apparition au défilement ne masque jamais le contenu sans script", () => {
  const reveal = readFileSync("src/components/layout/ScrollReveal.tsx", "utf8");
  const globals = readFileSync("src/app/globals.css", "utf8");
  const layout = readFileSync("src/app/(public)/layout.tsx", "utf8");
  assert.match(layout, /<ScrollReveal \/>/);
  assert.match(reveal, /prefers-reduced-motion: reduce/);
  assert.match(reveal, /IntersectionObserver/);
  assert.match(reveal, /threshold: 0\b/, "un bloc plus haut que l’écran doit pouvoir apparaître");
  // Le masquage n'existe que sous la classe posée par le script, et jamais en mouvement réduit.
  const hidden = globals.match(/[^}\n]*\[data-reveal\]:not\(\[data-revealed\]\)[^{]*\{[^}]*opacity: 0/);
  assert.ok(hidden, "règle de masquage introuvable");
  assert.match(hidden[0], /html\.reveal-on/);
  assert.match(globals, /@media \(prefers-reduced-motion: no-preference\) \{\s*html\.reveal-on \[data-reveal\]/);
  assert.doesNotMatch(globals, /\[data-reveal\][^{]*\{[^}]*(top|margin|height):/, "aucune propriété de mise en page ne doit être animée");
});
