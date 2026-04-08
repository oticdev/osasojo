import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import HowIWork from './components/HowIWork'
import Stack from './components/Stack'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950">
      <Nav onContact={() => setContactOpen(true)} />
      <main>
        <Hero onContact={() => setContactOpen(true)} />
        <WhatIDo />
        <Projects />
        <HowIWork />
        <Stack />
        <About />
        <CTA onContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
