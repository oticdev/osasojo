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
import { FaJava } from 'react-icons/fa'
import { Webhook, Bot, FileSearch, Brain, Link } from 'lucide-react'

function ApifyIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green top-left triangle */}
      <polygon points="10,10 50,10 10,55" fill="#2ECC71" />
      {/* Blue top-right triangle */}
      <polygon points="90,10 50,10 90,55" fill="#3B82F6" />
      {/* Orange bottom triangle */}
      <polygon points="20,90 80,90 50,48" fill="#F97316" />
    </svg>
  )
}

const tools = [
  // AI & Agents
  { name: 'OpenAI', icon: <SiOpenai size={26} />, color: '#10A37F', category: 'AI & Agents' },
  { name: 'LangChain', icon: <Brain size={26} />, color: '#1C7A4B', category: 'AI & Agents' },
  { name: 'Firecrawl', icon: <FileSearch size={26} />, color: '#FF6B35', category: 'AI & Agents' },
  { name: 'AI Agents', icon: <Bot size={26} />, color: '#6366f1', category: 'AI & Agents' },
  // Automation
  { name: 'n8n', icon: <SiN8N size={26} />, color: '#EA4B71', category: 'Automation' },
  { name: 'Make', icon: <SiMake size={26} />, color: '#9B59B6', category: 'Automation' },
  { name: 'Zapier', icon: <SiZapier size={26} />, color: '#FF4A00', category: 'Automation' },
  { name: 'Apps Script', icon: <SiGooglecloud size={26} />, color: '#4285F4', category: 'Automation' },
  // Data
  { name: 'Airtable', icon: <SiAirtable size={26} />, color: '#2D7FF9', category: 'Data' },
  { name: 'Supabase', icon: <SiSupabase size={26} />, color: '#3ECF8E', category: 'Data' },
  { name: 'Google Sheets', icon: <SiGooglesheets size={26} />, color: '#34A853', category: 'Data' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={26} />, color: '#336791', category: 'Data' },
  // APIs
  { name: 'Gmail API', icon: <SiGmail size={26} />, color: '#EA4335', category: 'APIs' },
  { name: 'LinkedIn', icon: <Link size={26} />, color: '#0A66C2', category: 'APIs' },
  { name: 'Webhooks', icon: <Webhook size={26} />, color: '#6366f1', category: 'APIs' },
  { name: 'Apify', icon: <ApifyIcon size={26} />, color: 'inherit', category: 'APIs' },
  // Backend
  { name: 'Python', icon: <SiPython size={26} />, color: '#3776AB', category: 'Backend' },
  { name: 'Node.js', icon: <SiNodedotjs size={26} />, color: '#339933', category: 'Backend' },
  { name: 'TypeScript', icon: <SiTypescript size={26} />, color: '#3178C6', category: 'Backend' },
  { name: 'Java', icon: <FaJava size={26} />, color: '#f89820', category: 'Backend' },
  // Infra
  { name: 'Vercel', icon: <SiVercel size={26} />, color: '#ffffff', category: 'Infra' },
  { name: 'Docker', icon: <SiDocker size={26} />, color: '#2496ED', category: 'Infra' },
  { name: 'Git', icon: <SiGit size={26} />, color: '#F05032', category: 'Infra' },
]

const categoryColors: Record<string, string> = {
  'AI & Agents': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  Automation: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  Data: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  APIs: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Backend: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Infra: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20',
}

function ToolCard({ name, icon, color, category }: { name: string; icon: React.ReactNode; color: string; category: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-2 cursor-default group"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 group-hover:shadow-lg group-hover:border-zinc-700 transition-all duration-200"
        style={color !== 'inherit' ? { color } : {}}
      >
        {icon}
      </div>
      <span className="text-xs text-zinc-500 text-center leading-tight max-w-[64px]">
        {name}
      </span>
      <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${categoryColors[category]}`}>
        {category}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
