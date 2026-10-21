import type { CSSProperties } from "react";
import { lighthouse } from "@/data/proof";
import styles from "./LighthouseProof.module.css";

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Jauges Lighthouse de ce site : valeurs réellement mesurées (data/proof.ts), datées.
export default function LighthouseProof() {
  return (
    <div className={styles.proof}>
      <ul className={styles.gauges}>
        {lighthouse.scores.map((score) => (
          <li key={score.label}>
            <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false">
              <circle className={styles.track} cx="40" cy="40" r={RADIUS} />
              <circle
                className={styles.ring}
                cx="40"
                cy="40"
                r={RADIUS}
                strokeDasharray={CIRCUMFERENCE}
                style={{ "--offset": CIRCUMFERENCE * (1 - score.value / 100) } as CSSProperties}
              />
            </svg>
            <b className="num">{score.value}</b>
            <span>{score.label}</span>
          </li>
        ))}
      </ul>
      <p className={styles.meta}>
        {lighthouse.tool}, {lighthouse.page}, {lighthouse.profile}, mesuré le {lighthouse.measuredOn}. Affichage principal en {lighthouse.lcp}. Les résultats varient légèrement d’une mesure à l’autre&nbsp;: vérifiez vous-même sur{" "}
        <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fpierre-laurent.fr%2F" target="_blank" rel="noopener noreferrer">PageSpeed Insights<span className="sr-only"> (nouvel onglet)</span></a>.
      </p>
    </div>
  );
}
