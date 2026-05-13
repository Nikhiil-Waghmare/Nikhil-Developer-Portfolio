import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Code2 } from 'lucide-react';

const skills = [
  { icon: <Layout />, name: "React.js", color: "text-blue-400" },
  { icon: <Server />, name: "Node.js", color: "text-green-400" },
  { icon: <Database />, name: "MongoDB", color: "text-emerald-500" },
  { icon: <Code2 />, name: "Express.js", color: "text-slate-300" },
  { icon: <Layout />, name: "TypeScript", color: "text-blue-500" },
  { icon: <Server />, name: "Microservices", color: "text-fuchsia-400" },
  { icon: <Code2 />, name: "REST APIs", color: "text-cyan-400" },
  { icon: <Database />, name: "SQL Server", color: "text-red-400" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative z-10 py-32 px-4 bg-black/40 backdrop-blur-lg border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Arsenal</span></h2>
          <p className="text-slate-400">Tools and technologies I use to build enterprise-grade applications.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className={`${skill.color} p-4 rounded-full bg-white/[0.02] group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;