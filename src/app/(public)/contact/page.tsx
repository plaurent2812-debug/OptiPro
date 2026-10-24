import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Joindre Pierre Laurent, ${optipro.brand}, au ${contact.phoneDisplay} ou par e-mail pour la création de votre site internet dans les ${contact.area}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <PageHero titleId="contact-title" kicker="Contact" tone="green" title={<>Un site pour votre entreprise&nbsp;? <span>Appelez-moi.</span></>}>
        <p>Je réponds moi-même, depuis {contact.city}. Un appel suffit pour faire le point sur votre activité et savoir si l’offre {optipro.brand} vous convient.</p>
      </PageHero>

      <section className={styles.contactSection} aria-label="Coordonnées">
        <div className={`shell ${styles.contactGrid}`}>
          <article className={styles.card}>
            <h2>Pierre Laurent</h2>
            <p>Fondateur d’{optipro.brand}&nbsp;: je crée, mets en ligne et fais vivre les sites internet des {optipro.audience} des {contact.area}.</p>
            <div className={styles.buttonRow}>
              <a href={contact.phoneHref} className="btn btn-primary"><Icon name="tel" /><span className="num">{contact.phoneDisplay}</span></a>
              <a href={contact.emailHref} className="btn btn-ghost"><Icon name="mail" />{contact.email}</a>
            </div>
            <div className={styles.offerBox}>
              <h3>Un site pour votre entreprise</h3>
              <p>{optipro.setupPrice} de mise en ligne, puis {optipro.monthlyPrice} par mois ou {optipro.yearlyPrice} par an, pour les {optipro.audience} des {contact.area}.</p>
              <p className={styles.links}>
                <Link href="/optipro">Voir l’offre {optipro.brand}</Link>
                <Link href="/optipro/prix-site-internet">Prix d’un site internet</Link>
                <Link href="/a-propos">Qui suis-je</Link>
              </p>
            </div>
          </article>
          <aside className={styles.card} aria-labelledby="directory-title">
            <h2 id="directory-title">Me retrouver</h2>
            <dl className={styles.directory}>
              <div><dt>Téléphone</dt><dd><a href={contact.phoneHref} className="num">{contact.phoneDisplay}</a></dd></div>
              <div><dt>E-mail</dt><dd><a href={contact.emailHref}>{contact.email}</a></dd></div>
              <div><dt>Basé à</dt><dd>{contact.city}, {contact.area}</dd></div>
              <div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/pierre-laurent-ops/" target="_blank" rel="noopener noreferrer">Pierre Laurent</a></dd></div>
              <div><dt>GitHub</dt><dd><a href={contact.github} target="_blank" rel="noopener noreferrer">plaurent2812-debug</a></dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
