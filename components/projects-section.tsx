"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { Github, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Derivada",
    description: "Plataforma para desenvolvimento de competências no uso de Inteligência Artificial Aplicada.",
    image: "/projects/derivada-hero.png",
    screenshots: ["/projects/derivada-full.png"],
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "",
    url: "https://derivada.org",
  },
  {
    id: 2,
    title: "GU.IA",
    description: "Plataforma de notícias com integração de IA utilizando Next.js e NestJS.",
    image: "/projects/screenshots_guia/jornal.png",
    screenshots: [
      "/projects/screenshots_guia/jornal.png",
      "/projects/screenshots_guia/jornal-slug.png",
      "/projects/screenshots_guia/colunistas.png",
      "/projects/screenshots_guia/colunistas-slug.png",
      "/projects/screenshots_guia/acervo.png",
      "/projects/screenshots_guia/do-guara.png",
      "/projects/screenshots_guia/historia.png",
      "/projects/screenshots_guia/contato.png",
      "/projects/screenshots_guia/login.png",
      "/projects/screenshots_guia/login-esqueceu-senha.png",
      "/projects/screenshots_guia/dashboard.png",
      "/projects/screenshots_guia/dashboard-noticias.png",
      "/projects/screenshots_guia/dashboard-noticias-nova.png",
      "/projects/screenshots_guia/dashboard-noticias-editar.png",
      "/projects/screenshots_guia/dashboard-categorias.png",
      "/projects/screenshots_guia/dashboard-categorias-nova.png",
      "/projects/screenshots_guia/dashboard-categorias-editar.png",
      "/projects/screenshots_guia/dashboard-colunistas.png",
      "/projects/screenshots_guia/dashboard-colunistas-novo.png",
      "/projects/screenshots_guia/dashboard-colunistas-editar.png",
      "/projects/screenshots_guia/dashboard-layout.png",
      "/projects/screenshots_guia/dashboard-configuracoes.png",
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "AI"],
    github: "https://github.com/devLucasEmiliano/gu.ia",
  },
  {
    id: 3,
    title: "Neuron",
    description: "Extensão Chrome desenvolvida para o Ministério da Agricultura e exportada para a Controladoria-Geral da União, integrada ao Fala.BR — o maior sistema de ouvidoria do Brasil.",
    image: "/projects/screenshots_neuron/neuron-dashboard.png",
    screenshots: [
      "/projects/screenshots_neuron/neuron-dashboard.png",
      "/projects/screenshots_neuron/neuron-geral.png",
      "/projects/screenshots_neuron/neuron-wiget.png",
      "/projects/screenshots_neuron/neuron-prazos.png",
      "/projects/screenshots_neuron/neuron-respostas.png",
      "/projects/screenshots_neuron/neuron-modelos.png",
      "/projects/screenshots_neuron/neuron-focais.png",
      "/projects/screenshots_neuron/neuron-json.png",
      "/projects/screenshots_neuron/neuron-notifier.png",
      "/projects/screenshots_neuron/neuron-tratar.png",
    ],
    tags: ["JavaScript", "HTML", "CSS", "Chrome Extension"],
    github: "https://github.com/devLucasEmiliano/Neuron",
  },
  {
    id: 4,
    title: "COP30 Chatbot",
    description: "Chatbot criado para atender demandas do exterior durante o período da COP30 para o Fala.BR.",
    image: "/projects/screenshots_cop30/03-chat-interface.png",
    screenshots: [
      "/projects/screenshots_cop30/01-language-selection.png",
      "/projects/screenshots_cop30/02-terms-and-conditions.png",
      "/projects/screenshots_cop30/03-chat-interface.png",
    ],
    tags: ["Next.js"],
    github: "",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com checkout, pagamentos e dashboard admin.",
    image: "/ecommerce-platform-dark-theme.png",
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "#",
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas com real-time sync e colaboração em equipe.",
    image: "/task-management-dark-theme.png",
    screenshots: [],
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
  },
  {
    id: 7,
    title: "API Rest com Autenticação",
    description: "Sistema de API Rest com autenticação JWT e session, usando Node + Express + Sequelize.",
    image: "/rest-api-authentication-dark-theme.jpg",
    screenshots: [],
    tags: ["Node.js", "Express", "JWT", "MySQL"],
    github: "#",
  },
  {
    id: 8,
    title: "Blog com CMS",
    description: "Blog completo com sistema de login, criação de posts e gerenciamento de conteúdo.",
    image: "/blog-cms-dark-theme.jpg",
    screenshots: [],
    tags: ["Next.js", "Strapi", "PostgreSQL", "Tailwind"],
    github: "#",
  },
  {
    id: 9,
    title: "Dashboard Analytics",
    description: "Dashboard de analytics com visualizações interativas e relatórios customizados.",
    image: "/analytics-dashboard-dark-theme.png",
    screenshots: [],
    tags: ["React", "Redux", "D3.js", "NestJS"],
    github: "#",
  },
  {
    id: 10,
    title: "Sistema de Chat Real-time",
    description: "Aplicação de chat em tempo real com salas e mensagens privadas.",
    image: "/dark-theme-chat-app.png",
    screenshots: [],
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    github: "#",
  },
  {
    id: 11,
    title: "Portfolio Interativo",
    description: "Portfolio pessoal com animações, tema dark/light e design responsivo.",
    image: "/developer-portfolio-dark-theme.jpg",
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer"],
    github: "#",
  },
]

type Project = (typeof projects)[0]

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project
  index: number
  onImageClick: (project: Project) => void
}) {
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

      {/* Image - clickable to open lightbox */}
      <div
        className="relative overflow-hidden aspect-video cursor-pointer"
        onClick={() => onImageClick(project)}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        {/* Expand indicator */}
        <div className="absolute bottom-2 right-2 p-1.5 bg-background/70 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={14} />
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

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-secondary transition-colors font-mono"
            >
              <Github size={14} />
              <span>source code</span>
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-secondary transition-colors font-mono"
            >
              {project.url.replace("https://", "")}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const screenshots = selectedProject?.screenshots ?? []
  const hasMultiple = screenshots.length > 1
  const currentImage = screenshots.length > 0
    ? screenshots[currentImageIndex]
    : selectedProject?.image ?? ""

  const goNext = useCallback(() => {
    setCurrentImageIndex((i) => (i + 1) % screenshots.length)
  }, [screenshots.length])

  const goPrev = useCallback(() => {
    setCurrentImageIndex((i) => (i - 1 + screenshots.length) % screenshots.length)
  }, [screenshots.length])

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedProject])

  // Keyboard navigation
  useEffect(() => {
    if (!selectedProject || !hasMultiple) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedProject, hasMultiple, goNext, goPrev])

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
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onImageClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-4 md:inset-8 z-50 flex flex-col items-center justify-center outline-none">
            {selectedProject && (
              <>
                <Dialog.Close className="absolute top-0 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors z-10">
                  <X size={20} />
                </Dialog.Close>

                {/* Project info bar */}
                <div className="flex items-center gap-4 mb-4 w-full max-w-5xl">
                  <Dialog.Title className="text-lg font-semibold text-foreground">
                    {selectedProject.title}
                  </Dialog.Title>
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-secondary transition-colors font-mono"
                    >
                      {selectedProject.url.replace("https://", "")}
                    </a>
                  )}
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <Github size={16} />
                      <span className="font-mono">source</span>
                    </a>
                  )}
                </div>

                <VisuallyHidden.Root>
                  <Dialog.Description>
                    {selectedProject.description}
                  </Dialog.Description>
                </VisuallyHidden.Root>

                {/* Screenshot viewer */}
                <div className="relative w-full max-w-5xl">
                  <div className="relative overflow-auto max-h-[80vh] border border-border">
                    <Image
                      src={currentImage}
                      alt={selectedProject.title}
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-contain bg-card"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>

                  {/* Navigation arrows */}
                  {hasMultiple && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border text-muted-foreground hover:text-foreground hover:border-secondary transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border text-muted-foreground hover:text-foreground hover:border-secondary transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Image counter */}
                {hasMultiple && (
                  <div className="mt-3 text-xs text-muted-foreground font-mono">
                    {currentImageIndex + 1} / {screenshots.length}
                  </div>
                )}
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
