import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Code, 
  ChevronRight,
  CheckCircle,
  Users,
  TrendingUp,
  Palette,
  Search,
  Smartphone,
  Phone
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: CheckCircle, label: "Projects Completed", value: "250+" },
    { icon: Users, label: "Happy Clients", value: "180+" },
    { icon: TrendingUp, label: "Growth Percentage", value: "450%" },
  ];

  const floatingElements = [
    { icon: Palette, label: "Branding", color: "bg-zinc-800", top: "15%", left: "10%" },
    { icon: Code, label: "Development", color: "bg-zinc-800", top: "65%", left: "5%" },
    { icon: Search, label: "SEO", color: "bg-zinc-800", top: "20%", right: "10%" },
    { icon: Smartphone, label: "Marketing", color: "bg-zinc-800", top: "70%", right: "15%" },
  ];

  useGSAP(() => {
   

    gsap.to('.hero-visual', {
      scale: 0.8,
      opacity: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom center",
        scrub: 1
        
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content flex flex-col gap-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[4vw] font-display font-black leading-[0.95] tracking-tighter text-white uppercase origin-left">
            We Build a Powerful <br />
            <span className="relative inline-block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">Digital Presence</span> <br />
            That Expands Your Business
          </h1>

          <p className="max-w-2xl text-md md:text-lg text-zinc-400 font-light leading-relaxed">
            As a premier <span className="text-white font-medium">software developer agency in Bhubaneswar, Odisha</span>, we help ambitious businesses create high-performing websites, strategic branding, and digital experiences that strengthen visibility and attract customers in competitive markets.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-zinc-900 text-white border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-black shadow-xl shadow-white/5"
              >
                Start Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/work">
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="group flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
              >
                Our Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="https://wa.me/918249040033" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] text-green-500 hover:bg-green-500 hover:text-white transition-all"
              >
                <span>WhatsApp</span>
                <Phone className="w-3 h-3" />
              </motion.button>
            </a>
          </div>

          {/* Stats Cards */}
          
        </motion.div>

        {/* Right Visual */}
        <div className="hero-visual relative h-[600px] hidden lg:block">
          {/* Main Dashboard Preview Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-4/3 bg-zinc-900/80 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group"
          >
            <div className="h-12 border-b border-white/10 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="h-4 w-1/3 bg-white/10 rounded-full" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-white/5 rounded-2xl border border-white/5" />
                <div className="h-32 bg-white/5 rounded-2xl border border-white/5" />
              </div>
              <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Floating Service Elements */}
          {floatingElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0],
              }}
              transition={{ 
                opacity: { delay: 0.8 + i * 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
              }}
              className="absolute p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 shadow-lg"
              style={{ 
                top: el.top, 
                left: el.left, 
                right: el.right 
              }}
            >
              <div className={cn("p-2 rounded-lg", el.color)}>
                <el.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-bold text-white whitespace-nowrap">{el.label}</span>
            </motion.div>
          ))}

          {/* Abstract Shapes */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full -z-10"
          />
        </div>
      </div>

      {/* Client Logos Strip */}
     
    </section>
  );
};
