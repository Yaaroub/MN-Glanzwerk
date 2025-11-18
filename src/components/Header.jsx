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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-slate-200"
          : "bg-white/60 backdrop-blur-xl border-white/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo + Brandname */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md shadow-brand/30">
            <Image
              src="/logo-mn.png"
              alt="MN Glanzwerk Logo"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">
              MN GLANZWERK
            </span>
            <span className="text-[11px] text-slate-500 uppercase tracking-[0.14em]">
              Cleaning Company
            </span>
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-full transition-colors duration-200 ${
                  active
                    ? "bg-brand/10 text-brand"
                    : "text-slate-700 hover:text-brand hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop-CTA */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft hover:shadow-lg transition-all"
        >
          Angebot anfordern
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menü öffnen oder schließen"
          aria-expanded={menuOpen}
          className="md:hidden text-slate-700 hover:text-brand transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm">
          <div className="absolute top-20 inset-x-4 rounded-2xl bg-white/95 border border-slate-200 shadow-xl">
            <nav className="flex flex-col px-6 py-4 space-y-2 text-sm text-slate-700">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg transition ${
                      active
                        ? "bg-brand/10 text-brand font-semibold"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft transition"
              >
                Angebot anfordern
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
