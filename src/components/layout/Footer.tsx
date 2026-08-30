import Link from "next/link";
import styles from "./layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.footerTop}>
          <div>
            <p className={styles.footerTitle}>Pierre Laurent</p>
            <p className={styles.footerSignal}>Opérations, data & création numérique.</p>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/projets">Projets</Link>
            <Link href="/a-propos">Parcours</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Me contacter</Link>
            <a href="https://github.com/plaurent2812-debug" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Pierre Laurent</p>
          <p className={styles.siteNote}>Site personnel · Vence, France</p>
          <div>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
