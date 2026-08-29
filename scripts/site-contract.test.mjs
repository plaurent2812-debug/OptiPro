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
];

const retiredPaths = [
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

test("le site personnel expose uniquement les routes prévues", () => {
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

test("le discours reste personnel et non commercial", () => {
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
    "pas prestations",
    "aucune mission client",
    "studio de produits",
  ].forEach((phrase) => {
    assert.equal(files.toLowerCase().includes(phrase.toLowerCase()), false, `discours commercial résiduel : ${phrase}`);
  });
  assert.match(files, /site personnel/i);
  assert.match(files, /mon parcours/i);
});
