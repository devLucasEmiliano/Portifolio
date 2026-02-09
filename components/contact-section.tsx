"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Copy, Check, Github } from "lucide-react"

const email = "lucas@example.com"

const socials = [
  { icon: Github, href: "https://github.com/devLucasEmiliano", label: "GitHub" }
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground font-mono">04</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-secondary">{"//"}</span> Contact Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interessado em trabalhar juntos ou tem alguma pergunta? Sinta-se à vontade para entrar em contato.
            </p>

            {/* Email with copy */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-3 px-6 py-4 border border-border bg-card">
                <Mail size={20} className="text-primary" />
                <span className="text-foreground font-mono">{email}</span>
                <button
                  onClick={copyEmail}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copiar email"
                >
                  {copied ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* Terminal-style decoration */}
            <div className="pt-8 font-mono text-sm text-muted-foreground">
              <p>
                <span className="text-secondary">$</span> echo &quot;Vamos criar algo incrível juntos&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
