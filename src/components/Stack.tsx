import { motion } from 'framer-motion'

const groups = [
  {
    label: 'AI & Agents',
    tools: ['OpenAI / GPT-4o', 'Firecrawl', 'LangChain', 'Prompt Engineering'],
  },
  {
    label: 'Automation',
    tools: ['n8n', 'Make (Integromat)', 'Zapier', 'Google Apps Script'],
  },
  {
    label: 'Data & Databases',
    tools: ['Airtable', 'Supabase', 'Google Sheets', 'PostgreSQL'],
  },
  {
    label: 'APIs & Integrations',
    tools: ['REST APIs', 'Webhooks', 'Gmail API', 'LinkedIn API', 'PDF.co', 'Bouncer', 'Apify'],
  },
  {
    label: 'Backend & Engineering',
    tools: ['Python', 'Node.js', 'TypeScript', 'SQL'],
  },
  {
    label: 'Infrastructure',
    tools: ['Vercel', 'Docker', 'Git', 'CI/CD'],
  },
]

export default function Stack() {
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
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">
            Tools I use to build.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
