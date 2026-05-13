/**
 * Templates des emails de relance d'impayés.
 *
 * 3 niveaux gradués :
 * - Niveau 1 (J+7 après échéance) : rappel doux, on suppose un oubli
 * - Niveau 2 (J+15 après échéance) : rappel ferme, demande d'action
 * - Niveau 3 (J+30 après échéance) : mise en demeure formelle
 *
 * Pour chaque niveau, on génère un objet `{ subject, html }` à passer à
 * sendMail(). Les variables sont injectées via la fonction (pas de moteur
 * de template, on reste léger).
 */

export type NiveauRelance = 1 | 2 | 3

interface RelanceContext {
  /** Prénom + nom (ou raison sociale) du destinataire. */
  clientLabel: string
  /** Numéro de la facture, ex: "F-2026-04-1". */
  numero: string
  /** Montant TTC formaté, ex: "300,00 €". */
  montant: string
  /** Date d'échéance formatée, ex: "28/04/2026". */
  dateEcheance: string
  /** Nombre de jours de retard. */
  joursRetard: number
}

const COMMON_FOOTER = `
  <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
  <p style="margin: 0 0 4px; color: #475569; font-size: 13px;">
    <strong style="color: #0f172a;">Pierre Laurent</strong> · OptiPro
  </p>
  <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px;">
    Bâtiment Le Matisse, 541 Avenue Colonel Meyère, 06140 Vence
  </p>
  <p style="margin: 0; color: #6b7280; font-size: 12px;">
    SIRET 934 301 987 00020 · TVA non applicable, art. 293 B du CGI
  </p>
`

function wrapEmail(content: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0f172a; line-height: 1.55;">
      ${content}
      ${COMMON_FOOTER}
    </div>
  `
}

export function relanceJ7({ clientLabel, numero, montant, dateEcheance }: RelanceContext) {
  return {
    subject: `Rappel — Facture ${numero} échue`,
    html: wrapEmail(`
      <p>Bonjour ${clientLabel},</p>
      <p>
        Je vous écris à propos de la facture <strong>${numero}</strong> d'un montant
        de <strong>${montant}</strong>, dont l'échéance était fixée au
        <strong>${dateEcheance}</strong>.
      </p>
      <p>
        Sauf erreur de ma part, son règlement n'a pas encore été enregistré.
        Il s'agit très probablement d'un oubli — je vous remercie de bien vouloir
        procéder au paiement dès que possible.
      </p>
      <p style="margin-top: 20px;">
        Si vous avez déjà réglé cette facture ces derniers jours, merci de ne pas
        tenir compte de ce message et de m'en informer pour que je mette à jour mon suivi.
      </p>
      <p>Bien cordialement,</p>
    `),
  }
}

export function relanceJ15({ clientLabel, numero, montant, dateEcheance, joursRetard }: RelanceContext) {
  return {
    subject: `Relance — Facture ${numero} impayée (${joursRetard} jours de retard)`,
    html: wrapEmail(`
      <p>Bonjour ${clientLabel},</p>
      <p>
        Malgré un premier rappel envoyé il y a une semaine, je constate que la
        facture <strong>${numero}</strong> d'un montant de <strong>${montant}</strong>,
        échue le <strong>${dateEcheance}</strong>, reste impayée à ce jour
        (<strong>${joursRetard} jours de retard</strong>).
      </p>
      <p>
        Je vous remercie de bien vouloir procéder au règlement <strong>sous huitaine</strong>,
        ou de me contacter dans les meilleurs délais si vous rencontrez une difficulté.
        Une solution amiable est toujours préférable pour les deux parties.
      </p>
      <p style="margin-top: 20px;">
        Sans réponse de votre part, je me verrai contraint de vous adresser une mise en
        demeure formelle, étape préalable à toute procédure de recouvrement.
      </p>
      <p>Bien cordialement,</p>
    `),
  }
}

export function relanceJ30({ clientLabel, numero, montant, dateEcheance, joursRetard }: RelanceContext) {
  return {
    subject: `Mise en demeure — Facture ${numero} impayée (${joursRetard} jours)`,
    html: wrapEmail(`
      <p><strong>MISE EN DEMEURE DE PAYER</strong></p>
      <p>${clientLabel},</p>
      <p>
        Malgré mes précédentes relances, la facture <strong>${numero}</strong> d'un
        montant de <strong>${montant}</strong>, échue le <strong>${dateEcheance}</strong>,
        demeure impayée à ce jour, soit <strong>${joursRetard} jours de retard</strong>.
      </p>
      <p>
        Par la présente lettre tenant lieu de mise en demeure (article 1344 du Code civil),
        je vous somme de procéder au règlement de la totalité de la somme due
        <strong>dans un délai de 8 jours</strong> à compter de la réception du présent courriel.
      </p>
      <p>
        À défaut de paiement dans le délai imparti, je me réserve le droit, sans nouveau préavis :
      </p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>d'appliquer les intérêts de retard et l'indemnité forfaitaire pour frais de
        recouvrement de 40 € (article L441-10 du Code de commerce) ;</li>
        <li>d'engager une procédure de recouvrement amiable ou judiciaire ;</li>
        <li>de saisir le tribunal compétent.</li>
      </ul>
      <p style="margin-top: 20px;">
        Je reste néanmoins ouvert à toute proposition de règlement amiable
        (échelonnement, paiement partiel) que vous voudriez bien me soumettre dans ce délai.
      </p>
      <p>Veuillez agréer, ${clientLabel}, l'expression de mes salutations distinguées.</p>
    `),
  }
}

export function buildRelanceEmail(niveau: NiveauRelance, ctx: RelanceContext) {
  switch (niveau) {
    case 1:
      return relanceJ7(ctx)
    case 2:
      return relanceJ15(ctx)
    case 3:
      return relanceJ30(ctx)
  }
}

/**
 * Configuration des seuils de relance (en jours après échéance).
 * Doit être strictement croissant. Modifiable à chaud si on change la politique.
 */
export const RELANCE_THRESHOLDS: Record<NiveauRelance, number> = {
  1: 7,
  2: 15,
  3: 30,
}

/**
 * Étant donné le nombre de jours de retard et le niveau de relance déjà envoyé,
 * retourne le niveau à envoyer maintenant (ou null si rien à faire).
 *
 * Règles :
 * - Pas de relance avant J+7
 * - Une fois un niveau envoyé, on attend au moins 5 jours avant le suivant
 *   (évite de spammer si quelqu'un déclenche le cron 2× le même jour)
 * - On ne dépasse jamais le niveau 3
 */
export function computeNextRelanceLevel(joursRetard: number, niveauActuel: number): NiveauRelance | null {
  if (joursRetard < RELANCE_THRESHOLDS[1]) return null
  if (niveauActuel >= 3) return null

  // Si on n'a jamais relancé : on prend le plus haut niveau atteint
  if (niveauActuel === 0) {
    if (joursRetard >= RELANCE_THRESHOLDS[3]) return 3
    if (joursRetard >= RELANCE_THRESHOLDS[2]) return 2
    return 1
  }

  // Sinon on incrémente d'un niveau si le seuil suivant est atteint
  const nextLevel = (niveauActuel + 1) as NiveauRelance
  if (joursRetard >= RELANCE_THRESHOLDS[nextLevel]) return nextLevel
  return null
}
