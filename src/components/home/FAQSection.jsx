// src/components/home/FAQSection.jsx
// Native <details> = kein JS, für Google & KI-Systeme voll lesbar (+ FAQPage-Schema)
import { ChevronDown } from "lucide-react";
import { faqs } from "@/src/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
      <div>
        <p className="eyebrow">
          FAQ
        </p>
        <h2 className="h2">
          Häufige Fragen zur Gebäudereinigung
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Ihre Frage ist nicht dabei? Rufen Sie uns an oder schreiben Sie uns per
          WhatsApp – wir antworten schnell.
        </p>
      </div>

      <div className="stagger space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={i === 0}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition open:border-brand/25 open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base">{f.q}</h3>
              <ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
