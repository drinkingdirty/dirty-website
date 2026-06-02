'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function BookingFormClient() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')

    const form = e.currentTarget
    const data = {
      firstName:   (form.elements.namedItem('firstName')   as HTMLInputElement).value,
      lastName:    (form.elements.namedItem('lastName')    as HTMLInputElement).value,
      email:       (form.elements.namedItem('email')       as HTMLInputElement).value,
      phone:       (form.elements.namedItem('phone')       as HTMLInputElement).value,
      eventDate:   (form.elements.namedItem('eventDate')   as HTMLInputElement).value,
      eventType:   (form.elements.namedItem('eventType')   as HTMLSelectElement).value,
      guestCount:  (form.elements.namedItem('guestCount')  as HTMLSelectElement).value,
      location:    (form.elements.namedItem('location')    as HTMLInputElement).value,
      notes:       (form.elements.namedItem('notes')       as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-16">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-coral/10 mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-display-italic text-display-sm text-espresso mb-3">We got it. We&apos;re excited already.</h3>
        <p className="font-sans text-body-md text-text-secondary">
          We&apos;ll reach out within 48 hours to talk through the details.<br />
          In the meantime, follow <a href="https://instagram.com/drinking.dirty" className="text-coral hover:underline" target="_blank" rel="noopener noreferrer">@drinking.dirty</a> for inspo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-label text-text-secondary">First Name</label>
          <input id="firstName" name="firstName" type="text" required placeholder="First name"
            className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-label text-text-secondary">Last Name</label>
          <input id="lastName" name="lastName" type="text" required placeholder="Last name"
            className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-label text-text-secondary">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com"
            className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-label text-text-secondary">Phone Number</label>
          <input id="phone" name="phone" type="tel" required placeholder="(805) 555-0000"
            className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="eventDate" className="text-label text-text-secondary">Event Date</label>
        <input id="eventDate" name="eventDate" type="date" required
          className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="eventType" className="text-label text-text-secondary">Event Type</label>
          <select id="eventType" name="eventType" required
            className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors appearance-none">
            <option value="">Select one</option>
            <option>Bachelorette Party</option>
            <option>Sorority Event</option>
            <option>Birthday Party</option>
            <option>Brand Pop-Up</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guestCount" className="text-label text-text-secondary">Expected Guests</label>
          <select id="guestCount" name="guestCount" required
            className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors appearance-none">
            <option value="">Select one</option>
            <option>Under 50</option>
            <option>50 – 150</option>
            <option>150 – 200</option>
            <option>200+</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-label text-text-secondary">Event Location / Address</label>
        <input id="location" name="location" type="text" placeholder="123 Main St, San Luis Obispo, CA"
          className="h-[52px] rounded-lg border border-blush-dark bg-white px-4 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="text-label text-text-secondary">
          Anything else we should know? <span className="text-text-tertiary normal-case font-normal">(optional)</span>
        </label>
        <textarea id="notes" name="notes" rows={4} placeholder="Tell us about your event..."
          className="rounded-lg border border-blush-dark bg-white px-4 py-3 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors resize-none" />
      </div>
      {state === 'error' && (
        <p className="font-sans text-sm text-coral">Something went wrong. Please try again or DM us on Instagram.</p>
      )}
      <button type="submit" disabled={state === 'loading'}
        className="btn-coral w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
        {state === 'loading' ? 'Sending...' : 'Send My Inquiry'}
      </button>
      <p className="font-sans text-caption text-text-tertiary text-center">
        We typically respond within 24–48 hours. For urgent inquiries, DM us on Instagram{' '}
        <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">@drinking.dirty</a>.
      </p>
    </form>
  )
}
