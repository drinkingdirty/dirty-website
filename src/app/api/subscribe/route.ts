import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = '10c69e05-6178-4d28-9932-02bcb01de424'
const SITE_URL = 'https://dirty-website.vercel.app'

const welcomeEmailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Dirty</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;">
    <tr>
      <td align="center" style="padding:0;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Hero Image -->
          <tr>
            <td style="padding:0;position:relative;">
              <img
                src="${SITE_URL}/images/email/welcome-hero.jpg"
                alt="Dirty — Never Tasted This Good"
                width="600"
                style="width:100%;max-width:600px;display:block;object-fit:cover;object-position:center top;"
              />
              <!-- Overlay text on image -->
              <div style="position:absolute;top:0;left:0;right:0;padding:40px 40px 48px;background:linear-gradient(to bottom, rgba(44,26,18,0.65) 0%, transparent 100%);">
                <h1 style="margin:0;font-family:Georgia,serif;font-style:italic;font-size:48px;font-weight:400;color:#FAF7F2;line-height:1.1;">Welcome to Dirty.</h1>
              </div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 48px 32px;background-color:#FAF7F2;">
              <p style="margin:0 0 24px;font-family:Georgia,serif;font-style:italic;font-size:22px;color:#2C1A12;line-height:1.4;">
                You're in. Here's what that means.
              </p>
              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#6B5248;line-height:1.7;">
                You'll be the first to know where we pop up next, when new seasonal drinks drop, and everything Dirty. No clutter — just the good stuff.
              </p>
              <p style="margin:0 0 32px;font-family:Arial,sans-serif;font-size:15px;color:#6B5248;line-height:1.7;">
                Come find us this <strong style="color:#2C1A12;">Thursday at the SLO Farmers Market</strong> on Higuera Street — 6 to 9 PM. Pre-order ahead so you don't wait in line.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 0 40px;">
                <tr>
                  <td style="border-radius:100px;background-color:#E8523A;">
                    <a href="${SITE_URL}/find"
                      style="display:inline-block;padding:14px 32px;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#FAF7F2;text-decoration:none;">
                      Pre-Order Now
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #F5E6DF;margin:0 0 32px;" />

              <!-- Sign off -->
              <p style="margin:0 0 8px;font-family:Georgia,serif;font-style:italic;font-size:18px;color:#2C1A12;">
                See you soon,
              </p>
              <p style="margin:0 0 32px;font-family:Georgia,serif;font-style:italic;font-size:18px;color:#2C1A12;">
                Delainee &amp; Madison
              </p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#A8916A;">
                <a href="https://instagram.com/drinking.dirty" style="color:#E8523A;text-decoration:none;">@drinking.dirty</a>
                &nbsp;·&nbsp;
                <a href="https://tiktok.com/@drinkingdirty" style="color:#E8523A;text-decoration:none;">@drinkingdirty</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 48px;background-color:#2C1A12;text-align:center;">
              <p style="margin:0 0 8px;font-family:Georgia,serif;font-style:italic;font-size:20px;color:#FAF7F2;">Dirty.</p>
              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:11px;color:rgba(250,247,242,0.4);letter-spacing:0.1em;text-transform:uppercase;">Never Tasted This Good · San Luis Obispo, CA</p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:rgba(250,247,242,0.3);">
                You're receiving this because you signed up at dirty-website.vercel.app
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email required.' }, { status: 400 })
    }

    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    })

    await resend.emails.send({
      from: "Dirty <hello@drinkingdirtysoda.com>",
      to: email,
      subject: "Welcome to Dirty's inner circle.",
      html: welcomeEmailHtml,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
