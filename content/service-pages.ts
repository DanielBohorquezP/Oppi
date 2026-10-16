import type { team } from "@/content/team";

export type ServiceKey = keyof typeof team;

const Y = "#ffe848";
const I = "#040054";
const C = "#f8673e";
const S = "#7a7a7a";

export type IncludeCard = {
  /** Nombre del icono (ver ICONS en components/sections/IncludeGrid.tsx). */
  icon: string;
  accent: string;
  title: string;
  text: string;
};

export type ServicePageData = {
  eyebrow: string;
  h1Pre: string;
  h1Hi: string;
  h1Post: string;
  desc: string;
  cta: string;
  /** Muestra el bloque "Desarrollo web" dentro de "Qué incluye". */
  web: boolean;
  includeTitle: string;
  include: IncludeCard[];
  processTitle: string;
  steps: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDesc: string;
  /** Colores del bloque "Quién lleva tu cuenta". */
  surface: string;
  glow: string;
  text: string;
  body: string;
  btnBg: string;
  btnText: string;
};

export const colors = { Y, I, C, S };

export const servicePages: Record<ServiceKey, ServicePageData> = {
  seo: {
    eyebrow: "Estrategia SEO",
    h1Pre: "Tus clientes te buscan en Google. Hoy encuentran a ",
    h1Hi: "tu competencia",
    h1Post: ".",
    desc: "Posicionamos tu página para que, cuando alguien busque lo que vendes en Google o le pregunte a ChatGPT, tu negocio sea la primera opción. Clientes que llegan solos, mes a mes.",
    cta: "Descubre por qué no apareces",
    web: true,
    includeTitle: "Todo lo que hace falta para que Google te elija a ti",
    include: [
      { icon: "wrench", accent: Y, title: "Arreglamos lo que te esconde", text: "Revisamos velocidad y estructura de tu sitio para que Google pueda encontrarte y mostrarte." },
      { icon: "article", accent: C, title: "Respondemos lo que tu cliente busca", text: "Contenido sobre las preguntas reales de tus clientes, publicado mes a mes." },
      { icon: "map-pin", accent: I, title: "Te eligen los que están cerca", text: "Tu ficha de Google bien hecha para que te encuentre quien busca en tu zona." },
      { icon: "sparkle", accent: S, title: "La IA te recomienda", text: "Preparamos tu contenido para que ChatGPT, Gemini y Copilot te citen como opción." },
    ],
    processTitle: "Cómo trabajamos mes a mes",
    steps: [
      { title: "Diagnóstico", text: "Te mostramos por qué hoy Google no te muestra y quién se está quedando con tus clientes." },
      { title: "Plan", text: "Atacamos primero lo que más rápido te hace aparecer." },
      { title: "Trabajo mensual", text: "Mejoramos tu página y publicamos contenido cada mes, ajustando según lo que funciona." },
      { title: "Reporte claro", text: "Cada mes ves cuántas personas te encontraron y cuántas se volvieron clientes." },
    ],
    faqs: [
      { question: "¿En cuánto tiempo veo resultados?", answer: "El SEO es una estrategia de mediano plazo: los primeros movimientos suelen verse entre el mes 2 y 3, y los resultados más sólidos entre el mes 4 y 6." },
      { question: "¿Qué incluye la estrategia mensual?", answer: "Optimización on-page, estructura de datos (schema), estrategia de contenidos, señales de SEO local si aplica, y un reporte mensual de posiciones y tráfico." },
      { question: "¿Qué es la visibilidad en IA (GEO)?", answer: "Estructuramos tu contenido para que ChatGPT, Gemini y Copilot lo puedan leer y citar como fuente, no solo Google." },
      { question: "¿Funciona para negocios locales?", answer: "Sí, es uno de nuestros casos más comunes: optimizamos tu ficha de Google, consistencia de nombre/dirección/teléfono y contenido enfocado en búsquedas locales." },
      { question: "¿Necesito cambiar de sitio web para hacer SEO?", answer: "No necesariamente. Podemos trabajar sobre tu sitio actual; si detectamos limitaciones técnicas serias, te lo decimos como parte de la auditoría inicial." },
      { question: "¿Y si mi sitio necesita rediseño o uno nuevo?", answer: "Si la auditoría muestra que tu web frena el SEO (es lenta, se ve desactualizada o no existe), podemos desarrollarla como complemento de la estrategia, pensada desde el inicio para posicionar y convertir." },
    ],
    ctaTitle: "¿Por qué tu competencia aparece y tú no?",
    ctaDesc: "Te lo mostramos gratis revisando tu sitio.",
    surface: I,
    glow: "rgba(255,255,255,0.1)",
    text: "#ffffff",
    body: "#e0e0e0",
    btnBg: C,
    btnText: "#ffffff",
  },
  sem: {
    eyebrow: "Google Ads (SEM)",
    h1Pre: "Deja de pagar clics que ",
    h1Hi: "no te compran",
    h1Post: "",
    desc: "Ponemos tu negocio arriba en Google justo cuando alguien está buscando lo que vendes, y cada semana cortamos lo que gasta sin vender. Pagas por clientes, no por curiosos.",
    cta: "Descubre cuánto presupuesto estás perdiendo",
    web: false,
    includeTitle: "Cada peso trabajando, ninguno desperdiciado",
    include: [
      { icon: "magnifying-glass", accent: C, title: "Apareces cuando van a comprar", text: "Tu anuncio sale arriba justo cuando alguien busca lo que vendes. Pagas por gente con intención, no por curiosos." },
      { icon: "arrow-u-up-left", accent: Y, title: "Recuperas a los que se fueron", text: "Volvemos a mostrarle tu negocio a quien visitó tu página y no compró." },
      { icon: "calendar-check", accent: I, title: "Revisión cada semana", text: "Cortamos palabras y anuncios que gastan sin vender. Nada en piloto automático." },
    ],
    processTitle: "Cómo trabajamos mes a mes",
    steps: [
      { title: "Revisión de tu cuenta", text: "Encontramos dónde se está yendo tu presupuesto (o estudiamos tu mercado si empiezas de cero)." },
      { title: "Campañas ordenadas", text: "Organizamos tus anuncios según lo que la gente busca y medimos cada contacto desde el día uno." },
      { title: "Lanzamiento con control", text: "Arrancamos con presupuesto controlado y ajustamos en las primeras semanas." },
      { title: "Resultados", text: "Te mostramos cuánto invertiste, cuántos clientes llegaron y cuánto te costó cada uno." },
    ],
    faqs: [
      { question: "¿Cuánto presupuesto de anuncios necesito para empezar?", answer: "Depende de tu industria y competencia, pero solemos recomendar un mínimo mensual de anuncios que definimos juntos en la auditoría inicial, además de nuestra tarifa de gestión." },
      { question: "¿Qué diferencia hay entre esto y el servicio de SEO?", answer: "El SEO construye visibilidad orgánica de forma gradual; SEM te pone arriba de los resultados de búsqueda de inmediato, pagando por cada clic. Muchos clientes usan ambos: SEM mientras el SEO madura." },
      { question: "Ya tengo una cuenta de Google Ads, ¿pueden tomarla?", answer: "Sí, empezamos con una auditoría de tu cuenta actual para identificar qué está funcionando y qué está desperdiciando presupuesto antes de hacer cualquier cambio." },
      { question: "¿Cómo miden si la campaña está funcionando?", answer: "Con seguimiento de conversiones configurado desde el inicio: llamadas, formularios o compras. Cada reporte mensual muestra CPA (costo por cliente), ROAS (retorno por peso invertido) y CTR (porcentaje de clics), no solo clics." },
      { question: "¿Qué incluye la gestión?", answer: "Campañas de búsqueda, display y remarketing; ajuste semanal de pujas, palabras clave negativas y creatividades." },
    ],
    ctaTitle: "¿Cuánto de tu presupuesto se va en clics que no compran?",
    ctaDesc: "Revisamos tu cuenta gratis y te mostramos dónde recuperarlo.",
    surface: C,
    glow: "rgba(255,255,255,0.25)",
    text: I,
    body: I,
    btnBg: I,
    btnText: "#ffffff",
  },
  marketing: {
    eyebrow: "Marketing Digital y Meta Ads",
    h1Pre: "Deja de publicar y pautar ",
    h1Hi: "a ciegas",
    h1Post: "",
    desc: "Descubrimos dónde se está yendo tu dinero, definimos qué decirle a tu cliente ideal y lo convertimos en contenido y anuncios en Facebook e Instagram que traen clientes, no solo likes.",
    cta: "Agenda tu diagnóstico gratis",
    web: false,
    includeTitle: "Lo que hacemos para que tus redes vendan",
    include: [
      { icon: "magnifying-glass", accent: S, title: "Encontramos la fuga", text: "Revisamos tus campañas, canales y contenido para ver dónde se está yendo tu dinero." },
      { icon: "target", accent: Y, title: "Definimos qué decir", text: "Tu público, tu propuesta y tu mensaje claros, para dejar el ensayo y error." },
      { icon: "film-strip", accent: I, title: "Contenido que vende", text: "Reels y posts a partir de los dolores y preguntas de tu cliente ideal." },
      { icon: "megaphone", accent: C, title: "Anuncios que traen clientes", text: "Campañas en Facebook e Instagram ajustadas por lo que te cuesta cada cliente." },
    ],
    processTitle: "De publicar a ciegas a saber qué funciona",
    steps: [
      { title: "Diagnóstico", text: "Vemos dónde se pierde tu dinero y qué frena tus resultados." },
      { title: "Mensaje", text: "Definimos a quién le hablas y qué decirle para que te elija." },
      { title: "Contenido y anuncios", text: "Publicamos para tu cliente ideal y lo amplificamos con anuncios en Meta." },
      { title: "Medición", text: "Cada mes ves cuánto invertiste, cuántos clientes llegaron y cuánto te costó cada uno." },
    ],
    faqs: [
      { question: "¿Qué incluye la auditoría de marketing?", answer: "Revisamos tu inversión, el rendimiento de tus campañas y la efectividad de tu comunicación para detectar oportunidades de mejora y tomar decisiones basadas en datos." },
      { question: "¿Qué métricas reportan en Meta Ads?", answer: "Inversión, alcance, leads, conversiones y costo por resultado, siempre enfocados en el retorno de la inversión." },
      { question: "¿Qué tipo de contenido crean?", answer: "Contenido estratégico para redes, especialmente Reels y posts, partiendo de los dolores, necesidades y preguntas de tu cliente ideal." },
      { question: "¿Necesito también SEO o Google Ads?", answer: "Depende de tu objetivo. Meta Ads y contenido te ayudan a generar demanda en redes; SEO y Google Ads captan a quien ya está buscando. En la llamada te decimos qué combinación te conviene." },
    ],
    ctaTitle: "¿Sabes cuánto te cuesta cada cliente que llega por redes?",
    ctaDesc: "En 20 minutos revisamos tus campañas y te decimos dónde se está yendo el dinero.",
    surface: Y,
    glow: "rgba(255,255,255,0.4)",
    text: I,
    body: I,
    btnBg: I,
    btnText: "#ffffff",
  },
};
