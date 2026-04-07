import React, { useRef } from 'react';
import { Contact } from '../components/Contact';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal contact details with stagger
    gsap.from('.contact-info-item', {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.contact-info-grid',
        start: "top 80%",
      }
    });

    // Reveal form with scale effect
    gsap.from('.contact-form-container', {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: '.contact-form-container',
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black text-white selection:bg-white selection:text-black">
      <SEO 
        title="Get in Touch | Start Your Digital Transformation with VELIX"
        description="Ready to build something remarkable? Contact VELIX for premium web design, software development, and digital strategy in Bhubaneswar, Odisha."
        url="https://velix.tech/contact"
      />
      <div className="pt-32 pb-20">
        <section className="px-6 md:px-12 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-none mb-8"
          >
            Let's Talk.
          </motion.h1>
          <p className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed">
            Have a challenge for us? Whether you're a startup in Odisha or a global brand, we're ready to build something remarkable together.
          </p>
        </section>

        <section className="px-6 md:px-12 grid lg:grid-cols-2 gap-20">
          <div className="contact-info-grid space-y-12">
            <div className="contact-info-item pr-12 border-b border-white/10 pb-12">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Location</h3>
              <p className="text-2xl font-bold uppercase tracking-tight italic">Bhubaneswar, India</p>
              <p className="text-zinc-500 mt-2 font-light">Available for hybrid & remote collaboration worldwide.</p>
            </div>
            
            <div className="contact-info-item pr-12 border-b border-white/10 pb-12">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Connect</h3>
              <a href="mailto:velixtechsolutions@gmail.com" className="text-2xl font-bold uppercase tracking-tight hover:italic transition-all">velixtechsolutions@gmail.com</a>
              <p className="text-zinc-500 mt-2 font-light">WhatsApp: <span className="text-white">+91 824 904 0033</span></p>
            </div>

            <div className="contact-info-item">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Social</h3>
              <div className="flex gap-8 text-lg font-bold uppercase italic">
                <a href="#" className="hover:text-white/50 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white/50 transition-colors">Twitter</a>
                <a href="#" className="hover:text-white/50 transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5">
             <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;

