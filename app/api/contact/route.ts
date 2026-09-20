import { Resend } from "resend";
import { site } from "@/data/site";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  const subject = `Project inquiry — ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ``,
    `Message:`,
    message,
    ``,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111;">
      <h2 style="margin:0 0 16px;">${subject}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px;">
        <tbody>
          <tr>
            <td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">
              <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(message)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
    to: site.email,
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}