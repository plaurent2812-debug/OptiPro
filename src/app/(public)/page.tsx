import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const tools = [
  "Next.js", "React", "React Native", "Expo", "TypeScript", "Python",
  "PostgreSQL", "Supabase", "Vercel", "CI/CD", "App Store", "Data pipelines",
];

const interests = [
  {
    index: "01",
    title: "Les interfaces qui donnent envie d’explorer",
    copy: "J’aime les univers visuels précis, les détails presque invisibles et les interfaces qui donnent l’impression que tout a été pensé.",
  },
  {
    index: "02",
    title: "L’IA et l’automatisation utile",
    copy: "Pas pour remplacer le jugement, mais pour enlever du bruit, relier les informations et rendre les outils plus attentifs au contexte.",
  },
  {
    index: "03",
    title: "Comprendre comment tout s’assemble",
    copy: "Du modèle de données au dernier pixel, j’aime suivre le chemin complet d’une idée et apprendre ce qui la fait vraiment fonctionner.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <div className={styles.signalGrid} />
          <div className={styles.aiCore}>
            <span /><span /><span /><i />
          </div>
          <div className={styles.dataStream}>
            <span>CONTEXT / ACTIVE</span>
            <span>NEURAL LAYER / READY</span>
            <span>AUTOMATION / LISTENING</span>
          </div>
          <div className={styles.coreLabel}>AI CORE / PERSONAL INTERFACE</div>
          <div className={styles.heroShade} />
        </div>

        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <div className={styles.online}><span /> SITE PERSONNEL / PIERRE LAURENT</div>
            <h1>
              J’imagine, je code, <em>j’expérimente.</em>
            </h1>
            <p>
              Moi, c’est Pierre. Je crée des apps, des outils et des expériences où l’IA, la data et l’automatisation deviennent vraiment utiles. Ce site rassemble mes projets, mon parcours et les idées que j’explore en chemin.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projets" className="button-primary">Voir ce que je crée <span aria-hidden="true">→</span></Link>
              <Link href="/a-propos" className="button-secondary">Mon parcours</Link>
            </div>
          </div>

          <aside className={styles.identityPanel} aria-label="Profil système">
            <div><span>EN CE MOMENT</span><strong>PROBALAB + FERDINAND</strong></div>
            <div><span>J’AIME</span><strong>APPS / IA / AUTOMATISATION</strong></div>
            <div><span>TERRAIN DE JEU</span><strong>WEB / MOBILE / DATA</strong></div>
            <div><span>BASE</span><strong>VENCE · FRANCE</strong></div>
          </aside>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">SCROLL TO DISCOVER <span /></div>
      </section>

      <section className={styles.statusRail} aria-label="En quelques mots">
        <div className="shell">
          <div><span className={styles.pulse} /> CARNET DE BORD PERSONNEL</div>
          <div>PROJETS EN COURS <strong>02</strong></div>
          <div>PROCHAINE IDÉE <strong>INCONNUE</strong></div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="shell">
          <p className="eyebrow">En ce moment</p>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Deux projets qui occupent une bonne partie de mes idées.</h2>
            <p className="section-copy">
              Ils sont nés de problèmes que j’avais envie de résoudre pour moi-même. Je les construis, je les utilise et je les fais évoluer au fil de ce que j’apprends.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article className={`${styles.projectCard} ${project.statusTone === "amber" ? styles.amber : ""}`} key={project.slug}>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span>{project.code}</span>
                    <span className={styles.projectStatus}><i /> {project.status}</span>
                  </div>
                  <div className={styles.projectTitleRow}>
                    <Image src={project.icon} alt="" width={58} height={58} className={styles.projectIcon} />
                    <div><span className="tech-label">PROJET 0{index + 1}</span><h3>{project.name}</h3></div>
                  </div>
                  <blockquote>{project.statement}</blockquote>
                  <p>{project.description}</p>
                  <div className={styles.tagList}>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectCta}>
                      Découvrir {project.name} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className={styles.projectCtaMuted}>Projet encore discret pour le moment</span>
                  )}
                </div>
                <div className={styles.deviceStage}>
                  <div className={styles.deviceHalo} />
                  <div className={styles.phone}>
                    <div className={styles.phoneBar} />
                    <Image src={project.image} alt={project.imageAlt} width={1320} height={2868} sizes="(max-width: 760px) 68vw, 330px" />
                  </div>
                  <span className={styles.telemetry}>UI / NATIVE<br />SYNC / SECURE<br />STATE / VERIFIED</span>
                </div>
              </article>
            ))}
          </div>

          <Link href="/projets" className={styles.allProjects}>Voir tous mes projets <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className="shell">
          <p className="eyebrow">Ce qui m’intéresse</p>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">La tech, mais surtout ce qu’elle permet de faire.</h2>
            <p className="section-copy">J’adore les univers futuristes et les systèmes intelligents. Ce qui m’intéresse vraiment, c’est le moment où une technologie complexe devient naturelle à utiliser.</p>
          </div>
          <div className={styles.principlesGrid}>
            {interests.map((interest) => (
              <article className="panel" key={interest.index}>
                <span>{interest.index}</span>
                <h3>{interest.title}</h3>
                <p>{interest.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stackSection}>
        <div className={`shell ${styles.stackInner}`}>
          <div>
            <p className="eyebrow">Mon terrain de jeu</p>
            <h2 className="section-title">Les outils avec lesquels j’aime construire.</h2>
          </div>
          <div className={styles.stackGrid}>
            {tools.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={`shell panel ${styles.finalPanel}`}>
          <div className={styles.core} aria-hidden="true"><span /><span /><span /></div>
          <div>
            <p className="eyebrow">Pourquoi ce site</p>
            <h2>Garder une trace de ce que je fais.</h2>
            <p>Ce site n’a pas vocation à vendre quoi que ce soit. Il me sert à rassembler mes projets, raconter leur évolution et montrer un peu qui je suis derrière le code.</p>
            <Link href="/a-propos" className="button-secondary">Découvrir mon parcours <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
