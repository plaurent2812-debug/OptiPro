import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Joindre Pierre Laurent au ${contact.phoneDisplay} ou par e-mail : sites vitrines OptiPro, applications, automatisation et opérations, dans les Alpes-Maritimes.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <PageHero titleId="contact-title" kicker="Contact" tone="green" icon="tel" title={<>Une question, un projet&nbsp;? <span>Appelez-moi.</span></>}>
        <p>Je réponds moi-même, depuis {contact.city}. Un site pour votre entreprise, un outil à construire ou simplement un échange sur mon parcours&nbsp;: le plus simple est de m’appeler ou de m’écrire.</p>
      </PageHero>

      <section className={styles.contactSection} aria-label="Coordonnées">
        <div className={`shell ${styles.contactGrid}`}>
          <article className={styles.card}>
            <h2>Pierre Laurent</h2>
            <p>Responsable des Opérations, créateur d’applications et d’outils numériques, et fondateur d’{optipro.brand} pour les sites vitrines d’entreprise.</p>
            <div className={styles.buttonRow}>
              <a href={contact.phoneHref} className="btn btn-primary"><Icon name="tel" /><span className="num">{contact.phoneDisplay}</span></a>
              <a href={contact.emailHref} className="btn btn-ghost"><Icon name="mail" />{contact.email}</a>
            </div>
            <div className={styles.offerBox}>
              <h3>Un site pour votre entreprise</h3>
              <p>{optipro.setupPrice} de mise en ligne, puis {optipro.monthlyPrice} par mois ou {optipro.yearlyPrice} par an, pour les {optipro.audience} des {contact.area}.</p>
              <p className={styles.links}>
                <Link href="/optipro">Voir l’offre {optipro.brand}</Link>
                <Link href="/a-propos">Mon parcours</Link>
                <Link href="/cv">Mon CV</Link>
              </p>
            </div>
          </article>
          <aside className={styles.card} aria-labelledby="directory-title">
            <h2 id="directory-title">Me retrouver</h2>
            <dl className={styles.directory}>
              <div><dt>Téléphone</dt><dd><a href={contact.phoneHref} className="num">{contact.phoneDisplay}</a></dd></div>
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
