import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, FROM_EMAIL, OWNER_EMAIL, SITE_URL } from '@/lib/email'


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, eventDate, eventType, guestCount, location, notes } = body

    await sendEmail({
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
