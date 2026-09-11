export type TeamMember = {
  key: string;
  name: string;
  role: string;
  blurb: string;
  accent: string;
  /** Ruta a la foto real cuando exista; mientras tanto se muestra un placeholder con iniciales. */
  photoSrc?: string;
};

export const team: Record<"desarrollo-web" | "seo" | "sem", TeamMember> = {
  "desarrollo-web": {
    key: "desarrollo-web",
    name: "Angeline Martínez",
    role: "Desarrollo Web",
    blurb: "Diseña y construye cada sitio de Oppi, cuidando que cargue rápido y convierta.",
    accent: "var(--color-brand-yellow)",
  },
  seo: {
    key: "seo",
    name: "Daniel Bohórquez",
    role: "Estrategia SEO",
    blurb: "Lleva la estrategia de contenido y posicionamiento orgánico de cada cuenta.",
    accent: "var(--color-indigo-bloom)",
  },
  sem: {
    key: "sem",
    name: "Juan Sebastián",
    role: "Google Ads (SEM)",
    blurb: "Gestiona y optimiza las campañas de Google Ads de cada cliente.",
    accent: "var(--color-coral-pulse)",
  },
};
