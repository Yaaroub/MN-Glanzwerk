// src/app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // Felder aus dem Body holen
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();

    // Adresse (Pflicht)
    const street = String(body.street || "").trim();
    const zip = String(body.zip || "").trim();
    const city = String(body.city || "").trim();

    const service = String(body.service || "").trim();
    const objectType = String(body.objectType || "").trim();
    const message = String(body.message || "").trim();

    const honey = String(body.company || "").trim(); // Honeypot

    // Honeypot: Bots füllen meist dieses Feld → wir tun so, als wäre alles ok
    if (honey) {
      return Response.json({ ok: true }, { status: 200 });
    }

    // Basic-Validierung (Pflichtfelder)
    if (!name || !email || !service || !message || !street || !zip || !city) {
      return Response.json(
        {
          ok: false,
          error:
            "Bitte alle Pflichtfelder ausfüllen (inkl. vollständiger Adresse: Straße, PLZ, Ort).",
        },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return Response.json(
        { ok: false, error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    // PLZ-Validierung (DE: 5-stellig)
    if (!/^\d{5}$/.test(zip)) {
      return Response.json(
        { ok: false, error: "Bitte eine gültige 5-stellige PLZ eingeben." },
        { status: 400 }
      );
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true", // false = STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fullAddress = `${street}, ${zip} ${city}`;

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;color:#0f172a">
        <h2 style="margin:0 0 8px">Neue Kontaktanfrage – MN GLANZWERK</h2>
        <p style="margin:0 0 16px;color:#334155">Es wurde ein neues Kontaktformular über die Website gesendet.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tbody>
            <tr><td style="padding:6px 0;width:180px;color:#334155">Name</td><td style="padding:6px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">E-Mail</td><td style="padding:6px 0">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Telefon</td><td style="padding:6px 0">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Adresse</td><td style="padding:6px 0">${escapeHtml(fullAddress)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Leistung</td><td style="padding:6px 0">${escapeHtml(service)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Objektart</td><td style="padding:6px 0">${escapeHtml(objectType)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155;vertical-align:top">Nachricht</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Kontaktformular: ${name} – ${service || "Anfrage"}`,
      replyTo: email,
      text: plainText({
        name,
        email,
        phone,
        street,
        zip,
        city,
        service,
        objectType,
        message,
      }),
      html,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { ok: false, error: "Serverfehler beim Versand." },
      { status: 500 }
    );
  }
}

// Hilfsfunktionen
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function plainText(data) {
  return `Neue Kontaktanfrage – MN GLANZWERK

Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone}
Adresse: ${data.street}, ${data.zip} ${data.city}
Leistung: ${data.service}
Objektart: ${data.objectType}

Nachricht:
${data.message}
`;
}
