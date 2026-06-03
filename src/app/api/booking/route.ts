import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, eventDate, eventType, guestCount, location, notes } = body

    await resend.emails.send({
      from: "Dirty <hello@drinkingdirtysoda.com>",
      to: process.env.OWNER_EMAIL!,
      subject: `New Event Inquiry — ${eventType} on ${eventDate}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Guest Count:</strong> ${guestCount}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Notes:</strong> ${notes ?? 'None'}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
