import { motion } from 'framer-motion'

const principles = [
  {
    title: 'API-first design',
    description:
      'Every system is built around the APIs it connects. I read the docs, handle rate limits, and design for the edge cases that break naive integrations.',
  },
  {
    title: 'Error handling by default',
    description:
      'Automations that silently fail are worse than no automation. Every workflow I build has error paths, notifications, and fallbacks baked in — not bolted on.',
  },
  {
    title: 'Human review where it matters',
    description:
      "AI generates, humans decide. I design workflows with clear handoff points — the system does the grunt work, your team makes the calls that actually require judgment.",
  },
  {
    title: 'Scalable data architecture',
    description:
      'Proper databases, structured schemas, deduplication logic. Systems that hold up when your volume grows — not spreadsheets duct-taped together.',
  },
  {
    title: 'Observability built in',
    description:
      'Logs, status fields, and audit trails as standard. You should always know what ran, what failed, and why — without digging through execution history.',
  },
  {
    title: 'Delivery over perfection',
    description:
      "I ship working systems, then iterate. Four years of engineering taught me that a solid v1 in production beats a perfect v3 in planning.",
  },
]

export default function HowIWork() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">
            How I Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 max-w-xl">
            Engineering discipline, not just automation.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg">
            The difference between an automation that works in a demo and one
            that works in production is engineering rigour. That's what 4 years
            of software engineering adds to this work.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20"
            >
              <div className="w-8 h-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
