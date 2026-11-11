"use client";

export default function CookieSettingsButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          localStorage.removeItem("cookie-consent");
        } catch {}
        window.location.reload();
      }}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
