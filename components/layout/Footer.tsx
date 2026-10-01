import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { site, whatsappHref } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink-black)] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-40 px-24 py-64 md:grid-cols-4 md:px-80">
        <div>
          <Image
            src="/Logo/oppi-logo-yellow.png"
            alt="Oppi"
            width={851}
            height={359}
            unoptimized
            className="h-24 w-auto"
          />
          <p className="mt-16 text-body-sm text-[var(--color-frost-gray)]">
            Ayudamos a empresas a aumentar su visibilidad digital y sus
            ventas.
          </p>
        </div>

        <div>
          <p className="text-body-sm font-semibold text-white">Servicios</p>
          <ul className="mt-16 space-y-0 text-body-sm text-[var(--color-frost-gray)]">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="inline-block py-12 hover:text-white">
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-body-sm font-semibold text-white">Empresa</p>
          <ul className="mt-16 space-y-0 text-body-sm text-[var(--color-frost-gray)]">
            <li>
              <Link href="/quienes-somos" className="inline-block py-12 hover:text-white">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link href="/experiencia" className="inline-block py-12 hover:text-white">
                Experiencia
              </Link>
            </li>
            <li>
              <Link href="/blog" className="inline-block py-12 hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-body-sm font-semibold text-white">Contacto</p>
          <ul className="mt-16 space-y-0 text-body-sm text-[var(--color-frost-gray)]">
            <li>
              <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-12 hover:text-white"
            >
              WhatsApp: {site.whatsappDisplay}
            </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-24 py-24 text-center text-caption text-[var(--color-ash)] md:px-80">
        © {new Date().getFullYear()} Oppi. Todos los derechos reservados.{" "}
        <Link href="/politica-de-privacidad" className="underline hover:text-white">
          Política de privacidad
        </Link>
      </div>

      <p
        aria-hidden="true"
        className="select-none overflow-hidden px-24 pb-24 text-center text-[18vw] font-bold leading-none tracking-tighter text-white/5 md:text-[12vw]"
      >
        Oppi
      </p>
    </footer>
  );
}
