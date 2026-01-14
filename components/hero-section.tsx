"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, ArrowDown } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullName = "Lucas Emiliano"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="space-y-8">
          {/* Comment decoration */}
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-secondary">{"//"}</span> introdução
          </p>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground">Olá, eu sou</p>

          {/* Name with typing effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
            {displayText}
            <span className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </h1>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-foreground">
              Desenvolvedor <span className="text-primary">Full-Stack</span>
            </p>
            <p className="text-lg text-muted-foreground">
              especializado em <span className="text-secondary">React/Next.js</span> &{" "}
              <span className="text-secondary">Node.js/Nest.js</span>
            </p>
          </div>

          {/* CTA and Social Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition-all hover:bg-primary/90"
            >
              <span>Ver projetos</span>
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground border border-border hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground border border-border hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Line numbers decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 text-xs text-muted-foreground/30 font-mono pl-2">
          {Array.from({ length: 15 }, (_, i) => (
            <span key={i}>{String(i + 1).padStart(2, "0")}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
