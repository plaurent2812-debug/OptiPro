import styles from "./BuildSequence.module.css";
import SystemCore from "./SystemCore";

const steps = [
  { id: "idee", label: "Observer", title: "Partir du réel.", copy: "Une échéance oubliée. Des données difficiles à lire. Une tâche qui se répète. Je commence par comprendre le besoin." },
  { id: "structure", label: "Assembler", title: "Trouver la logique.", copy: "Interface, données, automatisation, IA : je relie les bonnes pièces pour faire fonctionner l’ensemble." },
  { id: "outil", label: "Éprouver", title: "Faire, puis affiner.", copy: "Je confronte l’outil à son usage, je corrige et je le fais évoluer. Parfois, la bonne décision est aussi de le mettre en pause." },
];

export default function BuildSequence() {
  return (
    <section id="construction" className={styles.sequence} aria-labelledby="construction-title">
      <div className={`shell ${styles.sequenceGrid}`}>
        <div>
          <div className={styles.heading}><p className="eyebrow">02 / Ma façon de construire</p><h2 id="construction-title">La technique m’attire.<br /><em>L’usage me guide.</em></h2></div>
          <div className={styles.steps}>
            {steps.map((step, index) => <article className={styles.step} key={step.id} id={step.id} tabIndex={-1}><span className={styles.stepLabel}>0{index + 1}</span><div><h3>{step.label}<span>{step.title}</span></h3><p>{step.copy}</p></div></article>)}
          </div>
        </div>
        <SystemCore />
      </div>
    </section>
  );
}
