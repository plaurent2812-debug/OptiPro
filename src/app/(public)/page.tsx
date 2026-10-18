import type { Metadata } from "next";
import Link from "next/link";
import { projects, type ProductProject } from "@/data/projects";
import { experiences } from "@/data/profile";
import { contact, optipro } from "@/data/offer";
import { networkLines } from "@/data/network";
import NetworkMap from "@/components/visuals/NetworkMap";
import ProjectVisual from "@/components/projects/ProjectVisual";
import PhoneIcon from "@/components/layout/PhoneIcon";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// Les réalisations les plus parlantes pour une entreprise passent en premier.
const featuredSlugs: ProductProject["slug"][] = ["ro-nutritionniste", "le-fond-du-sujet", "ferdinand"];
const featuredProjects = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)!);
const otherProjects = projects.filter((project) => !featuredSlugs.includes(project.slug));
const lineById = Object.fromEntries(networkLines.map((line) => [line.id, line]));
const journey = [...experiences].reverse();

function LineTags({ project }: { project: ProductProject }) {
  return (
    <ul className={styles.lineTags} aria-label="Savoir-faire mobilisés">
      {project.lines.map((id) => <li key={id} data-line={id}><span aria-hidden="true">{lineById[id].code}</span>{lineById[id].name}</li>)}
    </ul>
  );
}

export default function HomePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section id="reseau" className={`shell ${styles.hero}`} aria-labelledby="hero-title">
        <NetworkMap>
          <p className={styles.kicker}>Pierre Laurent, à {contact.city}, dans les {contact.area}</p>
          <h1 id="hero-title">Je fais tourner les opérations. Et je construis les outils qui vont avec.</h1>
          <p className={styles.lede}>Dix ans de logistique et d’exploitation, des applications web et mobiles, de l’automatisation, de l’IA et de la data. Et avec {optipro.brand}, des sites vitrines pour les entreprises de la région.</p>
          <div className={styles.heroActions}>
            <Link href="/optipro" className="button-primary">Découvrir l’offre {optipro.brand}</Link>
            <a href={contact.phoneHref} className={styles.phoneLink}><PhoneIcon />{contact.phoneDisplay}</a>
          </div>
        </NetworkMap>
      </section>

      <section className={styles.offer} aria-labelledby="offer-title">
        <div className={`shell ${styles.offerInner}`}>
          <div className={styles.offerCopy}>
            <p className={styles.offerLine}><span aria-hidden="true">S</span>Sites vitrines {optipro.brand}</p>
            <h2 id="offer-title">Un site professionnel pour votre entreprise. Je m’occupe de tout.</h2>
            <p>Je conçois votre site, je le mets en ligne, puis je le fais vivre avec {optipro.includedEdits}. Pour les {optipro.audience} des {contact.area}, avec un seul interlocuteur.</p>
          </div>
          <div className={styles.price}>
            <dl>
            <div><dt>Mise en ligne</dt><dd>{optipro.setupPrice}</dd></div>
            <div><dt>Ensuite</dt><dd>{optipro.monthlyPrice}<small> par mois</small></dd><dd className={styles.priceAlt}>ou {optipro.yearlyPrice} par an</dd></div>
            </dl>
            <p>Engagement {optipro.commitment}. {optipro.vatNotice}.</p>
          </div>
          <div className={styles.offerActions}>
            <Link href="/optipro" className={styles.inkButton}>Voir le détail de l’offre</Link>
            <a href={contact.phoneHref} className={styles.offerPhone}><PhoneIcon />Appeler le {contact.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section id="realisations" className={`shell ${styles.work}`} aria-labelledby="work-title">
        <div className={styles.sectionHead}>
          <h2 id="work-title" className="section-title">Ce que j’ai construit</h2>
          <p className="section-copy">Des sites, des applications et des outils de données, en ligne ou en cours de développement. Chaque projet indique les lignes du plan qu’il emprunte.</p>
        </div>
        <div className={styles.featured}>
          {featuredProjects.map((project) => (
            <article key={project.slug} className={styles.card}>
              <Link href={`/projets#${project.slug}`} className={styles.cardVisual} aria-label={`Voir ${project.name} en détail`}><ProjectVisual project={project} index={projects.indexOf(project)} compact /></Link>
              <LineTags project={project} />
              <h3><Link href={`/projets#${project.slug}`}>{project.name}</Link></h3>
              <p className={styles.status}>{project.status}</p>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
        <ul className={styles.others} aria-label="Autres projets">
          {otherProjects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projets#${project.slug}`}>
                <span className={styles.otherDots} aria-hidden="true">{project.lines.map((id) => <i key={id} data-line={id} />)}</span>
                <strong>{project.name}</strong>
                <span>{project.category}. {project.status}.</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/projets" className={styles.allLink}>Voir les sept projets en détail</Link>
      </section>

      <section id="parcours" className={styles.terrain} aria-labelledby="terrain-title">
        <div className={`shell ${styles.terrainInner}`}>
          <div className={styles.terrainCopy}>
            <h2 id="terrain-title" className="section-title">Avant d’écrire du code, j’ai fait tourner des entrepôts.</h2>
            <p>Commandes, stocks, transporteurs, chantiers : je connais les contraintes d’une entreprise qui doit livrer à l’heure. Chez GL Events Live, j’ai réorganisé un dépôt et renégocié les contrats transporteurs.</p>
            <p>C’est ce terrain qui guide les outils que je construis : utiles d’abord, simples à prendre en main.</p>
            <div className={styles.terrainActions}>
              <Link href="/a-propos" className="button-secondary">Mon parcours complet</Link>
              <Link href="/cv" className={styles.textLink}>Mon CV</Link>
            </div>
          </div>
          <div className={styles.board}>
            <p className={styles.boardTitle} id="board-title">Mon parcours, étape par étape</p>
            <ol aria-labelledby="board-title">
              {journey.map((experience) => (
                <li key={experience.id}>
                  <span className={styles.boardTime}>{experience.period.split(" — ")[0]}</span>
                  <span className={styles.boardPlace}>{experience.company}</span>
                  <span className={styles.boardRole}>{experience.role}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`shell ${styles.final}`} aria-labelledby="final-title">
        <h2 id="final-title">Une question, un projet ?</h2>
        <p>Parlons-en directement. Je réponds moi-même, depuis {contact.city}.</p>
        <a href={contact.phoneHref} className={styles.bigPhone}>{contact.phoneDisplay}</a>
        <a href={contact.emailHref} className={styles.bigMail}>{contact.email}</a>
      </section>
    </main>
  );
}
