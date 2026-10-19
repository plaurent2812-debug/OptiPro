import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.panel}>
        <p className={styles.code}><i aria-hidden="true" />Erreur 404</p>
        <h1>Hors réseau.</h1>
        <p className={styles.copy}>Cette page n’existe pas ou a été déplacée.</p>
        <Link href="/" className="btn btn-primary">Retour à l’accueil</Link>
      </div>
    </main>
  );
}
