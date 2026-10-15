export type TeamMember = {
  key: string;
  name: string;
  role: string;
  blurb: string;
  accent: string;
  /** El dolor que resuelve, en palabras del cliente (Quiénes Somos). */
  helpsIf: string;
  /** Ruta a la foto real cuando exista; mientras tanto se muestra un placeholder con iniciales. */
  photoSrc?: string;
  /** Ancho / alto de la foto (recortada a lo visible), para reservar el espacio exacto. */
  photoRatio?: number;
};

export const team: Record<"marketing" | "seo" | "sem", TeamMember> = {
  marketing: {
    key: "marketing",
    name: "Angeline Martínez",
    role: "Marketing Digital",
    blurb: "Lidera la estrategia de marketing: campañas en Meta Ads, contenido y posicionamiento de marca de cada cuenta.",
    accent: "var(--color-brand-yellow)",
    helpsIf: "publicas y pautas sin que nadie te escriba.",
    photoSrc: "/Integrantes/Angie.png",
    photoRatio: 0.421,
  },
  seo: {
    key: "seo",
    name: "Daniel Bohórquez",
    role: "Estrategia SEO",
    blurb: "Lleva la estrategia de contenido y posicionamiento orgánico de cada cuenta.",
    accent: "var(--color-indigo-bloom)",
    helpsIf: "te buscan y encuentran a tu competencia.",
    photoSrc: "/Integrantes/Daniel.png",
    photoRatio: 0.533,
  },
  sem: {
    key: "sem",
    name: "Juan Sebastián",
    role: "Google Ads (SEM)",
    blurb: "Gestiona y optimiza las campañas de Google Ads de cada cliente.",
    accent: "var(--color-coral-pulse)",
    helpsIf: "pagas anuncios y no te compran.",
    photoSrc: "/Integrantes/Juanse.png",
    photoRatio: 0.721,
  },
};
