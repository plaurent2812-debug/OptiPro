'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MISSION_PACKS, MISSION_HOURLY_RATE } from '@/data/pricing';

type Profile = 'artisan' | 'tpe' | 'freelance';

const PROFILE_DEFAULTS: Record<Profile, { hourlyRate: number; adminHours: number; impayesRate: number; description: string }> = {
  artisan: {
    hourlyRate: 55,
    adminHours: 8,
    impayesRate: 7,
    description: 'Plombier, électricien, peintre, maçon… Activité métier facturable à l\'heure.',
  },
  tpe: {
    hourlyRate: 70,
    adminHours: 12,
    impayesRate: 5,
    description: '3-10 salariés. Mix dirigeant + équipe, marge nette 15-25%.',
  },
  freelance: {
    hourlyRate: 80,
    adminHours: 5,
    impayesRate: 4,
    description: 'Consultant, agence, créatif indépendant. Activité B2B services.',
  },
};

function formatEuros(value: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function RoiCalculator() {
  const [profile, setProfile] = useState<Profile>('artisan');
  const [hourlyRate, setHourlyRate] = useState(PROFILE_DEFAULTS.artisan.hourlyRate);
  const [adminHours, setAdminHours] = useState(PROFILE_DEFAULTS.artisan.adminHours);
  const [monthlyRevenue, setMonthlyRevenue] = useState(12000);
  const [impayesRate, setImpayesRate] = useState(PROFILE_DEFAULTS.artisan.impayesRate);

  const handleProfileChange = (newProfile: Profile) => {
    setProfile(newProfile);
    const defaults = PROFILE_DEFAULTS[newProfile];
    setHourlyRate(defaults.hourlyRate);
    setAdminHours(defaults.adminHours);
    setImpayesRate(defaults.impayesRate);
  };

  // Calculs ROI
  const calculations = useMemo(() => {
    // 1. Capacité de production récupérée
    // Hypothèse : 70% des heures admin libérées sont effectivement converties en heures facturables
    const adminHoursPerMonth = adminHours * 4;
    const billableHoursRecovered = Math.round(adminHoursPerMonth * 0.7);
    const revenueRecovered = billableHoursRecovered * hourlyRate;

    // 2. Impayés rattrapés
    // Hypothèse : passage de impayesRate% à 1% grâce aux relances systématiques
    const targetImpayesRate = 1;
    const impayesRecovered = Math.round(
      ((impayesRate - targetImpayesRate) / 100) * monthlyRevenue
    );

    // 3. CA additionnel via devis rapides
    // Hypothèse : +15% taux de signature sur 30% du CA qui passe par devis
    const ca_via_devis = monthlyRevenue * 0.5;
    const additionalSignatureRate = 0.15;
    const additionalRevenue = Math.round(ca_via_devis * additionalSignatureRate);

    // Pack recommandé selon volume admin
    let recommendedPack;
    if (adminHours <= 5) {
      recommendedPack = MISSION_PACKS[0]; // Essentiel
    } else if (adminHours <= 10) {
      recommendedPack = MISSION_PACKS[1]; // Croissance
    } else {
      recommendedPack = MISSION_PACKS[2]; // Pilotage
    }

    const totalGain = revenueRecovered + impayesRecovered + additionalRevenue;
    const netRoi = totalGain - recommendedPack.monthlyPrice;
    const roiPct = recommendedPack.monthlyPrice > 0
      ? Math.round((netRoi / recommendedPack.monthlyPrice) * 100)
      : 0;

    return {
      revenueRecovered,
      impayesRecovered,
      additionalRevenue,
      totalGain,
      recommendedPack,
      netRoi,
      roiPct,
      billableHoursRecovered,
      adminHoursPerMonth,
    };
  }, [hourlyRate, adminHours, monthlyRevenue, impayesRate]);

  return (
    <div style={{
      padding: '2rem',
      background: 'var(--background)',
      border: '1px solid var(--border)',
      borderRadius: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    }}>
      {/* SÉLECTION PROFIL */}
      <div>
        <label style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
          1. Votre profil
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem' }}>
          {(Object.keys(PROFILE_DEFAULTS) as Profile[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handleProfileChange(p)}
              style={{
                padding: '0.85rem 1rem',
                background: profile === p ? 'var(--accent)' : 'var(--background)',
                color: profile === p ? 'var(--on-accent)' : 'var(--primary)',
                border: `1px solid ${profile === p ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: '0.6rem',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.15s ease',
                textAlign: 'center',
              }}
            >
              {p === 'artisan' ? '🔧 Artisan' : p === 'tpe' ? '🏢 TPE' : '💼 Freelance'}
            </button>
          ))}
        </div>
        <p style={{ margin: '0.75rem 0 0', fontSize: '0.85rem', color: 'var(--secondary)', fontStyle: 'italic' }}>
          {PROFILE_DEFAULTS[profile].description}
        </p>
      </div>

      {/* SLIDERS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {/* Slider 1 — Heures admin */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label htmlFor="adminHours" style={{ fontWeight: 700, color: 'var(--primary)' }}>
              2. Heures d&apos;admin par semaine
            </label>
            <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>
              {adminHours}h
            </span>
          </div>
          <input
            id="adminHours"
            type="range"
            min="2"
            max="20"
            step="1"
            value={adminHours}
            onChange={(e) => setAdminHours(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
            <span>2h (peu d&apos;admin)</span>
            <span>20h (très lourd)</span>
          </div>
        </div>

        {/* Slider 2 — Taux horaire métier */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label htmlFor="hourlyRate" style={{ fontWeight: 700, color: 'var(--primary)' }}>
              3. Votre taux horaire métier facturable
            </label>
            <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>
              {hourlyRate}€/h
            </span>
          </div>
          <input
            id="hourlyRate"
            type="range"
            min="30"
            max="150"
            step="5"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
            <span>30€/h</span>
            <span>150€/h</span>
          </div>
        </div>

        {/* Slider 3 — CA mensuel */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label htmlFor="monthlyRevenue" style={{ fontWeight: 700, color: 'var(--primary)' }}>
              4. Votre CA mensuel actuel
            </label>
            <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>
              {formatEuros(monthlyRevenue)}
            </span>
          </div>
          <input
            id="monthlyRevenue"
            type="range"
            min="3000"
            max="50000"
            step="1000"
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
            <span>3 000€</span>
            <span>50 000€</span>
          </div>
        </div>

        {/* Slider 4 — Taux d'impayés actuel */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label htmlFor="impayesRate" style={{ fontWeight: 700, color: 'var(--primary)' }}>
              5. Votre taux d&apos;impayés actuel
            </label>
            <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>
              {impayesRate}%
            </span>
          </div>
          <input
            id="impayesRate"
            type="range"
            min="0"
            max="15"
            step="1"
            value={impayesRate}
            onChange={(e) => setImpayesRate(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
            <span>0% (parfait)</span>
            <span>15% (très lourd)</span>
          </div>
        </div>
      </div>

      {/* RÉSULTATS */}
      <div style={{
        padding: '1.75rem',
        background: 'rgba(249, 115, 22, 0.06)',
        border: '1px solid rgba(249, 115, 22, 0.25)',
        borderRadius: '1rem',
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          Votre ROI mensuel estimé
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '0.6rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '0.35rem' }}>
              Heures récupérées
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
              {calculations.billableHoursRecovered}h/mois
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              soit {formatEuros(calculations.revenueRecovered)} de capacité
            </div>
          </div>

          <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '0.6rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '0.35rem' }}>
              Impayés rattrapés
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
              {formatEuros(calculations.impayesRecovered)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              passage à {1}% d&apos;impayés
            </div>
          </div>

          <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '0.6rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '0.35rem' }}>
              CA additionnel
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
              {formatEuros(calculations.additionalRevenue)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              devis envoyés sous 1h
            </div>
          </div>
        </div>

        {/* Gain total */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--primary)',
          color: 'var(--on-primary)',
          borderRadius: '0.75rem',
          textAlign: 'center',
          marginBottom: '1.25rem',
        }}>
          <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.25rem' }}>
            Gain total mensuel estimé
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>
            {formatEuros(calculations.totalGain)}
          </div>
        </div>

        {/* Pack recommandé */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--background)',
          border: '2px solid var(--accent)',
          borderRadius: '0.75rem',
        }}>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.85rem', color: 'var(--secondary)' }}>
            Pack recommandé pour votre profil :
          </p>
          <p style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            {calculations.recommendedPack.name} — {calculations.recommendedPack.hours}h/mois
            <span style={{ marginLeft: '0.75rem', fontSize: '1rem', color: 'var(--accent)' }}>
              {formatEuros(calculations.recommendedPack.monthlyPrice)}/mois
            </span>
          </p>
          <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', color: 'var(--secondary)' }}>
            <strong style={{ color: 'var(--primary)' }}>ROI net : {formatEuros(calculations.netRoi)}/mois</strong>
            {calculations.roiPct > 0 && (
              <span style={{ color: '#16a34a', marginLeft: '0.5rem', fontWeight: 600 }}>
                (×{Math.round(calculations.totalGain / calculations.recommendedPack.monthlyPrice * 10) / 10})
              </span>
            )}
          </p>
          <Link
            href={`/contact?cible=${profile === 'tpe' ? 'tpe' : 'artisans'}`}
            style={{
              display: 'inline-block',
              padding: '0.85rem 1.5rem',
              background: 'var(--accent)',
              color: 'var(--on-accent)',
              borderRadius: '0.6rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Réserver mon appel découverte →
          </Link>
        </div>

        <p style={{ margin: '1.25rem 0 0', fontSize: '0.8rem', color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center', lineHeight: 1.5 }}>
          Estimation basée sur les moyennes observées sur les profils types accompagnés.<br />
          Tarif horaire de référence : {MISSION_HOURLY_RATE}€/h HT. Le ROI exact dépend de votre situation réelle — on en parle en appel découverte.
        </p>
      </div>
    </div>
  );
}
