import { motion } from 'framer-motion'

const projects = [
  {
    category: 'Revenue Operations',
    title: 'Outbound Campaign Engine',
    org: 'Sourcing Sprints',
    demo: 'https://www.youtube.com/watch?v=U5glKSLmBjE',
    problem:
      'The sales team was spending hours manually searching Apollo for leads, then writing individual outreach messages from scratch — inconsistent quality and limited volume.',
    solution:
      'A single form submission triggers an end-to-end pipeline: Apify scrapes Apollo for matching leads, each company is enriched by scraping their About page (or LinkedIn if the site is down), emails are validated via Bouncer, and GPT-4o generates a personalised 3-step email sequence and LinkedIn message for every lead.',
    outcome:
      'Hours of manual research and writing reduced to one form submission. Multiple campaigns per week across different personas — no extra headcount required.',
    tools: ['n8n', 'Apify', 'GPT-4o', 'Bouncer', 'Airtable'],
    metric: 'Hours → 1 form submission',
  },
  {
    category: 'Revenue Operations',
    title: 'Proposal Generation & Delivery',
    org: 'Sourcing Sprints',
    demo: 'https://www.loom.com/share/1c4e436752c2448b91198f1a68ffe0b8',
    problem:
      'After discovery calls, salespeople manually wrote proposals from their notes — inconsistent quality, slow turnaround, no tracking.',
    solution:
      'Salesperson fills a post-call form → n8n checks Airtable for duplicates → GPT rewrites raw notes into polished proposal copy → a Google Doc is auto-created from template → logged in Airtable for review → one-click send to client. A daily 9AM alert catches any proposals sitting in review for over 2 days.',
    outcome:
      'Zero manual writing or formatting. Proposals go from call notes to client-ready document with one form submission and one click to send.',
    tools: ['n8n', 'GPT', 'Google Forms', 'Airtable', 'Google Docs', 'Gmail'],
    metric: 'Manual writing → 1 click to send',
  },
  {
    category: 'Marketing',
    title: 'Content Generation Pipeline',
    org: 'Fetemi Marketing Agency',
    problem:
      'Content team was producing all content manually — researching, writing, adapting for each platform. A single piece took a full working day and quality varied by team member.',
    solution:
      'Manager submits a topic idea or reference URL → Firecrawl researches top-ranking articles and extracts SEO keywords → three full article drafts generated in parallel (data-driven, narrative, contrarian) → manager picks one → system auto-adapts it into a LinkedIn post and HTML email newsletter → publish or schedule.',
    outcome:
      'Full-day content workflow now completes in under 10 minutes. All three drafts pass SEO validation on every run. LinkedIn and email formats require no structural editing before publishing.',
    tools: ['n8n', 'OpenAI', 'Firecrawl', 'Supabase', 'LinkedIn', 'Vercel'],
    metric: 'Full day → under 10 minutes',
  },
  {
    category: 'Operations',
    title: 'Invoice Intelligence System',
    org: 'Internal / B2B',
    problem:
      'Finance teams manually reading through emails one by one to identify invoices, then re-typing the details into spreadsheets — time-consuming, error-prone, and unscalable.',
    solution:
      'Gmail monitoring detects emails with invoice-related keywords. A router handles two paths: PDF attachments go to PDF.co for text extraction; plain-text emails go to OpenAI for structured field extraction. Vendor name, invoice number, dates, and totals land automatically in Google Sheets as structured rows.',
    outcome:
      'Manual invoice review eliminated. Every incoming invoice is automatically extracted and logged — no human reading, no re-typing, no missed entries.',
    tools: ['Make', 'Gmail', 'OpenAI', 'PDF.co', 'Google Sheets'],
    metric: 'Manual review → fully automated',
  },
]

const categoryColors: Record<string, string> = {
  'Revenue Operations': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  Marketing: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Operations: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">
            Projects
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 max-w-xl">
            Real systems. Real outcomes.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg">
            Each project started with a real business problem and ended with a
            measurable reduction in manual work.
          </p>
        </motion.div>

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    Built for {project.org}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-500 uppercase tracking-wide">
                    Result
                  </span>
                  <div className="mt-1 text-sm font-medium text-zinc-200">
                    {project.metric}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
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
