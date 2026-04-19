import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // typographic fill duration
    const duration = 2.5; 
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 400);
      }
    });

    // Simulate loading progress
    tl.to({}, {
      duration: duration,
      onUpdate: function() {
        setCounter(Math.round(this.progress() * 100));
      },
      ease: "power2.inOut"
    });

    // Exit animation 
    tl.to(".preloader-content", {
      scale: 1.1,
      opacity: 0,
      duration: 0.8,
      ease: "expo.in"
    });

    tl.to(".preloader-bg", {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      stagger: 0.1
    }, "-=0.4");

    // Interactive mouse Move parallex effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden bg-[#080805]">
      {/* Background Layers */}
      <div className="preloader-bg absolute inset-0 bg-black z-0 h-full w-full" />
      <div className="preloader-bg absolute inset-0 bg-[#080805] z-0 h-full w-full" />
      
      {/* Content */}
      <div className="preloader-content relative z-10 h-full w-full flex flex-col items-center justify-center text-white pointer-events-none">
        
        <motion.div 
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: "spring", damping: 30, stiffness: 100, mass: 0.5 }}
          className="relative inline-block select-none"
        >
          {/* Outline Base Text */}
          <h1 
            className="text-[25vw] md:text-[20vw] font-display font-black leading-none tracking-tighter"
            style={{ 
              WebkitTextStroke: '1px rgba(255,255,255,0.2)', 
              color: 'transparent'
            }}
          >
            VELIX
          </h1>

          {/* Filled Text clipping vertically acting as loader mask */}
          <h1 
            className="absolute top-0 left-0 text-[25vw] md:text-[20vw] font-display font-black leading-none tracking-tighter text-white pointer-events-none"
            style={{ 
              clipPath: `inset(${100 - counter}% 0 0 0)`
            }}
          >
            VELIX
          </h1>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-4 overflow-hidden relative">
          <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "200px" }}
             transition={{ duration: 2.5, ease: "easeInOut" }}
             className="h-px bg-white/20 relative rounded-full overflow-hidden" 
          >
            <div 
              className="absolute left-0 top-0 bottom-0 bg-white" 
              style={{ width: `${counter}%` }}
            />
          </motion.div>
          <div className="flex gap-4 items-center">
            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">Loading Environment</span>
            <span className="text-xs font-mono font-bold text-white w-8 text-right">{counter}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
