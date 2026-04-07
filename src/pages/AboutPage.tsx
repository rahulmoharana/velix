import React, { useRef } from 'react';
import { About } from '../components/About';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal Expertise cards
    const cards = gsap.utils.toArray('.expertise-card');
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Animate Values section grid
    gsap.from('.value-item', {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.values-grid',
        start: "top 80%",
      }
    });

    // Parallax effect on main title
    gsap.to('.hero-title', {
      y: -100,
      scrollTrigger: {
        trigger: '.hero-title',
        start: "top 20%",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black text-white selection:bg-white selection:text-black">
      <SEO 
        title="About VELIX | Our Mission and Expertise in Digital Innovation"
        description="Learn about VELIX, the leading digital agency in Bhubaneswar. Discover our mission, core values, and our expertise in strategic design and future-proof technology."
        url="https://velix.tech/about-us"
      />
      <div className="pt-24 lg:pt-32">
        <div className="px-6 md:px-12 mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="hero-title"
          >
            <h1 className="text-[12vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-[0.85]">
              Velix<br />Tech.
            </h1>
            <p className="mt-8 text-zinc-400 font-mono uppercase tracking-widest text-xs">
              Based in Bhubaneswar / Innovating for India
            </p>
          </motion.div>
        </div>

        <About />
        
        {/* Expertise Section */}
        <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-16">Expertise</h2>
            <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
              <div className="border-t border-white/10 pt-8 expertise-card">
                <span className="text-xs font-mono uppercase tracking-widest mb-4 block opacity-50">01</span>
                <h3 className="text-2xl font-bold uppercase mb-4">Strategic Design</h3>
                <p className="text-zinc-400 font-light leading-relaxed">We don't just make things look pretty. We design with purpose, ensuring every pixel serves a business goal and enhances user trust.</p>
              </div>
              <div className="border-t border-white/10 pt-8 expertise-card">
                <span className="text-xs font-mono uppercase tracking-widest mb-4 block opacity-50">02</span>
                <h3 className="text-2xl font-bold uppercase mb-4">Future-Proof Tech</h3>
                <p className="text-zinc-400 font-light leading-relaxed">Using React, Next.js, and modern cloud architectures, we build scalable applications that grow alongside your business.</p>
              </div>
              <div className="border-t border-white/10 pt-8 expertise-card">
                <span className="text-xs font-mono uppercase tracking-widest mb-4 block opacity-50">03</span>
                <h3 className="text-2xl font-bold uppercase mb-4">Performance First</h3>
                <p className="text-zinc-400 font-light leading-relaxed">Speed is a feature. We optimize every build for core web vitals, ensuring lightning-fast load times across all devices.</p>
              </div>
              <div className="border-t border-white/10 pt-8 expertise-card">
                <span className="text-xs font-mono uppercase tracking-widest mb-4 block opacity-50">04</span>
                <h3 className="text-2xl font-bold uppercase mb-4">Local Context</h3>
                <p className="text-zinc-400 font-light leading-relaxed">Deeply rooted in the Bhubaneswar startup ecosystem, we understand the specific challenges and opportunities within the Indian market.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 md:px-12 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-zinc-400 font-mono uppercase tracking-widest text-xs mb-12">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-12 values-grid">
            <div className="value-item">
              <h4 className="text-zinc-400 font-mono uppercase tracking-widest text-xs mb-4">Values</h4>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Technical Precision</h3>
              <p className="text-zinc-400 mt-4 font-light">We don't just build, we engineer. Every line of code is written with performance and scalability in mind.</p>
            </div>
            <div className="value-item">
              <h4 className="text-zinc-400 font-mono uppercase tracking-widest text-xs mb-4">Values</h4>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Design Clarity</h3>
              <p className="text-zinc-400 mt-4 font-light">Minimalism with impact. We believe in clear communication and avant-garde aesthetics.</p>
            </div>
            <div className="value-item">
              <h4 className="text-zinc-400 font-mono uppercase tracking-widest text-xs mb-4">Values</h4>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Local Impact</h3>
              <p className="text-zinc-400 mt-4 font-light">Based in Bhubaneswar, we are committed to elevating the digital landscape of Odisha and India.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
};

export default AboutPage;

