import type { Wash } from "@/components/ui/PastelCard";

export type Service = {
  key: string;
  href: string;
  navLabel: string;
  menuDescription: string;
  tag: string;
  title: string;
  summary: string;
  wash: Wash;
  accentVar: string;
};

export const services: Service[] = [
  {
    key: "marketing",
    href: "/servicios/marketing",
    navLabel: "Marketing Digital",
    menuDescription: "Meta Ads, contenido y estrategia de marca.",
    tag: "Marketing",
    title: "Marketing que se mide en ventas",
    summary:
      "Auditoría, Meta Ads, contenido y posicionamiento digital para que tu inversión se convierta en clientes.",
    wash: "yellow",
    accentVar: "var(--color-brand-yellow)",
  },
  {
    key: "seo",
    href: "/servicios/seo",
    navLabel: "Estrategia SEO",
    menuDescription: "Visibilidad y ventas orgánicas en Google.",
    tag: "Crecimiento",
    title: "Estrategia SEO",
    summary:
      "Posicionamos tu negocio en Google y en la IA (ChatGPT, Gemini) para que te encuentren clientes listos para comprar.",
    wash: "lilac",
    accentVar: "var(--color-ink-black)",
  },
  {
    key: "sem",
    href: "/servicios/sem",
    navLabel: "Google Ads (SEM)",
    menuDescription: "Campañas de búsqueda, display y remarketing.",
    tag: "Resultados inmediatos",
    title: "Google Ads que generan clientes hoy",
    summary:
      "Campañas de búsqueda y remarketing gestionadas y optimizadas cada semana para bajar tu costo por cliente.",
    wash: "peach",
    accentVar: "var(--color-coral-pulse)",
  },
];
