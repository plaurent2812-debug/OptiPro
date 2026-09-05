import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Retrouver Pierre Laurent par email, sur GitHub, LinkedIn ou à travers ses projets.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Contact / Pierre Laurent</p>
          <h1>Mes coordonnées.<br /><em>Mes autres espaces.</em></h1>
          <p>Les liens pour me retrouver, consulter mon parcours ou découvrir mes projets.</p>
        </div>
      </section>

      <section className={`shell ${styles.contactSection}`}>
        <div className={styles.contactGrid}>
          <article className={styles.contactMain}>
            <p className="tech-label">COORDONNÉES</p>
            <h2>Pierre Laurent</h2>
            <p>Responsable des Opérations chez Pharmagreen et créateur de projets numériques personnels.</p>
            <div className={styles.buttonRow}>
              <a href="mailto:p.laurent@opti-pro.fr" className="button-primary">p.laurent@opti-pro.fr <span aria-hidden="true">→</span></a>
              <a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer" className="button-secondary">LinkedIn ↗</a>
            </div>
            <p className={styles.availability}>VENCE · FRANCE</p>
            <div className={styles.professionalContact}><h3>Mon parcours professionnel</h3><p>Mon expérience, mes responsabilités et mes compétences sont réunies dans mon parcours et mon CV.</p><Link href="/a-propos">Parcours professionnel →</Link><Link href="/cv">Consulter mon CV ↗</Link></div>
          </article>
          <aside className={styles.contactAside}>
            <h3>Mes autres espaces</h3>
            <dl>
              <div><dt>IDENTITÉ</dt><dd>Pierre Laurent</dd></div>
              <div><dt>BASE</dt><dd>Vence · France</dd></div>
              <div><dt>GITHUB</dt><dd><a href="https://github.com/plaurent2812-debug" target="_blank" rel="noopener noreferrer">plaurent2812-debug ↗</a></dd></div>
              <div><dt>PROBALAB</dt><dd><a href="https://www.probalab.net" target="_blank" rel="noopener noreferrer">probalab.net ↗</a></dd></div>
            </dl>
            <p className={styles.signal}>EMAIL / DIRECT<br />GITHUB / PUBLIC<br />PROJETS / EN ÉVOLUTION</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
