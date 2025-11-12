import { motion } from 'framer-motion'
import { ShieldCheck, FileText, Receipt, ArrowRight } from 'lucide-react'

export default function Hero({ onCTA }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Compliance, ITR & GST Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl"
            >
              File your Income Tax Returns, register for GST, and stay compliant with ease. Fast turnaround, expert support, and transparent pricing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button onClick={onCTA} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-lg shadow">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#services" className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-50 font-semibold px-5 py-3 rounded-lg shadow border">
                Explore Services
              </a>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: 'CA-Backed' },
                { icon: FileText, label: 'On-time Filing' },
                { icon: Receipt, label: 'GST & ITR' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600">
                  <f.icon className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg border"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'ITR Filing', desc: 'Individual & Business' },
                { title: 'GST Registration', desc: 'New/Composition/Regular' },
                { title: 'GST Returns', desc: 'GSTR-1, 3B, 9' },
                { title: 'ROC Compliance', desc: 'Company/LLP Annual' },
              ].map((s, i) => (
                <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-white to-slate-50 border">
                  <p className="text-sm font-semibold text-slate-700">{s.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
