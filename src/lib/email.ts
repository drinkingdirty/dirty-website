import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM_EMAIL = 'Dirty <hello@drinkingdirtysoda.com>'
export const OWNER_EMAIL = process.env.OWNER_EMAIL || 'sghopping@gmail.com'
export const SITE_URL = 'https://drinkingdirtysoda.com'

interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from }: SendEmailOptions) {
  const result = await resend.emails.send({
    from: from ?? FROM_EMAIL,
    to,
    subject,
    html,
  })
  return result
}

// ── Reusable email wrapper HTML ──────────────────────────────
export function emailWrapper(content: string, footerText?: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;">
    <tr><td align="center" style="padding:24px 0;">
      <table width="600" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px;width:100%;background-color:#FFFFFF;">
        ${content}
        <tr>
          <td style="background-color:#2C1A12;padding:24px 48px;text-align:center;">
            <p style="margin:0 0 4px;font-family:Georgia,serif;font-style:italic;font-size:22px;color:#FAF7F2;">Dirty.</p>
            <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;
               letter-spacing:0.14em;text-transform:uppercase;color:rgba(250,247,242,0.35);">
              Never Tasted This Good &nbsp;·&nbsp; San Luis Obispo, CA
            </p>
            ${footerText ? `<p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:rgba(250,247,242,0.3);">${footerText}</p>` : ''}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}
