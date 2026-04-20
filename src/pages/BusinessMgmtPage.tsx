import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, BarChart, CheckCircle2, Factory, PieChart, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessMgmtPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Business Management Systems Bhubaneswar | ERP & Workflow Automation"
        description="Optimize your business operations with Bhubaneswar's top software specialists. We build custom ERP, CRM, and workflow automation systems for SMEs and large industries in Odisha."
        keywords="Business management systems Bhubaneswar, ERP development Odisha, custom CRM Bhubaneswar, workflow automation solutions, operational software Odisha"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Industries / Business Management Systems</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Streamlining <br /> Operational <br /> <span className="text-zinc-400">Efficiency</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We build the back-office systems that power your growth. From custom ERPs to intelligent workflow automation, we help you manage your business with data-driven precision.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Bhubaneswar's Trusted Partner for Operational Excellence
            </h2>
            <p>
              As businesses in Bhubaneswar and Odisha scale, managing complex operations manually becomes an obstacle to growth. Scattered data, redundant tasks, and slow communication can bleed revenue. At VELIX, we specialize in building <strong>business management systems in Bhubaneswar</strong> that bring all your operations into a single, intuitive dashboard.
            </p>
            <p>
              Our <strong>custom ERP and CRM solutions in Odisha</strong> are designed to fit your unique business model. We don't believe in forcing our clients to adapt to rigid software; instead, we build software that adapts to your established workflows, making them faster, more transparent, and significantly more efficient.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our Operations Technology</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Workflow className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Workflow Automation</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Eliminate repetitive manual tasks and ensure consistent project execution with automated triggers and alerts.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Factory className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Inventory & Assets</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Real-time tracking of stock levels, equipment maintenance, and supply chain movements for Odisha-based manufacturers.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <BarChart className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Sales & CRM</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Centralized customer data and lead tracking to help your sales team close more deals and improve retention.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <PieChart className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Business Intelligence</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Dynamic dashboards and automated reporting that provide a clear view of your business health in real-time.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Why Modernize with VELIX?</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Holistic Visibility:</strong> See exactly what is happening in every department from one central hub.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Data-Driven Decisions:</strong> Stop guessing and start leading with actual operational data and insights.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Scalable Foundation:</strong> Build on a platform that grows with your business, from 10 to 1,000 employees.</span>
              </li>
            </ul>

            <p className="mt-12">
               Is your business ready for the next level of efficiency? As a leading <strong>operational software provider in Bhubaneswar</strong>, VELIX is here to help you eliminate chaos and replace it with streamlined digital systems.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Optimize Your Operations</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Get the custom tools you need to manage your business with confidence and clarity.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Request a Consultation
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessMgmtPage;
