import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Projets",
  description: "Les applications, outils et projets personnels créés par Pierre Laurent.",
  alternates: { canonical: "/projets" },
};

const visualTone = {
  cyan: "",
  amber: styles.visualAmber,
  sage: styles.visualSage,
};

const statusTone = {
  cyan: "",
  amber: styles.statusAmber,
  sage: styles.statusSage,
};

export default function ProjectsPage() {
  return (
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Mon terrain de jeu personnel</p>
          <h1>Ce que j’ai créé — et ce qui est encore <em>en train de le devenir.</em></h1>
          <p>Ces projets sont développés à titre personnel, en parallèle de mon parcours professionnel. Ils montrent ma façon de passer d’un besoin à un outil : concevoir, relier les données, développer, tester et améliorer.</p>
        </div>
      </section>

      <section className={`shell ${styles.projects}`}>
        {projects.map((project) => (
          <article id={project.slug} className={styles.project} key={project.slug}>
            <div className={`${styles.visual} ${visualTone[project.statusTone]}`}>
              {project.visual === "browser" ? (
                <div className={styles.browser}>
                  <div className={styles.browserBar} aria-hidden="true"><i /><i /><i /><span>ro-nutritionniste</span></div>
                  <div className={styles.browserViewport}>
                    <Image src={project.image} alt={project.imageAlt} width={1536} height={1024} sizes="(max-width: 620px) 82vw, 520px" />
                  </div>
                </div>
              ) : project.visual === "identity" ? (
                <div className={`${styles.phone} ${styles.identityPhone}`}>
                  <div className={styles.identityScreen}>
                    <span className={styles.identitySignal}>04 · MOBILE</span>
                    <Image src={project.image} alt={project.imageAlt} width={1024} height={1024} sizes="(max-width: 620px) 38vw, 170px" />
                    <strong>Odysio</strong>
                    <span>Carnet d’explorateur</span>
                    <small>QUÊTES · CHAPITRES · XP</small>
                  </div>
                </div>
              ) : (
                <div className={styles.phone}>
                  <Image src={project.image} alt={project.imageAlt} width={1320} height={2868} sizes="(max-width: 620px) 72vw, 310px" />
                </div>
              )}
            </div>
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
              <div className={styles.projectEvidence}><span>MON IMPLICATION</span><h3>{project.role}</h3><p>{project.demonstrates}</p></div>
              <div className={styles.tags}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              {project.href ? <a href={project.href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">DÉCOUVRIR {project.name.toUpperCase()} ↗</a> : <span className={styles.projectWait}>{(project.waitLabel ?? "Encore un peu de patience").toUpperCase()}</span>}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
