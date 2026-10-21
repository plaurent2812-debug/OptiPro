import type { CSSProperties } from "react";
import type { SiteMockup as Mockup } from "@/data/examples";
import { BrowserFrame } from "@/components/ui/Frames";
import styles from "./SiteMockup.module.css";

// Page d’accueil d’une entreprise fictive, dessinée en HTML : elle se lit comme une image.
export default function SiteMockup({ mockup }: { mockup: Mockup }) {
  const { name, sector, city, accent, nav, cta, headline, sub, panel, band } = mockup;
  return (
    <BrowserFrame label={`Maquette · ${name}`}>
      <div className={styles.frame}>
        <div
          className={styles.site}
          style={{ "--accent": accent } as CSSProperties}
          role="img"
          aria-label={`Maquette de page d’accueil pour ${name}, entreprise fictive (${sector.toLowerCase()}, ${city}) : « ${headline} », avec un encadré « ${panel.title} » et un bandeau « ${band.label} ».`}
        >
          <div className={styles.nav}>
            <span className={styles.logo}><i />{name}</span>
            <span className={styles.links}>{nav.map((item) => <span key={item}>{item}</span>)}</span>
            <span className={styles.cta}>{cta}</span>
          </div>
          <div className={styles.hero}>
            <div>
              <p className={styles.headline}>{headline}</p>
              <p className={styles.sub}>{sub}</p>
              <span className={styles.heroBtn}>{cta}</span>
            </div>
            <div className={styles.panel}>
              <p className={styles.panelTitle}>{panel.title}</p>
              <div className={styles.fields}>
                {panel.fields.map((field) => (
                  <span key={field.label} className={styles.field}>
                    <small>{field.label}</small>
                    <span>{field.value}</span>
                  </span>
                ))}
              </div>
              <span className={styles.submit}>{panel.button}</span>
            </div>
          </div>
          <div className={styles.band}>
            <b>{band.label}</b>
            {band.items.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
