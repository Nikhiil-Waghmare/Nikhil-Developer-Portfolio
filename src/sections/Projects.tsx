import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/index';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative z-10 py-32 px-4 bg-black/40 backdrop-blur-lg border-y border-white/5">
      <div className="max-w-6xl mx-auto">
         <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-blue-400">Work</span></h2>
          <p className="text-slate-400">A selection of enterprise-grade applications I've built.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;