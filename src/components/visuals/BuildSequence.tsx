import styles from "./BuildSequence.module.css";

const steps = [
  { id: "idee", label: "Observer", title: "Partir du réel.", copy: "Une échéance oubliée. Des données difficiles à lire. Une tâche qui se répète. Je commence par comprendre le besoin.", detail: "Le terrain donne la direction." },
  { id: "structure", label: "Assembler", title: "Trouver la logique.", copy: "Interface, données, automatisation, IA : je relie les bonnes pièces pour faire fonctionner l’ensemble.", detail: "La technique sert l’usage." },
  { id: "outil", label: "Éprouver", title: "Faire, puis affiner.", copy: "Je confronte l’outil à son usage, je corrige et je le fais évoluer. Parfois, la bonne décision est aussi de le mettre en pause.", detail: "Un projet reste un apprentissage." },
];

export default function BuildSequence() {
  return (
    <section id="construction" className={styles.sequence} aria-labelledby="construction-title">
      <div className="shell">
        <div className={styles.heading}><p className="eyebrow">01 / La façon de construire</p><h2 id="construction-title">La technique m’attire.<br /><span>L’usage me guide.</span></h2></div>
        <div className={styles.steps}>
          {steps.map((step, index) => <article className={styles.step} key={step.id} id={step.id} tabIndex={-1}><div className={styles.stepLabel}><span>0{index + 1} / {step.label}</span><span aria-hidden="true">{index === 2 ? "↗" : "→"}</span></div><h3>{step.title}</h3><p>{step.copy}</p><span className={styles.detail}>{step.detail}</span></article>)}
        </div>
      </div>
    </section>
  );
}
