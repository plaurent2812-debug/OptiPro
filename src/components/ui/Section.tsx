import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import styles from "./Section.module.css";

export type Tone = "amber" | "cyan" | "green";

type SectionProps = {
  id?: string;
  titleId: string;
  tone: Tone;
  icon: IconName;
  tag: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Contenu placé sous le titre, dans la colonne du texte */
  intro?: ReactNode;
  alt?: boolean;
  children?: ReactNode;
};

// Section type de T2 : le flux entre par le filet supérieur et rejoint l’icône de l’étiquette.
export default function Section({ id, titleId, tone, icon, tag, title, lede, intro, alt = false, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.sec} ${alt ? styles.alt : ""}`} aria-labelledby={titleId}>
      <div className="shell">
        <header className={styles.head}>
          <p className={styles.tag} data-tone={tone}>
            <span className={styles.well}><Icon name={icon} /></span>
            {tag}
          </p>
          <div className={styles.text}>
            <h2 className={styles.title} id={titleId}>{title}</h2>
            {lede && <p className={styles.lede}>{lede}</p>}
            {intro}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
