import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2, Cloud, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const targetNumber = parseFloat(text);
    const decimals = text.includes('.') ? text.split('.')[1].length : 0;

    // Refresh GSAP markers after Framer Motion entrance animations finish
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2000);

    const runCounter = () => {
      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: targetNumber,
        duration: 1.5,
        ease: "power3.out",
        onUpdate: () => {
          setDisplayText(counterObj.val.toFixed(decimals));
        }
      });
    };

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => setTimeout(runCounter, delay * 100),
      onEnterBack: () => setTimeout(runCounter, delay * 100)
    });

    return () => {
      clearTimeout(refreshTimeout);
      st.kill();
    };
  }, [text, delay]);

  return (
    <span
      ref={ref}
      className="inline-block tabular-nums"
    >
      {displayText}
    </span>
  );
};

const SVG_PATHS = [
  "M 64 192 C 64 227.346 35.346 256 0 256 L 0 192 C 0 156.654 28.654 128 64 128 Z M 128 128 C 163.346 128 192 156.654 192 192 L 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 L 64 192 C 64 156.654 92.654 128 128 128 Z M 192 128 C 227.346 128 256 156.654 256 192 L 256 256 C 220.654 256 192 227.346 192 192 Z M 0 0 C 35.346 0 64 28.654 64 64 L 64 128 C 28.654 128 0 99.346 0 64 Z M 192 64 C 192 99.346 163.346 128 128 128 C 92.654 128 64 99.346 64 64 L 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 256 64 C 256 99.346 227.346 128 192 128 L 192 64 C 192 28.654 220.654 0 256 0 Z",
  "M 64 0 C 99.346 0 128 28.654 128 64 L 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 Z M 192 128 C 156.654 128 128 99.346 128 64 C 128 28.654 156.654 0 192 0 C 227.346 0 256 28.654 256 64 L 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 156.654 156.654 128 192 128 Z",
  "M 112 32 L 54.627 32 L 128 105.373 L 201.373 32 L 144 32 L 144 0 L 256 0 L 256 112 L 224 112 L 224 54.627 L 150.627 128 L 224 201.373 L 224 144 L 256 144 L 256 256 L 144 256 L 144 224 L 201.373 224 L 128 150.627 L 54.627 224 L 112 224 L 112 256 L 0 256 L 0 144 L 32 144 L 32 201.373 L 105.373 128 L 32 54.627 L 32 112 L 0 112 L 0 0 L 112 0 Z",
  "M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z"
];

const AnimatedWord = ({ word, delay, gradient = false }: { word: string, delay: number, gradient?: boolean }) => (
  <div className="overflow-hidden relative inline-flex pb-[0.2em] -mb-[0.2em]">
    <motion.span
      initial={{ y: "-110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
      className={cn("inline-block", gradient ? "text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500" : "")}
    >
      {word}
    </motion.span>
  </div>
);

const AnimatedCapsule = ({ delay, color, width, children }: { delay: number, color: string, width: string, children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.random() > 0.2) return; // Throttle particle creation
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const particle = document.createElement("div");

    // Choose random SVG
    const path = SVG_PATHS[Math.floor(Math.random() * SVG_PATHS.length)];
    particle.innerHTML = `<svg viewBox="0 0 256 256" width="100%" height="100%"><path d="${path}" fill="currentColor"/></svg>`;
    particle.style.position = "absolute";
    particle.style.pointerEvents = "none";
    // Changed to zinc-900 so it is highly visible
    particle.className = "text-zinc-900 w-4 h-4 md:w-8 md:h-8";

    // Start at mouse position relative to container
    particle.style.left = (e.clientX - rect.left - 16) + "px";
    particle.style.top = (e.clientY - rect.top - 16) + "px";

    containerRef.current.appendChild(particle);

    // Initial state
    gsap.set(particle, { scale: 0.2, opacity: 1, rotation: Math.random() * 360 });

    const animDuration = Math.random() * 0.8 + 0.6;

    // Movement: Explode strongly UPWARDS
    gsap.to(particle, {
      x: (Math.random() - 0.5) * 120,       // Slight Left/Right drift
      y: -(Math.random() * 200 + 100),      // Strongly negative Y (upward ejection)
      rotation: "+=" + (Math.random() * 360 - 180),
      scale: Math.random() * 0.8 + 0.5,
      duration: animDuration,
      ease: "power2.out",
      onComplete: () => {
        if (particle.parentNode) particle.remove();
      }
    });

    // Fade out: Keep opacity fully visible until the very end
    gsap.to(particle, {
      opacity: 0,
      duration: animDuration * 0.3,
      delay: animDuration * 0.7, // Wait to start fading
      ease: "power1.in"
    });
  };

  return (
    <div
      className="relative inline-flex items-center group cursor-pointer z-50"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
        className={cn(`h-[0.7em] rounded-full origin-left flex items-center justify-center overflow-hidden shadow-inner`, width, color)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#fafafa] pt-20"
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col gap-10 lg:gap-16">

        {/* MASSIVE TYPOGRAPHY LOCKUP */}
        <div className="w-full flex flex-col font-display font-black text-[12vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[7.5vw] xl:text-[7.5rem] tracking-tighter leading-[0.8] uppercase text-zinc-900 mt-8 gap-y-0">

          {/* Row 1 */}
          <div className="w-full flex justify-start relative z-10">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-x-[0.2em]">
              <AnimatedWord word="YOUR" delay={0.0} />
              <AnimatedWord word="BUSINESS" delay={0.1} />
            </div>
          </div>

          {/* Row 2 - Text, Capsule, Description */}
          <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-start z-20">
            <div className="flex items-center gap-x-[0.2em] w-full xl:w-auto">
              <AnimatedWord word="DESERVES" delay={0.2} />
              {/* Custom SVG Capsule */}
              <AnimatedCapsule delay={0.7} color="bg-zinc-900" width="w-[1.2em] md:w-[1.5em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-[0.5em] h-[0.5em] text-white"
                  fill="none"
                >
                  <path
                    d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z"
                    fill="currentColor"
                  />
                </svg>
              </AnimatedCapsule>
            </div>

            <div className="overflow-hidden relative mt-1 xl:mt-0 w-full xl:w-auto xl:max-w-xs self-start xl:self-center ml-0 xl:ml-12 flex-shrink-0">
              <motion.p
                initial={{ y: "-110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.56, ease: [0.76, 0, 0.24, 1] }}
                className="text-left text-sm md:text-base font-sans normal-case tracking-normal text-zinc-600 font-medium leading-relaxed pb-2 xl:pb-0"
              >
                We partner with ambitious businesses in Bhubaneswar and across India to build custom web applications, mobile solutions, and enterprise software that eliminate bottlenecks and unlock new revenue streams.
              </motion.p>
            </div>
          </div>

          {/* Row 3 - THAT + Blank space capsule */}
          <div className="w-full flex justify-start relative z-10">
            <div className="flex items-center gap-x-[0.2em]">
              <AnimatedWord word="SOFTWARE" delay={0.3} />
              {/* Custom SVG Spacer Capsule */}
              <AnimatedCapsule delay={0.8} color="bg-zinc-200/60 border border-zinc-300 backdrop-blur-md" width="w-[1.5em] md:w-[2em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-[0.5em] h-[0.5em] text-black"
                  fill="none"
                >
                  <path
                    d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z"
                    fill="currentColor"
                  />
                </svg>
              </AnimatedCapsule>
            </div>
          </div>

          {/* Rows 4 & 5 + Huge CTA in blank space */}
          <div className="w-full flex flex-col-reverse xl:flex-row items-end justify-between relative z-10 mt-1 xl:mt-0 xl:gap-0 gap-10">

            {/* CTA inside the blank space */}
            <div className="w-full xl:w-auto flex justify-start md:pl-[5%] pb-12 xl:pb-[8%] z-50">
              <div className="overflow-hidden relative pb-4">
                <motion.div
                  initial={{ y: "-110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, delay: 0.64, ease: [0.76, 0, 0.24, 1] }}
                  className="flex flex-wrap gap-4 items-center"
                >
                  <Link to="/contact">
                    <button className="btn-velix group shadow-xl shadow-zinc-900/10 px-5 py-2.5 text-xs md:text-sm font-semibold gap-2">
                      Get a Free Consultation
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </Link>
                  <Link to="/work">
                    <button className="btn-glass px-5 py-2.5 text-xs md:text-sm font-medium">
                      See Case Studies
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Typography Right Side */}
            <div className="flex flex-col items-end w-full xl:w-auto">
              {/* Row 4 */}
              <div className="w-full flex justify-end md:pr-[8%] relative z-10">
                <div className="flex flex-wrap md:flex-nowrap justify-end items-center gap-x-[0.2em]">
                  <AnimatedWord word="THAT" delay={0.4} />
                  <AnimatedWord word="DELIVERS" delay={0.45} />
                </div>
              </div>

              {/* Row 5 */}
              <div className="w-full flex justify-end md:pr-[2%] relative z-10 mt-1 md:mt-2">
                <div className="flex items-center gap-x-[0.2em]">
                  <AnimatedWord word="RESULTS." delay={0.5} gradient={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="w-full border-t border-zinc-200/60 pt-10 mt-6 lg:mt-12 overflow-hidden">
          <motion.div
            initial={{ y: "-110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-200/60 pb-8"
          >
            {/* Stat 1 */}
            <div className="flex flex-col gap-2 items-center justify-center w-full group cursor-crosshair py-6 md:py-0">
              <span className="text-5xl lg:text-[4rem] font-black text-zinc-900 tracking-tighter font-display flex justify-center items-center leading-none">
                MERN
              </span>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.25em] mt-3 group-hover:text-zinc-900 transition-colors duration-300 text-center">
                Modern Stack
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2 items-center justify-center w-full group cursor-crosshair py-6 md:py-0">
              <span className="text-5xl lg:text-[4rem] font-black text-zinc-900 tracking-tighter font-display flex justify-center items-center leading-none">
                <ScrambleText text="150" delay={1.1} /><span className="text-emerald-500 font-bold ml-1 text-4xl lg:text-5xl">+</span>
              </span>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.25em] mt-3 group-hover:text-zinc-900 transition-colors duration-300 text-center">
                Projects Delivered
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-2 items-center justify-center w-full group cursor-crosshair py-6 md:py-0">
              <span className="text-5xl lg:text-[4rem] font-black text-zinc-900 tracking-tighter font-display flex justify-center items-center leading-none">
                <ScrambleText text="98" delay={1.3} /><span className="text-blue-500 font-medium ml-2 text-4xl lg:text-5xl">%</span>
              </span>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.25em] mt-3 group-hover:text-zinc-900 transition-colors duration-300 text-center">
                Client Retention
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

