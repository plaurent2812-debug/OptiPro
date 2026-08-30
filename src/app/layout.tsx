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
    default: "Pierre Laurent — Opérations, data & création numérique",
    template: "%s · Pierre Laurent",
  },
  description:
    "Responsable des opérations, passionné de tech et d’IA. Le parcours professionnel, les compétences et les projets personnels de Pierre Laurent.",
  authors: [{ name: "Pierre Laurent", url: "https://pierre-laurent.fr" }],
  creator: "Pierre Laurent",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Pierre Laurent — Site personnel",
    title: "Pierre Laurent — Opérations, data & création numérique",
    description:
      "Dix ans d’expérience opérationnelle, une pratique du code et de l’IA. Découvrez mon parcours et les outils que je crée.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Laurent — Site personnel",
    description: "Opérations, logistique, data et projets numériques personnels.",
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
