"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/content/services";

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };
  const cancelClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };

  const isActive = pathname === "/servicios" || pathname.startsWith("/servicios/");

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-4 text-body-sm font-medium transition-opacity hover:opacity-70 ${
          isActive ? "text-[var(--color-amber-edge)]" : "text-[var(--color-ink-black)]"
        }`}
      >
        Servicios
        <ChevronIcon open={open} />
      </button>

      <div
        className={`absolute left-0 top-full z-50 mt-16 w-[280px] origin-top-left rounded-[var(--radius-cards-sm)] border border-[var(--color-frost-gray)] bg-white p-8 shadow-[var(--shadow-subtle)] transition-[opacity,transform] duration-150 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <span className="absolute -top-4 left-16 h-8 w-8 rotate-45 border-l border-t border-[var(--color-frost-gray)] bg-white" />
        <div className="relative">
          <Link
            href="/servicios"
            className="block rounded-[var(--radius-icons)] px-12 py-8 text-body-sm font-semibold text-[var(--color-amber-edge)] hover:bg-[var(--color-cloud-gray)]"
          >
            Ver todos los servicios
          </Link>
          <div className="my-4 h-px bg-[var(--color-frost-gray)]" />
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block rounded-[var(--radius-icons)] px-12 py-8 hover:bg-[var(--color-cloud-gray)]"
            >
              <p className="text-body-sm font-semibold text-[var(--color-ink-black)]">
                {service.navLabel}
              </p>
              <p className="text-caption text-[var(--color-slate)]">
                {service.menuDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
