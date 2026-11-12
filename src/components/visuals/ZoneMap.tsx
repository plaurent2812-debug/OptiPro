import Link from "next/link";
import { coastline, mapCities } from "@/data/zones";
import styles from "./ZoneMap.module.css";

// Carte schématique des Alpes-Maritimes : chaque ville est placée à ses coordonnées réelles,
// Vence (où Pierre est installé) sert de point d’attache. Le dessin est décoratif :
// les liens vers les pages locales sont dans la liste, lisible sans la carte.
const WIDTH = 564;
const HEIGHT = 370;
const round = (value: number) => Math.round(value * 10) / 10;
// Projection plane suffisante à cette échelle : la longitude est corrigée par cos(43,65°).
const project = (lat: number, lon: number): [number, number] => [round((lon - 6.8) * 723.6), round((43.84 - lat) * 1000)];

const labels: Record<string, { dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  vence: { dx: 0, dy: -18, anchor: "middle" },
  nice: { dx: 13, dy: -9, anchor: "start" },
  "cagnes-sur-mer": { dx: 14, dy: 5, anchor: "start" },
  antibes: { dx: 14, dy: 6, anchor: "start" },
  cannes: { dx: -13, dy: -8, anchor: "end" },
  grasse: { dx: 0, dy: -15, anchor: "middle" },
};

function coastPath() {
  const points = coastline.map(([lat, lon]) => project(lat, lon));
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i += 1) {
    const [x, y] = points[i];
    const [nx, ny] = points[i + 1];
    d += ` Q${x} ${y} ${round((x + nx) / 2)} ${round((y + ny) / 2)}`;
  }
  const [lx, ly] = points[points.length - 1];
  return { line: `${d} L${lx} ${ly}`, first: points[0], last: points[points.length - 1] };
}

export default function ZoneMap({ active }: { active?: string }) {
  const coast = coastPath();
  const [hx, hy] = project(mapCities[0].lat, mapCities[0].lon);
  // Le tracé déborde du cadre : la mer se prolonge sous la carte quand le panneau est plus haut qu’elle.
  const sea = `${coast.line} L${WIDTH + 40} ${HEIGHT + 400} L${coast.first[0]} ${HEIGHT + 400} Z`;

  return (
    <div className={styles.zone}>
      <div className={styles.map} aria-hidden="true">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="presentation" focusable="false">
          <defs>
            <linearGradient id="zone-sea" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--cyan)" stopOpacity=".16" />
              <stop offset="1" stopColor="var(--cyan)" stopOpacity=".02" />
            </linearGradient>
            <radialGradient id="zone-halo">
              <stop offset="0" stopColor="var(--green)" stopOpacity=".5" />
              <stop offset="1" stopColor="var(--green)" stopOpacity="0" />
            </radialGradient>
            <pattern id="zone-dots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--line-3)" />
            </pattern>
            <radialGradient id="zone-fade" cx=".42" cy=".42" r=".62">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="zone-mask"><rect width={WIDTH} height={HEIGHT} fill="url(#zone-fade)" /></mask>
          </defs>

          <rect width={WIDTH} height={HEIGHT} fill="url(#zone-dots)" mask="url(#zone-mask)" opacity=".7" />
          <path d={sea} fill="url(#zone-sea)" />
          <path d={coast.line} className={styles.coast} />
          <text x={WIDTH - 18} y={HEIGHT - 64} textAnchor="end" className={styles.seaLabel}>Mer Méditerranée</text>

          <circle cx={hx} cy={hy} r="78" fill="url(#zone-halo)" />
          {mapCities.slice(1).map((city) => {
            const [x, y] = project(city.lat, city.lon);
            // Courbe légère entre Vence et la ville, bombée toujours du même côté.
            const cx = round((hx + x) / 2 + (y - hy) * 0.16);
            const cy = round((hy + y) / 2 - (x - hx) * 0.16);
            return <path key={city.slug} d={`M${hx} ${hy} Q${cx} ${cy} ${x} ${y}`} className={styles.link} data-point={city.slug} data-active={active === city.slug || undefined} />;
          })}

          {mapCities.map((city, index) => {
            const [x, y] = project(city.lat, city.lon);
            const label = labels[city.slug];
            const isHome = index === 0;
            return (
              <g key={city.slug} className={styles.point} data-point={city.slug} data-home={isHome || undefined} data-active={active === city.slug || undefined}>
                {isHome && <circle cx={x} cy={y} r="9" className={styles.pulse} />}
                <circle cx={x} cy={y} r={isHome ? 13 : 10} className={styles.ring} />
                <circle cx={x} cy={y} r={isHome ? 6 : 4.5} className={styles.dot} />
                <text x={x + label.dx} y={y + label.dy} textAnchor={label.anchor} className={styles.label}>{city.name}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <ul className={styles.list}>
        {mapCities.map((city, index) => (
          <li key={city.slug} className="glow-card" data-tone={index === 0 ? "green" : "cyan"}>
            <Link href={`/creation-site-internet/${city.slug}`} data-city={city.slug} aria-current={active === city.slug ? "page" : undefined}>
              <span className={styles.prefix}>Création de site internet à </span>
              <b>{city.name}</b>
            </Link>
            <p>{city.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
