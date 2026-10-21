import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectVisual from "@/components/projects/ProjectVisual";
import PageHero from "@/components/ui/PageHero";
import { StatusPill } from "@/components/ui/Frames";
import { contact, optipro } from "@/data/offer";
import { projects } from "@/data/projects";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Sites et applications conçus et réalisés par Pierre Laurent, créateur des sites internet OptiPro dans les Alpes-Maritimes.",
  alternates: { canonical: "/projets" },
};

export default function ProjectsPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <PageHero
        titleId="projects-title"
        kicker="Réalisations, conception et développement"
        tone="green"
        title={<>Ce que je construis. <span>Et pourquoi.</span></>}
        after={
          <nav className={styles.projectIndex} aria-label="Choisir un projet">
            {projects.map((project) => (
              <a href={`#${project.slug}`} key={project.slug}>
                <Image src={project.icon} alt="" width={28} height={28} />
                <span>{project.name}</span>
              </a>
            ))}
          </nav>
        }
      >
        <p>Chaque projet a son point de départ, ses choix et ses défis. Voici les idées derrière les interfaces, ce que j’y développe et ce qui reste à explorer.</p>
      </PageHero>

      <section className={styles.projects} aria-label="Les projets en détail">
        <div className="shell">
          {projects.map((project, index) => (
            <article id={project.slug} className={styles.project} key={project.slug} aria-labelledby={`${project.slug}-title`}>
              <div className={styles.projectVisual}><ProjectVisual project={project} eager={index === 0} /></div>
              <div className={styles.projectCopy}>
                <p className={styles.projectCode}>{project.code}</p>
                <div className={styles.projectHeader}>
                  <Image src={project.icon} alt="" width={64} height={64} />
                  <h2 id={`${project.slug}-title`}>{project.name}</h2>
                  <StatusPill tone={project.badgeTone}>{project.status}</StatusPill>
                </div>
                <p className={styles.statement}>{project.statement}</p>
                <p className={styles.description}>{project.description}</p>
                <dl className={styles.matrix}>
                  <div><dt>Plateformes et stade</dt><dd>{project.platforms.join(", ")}</dd></div>
                  <div><dt>Ce que j’y explore</dt><dd>{project.capabilities.slice(0, 3).join(", ")}</dd></div>
                </dl>
                <div className={styles.evidence}>
                  <p>Ce que j’y construis</p>
                  <h3>{project.role}</h3>
                  <p>{project.demonstrates}</p>
                </div>
                <ul className={styles.tags} aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                {project.href
                  ? <a href={project.href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">{project.linkLabel}<span className="sr-only"> (nouvel onglet)</span></a>
                  : <span className={styles.projectWait}>{project.waitLabel}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.further} aria-label="Pour aller plus loin">
        <div className={`shell ${styles.furtherGrid}`}>
          <div>
            <h2>Un site pour votre entreprise&nbsp;?</h2>
            <p>La même exigence, au service des {optipro.audience} des {contact.area}&nbsp;: {optipro.setupPrice} de mise en ligne, puis {optipro.monthlyPrice} par mois.</p>
            <Link href="/optipro" className="btn btn-primary">Voir l’offre {optipro.brand}</Link>
          </div>
          <div>
            <h2>Continuer à explorer.</h2>
            <p>Mon profil GitHub rassemble la partie publique de mes explorations et de mon travail de développement.</p>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Retrouver mon GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}
