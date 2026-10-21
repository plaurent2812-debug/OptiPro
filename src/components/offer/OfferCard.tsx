import Icon from "@/components/ui/Icon";
import { contact, optipro } from "@/data/offer";
import styles from "./OfferCard.module.css";

// Module tarifaire OptiPro. La bascule mois / année repose sur deux boutons radio et :has().
export default function OfferCard() {
  return (
    <div className={styles.offer}>
      <div className={styles.grid}>
        <div className={styles.price}>
          <p className={styles.name}>
            <span>{optipro.brand}, site vitrine<small>Pour les {optipro.audience} des {contact.area}</small></span>
          </p>

          <div className={styles.step}>
            <p className={styles.key}>Mise en ligne, payée une seule fois</p>
            <p className={styles.bigPrice}><b>{optipro.setupPrice}</b></p>
          </div>

          <div className={styles.step}>
            <fieldset className={styles.choice}>
              <legend className={styles.key}>Puis l’abonnement, au choix</legend>
              <div className={styles.seg}>
                <label><input type="radio" name="rythme" value="mois" defaultChecked />Au mois</label>
                <label><input type="radio" name="rythme" value="an" />À l’année</label>
              </div>
              <div aria-live="polite">
                <div className={styles.plan} data-plan="mois">
                  <p className={styles.bigPrice}><b>{optipro.monthlyPrice}</b><span>par mois</span></p>
                  <p className={styles.alt}>ou {optipro.yearlyPrice} par an, <strong>soit {optipro.yearlySaving} d’économie</strong></p>
                </div>
                <div className={styles.plan} data-plan="an">
                  <p className={styles.bigPrice}><b>{optipro.yearlyPrice}</b><span>par an</span></p>
                  <p className={styles.alt}><strong>soit {optipro.yearlySaving} d’économie</strong> par rapport à {optipro.monthlyPrice} par mois</p>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className={styles.specs}>
          <h3>Ce qui est compris</h3>
          <dl>
            <div><dt>Engagement</dt><dd>{optipro.commitment}<small>puis sans engagement, préavis d’{optipro.noticePeriod}</small></dd></div>
            <div><dt>Hébergement et domaine</dt><dd>Compris<small>domaine à votre nom</small></dd></div>
            <div><dt>Modifications incluses</dt><dd>{optipro.includedTime} par mois<small>non cumulable</small></dd></div>
            <div><dt>Au-delà</dt><dd>{optipro.extraHourPrice} de l’heure</dd></div>
            <div><dt>Zone</dt><dd>{contact.area}<small>et {contact.remoteArea}</small></dd></div>
          </dl>
          <div className={styles.cta}>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <a className="btn btn-ghost" href={contact.emailHref}><Icon name="mail" />Écrire un e-mail</a>
          </div>
        </div>
      </div>
      <div className={styles.foot}><span>{optipro.vatNotice}</span><span>Un seul interlocuteur, à {contact.city}</span></div>
    </div>
  );
}
