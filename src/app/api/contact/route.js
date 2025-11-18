// src/app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    // Felder aus dem Body holen
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const location = String(body.location || "").trim();
    const service = String(body.service || "").trim();
    const objectType = String(body.objectType || "").trim();
    const message = String(body.message || "").trim();
    const honey = String(body.company || "").trim(); // Honeypot

    // Honeypot: Bots füllen meist dieses Feld → wir tun so, als wäre alles ok
    if (honey) {
      return Response.json({ ok: true }, { status: 200 });
    }

    // Basic-Validierung
    if (!name || !email || !service || !message) {
      return Response.json(
        { ok: false, error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return Response.json(
        { ok: false, error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    // 🔹 HIER: Transporter DEFINIEREN
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.gmail.com
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true", // false = STARTTLS
      auth: {
        user: process.env.SMTP_USER, // glanzwerkglanzwerk@gmail.com
        pass: process.env.SMTP_PASS, // App-Passwort
      },
    });

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;color:#0f172a">
        <h2 style="margin:0 0 8px">Neue Kontaktanfrage – MN GLANZWERK</h2>
        <p style="margin:0 0 16px;color:#334155">Es wurde ein neues Kontaktformular über die Website gesendet.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tbody>
            <tr><td style="padding:6px 0;width:180px;color:#334155">Name</td><td style="padding:6px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">E-Mail</td><td style="padding:6px 0">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Telefon</td><td style="padding:6px 0">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">PLZ / Ort</td><td style="padding:6px 0">${escapeHtml(location)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Leistung</td><td style="padding:6px 0">${escapeHtml(service)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155">Objektart</td><td style="padding:6px 0">${escapeHtml(objectType)}</td></tr>
            <tr><td style="padding:6px 0;color:#334155;vertical-align:top">Nachricht</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    // Mail an dein IONOS-Postfach
    await transporter.sendMail({
      from: process.env.MAIL_FROM, // "MN GLANZWERK Kontaktformular <glanzwerkglanzwerk@gmail.com>"
      to: process.env.MAIL_TO,     // info@mn-glanzwerk.de
      subject: `Kontaktformular: ${name} – ${service || "Anfrage"}`,
      replyTo: email,
      text: plainText({
        name,
        email,
        phone,
        location,
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
PLZ/Ort: ${data.location}
Leistung: ${data.service}
Objektart: ${data.objectType}

Nachricht:
${data.message}
`;
}
