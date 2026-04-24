import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Animate characters and subtitle
    tl.fromTo(".char", 
      { y: 150, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.04, 
        duration: 0.5, 
        ease: "power4.out" 
      }
    );

    // Short pause
    tl.to({}, { duration: 0.15 });

    // Exit animation - very swift
    tl.to(".preloader-content", {
      y: -80,
      opacity: 0,
      duration: 0.3,
      ease: "power4.in"
    });

    tl.to(".preloader-bg", {
      yPercent: -100,
      duration: 0.4,
      ease: "expo.inOut"
    }, "-=0.15");

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
          className="relative flex select-none overflow-hidden"
        >
          {"VELIX".split("").map((char, index) => (
            <span 
              key={index} 
              className="char text-[25vw] md:text-[20vw] font-display font-black leading-none tracking-tighter inline-block"
            >
              {char}
            </span>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-col items-center gap-2 overflow-hidden relative">
          <span className="char text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase">
            Digital Agency
          </span>
        </div>

      </div>
    </div>
  );
};
