import Link from 'next/link';
import TimelineMethode from '@/components/ui/TimelineMethode';
import FAQJsonLd from '@/components/seo/FAQJsonLd';

const FAQ_METHODE = [
  {
    question: 'Combien de temps faut-il pour démarrer ?',
    answer:
      "Moins de 2 semaines en moyenne entre la signature et la mise en route effective. Premier appel découverte (J0, 30 min), envoi de la proposition (J+1 à J+3), signature (J+4 à J+7), audit rapide de votre existant et accès aux outils (J+8 à J+10), démarrage opérationnel (J+10 à J+14). La mise en route est incluse dans les heures du pack — pas facturée à part.",
  },
  {
    question: 'Comment je vous transmets les informations au quotidien ?',
    answer:
      "Par vocal, photo ou message WhatsApp. Vous n'avez aucun logiciel à apprendre. Pendant un chantier ou un RDV client, vous m'envoyez un vocal de 1-2 minutes (« remplacement chauffe-eau 200L chez Mme Dupont, environ 1 200€, RDV mardi prochain »). Je crée le devis ou la facture dans l'heure qui suit. Réponse garantie sous 4h en jour ouvré.",
  },
  {
    question: 'Quels outils utilisez-vous ?',
    answer:
      "Les vôtres. Si vous avez Pennylane, je travaille dans Pennylane. Si vous utilisez Sage, EBP, Excel ou même papier, je m'adapte. Je n'impose aucun outil et je ne facture pas d'abonnement caché. Si vous n'avez encore aucun outil de facturation conforme PDP 2026-2027, je vous oriente sur le bon choix — sans commission ni partenariat.",
  },
  {
    question: 'Comment ça marche pour les accès à mes outils ?',
    answer:
      "Vous me créez un accès dédié à mon nom dans vos outils (utilisateur OptiPro). Vous gardez la propriété complète de votre compte et pouvez révoquer l'accès en 1 clic à tout moment. NDA signé sur simple demande. Conformité RGPD : toutes vos données restent hébergées en Europe.",
  },
  {
    question: 'À quoi ressemble la communication mensuelle ?',
    answer:
      "Trois canaux. WhatsApp pour le quotidien (vocaux, photos, urgences) avec réponse sous 4h. Email pour les pièces jointes formelles (devis, factures, dossiers). Une visio bilan mensuelle de 30 minutes pour faire le point : heures consommées par tâche, résultats du mois, ajustements pour le mois suivant. Pas de réunion inutile, pas de reporting cosmétique.",
  },
  {
    question: 'Et si mes besoins changent en cours de route ?',
    answer:
      "Vous montez ou descendez de pack quand vous voulez, avec un préavis de 15 jours fin de mois. Si vous dépassez ponctuellement votre pack (un mois isolé), les heures supplémentaires sont facturées à 75€/h HT. Si vous dépassez régulièrement (>20% pendant 2 mois consécutifs), je vous propose de passer au pack supérieur. À l'inverse, si vous sous-consommez 2 mois de suite, on bascule au pack inférieur. Pas de surfacturation cachée.",
  },
];

export default function MethodeClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      <FAQJsonLd faq={FAQ_METHODE} />

      {/* HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Comment ça se passe en vrai.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Du jour 1 au quotidien — voilà à quoi ressemble travailler avec moi.
        </p>
      </section>

      {/* RÉPONSE DIRECTE (pour LLM/AI Overviews) */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <div style={{
          padding: '2rem 2.25rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
          lineHeight: 1.75,
          color: 'var(--secondary)',
          fontSize: '1.05rem',
        }}>
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--primary)' }}>La méthode OptiPro</strong> repose sur trois principes : utiliser vos outils existants (pas d&apos;outil à apprendre), transmettre par WhatsApp (vocal, photo, message), recevoir un livrable structuré sous 1h. La mise en route prend moins de 2 semaines : appel découverte gratuit, audit de votre existant, accès dédiés à vos outils, premier RDV de cadrage. Au quotidien, vous m&apos;envoyez vos demandes via WhatsApp, je traite avec une réponse sous 4h en jour ouvré. Visio bilan mensuelle de 30 minutes avec reporting détaillé des heures par tâche. Période d&apos;essai 30 jours sans frais, préavis 15 jours fin de mois ensuite. Vos données restent votre propriété, exportables à tout moment.
          </p>
        </div>
      </section>

      {/* TIMELINE 3 ÉTAPES (existant) */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <TimelineMethode />
      </section>

      {/* J1 à J30 — Mise en route détaillée */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          La mise en route en détail
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          De votre premier appel à votre premier devis envoyé — 14 jours maximum, sans rien à faire de votre côté à part répondre à 2-3 questions.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            {
              day: 'J0',
              title: 'Appel découverte (30 min, gratuit)',
              desc: "On parle de votre activité : volume de devis et factures, type de clients, outils actuels, irritants quotidiens. Je vous dis honnêtement si on est faits pour bosser ensemble. Si oui, je vous envoie une proposition adaptée sous 24h. Aucun engagement à ce stade.",
            },
            {
              day: 'J+1 à J+5',
              title: 'Proposition et signature',
              desc: "Proposition par email avec le pack recommandé, le périmètre exact, les modalités. Devis signé en ligne. Pas d'aller-retour, pas de jargon contractuel inutile. Période d'essai 30 jours active dès la signature.",
            },
            {
              day: 'J+5 à J+8',
              title: 'Audit rapide de votre existant',
              desc: "Je passe en revue vos outils actuels, vos modèles de devis et factures, votre base clients/fournisseurs, votre fichier de relances en cours (s'il existe), votre dossier comptable du dernier mois. Je note ce qui peut être amélioré, sans rien changer encore. Vous recevez une synthèse écrite.",
            },
            {
              day: 'J+8 à J+10',
              title: 'Accès aux outils + premier RDV de cadrage',
              desc: "Vous me créez un accès dédié à mon nom dans vos outils (Pennylane, Sage, Excel, etc.). RDV en visio de 30 min pour caler les conventions : ton des emails clients, fréquence des relances, format des bilans mensuels, urgences vs non-urgences. Toutes vos préférences sont documentées dans une note interne OptiPro.",
            },
            {
              day: 'J+10 à J+14',
              title: 'Premier devis ou facture envoyé sous 1h',
              desc: "Vous m'envoyez votre premier vocal WhatsApp depuis un chantier ou un RDV. Je produis le devis ou la facture structuré et je vous l'envoie pour validation avant transmission au client. À partir de là, je peux envoyer directement sans validation préalable (vous pouvez préférer la double validation au début, c'est libre).",
            },
            {
              day: 'J+30',
              title: 'Bilan du premier mois',
              desc: "Visio de 30 min : ce qui a été fait, ce qui a fonctionné, ce qui peut être amélioré. Vous pouvez à ce stade arrêter sans préavis ni frais (période d'essai 30 jours), continuer comme prévu, monter ou descendre de pack. Vous décidez en connaissance de cause.",
            },
          ].map((step) => (
            <article key={step.day} style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: '1.5rem',
              padding: '1.5rem 1.75rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              alignItems: 'flex-start',
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  padding: '0.4rem 0.75rem',
                  background: 'rgba(249, 115, 22, 0.08)',
                  border: '1px solid rgba(249, 115, 22, 0.25)',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                }}>
                  {step.day}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* UNE SEMAINE TYPE avec OptiPro */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Une semaine type avec OptiPro
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          Exemple concret sur un Pack Croissance (20h/mois). Votre rôle est minimal — la majeure partie se passe en arrière-plan.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              day: 'Lundi',
              title: 'Démarrage de semaine',
              tasks: [
                'Vous : 3 vocaux WhatsApp depuis vos RDV du matin (chantiers à devis)',
                'OptiPro : 3 devis structurés envoyés aux clients dans la matinée',
                'OptiPro : relance des factures arrivées à J+15 (envoi automatique des emails de relance)',
                'OptiPro : pointage des encaissements du week-end (banque + Pennylane)',
              ],
            },
            {
              day: 'Mardi à jeudi',
              title: 'Rythme normal',
              tasks: [
                'Vous : 5-8 vocaux WhatsApp par jour (devis + factures + petits ajustements)',
                'OptiPro : production en flux continu, devis/factures envoyés sous 1h',
                'OptiPro : suivi des commandes fournisseurs en cours (relance livraisons)',
                'OptiPro : classement des frais (tickets de caisse, factures essence, achats matériel)',
              ],
            },
            {
              day: 'Vendredi',
              title: 'Préparation du week-end',
              tasks: [
                'OptiPro : relance des factures arrivées à J+30 et J+45',
                'OptiPro : checkpoint trésorerie de la semaine envoyé par WhatsApp (vue rapide)',
                'OptiPro : préparation des devis pour les RDV du lundi matin (si brief le jeudi)',
                'Vous : vous attaquez le week-end l\'esprit tranquille',
              ],
            },
            {
              day: '1er du mois',
              title: 'Bilan mensuel',
              tasks: [
                'OptiPro : dossier comptable du mois précédent finalisé et envoyé à votre comptable',
                'OptiPro : reporting mensuel : heures consommées par tâche, factures éditées, impayés rattrapés, trésorerie',
                'Visio bilan 30 min : ce qui a été fait, ce qui peut être amélioré, ajustements pour le mois suivant',
                'Vous : vous savez exactement où va l\'argent et le temps',
              ],
            },
          ].map((day) => (
            <article key={day.day} style={{
              padding: '1.75rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.75rem',
                  background: 'var(--accent)',
                  color: 'var(--on-accent)',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  {day.day}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  {day.title}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {day.tasks.map((task, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: 1.5 }}>
                    <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* WORKFLOW VOCAL-TO-DEVIS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Le workflow vocal → devis (le cœur de la méthode)
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '640px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          C&apos;est ce qui fait gagner 80% du temps. Vous parlez, je produis. Voilà comment.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            {
              step: '1',
              title: 'Vous envoyez un vocal WhatsApp depuis le chantier',
              desc: "1 à 2 minutes maximum. Pas besoin de structure, vous parlez naturellement. Exemple : « Madame Dupont rue Marceau à Cannes, remplacement chauffe-eau gaz 200L par un thermodynamique, on inclut la dépose, l'évacuation de l'ancien, raccordement, mise en service. Environ 3 800€ HT, intervention prévue mardi de la semaine prochaine. »",
            },
            {
              step: '2',
              title: 'Je reçois sous 4h en jour ouvré (souvent sous 30 min)',
              desc: "J'écoute le vocal, je structure mentalement le devis. Si j'ai des questions précises (référence exacte du chauffe-eau, options spécifiques, mode de paiement souhaité), je vous renvoie un vocal court sous 30 minutes. Sinon, je passe directement à l'étape 3.",
            },
            {
              step: '3',
              title: 'Je produis le devis dans votre outil',
              desc: "Devis structuré avec : intitulé clair, désignation des prestations (matériel + main d'œuvre + déplacement), quantités, prix HT et TTC selon votre régime de TVA, mentions légales obligatoires, conditions de paiement, validité du devis (typiquement 30 jours), conformité PDP 2026-2027.",
            },
            {
              step: '4',
              title: 'Validation client (avec ou sans votre relecture)',
              desc: "Si vous voulez relire avant envoi : je vous envoie le devis en WhatsApp, vous validez d'un mot, je l'envoie. Si vous me faites confiance : je l'envoie directement au client. La majorité de mes clients passent en mode confiance après les 5-10 premiers devis.",
            },
            {
              step: '5',
              title: 'Envoi au client avec signature en ligne',
              desc: "Le client reçoit le devis par email, peut le signer en ligne (Pennylane, Yousign, ou autre selon votre outil). Notification automatique dès signature. Délai moyen entre votre vocal et le devis signé par le client : 1h pour la production + 4h-72h pour la signature client selon leur réactivité.",
            },
          ].map((s) => (
            <article key={s.step} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: '1.5rem',
              padding: '1.5rem 1.75rem',
              background: 'rgba(249, 115, 22, 0.04)',
              border: '1px solid rgba(249, 115, 22, 0.15)',
              borderRadius: '1rem',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent)',
                color: 'var(--on-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
              }}>
                {s.step}
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
                  {s.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIVRABLES MENSUELS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 3rem' }}>
          Ce que vous recevez chaque mois
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              icon: '📋',
              title: 'Dossier comptable mensuel',
              desc: "Livré à votre expert-comptable avant le 5 du mois suivant : FEC à jour, factures clients et fournisseurs classées, frais OCR-isés, rapprochement bancaire fait. Votre comptable gagne du temps, vous économisez sur ses honoraires.",
            },
            {
              icon: '📊',
              title: 'Reporting d\'activité',
              desc: "Synthèse mensuelle : heures consommées par tâche (devis, facturation, relances, fournisseurs, comptable), nombre de devis émis et signés, factures éditées, impayés rattrapés, état de la trésorerie.",
            },
            {
              icon: '💰',
              title: 'Point trésorerie',
              desc: "Vue claire des encaissements et décaissements du mois, du solde courant, des impayés en cours, des relances faites. Pas un tableau Excel illisible — une page synthétique lisible en 5 minutes.",
            },
            {
              icon: '🗓️',
              title: 'Visio bilan (30 min)',
              desc: "Visio en fin de mois pour passer en revue les résultats, identifier ce qui a bien marché et ce qui peut être amélioré, ajuster les priorités du mois suivant. Pas de réunion inutile — toujours actionnable.",
            },
            {
              icon: '✅',
              title: 'État des actions en cours',
              desc: "Liste des dossiers en attente : devis envoyés et non signés (avec relances prévues), factures émises et non payées (avec calendrier de relance), commandes fournisseurs en attente, points à valider de votre côté.",
            },
            {
              icon: '🚨',
              title: 'Alertes proactives',
              desc: "Si je détecte un risque (impayé qui s'éternise, fournisseur qui prend du retard, marge anormale sur un chantier), je vous alerte par WhatsApp avant la fin du mois. Pas d'attente du bilan pour réagir.",
            },
          ].map((item) => (
            <article key={item.title} style={{
              padding: '1.75rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <span aria-hidden="true" style={{ fontSize: '2rem', lineHeight: 1 }}>{item.icon}</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.55, fontSize: '0.95rem' }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* VOS OUTILS, RIEN DE NOUVEAU À APPRENDRE (existant) */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Vos outils, rien de nouveau à apprendre
          </h2>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Vous n&apos;apprenez rien. C&apos;est moi qui m&apos;adapte à vos outils.
          </p>
        </div>
        <ul role="list" style={{ listStyle: 'none', padding: 0, margin: '0 auto 3rem', maxWidth: '620px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>WhatsApp</strong> : vous l&apos;avez déjà sur votre téléphone</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>Vos outils existants</strong> (Pennylane, Sage, EBP, Excel) : je m&apos;y connecte, vous n&apos;y touchez rien</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>Reporting mensuel</strong> : envoyé par email, lisible en 5 minutes</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>Visio bilan mensuelle (30 min)</strong> : Zoom, Google Meet ou Whereby selon votre préférence</span>
          </li>
        </ul>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6, fontStyle: 'italic' }}>
          Pas de logiciel à installer. Pas de tutoriel à regarder. Pas de tableau Excel à maintenir.
        </p>
      </section>

      {/* COMMENT JE PEUX FAIRE MIEUX POUR MOINS CHER (existant) */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{
          padding: '2.5rem',
          background: 'rgba(249, 115, 22, 0.05)',
          border: '1px solid rgba(249, 115, 22, 0.2)',
          borderRadius: '1.25rem',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.5rem' }}>
            Et moi, comment je bosse ?
          </h2>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Voilà comment je peux faire mieux pour moins cher.</strong>
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
            10 ans d&apos;expérience en pilotage d&apos;exploitation et de logistique me permettent d&apos;aller vite sur ce qui freine les TPE : l&apos;organisation, les processus, le pilotage.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
            Là où un assistant junior passe 1h, je passe 15 minutes. Là où une agence facture un audit à 3 000€, j&apos;écoute et je fais.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            Pas de magie. Pas d&apos;outil miracle. Juste 10 ans à voir tomber les mêmes problèmes et à trouver les bonnes solutions.
          </p>
          <Link href="/pourquoi-ce-prix" style={{
            display: 'inline-block',
            color: 'var(--accent)',
            fontWeight: 600,
            textDecoration: 'underline',
          }}>
            En savoir plus →
          </Link>
        </div>
      </section>

      {/* FAQ MÉTHODE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Questions fréquentes sur la méthode
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {FAQ_METHODE.map((item) => (
            <article key={item.question} style={{
              padding: '1.5rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.75rem' }}>
                {item.question}
              </h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.65 }}>
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ET SI JE NE SUIS PAS SATISFAIT ? (existant) */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{
          padding: '2rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
            Et si je ne suis pas satisfait ?
          </h2>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Aucun engagement long.</strong>
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            <li><strong>Période d&apos;essai 30 jours</strong> : vous ou moi pouvons arrêter sans préavis ni frais. Seules les heures effectuées sont facturées (75€/h HT), plafonnées au prix du pack initial.</li>
            <li><strong>Au-delà des 30 jours</strong> : préavis 15 jours fin de mois. Vous gardez la main.</li>
            <li><strong>Mission à l&apos;heure</strong> : aucun engagement. Vous payez ce qui a été fait, vous arrêtez quand vous voulez.</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            Vos données restent les vôtres, exportables à tout moment.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Vous voulez voir si on est faits pour bosser ensemble ?
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          30 minutes en visio, gratuit, sans engagement.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: 'var(--primary)',
          color: 'var(--on-primary)',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.05rem',
        }}>
          Réserver mon appel découverte (gratuit)
        </Link>
      </section>
    </main>
  );
}
