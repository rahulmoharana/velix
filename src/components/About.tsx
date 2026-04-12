import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const paragraphs = gsap.utils.toArray('.about-para');
    
    paragraphs.forEach((para: any) => {
      gsap.fromTo(para, 
        { 
          opacity: 0, 
          y: 40,
          clipPath: 'inset(100% 0% 0% 0%)' 
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: para,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate the highlight background
    gsap.fromTo('.about-highlight',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: '.about-highlight',
          start: "top 90%",
          end: "top 70%",
          scrub: 1
        }
      }
    );
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-40 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-16">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-400 about-para">The Agency</h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium uppercase tracking-tighter leading-none about-para text-black">
              VELIX TECH
            </h3>
            <div className="w-24 h-px bg-black opacity-20 about-para" />
          </div>

          <div className="flex flex-col gap-12 max-w-3xl">
            <p className="about-para text-2xl md:text-3xl text-black font-light leading-snug">
              A premier <span className="text-zinc-400 font-medium">software developer agency</span> in Bhubaneswar, specialized in building modern digital solutions for the global market.
            </p>
            <p className="about-para text-lg text-zinc-500 font-light leading-relaxed">
              We create high-performance websites and scalable applications designed for growth. Our approach combines design clarity, technical precision, and strategic development to help brands reach wider audiences and achieve measurable value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
