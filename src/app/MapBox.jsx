"use client";

import { useConsent } from "../lib/useConsent";

export default function MapBox() {
  const { maps } = useConsent();

  // Wenn Nutzer Karten NICHT erlaubt hat → Hinweisbox
  if (!maps) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center">
        <p className="text-sm font-medium text-slate-800">
          Google Maps ist aktuell deaktiviert.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Aktivieren Sie „Karten“ in den Cookie-Einstellungen, um die Karte zu
          laden.
        </p>
      </div>
    );
  }

  // Wenn "maps" erlaubt → echte Google-Maps-Karte laden
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      <iframe
        title="MN GLANZWERK Standort – Bad Segeberg"
        aria-label="Google Maps Karte mit dem Standort von MN GLANZWERK Cleaning Company in Bad Segeberg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4697.025481313293!2d10.306584!3d53.9404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b23f002d55f021%3A0x4a1283a41da04bee!2sMN%20GLANZWERK!5e0!3m2!1sde!2sde!4v1762602746935!5m2!1sde!2sde"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
