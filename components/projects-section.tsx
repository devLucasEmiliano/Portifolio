"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com checkout, pagamentos e dashboard admin.",
    image: "/ecommerce-platform-dark-theme.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas com real-time sync e colaboração em equipe.",
    image: "/task-management-dark-theme.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "API Rest com Autenticação",
    description: "Sistema de API Rest com autenticação JWT e session, usando Node + Express + Sequelize.",
    image: "/rest-api-authentication-dark-theme.jpg",
    tags: ["Node.js", "Express", "JWT", "MySQL"],
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Blog com CMS",
    description: "Blog completo com sistema de login, criação de posts e gerenciamento de conteúdo.",
    image: "/blog-cms-dark-theme.jpg",
    tags: ["Next.js", "Strapi", "PostgreSQL", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Dashboard de analytics com visualizações interativas e relatórios customizados.",
    image: "/analytics-dashboard-dark-theme.png",
    tags: ["React", "Redux", "D3.js", "NestJS"],
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Sistema de Chat Real-time",
    description: "Aplicação de chat em tempo real com salas e mensagens privadas.",
    image: "/dark-theme-chat-app.png",
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    demo: "#",
    github: "#",
  },
  {
    id: 7,
    title: "Portfolio Interativo",
    description: "Portfolio pessoal com animações, tema dark/light e design responsivo.",
    image: "/developer-portfolio-dark-theme.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer"],
    demo: "#",
    github: "#",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative border border-border bg-card hover:border-secondary transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project number */}
      <span className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground font-mono">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-background/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href={project.demo}
            className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Ver demo"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={project.github}
            className="p-3 border border-border text-foreground hover:border-primary transition-colors"
            aria-label="Ver código"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-secondary/10 text-secondary border border-secondary/30">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-24 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground font-mono">02</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-secondary">{"//"}</span> Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
