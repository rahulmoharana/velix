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
          scrollTrigger: {
            trigger: para,
            start: "top 85%",
            end: "top 20%",
            scrub: 1
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
    <section id="about" ref={container} className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 about-para">About Us</h2>
            <div className="relative inline-block w-fit">
              <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none about-para">
                Velix Tech
              </h3>
              <div className="about-highlight absolute -bottom-2 left-0 w-full h-[2px] bg-white origin-left" />
            </div>
          </div>

          <div ref={textRef} className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="flex flex-col gap-8">
              <p className="about-para text-xl md:text-2xl text-white font-light leading-relaxed">
                Velix Tech is a Bhubaneswar-based IT startup focused on building modern digital solutions that help businesses establish a strong online presence, improve credibility, and grow in competitive markets.
              </p>
              <p className="about-para text-lg text-zinc-400 font-light leading-relaxed">
                From strategic website design to full-stack development, we create digital products that combine performance, usability, and business impact. We work with startups, local businesses, and growing brands to deliver websites, landing pages, and scalable web applications designed for real-world results.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <p className="about-para text-lg text-zinc-400 font-light leading-relaxed">
                Every project is built with attention to speed, responsive design, clean architecture, and long-term usability so businesses can compete effectively in today’s digital environment. With a strong focus on practical execution, we believe a website should do more than look good — it should communicate trust, support growth, and generate measurable value.
              </p>
              <p className="about-para text-lg text-zinc-400 font-light leading-relaxed">
                Our approach combines design clarity, technical precision, and SEO-ready development to help brands reach wider audiences across Odisha and beyond. As an emerging technology startup in Bhubaneswar, we are committed to delivering reliable digital solutions tailored to modern business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
