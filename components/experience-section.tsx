"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    id: 1,
    company: "Freelancer",
    role: "Full-Stack Developer",
    period: "2025 - Presente",
    description:
      "Desenvolvimento do GU.IA, plataforma de notícias com integração de IA utilizando Next.js e NestJS.",
  },
  {
    id: 2,
    company: "Controladoria-Geral da União",
    role: "Full-Stack Developer",
    period: "2025 - Presente",
    description:
      "Criação de página de cadastro de demandas do Fala.BR para a COP30, desenvolvimento de prompts de IA e ajustes finos para suporte automatizado.",
  },
  {
    id: 3,
    company: "Derivada",
    role: "Full-Stack Developer",
    period: "2025",
    description:
      "Desenvolvimento de MVPs e features core com Next.js, Node.js e Redis. Criação de landing pages, aplicações web e participação ativa em decisões de produto.",
  },
  {
    id: 4,
    company: "Ministério da Agricultura e Pecuária",
    role: "Web Developer",
    period: "2025",
    description:
      "Desenvolvimento de interfaces responsivas e criação da extensão Neuron para Chrome, integrando com a plataforma Fala.BR.",
  },
  {
    id: 5,
    company: "Ministério da Educação",
    role: "Web Developer",
    period: "2024 - 2025",
    description:
      "Desenvolvimento de extensão Chrome e painel administrativo em PowerApps integrado ao Microsoft 365.",
  },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground font-mono">03</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-secondary">{"//"}</span> Experiences
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary border-2 border-background md:-translate-x-1/2 top-2" />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="border border-border p-6 bg-card hover:border-secondary transition-colors">
                      <span className="text-xs text-primary font-mono">{exp.period}</span>
                      <h3 className="text-lg font-semibold mt-2 text-foreground">{exp.role}</h3>
                      <p className="text-secondary text-sm mt-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
