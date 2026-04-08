import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  onContact: () => void
}

export default function Nav({ onContact }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleContact() {
    setMenuOpen(false)
    onContact()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="text-sm font-medium text-zinc-100 tracking-tight">
          Osamudimen Ojo
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#projects" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            About
          </a>
          <button
            onClick={handleContact}
            className="text-sm px-4 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t border-zinc-800/50 bg-zinc-950 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                About
              </a>
              <button
                onClick={handleContact}
                className="text-sm px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors text-left"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
