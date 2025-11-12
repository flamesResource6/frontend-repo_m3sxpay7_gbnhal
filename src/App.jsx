import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import LeadForm from './components/LeadForm'

function App() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-teal-50 text-slate-900">
      <Navbar onCTA={scrollToForm} />
      <Hero onCTA={scrollToForm} />
      <Services />
      <Pricing />
      <LeadForm ref={formRef} />

      <footer className="py-12 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} TaxTrust Advisors — All rights reserved.</p>
        <p className="mt-2">Income Tax Filing · GST Registration & Returns · Compliance & ROC</p>
      </footer>
    </div>
  )
}

export default App
