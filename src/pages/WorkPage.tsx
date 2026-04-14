import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Portfolio } from '../components/Portfolio';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';

const WorkPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the big heading
    gsap.from('.work-title span', {
      y: 200,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power4.out",
    });

    // Horizontal scroll for stats or features if needed
    gsap.from('.stat-item', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.stats-container',
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#080805] text-white selection:bg-white selection:text-black">
      <SEO 
        title="Portfolio | Featured Digital Experiences and Software Projects by VELIX"
        description="A showcase of our digital craftsmanship. Explore high-performance SaaS platforms, immersive brand experiences, and custom web development by VELIX."
        url="https://www.velixinfo.tech/work"
      />
      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        {/* SEO Focused Hero Section */}
        <section className="px-4 md:px-12 flex flex-col items-center">
          <div className="overflow-hidden mb-6 md:mb-10">
            <h1 className="work-title text-[18vw] md:text-[10vw] font-display font-black uppercase tracking-tighter leading-none flex flex-wrap justify-center gap-x-4">
              <span>Selected</span>
              <span className="text-zinc-500">Works.</span>
            </h1>
          </div>
          
          <div className="max-w-2xl mx-auto text-center px-4">
            <p className="text-base md:text-2xl text-zinc-400 font-light leading-relaxed mb-8 md:mb-12">
              A curated showcase of our digital craftsmanship. From high-conversion SaaS platforms to immersive brand experiences, we build for impact.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-500">
              <span className="px-4 py-2 border border-white/10 rounded-full">Web Design</span>
              <span className="px-4 py-2 border border-white/10 rounded-full">Development</span>
              <span className="px-4 py-2 border border-white/10 rounded-full">E-Commerce</span>
              <span className="px-4 py-2 border border-white/10 rounded-full">SaaS</span>
            </div>
          </div>
        </section>

        {/* Portfolio component */}
        <div className="pb-12 md:pb-32 mt-12 md:mt-20">
          <Portfolio />
        </div>

        {/* SEO / Trust Section */}
        <section className="py-20 md:py-32 px-4 md:px-12 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center text-left">
            <div>
              <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 md:mb-8">
                Building the digital <br />
                <span className="text-zinc-500 italic">standard of Odisha.</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-8 md:mb-12 font-light leading-relaxed">
                As a Bhubaneswar-based startup, Velix Tech bridges the gap between local enterprise and global digital trends.
              </p>
              <div className="stats-container grid grid-cols-2 gap-6 md:gap-8">
                <div className="stat-item">
                  <span className="block text-3xl md:text-4xl font-bold font-display uppercase tracking-tight">99+</span>
                  <span className="text-zinc-500 uppercase text-[8px] md:text-xs tracking-widest">Performance</span>
                </div>
                <div className="stat-item">
                  <span className="block text-3xl md:text-4xl font-bold font-display uppercase tracking-tight">100%</span>
                  <span className="text-zinc-500 uppercase text-[8px] md:text-xs tracking-widest">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 md:py-40 px-6 text-center bg-[#0a0a0a] text-white">
           <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 md:mb-16">
              Ready to <br /><span className="text-zinc-500">elevate yours?</span>
           </h2>
           <Link to="/contact">
             <button className="btn-velix mx-auto btn-velix-lg px-12 md:px-20 scale-90 md:scale-100">
                <span>Start Project</span>
             </button>
           </Link>
        </section>
      </div>
    </div>
  );
};

export default WorkPage;

