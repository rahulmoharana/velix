import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 mix-blend-difference">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-display font-black text-2xl tracking-tighter uppercase scale-x-110 origin-left">VELIX</Link>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <Link 
          to="/" 
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="hover:opacity-50 transition-opacity"
        >
          Home
        </Link>
        <Link to="/work" className="hover:opacity-50 transition-opacity">Work</Link>
        <Link to="/services" className="hover:opacity-50 transition-opacity">Services</Link>
        <Link to="/about-us" className="hover:opacity-50 transition-opacity">About</Link>
        <Link to="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
      </div>
      <Link to="/contact">
        <button className="btn-velix">
          <span>Start Project</span>
        </button>
      </Link>
    </nav>
  );
};
