import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { contact, offer } from "@/data/offer";
import "./globals.css";

// Geist pour le texte, Geist Mono réservé aux graduations des graphiques.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pierre-laurent.fr"),
  title: {
    default: `Création de site internet dans les Alpes-Maritimes · ${contact.name}`,
    template: "%s · Pierre Laurent",
  },
  description: `Création de sites internet pour les ${offer.audience} des ${contact.area}, conçus, mis en ligne et mis à jour par Pierre Laurent, à ${contact.city}. ${offer.setupPrice} puis ${offer.monthlyPrice} par mois.`,
  authors: [{ name: "Pierre Laurent", url: "https://pierre-laurent.fr" }],
  creator: "Pierre Laurent",
  category: "business",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: contact.name,
    title: `Création de site internet dans les ${contact.area} · ${contact.name}`,
    description: `Votre site internet conçu, mis en ligne et mis à jour pour vous : ${offer.setupPrice} puis ${offer.monthlyPrice} par mois, un seul interlocuteur à ${contact.city}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Création de site internet dans les ${contact.area} · ${contact.name}`,
    description: `Votre site internet conçu, mis en ligne et mis à jour pour vous : ${offer.setupPrice} puis ${offer.monthlyPrice} par mois.`,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0d12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
