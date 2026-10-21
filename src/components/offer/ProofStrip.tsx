import { contact, optipro } from "@/data/offer";
import { lighthouse } from "@/data/proof";
import styles from "./ProofStrip.module.css";

// Bandeau de preuves du premier écran : chaque valeur vient de data/offer.ts ou de data/proof.ts.
export default function ProofStrip() {
  const lowest = Math.min(...lighthouse.scores.map((score) => score.value));
  const items = [
    { value: `${lowest}/100`, label: "la plus basse des quatre notes Google Lighthouse de ce site" },
    { value: optipro.deliveryTime, label: "pour mettre votre site en ligne" },
    { value: "À votre nom", label: "le nom de domaine, le site et ses contenus" },
    { value: contact.city, label: "un seul interlocuteur, joignable par téléphone" },
  ];
  return (
    <dl className={styles.strip}>
      {items.map((item) => (
        <div key={item.label}>
          <dt className="num">{item.value}</dt>
          <dd>{item.label}</dd>
        </div>
      ))}
    </dl>
  );
}
