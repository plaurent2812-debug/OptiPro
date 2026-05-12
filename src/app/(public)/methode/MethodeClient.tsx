import Link from 'next/link';
import TimelineMethode from '@/components/ui/TimelineMethode';

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

      {/* TIMELINE 3 ÉTAPES */}
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
            <span><strong style={{ color: 'var(--primary)' }}>Vos outils existants</strong> (Pennylane, Sage, Excel) : je m&apos;y connecte, vous n&apos;y touchez rien</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
            <span><strong style={{ color: 'var(--primary)' }}>Reporting mensuel</strong> : envoyé par email, lisible en 5 minutes</span>
          </li>
        </ul>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6, fontStyle: 'italic' }}>
          Pas de logiciel à installer. Pas de tutoriel à regarder. Pas de tableau Excel à maintenir.
        </p>
      </section>

      {/* COMMENT JE PEUX FAIRE MIEUX POUR MOINS CHER */}
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

      {/* ET SI JE NE SUIS PAS SATISFAIT ? */}
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
            <li><strong>Mission à l&apos;heure</strong> : pas d&apos;engagement. Vous payez ce qui a été fait, et vous arrêtez quand vous voulez.</li>
            <li><strong>Pack mensuel</strong> : reconductible tacitement, préavis 15 jours fin de mois. Vous gardez la main.</li>
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
