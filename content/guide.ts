import type { team } from "@/content/team";

// Servicios, retos y la frase del especialista para cada reto. Lo usa el
// flujo guiado (tarjeta del hero y popup de agendamiento).
export type Challenge = { label: string; pitch: string };

export type Service = {
  id: keyof typeof team;
  question: string;
  challenges: Challenge[];
};

export const services: Service[] = [
  {
    id: "marketing",
    question: "¿Cómo va tu marketing hoy?",
    challenges: [
      {
        label: "Invierto en marketing pero no sé qué funciona",
        pitch:
          "Hagamos una auditoría de tus campañas y canales para ver dónde se está yendo el dinero y qué ajustar primero.",
      },
      {
        label: "Mis anuncios en Meta no me traen clientes",
        pitch:
          "Revisemos segmentación, mensajes y costo por resultado de tus campañas en Facebook e Instagram para volverlas rentables.",
      },
      {
        label: "No sé qué publicar en mis redes",
        pitch:
          "Armemos Reels y posts a partir de los dolores y preguntas de tu cliente ideal, conectados con tu propuesta de valor.",
      },
    ],
  },
  {
    id: "seo",
    question: "¿Cómo te va hoy en Google?",
    challenges: [
      {
        label: "Tengo tráfico pero no vende",
        pitch:
          "Miremos qué búsquedas te traen visitas y cómo convertirlas en clientes, no solo en clics.",
      },
      {
        label: "Mi página no tiene tráfico",
        pitch:
          "Armemos un plan de contenido sobre lo que tu cliente ya está buscando para empezar a atraer visitas reales.",
      },
      {
        label: "No tengo página web",
        pitch:
          "Armemos una web pensada desde el inicio para posicionar en Google y convertir visitas en clientes, junto con la estrategia SEO.",
      },
      {
        label: "No aparezco en Google",
        pitch:
          "Revisemos por qué Google no te muestra y qué arreglar primero para que empieces a aparecer.",
      },
    ],
  },
  {
    id: "sem",
    question: "¿Cómo van tus anuncios?",
    challenges: [
      {
        label: "Invierto en anuncios pero no vendo",
        pitch:
          "Revisemos tus campañas y a quién le están llegando. Suele haber presupuesto que se puede recuperar rápido.",
      },
      {
        label: "Nunca he hecho anuncios en Google",
        pitch:
          "Te ayudo a lanzar tu primera campaña con un presupuesto claro y enfocada en contactos reales.",
      },
      {
        label: "Cada cliente me sale muy caro",
        pitch:
          "Miremos palabras clave, anuncios y página de destino para bajar lo que te cuesta cada cliente.",
      },
    ],
  },
];
