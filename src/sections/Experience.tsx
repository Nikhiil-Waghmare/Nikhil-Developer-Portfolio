
import React from 'react';
import { motion } from 'framer-motion';
import TimelineNode from '../components/TimelineNode';
import { experiences } from '../data/index';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 py-32 px-4 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-24 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional <span className="text-fuchsia-400">Journey</span></h2>
        <p className="text-slate-400">My track record of delivering enterprise-grade solutions.</p>
      </motion.div>

      <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12 md:space-y-20">
        {/* Desktop Split Line (At the 30% mark) */}
        <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-transparent"></div>

        {experiences.map((exp, index) => (
          <TimelineNode 
            key={index}
            title={exp.title} 
            company={exp.company} 
            date={exp.date}
            techStack={exp.techStack}
            points={exp.points}
            isActive={exp.isActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;