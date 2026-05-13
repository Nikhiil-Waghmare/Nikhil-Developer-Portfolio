import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import type { ProjectCardProps } from '../type/index';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, index, githubUrl, liveUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-48 w-full bg-gradient-to-br from-slate-900 to-black relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm z-10">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-fuchsia-500/20 hover:text-fuchsia-400 text-white transition-all hover:scale-110">
              <ExternalLink size={24} />
            </a>
          )}
        </div>
        
        <div className="absolute bottom-4 left-6 group-hover:scale-105 group-hover:opacity-0 transition-all duration-500">
           <Code2 size={40} className="text-white/20" />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed font-medium flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className="text-[11px] font-bold text-white/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;