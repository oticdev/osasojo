import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-50 max-w-2xl mx-auto leading-tight">
            What is your team doing manually that shouldn't be?
          </h2>
          <p className="mt-6 text-zinc-400 max-w-lg mx-auto text-lg">
            Tell me the workflow. I'll tell you what's automatable and how I'd
            build it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:victorojo007@gmail.com"
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors text-sm"
            >
              Let's Build Something
            </a>
            <a
              href="https://www.linkedin.com/in/ojov/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-lg font-medium transition-colors text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
