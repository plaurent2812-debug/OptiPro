import type { ReactNode } from "react";
import type { Tone } from "./Section";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  titleId: string;
  kicker: string;
  tone: Tone;
  title: ReactNode;
  /** Texte et actions à droite du titre */
  children?: ReactNode;
  /** Boutons sous le texte */
  actions?: ReactNode;
  /** Contenu pleine largeur sous le titre */
  after?: ReactNode;
};

// Premier écran : titre à gauche, texte et actions à droite, alignés en haut sur la même ligne.
// Le kicker est une phrase courte en gris ; la teinte de la page ne tient qu’à un point.
export default function PageHero({ titleId, kicker, tone, title, children, actions, after }: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={titleId}>
      <div className="shell">
        <p className={styles.kicker} data-tone={tone}>{kicker}</p>
        <div className={styles.grid}>
          <h1 className={styles.title} id={titleId}>{title}</h1>
          {(children || actions) && (
            <div className={styles.side}>
              {children}
              {actions && <div className={styles.actions}>{actions}</div>}
            </div>
          )}
        </div>
        {after}
      </div>
    </section>
  );
}
