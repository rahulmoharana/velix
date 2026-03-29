/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { 
  ArrowUpRight, 
  Code, 
  Cpu, 
  Globe, 
  Layers, 
  MessageSquare, 
  Zap, 
  ChevronRight,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  BarChart,
  ShieldCheck,
  Search,
  Palette,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 mix-blend-difference">
      <div className="flex items-center gap-2">
        <span className="font-display font-black text-2xl tracking-tighter uppercase scale-x-110 origin-left">VELIX</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
      <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-opacity-80 transition-all">
        Start Project
      </button>
    </nav>
  );
};

const Hero = () => {
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

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#000]">
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
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md">
            <Award className="w-4 h-4 text-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">Award Winning Digital Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-display font-black leading-[0.85] tracking-tighter text-white uppercase origin-left">
            WE CRAFT <br />
            <span className="relative inline-block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">DIGITAL</span> <br />
            LEGACIES.
          </h1>

          <p className="max-w-lg text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            VELIX is a premier digital laboratory where high-performance engineering meets avant-garde design. We orchestrate digital symphonies for brands that dare to lead.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:bg-zinc-200 shadow-xl shadow-white/5"
            >
              Start Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="group flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
            >
              Our Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-zinc-500 mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Main Dashboard Preview Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-[4/3] bg-zinc-900/80 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group"
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
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-24 pt-12 border-t border-white/5 w-full max-w-7xl mx-auto"
      >
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {['MICROSOFT', 'ADOBE', 'SPOTIFY', 'STRIPE', 'AIRBNB', 'SLACK'].map((logo, i) => (
            <span key={i} className="text-xl font-display font-black tracking-tighter">{logo}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, index, className }: any) => {
  return (
    <div className={cn(
      "service-card relative w-full max-w-[400px] aspect-square bg-[#0a0a0a] flex flex-col items-center justify-center p-12 text-center group",
      className
    )}>
      {/* Viewfinder Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40" />

      <div className="mb-8 text-white/80 group-hover:text-white transition-colors duration-500">
        <Icon className="w-16 h-16 stroke-[1.5]" />
      </div>
      
      <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-4 scale-x-110 origin-center">
        {title}
      </h3>
      
      <p className="text-sm text-zinc-500 font-mono uppercase tracking-wider leading-relaxed max-w-[280px]">
        {description}
      </p>

      <div className="absolute bottom-6 right-6 text-[10px] font-mono opacity-20">
        0{index + 1}
      </div>
    </div>
  );
};

const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray('.service-card-wrapper');
      
      // Pin the entire inner section on desktop
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: inner.current,
        pinSpacing: false,
      });

      cards.forEach((card: any, i: number) => {
        gsap.fromTo(card, 
          { 
            y: '100vh',
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: container.current,
              start: () => `top+=${(i * window.innerHeight * 0.6)} top`,
              end: () => `top+=${((i + 0.5) * window.innerHeight * 0.6)} top`,
              scrub: true,
            }
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Simple fade up for mobile
      gsap.from('.service-card-wrapper', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const services = [
    {
      icon: Zap,
      title: "Idea",
      description: "We meet with your team to learn more about your project idea and goals."
    },
    {
      icon: Layers,
      title: "Design",
      description: "We will design a mockup or prototype of your website and refine it."
    },
    {
      icon: Code,
      title: "Develop",
      description: "Our engineers build your vision with precision and modern tech."
    },
    {
      icon: ArrowUpRight,
      title: "Launch",
      description: "We deploy your project and ensure everything is optimized for success."
    }
  ];

  return (
    <section id="services" ref={container} className="relative md:h-[400vh] bg-black">
      <div ref={inner} className="md:h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 py-24 md:py-0">
        <div className="text-center z-20 mb-12 md:mb-16 shrink-0">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-50 mb-4">Our Process</h2>
          <h3 className="heading-xl origin-center scale-x-105">SERVICES</h3>
        </div>
        
        <div className="grid grid-cols-1 md:flex md:flex-nowrap gap-8 items-center justify-center w-full max-w-7xl">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="service-card-wrapper w-full md:w-1/4 flex justify-center"
            >
              <ServiceCard 
                icon={s.icon} 
                title={s.title} 
                description={s.description} 
                index={i} 
                className="!max-w-none aspect-square md:aspect-[3/4] h-auto md:max-h-[60vh] py-12 md:py-16"
              />
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-4 opacity-20">
          <span className="text-[10px] font-mono uppercase tracking-widest">Workflow Sequence</span>
          <div className="w-48 h-[1px] bg-white" />
          <span className="text-[10px] font-mono">01 — 04</span>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const container = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const projects = [
    { title: "Grido", category: "Web Design", image: "https://picsum.photos/seed/grido/800/800" },
    { title: "Stickify", category: "App Development", image: "https://picsum.photos/seed/stickify/800/800" },
    { title: "Agentify", category: "AI Platform", image: "https://picsum.photos/seed/agentify/800/800" },
    { title: "AI Nest", category: "Smart Home", image: "https://picsum.photos/seed/ainest/800/800" },
    { title: "Brandora", category: "Branding", image: "https://picsum.photos/seed/brandora/800/800" },
    { title: "Codify", category: "SaaS", image: "https://picsum.photos/seed/codify/800/800" }
  ];

  useGSAP(() => {
    // Pin the entire inner section
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: inner.current,
      pinSpacing: false,
    });

    // Update active index based on scroll
    projects.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: container.current,
        start: () => `top+=${(i * window.innerHeight * 0.5)} top`,
        end: () => `top+=${((i + 1) * window.innerHeight * 0.5)} top`,
        onToggle: self => self.isActive && setActiveIndex(i),
      });
    });

    // Animate the image container
    gsap.fromTo('.project-preview', 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="work" ref={container} className="relative h-[400vh] bg-[#080805]">
      <div ref={inner} className="h-screen flex items-center justify-between px-6 md:px-24 overflow-hidden">
        
        {/* Left: Progress Indicator */}
        <div className="hidden lg:flex flex-col gap-2 opacity-20">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-8 h-[1px] bg-white transition-all duration-500",
                activeIndex === i ? "w-16 opacity-100" : "opacity-30"
              )} 
            />
          ))}
        </div>

        {/* Center: Project Titles */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-4">
            {projects.map((p, i) => (
              <h3 
                key={i}
                className={cn(
                  "text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter transition-all duration-700 cursor-pointer text-center",
                  activeIndex === i ? "text-white scale-110" : "text-white/10 scale-90 blur-[2px]"
                )}
              >
                {p.title}
              </h3>
            ))}
          </div>
        </div>

        {/* Right: Project Preview */}
        <div className="hidden md:flex flex-col items-start gap-4 w-[350px]">
          <div className="project-preview relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-900 border border-white/5">
            {projects.map((p, i) => (
              <img 
                key={i}
                src={p.image} 
                alt={p.title} 
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out",
                  activeIndex === i ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-110 rotate-3"
                )}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
            <span className="text-lg">↳</span>
            <span className="group-hover:translate-x-1 transition-transform">View Project</span>
          </div>
        </div>

      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-xl mb-12 origin-center scale-x-105">LET'S BUILD</h2>
        <p className="text-2xl md:text-4xl text-zinc-400 font-light mb-16 leading-tight">
          Ready to elevate your digital presence? Join forces with <span className="text-white font-bold uppercase tracking-tighter">VELIX</span> and define the future of your industry.
        </p>
        <a 
          href="mailto:hello@velix.agency" 
          className="inline-block text-[8vw] md:text-7xl font-display font-bold uppercase tracking-tighter border-b-4 border-white pb-4 hover:opacity-50 transition-opacity break-all"
        >
          hello@velix.agency
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <span className="font-display font-black text-4xl tracking-tighter uppercase scale-x-110 origin-left inline-block mb-6">VELIX</span>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Leading the digital frontier with intelligent design and innovative technology. Based in the future, working globally.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest opacity-30 mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest">
            <li><a href="#" className="hover:text-zinc-400 transition-colors">Home</a></li>
            <li><a href="#work" className="hover:text-zinc-400 transition-colors">Work</a></li>
            <li><a href="#services" className="hover:text-zinc-400 transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest opacity-30 mb-6">Social</h4>
          <div className="flex gap-6">
            <a href="#" className="hover:scale-110 transition-transform"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.4em] opacity-30">
        <p>© 2026 VELIX DIGITAL AGENCY. ALL RIGHTS RESERVED.</p>
        <p>INTELLIGENCE THROUGH INNOVATION</p>
      </div>
    </footer>
  );
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
