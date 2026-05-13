import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50"
    >
      <div className="flex items-center gap-6 text-sm font-semibold">
        <a href="#about" className="hover:text-fuchsia-400 transition-colors">Home</a>
        <a href="#skills" className="hover:text-fuchsia-400 transition-colors">Arsenal</a>
        <a href="#experience" className="hover:text-fuchsia-400 transition-colors">Journey</a>
        <a href="#projects" className="hover:text-fuchsia-400 transition-colors">Work</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;