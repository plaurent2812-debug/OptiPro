import type { Metadata } from "next";
import Link from "next/link";
import { education, experiences, interests, languages, professionalProfile, skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";
import PrintButton from "./PrintButton";
import styles from "./cv.module.css";

export const metadata: Metadata = {
  title: "CV — Opérations, logistique & data",
  description: "Le CV de Pierre Laurent : parcours professionnel, management, logistique, administration, data et projets numériques personnels.",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <main id="contenu" tabIndex={-1} className={styles.page}>
      <div className={`shell ${styles.toolbar}`}>
        <div><Link href="/a-propos">← Retour au parcours</Link><p>Une vue synthétique, conçue pour être partagée.</p></div>
        <PrintButton />
      </div>
      <article className={styles.sheet} aria-label="Curriculum vitæ de Pierre Laurent">
        <header className={styles.identity}>
          <div><p className={styles.kicker}>PARCOURS PROFESSIONNEL & CRÉATION NUMÉRIQUE</p><h1>Pierre <strong>Laurent</strong></h1><h2>{professionalProfile.title}</h2><p className={styles.specialties}>Logistique · Administration · Data</p></div>
          <div className={styles.contact}><span>Vence · Alpes-Maritimes</span><a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a><a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer">LinkedIn · Pierre Laurent ↗</a><Link href="/">Portfolio & projets ↗</Link></div>
        </header>
        <p className={styles.summary}>{professionalProfile.summary} En parallèle, je conçois des applications et des automatisations avec le code et l’IA.</p>

        <div className={styles.columns}>
          <section className={styles.career} aria-labelledby="cv-career">
            <h2 id="cv-career" className={styles.sectionTitle}>Expériences professionnelles</h2>
            {experiences.map((experience) => (
              <article className={styles.experience} key={experience.id}>
                <div className={styles.experienceHeading}><h3>{experience.company}</h3><span>{experience.period}</span></div>
                <h4>{experience.role}</h4>
                {experience.highlights.length > 0
                  ? <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  : <p>{experience.context}</p>}
                {experience.id === "pharmagreen" && <p className={styles.scope}>Périmètre : logistique, administration et data.</p>}
              </article>
            ))}
          </section>
          <aside className={styles.sidebar} aria-label="Compétences, formation et projets">
            {skillGroups.map((group) => <section key={group.title}><h2 className={styles.sectionTitle}>{group.title}</h2><ul className={styles.skillList}>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
            <section><h2 className={styles.sectionTitle}>Formation</h2><p><strong>{education.title}</strong><br />{education.school} · {education.period}</p></section>
            <section><h2 className={styles.sectionTitle}>Langues</h2>{languages.map((language) => <p key={language}>{language}</p>)}</section>
            <section><h2 className={styles.sectionTitle}>Projets personnels</h2><ul className={styles.projectList}>{projects.map((project) => <li key={project.slug}><Link href={`/projets#${project.slug}`}>{project.name} ↗</Link><span>{project.status}</span></li>)}</ul></section>
            <section><h2 className={styles.sectionTitle}>Centres d’intérêt</h2><p>{interests.join(" · ")}</p></section>
          </aside>
        </div>
        <footer className={styles.sheetFooter}><span>Pierre Laurent · Opérations & création numérique</span><span>Mise à jour : septembre 2026</span></footer>
      </article>
      <p className={`shell ${styles.printHint}`}>Le bouton ouvre la fenêtre d’impression de votre navigateur, qui permet aussi d’enregistrer ce CV en PDF.</p>
    </main>
  );
}
