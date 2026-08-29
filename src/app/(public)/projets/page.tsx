import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Projets",
  description: "Les applications, outils et projets personnels créés par Pierre Laurent.",
  alternates: { canonical: "/projets" },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Apps, outils & expérimentations</p>
          <h1>Ce que j’ai créé — et ce qui est encore <em>en train de le devenir.</em></h1>
          <p>Certains projets sont déjà utilisés, d’autres continuent de changer chaque semaine. Je les rassemble ici avec leur histoire, leur état actuel et les idées que j’y explore.</p>
        </div>
      </section>

      <section className={`shell ${styles.projects}`}>
        {projects.map((project) => (
          <article className={styles.project} key={project.slug}>
            <div className={`panel ${styles.visual} ${project.statusTone === "amber" ? styles.visualAmber : ""}`}>
              <div className={styles.phone}>
                <Image src={project.image} alt={project.imageAlt} width={1320} height={2868} sizes="(max-width: 620px) 72vw, 310px" />
              </div>
            </div>
            <div className={styles.projectCopy}>
              <span className={styles.projectNumber}>{project.code}</span>
              <div className={styles.projectHeader}>
                <Image src={project.icon} alt="" width={64} height={64} />
                <h2>{project.name}</h2>
              </div>
              <span className={`${styles.status} ${project.statusTone === "amber" ? styles.statusAmber : ""}`}><i /> {project.status}</span>
              <p className={styles.statement}>{project.statement}</p>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.matrix}>
                <div><span>DISPONIBLE SUR</span><strong>{project.platforms.join(" · ")}</strong></div>
                <div><span>CE QUE J’Y EXPLORE</span><strong>{project.capabilities.slice(0, 3).join(" · ")}</strong></div>
              </div>
              <div className={styles.tags}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              {project.href ? <a href={project.href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">DÉCOUVRIR {project.name.toUpperCase()} ↗</a> : <span className={styles.projectWait}>ENCORE UN PEU DE PATIENCE</span>}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
