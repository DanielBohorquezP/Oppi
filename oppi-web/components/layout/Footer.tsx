import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink-black)] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-40 px-24 py-64 md:grid-cols-4 md:px-80">
        <div>
          <Image
            src="/Logo/IMG_2374.PNG"
            alt="Oppi"
            width={180}
            height={120}
            unoptimized
            className="h-32 w-auto rounded-[var(--radius-icons)]"
          />
          <p className="mt-16 text-body-sm text-[var(--color-frost-gray)]">
            Ayudamos a empresas a aumentar su visibilidad digital y sus
            ventas.
          </p>
        </div>

        <div>
          <p className="text-body-sm font-semibold text-white">Servicios</p>
          <ul className="mt-16 space-y-8 text-body-sm text-[var(--color-frost-gray)]">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-white">
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-body-sm font-semibold text-white">Empresa</p>
          <ul className="mt-16 space-y-8 text-body-sm text-[var(--color-frost-gray)]">
            <li>
              <Link href="/quienes-somos" className="hover:text-white">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link href="/experiencia" className="hover:text-white">
                Experiencia
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-body-sm font-semibold text-white">Contacto</p>
          <ul className="mt-16 space-y-8 text-body-sm text-[var(--color-frost-gray)]">
            <li>hola@oppi.com</li>
            <li>+51 999 999 999</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-24 py-24 text-center text-caption text-[var(--color-ash)] md:px-80">
        © {new Date().getFullYear()} Oppi. Todos los derechos reservados.
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
