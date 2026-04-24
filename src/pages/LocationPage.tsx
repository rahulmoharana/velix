import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowUpRight, CheckCircle2, Globe, Shield, Zap } from 'lucide-react';

const LocationPage = () => {
  const { district } = useParams<{ district: string }>();
  const districtName = district ? district.charAt(0).toUpperCase() + district.slice(1).replace(/-/g, ' ') : '';

  const services = [
    { title: "Web Development", desc: "Premium, high-performance websites built with React and Tailwind CSS." },
    { title: "Software Solutions", desc: "Custom enterprise software to streamline your business operations." },
    { title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
    { title: "Digital Marketing", desc: "Data-driven SEO and marketing strategies to grow your brand." }
  ];

  return (
    <div className="bg-white text-black selection:bg-black selection:text-white">
      <SEO 
        title={`Best Web Development & Software Agency in ${districtName}, Odisha | VELIX`}
        description={`VELIX is the leading software development agency in ${districtName}, Odisha. We provide custom web development, mobile apps, and digital solutions for businesses in ${districtName}.`}
        url={`https://www.velixinfo.tech/location/${district}`}
      />
      
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 block mb-6"
            >
              Strategic Partner / {districtName}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-8"
            >
              Elevating Digital <br /> Excellence in <span className="text-zinc-400">{districtName}</span>
            </h1 >
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg text-zinc-600 leading-relaxed"
            >
              VELIX is expanding its footprint across Odisha. We are now providing premium software development and digital transformation services to businesses, startups, and enterprises specifically in the {districtName} district.
            </motion.p>
          </section>

          {/* Service Grid */}
          <section className="grid md:grid-cols-2 gap-12 mb-32">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-t border-zinc-100 pt-10"
              >
                <span className="text-xs font-mono text-zinc-300 block mb-4">0{idx + 1}</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                <p className="text-zinc-500 max-w-sm mb-8">{service.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                  Inquire for {districtName} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </section>

          {/* Why Velix */}
          <section className="bg-zinc-950 text-white rounded-[3rem] p-12 md:p-24 mb-32 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">
                  Why VELIX for <br /> Your {districtName} <br /> Business?
                </h2>
                <div className="space-y-6">
                  {[
                    "Localization expertise for the Odisha market.",
                    "Premium MERN stack & Cloud-native development.",
                    "End-to-end support from discovery to deployment.",
                    "Performance-first approach optimized for results."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="text-emerald-500 w-6 h-6 shrink-0" />
                      <p className="text-zinc-400 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <h4 className="font-bold uppercase text-sm mb-2">Fast Delivery</h4>
                  <p className="text-[10px] text-zinc-500">Agile sprints for rapid deployment.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                  <Shield className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="font-bold uppercase text-sm mb-2">Secure Code</h4>
                  <p className="text-[10px] text-zinc-500">Enterprise-grade security protocols.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                  <Globe className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="font-bold uppercase text-sm mb-2">Global Standards</h4>
                  <p className="text-[10px] text-zinc-500">World-class UI/UX design.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-black text-white mb-2">24/7</div>
                  <h4 className="font-bold uppercase text-sm mb-2">Support</h4>
                  <p className="text-[10px] text-zinc-500">Dedicated local support team.</p>
                </div>
              </div>
            </div>
            {/* Background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </section>

          {/* CTA */}
          <section className="text-center py-20 border-t border-zinc-100">
             <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8">
               Ready to Scale <br /> in {districtName}?
             </h2>
             <Link to="/contact">
               <button className="btn-velix">
                 Get Free Quote for {districtName}
               </button>
             </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LocationPage;
