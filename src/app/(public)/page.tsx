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
    title: "L’automatisation utile",
    copy: "Utiliser le code et parfois l’IA pour enlever du bruit, relier les informations et rendre les outils plus attentifs au contexte.",
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
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.codeWindow}>
              <div className={styles.windowBar}>
                <div><i /><i /><i /></div>
                <span>workspace.ts</span>
                <em>main</em>
              </div>
              <div className={styles.codeBody}>
                <p><i>01</i><span className={styles.codeMuted}>{"// projets personnels"}</span></p>
                <p><i>02</i><span><b>const</b> projects = [</span></p>
                <p><i>03</i><span>&nbsp;&nbsp;<strong>&quot;ProbaLab&quot;</strong>,</span></p>
                <p><i>04</i><span>&nbsp;&nbsp;<strong>&quot;Ferdinand&quot;</strong>,</span></p>
                <p><i>05</i><span>&nbsp;&nbsp;<strong>&quot;Ro Nutritionniste&quot;</strong>,</span></p>
                <p><i>06</i><span>&nbsp;&nbsp;<strong>&quot;Odysio&quot;</strong>,</span></p>
                <p><i>07</i><span>];</span></p>
                <p><i>08</i><span><b>const</b> focus = [<strong>&quot;web&quot;</strong>, <strong>&quot;mobile&quot;</strong>, <strong>&quot;data&quot;</strong>];</span></p>
                <p><i>09</i><span>build&#40;&#123; curious: <b>true</b>, useful: <b>true</b> &#125;&#41;;</span></p>
              </div>
              <div className={styles.windowFooter}>
                <span><i /> ready</span>
                <span>4 projects</span>
                <span>UTF-8</span>
              </div>
            </div>
            <div className={styles.techCard}>
              <span>Current focus</span>
              <strong>BUILDING USEFUL THINGS</strong>
              <small>WEB · MOBILE · DATA</small>
            </div>
          </div>
          <div className={styles.heroColumn}>
            <p className={styles.intro}>Pierre Laurent · Site personnel</p>
            <div className={styles.heroCopy}>
              <span className={styles.status}><i /> Projets en évolution</span>
              <h1>
                Je transforme des idées en <em>outils.</em>
              </h1>
              <p>
                Je crée des applications web et mobiles, des outils de données et des automatisations. Ici, je partage mes projets, ce que j’apprends et les sujets que j’explore.
              </p>
              <div className={styles.heroActions}>
                <Link href="/projets" className="button-primary">Voir mes projets <span aria-hidden="true">→</span></Link>
                <Link href="/a-propos" className={styles.textLink}>À propos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="shell">
          <p className="eyebrow">En ce moment</p>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Quatre projets, quatre façons différentes de construire.</h2>
            <p className="section-copy">
              Ils partent de problèmes concrets et d’univers très différents. Je les construis et je les fais évoluer au fil de ce que j’apprends.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article className={`${styles.projectCard} ${styles[project.statusTone] ?? ""}`} key={project.slug}>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span>{project.code}</span>
                    <span className={styles.projectStatus}><i /> {project.status}</span>
                  </div>
                  <div className={styles.projectTitleRow}>
                    <Image src={project.icon} alt="" width={58} height={58} className={styles.projectIcon} />
                    <div><span className="tech-label">Projet 0{index + 1}</span><h3>{project.name}</h3></div>
                  </div>
                  <blockquote>{project.statement}</blockquote>
                  <p>{project.description}</p>
                  <div className={styles.tagList}>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectCta}>
                      Découvrir {project.name} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className={styles.projectCtaMuted}>{project.waitLabel ?? "Projet encore discret pour le moment"}</span>
                  )}
                </div>
                <div className={styles.deviceStage}>
                  {project.visual === "browser" ? (
                    <div className={styles.browser}>
                      <div className={styles.browserBar} aria-hidden="true"><i /><i /><i /><span>ro-nutritionniste</span></div>
                      <div className={styles.browserViewport}>
                        <Image src={project.image} alt={project.imageAlt} width={1536} height={1024} sizes="(max-width: 760px) 82vw, 520px" />
                      </div>
                    </div>
                  ) : project.visual === "identity" ? (
                    <div className={`${styles.phone} ${styles.identityPhone}`}>
                      <div className={styles.identityScreen}>
                        <span className={styles.identitySignal}>04 · MOBILE</span>
                        <Image src={project.image} alt={project.imageAlt} width={1024} height={1024} sizes="(max-width: 760px) 34vw, 170px" />
                        <strong>Odysio</strong>
                        <span>Carnet d’explorateur</span>
                        <small>QUÊTES · CHAPITRES · XP</small>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.phone}>
                      <Image src={project.image} alt={project.imageAlt} width={1320} height={2868} sizes="(max-width: 760px) 68vw, 330px" />
                    </div>
                  )}
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
              <article key={interest.index}>
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
        <div className={`shell ${styles.finalPanel}`}>
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
