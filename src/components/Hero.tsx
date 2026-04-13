import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import TextPressure from './TextPressure';

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] md:min-h-[85vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-white pt-16 md:pt-15"
    >
      {/* Background Decor (Mobile Only) */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-[45vw] font-black text-zinc-50/50 select-none pointer-events-none z-0 md:hidden text-center overflow-hidden">
        VELIX
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start md:items-center w-full">
          {/* Tagline */}
          <div className="overflow-hidden mb-2">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[9px] md:text-xs font-mono uppercase tracking-[0.5em] text-zinc-400"
            >
              Strategic Design / Digital Growth
            </motion.p>
          </div>

          <h1 className="w-full text-4xl md:text-6xl lg:text-[6vw] font-display font-black uppercase tracking-tight text-black leading-[0.9] flex flex-col items-start md:items-center gap-1 md:text-center">
            {/* Mobile View: Left-Aligned 3 lines */}
            <div className="md:hidden flex flex-col items-start w-full">
               <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    className="block"
                  >
                    Designs built to
                  </motion.span>
               </div>
               <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    className="block"
                  >
                    convert into
                  </motion.span>
               </div>
            </div>

            {/* Desktop View: Centered 1 line before TextPressure */}
            <div className="hidden md:block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                  className="block font-thin tracking-tighter lowercase"
                >
                  Designs built to convert visitors into
                </motion.span>
            </div>
            
            <div className="w-full h-16 md:h-28 lg:h-36 overflow-hidden relative mt-1">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                className="w-full h-full"
              >
                <TextPressure 
                  text="leads and sales"
                  textColor="#000000"
                  flex={true}
                  scale={false}
                  width={true}
                  weight={true}
                  italic={true}
                  minFontSize={28}
                />
              </motion.div>
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center mt-8 md:mt-12 justify-center w-full md:w-auto"
          >
            <div className="flex flex-wrap gap-4 items-center justify-start md:justify-center w-full md:w-auto">
              <Link to="/contact">
                <button className="btn-velix text-[10px] px-8 py-4 min-w-[160px]">
                  Create with us
                </button>
              </Link>
              <Link to="/work">
                <button className="btn-glass group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] min-w-[160px]">
                  <span className="text-black group-hover:text-white transition-colors">Our Projects</span>
                  <ArrowUpRight className="w-3 h-3 text-black group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </Link>
            </div>
            
            <p className="max-w-xs text-[10px] md:text-xs text-zinc-400 font-light leading-relaxed md:text-left border-l border-zinc-100 pl-4 hidden lg:block">
              We create products that don't just look good; they solve problems and drive revenue.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
