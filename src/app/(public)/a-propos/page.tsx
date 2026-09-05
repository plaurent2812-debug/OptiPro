import type { Metadata } from "next";
import Link from "next/link";
import { careerHighlights, education, experiences, interests, languages, professionalProfile, skillGroups } from "@/data/profile";
import styles from "@/components/profile/profile.module.css";

export const metadata: Metadata = {
  title: "Parcours professionnel",
  description: "Le parcours de Pierre Laurent : dix ans dans les opérations et la logistique, management, administration, data et création d’outils numériques.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.profileHero}>
        <div className="shell">
          <p className="eyebrow">Parcours professionnel / Pierre Laurent</p>
          <h1>Comprendre le terrain.<br />Structurer l’action.<br /><em>Faire avancer les équipes.</em></h1>
          <p>{professionalProfile.summary} La création numérique prolonge cette approche : comprendre un besoin, puis concevoir une solution qui fonctionne.</p>
          <div className={styles.overviewActions}><Link href="/cv" className="button-primary">Consulter mon CV <span aria-hidden="true">↗</span></Link><Link href="/projets">Explorer mes projets →</Link></div>
          <dl className={styles.highlights}>{careerHighlights.map((highlight) => <div key={highlight.value}><dt>{highlight.label}</dt><dd>{highlight.value}</dd></div>)}</dl>
        </div>
      </section>

      <div className={`shell ${styles.profileLayout}`}>
        <aside className={styles.profileAside}>
          <p className="eyebrow">Le fil du parcours</p>
          <h2>De l’exécution au pilotage.</h2>
          <p>Entrepôt, agence, logistique, exploitation : une vision des opérations construite à chaque étape.</p>
          <nav aria-label="Étapes du parcours">
            <a href="#pharmagreen">Pharmagreen · 2026</a>
            <a href="#gl-events">GL Events Live · 2025</a>
            <a href="#factory">Factory · 2019</a>
            <a href="#eddifis">Les premières responsabilités</a>
            <a href="#competences">Compétences & outils</a>
          </nav>
          <small>VENCE, ALPES-MARITIMES<br />FRANÇAIS / ANGLAIS BILINGUE</small>
        </aside>
        <section aria-label="Expériences professionnelles">
          <ol className={styles.timeline}>
            {experiences.map((experience) => (
              <li className={styles.experience} id={experience.id} key={experience.id}>
                <div className={styles.experienceMeta}><span>{experience.marker}</span><span>{experience.period}</span></div>
                <h3>{experience.company}</h3>
                <h4>{experience.role}</h4>
                <p>{experience.context}</p>
                {experience.highlights.length > 0 && <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                <div className={styles.tags}>{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section id="competences" className={`shell ${styles.skillsSection}`} aria-labelledby="skills-title">
        <p className="eyebrow">Compétences & outils</p>
        <h2 id="skills-title" className="section-title">Une expérience opérationnelle.<br />Une pratique numérique.</h2>
        <div className={styles.skillGroups}>{skillGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section className={`shell ${styles.detailsSection}`} aria-label="Formation et langues">
        <div><h2>Formation</h2><p>{education.title}<br />{education.school} · {education.period}</p></div>
        <div><h2>Langues</h2>{languages.map((language) => <p key={language}>{language}</p>)}</div>
      </section>
      <section className={`shell ${styles.personalBridge}`}>
        <div><p className="eyebrow">Derrière le parcours</p><h2>Curieux, sur le terrain<br />comme derrière un écran.</h2><p>J’aime les outils bien pensés, les interfaces précises et les idées qui deviennent des applications. Mes projets personnels sont une autre façon de découvrir mon travail.</p><Link href="/projets" className="button-secondary">Explorer mes projets <span aria-hidden="true">→</span></Link></div>
        <div className={styles.interestList}>{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
      </section>
    </main>
  );
}
