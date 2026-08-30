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
  metadataBase: new URL("https://www.opti-pro.fr"),
  title: {
    default: "Pierre Laurent — Projets, apps et parcours",
    template: "%s · Pierre Laurent",
  },
  description:
    "Le site personnel de Pierre Laurent : projets, applications, outils, parcours et centres d’intérêt.",
  authors: [{ name: "Pierre Laurent", url: "https://www.opti-pro.fr" }],
  creator: "Pierre Laurent",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Pierre Laurent — Site personnel",
    title: "Pierre Laurent — Projets, apps et parcours",
    description:
      "Mes projets, les applications que je crée, mon parcours et ce qui m’intéresse.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Laurent — Site personnel",
    description: "Projets, applications, parcours et centres d’intérêt.",
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
        <Analytics />
      </body>
    </html>
  );
}
