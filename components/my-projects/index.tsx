import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Management System — E-commerce / Perfumery",
    featured: true,
    description: "Complete management system for a perfume store: product, stock, and order control. Responsive administrative interface with authentication and reports.",
    techs: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    links: { github: "https://github.com/rvenzi/Next-Desafio-2026.1" }
  },
  {
    id: "02",
    title: "Personal Portfolio",
    featured: false,
    description: "Personal portfolio website to showcase projects and skills. Design focused on performance and accessibility.",
    techs: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { github: "https://github.com/rvenzi/portfolio"}
  },
  {
    id: "03",
    title: "Management System — Barbershop",
    featured: false,
    description: "System developed during the trainee process at CODE JR. Customer scheduling, employee management, and inventory control. Classic stack with PHP and MySQL.",
    techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    links: { github: "https://github.com/jvrangel11/FadeClub-Trainee-2025.2" }
  }
];

export default function ProjectsSection() {
  return (
    <section id='projects' className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <span className="text-blue-900 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            04 — Projects
          </span>
          <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            What I've <br /> built
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 py-16 border-t border-zinc-900 transition-colors hover:bg-zinc-900/10 ${index === projects.length - 1 ? 'border-b' : ''}`}
            >

              <span className="text-4xl md:text-5xl font-black italic tracking-tighter text-blue-900 group-hover:text-blue-500 transition-colors pt-2">
                {project.id}
              </span>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all text-xs font-medium">
                        <ExternalLink size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}