import { deliverables } from "@/data/offer";
import styles from "./Deliverables.module.css";

// Ce que comprend la mise en ligne (data/offer.ts, confirmé par Pierre).
// Une fiche en colonnes séparées par des filets : le titre fait le travail, sans icône.
export default function Deliverables({ columns = 2 }: { columns?: 2 | 3 }) {
  return (
    <ul className={styles.list} data-columns={columns}>
      {deliverables.map((item) => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </li>
      ))}
    </ul>
  );
}
