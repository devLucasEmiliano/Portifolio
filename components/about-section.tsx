"use client"

import { useEffect, useRef, useState } from "react"

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "NestJS",
  "Tailwind CSS",
  "Docker",
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground font-mono">01</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-secondary">{"//"}</span> About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedor Full-Stack com <span className="text-foreground">1+ anos</span> de experiência construindo
                aplicações web modernas e escaláveis. Apaixonado por experiências de usuário excepcionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente focado em aprender mais sobre back-end. Sempre explorando novas formas de resolver problemas
                complexos de forma elegante.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-primary">1+</p>
                  <p className="text-sm text-muted-foreground">Anos de exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">+5</p>
                  <p className="text-sm text-muted-foreground">Projetos</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm text-muted-foreground font-mono mb-4">
                <span className="text-secondary">const</span> stack <span className="text-secondary">=</span> {"{"}
              </p>
              <div className="flex flex-wrap gap-3 pl-4">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm border border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-mono mt-4">{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
