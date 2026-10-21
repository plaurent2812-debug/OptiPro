import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import styles from "./layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.footerInner}`}>
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
