import { Resend } from 'resend'

/**
 * Module d'envoi d'emails centralisé via Resend.
 *
 * Utilisé par :
 * - src/app/api/contact/route.ts (formulaire de contact site public)
 * - src/app/api/cron/relances-impayes/route.ts (relances automatiques)
 *
 * En l'absence de RESEND_API_KEY, on log l'envoi en dev sans planter.
 * En prod, l'absence de clé est une erreur de configuration.
 */

export const MAIL_FROM_OPTIPRO = 'OptiPro <p.laurent@opti-pro.fr>'
export const MAIL_REPLY_TO = 'p.laurent@opti-pro.fr'

interface SendMailParams {
  to: string | string[]
  subject: string
  html: string
  /** Si omis, par défaut MAIL_REPLY_TO. */
  replyTo?: string
  /** Si omis, par défaut MAIL_FROM_OPTIPRO. */
  from?: string
}

export interface SendMailResult {
  ok: boolean
  id?: string
  error?: string
  /** True si on a simulé l'envoi (dev sans clé API). */
  simulated?: boolean
}

let cachedClient: Resend | null = null

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey === 'placeholder') return null
  if (!cachedClient) cachedClient = new Resend(apiKey)
  return cachedClient
}

export async function sendMail(params: SendMailParams): Promise<SendMailResult> {
  const client = getResendClient()

  if (!client) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[mailer] DEV simulation:', {
        to: params.to,
        subject: params.subject,
      })
      return { ok: true, simulated: true }
    }
    return { ok: false, error: 'RESEND_API_KEY manquante ou invalide' }
  }

  try {
    const { data, error } = await client.emails.send({
      from: params.from ?? MAIL_FROM_OPTIPRO,
      to: Array.isArray(params.to) ? params.to : [params.to],
      replyTo: params.replyTo ?? MAIL_REPLY_TO,
      subject: params.subject,
      html: params.html,
    })

    if (error) {
      console.error('[mailer] Resend error:', error)
      return { ok: false, error: error.message }
    }

    return { ok: true, id: data?.id }
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Erreur inconnue'
    console.error('[mailer] crash:', msg)
    return { ok: false, error: msg }
  }
}
