import { guarantees } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import styles from "./Guarantees.module.css";

// Engagements d’OptiPro, chacun tiré d’une condition publiée (data/offer.ts).
// « compact » : une ligne de garanties sous la carte tarifaire (accueil).
export default function Guarantees({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <ul className={styles.compact} aria-label="Mes engagements">
        {guarantees.map((item) => <li key={item.title}><span className={styles.check} aria-hidden="true"><Icon name="check" /></span>{item.title}</li>)}
      </ul>
    );
  }
  return (
    <ul className={styles.list}>
      {guarantees.map((item) => (
        <li key={item.title}>
          <span className={styles.check} aria-hidden="true"><Icon name="check" /></span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </li>
      ))}
    </ul>
  );
}
