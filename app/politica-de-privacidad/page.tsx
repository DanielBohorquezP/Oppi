import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad y tratamiento de datos | Oppi",
  description:
    "Cómo Oppi recolecta, usa y protege tus datos personales, conforme a la Ley 1581 de 2012 de Colombia, y cómo ejercer tus derechos.",
};

const updated = "1 de octubre de 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Responsable del tratamiento",
    body: (
      <>
        <p>
          Oppi, con domicilio en {site.city}, Colombia, es la responsable del
          tratamiento de los datos personales recolectados a través de{" "}
          {site.url.replace("https://", "")}. Puedes contactarnos por WhatsApp
          al{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {site.whatsappDisplay}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. Datos que recolectamos",
    body: (
      <>
        <p>
          Cuando agendas una asesoría desde el formulario del sitio, te pedimos:
        </p>
        <ul>
          <li>Nombre.</li>
          <li>Correo electrónico.</li>
          <li>Número de WhatsApp.</li>
          <li>Dirección de tu sitio web (opcional).</li>
          <li>
            El servicio y el reto que elegiste, para preparar la conversación.
          </li>
        </ul>
        <p>
          Si nos escribes por WhatsApp, también recibimos tu número y el
          contenido del mensaje. No recolectamos datos sensibles ni datos de
          menores de edad.
        </p>
      </>
    ),
  },
  {
    title: "3. Finalidades del tratamiento",
    body: (
      <>
        <p>Usamos tus datos únicamente para:</p>
        <ul>
          <li>Contactarte por WhatsApp o correo para agendar y realizar la asesoría.</li>
          <li>Responder tus consultas y enviarte la propuesta de servicios que solicites.</li>
          <li>Prestar y dar seguimiento a los servicios que contrates.</li>
          <li>Cumplir obligaciones legales, contables y tributarias.</li>
        </ul>
        <p>
          No vendemos ni cedemos tus datos a terceros con fines comerciales.
        </p>
      </>
    ),
  },
  {
    title: "4. Autorización",
    body: (
      <p>
        Al enviar el formulario o escribirnos, nos autorizas de manera previa,
        expresa e informada para tratar tus datos con las finalidades descritas.
        Puedes revocar esta autorización en cualquier momento, salvo que exista
        un deber legal o contractual que nos obligue a conservar la información.
      </p>
    ),
  },
  {
    title: "5. Tus derechos como titular",
    body: (
      <>
        <p>De acuerdo con la Ley 1581 de 2012, tienes derecho a:</p>
        <ul>
          <li>Conocer, actualizar y rectificar tus datos personales.</li>
          <li>Solicitar prueba de la autorización que nos diste.</li>
          <li>Ser informado sobre el uso que damos a tus datos.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
          <li>Revocar la autorización y solicitar la supresión de tus datos.</li>
          <li>Acceder de forma gratuita a tus datos personales.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cómo ejercer tus derechos",
    body: (
      <p>
        Escríbenos por WhatsApp al{" "}
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          {site.whatsappDisplay}
        </a>{" "}
        indicando tu nombre, el dato que quieres consultar, corregir o eliminar
        y cómo contactarte. Atenderemos las consultas en un máximo de diez (10)
        días hábiles y los reclamos en un máximo de quince (15) días hábiles,
        conforme a la ley.
      </p>
    ),
  },
  {
    title: "7. Seguridad y conservación",
    body: (
      <p>
        Aplicamos medidas técnicas y administrativas razonables para proteger tus
        datos contra pérdida, acceso o uso no autorizado. Conservamos la
        información mientras sea necesaria para las finalidades descritas o para
        cumplir obligaciones legales, y luego la eliminamos.
      </p>
    ),
  },
  {
    title: "8. Cookies y herramientas de terceros",
    body: (
      <p>
        Este sitio no usa cookies de publicidad. El sitio se aloja en Vercel, que
        puede registrar datos técnicos básicos de la visita (como la dirección IP
        y el navegador) para operar y proteger el servicio. Si en el futuro
        incorporamos herramientas de analítica o publicidad, actualizaremos esta
        política.
      </p>
    ),
  },
  {
    title: "9. Cambios a esta política",
    body: (
      <p>
        Podemos actualizar esta política. La versión vigente siempre estará
        publicada en esta página, con su fecha de actualización.
      </p>
    ),
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <div className="px-24 pt-64 md:px-80">
        <SectionHeading
          eyebrow="Legal"
          title="Política de privacidad y tratamiento de datos"
          description={`Última actualización: ${updated}.`}
        />
      </div>

      <section className="mx-auto max-w-[800px] px-24 py-64 md:px-80">
        <div className="space-y-40 text-body text-[var(--color-graphite)] [&_a]:text-[var(--color-ink-black)] [&_a]:underline [&_li]:mt-8 [&_p]:mt-12 [&_ul]:ml-24 [&_ul]:mt-12 [&_ul]:list-disc">
          <p>
            En Oppi respetamos tu privacidad. Esta política explica qué datos
            personales recolectamos, para qué los usamos y cómo puedes ejercer
            tus derechos, en cumplimiento de la Ley 1581 de 2012 y el Decreto
            1377 de 2013 de Colombia.
          </p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-heading-sm font-semibold text-[var(--color-ink-black)]">
                {s.title}
              </h2>
              {s.body}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
