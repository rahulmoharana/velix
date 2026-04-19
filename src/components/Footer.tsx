import { Github, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className={cn(
      "py-20 px-6 md:px-12 border-t transition-colors duration-500",
      isHome ? "bg-white text-black border-black/5" : "bg-[#080805] text-white border-white/5"
    )}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <Link to="/" className="font-display font-bold text-4xl tracking-tighter uppercase mb-6 block scale-x-110 origin-left text-current">VELIX</Link>
          <p className="text-zinc-500 max-w-sm font-mono text-xs uppercase tracking-widest mt-4">
            Pushing the boundaries of digital experiences in <span className={isHome ? "text-zinc-800" : "text-zinc-300"}>Bhubaneswar, Odisha</span>.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <a href="mailto:velixtechsolutions@gmail.com" className="text-sm opacity-60 hover:opacity-100 transition-opacity">velixtechsolutions@gmail.com</a>
            <a href="https://wa.me/918249040033" className={`text-sm transition-colors flex items-center gap-2 ${isHome ? 'opacity-60 hover:text-green-600' : 'opacity-60 hover:text-green-400'}`}>
              <span>+91 824 904 0033</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isHome ? 'bg-green-500/10 text-green-600' : 'bg-green-500/20 text-green-400'}`}>WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Navigation</span>
            <Link to="/work" className="text-sm hover:opacity-50 transition-opacity">Work</Link>
            <Link to="/services" className="text-sm hover:opacity-50 transition-opacity">Services</Link>
            <Link to="/about-us" className="text-sm hover:opacity-50 transition-opacity">About</Link>
            <Link to="/contact" className="text-sm hover:opacity-50 transition-opacity">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Connect</span>
            <div className="flex gap-6">
              <Twitter className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
              <Github className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
              <Linkedin className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
              <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
            </div>
          </div>
        </div>
      </div>
      
      <div className={cn(
        "max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400",
        isHome ? "border-black/5" : "border-white/5"
      )}>
        <span>© 2026 VELIX DIGITAL AGENCY</span>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
