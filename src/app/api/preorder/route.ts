import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, FROM_EMAIL, OWNER_EMAIL, SITE_URL } from '@/lib/email'
import type { DrinkOrder } from '@/types/preorder'


function formatDrink(drink: DrinkOrder, index: number): string {
  if (drink.type === 'menu') {
    return `Drink ${index + 1}: ${drink.menuItem ?? 'Unknown'}${drink.notes ? ` (${drink.notes})` : ''}`
  }
  const syrups = drink.syrups?.join(', ') || 'None'
  return `Drink ${index + 1}: ${drink.base ?? 'No base'} | Syrups: ${syrups} | Creamer: ${drink.creamer ?? 'None'}${drink.notes ? ` | Notes: ${drink.notes}` : ''}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { eventTitle, eventDate, pickupWindow, customerName, customerEmail, drinks } = body

    const drinksHtml = (drinks as DrinkOrder[]).map((d, i) =>
      `<p>${formatDrink(d, i)}</p>`
    ).join('')

    await sendEmail({
      from: "Dirty <hello@drinkingdirtysoda.com>",
      to: process.env.OWNER_EMAIL!,
      subject: `New Pre-Order — ${customerName} — Pickup ${pickupWindow}`,
      html: `
        <h2>New Pre-Order</h2>
        <p><strong>Event:</strong> ${eventTitle} (${eventDate})</p>
        <p><strong>Customer:</strong> ${customerName} (${customerEmail})</p>
        <p><strong>Pickup Window:</strong> ${pickupWindow}</p>
        <h3>Order:</h3>
        ${drinksHtml}
      `,
    })

    await sendEmail({
      from: "Dirty <hello@drinkingdirtysoda.com>",
      to: customerEmail,
      subject: `Your Dirty Pre-Order is confirmed!`,
      html: `
        <h2>You're on the list, ${customerName}!</h2>
        <p>Your pre-order for <strong>${eventTitle}</strong> has been received.</p>
        <p><strong>Pickup Window:</strong> ${pickupWindow}</p>
        <h3>Your Order:</h3>
        ${drinksHtml}
        <p>Pay in person when you pick up. See you soon!</p>
        <p>— Delainee & Madison, Dirty</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Pre-order error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
