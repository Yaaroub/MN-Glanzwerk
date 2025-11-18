// src/components/ClientRoot.jsx
"use client";

import CookieBanner from "@/src/components/CookieBanner";
import { useConsent } from "@/src/lib/useConsent";
import Script from "next/script";

export default function ClientRoot() {
  const { analytics } = useConsent();

  return (
    <>
      {/* Cookie-Banner immer rendern, wenn noch keine Entscheidung */}
      <CookieBanner />

      {/* Google Analytics nur bei Zustimmung */}
      {analytics && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />
          <Script id="ga-init">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXX');
            `}
          </Script>
        </>
      )}
    </>
  );
}
