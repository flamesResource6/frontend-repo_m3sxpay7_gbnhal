import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onCTA }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-indigo-700 text-lg">TaxTrust</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <button onClick={onCTA} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg">Get Started</button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu/>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm">
          <a href="#services" className="block">Services</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#contact" className="block">Contact</a>
          <button onClick={onCTA} className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg">Get Started</button>
        </div>
      )}
    </header>
  )
}
