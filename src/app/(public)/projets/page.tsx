import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Projets",
  description: "ProbaLab, Ferdinand et les produits numériques conçus par Pierre Laurent.",
  alternates: { canonical: "/projets" },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Product systems</p>
          <h1>Des produits que je veux <em>voir exister.</em></h1>
          <p>Je prends la responsabilité de toute la chaîne : vision produit, architecture, données, expérience web et mobile, distribution et preuve de fonctionnement.</p>
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
                <div><span>PLATEFORMES</span><strong>{project.platforms.join(" · ")}</strong></div>
                <div><span>SYSTÈMES</span><strong>{project.capabilities.slice(0, 3).join(" · ")}</strong></div>
              </div>
              <div className={styles.tags}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              {project.href ? <a href={project.href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">VISITER {project.name.toUpperCase()} ↗</a> : <span className={styles.projectWait}>ACCÈS PUBLIC / À VENIR</span>}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
