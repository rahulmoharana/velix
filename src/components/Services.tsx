import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe,
  Layout,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const SVG_PATHS = [
  "M 64 192 C 64 227.346 35.346 256 0 256 L 0 192 C 0 156.654 28.654 128 64 128 Z M 128 128 C 163.346 128 192 156.654 192 192 L 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 L 64 192 C 64 156.654 92.654 128 128 128 Z M 192 128 C 227.346 128 256 156.654 256 192 L 256 256 C 220.654 256 192 227.346 192 192 Z M 0 0 C 35.346 0 64 28.654 64 64 L 64 128 C 28.654 128 0 99.346 0 64 Z M 192 64 C 192 99.346 163.346 128 128 128 C 92.654 128 64 99.346 64 64 L 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 256 64 C 256 99.346 227.346 128 192 128 L 192 64 C 192 28.654 220.654 0 256 0 Z",
  "M 64 0 C 99.346 0 128 28.654 128 64 L 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 Z M 192 128 C 156.654 128 128 99.346 128 64 C 128 28.654 156.654 0 192 0 C 227.346 0 256 28.654 256 64 L 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 156.654 156.654 128 192 128 Z",
  "M 112 32 L 54.627 32 L 128 105.373 L 201.373 32 L 144 32 L 144 0 L 256 0 L 256 112 L 224 112 L 224 54.627 L 150.627 128 L 224 201.373 L 224 144 L 256 144 L 256 256 L 144 256 L 144 224 L 201.373 224 L 128 150.627 L 54.627 224 L 112 224 L 112 256 L 0 256 L 0 144 L 32 144 L 32 201.373 L 105.373 128 L 32 54.627 L 32 112 L 0 112 L 0 0 L 112 0 Z",
  "M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z"
];

const servicesList = [
  {
    svgPath: SVG_PATHS[0],
    title: "UI/UX Experience",
    description: "Bespoke, high-end visual identities and website layouts crafted meticulously from scratch. We architect journeys that transform casual visitors into devoted customers."
  },
  {
    svgPath: SVG_PATHS[1],
    title: "Web Platforms",
    description: "Lightning-fast, immersive landing pages and full-scale enterprise CMS solutions. Built on modern stacks capable of handling massive scale."
  },
  {
    svgPath: SVG_PATHS[2],
    title: "SaaS Infrastructure",
    description: "Robust end-to-end software development. We build the architecture, APIs, and front-end tools that power next-generation startups."
  },
  {
    svgPath: SVG_PATHS[3],
    title: "Technical Consulting",
    description: "Expert mentorship and architectural guidance for complex student projects and startup MVPs, ensuring technical depth and success."
  }
];

const ServiceCard = React.memo(({ svgPath, title, index, className }: any) => {
  return (
    <div className={cn(
      "w-full max-w-[340px] aspect-[4/5] bg-zinc-50 border border-zinc-200 p-8 flex flex-col justify-between overflow-hidden shadow-2xl relative",
      className
    )}>
      <div className="relative z-10 w-full flex justify-end items-start mb-8">
        <span className="text-sm font-mono opacity-60 font-black tracking-widest text-black/40">
          0{index + 1}
        </span>
      </div>
      
      {/* Massive Centered SVG */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <svg viewBox="0 0 256 256" className="w-32 h-32 md:w-48 md:h-48 text-zinc-900 group-hover:scale-110 transition-transform duration-700" fill="none">
           <path d={svgPath} fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center pb-2">
        <h3 className="text-2xl lg:text-3xl font-display font-black uppercase tracking-tighter leading-[1.1] text-center bg-white/60 backdrop-blur-md px-4 py-2 rounded-xl">
          {title}
        </h3>
      </div>
      
      {/* Abstract Design Elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-zinc-200/50 rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
});

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray('.service-card-3d') as HTMLElement[];
      const texts = gsap.utils.toArray('.service-text') as HTMLElement[];

      // Initial settings
      gsap.set(cards, { 
        z: (i) => i === 0 ? 0 : -800,
        y: (i) => i === 0 ? 0 : 200,
        opacity: (i) => i === 0 ? 1 : 0,
        rotateX: (i) => i === 0 ? 0 : 45
      });

      gsap.set(texts, {
        opacity: (i) => i === 0 ? 1 : 0,
        y: (i) => i === 0 ? 0 : 80
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Loop through each transition step
      cards.forEach((card, i) => {
        if (i === 0) return; // Skip first

        const stepLabel = `step${i}`;

        // Previous item goes away
        tl.to(cards[i - 1], {
          z: 300,
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        }, stepLabel);

        tl.to(texts[i - 1], {
          y: -80,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        }, stepLabel);

        // New item comes in
        tl.to(card, {
          z: 0,
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power2.inOut"
        }, stepLabel);

        tl.to(texts[i], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        }, stepLabel);
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      id="services" 
      className="relative w-full bg-white h-auto md:h-screen text-black overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 md:py-0 h-full">
        
        <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-20 h-full">
          
          {/* LEFT SIDE: Text changing */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full relative" ref={leftRef}>
             <div className="mb-12 md:mb-20">
                <span className="text-[10px] font-mono text-zinc-400 tracking-[0.5em] uppercase mb-4 block">Expertise</span>
                <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display font-black uppercase tracking-tighter leading-none">
                  Core<br/>Services
                </h2>
             </div>
             
             <div className="relative h-[250px] w-full">
                {servicesList.map((s, i) => (
                  <div 
                    key={`text-${i}`} 
                    className="service-text md:absolute md:top-0 md:left-0 w-full flex flex-col mb-12 md:mb-0"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400">0{i+1} / 04</span>
                      <div className="h-px w-12 bg-zinc-200" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-4">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-lg text-zinc-500 max-w-md leading-relaxed font-medium">
                      {s.description}
                    </p>
                  </div>
                ))}
             </div>
          </div>

          {/* RIGHT SIDE: 3D Cards */}
          <div className="hidden md:flex w-1/2 relative items-center justify-end xl:justify-center" style={{ perspective: '2000px' }}>
            {servicesList.map((s, i) => (
              <div 
                key={`card-${i}`} 
                className="service-card-3d absolute transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <ServiceCard svgPath={s.svgPath} title={s.title} index={i} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
