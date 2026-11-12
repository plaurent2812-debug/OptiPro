import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectVisual from "@/components/projects/ProjectVisual";
import PageHero from "@/components/ui/PageHero";
import { StatusPill } from "@/components/ui/Frames";
import { contact, offer } from "@/data/offer";
import { projects } from "@/data/projects";
import styles from "../content.module.css";
import { shareMeta } from "@/lib/share-meta";

const metaTitle = "Réalisations";
const metaDescription = "Sites et applications conçus et réalisés par Pierre Laurent, créateur de sites internet dans les Alpes-Maritimes.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "/projets" },
  ...shareMeta(`${metaTitle} · Pierre Laurent`, metaDescription, "/projets"),
};

// Page lue par un prospect : les sites d’abord (ce que l’offre produit), les applications ensuite.
// La démonstration de site vitrine ouvre la liste ; chaque réalisation garde son statut réel.
const siteOrder = ["ro-nutritionniste", "la-parallaxe", "le-fond-du-sujet", "ideoscope-2027"];
const sites = siteOrder.map((slug) => projects.find((project) => project.slug === slug)!);
const apps = projects.filter((project) => !siteOrder.includes(project.slug));

const groups = [
  {
    id: "sites",
    title: "Sites internet",
    lede: "Une démonstration de site vitrine et trois sites publiés, que vous pouvez ouvrir. Le vôtre est conçu, rédigé et mis en ligne de la même façon.",
    contents: "Ce qu’on y trouve",
    items: sites,
  },
  {
    id: "applications",
    title: "Applications",
    lede: "Je conçois et je réalise aussi des applications web et mobiles. Si votre site doit un jour aller plus loin, c’est le même interlocuteur.",
    contents: "Ce qu’elle fait",
    items: apps,
  },
];

export default function ProjectsPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <PageHero
        titleId="projects-title"
        kicker="Réalisations"
        tone="green"
        title={<>Des sites en ligne. <span>Et des applications.</span></>}
        after={
          <nav className={styles.projectIndex} aria-label="Choisir une réalisation">
            {groups.flatMap((group) => group.items).map((project) => (
              <a href={`#${project.slug}`} key={project.slug}>
                <Image src={project.icon} alt="" width={28} height={28} />
                <span>{project.name}</span>
              </a>
            ))}
          </nav>
        }
      >
        <p>Les sites d’abord, parce que c’est ce que je crée pour votre entreprise. Les applications ensuite. <strong>Chaque réalisation affiche son état réel : démonstration, en ligne, en développement ou en pause.</strong></p>
      </PageHero>

      {groups.map((group, groupIndex) => (
        <section id={group.id} className={styles.projects} aria-labelledby={`${group.id}-title`} key={group.id}>
          <div className="shell">
            <header className={styles.groupHead}>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
              <p>{group.lede}</p>
            </header>
            {group.items.map((project, index) => (
              <article id={project.slug} className={styles.project} key={project.slug} aria-labelledby={`${project.slug}-title`}>
                <div className={styles.projectVisual}><ProjectVisual project={project} eager={groupIndex === 0 && index === 0} /></div>
                <div className={styles.projectCopy}>
                  <div className={styles.projectHeader}>
                    <Image src={project.icon} alt="" width={64} height={64} />
                    <h3 id={`${project.slug}-title`}>{project.name}</h3>
                    <StatusPill tone={project.badgeTone}>{project.badge}</StatusPill>
                  </div>
                  <p className={styles.statement}>{project.statement}</p>
                  <p className={styles.description}>{project.description}</p>
                  <dl className={styles.matrix}>
                    <div><dt>Support</dt><dd>{project.reach}</dd></div>
                    <div><dt>{group.contents}</dt><dd>{project.capabilities.slice(0, 3).join(", ")}</dd></div>
                  </dl>
                  <div className={styles.evidence}>
                    <p>Mon travail</p>
                    <h4>{project.role}</h4>
                    <p>{project.demonstrates}</p>
                  </div>
                  {project.href
                    ? <a href={project.href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">{project.linkLabel}<span className="sr-only"> (nouvel onglet)</span></a>
                    : <span className={styles.projectWait}>{project.waitLabel}</span>}
                </div>
              </article>
            ))}
            {group.id === "sites" && (
              <p className={styles.groupCta}>Un site pour votre entreprise&nbsp;: {offer.setupPrice} de mise en ligne, puis {offer.monthlyPrice} par mois. <Link href="/creation-site-internet">Voir l’offre</Link></p>
            )}
          </div>
        </section>
      ))}

      <section className={styles.further} aria-label="Pour aller plus loin">
        <div className={`shell ${styles.furtherGrid}`}>
          <div>
            <h2>Un site pour votre entreprise&nbsp;?</h2>
            <p>La même exigence, au service des {offer.audience} des {contact.area}&nbsp;: {offer.setupPrice} de mise en ligne, puis {offer.monthlyPrice} par mois.</p>
            <Link href="/creation-site-internet" className="btn btn-primary">Voir l’offre</Link>
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
