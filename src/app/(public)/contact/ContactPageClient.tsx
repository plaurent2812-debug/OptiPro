'use client';

import { Suspense, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';

type Cible = 'artisans' | 'tpe' | 'pme-ops' | 'projets' | 'abonnement' | 'default';

interface CibleConfig {
    intro: string;
    projectLabel: string;
    projectPlaceholder: string;
    ctaLabel: string;
    footnote: string;
}

const cibleConfigs: Record<Cible, CibleConfig> = {
    artisans: {
        intro: 'Vous êtes artisan ou indépendant. Décrivez votre quotidien admin — devis, factures, relances, classement — on identifie où vous perdez du temps.',
        projectLabel: 'Ce qui vous prend le plus de temps en admin',
        projectPlaceholder: 'Ex : je passe mes soirées à faire des devis, j\'ai des impayés depuis 3 mois, je classe mes factures à la main...',
        ctaLabel: 'Envoyer ma demande — Pierre me recontacte sous 24h',
        footnote: 'Premier échange de 30 min gratuit. Mission ponctuelle ou pack mensuel — sans engagement long.',
    },
    tpe: {
        intro: 'Vous dirigez une TPE. Parlons de votre admin (devis, factures, relances, suivi) — ce que vous gagneriez à déléguer à un assistant dédié.',
        projectLabel: 'Décrivez votre admin actuelle',
        projectPlaceholder: 'Ex : 2 jours/semaine perdus en saisie, des relances oubliées, un classement chaotique...',
        ctaLabel: 'Discuter de mon admin — Réponse sous 24h',
        footnote: 'Premier échange de 30 min gratuit. Mission ponctuelle ou pack mensuel — sans engagement long.',
    },
    'pme-ops': {
        intro: 'Vous pilotez une petite structure et votre admin commence à déborder. Décrivez votre situation — volumes, outils, irritants — on regarde où un assistant peut absorber.',
        projectLabel: 'Décrivez votre admin',
        projectPlaceholder: 'Ex : 80 factures/mois saisies à la main, des relances sans process, 30 sous-traitants à suivre...',
        ctaLabel: 'Parler de mon admin — Pierre me recontacte sous 24h',
        footnote: 'Premier appel de 30 min gratuit. Mission ponctuelle ou pack mensuel — sans engagement long.',
    },
    projets: {
        intro: 'Vous avez un projet d\'assistant admin sur mesure ou un besoin spécifique. Décrivez ce que vous avez en tête — on cadre ensemble.',
        projectLabel: 'Présentez votre projet',
        projectPlaceholder: 'Ex : intégration spécifique avec ma compta, automatisation d\'un workflow particulier...',
        ctaLabel: 'Cadrer mon projet — Pierre me recontacte sous 24h',
        footnote: 'Premier échange de 30 min offert pour cadrer le besoin.',
    },
    abonnement: {
        intro: 'Vous êtes déjà client OptiPro ou vous voulez en savoir plus sur l\'accompagnement régulier. Dites-moi comment je peux vous accompagner.',
        projectLabel: 'Ce que vous souhaitez mettre en place ou faire évoluer',
        projectPlaceholder: 'Ex : monter en palier, ajouter une intégration, changer le rythme du reporting...',
        ctaLabel: 'Demander un échange',
        footnote: 'Pack mensuel reconductible, préavis 15 jours fin de mois.',
    },
    default: {
        intro: 'Vous voulez déléguer votre admin (devis, factures, relances, classement) à un assistant fiable. Décrivez votre besoin.',
        projectLabel: 'Ce qui vous prend le plus de temps en admin',
        projectPlaceholder: 'Ex : je passe mes soirées à faire des devis, j\'ai des impayés depuis 3 mois...',
        ctaLabel: 'Envoyer ma demande — Pierre me contacte sous 24h',
        footnote: 'Premier échange de 30 min gratuit. Mission ponctuelle ou pack mensuel — sans engagement long.',
    },
};

const cibleLabels: Record<Cible, string> = {
    artisans: '🔧 Artisan / Indépendant',
    tpe: '🏢 TPE / PME',
    'pme-ops': '📦 Petite structure',
    projets: '🚀 Projet sur mesure',
    abonnement: '🔄 Suivi mensuel',
    default: 'Demande générale',
};

const metierOptions = [
    { value: '', label: '— Sélectionnez —' },
    { value: 'plombier', label: 'Plombier' },
    { value: 'electricien', label: 'Électricien' },
    { value: 'serrurier', label: 'Serrurier' },
    { value: 'peintre', label: 'Peintre' },
    { value: 'menuisier', label: 'Menuisier' },
    { value: 'macon', label: 'Maçon' },
    { value: 'autre-artisan', label: 'Autre artisan' },
    { value: 'tpe-services', label: 'TPE services' },
    { value: 'autre', label: 'Autre' },
];

const heuresEstimeesOptions = [
    { value: '', label: '— Sélectionnez —' },
    { value: '1-5', label: '1-5h ponctuel' },
    { value: '5-10', label: '5-10h' },
    { value: '10-20', label: '10-20h' },
    { value: '20-30', label: '20-30h' },
    { value: '30+', label: 'Plus de 30h' },
    { value: 'unknown', label: 'Je ne sais pas encore' },
];

const typeBesoinOptions = [
    { value: 'ponctuel', label: 'Mission ponctuelle' },
    { value: 'regulier', label: 'Accompagnement régulier' },
    { value: 'indecis', label: 'Je ne sais pas encore' },
];

function ContactForm() {
    const searchParams = useSearchParams();
    const rawCible = searchParams.get('cible') as Cible | null;
    const cible: Cible = rawCible && cibleConfigs[rawCible] ? rawCible : 'default';
    const config = cibleConfigs[cible];

    const rawMetier = searchParams.get('metier');
    const metierFromUrl = metierOptions.find((o) => o.value === rawMetier)?.value ?? '';

    const [metier, setMetier] = useState<string>(metierFromUrl);

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<string>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const resData = await res.json().catch(() => null);

            if (!res.ok) {
                throw new Error(resData?.details || resData?.error || 'Erreur inattendue lors de l\'envoi');
            }

            setStatus('success');
            (e.target as HTMLFormElement).reset();
            setMetier(metierFromUrl);
        } catch (error: unknown) {
            console.error(error);
            const message = error instanceof Error ? error.message : 'error';
            setStatus(message);
        } finally {
            setIsLoading(false);
        }
    };

    if (status === 'success') {
        return (
            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--surface)', padding: '3rem 2rem', borderRadius: '1.25rem', border: '1px solid var(--border)', textAlign: 'center', animation: 'fadeUp 0.5s ease-out' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  animation: 'numberPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                }}>
                  ✓
                </div>
                <h2 style={{ marginBottom: '1rem' }}>Demande envoyée !</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Merci. Pierre vous contactera sous 24h pour organiser un premier échange de 30 minutes.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline">Envoyer une autre demande</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '620px', margin: '0 auto', background: 'var(--surface)', padding: '2.25rem', borderRadius: '1.25rem', border: '1px solid var(--border)' }}>
            {/* Badge cible */}
            {cible !== 'default' && (
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.9rem',
                    background: 'var(--accent-light)',
                    color: 'var(--accent)',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                }}>
                    {cibleLabels[cible]}
                </div>
            )}

            <p style={{ color: 'var(--secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                {config.intro}
            </p>

            {status !== 'idle' && status !== 'success' && (
                <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.08)', color: '#991b1b', borderRadius: '0.75rem', marginBottom: '1.5rem', textAlign: 'center', border: '1px solid rgba(239,68,68,0.25)', fontWeight: 500 }}>
                    ⚠️ {status}
                </div>
            )}

            {/* Champ caché qui remonte la cible à l'API */}
            <input type="hidden" name="cible" value={cible} />

            <div className="form-group">
                <label htmlFor="name" className="form-label">Nom complet *</label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="Jean Dupont" />
            </div>

            <div className="form-group">
                <label htmlFor="company" className="form-label">Nom de l&apos;entreprise</label>
                <input type="text" id="company" name="company" className="form-input" placeholder="Dupont Plomberie" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Téléphone</label>
                    <input type="tel" id="phone" name="phone" className="form-input" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="metier" className="form-label">Métier *</label>
                <select
                    id="metier"
                    name="metier"
                    className="form-input"
                    required
                    value={metier}
                    onChange={(e) => setMetier(e.target.value)}
                >
                    {metierOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label htmlFor="heuresEstimees" className="form-label">Heures estimées/mois *</label>
                    <select id="heuresEstimees" name="heuresEstimees" className="form-input" required defaultValue="">
                        {heuresEstimeesOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="typeBesoin" className="form-label">Type de besoin *</label>
                    <select id="typeBesoin" name="typeBesoin" className="form-input" required defaultValue="ponctuel">
                        {typeBesoinOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">{config.projectLabel}</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder={config.projectPlaceholder}
                    rows={4}
                ></textarea>
            </div>

            <Button
                type="submit"
                variant="primary"
                style={{ width: '100%', opacity: isLoading ? 0.85 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <span style={{
                            display: 'inline-block',
                            width: '16px',
                            height: '16px',
                            border: '2px solid rgba(255,255,255,0.35)',
                            borderTopColor: '#fff',
                            borderRadius: '50%',
                            animation: 'spinSlow 0.7s linear infinite',
                            flexShrink: 0,
                        }} />
                        Envoi en cours...
                    </>
                ) : (
                    config.ctaLabel
                )}
            </Button>
            <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
                {config.footnote}
            </p>
        </form>
    );
}

export default function ContactPageClient() {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 'var(--header-height)' }}>
            <div className="container" style={{ padding: '4rem 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div className="section-label">Me contacter</div>
                    <h1 style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--foreground)' }}>
                        Déléguer votre admin, à partir de 600€/mois
                    </h1>
                    <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                        Quelques infos pour préparer l&apos;appel découverte. Je vous propose ensuite une mission ponctuelle ou un pack mensuel adapté.
                    </p>
                </div>

                {/* Contacts directs — affichés AVANT le formulaire pour offrir une alternative immédiate */}
                <div style={{
                    maxWidth: '620px',
                    margin: '0 auto 2.5rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '1.25rem',
                    padding: '1.5rem 1.75rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '0.75rem',
                }}>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--foreground)', margin: 0 }}>
                        Préférez le contact direct ?
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <a
                            href="tel:+33670259333"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.7rem 1.1rem',
                                background: 'var(--accent)',
                                color: 'white',
                                borderRadius: '0.6rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                            }}
                        >
                            📞 06 70 25 93 33
                        </a>
                        <a
                            href="mailto:p.laurent@opti-pro.fr"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.7rem 1.1rem',
                                background: 'transparent',
                                color: 'var(--accent)',
                                border: '1.5px solid var(--accent)',
                                borderRadius: '0.6rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                            }}
                        >
                            ✉️ p.laurent@opti-pro.fr
                        </a>
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: 0 }}>
                        Réponse garantie sous 24h · Du lundi au vendredi, 9h-18h
                    </p>
                </div>

                <Suspense
                    fallback={
                        <div style={{
                            maxWidth: '620px',
                            margin: '0 auto',
                            background: 'var(--surface)',
                            padding: '2.25rem',
                            borderRadius: '1.25rem',
                            border: '1px solid var(--border)',
                        }}>
                            {/* Skeleton */}
                            <div style={{ height: '1rem', background: 'var(--border)', borderRadius: '0.25rem', marginBottom: '1.5rem', width: '70%' }} />
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} style={{ marginBottom: '1.25rem' }}>
                                    <div style={{ height: '0.75rem', background: 'var(--border)', borderRadius: '0.25rem', marginBottom: '0.5rem', width: '30%' }} />
                                    <div style={{ height: '2.5rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.5rem' }} />
                                </div>
                            ))}
                            <div style={{ height: '3rem', background: 'var(--accent)', opacity: 0.3, borderRadius: '0.5rem', marginTop: '1rem' }} />
                            <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
                                Chargement du formulaire...
                            </p>
                        </div>
                    }
                >
                    <ContactForm />
                </Suspense>

                <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
                    <p style={{ fontSize: '0.875rem' }}>
                        OptiPro · Pierre Laurent · Vence (06140) · Alpes-Maritimes ·{' '}
                        <a href="https://www.linkedin.com/in/pierre-laurent-809410123" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--secondary)' }}>
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
