import { contact } from "@/data/offer";
import Icon from "@/components/ui/Icon";
import styles from "./layout.module.css";

// Barre d’appel fixe, sous le pouce : visible seulement sur téléphone (CSS), sans JavaScript.
export default function MobileCallBar() {
  return (
    <div className={styles.callBar} role="region" aria-label="Appel rapide">
      <a className={styles.callBarTel} href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
      <a className={styles.callBarMail} href={contact.emailHref} aria-label={`Écrire à ${contact.email}`}><Icon name="mail" /></a>
    </div>
  );
}
