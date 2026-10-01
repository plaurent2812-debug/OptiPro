import Image from "next/image";
import type { ProductProject } from "@/data/projects";
import styles from "./ProjectVisual.module.css";

export default function ProjectVisual({ project, index = 0, eager = false, compact = false }: { project: ProductProject; index?: number; eager?: boolean; compact?: boolean }) {
  return (
    <figure className={`${styles.stage} ${compact ? styles.compact : ""}`} data-tone={project.statusTone} data-visual={project.visual}>
      <div className={styles.topline} aria-hidden="true"><span>{project.category}</span><span>0{index + 1}</span></div>
      {project.visual === "browser" ? (
        <div className={styles.browser}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes={compact ? "(max-width: 720px) 40vw, (max-width: 1100px) 42vw, 270px" : "(max-width: 820px) 90vw, (max-width: 1024px) 50vw, 640px"} loading={eager ? "eager" : undefined} />
        </div>
      ) : project.visual === "identity" ? (
        <div className={styles.identity}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="160px" loading={eager ? "eager" : undefined} />
          <strong>Carnet d’explorateur</strong><span>Quêtes · Chapitres · Progression</span>
        </div>
      ) : (
        <div className={styles.phone}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes={compact ? "90px" : "(max-width: 720px) 150px, 180px"} loading={eager ? "eager" : undefined} />
        </div>
      )}
      <figcaption className={styles.caption}>{project.visual === "identity" ? "Identité du prototype · Projet en pause" : "Interface réelle du projet"}</figcaption>
    </figure>
  );
}
