import type { CSSProperties } from "react";
import Icon from "@/components/ui/Icon";
import { systemSteps, systemWires } from "@/data/system";
import styles from "./SystemMap.module.css";

type CssVars = CSSProperties & Record<`--${string}`, string>;

// Sélection native par boutons radio et :has() : le schéma fonctionne sans JavaScript.
// Les flèches du clavier passent d’une étape à l’autre, comme dans tout groupe de boutons radio.
export default function SystemMap() {
  return (
    <div className={styles.console}>
      <div className={styles.bar}>
        <p className={styles.title}>
          Votre entreprise, du terrain à l’écran
          <span className={styles.state}><i aria-hidden="true" />Choisissez une étape</span>
        </p>
        <ul className={styles.legend} aria-label="Légende des flux">
          <li data-tone="amber">Terrain</li>
          <li data-tone="cyan">Données et automatisation</li>
          <li data-tone="green">En ligne</li>
        </ul>
      </div>

      <fieldset className={styles.sys}>
        <legend className="sr-only">Choisir une étape du schéma</legend>
        <div className={styles.stage}>
          <div className={styles.deco} aria-hidden="true"><i /><i /><i /><i /></div>
          <svg className={styles.wires} viewBox="0 0 800 460" aria-hidden="true" focusable="false">
            {systemWires.map((wire) => (
              <g
                key={`${wire.from}-${wire.to}`}
                className={styles.wire}
                data-a={wire.from}
                data-b={wire.to}
                data-tone={wire.tone}
                style={{ "--d": `${wire.delay}s`, "--pd": `${wire.pulseDelay}s`, "--t": `${wire.pulseDuration}s` } as CssVars}
              >
                <path className={styles.base} d={wire.path} />
                <path className={styles.lit} pathLength={100} d={wire.path} />
                <path className={styles.glow} pathLength={100} d={wire.path} />
                <path className={styles.pulse} pathLength={100} d={wire.path} />
                {wire.ports.map(([cx, cy]) => <circle key={`${cx}-${cy}`} className={styles.port} cx={cx} cy={cy} r={3.2} />)}
                <text className={styles.wireLabel} x={wire.label.x} y={wire.label.y} textAnchor="middle">{wire.label.text}</text>
              </g>
            ))}
          </svg>

          {systemSteps.map((step, index) => (
            <label
              key={step.id}
              className={`${styles.node} ${step.hub ? styles.hub : ""}`}
              data-k={step.id}
              data-tone={step.tone}
              style={{
                "--x": String(step.x),
                "--y": String(step.y),
                "--d": `${step.delay}s`,
                "--pd": `${step.inDelay ?? 0}s`,
                "--ce": step.inTone ? `var(--${step.inTone})` : "transparent",
                "--o": String(index * 2),
              } as CssVars}
            >
              <input className={styles.radio} type="radio" name="etape" value={step.id} defaultChecked={index === 0} />
              <span className={styles.well}><Icon name={step.icon} /></span>
              <span><b>{step.name}</b><small>{step.hint}</small></span>
              <i className={styles.led} aria-hidden="true" />
            </label>
          ))}
        </div>

        <div className={styles.panel} role="region" aria-live="polite" aria-label="Détail de l’étape choisie">
          {systemSteps.map((step) => (
            <article key={step.id} className={styles.pane} data-k={step.id} data-tone={step.tone}>
              <header className={styles.paneHead}>
                <span className={styles.paneWell}><Icon name={step.icon} /></span>
                <div><p className={styles.paneStep}>{step.step}</p><h3>{step.title}</h3></div>
              </header>
              <p className={styles.paneLede}>{step.lede}</p>
              <dl className={styles.proofs}>
                {step.proofs.map((proof) => (
                  <div key={proof.term + proof.text}>
                    <dt className={proof.kind === "word" ? styles.word : "num"}>
                      {proof.term}{proof.unit && <> <small>{proof.unit}</small></>}
                    </dt>
                    <dd>{proof.text}<span>{proof.source}</span></dd>
                  </div>
                ))}
              </dl>
              <div className={styles.paneFoot}>
                <a href={step.link.href}>{step.link.label}</a>
                {step.tools && <span className={styles.tools}>{step.tools}</span>}
              </div>
            </article>
          ))}
        </div>
        <p className={styles.hint}>Touchez une étape pour voir les preuves.</p>
      </fieldset>

      <div className={styles.foot}>
        <span>Cliquez sur une étape pour voir ce que j’ai fait, avec les vrais chiffres.</span>
        <span>5 étapes, 4 savoir-faire</span>
      </div>
    </div>
  );
}
