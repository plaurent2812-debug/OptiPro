'use client';

import { Suspense, useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';

type Cible = 'artisans' | 'tpe' | 'web-app' | 'maintenance' | 'default';

interface CibleConfig {
    intro: string;
    projectLabel: string;
    projectPlaceholder: string;
    ctaLabel: string;
    footnote: string;
}

const cibleConfigs: Record<Cible, CibleConfig> = {
    artisans: {
        intro: "Vous êtes artisan ou indépendant et vous voulez un site qui vous rende trouvable sur Google. Décrivez votre activité — je vous dis ce qui est réaliste et à quel prix.",
        projectLabel: 'Votre activité et ce que vous attendez du site',
        projectPlaceholder: "Ex : je suis plombier à Cagnes, je n'ai pas de site, mes clients me trouvent uniquement par bouche-à-oreille...",
        ctaLabel: 'Envoyer ma demande — Pierre me recontacte sous 24h',
        footnote: 'Premier appel de 30 min gratuit. Périmètre et livrables définis au devis, avant tout engagement.',
    },
    tpe: {
        intro: "Vous dirigez une TPE. Parlons de votre présence en ligne et des outils qui vous feraient gagner du temps au quotidien.",
        projectLabel: 'Votre projet et le contexte',
        projectPlaceholder: "Ex : notre site date de 2018 et n'est pas à jour, on veut aussi un formulaire de devis en ligne...",
        ctaLabel: 'Discuter de mon projet — Réponse sous 24h',
        footnote: 'Premier appel de 30 min gratuit. Périmètre et livrables définis au devis, avant tout engagement.',
    },
    'web-app': {
        intro: "Vous avez un process qui tourne encore sur papier ou sur Excel et vous voulez le remplacer par un outil sur mesure. Décrivez-le — on cadre ensemble le périmètre.",
        projectLabel: 'Le process à outiller',
        projectPlaceholder: "Ex : suivi de chantiers sur un tableau Excel partagé, catalogue produits à jour nulle part, réservations prises par téléphone...",
        ctaLabel: 'Cadrer mon projet — Pierre me recontacte sous 24h',
        footnote: 'Premier appel de 30 min gratuit pour cadrer le besoin. Web app sur devis, après définition du périmètre.',
    },
    maintenance: {
        intro: "Vous avez déjà un site et vous cherchez quelqu'un pour le maintenir à jour. Dites-moi où il en est.",
        projectLabel: 'Votre site actuel et vos besoins',
        projectPlaceholder: 'Ex : site WordPress jamais mis à jour depuis 2 ans, horaires faux, besoin de changer les photos régulièrement...',
        ctaLabel: 'Demander un échange',
        footnote: 'Maintenance à partir de 79€/mois. Sans engagement de durée.',
    },
    default: {
        intro: "Vous voulez un site vitrine, une web app ou un outil métier sur mesure. Décrivez votre projet — je vous réponds sous 24h.",
        projectLabel: 'Votre projet',
        projectPlaceholder: "Ex : je veux un site pour mon entreprise de menuiserie, avec mes réalisations en photos et un formulaire de devis...",
        ctaLabel: 'Envoyer ma demande — Pierre me contacte sous 24h',
        footnote: 'Premier appel de 30 min gratuit. Périmètre et livrables définis au devis, avant tout engagement.',
    },
};

const cibleLabels: Record<Cible, string> = {
    artisans: '🔧 Artisan / Indépendant',
    tpe: '🏢 TPE / PME',
    'web-app': '🚀 Web app / outil métier',
    maintenance: '🔄 Maintenance de site',
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
    { value: 'restaurateur', label: 'Restaurateur' },
    { value: 'autre-artisan', label: 'Autre artisan' },
    { value: 'tpe-services', label: 'TPE services' },
    { value: 'autre', label: 'Autre' },
];

const projetOptions = [
    { value: '', label: '— Sélectionnez —' },
    { value: 'site-vitrine', label: 'Site vitrine — 990€' },
    { value: 'site-vitrine-pro', label: 'Site vitrine Pro — 1 390€' },
    { value: 'web-app', label: 'Web app / outil métier — sur devis' },
    { value: 'maintenance', label: 'Maintenance de site existant — dès 79€/mois' },
    { value: 'unknown', label: 'Je ne sais pas encore' },
];

const situationOptions = [
    { value: 'aucun-site', label: "Je n'ai pas de site" },
    { value: 'site-a-refaire', label: 'J\'ai un site à refaire' },
    { value: 'site-a-maintenir', label: 'J\'ai un site à maintenir' },
    { value: 'process-a-outiller', label: 'J\'ai un process à outiller' },
];

function ContactForm() {
    const searchParams = useSearchParams();

    const [cible, setCible] = useState<Cible>('default');
    const [metier, setMetier] = useState<string>('');
    const [projet, setProjet] = useState<string>('');

    useEffect(() => {
        const rawCible = searchParams.get('cible') as Cible | null;
        if (rawCible && cibleConfigs[rawCible]) {
            setCible(rawCible);
        }

        const rawMetier = searchParams.get('metier');
        const matchedMetier = metierOptions.find((o) => o.value === rawMetier)?.value;
        if (matchedMetier) {
            setMetier(matchedMetier);
        }

        const rawProjet = searchParams.get('offre') ?? searchParams.get('projet');
        const matchedProjet = projetOptions.find((o) => o.value === rawProjet)?.value;
        if (matchedProjet) {
            setProjet(matchedProjet);
        }
    }, [searchParams]);

    const config = cibleConfigs[cible];

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
            const rawMetier = searchParams.get('metier');
            setMetier(metierOptions.find((o) => o.value === rawMetier)?.value ?? '');
            const rawProjet = searchParams.get('offre') ?? searchParams.get('projet');
            setProjet(projetOptions.find((o) => o.value === rawProjet)?.value ?? '');
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
                <label htmlFor="metier" className="form-label">Votre activité *</label>
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

            <div className="form-group">
                <label htmlFor="projet" className="form-label">Ce qui vous intéresse *</label>
                <select
                    id="projet"
                    name="projet"
                    className="form-input"
                    required
                    value={projet}
                    onChange={(e) => setProjet(e.target.value)}
                >
                    {projetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="situation" className="form-label">Où en êtes-vous aujourd&apos;hui ? *</label>
                <select id="situation" name="situation" className="form-input" required defaultValue="aucun-site">
                    {situationOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
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
                        Parlons de votre projet web
                    </h1>
                    <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                        Quelques infos pour préparer l&apos;appel découverte. Site vitrine dès 990€, web app sur devis — le périmètre et les livrables sont définis avant tout engagement.
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

                <Suspense fallback={null}>
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
