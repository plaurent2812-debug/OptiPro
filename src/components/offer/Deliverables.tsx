import { deliverables } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import styles from "./Deliverables.module.css";

// Ce que comprend la mise en ligne (data/offer.ts, confirmé par Pierre).
export default function Deliverables() {
  return (
    <ul className={styles.list}>
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
