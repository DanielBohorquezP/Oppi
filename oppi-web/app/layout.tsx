import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyNotification } from "@/components/layout/StickyNotification";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Placeholder mientras llega la tipografía definitiva de marca — usada solo
// en cifras destacadas (stats, KPIs). Ver PROYECTO.md.
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oppi — Visibilidad digital y ventas para tu negocio",
  description:
    "Desarrollo web optimizado para ventas, estrategia SEO y campañas de Google Ads (SEM). Oppi ayuda a tu empresa a conseguir más clientes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyNotification />
      </body>
    </html>
  );
}
