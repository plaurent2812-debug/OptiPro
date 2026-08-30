import Link from "next/link";
import { capabilities, careerHighlights, professionalProfile } from "@/data/profile";
import styles from "./profile.module.css";

export default function ProfessionalOverview() {
  return (
    <section id="parcours" className={styles.overview} aria-labelledby="professional-title">
      <div className="shell">
        <div className={styles.sectionHeading}>
          <div>
            <p className="eyebrow">01 / Parcours professionnel</p>
            <h2 id="professional-title" className="section-title">Le terrain comme point de départ.<br />Les outils comme accélérateurs.</h2>
          </div>
          <p className="section-copy">{professionalProfile.summary}</p>
        </div>

        <dl className={styles.highlights}>
          {careerHighlights.map((highlight) => (
            <div key={highlight.value}>
              <dt>{highlight.label}</dt>
              <dd>{highlight.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.currentRole}>
          <div>
            <span className={styles.roleMarker}>{professionalProfile.period}</span>
            <h3>{professionalProfile.title}<span>chez {professionalProfile.company}</span></h3>
          </div>
          <div className={styles.roleScope}>
            <p>Trois dimensions, un même pilotage.</p>
            <div>{professionalProfile.scope.map((scope) => <span key={scope}>{scope}</span>)}</div>
          </div>
        </div>

        <div className={styles.capabilities}>
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span className="tech-label">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.evidence}</small>
            </article>
          ))}
        </div>
        <div className={styles.overviewActions}>
          <Link href="/a-propos" className="button-secondary">Découvrir mon parcours <span aria-hidden="true">→</span></Link>
          <Link href="/cv">Consulter mon CV <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
