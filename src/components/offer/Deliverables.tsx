import { deliverables } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import styles from "./Deliverables.module.css";

// Ce que comprend la mise en ligne (data/offer.ts, confirmé par Pierre).
// « spec » : fiche technique en deux colonnes, sans cartes (accueil).
export default function Deliverables({ variant = "cards" }: { variant?: "cards" | "spec" }) {
  return (
    <ul className={variant === "spec" ? styles.spec : styles.list}>
      {deliverables.map((item) => (
        <li key={item.title}>
          <span className={styles.well} aria-hidden="true"><Icon name={item.icon} /></span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </li>
      ))}
    </ul>
  );
}
