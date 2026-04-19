import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

const TechConsultingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      <SEO 
        title="Technical Consulting | VELIX Tech"
        description="Expert mentorship and architectural guidance for complex student projects and startup MVPs."
        url="https://www.velixinfo.tech/services/technical-consulting"
      />
      
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4 block">Service / 04</span>
          <h1 className="text-5xl md:text-[6rem] lg:text-[8rem] font-display font-black uppercase tracking-tighter leading-none mb-8">
            Technical<br/><span className="text-zinc-500 italic">Consulting.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Expert mentorship and architectural guidance for complex student projects and startup MVPs, ensuring technical depth and success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 border-t border-zinc-800 pt-16">
          <div>
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-6">Our Approach</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Not every engagement needs full end-to-end development. Sometimes you just need an expert set of eyes. We offer strategic software consulting, codebase audits, and mentorship to help young entrepreneurs and students accelerate their digital solutions efficiently and cleanly.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {["Startup Tech Strategy", "Codebase & Security Audits", "MVP Roadmapping", "Developer Mentorship"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-zinc-900 pb-4">
                <span className="text-zinc-600 font-mono text-sm">0{i+1}</span>
                <span className="text-xl font-medium tracking-tight uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Service CTA */}
        <section className="mt-32 pt-20 border-t border-zinc-900 text-center">
           <h2 className="text-[10vw] md:text-[6vw] font-display font-black uppercase tracking-tighter leading-none mb-10">
              Ready to <br /><span className="text-zinc-500">Collaborate?</span>
           </h2>
           <Link to="/contact">
             <button className="btn-velix mx-auto btn-velix-lg px-12 md:px-20">
                <span>Start Your Project</span>
             </button>
           </Link>
        </section>
      </div>
    </div>
  );
};

export default TechConsultingPage;
