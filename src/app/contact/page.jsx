// src/app/contact/page.jsx
import ContactForm from "@/src/components/ContactForm";
import PageHero from "@/src/components/PageHero";

export const metadata = {
  title: "Kontakt & kostenloses Angebot",
  description:
    "Jetzt kostenloses Reinigungsangebot anfordern: MN GLANZWERK, Kurhausstraße 46, 23795 Bad Segeberg. Telefon/WhatsApp 0163 7885512 – Mo–Sa 08–20 Uhr, Notdienst 24/7.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        path="/contact"
        crumb="Kontakt"
        eyebrow="Kostenlos & unverbindlich"
        title="Ihr Angebot in 24 Stunden."
        intro="Erzählen Sie uns kurz von Ihrem Objekt – wir melden uns schnell mit einem fairen Festpreis-Angebot. Lieber direkt sprechen? Rufen Sie an oder schreiben Sie per WhatsApp."
        fig="point"
        speech="Einfach ausfüllen!"
      />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-14">
        <ContactForm />
      </div>
    </>
  );
}
