import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
     const previous = scrollY.getPrevious() ?? 0;
     
     // Handle hide/show on scroll
     if (latest > previous && latest > 150) {
        setHidden(true);
     } else {
        setHidden(false);
     }

     // Handle transparency
     if (latest > 50) {
        setIsScrolled(true);
     } else {
        setIsScrolled(false);
     }
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkPage = ['/work', '/contact', '/services', '/about-us'].includes(location.pathname);
  const forceWhiteText = isDarkPage && !isScrolled;

  return (
    <>
      <motion.nav 
        variants={{
           visible: { y: 0 },
           hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-6" 
            : "bg-transparent border-b border-transparent py-8",
          forceWhiteText ? "text-white" : "text-black"
        )}
      >
        <motion.div 
          className="flex items-center gap-2"
          initial="initial"
          whileHover="hovered"
        >
          <motion.div
            variants={{
              initial: { x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
              hovered: { x: 10, transition: { type: "spring", stiffness: 400, damping: 10 } }
            }}
          >
            <Link to="/" className="font-display font-bold text-2xl tracking-tighter uppercase scale-x-110 origin-left">VELIX</Link>
          </motion.div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => {
                if (isHome && link.path === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="relative group overflow-hidden"
            >
              <div className="relative overflow-hidden h-4">
                <motion.div
                  className="flex flex-col transition-transform duration-500 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-1/2"
                >
                  <span className="h-4 flex items-center">{link.name}</span>
                  <span className={cn("h-4 flex items-center", forceWhiteText ? "text-white/40" : "text-zinc-500")}>
                    {link.name}
                  </span>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block">
            <button className={cn(
              "px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500",
              forceWhiteText 
                ? "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black" 
                : "bg-black border border-black text-white hover:bg-transparent hover:text-black"
            )}>
              <span>Start Project</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 hover:opacity-50 transition-opacity"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className={cn(forceWhiteText ? "text-white" : "text-black")} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsOpen(false);
                      if (isHome && link.path === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-4xl font-display font-black uppercase tracking-tighter block relative group overflow-hidden h-12"
                  >
                    <motion.div
                      className="flex flex-col transition-transform duration-500 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-1/2"
                    >
                      <span className="h-12 flex items-center justify-center">{link.name}</span>
                      <span className="h-12 flex items-center justify-center text-zinc-400">{link.name}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="w-full mt-8"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="btn-velix w-full">
                    <span>Start Project</span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Background elements or subtle details */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest opacity-30 font-light">
              © 2024 VELIX STUDIO
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

