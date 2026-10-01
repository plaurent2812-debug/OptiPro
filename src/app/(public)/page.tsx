import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProductProject } from "@/data/projects";
import BuildSequence from "@/components/visuals/BuildSequence";
import ProjectVisual from "@/components/projects/ProjectVisual";
import ProfessionalOverview from "@/components/profile/ProfessionalOverview";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const featuredSlugs = new Set<ProductProject["slug"]>(["le-fond-du-sujet", "ideoscope-2027", "probalab"]);
const featuredProjects = projects.filter((project) => featuredSlugs.has(project.slug));
const otherProjects = projects.filter((project) => !featuredSlugs.has(project.slug));

export default function HomePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroColumn}>
            <p className="eyebrow">Pierre Laurent / Site personnel</p>
            <h1 id="hero-title">Relier les idées.<br />Construire<br /><em>le concret.</em></h1>
            <p className={styles.heroDescription}>Responsable des Opérations, curieux de code.<br />Je crée des applications, des expériences web et des outils pour rendre les choses plus claires.</p>
            <div className={styles.heroActions}>
              <a href="#projets" className="button-primary">Explorer mes projets <span aria-hidden="true">↓</span></a>
              <Link href="/a-propos" className={styles.textLink}>Mon parcours <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className={styles.workbench}>
            <div className={styles.workbenchLabel}><span>Du terrain à l’interface</span><span aria-hidden="true">↙</span></div>
            <Link href="/projets#le-fond-du-sujet" className={styles.heroSite} aria-label="Découvrir Le Fond du sujet">
              <Image src="/projects/le-fond-du-sujet.webp" alt="Le Fond du sujet : une interface de décryptage de l’actualité" width={1280} height={720} sizes="(max-width: 720px) 80vw, (max-width: 1024px) 46vw, 550px" loading="eager" />
              <span>Le Fond du sujet <i aria-hidden="true">↗</i></span>
            </Link>
            <Link href="/projets#ferdinand" className={styles.heroPhone} aria-label="Découvrir l’application Ferdinand">
              <Image src="/projects/ferdinand-app.jpg" alt="Tableau de bord de Ferdinand, mon assistant du quotidien" width={1320} height={2868} sizes="(max-width: 720px) 95px, 145px" loading="eager" />
              <span>Ferdinand</span>
            </Link>
            <p className={styles.workbenchNote}>Une question.<br />Une idée.<br /><span>Un outil qui prend forme.</span></p>
          </div>
        </div>
        <div className={`shell ${styles.heroFoot}`}><p>Opérations · Code · Curiosité</p><a href="#projets">Quelques idées devenues projets <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="projets" className={styles.projectsSection} aria-labelledby="projects-title">
        <div className="shell">
          <div className={styles.sectionHeader}>
            <div><p className="eyebrow">01 / Une sélection</p><h2 id="projects-title" className="section-title">Des questions.<br /><span>Des outils pour y voir clair.</span></h2></div>
            <p className="section-copy">Décrypter l’actualité, situer ses convictions, lire des données : trois façons de transformer la curiosité en interface.</p>
          </div>
          <div className={styles.projectList}>
            {featuredProjects.map((project, index) => (
              <article id={`projet-${project.slug}`} key={project.slug} className={styles.project} data-tone={project.statusTone} tabIndex={-1}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectNumber}>{project.category}</span>
                  <h3><Link href={`/projets#${project.slug}`}>{project.name}</Link></h3>
                  <span className={styles.projectStatus}><i />{project.status}</span>
                </div>
                <Link href={`/projets#${project.slug}`} className={styles.visualLink} aria-label={`Voir ${project.name} en détail`}><ProjectVisual project={project} index={projects.indexOf(project)} eager={index === 0} /></Link>
                <div className={styles.projectCopy}>
                  <p>{project.summary}</p>
                  <div className={styles.projectTags}>{project.capabilities.slice(0, 2).map((capability) => <span key={capability}>{capability}</span>)}</div>
                  <div className={styles.projectActions}>
                    <Link href={`/projets#${project.slug}`} className={styles.projectCta} aria-label={`Découvrir le projet ${project.name}`}>L’idée & les coulisses <span aria-hidden="true">→</span></Link>
                    {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>{project.linkLabel} <span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.moreHeading}><div><p className="eyebrow">D’autres terrains de jeu</p><h3>La curiosité prend plusieurs formes.</h3></div><Link href="/projets" className={styles.textLink}>Les sept projets <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.projectGrid}>
            {otherProjects.map((project) => (
              <article id={`projet-${project.slug}`} key={project.slug} className={styles.compactProject} data-tone={project.statusTone} tabIndex={-1}>
                <Link href={`/projets#${project.slug}`} className={styles.compactVisual} aria-label={`Voir ${project.name} en détail`}><ProjectVisual project={project} index={projects.indexOf(project)} compact /></Link>
                <div className={styles.compactCopy}>
                  <span className={styles.projectNumber}>{project.category}</span>
                  <h4><Link href={`/projets#${project.slug}`}>{project.name}<span aria-hidden="true">↗</span></Link></h4>
                  <span className={styles.projectStatus}><i />{project.status}</span>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.projectsFootnote}>Concevoir. Développer. Apprendre. Recommencer.</p>
        </div>
      </section>

      <BuildSequence />
      <ProfessionalOverview />
      <section className={styles.finalSection} aria-labelledby="exploration-title">
        <div className={`shell ${styles.finalInner}`}>
          <div><p className="eyebrow">La suite reste ouverte</p><h2 id="exploration-title">Toujours une idée<br /><em>à creuser.</em></h2></div>
          <div><p>Une question sur un projet, une piste à partager ? J’aime aussi les conversations qui font avancer les idées.</p><Link href="/contact" className={styles.explorationLink}>Échanger avec moi <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
