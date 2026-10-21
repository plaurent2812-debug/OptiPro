import type { Metadata } from "next";
import Link from "next/link";
import { careerHighlights, education, experiences, interests, languages, professionalProfile, skillGroups } from "@/data/profile";
import { optipro } from "@/data/offer";
import SystemMap from "@/components/visuals/SystemMap";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import styles from "@/components/profile/profile.module.css";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description: `Pierre Laurent, créateur des sites ${optipro.brand} à Vence : dix ans dans les opérations et la logistique, puis la création de sites, d’applications et d’automatisations.`,
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <PageHero
        titleId="about-title"
        kicker={`Qui suis-je, Pierre Laurent, ${optipro.brand}`}
        tone="amber"
        icon="route"
        title={<>Celui qui crée votre site <span>connaît le terrain.</span></>}
        actions={
          <>
            <Link href="/optipro" className="btn btn-primary">Voir l’offre {optipro.brand}</Link>
            <Link href="/cv" className="btn btn-ghost">Consulter mon CV</Link>
          </>
        }
        after={<dl className={styles.highlights}>{careerHighlights.map((highlight) => <div key={highlight.value}><dt>{highlight.label}</dt><dd>{highlight.value}</dd></div>)}</dl>}
      >
        <p>{professionalProfile.summary} La création numérique prolonge cette approche&nbsp;: comprendre un besoin, puis concevoir une solution qui fonctionne. <strong>Sous la marque {optipro.brand}, je crée les sites internet des {optipro.audience} des Alpes-Maritimes.</strong></p>
      </PageHero>

      <Section id="systeme" titleId="system-title" tone="cyan" icon="auto" tag="Ce que je relie" title="Du terrain à l’écran, la même personne." alt>
        <SystemMap />
      </Section>

      <section id="parcours" className={styles.journey} aria-labelledby="journey-title">
        <div className={`shell ${styles.profileLayout}`}>
          <aside className={styles.profileAside}>
            <p className={styles.asideKicker}>Le fil du parcours</p>
            <h2 id="journey-title">De l’exécution au pilotage.</h2>
            <p>Entrepôt, agence, logistique, exploitation&nbsp;: une vision des opérations construite à chaque étape.</p>
            <nav aria-label="Étapes du parcours">
              <a href="#pharmagreen">Pharmagreen, 2026</a>
              <a href="#gl-events">GL Events Live, 2025</a>
              <a href="#factory">Factory, 2019</a>
              <a href="#eddifis">Les premières responsabilités</a>
              <a href="#competences">Compétences et outils</a>
            </nav>
            <p className={styles.asideMeta}>Vence, Alpes-Maritimes<br />Français, anglais bilingue</p>
          </aside>
          <ol className={styles.timeline} aria-label="Expériences professionnelles">
            {experiences.map((experience) => (
              <li className={styles.experience} id={experience.id} key={experience.id}>
                <div className={styles.experienceMeta}><span>{experience.period}</span><span>{experience.marker.charAt(0) + experience.marker.slice(1).toLowerCase()}</span></div>
                <h3>{experience.company}</h3>
                <p className={styles.role}>{experience.role}</p>
                <p>{experience.context}</p>
                {experience.highlights.length > 0 && <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                <ul className={styles.tags} aria-label="Domaines">{experience.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section
        id="competences"
        titleId="skills-title"
        tone="cyan"
        icon="auto"
        tag="Compétences et outils"
        title="Une expérience opérationnelle. Une pratique numérique."
        alt
      >
        <div className={styles.skillGroups}>
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className={styles.detailsSection} aria-label="Formation et langues">
          <div><h3>Formation</h3><p>{education.title}<br />{education.school}, {education.period}</p></div>
          <div><h3>Langues</h3>{languages.map((language) => <p key={language}>{language}</p>)}</div>
        </div>
      </Section>

      <Section id="curiosite" titleId="bridge-title" tone="green" icon="user" tag="Derrière le parcours" title="Curieux, sur le terrain comme derrière un écran.">
        <div className={styles.personalBridge}>
          <div>
            <p>J’aime les outils bien pensés, les interfaces précises et les idées qui deviennent des applications. Mes projets personnels sont une autre façon de découvrir mon travail.</p>
            <Link href="/projets" className="btn btn-ghost">Explorer mes projets</Link>
          </div>
          <ul className={styles.interestList} aria-label="Centres d’intérêt">{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
        </div>
      </Section>

      <CallBlock titleId="cta-title" title="Besoin d’un site pour votre entreprise ? Le plus simple, c’est d’appeler." />
    </main>
  );
}
