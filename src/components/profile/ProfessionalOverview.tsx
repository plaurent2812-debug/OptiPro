import Link from "next/link";
import { professionalProfile } from "@/data/profile";
import styles from "./profile.module.css";

export default function ProfessionalOverview() {
  return (
    <section id="parcours" className={styles.overview} aria-labelledby="professional-title">
      <div className={`shell ${styles.overviewGrid}`}>
        <div>
          <p className="eyebrow">03 / Côté professionnel</p>
          <h2 id="professional-title" className="section-title">Derrière les projets,<br />une expérience du terrain.</h2>
          <p className={styles.overviewCopy}>Mon métier, ce sont les opérations. Organiser les flux, coordonner les équipes, structurer les données : cette expérience du terrain nourrit les outils que je crée.</p>
          <div className={styles.overviewActions}>
            <Link href="/a-propos" className="button-secondary">Mon parcours professionnel <span aria-hidden="true">→</span></Link>
            <Link href="/cv">Consulter mon CV <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className={styles.roleCard}>
          <span className={styles.roleMarker}>{professionalProfile.period}</span>
          <h3>{professionalProfile.title}</h3>
          <p className={styles.roleCompany}>{professionalProfile.company}</p>
          <div className={styles.roleScope}><div>{professionalProfile.scope.map((scope) => <span key={scope}>{scope}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}
