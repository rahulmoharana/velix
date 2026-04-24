import { Github, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className={cn(
      "py-20 px-6 md:px-12 border-t transition-colors duration-500",
      isHome ? "bg-white text-black border-black/5" : "bg-[#080805] text-white border-white/5"
    )}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <Link to="/" className="font-display font-bold text-4xl tracking-tighter uppercase mb-6 block scale-x-110 origin-left text-current">VELIX</Link>
          <p className="text-zinc-500 max-w-sm font-mono text-xs uppercase tracking-widest mt-4">
            Pushing the boundaries of digital experiences in <span className={isHome ? "text-zinc-800" : "text-zinc-300"}>Bhubaneswar, Odisha</span>.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <p className="text-xs opacity-60 leading-relaxed max-w-[200px]">
              Infocity, Patia,<br />
              Bhubaneswar, Odisha 751024
            </p>
            <a href="mailto:velixtechsolutions@gmail.com" className="text-sm opacity-60 hover:opacity-100 transition-opacity mt-2">velixtechsolutions@gmail.com</a>
            <a href="https://wa.me/918249040033" className={`text-sm transition-colors flex items-center gap-2 ${isHome ? 'opacity-60 hover:text-green-600' : 'opacity-60 hover:text-green-400'}`}>
              <span>+91 824 904 0033</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isHome ? 'bg-green-500/10 text-green-600' : 'bg-green-500/20 text-green-400'}`}>WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Services</span>
            <Link to="/services/web-development" className="text-sm hover:opacity-50 transition-opacity">Web Dev</Link>
            <Link to="/services/software-development" className="text-sm hover:opacity-50 transition-opacity">Software Dev</Link>
            <Link to="/services/mobile-apps" className="text-sm hover:opacity-50 transition-opacity">Mobile Apps</Link>
            <Link to="/services/ui-ux" className="text-sm hover:opacity-50 transition-opacity">UI/UX Design</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Industries</span>
            <Link to="/industries/ecommerce" className="text-sm hover:opacity-50 transition-opacity">E-commerce</Link>
            <Link to="/industries/healthcare" className="text-sm hover:opacity-50 transition-opacity">Healthcare</Link>
            <Link to="/industries/edtech" className="text-sm hover:opacity-50 transition-opacity">EdTech</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Navigation</span>
            <Link to="/work" className="text-sm hover:opacity-50 transition-opacity">Our Work</Link>
            <Link to="/about-us" className="text-sm hover:opacity-50 transition-opacity">About Us</Link>
            <Link to="/contact" className="text-sm hover:opacity-50 transition-opacity">Contact</Link>
            <Link to="/careers" className="text-sm hover:opacity-50 transition-opacity">Join Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Connect</span>
            <div className="flex flex-wrap gap-6 mb-4">
              <Twitter className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
              <Linkedin className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
              <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity text-current" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-2">Locations</span>
            <div className="flex flex-col gap-2">
              <Link to="/location/khordha" className="text-sm hover:opacity-50 transition-opacity">Khordha</Link>
              <Link to="/location/cuttack" className="text-sm hover:opacity-50 transition-opacity">Cuttack</Link>
              <Link to="/location/puri" className="text-sm hover:opacity-50 transition-opacity">Puri</Link>
              <Link to="/location/sambalpur" className="text-sm hover:opacity-50 transition-opacity">Sambalpur</Link>
              <Link to="/sitemap" className="text-[10px] font-bold uppercase tracking-widest mt-2 hover:opacity-50 underline underline-offset-4">View All Locations</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={cn(
        "max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400",
        isHome ? "border-black/5" : "border-white/5"
      )}>
        <span>© 2026 VELIX DIGITAL AGENCY | BHUBANESWAR, INDIA</span>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-current transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-current transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
