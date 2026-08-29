import type { Metadata } from "next";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Pierre Laurent à propos de ProbaLab, Ferdinand ou de ses projets numériques.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Open channel</p>
          <h1>Parlons produits,<br /><em>pas prestations.</em></h1>
          <p>Je ne prends plus de missions client. En revanche, je reste toujours partant pour une discussion pertinente autour de ProbaLab, Ferdinand, de la donnée ou de la construction de produits.</p>
        </div>
      </section>

      <section className={`shell ${styles.contactSection}`}>
        <div className={styles.contactGrid}>
          <article className={`panel ${styles.contactMain}`}>
            <p className="tech-label">DIRECT LINE / ASYNC</p>
            <h2>Un message clair suffit.</h2>
            <p>Contexte, idée, retour produit ou envie d’échanger : écrivez-moi directement. Aucun formulaire, aucun CRM, aucune séquence commerciale.</p>
            <div className={styles.buttonRow}>
              <a href="mailto:p.laurent@opti-pro.fr" className="button-primary">p.laurent@opti-pro.fr <span aria-hidden="true">→</span></a>
              <a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer" className="button-secondary">LinkedIn ↗</a>
            </div>
            <p className={styles.availability}>STATUS / AUCUNE MISSION CLIENT · ÉCHANGES PRODUIT UNIQUEMENT</p>
          </article>
          <aside className={`panel ${styles.contactAside}`}>
            <h3>Coordonnées système</h3>
            <dl>
              <div><dt>IDENTITÉ</dt><dd>Pierre Laurent</dd></div>
              <div><dt>BASE</dt><dd>Vence · France</dd></div>
              <div><dt>GITHUB</dt><dd><a href="https://github.com/plaurent2812-debug" target="_blank" rel="noopener noreferrer">plaurent2812-debug ↗</a></dd></div>
              <div><dt>PRODUIT ACTIF</dt><dd><a href="https://www.probalab.net" target="_blank" rel="noopener noreferrer">probalab.net ↗</a></dd></div>
            </dl>
            <p className={styles.signal}>CHANNEL / SECURE<br />RESPONSE / ASYNCHRONOUS<br />NO SALES PIPELINE</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
