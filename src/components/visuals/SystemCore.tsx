import Image from "next/image";
import styles from "./SystemCore.module.css";

const facets = [
  {
    id: "produit", label: "Produit",
    need: "Des échéances à ne plus oublier.",
    action: "Rassembler les infos, organiser les rappels",
    tool: "Ferdinand",
    description: "Un assistant pour les véhicules, les contrats et l’entretien du quotidien.",
    parts: ["Véhicules", "Contrats", "Entretien"],
    icon: "/projects/ferdinand-icon.png",
    example: "Découvrir le projet Ferdinand", href: "/projets#ferdinand",
  },
  {
    id: "operations", label: "Opérations",
    need: "Des informations dispersées dans l’activité quotidienne.",
    action: "Structurer les données pour y voir clair",
    tool: "Un tableau de bord",
    description: "Rendre l’activité lisible pour organiser les opérations et coordonner les équipes.",
    parts: ["Flux", "Équipes", "Indicateurs"],
    example: "Mon expérience chez GL Events Live", href: "/a-propos#gl-events",
  },
  {
    id: "automatisation", label: "Automatisation",
    need: "Le même suivi à refaire régulièrement.",
    action: "Connecter les données au suivi",
    tool: "Un suivi automatisé",
    description: "Faire circuler les informations et simplifier la mise à jour des tableaux de bord.",
    parts: ["Données", "Mise à jour", "Suivi"],
    example: "Mes tableaux de bord chez GL Events Live", href: "/a-propos#gl-events",
  },
  {
    id: "ia", label: "IA",
    need: "Une idée à transformer en application.",
    action: "Prototyper avec l’IA, puis vérifier",
    tool: "Du code à un outil utile",
    description: "Concevoir, tester et corriger : je garde la maîtrise de ce que je construis.",
    parts: ["Prototyper", "Tester", "Corriger"],
    example: "Ma façon de construire", href: "#construction",
  },
];

export default function SystemCore() {
  return (
    <fieldset className={styles.system}>
      <legend>Du besoin à l’outil : explorer quatre exemples de ma façon de construire</legend>
      <p className={styles.intro}>Du besoin à l’outil</p>
      <div className={styles.controls}>
        {facets.map((facet, index) => (
          <label key={facet.id} className={styles.control}>
            <input type="radio" name="construction-facet" value={facet.id} defaultChecked={index === 0} aria-controls={`facet-${facet.id}`} />
            <span>{facet.label}</span>
          </label>
        ))}
      </div>
      <div className={styles.panels}>
        {facets.map((facet) => (
          <div className={styles.facet} id={`facet-${facet.id}`} key={facet.id}>
            <div className={styles.need}>
              <span className={styles.stepLabel}>01 / Le besoin</span>
              <p>{facet.need}</p>
            </div>
            <div className={styles.connection}>
              <span className={styles.trace} aria-hidden="true">↓</span>
              <p>{facet.action}</p>
            </div>
            <div className={styles.tool}>
              <span className={styles.stepLabel}>02 / Ce que je construis</span>
              <div className={styles.toolHeading}>
                {facet.icon && <Image src={facet.icon} alt="" width={44} height={44} sizes="44px" />}
                <h2>{facet.tool}</h2>
              </div>
              <p>{facet.description}</p>
              <ul className={styles.parts} aria-label="Les éléments de l’outil">
                {facet.parts.map((part) => <li key={part}>{part}</li>)}
              </ul>
            </div>
            <a href={facet.href} className={styles.example}>{facet.example}<span aria-hidden="true">↗</span></a>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
