import type { Metadata } from "next";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Le parcours de Pierre Laurent, ses centres d’intérêt et ce qui se trouve derrière ses projets.",
  alternates: { canonical: "/a-propos" },
};

const manifesto = [
  ["01", "Toujours apprendre", "Chaque projet est aussi une excuse pour comprendre un nouveau domaine, un nouvel outil ou une autre façon de faire."],
  ["02", "Faire fonctionner pour de vrai", "J’aime aller au-delà de la démonstration et suivre une idée jusqu’au moment où elle devient réellement utilisable."],
  ["03", "Soigner les détails", "Une transition, un mot ou un état vide peuvent changer complètement la sensation laissée par une application."],
  ["04", "Garder un esprit critique", "Une technologie impressionnante reste un outil. Je veux comprendre ce qu’elle sait faire, mais aussi là où elle peut se tromper."],
];

export default function AboutPage() {
  return (
    <main>
      <section className={styles.pageHero}>
        <div className="shell">
          <p className="eyebrow">Derrière les projets</p>
          <h1>Un parcours fait de terrain, de curiosité et de <em>beaucoup de tech.</em></h1>
          <p>Je ne suis pas arrivé au numérique par une route toute tracée. J’y suis venu en cherchant de meilleurs outils, puis en ayant envie de les construire moi-même.</p>
        </div>
      </section>

      <section className={`shell ${styles.aboutGrid}`}>
        <div className={`panel ${styles.profileVisual}`} aria-hidden="true">
          <div className={styles.profileGrid} />
          <div className={styles.profileCore}>
            <span /><span /><i />
          </div>
          <div className={styles.profileReadout}>
            <div><span>INTERESTS</span><strong>AI / AUTOMATION / INTERFACES</strong></div>
            <div><span>PROJECTS</span><strong>PROBALAB / FERDINAND</strong></div>
            <div><span>MODE</span><strong>CURIOUS / BUILDING</strong></div>
          </div>
        </div>
        <div className={styles.aboutCopy}>
          <p className="eyebrow">Pierre Laurent</p>
          <h2>J’aime comprendre comment les choses fonctionnent — puis essayer de les améliorer.</h2>
          <p>J’ai passé dix ans au contact d’opérations réelles : des flux, des urgences, des informations imparfaites et des décisions qui ne peuvent pas attendre. C’est là que j’ai appris à regarder un système dans son ensemble, pas seulement l’écran visible.</p>
          <p>La tech a progressivement pris une place centrale. D’abord comme moyen d’automatiser ce qui me frustrerait au quotidien, puis comme terrain de création à part entière. Aujourd’hui, <strong>ProbaLab</strong> et <strong>Ferdinand</strong> sont les deux projets qui racontent le mieux cette évolution.</p>
          <p>J’adore les interfaces futuristes, l’intelligence artificielle, l’automatisation et cette idée d’un assistant qui comprend le contexte sans devenir envahissant. Les univers à la Tony Stark ou JARVIS m’inspirent pour cette raison : la technologie y semble puissante, mais surtout naturelle.</p>

          <div className={styles.manifesto}>
            {manifesto.map(([index, title, copy]) => (
              <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className={`shell ${styles.history}`}>
        <p className="eyebrow">Mon parcours</p>
        <div className={styles.historyGrid}>
          <article className="panel"><span>LE TERRAIN</span><h3>Opérations & logistique</h3><p>Dix années à comprendre les contraintes réelles, les dépendances et tout ce qui se passe quand un système rencontre des humains.</p></article>
          <article className="panel"><span>LE DÉCLIC</span><h3>Créer mes propres outils</h3><p>Passer de « cet outil devrait exister » à l’envie de comprendre, prototyper, coder et aller jusqu’à une vraie application.</p></article>
          <article className="panel"><span>AUJOURD’HUI</span><h3>ProbaLab, Ferdinand et la suite</h3><p>Faire évoluer mes projets actuels et rester libre d’explorer le prochain sujet qui éveillera ma curiosité.</p></article>
        </div>
      </section>
    </main>
  );
}
