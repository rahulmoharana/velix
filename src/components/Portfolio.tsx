import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

// Import local assets
import quickAiImg from '../assets/1-QuickAi.png';
import splytImg from '../assets/2-Splyt.png';
import sundownImg from '../assets/3-Sundown.png';
import twogoodImg from '../assets/4-twofoodco.png';

export const Portfolio = () => {
  const container = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { name: "quick AI", link: "https://ai-saas-nine-rosy.vercel.app/", image: quickAiImg },
    { name: "SPLYT", link: "https://spylt-clone-tawny.vercel.app/", image: splytImg },
    { name: "SunDown", link: "https://rahulmoharana.github.io/sundown-clone/", image: sundownImg },
    { name: "Twogood", link: "https://rahulmoharana.github.io/two-good-co-clone/", image: twogoodImg }
  ];

  useGSAP(() => {
    // Pin the entire inner section
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: inner.current,
      pinSpacing: false,
    });

    // Update active index based on scroll
    projects.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: container.current,
        start: () => `top+=${(i * window.innerHeight * 0.5)} top`,
        end: () => `top+=${((i + 1) * window.innerHeight * 0.5)} top`,
        onToggle: self => self.isActive && setActiveIndex(i),
      });
    });

    // Animate the image container
    gsap.fromTo('.project-preview', 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 2
        }
      }
    );
  }, { scope: container });

  return (
    <section id="work" ref={container} className="relative h-[400vh] bg-[#080805]">
      <div ref={inner} className="h-screen flex items-center justify-between px-6 md:px-24 overflow-hidden">
        
        {/* Left: Progress Indicator */}
        <div className="hidden lg:flex flex-col gap-2 opacity-20">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-8 h-[1px] bg-white transition-all duration-500",
                activeIndex === i ? "w-16 opacity-100" : "opacity-30"
              )} 
            />
          ))}
        </div>

        {/* Center: Project Titles */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-4">
            {projects.map((p, i) => (
              <a 
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter transition-all duration-700 cursor-pointer text-center max-w-4xl",
                  activeIndex === i ? "text-white scale-105" : "text-white/10 scale-95 blur-[2px]"
                )}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Project Preview */}
        <a 
          href={projects[activeIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex flex-col items-start gap-4 w-[350px]"
        >
          <div className="project-preview relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-900 border border-white/5">
            {projects.map((p, i) => (
              <img 
                key={i}
                src={p.image} 
                alt={p.name} 
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out",
                  activeIndex === i ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-110 rotate-3"
                )}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
            <span className="text-lg">↳</span>
            <span className="group-hover:translate-x-1 transition-transform">Visit Site</span>
          </div>
        </a>

      </div>
    </section>
  );
};
