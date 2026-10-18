import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import styles from "./layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.footerTop}>
          <div>
            <p className={styles.footerTitle}>Pierre Laurent</p>
            <p className={styles.footerSignal}>Opérations, applications, automatisation, data et sites vitrines {optipro.brand}.</p>
            <p className={styles.footerContact}>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              <a href={contact.emailHref}>{contact.email}</a>
            </p>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/optipro">Sites pour entreprises</Link>
            <Link href="/projets">Réalisations</Link>
            <Link href="/a-propos">Mon parcours</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Contact</Link>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Pierre Laurent, entrepreneur individuel ({optipro.brand})</p>
          <p>{contact.city}, {contact.area}</p>
          <div>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
