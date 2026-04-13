import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // typographic counter
    const duration = 1.5;
    const tl = gsap.timeline({
      onComplete: () => {
        // Give a tiny beat at 100%
        setTimeout(onComplete, 500);
      }
    });

    tl.to(".preloader-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "expo.out",
    });

    tl.to({}, {
      duration: duration,
      onUpdate: function() {
        setCounter(Math.round(this.progress() * 100));
      },
      ease: "power4.inOut"
    }, "-=0.5");

    // Exit animation for elements
    tl.to(".preloader-content", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.inOut"
    }, "+=0.2");

    tl.to(".preloader-bg", {
      height: 0,
       duration: 1.2,
      ease: "expo.inOut",
      stagger: 0.1
    }, "-=0.4");

  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Background Layers */}
      <div className="preloader-bg absolute inset-0 bg-black z-0 h-full w-full" />
      <div className="preloader-bg absolute inset-0 bg-zinc-900 z-0 h-full w-full" />
      
      {/* Content */}
      <div className="preloader-content relative z-10 h-full w-full flex flex-col items-center justify-center text-white pointer-events-auto">
        <div className="overflow-hidden mb-4">
          <h2 className="preloader-title text-sm md:text-base font-display font-medium uppercase tracking-[0.8em] opacity-0 translate-y-full">
            VELIX
          </h2>
        </div>

        <div className="overflow-hidden">
          <motion.span 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="block text-[25vw] md:text-[15vw] font-display font-black leading-none tracking-tighter"
          >
            {counter}
          </motion.span>
        </div>
        
        <div className="mt-4 flex items-center gap-4 overflow-hidden">
          <motion.div 
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="w-12 h-px bg-white/20" 
          />
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/40">
            Initialising Experience
          </span>
           <motion.div 
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="w-12 h-px bg-white/20" 
          />
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
             <span className="text-[8px] uppercase font-mono tracking-widest text-white/20">
               Velix Digital Agency © 2026
             </span>
        </div>
      </div>
    </div>
  );
};
