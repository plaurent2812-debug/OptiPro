import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import type { Tone } from "./Section";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  titleId: string;
  kicker: string;
  tone: Tone;
  icon: IconName;
  title: ReactNode;
  /** Texte et actions à droite du titre */
  children?: ReactNode;
  /** Boutons sous le texte */
  actions?: ReactNode;
  /** Contenu pleine largeur sous le titre */
  after?: ReactNode;
};

// Premier écran des pages intérieures : même grille que l’accueil, titre à gauche, texte à droite.
export default function PageHero({ titleId, kicker, tone, icon, title, children, actions, after }: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={titleId}>
      <div className="shell">
        <p className={styles.kicker} data-tone={tone}><span className={styles.well}><Icon name={icon} /></span>{kicker}</p>
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
