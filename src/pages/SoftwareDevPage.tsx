import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, CheckCircle2, Cpu, Database, Layers, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareDevPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Software Development Agency Bhubaneswar | Custom Enterprise Solutions"
        description="Elite software development in Bhubaneswar. We build scalable enterprise applications, custom ERPs, and automated business tools using Node.js, Python, and Cloud technologies."
        keywords="Software development agency Bhubaneswar, Custom software solutions Bhubaneswar, Enterprise software development, API development services Bhubaneswar, Software engineering Odisha"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Services / Software Development</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Software <br /> Engineering <br /> <span className="text-zinc-400">for Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We solve complex business problems with custom-engineered software solutions. From legacy modernization to cloud-native platforms, we build the engine of your business.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Transforming Complex Problems into Elegant Digital Tools
            </h2>
            <p>
              In today's competitive market, off-the-shelf software often falls short of meeting the unique operational needs of a growing business. As a premier <strong>software development agency in Bhubaneswar</strong>, VELIX specializes in building custom solutions that align perfectly with your workflows. We focus on eliminating technical debt and operational bottlenecks through intelligent automation and robust architecture.
            </p>
            <p>
              Our team of expert developers specializes in <strong>Node.js, Python, and Cloud Architecture</strong>. We don't just write code; we architect systems that are high-performing, secure, and infinitely scalable. Whether you need an internal ERP system, a customer-facing portal, or a complex API integration, we deliver enterprise-grade software that drives measurable ROI.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our Custom Software Solutions</h3>
            <p>
              We understand the local business environment in Odisha and combine it with international engineering standards. This makes us the go-to <strong>custom software solutions provider in Bhubaneswar</strong> for companies looking to digitize their operations. Our software is built with long-term maintenance and scalability in mind, ensuring your investment continues to pay off as you grow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Database className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Enterprise ERP & CRM</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Centralize your business data and optimize customer relationships with bespoke management systems.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Layers className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">API & Microservices</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Scalable back-end architectures that power seamless data exchange across your entire ecosystem.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <ShieldCheck className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Legacy Modernization</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Revitalize your existing systems with modern tech stacks without disrupting your current operations.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Cpu className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Automated Workflows</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Reduce manual labor and human error by automating repetitive business processes.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">The VELIX Engineering Advantage</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Advanced Security:</strong> We implement multi-layered security protocols to protect your sensitive business data from day one.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Cloud-Native Approach:</strong> Leveraging AWS and Azure for elastic scalability and 99.9% uptime.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Agile Delivery:</strong> Transparent development cycles with frequent updates and collaborative feedback.</span>
              </li>
            </ul>

            <p className="mt-12">
               Looking for "Enterprise software development" that actually fits your needs? Partner with VELIX. We are Bhubaneswar's trusted team for high-reliability software that empowers businesses to dream bigger and move faster.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Build the Future of Your Business</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Stop struggling with rigid tools. Get the custom software your business deserves.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Start Discovery Phase
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4 text-xs uppercase tracking-widest font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">Node.js / React</span>
                <span className="text-emerald-400">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Python / AI</span>
                <span className="text-emerald-400">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">AWS / Cloud</span>
                <span className="text-emerald-400">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevPage;
