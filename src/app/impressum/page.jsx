// src/app/impressum/page.jsx

export const metadata = {
  title: "Impressum – MN GLANZWERK CLEANING COMPANY",
  description:
    "Impressum der MN GLANZWERK CLEANING COMPANY – Angaben gemäß § 5 TMG und § 55 RStV.",
};

export default function ImpressumPage() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <p className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Impressum
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Impressum
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Angaben gemäß § 5 Telemediengesetz (TMG) und § 55
          Rundfunkstaatsvertrag (RStV).
        </p>
      </section>

      {/* Anschrift */}
      <section className="max-w-3xl space-y-3 text-sm md:text-base text-slate-700">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Verantwortlich für den Inhalt dieser Website
        </h2>
        <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-4 space-y-1">
          <p className="font-semibold">MN GLANZWERK CLEANING COMPANY</p>
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
                href="mailto:glanzwerkglanzwerk@gmail.com"
                className="text-brand hover:text-brand-accent"
              >
                glanzwerkglanzwerk@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-1">
            <p>
              <span className="font-medium">USt-IdNr.:</span> DE455217323
            </p>
            <p>
              <span className="font-medium">Steuer-Nr.:</span> 14238746056
            </p>
          </div>
        </div>
      </section>

      {/* Haftungsausschluss */}
      <section className="max-w-3xl space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Haftung für Inhalte
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
      </section>

      {/* Haftung für Links */}
      <section className="max-w-3xl space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Haftung für Links
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </section>

      {/* Urheberrecht */}
      <section className="max-w-3xl space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Urheberrecht
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
          wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>

      {/* Online-Streitbeilegung */}
      <section className="max-w-3xl space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          EU-Streitschlichtung / Verbraucherstreitbeilegung
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-accent underline underline-offset-2"
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

      {/* Stand */}
      <section className="max-w-3xl space-y-1">
        <p className="text-xs text-slate-500">
          Stand: {new Date().getFullYear()}
        </p>
      </section>
    </div>
  );
}
