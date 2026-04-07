export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="text-sm font-medium text-zinc-100 tracking-tight">
          Osamudimen Ojo
        </span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            About
          </a>
          <a
            href="mailto:victorojo007@gmail.com"
            className="text-sm px-4 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}
