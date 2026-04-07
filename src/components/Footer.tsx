export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <span>© {new Date().getFullYear()} Osamudimen Ojo</span>
        <div className="flex gap-6">
          <a
            href="mailto:victorojo007@gmail.com"
            className="hover:text-zinc-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ojov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
