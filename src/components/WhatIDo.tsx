import { motion } from 'framer-motion'

const services = [
  {
    icon: '⚡',
    title: 'Outbound & Lead Generation',
    description:
      'Automated pipelines that find, enrich, validate, and write personalised outreach for your target personas — end to end, no manual research.',
  },
  {
    icon: '📄',
    title: 'Document & Proposal Automation',
    description:
      'AI-assisted systems that take raw inputs and produce polished, review-ready documents — proposals, reports, summaries — in minutes instead of hours.',
  },
  {
    icon: '🧠',
    title: 'AI Content Pipelines',
    description:
      'Multi-draft content generation systems that research, write, and adapt content for LinkedIn, email, and blogs — with human review built in by design.',
  },
  {
    icon: '🔗',
    title: 'System Integration & Ops Automation',
    description:
      'Connect your tools — Gmail, Airtable, Notion, Slack, CRMs — and eliminate the manual data entry, routing, and tracking that bogs down your team.',
  },
]

export default function WhatIDo() {
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
            What I Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 max-w-xl">
            Automation systems built for real business outcomes.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg">
            Not no-code templates. Proper, engineered systems — with error handling,
            data validation, and the reliability your team can depend on.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="mt-4 text-lg font-medium text-zinc-100">
                {service.title}
              </h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
