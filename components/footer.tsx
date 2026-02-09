export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-secondary">&copy;</span> {currentYear} Lucas Emiliano
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-secondary">{"//"}</span> Built with <span className="text-foreground">Next.js</span> +{" "}
            <span className="text-foreground">Tailwind</span>
          </p>

          <a href="https://github.com/devLucasEmiliano" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">
            <span className="text-secondary">{"<"}</span>
            source
            <span className="text-secondary">{"/>"}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
