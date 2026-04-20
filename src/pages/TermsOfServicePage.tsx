import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const TermsOfServicePage = () => {
  return (
    <div className="pt-24 pb-20 px-6 md:px-12">
      <SEO 
        title="Terms of Service | VELIX Digital Agency"
        description="Review the terms and conditions for using VELIX Digital Agency services. Understand our lead times, payment terms, and project delivery commitments."
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Legal / Compliance</span>
          <h1 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none text-zinc-900">
            Terms of <br /> Service
          </h1>
          
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-6 mt-8">
            <p className="text-sm font-mono uppercase tracking-widest text-zinc-400">Last Updated: April 20, 2026</p>
            
            <p>
               Welcome to VELIX. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">1. Services</h2>
            <p>
              VELIX provides web development, software engineering, mobile app development, and digital marketing services as described in individual project agreements.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">2. Project Engagement</h2>
            <p>
              All projects require a signed proposal or contract detailing the scope of work, timeline, and payment terms. Changes to the project scope may result in changes to the timeline and costs.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">3. Payment Terms</h2>
            <p>
              Payment schedules are defined in your specific project agreement. Generally, a deposit is required before work begins, with subsequent payments based on milestones or a monthly schedule.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">4. Intellectual Property</h2>
            <p>
              Upon full payment for services, all finalized work product created specifically for your project will be owned by you, unless otherwise specified in your project agreement.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">5. Limitation of Liability</h2>
            <p>
              VELIX shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with our services.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with jurisdiction in the courts of Bhubaneswar, Odisha.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:velixtechsolutions@gmail.com" className="text-zinc-900 underline">velixtechsolutions@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
