import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { projects } from "@/data/projects";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Projets",
  description: "Les applications, outils et projets personnels créés par Pierre Laurent.",
  alternates: { canonical: "/projets" },
};

const statusTone = {
  cyan: "",
  amber: styles.statusAmber,
  sage: styles.statusSage,
};

export default function ProjectsPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Projets / Conception & développement</p>
          <h1>Ce que je construis.<br /><em>Et pourquoi.</em></h1>
          <p>Chaque projet a son point de départ, ses choix et ses défis. Voici les idées derrière les interfaces, ce que j’y développe et ce qui reste à explorer.</p>
          <nav className={styles.projectIndex} aria-label="Choisir un projet">{projects.map((project, index) => <a href={`#${project.slug}`} key={project.slug}><span>0{index + 1}</span>{project.name}<i aria-hidden="true">↓</i></a>)}</nav>
        </div>
      </section>

      <section className={`shell ${styles.projects}`}>
        {projects.map((project, index) => (
          <article id={project.slug} className={styles.project} key={project.slug}>
            <ProjectVisual project={project} index={index} />
            <div className={styles.projectCopy}>
              <span className={styles.projectNumber}>{project.code}</span>
              <div className={styles.projectHeader}>
                <Image src={project.icon} alt="" width={64} height={64} />
                <h2>{project.name}</h2>
              </div>
              <span className={`${styles.status} ${statusTone[project.statusTone]}`}><i /> {project.status}</span>
              <p className={styles.statement}>{project.statement}</p>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.matrix}>
                <div><span>PLATEFORMES / STADE</span><strong>{project.platforms.join(" · ")}</strong></div>
                <div><span>CE QUE J’Y EXPLORE</span><strong>{project.capabilities.slice(0, 3).join(" · ")}</strong></div>
              </div>
              <div className={styles.projectEvidence}><span>CE QUE J’Y CONSTRUIS</span><h3>{project.role}</h3><p>{project.demonstrates}</p></div>
              <div className={styles.tags}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              {project.href ? <a href={project.href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a> : <span className={styles.projectWait}>{project.waitLabel}</span>}
            </div>
          </article>
        ))}
      </section>
      <section className={`shell ${styles.furtherReading}`}>
        <div><p className="eyebrow">Au fil des projets</p><h2>Continuer à explorer.</h2><p>Mon profil GitHub rassemble la partie publique de mes explorations et de mon travail de développement.</p><a href="https://github.com/plaurent2812-debug" target="_blank" rel="noopener noreferrer" className="button-primary">Retrouver mon GitHub ↗</a></div>
        <div><h3>Et mon parcours professionnel ?</h3><p>Les opérations, la logistique et la data sont l’autre fil de mon parcours.</p><Link href="/a-propos" className={styles.projectLink}>Découvrir mon parcours →</Link></div>
      </section>
    </main>
  );
}
