import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Agencia SEO: aparece primero en Google y en la IA | Oppi",
  description:
    "Tus clientes te buscan en Google. Posicionamos tu negocio para que te encuentren a ti y no a tu competencia, también en ChatGPT, Claude, Perplexity y Gemini.",
};

export default function SeoPage() {
  return <ServicePage serviceKey="seo" />;
}
