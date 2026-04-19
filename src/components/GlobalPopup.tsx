import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GlobalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Reveal popup 4 seconds after page initializes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white text-black p-8 md:p-12 max-w-lg w-full relative shadow-2xl flex flex-col items-center text-center rounded-[2rem]"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 opacity-50 hover:opacity-100 transition-opacity bg-zinc-100 rounded-full"
            >
              <X size={20} />
            </button>

            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4 block">Limited Availability</span>
            
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter leading-none mb-4">
              Free Technical <br />Consultation
            </h3>
            
            <p className="text-zinc-600 mb-8 text-sm md:text-base leading-relaxed">
              Accelerate your digital growth with our expert insights. Book a free 30-minute architecture and design discovery call with our lead team today.
            </p>

            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-8 py-4 w-full rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors"
            >
              Claim Your Session
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
