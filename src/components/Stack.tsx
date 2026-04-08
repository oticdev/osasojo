import { motion } from 'framer-motion'
import {
  SiOpenai,
  SiN8N,
  SiMake,
  SiZapier,
  SiAirtable,
  SiSupabase,
  SiGooglesheets,
  SiPostgresql,
  SiGmail,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiVercel,
  SiDocker,
  SiGit,
  SiGooglecloud,
} from 'react-icons/si'
import { Webhook, Bot, FileSearch, Brain, Link, Search } from 'lucide-react'

const groups = [
  {
    label: 'AI & Agents',
    tools: [
      { name: 'OpenAI', icon: <SiOpenai size={28} /> },
      { name: 'LangChain', icon: <Brain size={28} /> },
      { name: 'Firecrawl', icon: <FileSearch size={28} /> },
      { name: 'AI Agents', icon: <Bot size={28} /> },
    ],
  },
  {
    label: 'Automation',
    tools: [
      { name: 'n8n', icon: <SiN8N size={28} /> },
      { name: 'Make', icon: <SiMake size={28} /> },
      { name: 'Zapier', icon: <SiZapier size={28} /> },
      { name: 'Apps Script', icon: <SiGooglecloud size={28} /> },
    ],
  },
  {
    label: 'Data & Databases',
    tools: [
      { name: 'Airtable', icon: <SiAirtable size={28} /> },
      { name: 'Supabase', icon: <SiSupabase size={28} /> },
      { name: 'Google Sheets', icon: <SiGooglesheets size={28} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} /> },
    ],
  },
  {
    label: 'APIs & Integrations',
    tools: [
      { name: 'Gmail API', icon: <SiGmail size={28} /> },
      { name: 'LinkedIn', icon: <Link size={28} /> },
      { name: 'Webhooks', icon: <Webhook size={28} /> },
      { name: 'Apify', icon: <Search size={28} /> },
    ],
  },
  {
    label: 'Backend & Engineering',
    tools: [
      { name: 'Python', icon: <SiPython size={28} /> },
      { name: 'Node.js', icon: <SiNodedotjs size={28} /> },
      { name: 'TypeScript', icon: <SiTypescript size={28} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} /> },
    ],
  },
  {
    label: 'Infrastructure',
    tools: [
      { name: 'Vercel', icon: <SiVercel size={28} /> },
      { name: 'Docker', icon: <SiDocker size={28} /> },
      { name: 'Git', icon: <SiGit size={28} /> },
    ],
  },
]

function ToolCard({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-2 cursor-default group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-indigo-500/40 group-hover:text-zinc-200 group-hover:shadow-lg transition-all duration-200">
        {icon}
      </div>
      <span className="text-xs text-zinc-500 text-center max-w-[70px] leading-tight">
        {name}
      </span>
    </motion.div>
  )
}

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

        <div className="mt-14 space-y-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-4">
                {group.tools.map((tool) => (
                  <ToolCard key={tool.name} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
