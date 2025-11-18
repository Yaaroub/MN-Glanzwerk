"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    // Wenn schon entschieden wurde → nie anzeigen
    if (consent) return;

    // Kleines Delay, damit erst nach dem Client-Load erscheint
    const timer = setTimeout(() => {
      setShow(true);
    }, 1200); // 1,2 Sekunden nach Page-Load

    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        essential: true,
        analytics: true,
        maps: true,
      })
    );
    setShow(false);
    window.dispatchEvent(new Event("cookie-updated"));
  };

  const decline = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        essential: true,
        analytics: false,
        maps: false,
      })
    );
    setShow(false);
    window.dispatchEvent(new Event("cookie-updated"));
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-md p-4 sm:p-5 md:p-6 animate-[fadeInUp_0.3s_ease-out]">
        <div className="flex gap-3">
          {/* Icon / Badge */}
          <div className="mt-1 hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <span className="text-lg">🍪</span>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Wir verwenden Cookies
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Wir nutzen Cookies für grundlegende Funktionen sowie – mit Ihrer
              Zustimmung – für anonyme Statistik und eingebettete Inhalte
              (z.&nbsp;B. Google Maps). Details finden Sie in unserer{" "}
              <a
                href="/datenschutz"
                className="font-medium text-brand hover:text-brand-accent underline underline-offset-2"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={decline}
            className="w-full sm:w-auto rounded-full border border-slate-300 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={accept}
            className="w-full sm:w-auto rounded-full bg-brand px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-brand-soft hover:shadow-lg transition"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
