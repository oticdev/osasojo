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
          Osamudiamen Ojo
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#projects" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="https://github.com/ojov" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
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
              <a
                href="https://github.com/ojov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                GitHub
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
