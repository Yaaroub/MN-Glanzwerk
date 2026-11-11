// src/components/ScrollProgress.jsx
// Setzt beim Scrollen die CSS-Variable --p (0 → 1) auf dem Element.
// 0 = Element taucht unten auf, 1 = Element hat ~70 % des Bildschirms durchlaufen.
// Ein gemeinsamer Scroll-Listener für alle Instanzen, nur sichtbare Elemente werden berechnet.
"use client";

import { useEffect, useRef } from "react";

const visible = new Set();
let ticking = false;
let listening = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;
  visible.forEach((el) => {
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.7 + r.height * 0.3)));
    el.style.setProperty("--p", p.toFixed(3));
  });
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  const id = requestAnimationFrame(update);
  // Fallback, falls rAF gedrosselt wird (z. B. Hintergrund-Tab) – nie dauerhaft hängen bleiben
  setTimeout(() => {
    if (ticking) {
      cancelAnimationFrame(id);
      update();
    }
  }, 100);
}

export default function ScrollProgress({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }
    if (!listening) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      listening = true;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) visible.add(el);
      else visible.delete(el);
      onScroll();
    });
    io.observe(el);
    return () => {
      io.disconnect();
      visible.delete(el);
    };
  }, []);

  return (
    <Tag ref={ref} className={className} style={{ "--p": 0 }} {...rest}>
      {children}
    </Tag>
  );
}
