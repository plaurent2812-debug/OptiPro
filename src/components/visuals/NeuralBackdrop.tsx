import styles from "./NeuralBackdrop.module.css";

const nodes = Array.from({ length: 10 }, (_, index) => index + 1);
const links = Array.from({ length: 12 }, (_, index) => index + 1);

export default function NeuralBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.cluster}>
        <span className={styles.aura} />
        <span className={styles.ring} />
        <span className={`${styles.ring} ${styles.ringTwo}`} />
        <span className={styles.sweep} />
        {links.map((link) => <span className={`${styles.link} ${styles[`link${link}`]}`} key={`link-${link}`} />)}
        {nodes.map((node) => <i className={`${styles.node} ${styles[`node${node}`]}`} key={`node-${node}`} />)}
        <b className={styles.core} />
      </div>
    </div>
  );
}
