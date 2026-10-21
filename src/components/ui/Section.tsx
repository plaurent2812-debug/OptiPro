import type { ReactNode } from "react";
import styles from "./Section.module.css";

export type Tone = "amber" | "cyan" | "green";

type SectionProps = {
  id?: string;
  titleId: string;
  tone: Tone;
  tag: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Contenu placé sous le titre, dans la colonne du texte */
  intro?: ReactNode;
  alt?: boolean;
  children?: ReactNode;
};

// Section type de T2 : le fil entre par le filet supérieur et s’arrête sur l’étiquette.
// L’étiquette est un simple mot, sans icône : la teinte ne vit que dans le fil.
export default function Section({ id, titleId, tone, tag, title, lede, intro, alt = false, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.sec} ${alt ? styles.alt : ""}`} aria-labelledby={titleId}>
      <div className="shell">
        <header className={styles.head}>
          <p className={styles.tag} data-tone={tone}>{tag}</p>
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
