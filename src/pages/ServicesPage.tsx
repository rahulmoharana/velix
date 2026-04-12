import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';

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
    <div ref={containerRef} className="bg-black text-white selection:bg-white selection:text-black">
      <SEO 
        title="Premium Web Design & Development Services in Bhubaneswar | VELIX"
        description="Explore our range of digital services including strategic web design, full-stack development, and startup acceleration. VELIX is your partner for technical precision and design clarity."
        url="https://velix.tech/services"
      />
      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        <section className="px-4 md:px-12 mb-12 md:mb-20 relative overflow-hidden h-auto md:h-[60vh] flex items-center min-h-[300px]">
          <div className="max-w-4xl z-10 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12vw] md:text-[7vw] font-display font-black uppercase tracking-tighter leading-none mb-6 md:mb-8"
            >
              The Premier <br />
              Digital <span className="text-zinc-500 italic">Agency.</span>
            </motion.h1>
            <p className="max-w-2xl text-base md:text-xl text-zinc-400 font-light leading-relaxed">
              VELIX is the leading digital agency in Bhubaneswar. We provide end-to-end software development designed to help businesses scale.
            </p>
          </div>
        </section>

        {/* Existing Grid Section */}
        <div className="pb-20 md:pb-32 px-4 md:px-12">
          <Services />
        </div>

        {/* Deep Dive Section */}
        <section className="py-20 md:py-40 px-4 md:px-12 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-32">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="service-long-item grid lg:grid-cols-2 gap-10 md:gap-20 items-start border-b border-white/10 pb-20 md:pb-32">
                <div>
                   <span className="text-[10px] font-mono uppercase tracking-widest mb-4 block opacity-50">Expertise / 0{idx + 1}</span>
                   <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6 md:mb-8">{cat.title}</h2>
                   <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed">{cat.desc}</p>
                </div>
                <div className="features-container space-y-6 md:space-y-8 lg:pt-12">
                   <p className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-zinc-500">Key Focus Areas</p>
                   <div className="flex flex-wrap gap-3 md:gap-4">
                      {cat.features.map((f, i) => (
                         <div key={i} className="feature-pill border border-white/10 px-5 py-2 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-widest italic group hover:bg-white hover:text-black transition-all cursor-default">
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
        <section className="py-24 md:py-40 text-center px-6">
           <h2 className="text-[14vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-none mb-10 md:mb-16">
              Ready to <br /><span className="text-zinc-500">Upgrade?</span>
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

export default ServicesPage;

