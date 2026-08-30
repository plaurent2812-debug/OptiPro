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
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Contact / Pierre Laurent</p>
          <h1>La suite commence<br />par une <em>conversation.</em></h1>
          <p>Un retour sur une application, une idée à explorer, une discussion tech ou un contact professionnel : tout commence par un échange.</p>
        </div>
      </section>

      <section className={`shell ${styles.contactSection}`}>
        <div className={styles.contactGrid}>
          <article className={styles.contactMain}>
            <p className="tech-label">ÉCRIRE / ÉCHANGER</p>
            <h2>Le plus simple reste un message.</h2>
            <p>Vous avez exploré un projet, repéré un détail à améliorer ou simplement envie d’en parler ? Écrivez-moi directement.</p>
            <div className={styles.buttonRow}>
              <a href="mailto:p.laurent@opti-pro.fr" className="button-primary">p.laurent@opti-pro.fr <span aria-hidden="true">→</span></a>
              <a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer" className="button-secondary">LinkedIn ↗</a>
            </div>
            <p className={styles.availability}>UN ÉCHANGE DIRECT · PROFESSIONNEL OU PERSONNEL</p>
            <div className={styles.professionalContact}><h3>Pour un échange professionnel</h3><p>Mon expérience, mes responsabilités et mes compétences sont réunies dans mon parcours et mon CV.</p><Link href="/a-propos">Parcours professionnel →</Link><Link href="/cv">Consulter mon CV ↗</Link></div>
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
