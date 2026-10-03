export type TeamMember = {
  key: string;
  name: string;
  role: string;
  blurb: string;
  accent: string;
  /** Ruta a la foto real cuando exista; mientras tanto se muestra un placeholder con iniciales. */
  photoSrc?: string;
};

export const team: Record<"marketing" | "seo" | "sem", TeamMember> = {
  marketing: {
    key: "marketing",
    name: "Angeline Martínez",
    role: "Marketing Digital",
    blurb: "Lidera la estrategia de marketing: campañas en Meta Ads, contenido y posicionamiento de marca de cada cuenta.",
    accent: "var(--color-brand-yellow)",
    photoSrc: "/Integrantes/Angie.png",
  },
  seo: {
    key: "seo",
    name: "Daniel Bohórquez",
    role: "Estrategia SEO",
    blurb: "Lleva la estrategia de contenido y posicionamiento orgánico de cada cuenta.",
    accent: "var(--color-indigo-bloom)",
    photoSrc: "/Integrantes/Daniel.png",
  },
  sem: {
    key: "sem",
    name: "Juan Sebastián",
    role: "Google Ads (SEM)",
    blurb: "Gestiona y optimiza las campañas de Google Ads de cada cliente.",
    accent: "var(--color-coral-pulse)",
    photoSrc: "/Integrantes/Juanse.png",
  },
};
