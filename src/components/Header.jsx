// src/components/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { site } from "@/src/lib/site";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/projects", label: "Projekte" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Menü schließen, sobald sich die Route ändert (ohne Effekt-Kaskade)
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-white/40 bg-white/75 shadow-md shadow-slate-900/5 backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="group flex min-w-0 items-center gap-2.5" aria-label="MN GLANZWERK – zur Startseite">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-brand/20 ring-1 ring-slate-100 transition group-hover:rotate-[-8deg] group-hover:scale-105">
            <Image src="/logo-mn.webp" alt="" width={36} height={36} priority className="h-8 w-8 object-contain" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">MN GLANZWERK</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Gebäudereinigung</span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-3.5 py-2 transition-colors ${
                isActive(item.href) ? "bg-brand text-white shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            aria-label={`Anrufen: ${site.phoneDisplay}`}
            className="hidden h-10 items-center gap-2 rounded-full border border-brand/20 px-3.5 text-xs font-semibold text-brand transition hover:bg-brand/5 lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="group hidden h-10 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brand to-brand-soft px-4 text-sm font-semibold text-white shadow-md shadow-brand/30 transition hover:shadow-lg sm:inline-flex"
          >
            Angebot
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobiles Menü */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-0 -z-10 bg-brand-deep/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          aria-label="Mobile Navigation"
          onClick={(e) => e.stopPropagation()}
          className={`absolute inset-x-3 top-20 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    isActive(item.href) ? "bg-brand/10 text-brand" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-40" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
            <a href={`tel:${site.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 py-3 text-sm font-semibold text-brand">
              <Phone className="h-4 w-4" aria-hidden="true" /> Anrufen
            </a>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center rounded-full bg-brand py-3 text-sm font-semibold text-white">
              Angebot
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
