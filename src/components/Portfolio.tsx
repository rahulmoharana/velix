import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';

// Import local assets
import quickAiImg from '../assets/1-QuickAi.png';
import splytImg from '../assets/2-Splyt.png';
import sundownImg from '../assets/3-Sundown.png';
import twogoodImg from '../assets/4-twofoodco.png';
import velixEduImg from '../assets/5-VelixEdu.png';

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap bg-black h-full items-center">
      <div className="flex animate-marquee py-2">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="text-white text-lg md:text-xl font-display font-bold uppercase tracking-widest mx-3">
            {text} —
          </span>
        ))}
      </div>
      <div className="flex animate-marquee py-2" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="text-white text-lg md:text-xl font-display font-bold uppercase tracking-widest mx-3">
            {text} —
          </span>
        ))}
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  const projects = [
    { name: "quick AI", link: "https://ai-saas-nine-rosy.vercel.app/", image: quickAiImg },
    { name: "SPLYT", link: "https://spylt-clone-tawny.vercel.app/", image: splytImg },
    { name: "SunDown", link: "https://sundown-clone-kappa.vercel.app/", image: sundownImg },
    { name: "Twogood", link: "https://two-good-co-clone-phi.vercel.app/", image: twogoodImg },
    { name: "Velix Edu", link: "#", image: velixEduImg }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 120);
      mouseY.set(e.clientY - 90);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useGSAP(() => {
    gsap.from('.project-item', {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="relative py-8 md:py-16 overflow-hidden">
      {/* Small Heading */}
      <div className="flex flex-col gap-2 mb-12 px-6 md:px-12">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400">
           Gallery / Selected
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black uppercase tracking-tighter leading-none">
           Our Work
        </h2>
      </div>

      {/* Projects List */}
      <div className="relative z-10 w-full border-t border-zinc-100">
        {projects.map((p, i) => (
          <a 
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item group relative block border-b border-zinc-100 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Top Layer (Default state) */}
            <div className="flex items-center justify-between py-6 md:py-10 px-6 md:px-12 transition-transform duration-700 group-hover:-translate-y-full">
               <div className="flex items-center gap-6 md:gap-10 w-full">
                  <span className="text-[10px] md:text-xs font-mono text-zinc-300">0{i+1}</span>
                  <h3 className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[5rem] font-display font-bold uppercase tracking-tight leading-none shrink-0 group-hover:text-black transition-colors duration-500">
                    {p.name}
                  </h3>
               </div>
               <span className="hidden md:block text-[10px] font-mono uppercase tracking-widest text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Full View ↗
               </span>
            </div>

            {/* Bottom Overlay (Hover state) */}
            <div className="absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]">
               <div className="flex overflow-hidden whitespace-nowrap bg-zinc-950 h-full items-center">
                 <div className="flex animate-marquee py-2">
                   {[...Array(15)].map((_, idx) => (
                     <span key={idx} className="text-white text-2xl sm:text-4xl md:text-[3rem] lg:text-[4rem] font-display font-bold uppercase tracking-tighter mx-4 leading-none">
                       {p.name} —
                     </span>
                   ))}
                 </div>
                 <div className="flex animate-marquee py-2" aria-hidden="true">
                   {[...Array(15)].map((_, idx) => (
                     <span key={idx} className="text-white text-2xl sm:text-4xl md:text-[3rem] lg:text-[4rem] font-display font-bold uppercase tracking-tighter mx-4 leading-none">
                       {p.name} —
                     </span>
                   ))}
                 </div>
               </div>
            </div>
          </a>
        ))}
      </div>

      {/* Sticky/Floating Image Preview (Smaller) */}
      <motion.div 
        className="fixed top-0 left-0 pointer-events-none z-50 w-[240px] md:w-[300px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        style={{
          x: smoothX,
          y: smoothY,
          scale: hoveredIndex !== null ? 1 : 0,
          rotate: hoveredIndex !== null ? 1 : 0,
        }}
      >
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.img 
              key={hoveredIndex}
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute bottom-10 right-10 text-[10px] font-mono text-zinc-200 uppercase tracking-[1em] vertical-text">
         CURATED PROJECTS
      </div>
    </section>
  );
};

// Add global CSS for marquee in index.css if not present
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .animate-marquee {
//   animation: marquee 10s linear infinite;
// }
