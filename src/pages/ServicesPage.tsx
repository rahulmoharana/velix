import React, { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Zoom effect on hero image or decorative element
    gsap.from('.services-hero-image', {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });

    // Reveal long-form service descriptions
    const serviceItems = gsap.utils.toArray('.service-long-item');
    serviceItems.forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Horizontal scroll for features
    gsap.from('.feature-pill', {
      opacity: 0,
      x: -40,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.features-container',
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  const serviceCategories = [
    {
      title: "Strategic Web Design",
      desc: "Creating high-performing, accessible, and inclusive digital experiences that convert.",
      features: ["Component-Driven UI", "Conversion Optimization", "Brand Consistency", "Interactive Prototyping"]
    },
    {
      title: "Full-Stack Development",
      desc: "Building scalable, cloud-first web applications using cutting-edge frameworks like React and Next.js.",
      features: ["API Integration", "Serverless Architecture", "Database Modeling", "CI/CD Pipelines"]
    },
    {
      title: "Startup Acceleration",
      desc: "Helping early-stage ventures in India and beyond transition from idea to MVP with speed and precision.",
      features: ["MVP Strategy", "Technical Consulting", "Rapid Prototyping", "Digital Branding"]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="px-6 md:px-12 mb-20 relative overflow-hidden h-[40vh] md:h-[60vh] flex items-center">
          <div className="max-w-4xl z-10 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10vw] md:text-[7vw] font-display font-black uppercase tracking-tighter leading-none mb-8"
            >
              Crafting Digital <br />
              <span className="text-zinc-500 italic">Excellence.</span>
            </motion.h1>
            <p className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed">
              We provide end-to-end digital solutions designed to help businesses scale. Our process is rooted in technical precision and design clarity.
            </p>
          </div>
          {/* Decorative background element */}
          <div className="services-hero-image absolute top-0 -right-20 w-[60vw] h-[60vw] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
        </section>

        {/* Existing Grid Section */}
        <div className="pb-32 px-6 md:px-12">
          <Services />
        </div>

        {/* Deep Dive Section */}
        <section className="py-40 px-6 md:px-12 bg-white text-black">
          <div className="max-w-7xl mx-auto flex flex-col gap-32">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="service-long-item grid lg:grid-cols-2 gap-20 items-start border-b border-black/10 pb-32">
                <div>
                   <span className="text-xs font-mono uppercase tracking-widest mb-4 block opacity-50">Expertise / 0{idx + 1}</span>
                   <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8">{cat.title}</h2>
                   <p className="text-xl md:text-2xl font-light leading-relaxed">{cat.desc}</p>
                </div>
                <div className="features-container space-y-8 lg:pt-12">
                   <p className="text-xs font-mono uppercase tracking-[0.3em] font-bold">Key Focus Areas</p>
                   <div className="flex flex-wrap gap-4">
                      {cat.features.map((f, i) => (
                         <div key={i} className="feature-pill border border-black/20 px-6 py-2 rounded-full text-sm font-medium uppercase tracking-widest italic group hover:bg-black hover:text-white transition-all cursor-default">
                            {f}
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 text-center px-6">
           <h2 className="text-[12vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-none mb-12">
              Ready to <br /><span className="text-zinc-600">Upgrade?</span>
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

export default ServicesPage;
