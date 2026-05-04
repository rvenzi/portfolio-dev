import React from 'react';
import { Mail, LinkIcon, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id='contact' className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-24 pt-20 flex flex-col justify-between">

      <div className="max-w-4xl mx-auto w-full text-center flex-grow flex flex-col justify-center items-center">
        <span className="text-blue-900 text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
          05 — Contact
        </span>

        <h2 className="text-7xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-10">
          Let's <br />
          <span className="text-blue-900">talk.</span>
        </h2>

        <p className="text-zinc-500 text-sm md:text-base max-w-xl leading-relaxed mb-12">
          Open to job opportunities, freelance gigs, or just a good chat about technology. 
          Send me a message — I always reply.
        </p>

        <a 
          href="mailto:renanvenzi@gmail.com"
          className="group flex items-center gap-3 bg-blue-900 text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-500 transition-all transform hover:-translate-y-1"
        >
          renanvenzi@gmail.com
          <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <SocialLink href="https://github.com/rvenzi" icon={<LinkIcon size={18} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/renanvenzi/" icon={<LinkIcon size={18} />} label="LinkedIn" />
          <SocialLink href="https://instagram.com/renanvenzi" icon={<LinkIcon size={18} />} label="Instagram" />
          <SocialLink href="mailto:renanvenzi@gmail.com" icon={<Mail size={18} />} label="Gmail" />
        </div>
      </div>

      <footer className="w-full max-w-7xl mx-auto border-t border-zinc-900 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-black italic tracking-tighter">
          rv<span className="text-blue-900">.</span>
        </div>
        
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest text-center">
          © {currentYear} Renan Venzi. Built with <span className="text-zinc-400">Next.js + Tailwind</span>.
        </p>
      </footer>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-3 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all text-sm font-medium"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}