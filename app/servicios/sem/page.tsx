import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Google Ads: deja de pagar clics que no compran | Oppi",
  description:
    "Campañas de Google Ads gestionadas cada semana para que pagues por clientes, no por curiosos. Te mostramos cuánto presupuesto estás perdiendo.",
};

export default function SemPage() {
  return <ServicePage serviceKey="sem" />;
}
