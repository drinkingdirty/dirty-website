import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, FROM_EMAIL, OWNER_EMAIL, SITE_URL } from '@/lib/email'


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    await sendEmail({
      from: "Dirty <hello@drinkingdirtysoda.com>",
      to: process.env.OWNER_EMAIL!,
      subject: `Contact Form — ${subject} from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
