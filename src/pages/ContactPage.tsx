import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Contact } from '../components/Contact';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // NOTE: Insert your actual EmailJS Public Key string under the PUBLIC_KEY variable to authorize these calls.
      const SERVICE_ID = "service_gdi0zek";
      const TEMPLATE_DEV = "template_gs69yit";
      const TEMPLATE_USER = "template_wjychte";
      const PUBLIC_KEY = "svu4rzarZbeeplJk2";

      // 1. Send Lead Data to Developer (dev.rahulmoharana@gmail.com)
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_DEV,
        {
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          budget: formData.budget || 'Not specified',
          message: formData.message,
          to_email: 'dev.rahulmoharana@gmail.com'
        },
        PUBLIC_KEY
      );

      // 2. Send Acknowledgment to the User Who Filled the Form
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_USER,
        {
          to_name: formData.name,
          name: formData.name,
          to_email: formData.email,
          user_email: formData.email,
          email: formData.email,
          reply_to: 'dev.rahulmoharana@gmail.com'
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', budget: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(() => {
    // Reveal contact details with stagger
    gsap.from('.contact-info-item', {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.contact-info-grid',
        start: "top 80%",
      }
    });

    // Reveal form with scale effect
    gsap.from('.contact-form-container', {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: '.contact-form-container',
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black text-white selection:bg-white selection:text-black">
      <SEO 
        title="Get in Touch | Start Your Digital Transformation with VELIX"
        description="Ready to build something remarkable? Contact VELIX for premium web design, software development, and digital strategy in Bhubaneswar, Odisha."
        url="https://www.velixinfo.tech/contact"
      />
      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        <section className="px-4 md:px-12 mb-12 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[15vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-none mb-6 md:mb-8"
          >
            Let's Talk.
          </motion.h1>
          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Have a challenge for us? Whether you're a startup or a global brand, we're ready to build something remarkable.
          </p>
        </section>

        <section className="md:px-12 grid lg:grid-cols-2 gap-12 md:gap-20">
          <div className="contact-info-grid space-y-8 md:space-y-12 px-4 md:px-0">
            <div className="contact-info-item pr-0 md:pr-12 border-b border-white/10 pb-8 md:pb-12">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Location</h3>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-tight italic">Bhubaneswar, India</p>
            </div>
            
            <div className="contact-info-item pr-0 md:pr-12 border-b border-white/10 pb-8 md:pb-12">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Connect</h3>
              <a href="mailto:velixtechsolutions@gmail.com" className="text-xl md:text-2xl font-bold uppercase tracking-tight hover:italic transition-all inline-block break-all">velixtechsolutions<br className="md:hidden" />@gmail.com</a>
              <p className="text-zinc-500 mt-4 font-light text-sm">WhatsApp: <span className="text-white">+91 824 904 0033</span></p>
            </div>

            <div className="contact-info-item">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4">Social</h3>
              <div className="flex gap-6 md:gap-8 text-base md:text-lg font-bold uppercase italic">
                <a href="#" className="hover:text-white/50 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white/50 transition-colors">Twitter</a>
                <a href="#" className="hover:text-white/50 transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container bg-zinc-900/40 p-6 md:p-12 rounded-3xl border border-white/5 mx-4 md:mx-0 flex flex-col justify-center">
             <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8">Send a Message</h3>
             <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-600" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email *" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-600" 
                />
                <input 
                  type="text" 
                  placeholder="Budget Range (Optional)" 
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-600" 
                />
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-600 resize-none mt-2"
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-white text-black py-4 px-8 rounded-full font-bold uppercase tracking-widest mt-4 hover:bg-zinc-200 transition-colors w-full md:w-auto self-start text-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 font-mono text-xs mt-2">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 font-mono text-xs mt-2">Error sending message. Please try again.</p>
                )}
             </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;

