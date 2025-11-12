const tiers = [
  {
    name: 'ITR Basic',
    price: '₹799',
    tagline: 'For salaried individuals with Form 16',
    features: ['Includes filing + expert review', 'Deductions optimization', 'Support via WhatsApp/Email']
  },
  {
    name: 'GST Registration',
    price: '₹1499',
    tagline: 'New GST registration with guidance',
    features: ['Document checklist', 'Application filing & ARN', 'Post-registration support']
  },
  {
    name: 'Monthly GST Filing',
    price: 'From ₹999',
    tagline: 'GSTR-1 & 3B with ITC reconciliation',
    features: ['Return preparation & filing', 'ITC match/mismatch analysis', 'Timely reminders']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Transparent Pricing</h2>
          <p className="mt-3 text-slate-600">No surprises. Choose a plan that fits your needs. Custom quotes for businesses.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border bg-gradient-to-br from-white to-slate-50 shadow-sm flex flex-col">
              <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
              <p className="text-3xl font-extrabold text-indigo-700 mt-2">{t.price}</p>
              <p className="text-sm text-slate-600 mt-1">{t.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg">Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
