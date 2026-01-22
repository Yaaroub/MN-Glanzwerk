// src/app/impressum/page.jsx
import AnimatedSection from "@/src/components/AnimatedSection";

export const metadata = {
  title: "Impressum – MN GLANZWERK",
  description:
    "Impressum der MN GLANZWERK – Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Medienstaatsvertrag (MStV).",
};

export default function ImpressumPage() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Header */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Impressum
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Impressum
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18
            Medienstaatsvertrag (MStV).
          </p>
        </section>
      </AnimatedSection>

      {/* Diensteanbieter */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-3 text-sm md:text-base text-slate-700">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Diensteanbieter
          </h2>

          <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-4 space-y-1">
            <p className="font-semibold">
              MN GLANZWERK – Einzelunternehmen
            </p>
            <p>Inhaberin: Nermien Safar</p>
            <p>Kurhausstraße 46</p>
            <p>23795 Bad Segeberg</p>
            <p>Deutschland</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 pt-3">
            <div className="space-y-1">
              <p>
                <span className="font-medium">Telefon:</span>{" "}
                <a
                  href="tel:+491637885512"
                  className="text-brand hover:text-brand-accent"
                >
                  +49 163 7885512
                </a>
              </p>
              <p>
                <span className="font-medium">E-Mail:</span>{" "}
                <a
                  href="mailto:kontakt@mn-glanzwerk.de"
                  className="text-brand hover:text-brand-accent"
                >
                  kontakt@mn-glanzwerk.de
                </a>
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <span className="font-medium">USt-IdNr.:</span> DE455217323
              </p>
              <p>
                <span className="font-medium">Ansprechpartner:</span> Mahmoud Fani
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Haftung für Inhalte */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Haftung für Inhalte
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
            jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
            § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
            von entsprechenden Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>
        </section>
      </AnimatedSection>

      {/* Haftung für Links */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Haftung für Links
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>
        </section>
      </AnimatedSection>

      {/* Urheberrecht */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Urheberrecht
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </AnimatedSection>

      {/* EU-Streitbeilegung */}
      <AnimatedSection>
        <section className="max-w-3xl space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            EU-Streitbeilegung / Verbraucherstreitbeilegung
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-
            Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-2"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
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
