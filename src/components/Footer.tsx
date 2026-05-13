import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const FooterIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
  const isExternal = !href.startsWith('mailto:') && !href.startsWith('tel:');
  return (
    <a 
      href={href} 
      target={isExternal ? "_blank" : undefined} 
      rel={isExternal ? "noreferrer" : undefined}
      className="p-4 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 text-center border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's connect.</h2>
        
        <div className="flex gap-6 mb-10">
          <FooterIcon href="mailto:wnikhil001@gmail.com" icon={<Mail />} />
          <FooterIcon href="https://github.com/Nikhil-Waghmare-Dev-05" icon={<Github />} />
          <FooterIcon href="https://linkedin.com/in/yourusername" icon={<Linkedin />} />
          <FooterIcon href="tel:+919860850969" icon={<Phone />} />
        </div>

        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Nikhil Waghmare. Crafted with React & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;