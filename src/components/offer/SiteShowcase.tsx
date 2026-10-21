import Image from "next/image";
import Link from "next/link";
import { showcaseSites } from "@/data/projects";
import { BrowserFrame, StatusPill } from "@/components/ui/Frames";
import styles from "./SiteShowcase.module.css";

// Exemples de sites réalisés : vraies captures, avec leur statut réel (en ligne, démonstration).
export default function SiteShowcase() {
  return (
    <ul className={styles.sites} aria-label="Exemples de sites réalisés">
      {showcaseSites.map((site) => (
        <li key={site.slug}>
          <Link href={`/projets#${site.slug}`}>
            <BrowserFrame label={site.name}>
              <Image src={site.image} alt={site.imageAlt} width={site.imageWidth} height={site.imageHeight} sizes="(max-width: 959px) 94vw, 400px" />
            </BrowserFrame>
            <span className={styles.caption}>
              <span><b>{site.name}</b><span>{site.pitch}</span></span>
              <StatusPill tone={site.badgeTone}>{site.badge}</StatusPill>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
