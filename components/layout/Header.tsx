"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
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

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-frost-gray)] bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-24 py-20 md:px-80">
        <Link href="/" className="block">
          <Image
            src="/Logo/IMG_2374.PNG"
            alt="Oppi"
            width={180}
            height={120}
            priority
            unoptimized
            className="h-32 w-auto rounded-[var(--radius-icons)]"
          />
        </Link>

        <nav className="hidden items-center gap-32 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-sm font-medium transition-opacity hover:opacity-70 ${
                pathname === link.href
                  ? "text-[var(--color-amber-edge)]"
                  : "text-[var(--color-ink-black)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ServicesMenu />
          {afterServicesLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-sm font-medium transition-opacity hover:opacity-70 ${
                pathname === link.href
                  ? "text-[var(--color-amber-edge)]"
                  : "text-[var(--color-ink-black)]"
              }`}
            >
              {link.label}
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
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-16 border-t border-[var(--color-frost-gray)] px-24 py-24 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-body font-medium"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/servicios"
            onClick={() => setOpen(false)}
            className="text-body font-medium"
          >
            Servicios
          </Link>
          <div className="flex flex-col gap-12 border-l border-[var(--color-frost-gray)] pl-16">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setOpen(false)}
                className="text-body-sm text-[var(--color-slate)]"
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
              className="text-body font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="nav-outline" href="/quienes-somos#contacto">
            Agenda una llamada
          </Button>
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
