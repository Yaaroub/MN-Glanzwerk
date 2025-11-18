// src/app/layout.js
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ClientRoot from "@/src/components/ClientRoot"; // neu: kümmert sich um Cookies/Analytics

export const metadata = {
  title: "MN GLANZWERK Cleaning Company",
  description:
    "Professionelle Reinigungsdienste in Bad Segeberg – Qualität, Zuverlässigkeit, Vertrauen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 antialiased">
        <Header />

        {/* WICHTIG: pt-24 schafft Platz unter dem fixen Header */}
        <main className="pt-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-[75vh]">
          <div className="max-w-7xl mx-auto px-6 py-10">{children}</div>
        </main>

        <Footer />

        {/* Client-seitige Sachen wie Cookie-Banner & Analytics */}
        <ClientRoot />
      </body>
    </html>
  );
}
