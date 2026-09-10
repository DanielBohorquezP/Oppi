# Oppi — sitio web

## Qué es Oppi

Oppi es una agencia de marketing digital. El sitio (`oppi-web/`) es su portafolio: presenta los servicios, casos de éxito y captura contacto para agendar llamadas comerciales.

## El pivote de negocio (2026)

Oppi ofrecía originalmente 3 servicios: **Stand NFC Premium** (un dispositivo físico con chip NFC que llevaba a los clientes directo al formulario de reseñas de Google), **Desarrollo Web** y **SEO**. El sitio incluía además un mini e-commerce (carrito, checkout con Stripe) para vender los stands NFC como producto físico.

A partir de este rediseño, Oppi **deja de ofrecer el Stand NFC** y pasa a ofrecer:

1. **Desarrollo Web** — sitios rápidos y enfocados en conversión.
2. **SEO** — posicionamiento orgánico en buscadores.
3. **SEM** (nuevo) — Google Ads: campañas de búsqueda y display, remarketing, y optimización continua de cuentas.

Como consecuencia, todo el código relacionado al Stand NFC y al e-commerce (catálogo de productos, carrito, checkout, integración con Stripe) fue eliminado por completo: ya no hay ningún producto físico que vender, y los 3 servicios actuales se venden por contacto directo ("Agenda una llamada"), no por checkout.

## Identidad de marca

- **Logo**: `public/Logo/IMG_2374.PNG` — wordmark "Oppi" donde la "O" es una flecha ascendente dentro de un círculo (el propio isotipo ya es un símbolo de crecimiento).
- **Colores de marca**:
  - Índigo oscuro `#110265` — superficies oscuras (Hero, footer, fondos de sección).
  - Amarillo/Lima `#F4FB4D` — acento principal, CTAs, highlights.
- **Acentos por servicio**: Desarrollo Web → Lima, SEO → Índigo, SEM → Coral (`--color-coral-pulse`, `#ff643b`).
- **Tipografía**: DM Sans para texto general (placeholder). Una segunda fuente monoespaciada se usa solo en cifras/KPIs destacados (stats, CPA/ROAS/CTR). **La tipografía definitiva de marca está pendiente** — el usuario la enviará más adelante; hasta entonces DM Sans + la fuente mono placeholder se mantienen como base provisional.

## Estructura del sitio

Next.js 15 (App Router) + TypeScript + Tailwind v4.

- `app/page.tsx` — home: Hero, resumen de servicios, secciones de prueba social y proceso.
- `app/servicios/page.tsx` — listado de los 3 servicios con anclas.
- `app/servicios/desarrollo-web/`, `app/servicios/seo/`, `app/servicios/sem/` — página completa de cada servicio (mismo patrón: intro, "qué incluye", proceso, stat destacado, FAQ, CTA final).
- `app/quienes-somos/page.tsx`, `app/experiencia/page.tsx`, `app/blog/` — páginas institucionales y de contenido.
- `content/services.ts` — fuente única de verdad de los 3 servicios (usada por Header, menú de servicios, footer y el resumen de servicios de la home).
- `content/blog/*.md` — posts del blog, leídos dinámicamente por `lib/blog.ts`.
- `app/globals.css` — sistema de diseño: colores de marca, tipografía, radios, sombras, animaciones, todo como variables CSS de Tailwind v4 (`@theme`).
- `components/ui/` — piezas base reutilizables (PastelCard, TagChip, Button, SectionHeading).
- `components/sections/` — bloques de página reutilizables (ServiceIntro, ProcessSteps, Faq, CtaBand, y las secciones específicas de la home).
- `components/layout/` — Header, Footer, menú de servicios, notificación flotente.

## Bitácora de este rediseño

- **Fase A** — Eliminación total del Stand NFC y del e-commerce (carrito, checkout, Stripe, catálogo de productos, blog post ligado a NFC).
- **Fase B** — Servicios centralizados en `content/services.ts` y creación de la página de SEM.
- **Fase C** — Rebrand visual: paleta índigo/lima real, logo real, tipografía mono para cifras, rediseño del Hero (growth line en vez del mockup de reseñas), limpieza de copy de NFC en los componentes de la home.
- **Fase D** — Ajustes de copy fuera de la home (quienes-somos, experiencia, FAQ de desarrollo web, notificación flotente).
