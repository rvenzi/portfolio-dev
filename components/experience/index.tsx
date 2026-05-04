import React from 'react';

const experiences = [
    {
    period: "April 2025",
    current: true,
    company: "University of Juiz de Fora",
    role: "Student Researcher",
    description: "Conducting research in the field of software development, focusing on web technologies and database management. Collaborating with professors and peers to explore innovative solutions and contribute to academic publications.",
    techs: ["C++, HTML", "CSS", "JavaScript"]
  },
  {
    period: "Jun 2025 — Present",
    current: true,
    company: "CODE JR.",
    role: "Full-Stack Developer",
    description: "Junior tech company at UFJF. Development of complete web systems for real clients, focusing on Next.js, PHP, and relational databases. Experience in management projects, e-commerce, and automation.",
    techs: ["Next.js", "PHP", "MySQL", "PostgreSQL", "Tailwind CSS", "Prisma", "Git", "VS Code", "Figma", "Railway"]
  },
  {
    period: "2026 — Present",
    current: false,
    company: "Freelance",
    role: "Web Developer",
    description: "Independent projects for management systems and institutional websites. Delivering personalized solutions for small businesses with a focus on usability and scalability.",
    techs: ["Next.js", "TypeScript", "Prisma", "Railway", "Tailwind CSS", "Git", "VS Code", "PostgreSQL", "MySQL", "Python"]
  }
];

export default function ExperienceSection() {
  return (
    <section id='experience' className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-24 py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        
        {/* Header da Seção */}
        <div className="mb-20">
          <span className="text-blue-900 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            02 — Experience
          </span>
          <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase">
            My <br /> Journey
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[250px_1px_1fr] gap-8 md:gap-12 relative">
              
              <div className="flex items-center md:items-start gap-4 pt-1">
                <span className="text-zinc-500 text-sm font-medium">{exp.period}</span>
                {exp.current && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-blue-900/50 bg-blue-900/20 text-[10px] text-blue-500 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse"></span>
                    Current
                  </span>
                )}
              </div>

              <div className="hidden md:block w-px bg-zinc-800 h-full relative">
                <div className="absolute top-2 -left-[2px] w-[5px] h-[5px] rounded-full bg-zinc-600"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black italic tracking-tight inline-block mr-3 uppercase">
                    {exp.company}
                  </h3>
                  <span className="text-zinc-500 text-sm italic">{exp.role}</span>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full border border-zinc-800 text-zinc-500 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {index !== experiences.length - 1 && (
                <div className="col-span-full h-px bg-zinc-900 mt-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}