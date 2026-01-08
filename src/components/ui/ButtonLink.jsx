// src/components/ui/ButtonLink.jsx
import Link from "next/link";

const base =
  "inline-flex items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2 focus:ring-offset-white";

export function PrimaryLink({ href, className = "", children }) {
  return (
    <Link
      href={href}
      className={`${base} px-6 py-3 bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-soft hover:shadow-lg ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostTel({ href, className = "", children, ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} px-5 py-3 border border-brand/30 text-sm font-medium text-brand hover:bg-brand/5 ${className}`}
    >
      {children}
    </a>
  );
}

export function LightLink({ href, className = "", children }) {
  return (
    <Link
      href={href}
      className={`${base} px-4 py-2 bg-white/90 text-brand text-xs md:text-sm font-semibold shadow-sm hover:bg-white ${className}`}
    >
      {children}
    </Link>
  );
}
