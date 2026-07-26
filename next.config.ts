import type { NextConfig } from "next";

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://*.supabase.co",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://vitals.vercel-insights.com https://fonts.gstatic.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ');

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // Alias RGPD : URL canonique attendue par crawlers/visiteurs externes
      {
        source: '/politique-de-confidentialite',
        destination: '/confidentialite',
        permanent: true,
      },
      // /realisations retiré de la nav et du sitemap — redirect vers /
      {
        source: '/realisations',
        destination: '/',
        permanent: true,
      },
      // /services supprimé en Task 20 — redirect vers /le-service
      {
        source: '/services',
        destination: '/le-service',
        permanent: true,
      },
      // /creation-site-web-vence supprimé en Task 20 — redirect vers /
      {
        source: '/creation-site-web-vence',
        destination: '/',
        permanent: true,
      },
      // /dashboard supprimé en Task 20 — redirect vers /
      {
        source: '/dashboard',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard/:path*',
        destination: '/',
        permanent: true,
      },
      // /methode et /pourquoi-ce-prix dépubliés — redirect vers /le-service
      {
        source: '/methode',
        destination: '/le-service',
        permanent: true,
      },
      {
        source: '/pourquoi-ce-prix',
        destination: '/tarifs',
        permanent: true,
      },
      // Articles de blog dépubliés (2026-07-26) : contenu 100% ancienne offre
      // « bras droit administratif ». Redirection vers la cible la plus proche
      // par sujet pour préserver le jus SEO acquis.
      {
        source: '/blog/qu-est-ce-qu-un-bras-droit-administratif',
        destination: '/le-service',
        permanent: true,
      },
      {
        source: '/blog/externaliser-admin-ou-embaucher-guide-decision',
        destination: '/le-service',
        permanent: true,
      },
      {
        source: '/blog/externaliser-admin-vs-expert-comptable-difference',
        destination: '/le-service',
        permanent: true,
      },
      {
        // Sujet devis/facturation → article outillage conservé
        source: '/blog/comment-deleguer-devis-plombier',
        destination: '/blog/automatiser-devis-artisan',
        permanent: true,
      },
      {
        // Sujet coût/tarifs → page tarifs (prix publics)
        source: '/blog/cout-cache-admin-tpe-calcul-complet',
        destination: '/tarifs',
        permanent: true,
      },
      {
        // Sujet « erreurs / outils qui coûtent du temps » → article conservé
        source: '/blog/5-erreurs-admin-perdre-5000-euros-artisan',
        destination: '/blog/outils-qui-font-perdre-temps-artisans',
        permanent: true,
      },
      // Force le redirect non-www → www en 308 permanent (consolidation PageRank)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'opti-pro.fr' }],
        destination: 'https://www.opti-pro.fr/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: cspDirectives },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|webp|svg|ico|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)\\.md',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
