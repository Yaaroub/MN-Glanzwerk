// src/app/page.jsx
import HeroDark from "@/src/components/HeroDark";
import AnimatedSection from "@/src/components/AnimatedSection";
import TrustBar from "@/src/components/home/TrustBar";
import ServicesSection from "@/src/components/home/ServicesSection";
import ProcessSection from "@/src/components/home/ProcessSection";
import WhyUsSection from "@/src/components/home/WhyUsSection";
import ProjectsTeaser from "@/src/components/home/ProjectsTeaser";
import ServiceAreaSection from "@/src/components/home/ServiceAreaSection";
import FAQSection from "@/src/components/home/FAQSection";
import ContactSection from "@/src/components/home/ContactSection";

export const metadata = {
  title: {
    absolute: "Gebäudereinigung Bad Segeberg, Kiel, Lübeck & Hamburg | MN GLANZWERK",
  },
  alternates: { canonical: "/" },
};

function Block({ id, children, label }) {
  return (
    <AnimatedSection id={id} aria-label={label} className="mx-auto max-w-6xl scroll-mt-28 px-4 sm:px-6">
      {children}
    </AnimatedSection>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroDark />
      <TrustBar />

      <div className="space-y-24 pt-20 md:space-y-32 md:pt-28">
        <Block id="leistungen" label="Leistungen"><ServicesSection /></Block>
        <Block label="Ablauf"><ProcessSection /></Block>
        <Block label="Warum MN GLANZWERK"><WhyUsSection /></Block>
        <Block label="Referenzen"><ProjectsTeaser /></Block>
        <Block label="Einsatzgebiet"><ServiceAreaSection /></Block>
        <Block id="faq" label="Häufige Fragen"><FAQSection /></Block>
        <Block id="kontakt" label="Kontakt"><ContactSection /></Block>
      </div>
    </>
  );
}
