import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioHero() {
  return (
    <main id='home' className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex flex-col justify-start pt-48 md:pt-42 px-6 md:px-24">

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse"></span>
            Available for opportunities
          </div>

          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter leading-[0.9]">
              Renan <br />
              <span className="text-blue-900">Venzi</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light italic">
              Software Developer & Computer Science Student. Building scalable web solutions, turning complex problems into functional software.
            </p>
          </div>

          <p className="max-w-md text-zinc-500 leading-relaxed text-sm">
            Computer Science student at UFJF. I build scalable web solutions from front to back. I have 1.5 years of hands-on experience at CODE JR., with a strong focus on Next.js, TypeScript, and PostgreSQL.
            </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="flex items-center gap-2 bg-blue-900 text-white border border-zinc-800 px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-700 transition-colors">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-zinc-800 font-bold text-sm hover:bg-zinc-900 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        <div className="lg:flex justify-end">
          <div className="w-[400px] h-[500px] bg-[#0a0a0a] rounded-2xl relative flex flex-col items-center justify-center group overflow-hidden">
            <Image
              src="/foto-perfil-portfolio.jpeg"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full border-4 border-blue-900 group-hover:scale-105 transition-transform duration-300"
            />
                
          </div>
        </div>

      </div>
    </main>
  );
}