import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Marketing Digital y Meta Ads: redes que venden | Oppi",
  description:
    "Deja de publicar y pautar a ciegas. Estrategia, contenido y anuncios en Facebook e Instagram que traen clientes, no solo likes.",
};

export default function MarketingPage() {
  return <ServicePage serviceKey="marketing" />;
}
