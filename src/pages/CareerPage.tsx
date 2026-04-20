import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, Code, Cpu, Globe, Laptop, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerPage = () => {
  const jobs = [
    { title: "Senior React Developer", type: "Full-Time", location: "Bhubaneswar / Remote", icon: <Code className="w-6 h-6" /> },
    { title: "Node.js Backend Engineer", type: "Full-Time", location: "Bhubaneswar", icon: <Cpu className="w-6 h-6" /> },
    { title: "UI/UX Product Designer", type: "Full-Time", location: "Remote", icon: <Laptop className="w-6 h-6" /> },
    { title: "Digital Marketing Specialist", type: "Contract", location: "Bhubaneswar", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Careers | Join the VELIX Team in Bhubaneswar"
        description="Build the future of digital experiences. Explore career opportunities in web development, software engineering, and digital marketing at VELIX Bhubaneswar."
        keywords="Careers at VELIX, software engineer jobs Bhubaneswar, web developer jobs Odisha, hire React developers Bhubaneswar, digital marketing vacancies Odisha"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Join Our Team</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Build the <br /> Future <br /> <span className="text-zinc-400">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4 mx-auto">
            We're looking for ambitious designers, developers, and thinkers to help us craft premium digital solutions for global businesses.
          </p>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
            <Zap className="w-10 h-10 mb-6 text-zinc-900" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Growth Mindset</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">We invest in our team's continuous learning and professional development.</p>
        </div>
        <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
            <Rocket className="w-10 h-10 mb-6 text-zinc-900" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Innovation First</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">Work with the latest tech stacks and solve real-world problems for global scales.</p>
        </div>
        <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
            <Laptop className="w-10 h-10 mb-6 text-zinc-900" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Radical Transparency</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">We value honest feedback, collaborative building, and clear communication.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-32">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter text-zinc-900">Open Positions</h2>
          <div className="h-1 w-20 bg-zinc-900 mt-4" />
        </div>
        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 border border-zinc-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-900 hover:text-white transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-white/10 flex items-center justify-center text-zinc-900 group-hover:text-white transition-colors">
                  {job.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{job.title}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">{job.type}</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">{job.location}</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 md:mt-0 px-6 py-3 border border-current rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all">
                Apply Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-white text-center flex flex-col items-center">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 max-w-3xl leading-none">
             Don't See a Perfect Fit? <br /> <span className="text-white/40">We Still Want to Hear From You.</span>
           </h2>
           <p className="text-zinc-400 mb-12 max-w-xl leading-relaxed">
             We are always on the lookout for exceptional talent. If you're passionate about what you do, send us your portfolio and resume.
           </p>
           <a href="mailto:velixtechsolutions@gmail.com">
           <button className="bg-white text-zinc-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-zinc-200 transition-colors">
             Email Your Resume
             <ArrowUpRight className="w-5 h-5" />
           </button>
           </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
