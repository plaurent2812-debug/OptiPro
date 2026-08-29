import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const stack = [
  "Next.js", "React", "React Native", "Expo", "TypeScript", "Python",
  "PostgreSQL", "Supabase", "Vercel", "CI/CD", "App Store", "Data pipelines",
];

const principles = [
  {
    index: "01",
    title: "Le système avant l’écran",
    copy: "Je pars de la décision, de la donnée et du flux réel. L’interface arrive ensuite pour rendre le système évident.",
  },
  {
    index: "02",
    title: "La preuve avant la promesse",
    copy: "Un statut vert ne remplace jamais une vérification. Je conçois des produits qui montrent ce qu’ils savent — et leurs limites.",
  },
  {
    index: "03",
    title: "Une seule source de vérité",
    copy: "Web, mobile, données et automatisations partagent des contrats clairs. Moins de duplication, moins de dérive, plus de confiance.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src="/pierre-laurent-tech-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
        </div>

        <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>

        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <div className={styles.online}><span /> PERSONAL PRODUCT LAB / ONLINE</div>
            <h1>
              Je construis des systèmes qui <em>pensent avec vous.</em>
            </h1>
            <p>
              Je suis Pierre Laurent. Je transforme des problèmes concrets en produits numériques complets — données, logique, web, mobile et automatisation.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projets" className="button-primary">Explorer les projets <span aria-hidden="true">→</span></Link>
              <Link href="/a-propos" className="button-secondary">Comprendre ma méthode</Link>
            </div>
          </div>

          <aside className={styles.identityPanel} aria-label="Profil système">
            <div><span>IDENTITÉ</span><strong>PIERRE LAURENT</strong></div>
            <div><span>RÔLE</span><strong>PRODUCT BUILDER</strong></div>
            <div><span>FOCUS</span><strong>DATA / WEB / MOBILE</strong></div>
            <div><span>LOCALISATION</span><strong>VENCE · FRANCE</strong></div>
          </aside>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">SCROLL TO DISCOVER <span /></div>
      </section>

      <section className={styles.statusRail} aria-label="État du studio">
        <div className="shell">
          <div><span className={styles.pulse} /> DEUX PRODUITS EN CONSTRUCTION</div>
          <div>CLIENT WORK <strong>OFFLINE</strong></div>
          <div>PERSONAL PROJECTS <strong>PRIORITY</strong></div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="shell">
          <p className="eyebrow">Produits actifs</p>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Deux univers.<br />Une même exigence.</h2>
            <p className="section-copy">
              Je ne fabrique plus des sites pour des clients. Je construis des produits que je veux voir exister, avec une responsabilité complète sur l’idée, le code et l’expérience.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article className={`${styles.projectCard} ${styles[project.statusTone]}`} key={project.slug}>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span>{project.code}</span>
                    <span className={styles.projectStatus}><i /> {project.status}</span>
                  </div>
                  <div className={styles.projectTitleRow}>
                    <Image src={project.icon} alt="" width={58} height={58} className={styles.projectIcon} />
                    <div><span className="tech-label">SYSTEM 0{index + 1}</span><h3>{project.name}</h3></div>
                  </div>
                  <blockquote>{project.statement}</blockquote>
                  <p>{project.description}</p>
                  <div className={styles.tagList}>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectCta}>
                      Ouvrir le produit <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className={styles.projectCtaMuted}>Présentation publique bientôt disponible</span>
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

          <Link href="/projets" className={styles.allProjects}>Voir les systèmes en détail <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className="shell">
          <p className="eyebrow">Operating system</p>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Ma façon de construire.</h2>
            <p className="section-copy">Une culture très tech, mais jamais de technologie pour le décor. Chaque choix doit améliorer la fiabilité, la compréhension ou la vitesse d’exécution.</p>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((principle) => (
              <article className="panel" key={principle.index}>
                <span>{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stackSection}>
        <div className={`shell ${styles.stackInner}`}>
          <div>
            <p className="eyebrow">Technology matrix</p>
            <h2 className="section-title">Du moteur jusqu’au pixel.</h2>
          </div>
          <div className={styles.stackGrid}>
            {stack.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={`shell panel ${styles.finalPanel}`}>
          <div className={styles.core} aria-hidden="true"><span /><span /><span /></div>
          <div>
            <p className="eyebrow">Next system</p>
            <h2>Le prochain projet n’a pas encore de nom.</h2>
            <p>Mais il suivra la même règle : résoudre un vrai problème, avec un produit que j’aurai envie d’utiliser moi-même.</p>
            <Link href="/contact" className="button-secondary">Entrer en contact <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
