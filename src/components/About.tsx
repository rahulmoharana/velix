import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Animate images
      gsap.fromTo('.about-image',
        {
          y: 60,
          opacity: 0,
          clipPath: 'inset(10% 0 0 0)'
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            end: "top 30%",
            scrub: false,
          }
        }
      );

      // Animate texts
      gsap.fromTo('.about-text',
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%"
          }
        }
      );
    });

    // Mobile specific animations
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(['.about-text', '.about-image'],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-8 md:py-20 px-6 md:px-12 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">

        {/* Left Column */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <h2 className="flex flex-col font-display font-black uppercase tracking-tighter leading-[0.85] text-[6rem] sm:text-[8rem] lg:text-[10rem]">
            <span className="about-text">ABOUT</span>
            <span className="about-text">US</span>
          </h2>

          <div className="mt-10 lg:mt-32 max-w-sm">
            <h4 className="about-text font-bold mb-4 text-base md:text-lg">Modern Software and Web Engineering</h4>
            <p className="about-text opacity-70 text-sm leading-relaxed font-medium">
              Digital Excellence: Solutions featuring clean architecture, scalable performance, and premium user experiences.
            </p>
          </div>
        </div>

        {/* Center Column / Main Image */}
        <div className="w-full lg:w-[35%]">
          <div className="h-[450px] md:h-[600px] lg:h-[700px] w-full about-image mt-4 lg:mt-16">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Office"
              className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem]"
            />
          </div>
        </div>

        {/* Right Column / Side Content */}
        <div className="w-full lg:w-[25%] flex flex-col lg:justify-end pb-4 lg:pb-16 mt-4 lg:mt-0">
          <div className="h-[250px] md:h-[300px] w-full about-image mb-8 lg:mb-12">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem]"
            />
          </div>

          <div>
            <h3 className="about-text font-display font-bold text-3xl lg:text-4xl tracking-tight mb-4">
              Our Philosophy
            </h3>
            <p className="about-text opacity-70 text-sm leading-relaxed font-medium">
              At Velix Tech, we believe in creating robust, personalized digital environments that reflect our clients' visions and accelerate their growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
