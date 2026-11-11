// src/components/home/TrustBar.jsx
import { ShieldCheck, BadgeEuro, Clock, Users } from "lucide-react";

const items = [
  { icon: BadgeEuro, title: "Festpreis-Angebot", text: "Kostenlos & unverbindlich" },
  { icon: Users, title: "Festes Team", text: "Keine wechselnden Aushilfen" },
  { icon: Clock, title: "Notdienst 24/7", text: "Auch kurzfristig vor Ort" },
  { icon: ShieldCheck, title: "10+ Jahre Erfahrung", text: "Privat & Gewerbe" },
];

export default function TrustBar() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:px-6">
      <ul className="stagger grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 md:grid-cols-4 md:p-4">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-brand/10 text-brand transition group-hover:scale-110 group-hover:rotate-6">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-900">{title}</span>
              <span className="block text-xs text-slate-500">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
