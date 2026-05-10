import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const cibleLabels: Record<string, string> = {
    artisans: '🔧 Artisan / Indépendant',
    tpe: '🏢 TPE / PME',
    'pme-ops': '📦 Petite structure',
    projets: '🚀 Projet sur mesure',
    abonnement: '🔄 Suivi mensuel',
    fondateur: '🌟 Programme Fondateur',
    default: 'Demande générale',
};

function subjectFor(cible: string | undefined, name: string, isFondateur: boolean): string {
    const baseEmoji = cibleLabels[cible ?? 'default']?.split(' ')[0] ?? '✉️';
    const baseLabel = cibleLabels[cible ?? 'default'] ?? 'Demande';
    const subject = `${baseEmoji} ${baseLabel} — ${name}`;
    return isFondateur ? `🌟 CANDIDATURE FONDATEUR — ${subject}` : subject;
}

function getPaliereVise(volumeDocs: string | undefined): string {
    switch (volumeDocs) {
        case '≤30':
            return 'Pilote 30 (750€/mois HT)';
        case '31-60':
            return 'Pilote 60 (1 150€/mois HT)';
        case '61-100':
            return 'Pilote 100 (1 500€/mois HT)';
        case '100+':
            return 'Sur devis (au-delà de 100 documents/mois)';
        default:
            return 'À déterminer';
    }
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    const isConfigured = apiKey && apiKey !== 're_...' && apiKey.length > 5;

    if (!isConfigured) {
        if (process.env.NODE_ENV === 'development') {
            console.log("⚠️ DEV MODE : Envoi d'email simulé car RESEND_API_KEY n'est pas définie.");
            const body = await request.json();
            const paliereVise = getPaliereVise(body?.volumeDocs);
            console.log('Nouveau contact reçu (simulé) :', {
                ...body,
                paliereVise,
            });
            return NextResponse.json({ success: true, simulated: true, paliereVise });
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
            salaries,
            volumeDocs,
            typeDemande,
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
        const isFondateur = typeDemande === 'fondateur';
        const paliereVise = getPaliereVise(volumeDocs);
        const typeDemandeLabel = isFondateur
            ? '🌟 Candidature Programme Fondateur'
            : 'Appel découverte standard';

        // --- Enregistrement automatique dans le CRM (Table clients) ---
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (supabaseUrl && supabaseServiceKey) {
            import('@supabase/supabase-js').then(({ createClient }) => {
                const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

                const notes = [
                    `Cible : ${cibleLabel}`,
                    `Type de demande : ${typeDemandeLabel}`,
                    `Métier : ${metier || 'Non renseigné'}`,
                    `Taille équipe : ${salaries || 'Non renseignée'}`,
                    `Volume admin : ${volumeDocs || 'Non renseigné'}`,
                    `Palier visé (auto) : ${paliereVise}`,
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
                        statut: isFondateur ? 'prospect_fondateur' : 'prospect',
                    }])
                    .then(({ error: dbError }) => {
                        if (dbError) console.error('Erreur insertion Supabase CRM :', dbError);
                        else console.log('Prospect enregistré avec succès dans le CRM !');
                    });
            }).catch((err) => console.error('Erreur import Supabase:', err));
        } else {
            console.warn("⚠️ PROSPECT NON SAUVEGARDÉ EN BASE : Il manque la SUPABASE_SERVICE_ROLE_KEY dans les variables d'environnement.");
        }

        const fondateurBanner = isFondateur
            ? `<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px 14px; border-radius: 6px; margin-bottom: 20px;">
                <strong style="color: #92400e;">🌟 CANDIDATURE PROGRAMME FONDATEUR</strong>
                <div style="font-size: 13px; color: #78350f; margin-top: 4px;">À traiter en priorité. 5 places maximum sur le programme.</div>
            </div>`
            : '';

        const { data, error } = await resend.emails.send({
            from: 'Contact OptiPro <p.laurent@opti-pro.fr>',
            to: ['p.laurent@opti-pro.fr'],
            replyTo: email,
            subject: subjectFor(cible, name, isFondateur),
            html: `
                <div style="font-family: sans-serif; max-width: 600px; padding: 20px; color: #0f172a;">
                    ${fondateurBanner}
                    <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 10px 14px; border-radius: 6px; margin-bottom: 20px;">
                        <strong style="color: #9a3412;">${cibleLabel}</strong>
                    </div>
                    <h2 style="margin: 0 0 16px;">Nouveau contact OptiPro</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Entreprise :</strong> ${company || '<em>Non renseigné</em>'}</p>
                    <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Téléphone :</strong> ${phone || '<em>Non renseigné</em>'}</p>
                    <p><strong>Type de demande :</strong> ${typeDemandeLabel}</p>

                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />

                    <h3 style="margin: 0 0 12px; color: #0f172a;">Pré-qualification automatique</h3>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 14px 16px; border-radius: 8px;">
                        <p style="margin: 0 0 8px;"><strong>Métier :</strong> ${metier || '<em>Non renseigné</em>'}</p>
                        <p style="margin: 0 0 8px;"><strong>Taille équipe :</strong> ${salaries || '<em>Non renseignée</em>'}</p>
                        <p style="margin: 0 0 8px;"><strong>Volume admin :</strong> ${volumeDocs || '<em>Non renseigné</em>'} documents/mois</p>
                        <p style="margin: 0; font-size: 15px; color: #166534;"><strong>Palier Pilote visé :</strong> ${paliereVise}</p>
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

        return NextResponse.json({ success: true, data, paliereVise });
    } catch (err: unknown) {
        console.error('Erreur API Contact (catch):', err);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message' },
            { status: 500 }
        );
    }
}
