import Link from 'next/link';
import TimelineMethode from '@/components/ui/TimelineMethode';
import MockupTableauDeBord from '@/components/ui/MockupTableauDeBord';

export default function MethodeClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Comment ça se passe en vrai.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Du jour 1 au quotidien — voilà à quoi ressemble travailler avec moi.
        </p>
      </section>

      {/* TIMELINE 4 ÉTAPES */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <TimelineMethode />
      </section>

      {/* VOS OUTILS, RIEN DE NOUVEAU À APPRENDRE */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Vos outils, rien de nouveau à apprendre
          </h2>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Vous n&apos;apprenez rien. C&apos;est moi qui m&apos;adapte.
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 3rem', maxWidth: '620px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>WhatsApp</strong> : vous l&apos;avez déjà sur votre téléphone</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>Tableau de bord</strong> : un lien à mettre en favori, c&apos;est tout</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>Notif Telegram ou Push</strong> : à votre choix</span>
          </li>
        </ul>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.6, fontStyle: 'italic' }}>
          Pas de logiciel à installer. Pas de tutoriel à regarder. Pas de tableau Excel à maintenir.
        </p>
        <MockupTableauDeBord />
      </section>

      {/* COMMENT JE PEUX FAIRE MIEUX POUR MOINS CHER */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <article style={{
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
            J&apos;ai construit un outil interne qui automatise 70% du travail répétitif :
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li>Reconnaissance auto des tickets de caisse</li>
            <li>Devis générés à partir d&apos;un vocal</li>
            <li>Synchronisation directe avec Pennylane</li>
            <li>Relances factures envoyées toutes seules</li>
            <li>Dossier comptable préparé automatiquement</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            Les 30% restants, c&apos;est moi. Avec mon expérience de 10 ans en logistique et exploitation. C&apos;est cette part-là qui fait la vraie différence : un humain qui pense, qui anticipe, qui prend des décisions à votre place quand il faut.
          </p>
          <Link href="/pourquoi-ce-prix" style={{
            display: 'inline-block',
            color: 'var(--accent)',
            fontWeight: 600,
            textDecoration: 'underline',
          }}>
            En savoir plus →
          </Link>
        </article>
      </section>

      {/* ET SI JE NE SUIS PAS SATISFAIT ? */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <article style={{
          padding: '2rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
            Et si je ne suis pas satisfait ?
          </h2>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Le M1 est un mois test.</strong>
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            À l&apos;issue, deux options :
          </p>
          <ul style={{ color: 'var(--secondary)', lineHeight: 1.65, paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            <li><strong>Vous arrêtez.</strong> Pas de frais, pas de discussion. Je vous renvoie tous vos historiques propres.</li>
            <li><strong>Vous continuez.</strong> Cycle de 3 mois renouvelable. Résiliable à chaque date anniversaire avec 1 mois de préavis.</li>
          </ul>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            Vos données restent les vôtres, exportables à tout moment.
          </p>
        </article>
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
