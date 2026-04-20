import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Animate images
      gsap.fromTo('.about-image',
        {
          y: 60,
          opacity: 0,
          clipPath: 'inset(10% 0 0 0)'
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            end: "top 30%",
            scrub: false,
          }
        }
      );

      // Animate texts
      gsap.fromTo('.about-text',
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%"
          }
        }
      );
    });

    // Mobile specific animations
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(['.about-text', '.about-image'],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50/50 -z-10 translate-x-1/2 rounded-full blur-[120px]" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Visual Impact */}
        <div className="lg:col-span-5 relative">
          <div className="about-image sticky top-32">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="VELIX HQ"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] mb-2">Our Space / Bhubaneswar</span>
                <p className="text-sm font-medium tracking-wide">Cultivating innovation in the heart of Odisha.</p>
              </div>
            </div>
            
            {/* Floating Stats Block */}
            <div className="about-text absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[2.5rem] shadow-2xl hidden xl:block min-w-[280px]">
              <div className="flex flex-col gap-8">
                <div>
                   <span className="block text-3xl font-display font-bold leading-none mb-2 text-emerald-400 uppercase">Cloud</span>
                   <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Native Solutions</span>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div>
                   <span className="block text-3xl font-display font-bold leading-none mb-2 uppercase">Agile</span>
                   <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Rapid Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content Strategy */}
        <div className="lg:col-span-7 flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="about-text text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 mb-4 block">01 / Our Story</span>
              <h2 className="about-text text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-zinc-900">
                Pioneering <br /> Digital <br /> <span className="text-zinc-300">Excellence</span>
              </h2>
            </div>
            
            <div className="about-text prose prose-zinc prose-lg max-w-none text-zinc-600 space-y-6">
              <p className="font-medium leading-relaxed">
                Founded in the heart of Bhubaneswar, VELIX was born from a simple yet powerful observation: most businesses were struggling with technology that was either too complex to use or too rigid to scale.
              </p>
              <p className="opacity-70 leading-relaxed text-sm">
                As a modern digital powerhouse, we dedicate ourselves to bridging the gap between sophisticated software engineering and real-world business needs. Our mission is to empower the next generation of Indian enterprises with digital tools that don't just look premium but actually deliver measurable commercial impact through MERN stack, Cloud Native architectures, and mobile-first experiences.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="about-text p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <span className="block text-2xl font-display font-bold mb-3 uppercase tracking-tight group-hover:translate-x-2 transition-transform">Transparency</span>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">Radical honesty in communication and project management, ensuring you are always version-controlled and informed.</p>
            </div>
            <div className="about-text p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <span className="block text-2xl font-display font-bold mb-3 uppercase tracking-tight group-hover:translate-x-2 transition-transform">Innovation</span>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">Leveraging the latest MERN, Cloud-Native, and AI tech stacks to keep your business at the production edge.</p>
            </div>
            <div className="about-text p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <span className="block text-2xl font-display font-bold mb-3 uppercase tracking-tight group-hover:translate-x-2 transition-transform">Reliability</span>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">We ship robust, scalable code and provide long-term continuity for your digital infrastructure.</p>
            </div>
            <div className="about-text p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <span className="block text-2xl font-display font-bold mb-3 uppercase tracking-tight group-hover:translate-x-2 transition-transform">Growth</span>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">Your expansion is our success index. We build software that grows with you, not against you.</p>
            </div>
          </div>

          {/* Final Philosophy Snippet */}
          <div className="about-text mt-8 p-10 rounded-[2.5rem] bg-black text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-white/10 transition-colors" />
             <div className="flex-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 block mb-2">Our Promise</span>
                <p className="text-xl font-display font-bold leading-tight">
                  "We build software that turns ambitious visions into production realities."
                </p>
             </div>
             <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
