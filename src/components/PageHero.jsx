// src/components/PageHero.jsx
// Einheitlicher Seitenkopf für Unterseiten: dunkler Verlauf, Breadcrumb (+ Schema), Figur mit Motion.
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Mascot from "@/src/components/Mascot";
import { site } from "@/src/lib/site";

export default function PageHero({ eyebrow, title, intro, path, crumb, fig, speech, children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: crumb, item: `${site.url}${path}` },
    ],
  };

  return (
    <section className="relative isolate overflow-hidden bg-brand-deep pt-32 pb-16 md:pt-36 md:pb-20 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(42,111,148,0.6),transparent_60%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
      <div aria-hidden="true" className="blob absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <nav aria-label="Brotkrumen" className="hero-in mb-5 flex items-center gap-1.5 text-xs text-sky-100/80">
            <Link href="/" className="hover:text-white">Startseite</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page" className="text-white">{crumb}</span>
          </nav>
          {eyebrow && (
            <p className="hero-in mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 backdrop-blur" style={{ animationDelay: "0.05s" }}>
              {eyebrow}
            </p>
          )}
          <h1 className="hero-rise text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg" style={{ animationDelay: "0.2s" }}>
              {intro}
            </p>
          )}
          {children}
        </div>

        {fig && (
          <div className="mx-auto w-40 sm:w-48 md:w-56 lg:w-64">
            <Mascot fig={fig} dark speech={speech} alt="" sizes="(max-width: 768px) 192px, 256px" priority />
          </div>
        )}
      </div>

      {/* Welle */}
      <svg aria-hidden="true" className="absolute -bottom-px left-0 w-full text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0 40c240-40 480-40 720-10s480 30 720-10v40H0z" />
      </svg>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </section>
  );
}
