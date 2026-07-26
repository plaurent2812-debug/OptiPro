import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const cibleLabels: Record<string, string> = {
    artisans: '🔧 Artisan / Indépendant',
    tpe: '🏢 TPE / PME',
    'web-app': '🚀 Web app / outil métier',
    maintenance: '🔄 Maintenance de site',
    default: 'Demande générale',
};

function subjectFor(cible: string | undefined, name: string): string {
    const baseLabel = cibleLabels[cible ?? 'default'] ?? '✉️ Demande';
    return `${baseLabel} — ${name}`;
}

/** Libellé de l'offre visée, aligné sur WEB_OFFERS / MAINTENANCE_PLANS (src/data/pricing.ts). */
function getOffreEstimee(projet: string | undefined): string {
    switch (projet) {
        case 'site-vitrine':
            return 'Site vitrine — 990€';
        case 'site-vitrine-pro':
            return 'Site vitrine Pro — 1 390€';
        case 'web-app':
            return 'Web app / outil métier — sur devis';
        case 'maintenance':
            return 'Maintenance — dès 79€/mois';
        case 'unknown':
            return 'À déterminer en appel découverte';
        default:
            return 'À déterminer';
    }
}

const situationLabels: Record<string, string> = {
    'aucun-site': "N'a pas de site",
    'site-a-refaire': 'A un site à refaire',
    'site-a-maintenir': 'A un site à maintenir',
    'process-a-outiller': 'A un process à outiller',
};

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    const isConfigured = apiKey && apiKey !== 're_...' && apiKey.length > 5;

    if (!isConfigured) {
        if (process.env.NODE_ENV === 'development') {
            console.log("⚠️ DEV MODE : Envoi d'email simulé car RESEND_API_KEY n'est pas définie.");
            const body = await request.json();
            const offreEstimee = getOffreEstimee(body?.projet);
            console.log('Nouveau contact reçu (simulé) :', {
                ...body,
                offreEstimee,
            });
            return NextResponse.json({ success: true, simulated: true, offreEstimee });
        }

        console.error('RESEND_API_KEY is not defined or is just a placeholder.');
        return NextResponse.json({ error: 'Configuration serveur manquante (Resend API)' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    try {
        const body = await request.json();
        const {
            name,
            company,
            email,
            phone,
            metier,
            projet,
            situation,
            message,
            cible,
        } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Le nom et l\'email sont requis' },
                { status: 400 }
            );
        }

        const cibleLabel = cibleLabels[cible ?? 'default'] ?? 'Demande générale';
        const offreEstimee = getOffreEstimee(projet);
        const situationLabel = situationLabels[situation ?? ''] ?? 'Non renseigné';

        // --- Enregistrement automatique dans le CRM (Table clients) ---
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (supabaseUrl && supabaseServiceKey) {
            import('@supabase/supabase-js').then(({ createClient }) => {
                const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

                const notes = [
                    `Cible : ${cibleLabel}`,
                    `Activité : ${metier || 'Non renseigné'}`,
                    `Offre visée : ${offreEstimee}`,
                    `Situation actuelle : ${situationLabel}`,
                    '',
                    'Message :',
                    message || 'Aucun message.',
                ].join('\n');

                const nameParts = name.trim().split(' ');
                const prenom = nameParts.length > 1 ? nameParts[0] : '';
                const nomFamille = nameParts.length > 1 ? nameParts.slice(1).join(' ') : name;

                supabaseAdmin
                    .from('clients')
                    .insert([{
                        nom: nomFamille,
                        prenom: prenom,
                        email,
                        telephone: phone || null,
                        entreprise: company || null,
                        notes,
                        statut: 'prospect',
                    }])
                    .then(({ error: dbError }) => {
                        if (dbError) console.error('Erreur insertion Supabase CRM :', dbError);
                        else console.log('Prospect enregistré avec succès dans le CRM !');
                    });
            }).catch((err) => console.error('Erreur import Supabase:', err));
        } else {
            console.warn("⚠️ PROSPECT NON SAUVEGARDÉ EN BASE : Il manque la SUPABASE_SERVICE_ROLE_KEY dans les variables d'environnement.");
        }

        const { data, error } = await resend.emails.send({
            from: 'Contact OptiPro <p.laurent@opti-pro.fr>',
            to: ['p.laurent@opti-pro.fr'],
            replyTo: email,
            subject: subjectFor(cible, name),
            html: `
                <div style="font-family: sans-serif; max-width: 600px; padding: 20px; color: #0f172a;">
                    <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 10px 14px; border-radius: 6px; margin-bottom: 20px;">
                        <strong style="color: #9a3412;">${cibleLabel}</strong>
                    </div>
                    <h2 style="margin: 0 0 16px;">Nouveau contact OptiPro</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Entreprise :</strong> ${company || '<em>Non renseigné</em>'}</p>
                    <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Téléphone :</strong> ${phone || '<em>Non renseigné</em>'}</p>

                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />

                    <h3 style="margin: 0 0 12px; color: #0f172a;">Pré-qualification automatique</h3>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 14px 16px; border-radius: 8px;">
                        <p style="margin: 0 0 8px;"><strong>Activité :</strong> ${metier || '<em>Non renseigné</em>'}</p>
                        <p style="margin: 0 0 8px;"><strong>Situation actuelle :</strong> ${situationLabel}</p>
                        <p style="margin: 0; font-size: 15px; color: #166534;"><strong>Offre visée :</strong> ${offreEstimee}</p>
                    </div>

                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />

                    <p><strong>Message / Projet :</strong></p>
                    <div style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">${message || '<em>Aucun message.</em>'}</div>
                </div>
            `,
        });

        if (error) {
            console.error('Erreur renvoyée par Resend :', error);
            return NextResponse.json(
                { error: 'Erreur Serveur Resend', details: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data, offreEstimee });
    } catch (err: unknown) {
        console.error('Erreur API Contact (catch):', err);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message' },
            { status: 500 }
        );
    }
}
