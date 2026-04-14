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
        url="https://www.velixinfo.tech/about-us"
      />
      <div className="pt-24 md:pt-32">
        <div className="px-6 md:px-12 mb-12 flex justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="hero-title"
          >
            <h1 className="text-[18vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-[0.85]">
              Velix<br />Tech.
            </h1>
            <p className="mt-8 text-zinc-500 font-mono uppercase tracking-widest text-[10px]">
              Based in Bhubaneswar / Innovating for India
            </p>
          </motion.div>
        </div>

        <About />
        
        {/* Expertise Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter mb-12 md:mb-16">Expertise</h2>
            <div className="grid md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-12">
              {[
                { title: "Strategic Design", desc: "We design with purpose, ensuring every pixel serves a business goal." },
                { title: "Future-Proof Tech", desc: "Using React and modern cloud architectures, we build scalable platforms." },
                { title: "Performance First", desc: "Speed is a feature. We optimize every build for core web vitals." },
                { title: "Local Context", desc: "Rooted in Bhubaneswar, we understand the specific Indian market challenges." }
              ].map((item, idx) => (
                <div key={idx} className="border-t border-white/10 pt-8 expertise-card">
                  <span className="text-[10px] font-mono uppercase tracking-widest mb-4 block opacity-50">0{idx + 1}</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-zinc-900/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-zinc-500 font-mono uppercase tracking-widest text-[10px] mb-12">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-10 md:gap-12 values-grid">
               {[
                 { title: "Precision", desc: "Every line of code is written with performance and scalability in mind." },
                 { title: "Clarity", desc: "Minimalism with impact. We believe in clear communication." },
                 { title: "Impact", desc: "Committed to elevating the digital landscape of Odisha." }
               ].map((item, idx) => (
                <div key={idx} className="value-item">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light text-sm md:text-base">{item.desc}</p>
                </div>
               ))}
            </div>
          </div>
        </section>
    </div>
  </div>
);
};

export default AboutPage;

