// src/app/contact/page.jsx
import ContactForm from "@/src/components/ContactForm";

export const metadata = {
  title: "Kontakt | MN GLANZWERK CLEANING COMPANY",
  description:
    "Kontaktieren Sie MN GLANZWERK CLEANING COMPANY für ein unverbindliches Angebot. Gebäudereinigung in Schleswig-Holstein, Hamburg & Bremen.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 md:py-14">
      <div className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Kontakt
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
          Senden Sie uns Ihre Anfrage – wir melden uns schnell und unverbindlich
          zurück. Bitte geben Sie die Adresse vollständig an (Straße, Hausnummer,
          PLZ, Ort).
        </p>
      </div>

      <ContactForm />
    </main>
  );
}
