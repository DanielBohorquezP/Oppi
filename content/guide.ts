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
    id: "desarrollo-web",
    question: "¿Qué pasa hoy con tu web?",
    challenges: [
      {
        label: "Mi página no carga o es muy lenta",
        pitch:
          "Revisemos qué la hace lenta. Casi siempre son pocas cosas y el cambio se nota en ventas desde la primera semana.",
      },
      {
        label: "Todavía no tengo página web",
        pitch:
          "Armemos una web pensada para vender desde el día uno, sin plantillas y lista para que te encuentren en Google.",
      },
      {
        label: "Quiero actualizarla, se ve vieja",
        pitch:
          "Te muestro qué conservar y qué rediseñar para que tu web se vea actual sin perder lo que ya te funciona.",
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
