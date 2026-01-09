// components/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/about", label: "Über uns" },
  { href: "/projects", label: "Projekte" },
  { href: "/contact", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-Status für Hintergrund/Shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile-Menü schließen bei Routenwechsel
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Mobile-Menü schließen, wenn auf Desktop gewechselt wird
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-slate-200"
          : "bg-white/70 backdrop-blur-xl border-white/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo + Brandname */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-white shadow-md shadow-brand/20">
            <Image
              src="/logo-mn.png"
              alt="MN Glanzwerk Logo"
              width={40}
              height={40}
              priority
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col leading-tight overflow-hidden">
            <span className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors truncate">
              MN GLANZWERK
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-[0.14em]">
              Profi. Reinigungsdienst
            </span>
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-brand/10 text-brand"
                  : "text-slate-700 hover:text-brand hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop-CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="tel:+491637885512"
            className="hidden lg:inline-flex items-center rounded-full border border-brand/20 px-3 py-2 text-xs font-medium text-brand hover:bg-brand/5 transition"
          >
            0163&nbsp;7885512
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 lg:px-5 py-2 rounded-full bg-brand text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-brand-soft hover:shadow-lg transition-all"
          >
            Angebot anfordern
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menü öffnen oder schließen"
          aria-expanded={menuOpen}
          className="md:hidden inline-flex items-center justify-center rounded-full p-1.5 text-slate-700 hover:text-brand hover:bg-slate-100 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
  <div className="md:hidden fixed inset-x-0 top-[4.25rem] bottom-0 z-40 bg-black/30 backdrop-blur-sm">
    <div className="absolute inset-x-4 top-2 rounded-2xl bg-white/95 border border-slate-200 shadow-xl">
      <nav className="flex flex-col px-6 py-4 space-y-2 text-sm text-slate-700">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-lg transition ${
              isActive(item.href)
                ? "bg-brand/10 text-brand font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="pt-3 mt-2 border-t border-slate-200 space-y-2">
          <a
            href="tel:+491637885512"
            className="block text-xs text-slate-600"
          >
            Telefon / WhatsApp:{" "}
            <span className="font-medium text-brand">
              0163&nbsp;7885512
            </span>
          </a>
          <Link
            href="/contact"
            className="mt-1 inline-flex w-full items-center justify-center px-4 py-2 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft transition"
          >
            Angebot anfordern
          </Link>
        </div>
      </nav>
    </div>
  </div>
)}

    </header>
  );
}
