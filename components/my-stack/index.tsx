import React from 'react';

const techStack = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "HTML / CSS", level: 3 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", level: 2 },
      { name: "Python", level: 2 },
      { name: "C++", level: 1 },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: 2 },
      { name: "MySQL", level: 3 },
      { name: "Prisma ORM", level: 2 },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 2 },
      { name: "Railway", level: 1 },
      { name: "Figma", level: 1 },
      { name: "VS Code", level: 3 },
    ]
  }
];

export default function TechStackSection() {
  const renderLevel = (level: number) => (
    <div className="flex gap-1">
      {[1, 2, 3].map((dot) => (
        <div 
          key={dot} 
          className={`w-1.5 h-1.5 rounded-full ${dot <= level ? 'bg-zinc-100' : 'bg-zinc-800'}`}
        />
      ))}
    </div>
  );

  return (
    <section id='stack' className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-24 py-20 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-20">
          <span className="text-blue-900 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            03 — Tech Stack
          </span>
          <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            Tools I <br /> use
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-zinc-900">
          {techStack.map((group, idx) => (
            <div 
              key={group.category} 
              className={`pt-10 pb-20 px-0 lg:px-8 ${idx !== 0 ? 'lg:border-l border-zinc-900' : ''}`}
            >
              <h3 className="text-blue-900 text-xs font-bold tracking-widest uppercase mb-10">
                {group.category}
              </h3>
              
              <ul className="space-y-6">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between group">
                    <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-medium">
                      {skill.name}
                    </span>
                    {renderLevel(skill.level)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-8 border-t border-zinc-900 pt-8">
          <div className="flex items-center gap-2">
            {renderLevel(3)}
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Main</span>
          </div>
          <div className="flex items-center gap-2">
            {renderLevel(2)}
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            {renderLevel(1)}
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Basic</span>
          </div>
        </div>

      </div>
    </section>
  );
}