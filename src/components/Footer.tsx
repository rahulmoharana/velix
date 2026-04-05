import React from 'react';
import { Github, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <span className="font-display font-black text-4xl tracking-tighter uppercase mb-6 block scale-x-110 origin-left">VELIX</span>
          <p className="text-zinc-500 max-w-sm font-mono text-xs uppercase tracking-widest mt-4">
            Pushing the boundaries of digital experiences in <span className="text-zinc-300">Bhubaneswar, Odisha</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Navigation</span>
            <a href="#" className="text-sm hover:text-white transition-colors">Work</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Services</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Process</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Connect</span>
            <div className="flex gap-6">
              <Twitter className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Github className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
        <span>© 2026 VELIX DIGITAL AGENCY</span>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
