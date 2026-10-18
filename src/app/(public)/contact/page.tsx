import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import PhoneIcon from "@/components/layout/PhoneIcon";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Joindre Pierre Laurent au ${contact.phoneDisplay} ou par e-mail : sites vitrines OptiPro, applications, automatisation et opérations, dans les Alpes-Maritimes.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.pageHero}>
        <div className="shell">
          <h1>Une question, un projet ?<br /><em>Appelez-moi.</em></h1>
          <p>Je réponds moi-même, depuis {contact.city}. Un site pour votre entreprise, un outil à construire ou simplement un échange sur mon parcours : le plus simple est de m’appeler ou de m’écrire.</p>
        </div>
      </section>

      <section className={`shell ${styles.contactSection}`}>
        <div className={styles.contactGrid}>
          <article className={styles.contactMain}>
            <h2>Pierre Laurent</h2>
            <p>Responsable des Opérations, créateur d’applications et d’outils numériques, et fondateur d’{optipro.brand} pour les sites vitrines d’entreprise.</p>
            <div className={styles.buttonRow}>
              <a href={contact.phoneHref} className="button-primary"><PhoneIcon />{contact.phoneDisplay}</a>
              <a href={contact.emailHref} className="button-secondary">{contact.email}</a>
            </div>
            <div className={styles.professionalContact}>
              <h3>Un site pour votre entreprise</h3>
              <p>{optipro.setupPrice} de mise en ligne, puis {optipro.monthlyPrice} par mois ou {optipro.yearlyPrice} par an, pour les {optipro.audience} des {contact.area}.</p>
              <Link href="/optipro">Voir l’offre {optipro.brand}</Link>
              <Link href="/a-propos">Mon parcours</Link>
              <Link href="/cv">Mon CV</Link>
            </div>
          </article>
          <aside className={styles.contactAside}>
            <h3>Me retrouver</h3>
            <dl>
              <div><dt>Téléphone</dt><dd><a href={contact.phoneHref}>{contact.phoneDisplay}</a></dd></div>
              <div><dt>E-mail</dt><dd><a href={contact.emailHref}>{contact.email}</a></dd></div>
              <div><dt>Basé à</dt><dd>{contact.city}, {contact.area}</dd></div>
              <div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer">Pierre Laurent</a></dd></div>
              <div><dt>GitHub</dt><dd><a href={contact.github} target="_blank" rel="noopener noreferrer">plaurent2812-debug</a></dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
