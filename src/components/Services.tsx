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

const ServiceCard = ({ icon: Icon, title, description, index, className }: any) => {
  return (
    <div className={cn(
      "service-card relative w-full md:w-[280px] h-[360px] bg-white border border-zinc-100 p-8 flex flex-col justify-between group overflow-hidden transition-all duration-1000 ease-expo hover:border-black shadow-xl",
      className
    )}>
      {/* Decorative hover bg */}
      <div className="absolute inset-x-0 bottom-0 h-0 bg-neutral-900 group-hover:h-full transition-all duration-700 -z-0" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-1000 rounded-xl">
            <Icon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[10px] font-mono text-zinc-300 font-black tracking-widest group-hover:text-white/20 transition-colors">
            0{index + 1}
          </span>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold uppercase tracking-tight text-black group-hover:text-white transition-colors duration-500">
            {title}
          </h3>
          <p className="text-[12px] text-zinc-500 font-normal uppercase tracking-wide leading-relaxed group-hover:text-zinc-400 transition-colors duration-500 line-clamp-4">
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
};

export const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
      scale: 0.04,
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
    <section id="services" ref={container} className="relative h-[400vh] bg-white overflow-visible">
      <div 
        ref={innerRef} 
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden px-4 md:px-12"
      >
        {/* Cinematic Headline */}
        <h2 
          ref={headlineRef}
          className="absolute text-center text-[25vw] md:text-[20vw] font-display font-black uppercase tracking-tighter text-black select-none leading-none z-0 pointer-events-none origin-center whitespace-nowrap opacity-100"
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
        <div className="flex md:hidden relative z-10 w-full flex-col gap-4 overflow-hidden mt-12">
          {servicesList.map((s, i) => (
             <motion.div 
               key={i}
               className="service-card-wrapper-mobile w-full group"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
                <div className="flex flex-col py-6 border-t border-zinc-100 last:border-b px-2">
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

        <div className="absolute bottom-8 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-zinc-100" />
          <span className="text-[8px] uppercase font-black tracking-[0.5em] text-zinc-300">
             Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};
