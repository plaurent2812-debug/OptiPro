import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité du site personnel de Pierre Laurent.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="shell">
        <p className="eyebrow">Privacy protocol</p>
        <h1>Confidentialité</h1>
        <p className="legal-intro">DERNIÈRE MISE À JOUR / 30 AOÛT 2026</p>

        <h2>1. Principe</h2>
        <p>Ce portfolio a été volontairement simplifié pour limiter la collecte de données. Il ne comporte ni formulaire de contact, ni compte visiteur, ni espace client, ni base de données associée à la navigation publique.</p>

        <h2>2. Contact direct</h2>
        <p>Le lien de contact ouvre votre logiciel de messagerie. Si vous écrivez à <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a>, les données transmises sont celles que vous choisissez d’inclure dans votre message. Elles sont utilisées uniquement pour vous répondre et gérer l’échange correspondant.</p>

        <h2>3. Mesure d’audience</h2>
        <p>Vercel Analytics fournit des statistiques techniques et agrégées de fréquentation. Aucun outil publicitaire, pixel social ou dispositif de profilage inter-sites n’est installé sur ce site.</p>

        <h2>4. Hébergement et transferts</h2>
        <p>Le site est hébergé par Vercel Inc. Les traitements techniques liés à l’hébergement et à la mesure d’audience sont encadrés par les engagements contractuels et mécanismes de transfert applicables de Vercel.</p>

        <h2>5. Liens vers ProbaLab et d’autres produits</h2>
        <p>Lorsque vous suivez un lien vers ProbaLab, GitHub, LinkedIn ou un autre service, vous quittez ce site. Le service de destination applique sa propre politique de confidentialité.</p>

        <h2>6. Vos droits</h2>
        <p>Vous pouvez demander l’accès, la rectification ou l’effacement des données contenues dans vos échanges directs en écrivant à <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a>. Vous pouvez également saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a> si vous estimez qu’un traitement ne respecte pas vos droits.</p>
      </article>
    </main>
  );
}
