import { useState } from 'react'

export default function LeadForm() {
  const [status, setStatus] = useState({ state: 'idle' })

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus({ state: 'loading' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          service: payload.service,
          message: payload.message,
          source: 'website'
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ state: 'success', id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Get a Free Consultation</h2>
          <p className="mt-3 text-slate-600">Tell us what you need: ITR filing, GST registration/returns, or corporate compliance. We’ll reach out within a business day.</p>
          <ul className="mt-6 space-y-3 text-slate-700 text-sm">
            <li>• Quick turnaround and transparent pricing</li>
            <li>• CA-reviewed filings and hands-on support</li>
            <li>• WhatsApp and email updates</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Phone</label>
            <input name="phone" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+91 98xxxxxxx" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Service</label>
            <select name="service" required className="mt-1 w-full rounded-lg border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>ITR Filing</option>
              <option>GST Registration</option>
              <option>GST Filing</option>
              <option>Company/LLP Compliance</option>
              <option>Bookkeeping & Accounting</option>
              <option>Startup Incorporation</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your requirements" />
          </div>

          <button type="submit" disabled={status.state==='loading'} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg">
            {status.state==='loading' ? 'Sending...' : 'Request Callback'}
          </button>

          {status.state==='success' && (
            <p className="text-green-700 text-sm">Thanks! Your request has been recorded. Ref: {status.id}</p>
          )}
          {status.state==='error' && (
            <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
