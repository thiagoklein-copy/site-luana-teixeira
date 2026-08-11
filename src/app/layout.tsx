import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { BUSINESS } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = BUSINESS.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Psicóloga em São Leopoldo | Luana Teixeira · CRP 07/34651",
    template: "%s | Luana Teixeira",
  },
  description:
    "Psicóloga clínica em São Leopoldo com percurso em Psicanálise. Atendimento presencial e online para adolescentes, adultos e idosos. CRP 07/34651.",
  keywords: [
    "psicóloga São Leopoldo",
    "psicoterapia psicanalítica",
    "psicóloga clínica São Leopoldo",
    "terapia online RS",
    "Luana Teixeira psicóloga",
  ],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Luana Teixeira Psicologia",
    title: "Psicóloga em São Leopoldo | Luana Teixeira",
    description:
      "Um espaço de escuta psicanalítica para adolescentes, adultos e idosos. Presencial em São Leopoldo e online.",
    // TODO: adicionar images quando houver foto OG real da Luana
  },
  twitter: {
    card: "summary",
    title: "Psicóloga em São Leopoldo | Luana Teixeira",
    description:
      "Psicoterapia psicanalítica em São Leopoldo e online. CRP 07/34651.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">
        <Header />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
