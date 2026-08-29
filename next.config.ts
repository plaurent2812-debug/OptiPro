import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://vitals.vercel-insights.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  agentRules: false,
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/politique-de-confidentialite", destination: "/confidentialite", permanent: true },
      { source: "/realisations", destination: "/projets", permanent: true },
      { source: "/services", destination: "/projets", permanent: true },
      { source: "/services/:path*", destination: "/projets", permanent: true },
      { source: "/le-service", destination: "/", permanent: true },
      { source: "/tarifs", destination: "/", permanent: true },
      { source: "/temoignages", destination: "/projets", permanent: true },
      { source: "/blog", destination: "/projets", permanent: true },
      { source: "/blog/:path*", destination: "/projets", permanent: true },
      { source: "/cgv", destination: "/mentions-legales", permanent: true },
      { source: "/creation-site-web-vence", destination: "/projets", permanent: true },
      { source: "/methode", destination: "/a-propos", permanent: true },
      { source: "/pourquoi-ce-prix", destination: "/a-propos", permanent: true },
      { source: "/dashboard", destination: "/", permanent: true },
      { source: "/dashboard/:path*", destination: "/", permanent: true },
      { source: "/admin", destination: "/", permanent: true },
      { source: "/admin/:path*", destination: "/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "opti-pro.fr" }],
        destination: "https://www.opti-pro.fr/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|svg|ico|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
