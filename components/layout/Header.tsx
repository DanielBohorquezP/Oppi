"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { VariableFontHover } from "@/components/ui/variable-font-hover";
import { ServicesMenu } from "@/components/layout/ServicesMenu";
import { services } from "@/content/services";

const navLinks = [{ href: "/", label: "Inicio" }];

const afterServicesLinks = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // El menú es siempre azul de marca, con texto blanco.
  const linkColor = "text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-ink-black)] text-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-24 py-16 md:px-80">
        <Link href="/" className="block">
          <Image
            src="/Logo/IMG_2374.PNG"
            alt="Oppi"
            width={180}
            height={120}
            priority
            unoptimized
            className="h-48 w-auto rounded-[var(--radius-icons)]"
          />
        </Link>

        <nav className="hidden items-center gap-32 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-sm ${
                pathname === link.href
                  ? "text-[var(--color-amber-edge)]"
                  : linkColor
              }`}
            >
              <VariableFontHover
                label={link.label}
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 700"
              />
            </Link>
          ))}
          <ServicesMenu dark />
          {afterServicesLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-sm ${
                pathname === link.href
                  ? "text-[var(--color-amber-edge)]"
                  : linkColor
              }`}
            >
              <VariableFontHover
                label={link.label}
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 700"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-16">
          <div className="hidden md:block">
            <Button variant="nav-outline" href="/quienes-somos#contacto">
              Agenda una llamada
            </Button>
          </div>
          <button
            className="flex h-40 w-40 items-center justify-center md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 px-24 py-16 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-12 text-body font-medium"
            >
              {link.label}
            </Link>
          ))}

          <p className="py-12 text-body font-medium">Servicios</p>
          <div className="flex flex-col border-l border-white/20 pl-16">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setOpen(false)}
                className="py-12 text-body-sm text-[var(--color-frost-gray)]"
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
              className="py-12 text-body font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-16" onClick={() => setOpen(false)}>
            <Button variant="nav-outline" href="/quienes-somos#contacto">
              Agenda una llamada
            </Button>
          </div>
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
