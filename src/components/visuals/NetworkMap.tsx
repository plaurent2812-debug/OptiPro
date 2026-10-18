import Link from "next/link";
import { networkLines, type NetworkLine, type Stop } from "@/data/network";
import styles from "./NetworkMap.module.css";

// Sélection native par boutons radio et :has() : fonctionne sans JavaScript.
const allStops = networkLines.flatMap((line) => line.stops);
const uniqueStops = allStops.filter((stop, index) => allStops.findIndex((other) => other.x === stop.x && other.y === stop.y) === index);

type Anchor = "start" | "middle" | "end";

function labelPosition(stop: Stop): { x: number; y: number; anchor: Anchor } {
  switch (stop.label) {
    case "below": return { x: stop.x < 90 ? stop.x - 8 : stop.x, y: stop.y + 27, anchor: stop.x < 90 ? "start" : "middle" };
    case "left": return { x: stop.x - 16, y: stop.y + 5, anchor: "end" };
    case "right": return { x: stop.x + 16, y: stop.y + 5, anchor: "start" };
    case "aboveLeft": return { x: stop.x - 12, y: stop.y - 14, anchor: "end" };
    case "belowRight": return { x: stop.x + 12, y: stop.y + 27, anchor: "start" };
    default: return { x: stop.x > 520 ? stop.x + 8 : stop.x < 90 ? stop.x - 8 : stop.x, y: stop.y - 16, anchor: stop.x > 520 ? "end" : stop.x < 90 ? "start" : "middle" };
  }
}

function LineBadge({ line }: { line: NetworkLine }) {
  return <span className={styles.badge} data-line={line.id} aria-hidden="true">{line.code}</span>;
}

export default function NetworkMap({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.network}>
      <div className={styles.intro}>{children}</div>
      <svg className={styles.map} viewBox="0 0 640 400" aria-hidden="true" focusable="false">
        {networkLines.map((line, index) => (
          <path key={line.id} className={styles.track} data-line={line.id} d={line.path} pathLength={1} style={{ animationDelay: `${index * 140}ms` }} />
        ))}
        {uniqueStops.map((stop) => {
          const label = labelPosition(stop);
          const lines = networkLines.filter((line) => line.stops.some((other) => other.x === stop.x && other.y === stop.y)).map((line) => line.id).join(" ");
          const isDestination = stop.name === "Votre entreprise";
          return (
            <g key={`${stop.x}-${stop.y}`} className={styles.stop} data-lines={lines} data-kind={isDestination ? "destination" : stop.interchange ? "interchange" : "stop"}>
              {isDestination && <circle className={styles.pulse} cx={stop.x} cy={stop.y} r={14} />}
              <circle cx={stop.x} cy={stop.y} r={isDestination ? 11 : stop.interchange ? 9 : 6} />
              <text x={label.x} y={label.y} textAnchor={label.anchor}>{stop.name}</text>
            </g>
          );
        })}
      </svg>

      <fieldset className={styles.selector}>
        <legend>Choisir une ligne</legend>
        <label className={styles.choice}>
          <input type="radio" name="ligne" value="all" defaultChecked />
          <span className={styles.badgeAll} aria-hidden="true" />
          Tout le réseau
        </label>
        {networkLines.map((line) => (
          <label key={line.id} className={styles.choice} data-line={line.id}>
            <input type="radio" name="ligne" value={line.id} />
            <LineBadge line={line} />
            {line.name}
          </label>
        ))}
      </fieldset>

      <div className={styles.panels}>
        <div className={styles.panel} data-panel="all">
          <ul className={styles.overview}>
            {networkLines.map((line) => (
              <li key={line.id} data-line={line.id}>
                <LineBadge line={line} />
                <div><h3>{line.name}</h3><p>{line.pitch}</p><Link href={line.link.href}>{line.link.label}</Link></div>
              </li>
            ))}
          </ul>
          <p className={styles.legend}><span className={styles.legendInterchange} aria-hidden="true" />Les correspondances sont les projets où plusieurs savoir-faire se croisent.</p>
        </div>
        {networkLines.map((line) => (
          <div key={line.id} className={styles.panel} data-panel={line.id}>
            <div className={styles.panelHead}>
              <LineBadge line={line} />
              <div><h3>{line.name}</h3><p>{line.pitch}</p></div>
              <Link href={line.link.href} className={styles.panelLink}>{line.link.label}</Link>
            </div>
            <ol className={styles.strip} data-line={line.id}>
              {line.stops.map((stop) => (
                <li key={stop.name} data-kind={stop.interchange ? "interchange" : "stop"}>
                  <strong>{stop.name}</strong>
                  <span>{stop.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
