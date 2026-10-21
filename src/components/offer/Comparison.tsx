import { comparison, marketSource } from "@/data/market";
import styles from "./Comparison.module.css";

// Comparatif honnête : colonnes « soi-même » et « agence » d’après une source datée, sans avis inventé.
export default function Comparison() {
  const last = comparison.columns.length - 1;
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td />
            {comparison.columns.map((column, index) => <th key={column} scope="col" className={index === last ? styles.ours : undefined}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.values.map((value, index) => (
                <td key={comparison.columns[index]} data-col={comparison.columns[index]} className={index === last ? styles.ours : undefined}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.source}>
        Colonnes « agence » et « faire soi-même »&nbsp;: <a href={marketSource.url} target="_blank" rel="noopener noreferrer">{marketSource.name}<span className="sr-only"> (nouvel onglet)</span></a>, {marketSource.scope}, consulté le {marketSource.consulted}.
      </p>
    </div>
  );
}
