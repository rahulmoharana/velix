import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, CheckCircle2, CreditCard, ShoppingBag, Truck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommercePage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="E-commerce Website Development Odisha | Scalable Online Stores"
        description="Launch your online business with Bhubaneswar's top e-commerce developers. We build high-conversion Shopify, WooCommerce, and custom MERN stack online stores for Odisha brands."
        keywords="E-commerce website development Odisha, online store development Bhubaneswar, Shopify developers Odisha, WooCommerce Bhubaneswar, digital retail solutions"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Industries / E-commerce Solutions</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            E-commerce <br /> Powerhouses <br /> <span className="text-zinc-400">for Odisha</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We build high-performance online stores that turn visitors into loyal customers. From seamless checkout experiences to robust inventory management, we power your digital retail success.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Bhubaneswar's Premier E-commerce Development Team
            </h2>
            <p>
              The digital retail landscape in Odisha is exploding. Whether you're a local boutique in Saheed Nagar or a regional manufacturer looking to reach a global audience, your online store is your most important asset. At VELIX, we specialize in <strong>e-commerce website development in Odisha</strong>, creating robust platforms that are optimized for speed, security, and conversion.
            </p>
            <p>
              We understand that e-commerce isn't just about showing products; it's about building trust. Our <strong>online store solutions in Bhubaneswar</strong> are integrated with reliable payment gateways, secure SSL certificates, and intuitive user interfaces that make shopping a breeze for your customers.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our E-commerce Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <ShoppingBag className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Custom MERN E-commerce</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Tailor-made, high-performance stores built from scratch for businesses with unique requirements.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Zap className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Fast-Track Shopify Stores</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Rapidly deploy professional stores with expert Shopify customization and app integration.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <CreditCard className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Payment Gateway Integration</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Secure integration with Razorpay, PhonePe, and other leading Indian payment providers.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Truck className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Inventory & Logistics</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Automated systems to manage your stock levels and streamline your shipping workflows.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Feature-Rich Stores Designed for Conversion</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Mobile-First Architecture:</strong> Optimized for smartphones to capture the growing mobile shopper market in Odisha.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Advanced Product Search:</strong> Intelligent filtering and search capabilities that help customers find what they want instantly.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Customer Loyalty Tools:</strong> Integrated discount engines, reward points, and abandoned cart recovery systems.</span>
              </li>
            </ul>

            <p className="mt-12">
              Ready to claim your share of the digital economy? As the leading <strong>e-commerce solution provider in Bhubaneswar</strong>, VELIX is here to help you scale your retail business with technology that works as hard as you do.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Start Selling Online</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Transform your business with a professional e-commerce platform built for growth and conversion.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Launch Your Store
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex justify-between items-center">
                <span>Platform Support</span>
                <span className="text-emerald-400">Shopify / MERN / Woo</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Security</span>
                <span className="text-emerald-400">100% Secure</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Performance</span>
                <span className="text-emerald-400">Load &lt; 1.5s</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;
