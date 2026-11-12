import { deliverables } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import styles from "./Deliverables.module.css";

// Ce que comprend la mise en ligne (data/offer.ts, confirmé par Pierre).
// Six cartes en grille : la teinte alterne, la lueur suit le pointeur.
const tones = ["green", "cyan", "amber"] as const;

export default function Deliverables() {
  return (
    <ul className={styles.list}>
      {deliverables.map((item, index) => (
        <li key={item.title} className="glow-card" data-tone={tones[index % tones.length]}>
          <span className={styles.icon} aria-hidden="true"><Icon name={item.icon} /></span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </li>
      ))}
    </ul>
  );
}
