"use client";

import { MapPin } from "lucide-react";
import { useConsent } from "../lib/useConsent";
import { site } from "../lib/site";

function enableMaps() {
  let current = { essential: true, analytics: false, maps: false };
  try {
    current = { ...current, ...JSON.parse(localStorage.getItem("cookie-consent") || "{}") };
    localStorage.setItem("cookie-consent", JSON.stringify({ ...current, maps: true }));
  } catch {}
  window.dispatchEvent(new Event("cookie-updated"));
}

export default function MapBox() {
  const { maps } = useConsent();

  if (!maps) {
    return (
      <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-slate-100 p-8 text-center">
        <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:linear-gradient(#cbd5e1_1px,transparent_1px),linear-gradient(90deg,#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30">
          <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" />
          <MapPin className="relative h-6 w-6" aria-hidden="true" />
        </span>
        <p className="relative mt-4 font-bold text-slate-900">
          {site.address.street}, {site.address.zip} {site.address.city}
        </p>
        <p className="relative mt-1 max-w-xs text-xs text-slate-500">
          Mit Klick auf „Karte laden“ wird Google Maps geladen und Daten an Google übertragen.
        </p>
        <div className="relative mt-5 flex flex-wrap justify-center gap-2">
          <button type="button" onClick={enableMaps} className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-soft">
            Karte laden
          </button>
          <a
            href="https://www.google.com/maps/search/?api=1&query=MN+GLANZWERK+Kurhausstra%C3%9Fe+46+Bad+Segeberg"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand/25 bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand/5"
          >
            Route planen
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
      <iframe
        title="MN GLANZWERK Standort – Bad Segeberg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4697.025481313293!2d10.306584!3d53.9404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b23f002d55f021%3A0x4a1283a41da04bee!2sMN%20GLANZWERK!5e0!3m2!1sde!2sde!4v1762602746935!5m2!1sde!2sde"
        className="h-full min-h-[320px] w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
