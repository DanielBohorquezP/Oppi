// Datos de contacto globales. Cambia aquí el número y la ciudad y se
// actualizan en todo el sitio.
export const site = {
  /** URL base de producción (sin barra final). Se usa en metadata, sitemap y robots. */
  url: "https://www.oppi.digital",
  name: "Oppi",
  /** Número de WhatsApp en formato internacional, solo dígitos (57 + número). */
  whatsappNumber: "573137233605",
  /** El mismo número, como se muestra en pantalla. */
  whatsappDisplay: "+57 313 723 3605",
  whatsappMessage: "Hola Oppi, quiero información sobre sus servicios.",
  /** Ciudad principal para los títulos con intención local. */
  city: "Barranquilla",
};

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
