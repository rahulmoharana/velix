import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
    });

    // Mobile specific: Animate ONLY the description paragraphs, not the title
    mm.add("(max-width: 767px)", () => {
      // Find elements with about-para that are NOT h2 or h3
      const descParagraphs = gsap.utils.toArray('.about-para').filter((el: any) => 
        el.tagName !== 'H2' && el.tagName !== 'H3' && !el.classList.contains('w-24')
      );

      descParagraphs.forEach((para: any) => {
        gsap.fromTo(para, 
          { 
            opacity: 0, 
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: para,
              start: "top 95%",
            }
          }
        );
      });
    });

    // Animate the highlight background (keep on both or desktop only? I'll keep it as is but scoped to mm if needed)
    mm.add("(min-width: 768px)", () => {
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
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="pt-8 pb-16 md:pt-20 md:pb-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-16">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-400 about-para">The Agency</h2>
            <h3 className="text-4xl md:text-7xl font-display font-medium uppercase tracking-tighter leading-none about-para">
              VELIX TECH
            </h3>
            <div className="w-24 h-px bg-current opacity-20 about-para" />
          </div>

          <div className="flex flex-col gap-12 max-w-3xl">
            <p className="about-para text-2xl md:text-3xl font-light leading-snug">
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
