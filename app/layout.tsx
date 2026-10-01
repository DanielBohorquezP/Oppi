import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ContactModalProvider } from "@/lib/contact-modal";
import { ContactModal } from "@/components/ui/ContactModal";
import { site } from "@/content/site";

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
  metadataBase: new URL(site.url),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "es_CO",
    url: "./",
  },
  title: "Oppi | Visibilidad digital y ventas para tu negocio",
  description:
    "Desarrollo web optimizado para ventas, estrategia SEO y campañas de Google Ads (SEM). Oppi ayuda a tu empresa a conseguir más clientes.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "Oppi Marketing Digital",
  url: site.url,
  logo: `${site.url}/icon.png`,
  image: `${site.url}/icon.png`,
  description:
    "Agencia de marketing digital: desarrollo web optimizado para ventas, estrategia SEO y campañas de Google Ads (SEM) para empresas.",
  telephone: `+${site.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "CO",
  },
  areaServed: { "@type": "Country", name: "Colombia" },
  knowsAbout: [
    "Desarrollo web",
    "SEO",
    "Google Ads",
    "Visibilidad en buscadores con IA",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${site.whatsappNumber}`,
    areaServed: "CO",
    availableLanguage: "es",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${comfortaa.variable} ${archivoBlack.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\u003c"),
          }}
        />
        <ContactModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
