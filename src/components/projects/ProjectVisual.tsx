import Image from "next/image";
import type { ProductProject } from "@/data/projects";
import { BrowserFrame, PhoneFrame } from "@/components/ui/Frames";
import styles from "./ProjectVisual.module.css";

export default function ProjectVisual({ project, eager = false }: { project: ProductProject; eager?: boolean }) {
  const loading = eager ? "eager" : undefined;
  return (
    <figure className={styles.stage} data-visual={project.visual}>
      <span className={styles.topline} aria-hidden="true">{project.category}</span>
      {project.visual === "browser" ? (
        <BrowserFrame label={project.name} className={styles.browser}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 959px) 90vw, 620px" loading={loading} />
        </BrowserFrame>
      ) : project.visual === "identity" ? (
        <div className={styles.identity}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="132px" loading={loading} />
          <strong>Carnet d’explorateur</strong>
          <span>Quêtes, chapitres et progression</span>
        </div>
      ) : (
        <PhoneFrame inset={project.insetScreen} className={styles.phone}>
          <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 759px) 180px, 220px" loading={loading} />
        </PhoneFrame>
      )}
      <figcaption className={styles.caption}>{project.visual === "identity" ? "Identité du prototype, projet en pause" : "Interface réelle du projet"}</figcaption>
    </figure>
  );
}
