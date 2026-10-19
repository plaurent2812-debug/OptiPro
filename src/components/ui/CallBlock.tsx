import type { ReactNode } from "react";
import { contact, optipro } from "@/data/offer";
import Icon from "./Icon";
import styles from "./CallBlock.module.css";

// Appel final : le numéro en très grand, l’e-mail juste dessous.
export default function CallBlock({ id = "contact", titleId = "call-title", title, children }: { id?: string; titleId?: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className={styles.end} id={id} aria-labelledby={titleId}>
      <span className={styles.line} aria-hidden="true" />
      <div className="shell">
        <h2 className={styles.kicker} id={titleId}>{title}</h2>
        <a className={`${styles.tel} num`} href={contact.phoneHref}>{contact.phoneDisplay}</a>
        <div className={styles.row}>
          <a className={styles.mail} href={contact.emailHref}><Icon name="mail" /><span>{contact.email}</span></a>
          <p className={styles.meta}>Pierre Laurent, {optipro.brand}, à {contact.city} ({contact.area})</p>
        </div>
        {children}
      </div>
    </section>
  );
}
