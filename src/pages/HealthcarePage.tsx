import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, CheckCircle2, HeartPulse, ShieldIcon, Stethoscope, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcarePage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Healthcare Software Development Bhubaneswar | Medical Solutions"
        description="Specialized healthcare software development in Bhubaneswar. We build patient management systems, telemedicine platforms, and diagnostic tools for clinics and hospitals in Odisha."
        keywords="Healthcare software development Bhubaneswar, hospital management system Bhubaneswar, telemedicine app Odisha, medical software Odisha, digital health solutions"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Industries / Healthcare Software</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Digital <br /> Health <br /> <span className="text-zinc-400">Innovations</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We build secure, compliant, and efficient software solutions for the healthcare industry. From patient management to advanced diagnostics, we empower medical professionals with technology.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Transforming Patient Care through Technology in Bhubaneswar
            </h2>
            <p>
              The healthcare sector in Bhubaneswar and across Odisha is undergoing a massive digital transformation. Hospitals, clinics, and diagnostic centers are increasingly relying on technology to streamline operations and improve patient outcomes. As a specialized provider of <strong>healthcare software development in Bhubaneswar</strong>, VELIX is at the forefront of this revolution.
            </p>
            <p>
              Our team understands the critical importance of data security and regulatory compliance in the medical field. Our <strong>medical software solutions in Odisha</strong> are built with double-layered encryption and HIPAA-inspired security standards to ensure patient confidentiality while providing intuitive workflows for doctors and administrative staff.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our Healthcare Solutions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Stethoscope className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Hospital Management Systems</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Comprehensive ERP solutions for managing appointments, billing, pharmacy, and patient records.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <HeartPulse className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Telemedicine Platforms</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Secure video consultation tools that allow doctors to reach patients anywhere in Odisha.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <ShieldIcon className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Patient Portals</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Self-service portals where patients can view reports, book appointments, and manage prescriptions.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Users className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Clinic Automation</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Lightweight booking and prescription management tools for independent clinics and specialists.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Reliability & Compliance</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Data Security:</strong> End-to-end encryption for all patient health information (PHI).</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Cloud Hosting:</strong> Scalable and secure AWS-based storage for medical records and diagnostic images.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Seamless Integration:</strong> Connecting with lab systems and pharmacy inventories for unified workflows.</span>
              </li>
            </ul>

            <p className="mt-12">
               Are you looking for a <strong>healthcare software partner in Bhubaneswar</strong> that understands the stakes? Join the digital health revolution with VELIX. We build the technology that allows you to focus on what matters most: your patients.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Innovate Your Healthcare Practice</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Enhance patient care and optimize clinic efficiency with our custom healthcare software solutions.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Consult an Expert
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 text-center">
              <span>Trusted by 20+ Clinics in Odisha</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;
