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
  assert.match(files, /mon parcours/i);
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

test("le site ne publie plus de portrait et conserve LinkedIn", () => {
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
