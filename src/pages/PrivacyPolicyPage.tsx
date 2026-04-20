import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-24 pb-20 px-6 md:px-12">
      <SEO 
        title="Privacy Policy | VELIX Digital Agency"
        description="Our commitment to protecting your privacy. Read the VELIX Digital Agency privacy policy to understand how we collect, use, and safeguard your data."
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Legal / Compliance</span>
          <h1 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none text-zinc-900">
            Privacy <br /> Policy
          </h1>
          
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-6 mt-8">
            <p className="text-sm font-mono uppercase tracking-widest text-zinc-400">Last Updated: April 20, 2026</p>
            
            <p>
              At VELIX, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us about our services. This may include your name, email address, phone number, and business details.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to send you marketing communications that we believe may be of interest to you.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">5. Your Choices</h2>
            <p>
              You may opt out of receiving marketing communications from us at any time by following the instructions in those communications or by contacting us directly.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 pt-6">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:velixtechsolutions@gmail.com" className="text-zinc-900 underline">velixtechsolutions@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
