import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import { zones } from "@/data/zones";
import styles from "./layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.footerInner}`}>
        <nav className={`${styles.footerNav} ${styles.footerZones}`} aria-label="Création de site internet par ville">
          <Link href="/optipro">Création de site internet dans les {contact.area}</Link>
          <Link href="/optipro/vence">Création de site à Vence</Link>
          {zones.map((zone) => <Link key={zone.slug} href={`/optipro/${zone.slug}`}>Site internet {zone.at}</Link>)}
        </nav>
        <span>© {new Date().getFullYear()} Pierre Laurent, entrepreneur individuel, {optipro.brand}</span>
        <nav className={styles.footerNav} aria-label="Liens secondaires">
          <Link href="/a-propos">Qui suis-je</Link>
          <Link href="/cv">CV</Link>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}
