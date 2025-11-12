import { CheckCircle2, Calculator, ClipboardCheck, Building2, ScrollText, ReceiptIndianRupee, FileSignature } from 'lucide-react'

const services = [
  {
    title: 'ITR Filing',
    desc: 'Salary, Business/Profession, Capital Gains, and more with expert review.',
    bullets: ['Form 16/26AS reconciliation', 'Deductions optimization', 'CA-reviewed filing'],
  },
  {
    title: 'GST Registration',
    desc: 'New GST registration or migrate to Composition/Regular as needed.',
    bullets: ['Documents guidance', 'Application & ARN tracking', 'Post-registration support'],
  },
  {
    title: 'GST Return Filing',
    desc: 'Monthly/Quarterly GSTR-1, 3B, 9 with ITC reconciliation.',
    bullets: ['Accurate reporting', 'ITC match/mismatch analysis', 'Timely reminders'],
  },
  {
    title: 'Company/LLP Compliance',
    desc: 'Annual filings, event-based forms, and ROC compliance handled end-to-end.',
    bullets: ['AOC-4, MGT-7, DIR-3 KYC', 'Shareholding changes', 'Board resolutions'],
  },
  {
    title: 'Bookkeeping & Accounting',
    desc: 'Clean books with monthly MIS and compliance-ready records.',
    bullets: ['GST-ready ledgers', 'Bank & cash reconciliation', 'MIS dashboards'],
  },
  {
    title: 'Startup Incorporation',
    desc: 'Private Limited, LLP, or Proprietorship with PAN, TAN, GST, and more.',
    bullets: ['Name approval', 'DIN & DSC', 'Post-incorporation setup'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Everything you need to stay compliant and grow confidently.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border bg-gradient-to-br from-white to-slate-50 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">{s.title}</h3>
                <ReceiptIndianRupee className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
