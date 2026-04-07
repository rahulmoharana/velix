import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-100"
    >
      <a 
        href="https://wa.me/918249040033" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-green-500 text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-green-400 shadow-2xl shadow-green-500/30 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
        <Phone className="w-5 h-5 shrink-0" />
        
        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-full border border-green-500 animate-ping opacity-20 pointer-events-none" />
      </a>
    </motion.div>
  );
};
