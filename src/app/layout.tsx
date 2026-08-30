import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pierre-laurent.fr"),
  title: {
    default: "Pierre Laurent — Projets, code & curiosité",
    template: "%s · Pierre Laurent",
  },
  description:
    "Le portfolio personnel de Pierre Laurent : applications web et mobiles, automatisation et IA. Découvrez mes projets, leurs coulisses et mon parcours professionnel.",
  authors: [{ name: "Pierre Laurent", url: "https://pierre-laurent.fr" }],
  creator: "Pierre Laurent",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Pierre Laurent — Portfolio personnel",
    title: "Pierre Laurent — Projets, code & curiosité",
    description:
      "Des idées, du code, du concret. Applications web et mobiles, automatisation et IA : les projets que je construis et ce que j’apprends en chemin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Laurent — Portfolio personnel",
    description: "Applications, automatisation, IA : mes projets personnels et les idées derrière les outils.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#060913",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" data-scroll-behavior="smooth">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
