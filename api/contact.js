import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Pflichtfelder fehlen' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Ungültige E-Mail-Adresse' });
  }

  try {
    await resend.emails.send({
      from: 'noreply@baalbaki-web-studio.ch',
      to: 'info@baalbaki-web-studio.ch',
      subject: `Neue Anfrage von ${name} – Baalbaki Web Studio`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr><td><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>E-Mail:</strong></td><td>${escapeHtml(email)}</td></tr>
          ${company ? `<tr><td><strong>Unternehmen:</strong></td><td>${escapeHtml(company)}</td></tr>` : ''}
          <tr><td style="vertical-align:top"><strong>Nachricht:</strong></td><td>${escapeHtml(message).replace(/\n/g, '<br>')}</td></tr>
        </table>
      `,
    });

    await resend.emails.send({
      from: 'noreply@baalbaki-web-studio.ch',
      to: email,
      subject: 'Ihre Anfrage bei Baalbaki Web Studio',
      html: `
        <p>Guten Tag ${escapeHtml(name)},</p>
        <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <p>Mit freundlichen Grüssen<br>Baalbaki Web Studio</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
