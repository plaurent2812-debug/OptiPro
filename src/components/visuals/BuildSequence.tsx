import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "./ScrollJourney.module.css";

const steps = [
  { id: "idee", label: "L’idée", title: "Tout commence par une question.", copy: "Un besoin du quotidien. Une friction. Ou simplement l’envie de voir si une idée peut prendre forme. Je commence par ce qui mérite d’être plus simple." },
  { id: "structure", label: "Les briques", title: "Puis, les pièces se relient.", copy: "Une interface, des données, un peu de logique. Je cherche les bonnes briques, je les assemble et je teste ce qui fonctionne vraiment." },
  { id: "outil", label: "L’outil", title: "L’idée devient quelque chose à utiliser.", copy: "Une application, un site, un outil personnel. Je le mets à l’épreuve, j’apprends et je le fais évoluer. Parfois, je le mets aussi en pause." },
];

export default function BuildSequence() {
  return (
    <section id="construction" className={styles.sequence} data-build-sequence aria-labelledby="construction-title">
      <div className="shell">
        <div className={styles.sequenceHeading}>
          <div><p className="eyebrow">02 / Dans les coulisses</p><h2 id="construction-title" className="section-title">Comment une idée<br />prend forme.</h2></div>
          <p className={styles.scrollHint}>Un peu de curiosité. Beaucoup d’itérations.<span aria-hidden="true">↓</span></p>
        </div>
        <nav className={styles.stepNav} aria-label="Les étapes de création">
          {steps.map((step, index) => <a key={step.id} href={`#${step.id}`} data-step-link><span>0{index + 1}</span>{step.label}<i aria-hidden="true" /></a>)}
        </nav>
        <div className={styles.sequenceGrid}>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.id} id={step.id} tabIndex={-1} data-build-step className={styles.step}>
                <span className={styles.stepNumber}>0{index + 1} / 03</span>
                <h3>{step.title}</h3><p>{step.copy}</p>
                {index === 2 && <a className={styles.projectJump} href="#parcours">Ce qui nourrit cette approche <span aria-hidden="true">↓</span></a>}
              </div>
            ))}
          </div>
          <div className={styles.scene} data-build-scene aria-hidden="true">
            <div className={styles.sceneCanvas}>
              <div className={styles.sceneGrid} />
              <div className={styles.sceneCaption}><span>atelier / construction</span><span>01 → 03</span></div>
              <svg className={styles.connections} viewBox="0 0 600 560" fill="none">
                <path className={styles.connectionTrack} d="M300 115V180M180 310H85V475H160M420 310H515V475H440" />
                <path className={styles.connectionLine} pathLength="1" d="M300 115V180M180 310H85V475H160M420 310H515V475H440" />
                <circle cx="300" cy="150" r="3" /><circle cx="85" cy="310" r="3" /><circle cx="515" cy="310" r="3" />
              </svg>
              <div className={styles.ideaNode}><span>01 · une intuition</span><strong>Et si je créais…</strong><i /></div>
              <div className={styles.blueprint}><span>interface</span><div /><div /><div /></div>
              <div className={styles.appWindow}>
                <div className={styles.appBar}><div><i /><i /><i /></div><span>mes-projets.app</span><b>↗</b></div>
                <div className={styles.appScaffold}><i /><i /><div><i /><i /><i /><i /></div></div>
                <div className={styles.appContent}>
                  <span className={styles.appEyebrow}>PIERRE LAURENT / EXPLORATIONS</span>
                  <strong>Des idées.<br />Des outils réels.</strong>
                  <div className={styles.miniProjects}>{projects.map((project) => <div key={project.slug}><Image src={project.icon} alt="" width={30} height={30} /><span>{project.name}</span><i>↗</i></div>)}</div>
                </div>
              </div>
              <div className={`${styles.buildModule} ${styles.logicModule}`}><span>02 · logique</span><code><b>const</b> idea = &#123;<br />&nbsp; useful: <em>true</em><br />&#125;;</code></div>
              <div className={`${styles.buildModule} ${styles.dataModule}`}><span>02 · données</span><div className={styles.dataRows}><i /><i /><i /></div><small>Relier. Organiser.</small></div>
              <div className={styles.readyNode}><i /><span>03 · l’idée prend vie</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
