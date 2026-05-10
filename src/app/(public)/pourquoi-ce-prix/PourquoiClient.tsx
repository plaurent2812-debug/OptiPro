import Link from 'next/link';
import AutomatedVsHuman from '@/components/ui/AutomatedVsHuman';

export default function PourquoiClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* SECTION 1 — HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Pourquoi je peux faire ça à 750€/mois.
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

      {/* SECTION 3 — POURQUOI 750€ ET PAS 2 500€ */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Pourquoi 750€ et pas 2 500€
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Une assistante mi-temps salariée vous coûte ~2 300€/mois charges comprises, pour ~80h de travail. Soit ~29€/h.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          Sur ces 80h, combien sont vraiment productives ? Combien sont passées à :
        </p>
        <ul style={{ color: 'var(--secondary)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li>Saisir manuellement des tickets de caisse</li>
          <li>Recopier des devis depuis un vocal</li>
          <li>Vérifier des numérotations</li>
          <li>Relancer un client par email</li>
          <li>Préparer un export Excel pour le comptable</li>
        </ul>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Ces tâches, je les ai automatisées. Mon outil interne fait ce travail répétitif tout seul, ou en 1/10e du temps.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          <strong style={{ color: 'var(--primary)' }}>Résultat :</strong> je gère 8 à 10 clients en parallèle au lieu d&apos;un seul. C&apos;est ce qui me permet de proposer 750€ par client tout en restant rentable.
        </p>
      </section>

      {/* SECTION 4 — AUTOMATISÉ vs HUMAIN */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 0.75rem' }}>
          La séparation des rôles
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Concrètement, voilà ce que fait l&apos;outil et ce que je fais moi.
        </p>
        <AutomatedVsHuman />
        <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.95rem', maxWidth: '620px', margin: '2.5rem auto 0', lineHeight: 1.65, fontStyle: 'italic' }}>
          Les 30% restants, c&apos;est ce qui fait la différence entre un service automatique sans âme et un vrai partenaire qui pense pour vous.
        </p>
      </section>

      {/* SECTION 5 — POURQUOI C'EST DURABLE */}
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
          Le tarif 750€/mois est le tarif de croisière. Il tient parce que :
        </p>
        <ul style={{ color: 'var(--secondary)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li>Mon infrastructure cloud est légère (pas de bureau, pas de serveurs propres)</li>
          <li>Plus j&apos;ai de clients, plus mon outil s&apos;améliore (les automatismes profitent à tous)</li>
          <li>Je n&apos;ai pas d&apos;équipe à payer, pas de loyer commercial</li>
          <li>Je suis en franchise TVA donc 0€ de TVA à reverser</li>
        </ul>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          <strong style={{ color: 'var(--primary)' }}>Mon objectif :</strong> 8-10 clients fidèles à long terme. Pas 50 clients qui partent après 6 mois.
        </p>
      </section>

      {/* SECTION 6 — POURQUOI UN COMPTABLE NE PEUT PAS FAIRE ÇA */}
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

      {/* SECTION 7 — POURQUOI JE LIMITE À 8-10 CLIENTS */}
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

      {/* SECTION 8 — CTA FINAL DOUBLE */}
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
