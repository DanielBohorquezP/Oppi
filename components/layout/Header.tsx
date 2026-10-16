"use client";

import Link from "next/link";
import { ContactLink } from "@/components/ui/ContactLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ServicesMenu } from "@/components/layout/ServicesMenu";
import { services } from "@/content/services";

const navLinks = [{ href: "/", label: "Inicio" }];

const afterServicesLinks = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/blog", label: "Blog" },
];

// Páginas que tienen el bloque #contacto; en el resto el botón lleva al
// formulario del inicio.
function hasContactBlock(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/quienes-somos" ||
    pathname.startsWith("/servicios/")
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Con scrollY > 24 el header pasa a vidrio translúcido. Listener passive con
  // requestAnimationFrame.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const contactHref = hasContactBlock(pathname) ? "#contacto" : "/#contacto";

  const linkClass = (href: string) =>
    `whitespace-nowrap text-[14px] transition-colors duration-200 hover:text-[#ffe848] ${
      pathname === href ? "font-bold text-[#f8673e]" : "text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/[0.08] text-white [transition:background-color_400ms,box-shadow_400ms] ${
        scrolled
          ? "bg-[rgba(4,0,84,0.82)] shadow-[0_12px_32px_-16px_rgba(4,0,84,0.6)] backdrop-blur-[16px]"
          : "bg-[#040054]"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-[24px] px-[clamp(24px,5vw,80px)] py-[16px]">
        <Link href="/" className="block shrink-0">
          <Image
            src="/Logo/oppi-logo-yellow.png"
            alt="Oppi"
            width={851}
            height={359}
            priority
            unoptimized
            className="block h-[32px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-[18px] md:flex lg:gap-[28px]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <ServicesMenu dark />
          {afterServicesLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-[16px]">
          <ContactLink
            href={contactHref}
            className="hidden whitespace-nowrap rounded-[40px] bg-[#ffe848] px-[20px] py-[9px] text-[14px] font-bold text-[#040054] [transition:transform_300ms_cubic-bezier(.16,1,.3,1),background-color_200ms] hover:bg-white hover:text-[#040054] hover:[transform:translateY(-2px)] md:block"
          >
            Diagnóstico gratis
          </ContactLink>
          <button
            className="flex h-[40px] w-[40px] items-center justify-center md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 px-[24px] py-[16px] md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-[12px] text-[16px] font-medium"
            >
              {link.label}
            </Link>
          ))}

          <p className="py-[12px] text-[16px] font-medium">Servicios</p>
          <div className="flex flex-col border-l border-white/20 pl-[16px]">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setOpen(false)}
                className="py-[12px] text-[14px] text-[#e0e0e0]"
              >
                {service.navLabel}
              </Link>
            ))}
          </div>

          {afterServicesLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-[12px] text-[16px] font-medium"
            >
              {link.label}
            </Link>
          ))}
          <ContactLink
            href={contactHref}
            onClick={() => setOpen(false)}
            className="mt-[16px] self-start rounded-[40px] bg-[#ffe848] px-[20px] py-[9px] text-[14px] font-bold text-[#040054]"
          >
            Diagnóstico gratis
          </ContactLink>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
