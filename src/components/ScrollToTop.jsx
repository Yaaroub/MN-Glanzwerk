"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;

    // altes Verhalten merken
    const previousScrollBehavior = html.style.scrollBehavior;

    // smooth temporär ausschalten, damit kein schneller Animations-Scroll passiert
    html.style.scrollBehavior = "auto";

    // direkt nach oben springen
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

    // nach kurzem Moment wieder das ursprüngliche Verhalten herstellen (smooth)
    const timeout = setTimeout(() => {
      html.style.scrollBehavior = previousScrollBehavior || "smooth";
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

    return null;
}
