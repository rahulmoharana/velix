import React, { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Portfolio } from '../components/Portfolio';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    <div ref={containerRef} className="min-h-screen bg-[#080805] text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        {/* SEO Focused Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
          <div className="overflow-hidden mb-8">
            <h1 className="work-title text-[15vw] md:text-[10vw] font-display font-black uppercase tracking-tighter leading-none flex gap-4">
              <span>Selected</span>
              <span className="text-zinc-800">Works.</span>
            </h1>
          </div>
          
          <div className="max-w-3xl text-center">
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-6">
              A curated showcase of our digital craftsmanship. From high-conversion SaaS platforms to immersive brand experiences, we build for impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <span className="px-4 py-2 border border-white/10 rounded-full">Web Development</span>
              <span className="px-4 py-2 border border-white/10 rounded-full">UI/UX Design</span>
              <span className="px-4 py-2 border border-white/10 rounded-full">E-Commerce</span>
              <span className="px-4 py-2 border border-white/10 rounded-full">SaaS Solutions</span>
            </div>
          </div>
        </section>

        {/* Reuse the interactive Portfolio component for the main list */}
        <div className="pb-32">
          <Portfolio />
        </div>

        {/* SEO / Trust Section */}
        <section className="py-32 px-6 md:px-12 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center text-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
                Building the digital <br />
                <span className="text-zinc-500 italic">standard of Odisha.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
                As a Bhubaneswar-based startup, Velix Tech bridges the gap between local enterprise and global digital trends. Our work is optimized for core web vitals, accessibility, and high conversion, ensuring your business stays ahead in India's booming digital economy.
              </p>
              <div className="stats-container grid grid-cols-2 gap-8">
                <div className="stat-item">
                  <span className="block text-4xl font-bold font-display">99+</span>
                  <span className="text-zinc-500 uppercase text-xs tracking-widest">Performance Score</span>
                </div>
                <div className="stat-item">
                  <span className="block text-4xl font-bold font-display">100%</span>
                  <span className="text-zinc-500 uppercase text-xs tracking-widest">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-zinc-900 overflow-hidden rounded-2xl group">
               {/* Decorative SEO Image / Graphic */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-[20vw] font-black text-white/5 select-none uppercase tracking-tighter rotate-12">
                     VELIX
                  </div>
                  <div className="absolute bottom-12 left-12 right-12">
                     <p className="text-sm font-mono text-zinc-500 uppercase">Our Promise:</p>
                     <p className="text-xl font-bold">Scalable architecture for modern business growth.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-40 px-6 text-center bg-white text-black">
           <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">
              Ready to <br />elevate yours?
           </h2>
           <button className="btn-velix btn-velix-lg">
              <span>Start Project</span>
           </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
