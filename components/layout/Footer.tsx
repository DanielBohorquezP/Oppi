import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { site, whatsappHref } from "@/content/site";

const linkClass =
  "inline-block py-[12px] text-[#e0e0e0] transition-colors duration-200 hover:text-white";

// Orden del pie: Marketing Digital, SEO, Google Ads.
const footerServices = [...services].sort(
  (a, b) =>
    ["marketing", "seo", "sem"].indexOf(a.key) -
    ["marketing", "seo", "sem"].indexOf(b.key)
);

export function Footer() {
  return (
    <footer className="bg-[#040054] text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[40px] px-[clamp(24px,5vw,80px)] py-[64px]">
        <div>
          <Image
            src="/Logo/oppi-logo-yellow.png"
            alt="Oppi"
            width={851}
            height={359}
            unoptimized
            className="h-[24px] w-auto"
          />
          <p className="mt-[16px] text-[14px] leading-[1.38] text-[#e0e0e0]">
            Te ayudamos a que te encuentren, te elijan y te compren.
          </p>
        </div>

        <div>
          <p className="text-[14px] font-bold">Servicios</p>
          <div className="mt-[16px] flex flex-col text-[14px]">
            {footerServices.map((service) => (
              <Link key={service.href} href={service.href} className={linkClass}>
                {service.navLabel}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] font-bold">Empresa</p>
          <div className="mt-[16px] flex flex-col text-[14px]">
            <Link href="/quienes-somos" className={linkClass}>
              Quiénes Somos
            </Link>
            <Link href="/experiencia" className={linkClass}>
              Experiencia
            </Link>
            <Link href="/blog" className={linkClass}>
              Blog
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[14px] font-bold">Contacto</p>
          <div className="mt-[16px] flex flex-col text-[14px]">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              WhatsApp: {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-[24px] text-center text-[12px] text-[#a6a6a6]">
        © {new Date().getFullYear()} Oppi. Todos los derechos reservados.{" "}
        <Link href="/politica-de-privacidad" className="underline">
          Política de privacidad
        </Link>
      </div>

      <p
        aria-hidden="true"
        className="select-none overflow-hidden px-[24px] pb-[24px] text-center font-[family-name:var(--font-archivo-black)] text-[14vw] leading-none tracking-[-0.04em] text-white/5"
      >
        Oppi
      </p>
    </footer>
  );
}
