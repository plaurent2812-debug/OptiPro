import type { Metadata } from "next";
import Image from "next/image";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours, méthode et philosophie de Pierre Laurent, product builder et créateur de ProbaLab et Ferdinand.",
  alternates: { canonical: "/a-propos" },
};

const manifesto = [
  ["01", "Comprendre avant de coder", "Le bon produit commence par une décision claire, pas par une liste de fonctionnalités."],
  ["02", "Automatiser sans aveugler", "Une automatisation utile laisse des traces, expose ses limites et reste contrôlable."],
  ["03", "Construire le produit entier", "Je relie le modèle de données, le backend, l’interface, le mobile et l’exploitation."],
  ["04", "Prouver ce qui fonctionne", "Tests, logs, artefacts et validation réelle sont des preuves différentes. Je ne les confonds pas."],
];

export default function AboutPage() {
  return (
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Human behind the systems</p>
          <h1>Très tech.<br /><em>Profondément concret.</em></h1>
          <p>Je ne me reconnaissais plus dans un site qui vendait des prestations. Cet espace raconte désormais ce que je construis vraiment — et pourquoi je le construis.</p>
        </div>
      </section>

      <section className={`shell ${styles.aboutGrid}`}>
        <div className={`panel ${styles.portrait}`}>
          <div className={styles.portraitMedia}>
            <Image src="/pierre-laurent-tech-hero.png" alt="Portrait de Pierre Laurent" fill sizes="(max-width: 900px) 100vw, 40vw" priority />
          </div>
        </div>
        <div className={styles.aboutCopy}>
          <p className="eyebrow">Profile / Pierre Laurent</p>
          <h2>Je construis les outils que j’aimerais avoir à mes côtés.</h2>
          <p>J’ai passé dix ans au contact d’opérations réelles : flux, urgences, données imparfaites et décisions qui ne peuvent pas attendre. Cette culture me suit dans chaque produit.</p>
          <p>Aujourd’hui, je conçois mes propres systèmes. <strong>ProbaLab</strong> rend une décision sportive plus lisible et responsable. <strong>Ferdinand</strong> veille sur les échéances du quotidien. Deux sujets différents, mais la même obsession : réduire le bruit sans masquer la réalité.</p>
          <p>J’aime les interfaces futuristes, les systèmes cohérents et les assistants qui semblent comprendre le contexte. Mais la technologie n’est jamais là pour jouer un rôle : elle doit devenir une présence discrète, fiable et utile.</p>

          <div className={styles.manifesto}>
            {manifesto.map(([index, title, copy]) => (
              <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className={`shell ${styles.history}`}>
        <p className="eyebrow">Trajectory</p>
        <div className={styles.historyGrid}>
          <article className="panel"><span>AVANT</span><h3>Opérations & logistique</h3><p>Comprendre le terrain, les contraintes, les dépendances et ce qui se passe réellement quand un système rencontre l’humain.</p></article>
          <article className="panel"><span>MAINTENANT</span><h3>Produits numériques</h3><p>Concevoir et opérer des produits complets, de la donnée jusqu’au dernier écran mobile.</p></article>
          <article className="panel"><span>ENSUITE</span><h3>Nouveaux systèmes personnels</h3><p>Explorer d’autres problèmes quotidiens où une technologie calme et intelligente peut vraiment changer l’expérience.</p></article>
        </div>
      </section>
    </main>
  );
}
