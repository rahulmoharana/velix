import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap, 
  Layers, 
  Code, 
  ArrowUpRight,
  Globe,
  Layout,
  Cpu,
  GraduationCap,
  Hammer
} from 'lucide-react';
import { cn } from '../lib/utils';

const ServiceCard = ({ icon: Icon, title, description, index, className }: any) => {
  return (
    <div className={cn(
      "service-card relative w-full max-w-[400px] aspect-square bg-[#0a0a0a] flex flex-col items-center justify-center p-12 text-center group",
      className
    )}>
      {/* Viewfinder Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40" />

      <div className="mb-8 text-white/80 group-hover:text-white transition-colors duration-500">
        <Icon className="w-16 h-16 stroke-[1.5]" />
      </div>
      
      <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-4 scale-x-110 origin-center">
        {title}
      </h3>
      
      <p className="text-sm text-zinc-500 font-mono uppercase tracking-wider leading-relaxed max-w-[280px]">
        {description}
      </p>

      <div className="absolute bottom-6 right-6 text-[10px] font-mono opacity-20">
        0{index + 1}
      </div>
    </div>
  );
};

export const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray('.service-card-wrapper');
      
      // Pin the entire inner section on desktop
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: inner.current,
        pinSpacing: false,
      });

      cards.forEach((card: any, i: number) => {
        gsap.fromTo(card, 
          { 
            y: '100vh',
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: container.current,
              start: () => `top+=${(i * window.innerHeight * 0.6)} top`,
              end: () => `top+=${((i + 0.5) * window.innerHeight * 0.6)} top`,
              scrub: true,
            }
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Simple fade up for mobile
      gsap.from('.service-card-wrapper', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1
        }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const servicesList = [
    {
      icon: Layout,
      title: "Website Design",
      description: "Bespoke, high-end visual identities and website layouts crafted for excellence."
    },
    {
      icon: Globe,
      title: "Landing Page",
      description: "High-conversion landing pages designed to turn visitors into loyal customers."
    },
    {
      icon: Cpu,
      title: "Full Stack",
      description: "End-to-end development using modern frameworks for robust applications."
    },
    {
      icon: GraduationCap,
      title: "Academic Support",
      description: "Expert guidance for student projects, ensuring technical depth and success."
    }
  ];

  return (
    <section id="services" ref={container} className="relative md:h-[400vh] bg-black">
      <div ref={inner} className="md:h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 py-24 md:py-0">
        <div className="text-center z-20 mb-12 md:mb-16 shrink-0">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-50 mb-4">What We Offer</h2>
          <h3 className="heading-xl origin-center scale-x-105">SERVICES</h3>
        </div>
        
        <div className="grid grid-cols-1 md:flex md:flex-nowrap gap-8 items-center justify-center w-full max-w-7xl">
          {servicesList.map((s, i) => (
            <div 
              key={i} 
              className="service-card-wrapper w-full md:w-1/4 flex justify-center"
            >
              <ServiceCard 
                icon={s.icon} 
                title={s.title} 
                description={s.description} 
                index={i} 
                className="!max-w-none aspect-square md:aspect-[3/4] h-auto md:max-h-[60vh] py-12 md:py-16"
              />
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-4 opacity-20">
          <span className="text-[10px] font-mono uppercase tracking-widest">Workflow Sequence</span>
          <div className="w-48 h-[1px] bg-white" />
          <span className="text-[10px] font-mono">01 — 04</span>
        </div>
      </div>
    </section>
  );
};
