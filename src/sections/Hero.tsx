import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          Available for New Opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6"
        >
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 animate-gradient-x">Nikhil Waghmare</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-400 max-w-3xl mb-10 leading-relaxed font-light"
        >
          A passionate <strong className="text-white font-semibold">MERN Stack Engineer</strong> with 3.5+ years of experience architecting scalable backend systems and high-performance user interfaces.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-all">
            <span className="relative z-10 flex items-center gap-2">Explore My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/></span>
          </a>
          <a href="/resume.pdf" download className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2">
            <FileText size={18} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;