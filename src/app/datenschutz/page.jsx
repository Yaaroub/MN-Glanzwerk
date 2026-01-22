// src/app/datenschutz/page.jsx
import AnimatedSection from "@/src/components/AnimatedSection";

export const metadata = {
  title: "Datenschutzerklärung – MN GLANZWERK",
  description:
    "Datenschutzerklärung der MN GLANZWERK gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Kopf */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Datenschutz
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Datenschutzerklärung
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie gemäß der Datenschutz-Grundverordnung (DSGVO)
            darüber, welche Daten wir verarbeiten und welche Rechte Ihnen
            zustehen.
          </p>
        </section>
      </AnimatedSection>

      {/* Verantwortlicher */}
      <AnimatedSection>
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            1. Verantwortlicher
          </h2>

          <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-4 text-sm text-slate-700">
            <p className="font-semibold">
              MN GLANZWERK – Einzelunternehmen
            </p>
            <p>Inhaberin: Nermien Safar</p>
            <p>Kurhausstraße 46</p>
            <p>23795 Bad Segeberg</p>

            <p className="mt-2">
              Telefon: +49 163 7885512
              <br />
              E-Mail: kontakt@mn-glanzwerk.de
            </p>

            <p className="mt-2">
              Ansprechpartner: Mahmoud Fani
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Hosting */}
      <AnimatedSection>
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            2. Hosting
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Unsere Website wird bei einem externen Hosting-Dienstleister
            betrieben. Dabei werden personenbezogene Daten verarbeitet, die
            für den sicheren Betrieb der Website erforderlich sind.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an einer sicheren und stabilen Bereitstellung der Website).
          </p>
        </section>
      </AnimatedSection>

      {/* Kontakt */}
      <AnimatedSection>
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            3. Kontaktaufnahme
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Wenn Sie uns per Kontaktformular, Telefon, WhatsApp oder E-Mail
            kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der
            Anfrage.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
            sowie Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>
      </AnimatedSection>

      {/* WhatsApp */}
      <AnimatedSection>
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            4. WhatsApp-Kommunikation
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Bei der Nutzung von WhatsApp gelten die Datenschutzbestimmungen der
            WhatsApp Ireland Limited. Bitte übermitteln Sie keine sensiblen
            Daten über diesen Kommunikationsweg.
          </p>
        </section>
      </AnimatedSection>

      {/* Cookies */}
      <AnimatedSection>
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            5. Cookies
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies.
            Es findet kein Tracking zu Analyse- oder Marketingzwecken statt.
          </p>
        </section>
      </AnimatedSection>

      {/* Rechte */}
      <AnimatedSection>
        <section className="space-y-3 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            6. Ihre Rechte
          </h2>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
        </section>
      </AnimatedSection>

      {/* Stand */}
      <AnimatedSection>
        <section className="max-w-3xl">
          <p className="text-xs text-slate-500">
            Stand: {new Date().getFullYear()}
          </p>
        </section>
      </AnimatedSection>
    </div>
  );
}
