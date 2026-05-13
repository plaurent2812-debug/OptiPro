import Link from 'next/link';

export default function PourquoiClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* SECTION 1 — HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Pourquoi 75€/h. Le calcul honnête.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          La question que tout le monde me pose, et la réponse complète. Sans bullshit.
        </p>
      </section>

      {/* SECTION 2 — D'OÙ JE VIENS */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Mon parcours en 3 lignes
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Pendant 10 ans, j&apos;ai été responsable d&apos;exploitation et de méthodes en logistique. J&apos;ai piloté des équipes, des flux, des outils. Côté employeur, ce profil coûte aujourd&apos;hui environ 7 000€/mois charges patronales comprises.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          J&apos;ai aimé le métier. Mais j&apos;ai voulu arrêter de manager des équipes pour me concentrer sur ce que je préfère : optimiser, automatiser, livrer du résultat opérationnel.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          J&apos;ai créé OptiPro pour proposer ce même savoir-faire — l&apos;admin opérationnelle d&apos;une vraie boîte — aux artisans et TPE qui n&apos;ont pas les moyens d&apos;un salarié à 7 000€.
        </p>
      </section>

      {/* SECTION 3 — POURQUOI 80€ ET PAS 150€ */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Pourquoi 75€ et pas 150€
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Le marché du conseil opérationnel se découpe ainsi :
        </p>
        <ul style={{ color: 'var(--secondary)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li>Consultant en cabinet : <strong>150-300€/h</strong></li>
          <li>Cadre indépendant senior reconnu : <strong>100-150€/h</strong></li>
          <li>Moi (responsable d&apos;exploitation indépendant en démarrage) : <strong>75€/h</strong></li>
          <li>Assistant·e administratif·ve indépendant·e : <strong>45-60€/h</strong></li>
        </ul>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          75€/h, c&apos;est mon tarif d&apos;entrée. Il reflète mon expérience (10 ans en pilotage d&apos;exploitation) sans gonfler artificiellement par mon ancienneté en tant qu&apos;indépendant.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          Quand mes témoignages s&apos;accumulent et que ma réputation grandit, ce tarif évoluera. C&apos;est le bon moment pour me prendre — j&apos;ai l&apos;expérience d&apos;un cadre senior au tarif d&apos;un indépendant qui démarre.
        </p>
      </section>

      {/* SECTION 4 — POURQUOI C'EST DURABLE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Pourquoi c&apos;est durable
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Beaucoup de prestataires cassent leurs prix au démarrage pour vous attraper, puis montent progressivement.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem', fontWeight: 600 }}>
          Pas moi.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Le tarif 75€/h tient parce que :
        </p>
        <ul style={{ color: 'var(--secondary)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li>Je n&apos;ai pas de bureau, pas d&apos;équipe à payer, pas de loyer commercial</li>
          <li>Je suis en franchise TVA donc 0€ de TVA à reverser</li>
          <li>Je travaille à distance — pas de déplacement à facturer</li>
          <li>Je me limite à 8-10 clients pour rester réactif et qualitatif</li>
        </ul>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          <strong style={{ color: 'var(--primary)' }}>Mon objectif :</strong> 8-10 clients fidèles à long terme. Pas 50 clients qui partent après 6 mois.
        </p>
      </section>

      {/* SECTION 5 — POURQUOI UN COMPTABLE NE PEUT PAS FAIRE ÇA */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Pourquoi un comptable ne peut pas faire ça
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Un comptable est un expert réglementé. Il certifie vos comptes annuels, fait votre liasse fiscale, vous conseille sur la TVA et l&apos;optimisation fiscale. <strong>Son métier n&apos;est pas l&apos;admin opérationnelle quotidienne.</strong>
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          Un comptable qui ferait du devis-facturation au quotidien serait :
        </p>
        <ul style={{ color: 'var(--secondary)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li>Beaucoup trop cher (formé à 5 ans d&apos;études)</li>
          <li>Hors-cœur de métier</li>
          <li>Probablement moins rapide qu&apos;un opérationnel</li>
        </ul>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          Je suis l&apos;opérationnel. Lui est le certificateur. Mon dossier mensuel propre lui fait gagner du temps sur sa vraie expertise. <strong style={{ color: 'var(--primary)' }}>Tout le monde y gagne.</strong>
        </p>
      </section>

      {/* SECTION 6 — POURQUOI JE LIMITE À 8-10 CLIENTS */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Pourquoi je limite à 8-10 clients
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Plus de 10 clients, et je deviens un centre d&apos;appel. Vos vocaux attendent, vos relances tombent en retard, vos visios bilans deviennent expédiées.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          J&apos;ai vu trop de prestataires admin se laisser déborder. <strong>Je préfère gagner moins en étant excellent qu&apos;empiler les clients en étant moyen.</strong>
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          Quand mes 10 places sont prises, j&apos;ouvre une liste d&apos;attente. Pas de raccourci.
        </p>
      </section>

      {/* SECTION 7 — CTA FINAL DOUBLE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Convaincu ? Bloquons un créneau.
        </h2>
        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: 'var(--primary)',
          color: 'var(--on-primary)',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.05rem',
          marginBottom: '2.5rem',
        }}>
          Réserver mon appel découverte (gratuit, 30 min)
        </Link>
        <p style={{ color: 'var(--secondary)', marginTop: '1.5rem', marginBottom: '1rem' }}>
          Pas convaincu ? Posez vos questions.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          color: 'var(--accent)',
          fontWeight: 600,
          textDecoration: 'underline',
          fontSize: '1rem',
        }}>
          Me contacter
        </Link>
      </section>
    </main>
  );
}
