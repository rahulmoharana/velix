import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Contact = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal Heading
    gsap.from('.contact-heading', {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.contact-heading',
        start: "top 90%",
      }
    });

    // Reveal Text
    gsap.from('.contact-text', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.contact-text',
        start: "top 90%",
      }
    });

    // Reveal Email
    gsap.from('.mail-link', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: '.mail-link',
        start: "top 95%",
      }
    });

    // Reveal Button
    gsap.from('.whatsapp-btn', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: '.whatsapp-btn',
        start: "top 95%",
      }
    });

  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-12 md:py-24 px-4 md:px-12 relative bg-white overflow-visible">
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h2 className="contact-heading text-3xl md:text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter text-black mb-4 leading-none">
          LET'S BUILD
        </h2>
        
        <p className="contact-text text-base md:text-xl text-zinc-500 font-light mb-12 leading-relaxed max-w-xl mx-auto">
          Ready to elevate your digital presence? Join forces with <span className="text-black font-medium uppercase tracking-tighter">VELIX</span> and define the future of your industry.
        </p>
        
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <a 
            href="mailto:velixtechsolutions@gmail.com" 
            className="mail-link block text-black text-lg md:text-4xl font-display font-bold uppercase tracking-tighter border-b-2 border-black pb-2 hover:opacity-100 transition-all duration-500 whitespace-normal break-words"
          >
            velixtechsolutions@gmail.com
          </a>
          
          <div className="whatsapp-btn mt-4">
            <a 
              href="https://wa.me/918249040033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center gap-6 bg-black text-white px-10 py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-900 transition-all shadow-2xl shadow-black/10 overflow-hidden"
            >
              <span className="relative z-10">Chat on WhatsApp</span>
              <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100" />
    </section>
  );
};
