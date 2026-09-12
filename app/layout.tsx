import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyNotification } from "@/components/layout/StickyNotification";

const comfortaa = localFont({
  src: "./fonts/comfortaa/Comfortaa-VariableFont_wght.ttf",
  variable: "--font-comfortaa",
  weight: "300 700",
  display: "swap",
});

// Fuente de marca para títulos (h1-h6) — ver app/fonts/archivo-black/.
const archivoBlack = localFont({
  src: "./fonts/archivo-black/ArchivoBlack-Regular.ttf",
  variable: "--font-archivo-black",
  display: "swap",
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
      className={`${comfortaa.variable} ${archivoBlack.variable} ${spaceMono.variable} h-full antialiased`}
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
