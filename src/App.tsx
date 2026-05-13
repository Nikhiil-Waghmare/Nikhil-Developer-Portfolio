import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import AIChatbot from './components/AIChatbots';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Check if the page is already fully loaded
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 1500); 
    } else {
      const handleLoad = () => {
        // Keep the loader visible for a moment for visual impact
        setTimeout(() => setIsLoading(false), 1500);
      };

      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-200 font-sans overflow-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* --- Full Screen Loader --- */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#030014]"
          >
            {/* Spinning Neon Ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                borderColor: ["#d946ef", "#22d3ee", "#d946ef"],
                boxShadow: [
                  "0 0 15px rgba(217,70,239,0.3)",
                  "0 0 30px rgba(34,211,238,0.5)",
                  "0 0 15px rgba(217,70,239,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-2 border-t-transparent rounded-full"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center"
            >
              <h2 className="text-fuchsia-500 font-mono tracking-[0.5em] text-sm uppercase">
                Initializing Portfolio
              </h2>
              <div className="mt-2 w-32 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto overflow-hidden">
                <motion.div 
                  animate={{ x: [-128, 128] }}
                  transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-cyan-400"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* --- Main Content --- */
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            {/* Neon Scroll Progress Bar */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 z-[100] origin-left"
              style={{ scaleX: scrollYProgress }}
            />

            {/* Animated Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-600/20 blur-[120px]"
              />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[150px]"
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
            <AIChatbot />
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default App;