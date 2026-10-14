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
  /** La frase del cliente que resuelve el servicio (se muestra entre comillas). */
  pain: string;
  /** Fondo del bloque superior (el dolor) en la tarjeta del home. */
  painSurface: string;
  /** Color del texto de ese bloque. */
  painText: string;
  /** Color de la etiqueta "Lo que nos dicen". */
  painLabel: string;
};

// Orden de los 3 dolores: no me encuentran → pago y no me compran → redes que no venden.
export const services: Service[] = [
  {
    key: "seo",
    href: "/servicios/seo",
    navLabel: "Estrategia SEO",
    menuDescription: "Aparece primero en Google y en la IA.",
    tag: "Estrategia SEO",
    title: "Que te encuentren antes que a tu competencia",
    summary:
      "Cuando alguien busca lo que vendes en Google o le pregunta a una IA (ChatGPT, Claude, Perplexity, Gemini), tu negocio aparece primero. Clientes que llegan cada mes sin pagar por cada clic.",
    wash: "lilac",
    accentVar: "var(--color-ink-black)",
    pain: "Me buscan y no me encuentran. Encuentran a mi competencia.",
    painSurface: "var(--color-ink-black)",
    painText: "#ffffff",
    painLabel: "var(--color-brand-yellow)",
  },
  {
    key: "sem",
    href: "/servicios/sem",
    navLabel: "Google Ads (SEM)",
    menuDescription: "Clientes hoy, sin desperdiciar presupuesto.",
    tag: "Google Ads",
    title: "Clientes esta semana, sin quemar presupuesto",
    summary:
      "Apareces justo cuando alguien está listo para comprar, y cada semana cortamos lo que gasta sin vender para que cada cliente te cueste menos.",
    wash: "peach",
    accentVar: "var(--color-coral-pulse)",
    pain: "Pago anuncios y no me compran.",
    painSurface: "var(--color-coral-pulse)",
    painText: "var(--color-ink-black)",
    painLabel: "var(--color-ink-black)",
  },
  {
    key: "marketing",
    href: "/servicios/marketing",
    navLabel: "Marketing Digital",
    menuDescription: "Redes y anuncios que sí venden.",
    tag: "Marketing Digital",
    title: "Redes que te traen clientes, no solo likes",
    summary:
      "Dejas de publicar y pautar a ciegas: definimos qué decir, a quién y en qué invertir en Facebook e Instagram para que cada peso vuelva en clientes.",
    wash: "yellow",
    accentVar: "var(--color-brand-yellow)",
    pain: "Publico y pauto en redes a ciegas. Nadie me escribe.",
    painSurface: "var(--color-brand-yellow)",
    painText: "var(--color-ink-black)",
    painLabel: "var(--color-ink-black)",
  },
];
