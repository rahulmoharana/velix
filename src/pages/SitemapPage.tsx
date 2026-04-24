import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ODISHA_DISTRICTS } from '../constants/locations';

const SitemapPage = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20 px-6 md:px-12">
      <SEO 
        title="Sitemap | Explore VELIX Services Across Odisha"
        description="Comprehensive sitemap of VELIX services across all districts of Odisha. Find web development and software solutions in your local area."
        url="https://www.velixinfo.tech/sitemap"
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-16"
        >
          Sitemap
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-20">
          {/* Main Pages */}
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 mb-8">Main Pages</h2>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-xl font-bold hover:opacity-50 transition-opacity">Home</Link>
              <Link to="/about-us" className="text-xl font-bold hover:opacity-50 transition-opacity">About Us</Link>
              <Link to="/work" className="text-xl font-bold hover:opacity-50 transition-opacity">Our Work</Link>
              <Link to="/services" className="text-xl font-bold hover:opacity-50 transition-opacity">Services</Link>
              <Link to="/contact" className="text-xl font-bold hover:opacity-50 transition-opacity">Contact</Link>
              <Link to="/blog" className="text-xl font-bold hover:opacity-50 transition-opacity">Insights</Link>
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 mb-8">Specialized Services</h2>
            <div className="flex flex-col gap-4">
              <Link to="/services/web-development" className="text-lg font-medium hover:opacity-50">Web Development</Link>
              <Link to="/services/software-development" className="text-lg font-medium hover:opacity-50">Software Solutions</Link>
              <Link to="/services/mobile-apps" className="text-lg font-medium hover:opacity-50">Mobile Applications</Link>
              <Link to="/services/ui-ux" className="text-lg font-medium hover:opacity-50">UI/UX Strategy</Link>
              <Link to="/services/saas" className="text-lg font-medium hover:opacity-50">SaaS Products</Link>
              <Link to="/services/web-platforms" className="text-lg font-medium hover:opacity-50">Web Platforms</Link>
            </div>
          </section>

          {/* Locations Hub */}
          <section>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 mb-8">Service Locations (Odisha)</h2>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {ODISHA_DISTRICTS.map((district) => (
                <Link 
                  key={district} 
                  to={`/location/${district.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-zinc-600 hover:text-black transition-colors"
                >
                  {district}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
