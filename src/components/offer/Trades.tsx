import Link from "next/link";
import { trades } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import styles from "./Trades.module.css";

// Métiers servis : ce que le site fait pour chacun. « withPageLinks » ajoute le lien vers une page dédiée quand elle existe.
// « compact » : bandeau de quatre colonnes sans cartes (accueil).
export default function Trades({ withPageLinks = false, compact = false }: { withPageLinks?: boolean; compact?: boolean }) {
  return (
    <ul className={compact ? styles.compact : styles.list}>
      {trades.map((trade) => (
        <li key={trade.title}>
          <span className={styles.well} aria-hidden="true"><Icon name={trade.icon} /></span>
          <h3>{trade.title}</h3>
          <p className={styles.who}>{trade.who}</p>
          <p>{trade.copy}</p>
          {withPageLinks && "href" in trade && <Link href={trade.href} className={styles.link}>Voir la page dédiée</Link>}
        </li>
      ))}
    </ul>
  );
}
