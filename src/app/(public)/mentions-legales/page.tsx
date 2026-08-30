import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site personnel de Pierre Laurent.",
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalPage() {
  return (
    <main className="legal-page">
      <article className="shell">
        <p className="eyebrow">Legal information</p>
        <h1>Mentions légales</h1>
        <p className="legal-intro">DERNIÈRE MISE À JOUR / 31 AOÛT 2026</p>

        <h2>1. Éditeur</h2>
        <p>Le site <strong>pierre-laurent.fr</strong> est édité par Pierre Laurent, entrepreneur individuel, sous la dénomination commerciale OptiPro.</p>
        <p>Siège : Bâtiment Le Matisse, 541 Avenue Colonel Meyère, 06140 Vence, France<br />SIREN : 934 301 987<br />SIRET : 934 301 987 00020<br />Code APE : 70.22Z<br />Directeur de la publication : Pierre Laurent<br />Contact : <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a></p>
        <p>Ce site personnel présente les projets numériques de Pierre Laurent et donne accès à son parcours professionnel. Il ne propose pas de prestations ni de prise de commande.</p>

        <h2>2. Hébergement</h2>
        <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.</p>
        <p>Le nom de domaine est géré par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.</p>

        <h2>3. Propriété intellectuelle</h2>
        <p>Les textes, visuels, interfaces, logotypes, photographies et éléments techniques de ce site sont protégés. Ils appartiennent à Pierre Laurent / OptiPro ou à leurs titulaires respectifs lorsqu’une mention l’indique.</p>
        <p>Toute reproduction ou adaptation substantielle nécessite une autorisation écrite préalable.</p>

        <h2>4. Produits présentés</h2>
        <p>ProbaLab et Ferdinand sont des produits distincts. Leurs services, comptes utilisateurs et traitements de données sont régis par leurs propres documents juridiques accessibles depuis leurs interfaces respectives.</p>

        <h2>5. Responsabilité</h2>
        <p>Les informations de ce portfolio sont fournies à titre de présentation et peuvent évoluer avec les produits. Les liens externes conduisent vers des services dont les conditions et politiques leur sont propres.</p>
      </article>
    </main>
  );
}
