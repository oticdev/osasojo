import { motion } from 'framer-motion'

interface Props {
  onContact: () => void
}

export default function Hero({ onContact }: Props) {
  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-indigo-400 mb-6">
            AI Automation Engineer
          </span>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-50 leading-[1.05] mb-6 max-w-4xl">
            I build AI systems that{' '}
            <span className="text-indigo-400">replace</span> your manual
            workflows.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
            Startup teams spend too many hours on repetitive work — researching
            leads, writing proposals, producing content, chasing invoices. I
            design and ship intelligent automation systems that handle all of
            it, so your team can focus on what actually grows the business.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            <button
              onClick={onContact}
              className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-wrap gap-8 text-zinc-500 text-sm"
        >
          {[
            { label: 'Workflows Automated', value: '10+' },
            { label: 'Hours Saved Weekly', value: '40+' },
            { label: 'Years Engineering', value: '4+' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-zinc-100 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-zinc-500 text-xs tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
