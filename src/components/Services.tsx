import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { 
  Globe,
  Layout,
  Cpu,
  GraduationCap,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const ServiceCard = React.memo(({ icon: Icon, title, description, index, className }: any) => {
  return (
    <div className={cn(
      "service-card relative w-full md:w-[280px] h-[360px] bg-current/5 backdrop-blur-sm border border-current/10 p-8 flex flex-col justify-between group overflow-hidden transition-all duration-1000 ease-expo hover:border-current shadow-xl",
      className
    )}>
      {/* Decorative hover bg */}
      <div className="absolute inset-x-0 bottom-0 h-0 bg-current group-hover:h-full transition-all duration-700 -z-0" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:rotate-[360deg] transition-all duration-1000 rounded-xl">
            <Icon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[10px] font-mono opacity-30 font-black tracking-widest group-hover:text-white/20 transition-colors">
            0{index + 1}
          </span>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold uppercase tracking-tight group-hover:invert transition-all duration-500">
            {title}
          </h3>
          <p className="text-[12px] opacity-60 font-normal uppercase tracking-wide leading-relaxed group-hover:invert transition-all duration-500 line-clamp-4">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-auto">
         <div className="h-px flex-1 bg-zinc-100 group-hover:bg-zinc-800 transition-colors" />
         <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400 group-hover:text-white transition-colors">Start</span>
      </div>
    </div>
  );
});

export const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: innerRef.current,
          anticipatePin: 1,
        }
      });

      // 1. Massive Headline: Scale down and move to CENTER of Navbar
      tl.fromTo(headlineRef.current, {
         scale: 1.5,
         opacity: 1,
         y: 0
      }, {
        scale: 0.2,
        opacity: 1,
        y: "-46vh",
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // 2. Cards appearing sequentially
      const cards = cardsContainerRef.current?.querySelectorAll('.service-card-wrapper') || [];
      cards.forEach((card: any, i: number) => {
        tl.fromTo(card, {
          y: 800,
          opacity: 0,
          scale: 0.8,
          rotateX: -20
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 2,
          ease: "expo.out"
        }, 0.5 + i * 0.6);
      });
    });

    // Mobile logic: Just pinning the container for the vertical list effect if needed
    // Or just let it scroll normally. The user wanted to reduce gaps, so let's make it simpler.
    mm.add("(max-width: 767px)", () => {
       // On mobile, we don't pin everything for 400vh because it creates huge gaps.
       // We'll just let the motion.divs handle their entry as they scroll into view.
       gsap.set(headlineRef.current, { scale: 1, y: 0, opacity: 1 });
    });

  }, { scope: container });

  const servicesList = [
    {
      icon: Layout,
      title: "UI Design",
      description: "Bespoke, high-end visual identities and website layouts crafted for excellence."
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "High-conversion landing pages designed to turn visitors into loyal customers."
    },
    {
      icon: Cpu,
      title: "SaaS Build",
      description: "End-to-end development using modern frameworks for robust applications."
    },
    {
      icon: GraduationCap,
      title: "Innovation",
      description: "Expert guidance for student projects, ensuring technical depth and success."
    }
  ];

  return (
    <section id="services" ref={container} className="relative h-auto md:h-[400vh] overflow-visible">
      <div 
        ref={innerRef} 
        className="relative md:sticky md:top-0 h-auto md:h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 py-16 md:py-0"
      >
        {/* Cinematic Headline */}
        <h2 
          ref={headlineRef}
          className="relative md:absolute text-center text-4xl md:text-[20vw] font-display font-black uppercase tracking-tighter select-none leading-none z-0 pointer-events-none origin-center md:whitespace-nowrap opacity-100 mb-8 md:mb-0"
        >
          SERVICES
        </h2>

        {/* Desktop Content Layer (Cards Grid) */}
        <div 
          ref={cardsContainerRef}
          className="hidden md:flex relative z-40 flex-wrap gap-6 items-center justify-center w-full px-6 md:px-20 mt-32 perspective-1000"
        >
          {servicesList.map((s, i) => (
            <div 
              key={i} 
              className="service-card-wrapper transition-all shrink-0"
            >
              <ServiceCard 
                icon={s.icon} 
                title={s.title} 
                description={s.description} 
                index={i} 
              />
            </div>
          ))}
        </div>

        {/* Mobile Content Layer (Editorial List) */}
        <div className="flex md:hidden relative z-10 w-full flex-col gap-4 overflow-hidden mt-6">
          {servicesList.map((s, i) => (
             <motion.div 
               key={i}
               className="service-card-wrapper-mobile w-full group"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
                <div className="flex flex-col py-4 border-t border-zinc-100 last:border-b px-2">
                  <span className="text-[8px] font-mono text-zinc-300 mb-2">0{i+1}</span>
                  <h3 className="text-2xl font-display font-black uppercase tracking-tighter leading-none mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Product", "Creative"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zinc-50 text-[8px] font-mono uppercase tracking-widest text-zinc-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
             </motion.div>
          ))}
        </div>

        <div className="hidden md:flex absolute bottom-8 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-zinc-100" />
          <span className="text-[8px] uppercase font-black tracking-[0.5em] text-zinc-300">
             Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};
