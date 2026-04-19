import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const TECH_STACK = [
  "React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", 
  "GSAP", "Framer Motion", "MongoDB", "PostgreSQL", "AWS", 
  "Docker", "GraphQL", "Firebase", "WebRTC", "Figma"
];

const SVG_PATHS = [
  "M 64 192 C 64 227.346 35.346 256 0 256 L 0 192 C 0 156.654 28.654 128 64 128 Z M 128 128 C 163.346 128 192 156.654 192 192 L 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 L 64 192 C 64 156.654 92.654 128 128 128 Z M 192 128 C 227.346 128 256 156.654 256 192 L 256 256 C 220.654 256 192 227.346 192 192 Z M 0 0 C 35.346 0 64 28.654 64 64 L 64 128 C 28.654 128 0 99.346 0 64 Z M 192 64 C 192 99.346 163.346 128 128 128 C 92.654 128 64 99.346 64 64 L 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 256 64 C 256 99.346 227.346 128 192 128 L 192 64 C 192 28.654 220.654 0 256 0 Z",
  "M 64 0 C 99.346 0 128 28.654 128 64 L 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 Z M 192 128 C 156.654 128 128 99.346 128 64 C 128 28.654 156.654 0 192 0 C 227.346 0 256 28.654 256 64 L 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 156.654 156.654 128 192 128 Z",
  "M 112 32 L 54.627 32 L 128 105.373 L 201.373 32 L 144 32 L 144 0 L 256 0 L 256 112 L 224 112 L 224 54.627 L 150.627 128 L 224 201.373 L 224 144 L 256 144 L 256 256 L 144 256 L 144 224 L 201.373 224 L 128 150.627 L 54.627 224 L 112 224 L 112 256 L 0 256 L 0 144 L 32 144 L 32 201.373 L 105.373 128 L 32 54.627 L 32 112 L 0 112 L 0 0 L 112 0 Z",
  "M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z"
];

export const TechStack = () => {
  const container = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (Math.random() > 0.2) return; // Throttle particle creation
    
    // We get the target element (the capsule itself) to spawn relative to it
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    
    const particle = document.createElement("div");
    
    // Choose random SVG
    const path = SVG_PATHS[Math.floor(Math.random() * SVG_PATHS.length)];
    particle.innerHTML = `<svg viewBox="0 0 256 256" width="100%" height="100%"><path d="${path}" fill="currentColor"/></svg>`;
    particle.style.position = "absolute";
    particle.style.pointerEvents = "none";
    
    // Z-index higher, text-black makes it visible but capsule hover makes text white
    // Using a specific color so it contrasts when overlapping
    particle.className = "text-zinc-900 w-4 h-4 md:w-6 md:h-6 z-50";
    
    // Start at mouse position relative to capsule
    particle.style.left = (e.clientX - rect.left - 12) + "px";
    particle.style.top = (e.clientY - rect.top - 12) + "px";
    
    target.appendChild(particle);

    // Initial state
    gsap.set(particle, { scale: 0.2, opacity: 1, rotation: Math.random() * 360 });

    const animDuration = Math.random() * 0.8 + 0.6;

    // Explode outwards
    gsap.to(particle, {
      x: (Math.random() - 0.5) * 150,
      y: -(Math.random() * 200 + 100),
      rotation: "+=" + (Math.random() * 360 - 180),
      scale: Math.random() * 0.8 + 0.5,
      duration: animDuration,
      ease: "power2.out",
      onComplete: () => {
        if (particle.parentNode) particle.remove();
      }
    });

    gsap.to(particle, {
      opacity: 0,
      duration: animDuration * 0.3,
      delay: animDuration * 0.7,
      ease: "power1.in"
    });
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=150%", // Pin for extra scrolling distance
          pin: true,
          scrub: 1,
        }
      });

      // Initially everything is hidden.
      // We reveal them sequentially but in a random order based on staggering.
      tl.fromTo('.tech-capsule', 
        { 
          y: 60, 
          opacity: 0, 
          scale: 0.5,
          rotate: () => Math.random() * 20 - 10 
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          stagger: {
            amount: 1.5,
            from: "random"
          },
          ease: "elastic.out(1.2, 0.5)",
          duration: 1.5
        }
      );
    });

    // Mobile fallback (don't pin for too long, just a quick reveal)
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo('.tech-capsule', 
        { opacity: 0, scale: 0.5, y: 30 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          stagger: { amount: 0.8, from: "random" },
          duration: 1,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full overflow-hidden bg-white px-6 md:px-12 h-auto md:h-screen flex items-center justify-center">
      <div ref={innerRef} className="max-w-5xl mx-auto flex flex-col items-center justify-center w-full relative z-10 h-full py-8 md:py-20">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-[10px] font-mono text-zinc-400 tracking-[0.5em] uppercase mb-4">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter text-black">
            Our Tech Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full relative z-20">
          {TECH_STACK.map((tech, i) => (
            <div 
              key={i} 
              onMouseMove={handleMouseMove}
              className="tech-capsule relative bg-white border border-zinc-200 text-black px-6 py-3 md:px-10 md:py-5 rounded-full shadow-lg shadow-black/5 hover:border-black hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair"
            >
              <span className="font-display font-bold uppercase tracking-widest text-[10px] md:text-sm relative z-10">
                {tech}
              </span>
            </div>
          ))}
        </div>
        
        {/* Decorative Grid or Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center z-0">
           <div className="w-[150%] h-[150%] border-t border-black rounded-[100%] border-dashed absolute top-[50%] animate-spin-slow" />
        </div>
      </div>
    </section>
  );
};
