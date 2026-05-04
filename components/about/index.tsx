import React from 'react';

export default function AboutSection() {
  const skills = ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "PHP", "Python"];

  return (
    <section id='about' className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-24 py-20 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <span className="text-blue-900 text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
          01 — About Me
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter leading-[0.9] uppercase">
              I build <br />
              <span className="text-zinc-100">interfaces</span> <br />
              <span className="text-blue-900">that actually <br /> work.</span>
            </h2>

            <div className="space-y-6 text-zinc-500 max-w-xl leading-relaxed">
              <p>
                I am a Computer Science student at the Federal University of 
                Juiz de Fora (UFJF) and a Full-Stack developer focused on 
                complete web solutions — from the database to the user interface.
              </p>
              <p>
                During more than a year and a half at <span className="text-white font-medium">CODE JR.</span>, 
                I learned to transform real problems into functional software, 
                working with clients and teams under market demand. Each project 
                is an opportunity to grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 rounded-full border border-zinc-800 text-zinc-400 text-xs font-medium hover:border-blue-900 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 border border-zinc-800/50">
            
            <div className="p-10 border-b border-r border-zinc-800/50 flex flex-col gap-2">
              <span className="text-4xl font-black italic tracking-tighter text-blue-900">1.5+</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-tight">
                Years at <br /> CODE JR.
              </span>
            </div>
            
            <div className="p-10 border-b border-zinc-800/50 flex flex-col gap-2">
              <span className="text-4xl font-black italic tracking-tighter text-blue-900">3+</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-tight">
                Projects <br /> delivered
              </span>
            </div>
        
            <div className="p-10 border-r border-zinc-800/50 flex flex-col gap-2">
              <span className="text-4xl font-black italic tracking-tighter text-blue-900">UFJF</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-tight">
                Computer <br /> Science
              </span>
            </div>
            
            <div className="p-10 flex flex-col gap-2">
              <span className="text-4xl font-black italic tracking-tighter text-blue-900">Full</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-tight">
                Stack <br /> developer
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}