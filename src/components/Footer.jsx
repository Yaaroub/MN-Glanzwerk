"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleCookieSettings = () => {
    if (typeof window === "undefined") return;
    // Entscheidung zurücksetzen
    localStorage.removeItem("cookie-consent");
    // Seite neu laden → CookieBanner erscheint wieder
    window.location.reload();
  };

  return (
    <footer className="bg-gradient-to-b from-sky-900 to-sky-950 text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-12 space-y-8">
        {/* Oberer Bereich */}
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-[2fr_1.3fr_1.3fr] items-start">
          {/* Info / Brand */}
          <div>
            <h3 className="font-semibold text-xl mb-2 text-white">
              MN GLANZWERK <br/> Profi. Reinigungsdienst
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ihr Partner für professionelle Reinigung mit Sitz in Bad Segeberg –
              für Kunden in ganz Schleswig-Holstein, Hamburg und Bremen, auf Wunsch
              auch deutschlandweit.{" "}
              <span className="block mt-1">
                Qualität • Zuverlässigkeit • Vertrauen.
              </span>
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Kontakt</h4>
            <p className="text-sm text-slate-300">
              Kurhausstraße 46
              <br />
              23795 Bad Segeberg
            </p>

            <p className="text-sm text-slate-300 mt-2">
              Telefon / WhatsApp:{" "}
              <a
                href="tel:+491637885512"
                className="text-sky-300 hover:underline"
              >
                0163 7885512
              </a>
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Mo–Sa 08:00–20:00 Uhr • Notdienst 24/7
            </p>
          </div>

          {/* Links + Social */}
          <div className="md:justify-self-end flex flex-col gap-3 text-sm">
            <nav className="flex flex-col gap-1.5">
              <Link href="/contact" className="hover:text-sky-300 transition">
                Kontakt
              </Link>
              <Link href="/impressum" className="hover:text-sky-300 transition">
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-sky-300 transition"
              >
                Datenschutz
              </Link>
              {/* Cookie-Einstellungen */}
              <button
                type="button"
                onClick={handleCookieSettings}
                className="text-left text-slate-300 hover:text-sky-300 transition"
                aria-label="Cookie-Einstellungen öffnen"
              >
                Cookie-Einstellungen
              </button>
            </nav>

            {/* Social Media */}
            <div className="mt-3">
              <p className="text-xs text-slate-400 mb-1">
                Folge uns auf Social Media
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/glanzwerkglanzwerk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MN Glanzwerk auf Instagram"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1.2" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@glanzwerk.glanzwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MN Glanzwerk auf TikTok"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="white"
                  >
                    <path d="M12.5 3h2c.2 1.6 1.4 3.4 3.7 3.8v2.2c-1.5.1-2.9-.4-3.8-1.3v6.6c0 2.9-1.9 5.2-4.9 5.2-3.2 0-5-2.4-5-4.8 0-2.6 1.9-4.7 4.9-4.8.6 0 1.2.1 1.8.3V8.7c-3.4-.1-5.8 2.3-6.3 5-.7 3.8 2.1 7.3 6.3 7.3 4.2 0 7.1-3.3 7.1-7.3V3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Unterer Bereich */}
        <div className="border-t border-sky-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>
            © {year} MN GLANZWERK Profi. Reinigungsdienst – Alle Rechte vorbehalten.
          </span>
          <span className="text-slate-500">
            Entwickelt von{" "}
            <Link
              href="https://hexel-tech.de"
              className="text-sky-300 hover:text-sky-200 hover:underline underline-offset-2"
            >
              Hexel Tech
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
