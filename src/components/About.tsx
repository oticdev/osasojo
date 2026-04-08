import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-5 mb-6">
              <img
                src="/profile.jpg"
                alt="Osamudiamen Ojo"
                className="w-16 h-16 rounded-full object-cover border-2 border-zinc-700"
              />
              <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">
                About
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">
              Engineer first. Automator by intent.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-zinc-400 leading-relaxed"
          >
            <p>
              I spent 4+ years building backend systems in Java and Python —
              APIs, data pipelines, integrations — the kind of work where
              reliability and edge cases matter more than demos. That foundation
              is what separates the automation work I do from what most people
              mean when they say "no-code."
            </p>
            <p>
              When AI tooling started becoming genuinely useful in production, I
              saw the opportunity clearly: every repetitive, structured task in a
              business is a candidate for automation. Lead research, proposal
              writing, content production, invoice tracking — I've shipped
              systems that handle all of it.
            </p>
            <p>
              I work best with startup founders who want outcomes, not
              explanations. Tell me what your team is doing manually every week,
              and I'll build the system that handles it.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/ojov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/ojov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                GitHub →
              </a>
              <a
                href="mailto:victorojo007@gmail.com"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Email →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
