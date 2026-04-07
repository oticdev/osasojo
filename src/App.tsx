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

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <Projects />
        <HowIWork />
        <Stack />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
