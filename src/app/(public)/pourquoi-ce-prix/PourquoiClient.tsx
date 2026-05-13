import Link from 'next/link';
import FAQJsonLd from '@/components/seo/FAQJsonLd';

const FAQ_POURQUOI_CE_PRIX = [
  {
    question: 'Pourquoi 75€/h et pas moins ?',
    answer: "Parce que je propose un profil cadre senior (10 ans en pilotage d'exploitation logistique), pas un profil d'exécution. Un assistant administratif indépendant à 45-60€/h fait de l'exécution. Moi, je fais de l'exécution + de la structuration + de l'anticipation des problèmes opérationnels. La différence se voit dès le premier mois sur la qualité de votre dossier comptable et sur les impayés récupérés.",
  },
  {
    question: 'Pourquoi pas 150€/h comme un consultant en cabinet ?',
    answer: "Un consultant en cabinet a un loyer commercial, une équipe à payer, une TVA à reverser et des frais de structure considérables. Moi, je suis indépendant, sans bureau payant, sans équipe, en franchise TVA. Je peux proposer un tarif 50% inférieur sans rogner sur la qualité du travail. C'est mathématique, pas du dumping.",
  },
  {
    question: 'Vos tarifs vont-ils augmenter dans 6 mois ?',
    answer: "Non. Le tarif 75€/h est mon tarif d'entrée durable, pas une promotion. Il évoluera quand ma réputation grandira et que mes témoignages s'accumuleront — probablement vers 90-100€/h dans 2-3 ans. Mais les clients existants gardent leur tarif initial sur la durée de leur engagement (clause de prix garantie 24 mois sur les packs).",
  },
  {
    question: 'Pourquoi pas un abonnement à 300€/mois illimité comme certains concurrents ?',
    answer: "Parce qu'un abonnement illimité oblige le prestataire à arbitrer entre ses clients quand ils demandent tous quelque chose en même temps. Vous devenez le client 7 sur 50. Avec un pack horaire dédié, vos heures vous appartiennent. Je travaille pour 8-10 clients maximum, ce qui garantit ma disponibilité réelle sous 4h en jour ouvré.",
  },
  {
    question: 'Y a-t-il des frais cachés (mise en route, déplacement, dépassement) ?',
    answer: "Non. La mise en route est incluse dans les premières heures du pack (pas facturée en plus). Les déplacements en zone PACA sont inclus. Les dépassements ponctuels sont facturés à 75€/h HT (pas une majoration cachée). Si vous dépassez régulièrement votre pack (>20% sur 2 mois), je vous propose de passer au pack supérieur — vous décidez.",
  },
  {
    question: 'C\'est moins cher qu\'embaucher un mi-temps salarié ?',
    answer: "Largement. Un mi-temps administratif à 1 800€ brut/mois coûte 2 300€/mois chargé à l'employeur (charges patronales). Ajoutez équipement, formation, congés payés, gestion RH, risque de turnover : on tourne facilement à 2 800€/mois équivalent. Le Pack Croissance OptiPro à 1 200€/mois fait la même chose (souvent mieux, car cadre senior) sans aucune charge, sans engagement long, avec préavis 15 jours.",
  },
];

export default function PourquoiClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      <FAQJsonLd faq={FAQ_POURQUOI_CE_PRIX} />

      {/* SECTION 1 — HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Pourquoi 75€/h. Le calcul honnête.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          La question que tout le monde me pose, et la réponse complète. Sans bullshit.
        </p>
      </section>

      {/* SECTION 1 BIS — RÉPONSE DIRECTE (pour LLM/AI Overviews) */}
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
            <strong style={{ color: 'var(--primary)' }}>Le tarif 75€/h HT</strong> d&apos;OptiPro se positionne entre l&apos;assistant administratif indépendant junior (45-60€/h, profil exécution) et le consultant en cabinet (150-300€/h, profil senior avec frais de structure). Il reflète 10 ans d&apos;expérience cadre en pilotage d&apos;exploitation logistique (Factory Top 150 Croissance 2023, BTP second œuvre, GL Events) appliqués au quotidien des artisans et TPE. Le tarif tient durablement parce qu&apos;OptiPro n&apos;a aucune charge de structure (pas de bureau, pas d&apos;équipe, franchise TVA, 100% à distance), se limite à 8-10 clients maximum pour garantir la qualité, et n&apos;applique aucun frais caché (mise en route incluse, déplacements PACA inclus, dépassements au tarif horaire).
          </p>
        </div>
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

      {/* SECTION 7 — POURQUOI UN PRIX BAS EST UN SIGNAL NÉGATIF */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Pourquoi se méfier d&apos;un prix trop bas
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          Quand vous voyez un assistant indépendant à 25-35€/h, posez-vous trois questions.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          <strong style={{ color: 'var(--primary)' }}>1. Quelle est son expérience réelle ?</strong> Sortir d&apos;une formation de 6 mois en bureautique ne forme pas à anticiper qu&apos;une facture sans bon de commande va bloquer un paiement de 8 000€ pendant 3 mois. Un cadre senior anticipe ces problèmes avant qu&apos;ils n&apos;arrivent. Un profil junior les découvre en même temps que vous, après le dégât.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          <strong style={{ color: 'var(--primary)' }}>2. Combien a-t-il de clients ?</strong> À 25€/h, pour vivre décemment (3 500€ net/mois minimum), il faut facturer environ 200h/mois soit 50h/semaine. Personne ne tient ce rythme avec attention sur la durée. Il va y avoir des oublis, des retards, des relances bâclées. Vous ne le verrez pas tout de suite, mais ça se paye en cumul.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--primary)' }}>3. Quelle est sa vision long terme ?</strong> Un prix de dumping signale souvent quelqu&apos;un qui démarre sans business model viable. Au bout de 12-18 mois, il augmente brutalement ses prix ou disparaît. Vous vous retrouvez à former un nouveau prestataire à votre fonctionnement, avec tout ce que ça implique de risques pendant la transition.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          75€/h est un tarif qui me permet de vivre correctement avec 8-10 clients, donc de rester focus, qualitatif et disponible pour vous sur la durée. C&apos;est un signal de stabilité, pas un signal de coût.
        </p>
      </section>

      {/* SECTION 8 — LE CALCUL ROI EN DÉTAIL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Le calcul ROI en détail
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          75€/h paraît cher si on regarde uniquement le tarif. Regardons ce que ça vous rapporte concrètement sur un Pack Croissance type (20h/mois, 1 200€).
        </p>
        <ul style={{ color: 'var(--secondary)', lineHeight: 1.7, paddingLeft: '1.25rem', marginBottom: '1rem' }}>
          <li><strong style={{ color: 'var(--primary)' }}>20h/mois récupérées sur l&apos;admin</strong> = 5h/semaine où vous facturez votre métier au lieu de faire de la paperasse. Si votre taux horaire facturable est de 50€/h (artisan moyen), c&apos;est 1 000€/mois de capacité de production en plus. À 80€/h (artisan spécialisé), c&apos;est 1 600€/mois.</li>
          <li><strong style={{ color: 'var(--primary)' }}>2 à 5k€/mois d&apos;impayés rattrapés.</strong> Les relances systématiques (J+15, J+30, J+45) récupèrent ce qui passait à la trappe entre deux chantiers. Sur des clients qu&apos;on ne relance pas, le taux d&apos;impayé moyen en BTP est de 8-12% — j&apos;ai vu des artisans ramener ce taux sous 2% en 3 mois.</li>
          <li><strong style={{ color: 'var(--primary)' }}>+15 à 25% de taux de signature</strong> sur les devis envoyés sous 1h. Le prospect qui appelle 3 plombiers pour un dépannage signe au premier qui répond avec un devis structuré. Sur un volume de 30 devis/mois, c&apos;est 4 à 7 chantiers supplémentaires.</li>
          <li><strong style={{ color: 'var(--primary)' }}>Heures comptable réduites.</strong> Un dossier mensuel propre (factures classées, frais OCR, FEC à jour) divise par 2 ou 3 le temps de votre expert-comptable. Sur des honoraires comptables typiques de 2 000-4 000€/an, l&apos;économie est de 500-1 500€/an.</li>
        </ul>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
          ROI mensuel typique sur un Pack Croissance : <strong style={{ color: 'var(--primary)' }}>2 500 à 5 000€ de gain net</strong> après déduction des 1 200€ du pack. Sur un Pack Pilotage (35h, 1 950€), le ROI grimpe à 4 000-8 000€ pour les TPE en croissance.
        </p>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
          Ces chiffres sont des moyennes observées sur les profils types accompagnés. Vos résultats dépendront de votre volume d&apos;activité, de votre taux horaire facturable et de votre taux d&apos;impayé actuel — on en parle en appel découverte.
        </p>
      </section>

      {/* SECTION 9 — FAQ */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 2rem' }}>
          Questions fréquentes sur le tarif
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {FAQ_POURQUOI_CE_PRIX.map((item) => (
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
        <p style={{ textAlign: 'center', color: 'var(--secondary)', marginTop: '2rem', fontSize: '0.95rem' }}>
          Voir aussi : <Link href="/tarifs" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>la grille tarifaire détaillée</Link>.
        </p>
      </section>

      {/* SECTION 10 — CTA FINAL DOUBLE */}
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
