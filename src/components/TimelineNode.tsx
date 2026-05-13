


import React from 'react';
import { motion } from 'framer-motion';
import type { ExperienceNodeProps } from '../type/index';

const TimelineNode: React.FC<ExperienceNodeProps> = ({ title, company, date, points, techStack, isActive }) => {
  return (
    <div className="relative flex flex-col md:flex-row group w-full">
      
      {/* Desktop Timeline Dot (Locked at the 30% split) */}
      <motion.div 
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className={`hidden md:block absolute left-[30%] -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-[#030014] border-4 z-20 
          ${isActive ? 'border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] animate-pulse' : 'border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]'}`}
      ></motion.div>

      {/* Mobile Timeline Dot (Locked to the left border) */}
      <motion.div 
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className={`md:hidden absolute left-[-41px] top-8 w-5 h-5 rounded-full bg-[#030014] border-4 z-20 
          ${isActive ? 'border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] animate-pulse' : 'border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]'}`}
      ></motion.div>

      {/* Left Column: Metadata (Desktop: 30% width, Right-aligned) */}
      <div className="md:w-[30%] md:pr-16 pt-6 md:text-right flex flex-col md:items-end mb-6 md:mb-0">
        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border mb-4 self-start md:self-end
          ${isActive ? 'bg-fuchsia-950/50 text-fuchsia-400 border-fuchsia-800/50' : 'bg-cyan-950/50 text-cyan-400 border-cyan-800/50'}`}>
          {date}
        </span>
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <h4 className="text-lg text-slate-300 font-semibold mb-6">{company}</h4>
        
        {/* Tech Stack displayed clearly under the job title on desktop */}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {techStack.map((tech, i) => (
            <span key={i} className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: Details Card (Desktop: 70% width) */}
      <div className="md:w-[70%] md:pl-16">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`bg-white/[0.03] backdrop-blur-md border p-8 rounded-2xl transition-all duration-300
            ${isActive ? 'border-fuchsia-500/30 hover:bg-white/[0.06] hover:border-fuchsia-500/50 shadow-[0_0_30px_rgba(217,70,239,0.1)]' : 'border-white/10 hover:bg-white/[0.05] hover:border-cyan-500/30'}`}
        >
          <ul className="space-y-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-fuchsia-500' : 'bg-cyan-500'}`}></span>
                <div>{point}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

    </div>
  );
};

export default TimelineNode;