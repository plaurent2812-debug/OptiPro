import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import BuildSequence from "@/components/visuals/BuildSequence";
import ScrollJourney from "@/components/visuals/ScrollJourney";
import ProfessionalOverview from "@/components/profile/ProfessionalOverview";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <ScrollJourney>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroColumn}>
            <p className={styles.intro}>Pierre Laurent / Portfolio personnel</p>
            <h1>Des idées.<br />Du code.<br /><em>Du concret.</em></h1>
            <p className={styles.heroDescription}>Je crée des applications et des outils à partir de ce qui m’intrigue ou me simplifierait la vie. Ici, je partage mes projets et ce que j’apprends en les construisant.</p>
            <div className={styles.heroActions}>
              <a href="#projets" className="button-primary">Explorer mes projets <span aria-hidden="true">↓</span></a>
              <a href="#construction" className={styles.textLink}>Dans les coulisses <span aria-hidden="true">↘</span></a>
            </div>
            <p className={styles.heroSignature}>Web · Mobile · Automatisation · IA</p>
          </div>

          <nav className={styles.projectPreview} aria-label="Aperçu des quatre projets">
            <div className={styles.previewBar}><span><i /> Dans mon atelier</span><span>01 — 04</span></div>
            <div className={styles.previewDuo}>
              {projects.slice(0, 2).map((project) => (
                <a href={`#projet-${project.slug}`} key={project.slug} className={styles.previewProject}>
                  <div className={`${styles.previewScreen} ${styles[project.statusTone] ?? ""}`}>
                    <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 720px) 35vw, 180px" loading="eager" />
                  </div>
                  <div className={styles.previewCaption}><strong>{project.name}</strong><span aria-hidden="true">↘</span><small>{project.category}</small></div>
                </a>
              ))}
            </div>
            <div className={styles.previewList}>
              {projects.slice(2).map((project) => (
                <a href={`#projet-${project.slug}`} key={project.slug}>
                  <Image src={project.icon} alt="" width={36} height={36} />
                  <div><strong>{project.name}</strong><span>{project.category}</span></div>
                  <span aria-hidden="true">↘</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className={`shell ${styles.heroFootnote}`}><span>Conçu et développé par Pierre, à Vence.</span><Link href="/a-propos">Et côté professionnel ? <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className={styles.projectsSection} id="projets" aria-labelledby="projects-title">
        <div className="shell">
          <div className={styles.sectionHeader}>
            <div><p className="eyebrow">01 / Mes projets</p><h2 id="projects-title" className="section-title">Quatre univers.<br />La même envie de construire.</h2></div>
            <p className="section-copy">De l’analyse de données à l’assistant du quotidien. Des projets qui avancent, des prototypes et des idées en pause : voilà où j’en suis.</p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article id={`projet-${project.slug}`} className={`${styles.projectCard} ${styles[project.statusTone] ?? ""}`} key={project.slug}>
                <Link href={`/projets#${project.slug}`} className={styles.deviceStage} data-project-visual aria-label={`Découvrir le projet ${project.name}`}>
                  <span className={styles.stageNumber} aria-hidden="true">0{index + 1}</span>
                  <span className={styles.stageArrow} aria-hidden="true">↗</span>
                  {project.visual === "browser" ? (
                    <div className={styles.browser}>
                      <div className={styles.browserBar} aria-hidden="true"><i /><i /><i /><span>ro-nutritionniste</span></div>
                      <div className={styles.browserViewport}>
                        <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 760px) 82vw, 460px" />
                      </div>
                    </div>
                  ) : project.visual === "identity" ? (
                    <div className={styles.identity}>
                      <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="160px" />
                      <strong>Odysio</strong><span>Le quotidien, en mode aventure.</span>
                      <small>QUÊTES · CHAPITRES · XP</small>
                    </div>
                  ) : (
                    <div className={styles.phone}>
                      <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 720px) 150px, 164px" loading={project.slug === "probalab" ? "eager" : "lazy"} />
                    </div>
                  )}
                </Link>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}><span>{project.category}</span><span className={styles.projectStatus}><i /> {project.status}</span></div>
                  <h3><Link href={`/projets#${project.slug}`}>{project.name}</Link></h3>
                  <p>{project.summary}</p>
                  <div className={styles.projectActions}>
                    <Link href={`/projets#${project.slug}`} className={styles.projectCta} aria-label={`Le projet ${project.name} en détail`}>Le projet en détail <span aria-hidden="true">→</span></Link>
                    {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.externalCta}>{project.linkLabel} <span aria-hidden="true">↗</span></a> : <span className={styles.projectNote}>{project.waitLabel}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.projectsFootnote}><p>Je les conçois, je les développe, je les fais évoluer.</p><Link href="/projets">Explorer les projets en détail <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <BuildSequence />

      <section className={styles.approachSection} aria-labelledby="approach-title">
        <div className={`shell ${styles.approachInner}`}>
          <div><p className="eyebrow">Ce qui relie ces projets</p><h2 id="approach-title">La technique m’attire.<br />L’usage me guide.</h2></div>
          <div><p>J’aime autant comprendre les données que soigner un écran. Le code, l’automatisation et l’IA me permettent d’explorer les deux. Le plus intéressant reste de voir une idée devenir un outil que l’on a envie d’utiliser.</p><div className={styles.toolkit}><span>Next.js / React</span><span>Expo / Mobile</span><span>Python / Data</span><span>IA / Automatisation</span></div></div>
        </div>
      </section>

      <ProfessionalOverview />

      <section className={styles.finalSection}>
        <div className={`shell ${styles.finalPanel}`}>
          <div><p className="eyebrow">On en parle ?</p><h2>Une idée, un retour,<br />une conversation.</h2></div>
          <div><p>Un projet vous intrigue ? Vous avez un retour à partager, une idée à explorer ou envie de mieux me connaître ? Je serai ravi d’en discuter.</p><Link href="/contact" className="button-primary">Échanger avec moi <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </ScrollJourney>
  );
}
