import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, BookOpen, CheckCircle2, GraduationCap, Monitor, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const EdTechPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Education Technology Solutions Bhubaneswar | LMS & E-Learning"
        description="Leading EdTech software development in Bhubaneswar. We build Learning Management Systems (LMS), student portals, and virtual classroom software for schools and coaching centers in Odisha."
        keywords="EdTech solutions Bhubaneswar, LMS development Odisha, e-learning platform Bhubaneswar, school management system Odisha, virtual classroom software"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Industries / Education Technology</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Empowering <br /> Future <br /> <span className="text-zinc-400">Learners</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We build the tools that make education accessible and engaging. From enterprise LMS platforms to interactive student portals, we are redefining learning in Odisha.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Bhubaneswar's Hub for Educational Innovation
            </h2>
            <p>
              Bhubaneswar is rapidly emerging as the education capital of Eastern India. With hundreds of coaching centers, colleges, and training institutes, the demand for high-quality digital learning tools is at an all-time high. At VELIX, we specialize in <strong>EdTech solutions in Bhubaneswar</strong>, helping educational institutions modernize their teaching methods and reach more students.
            </p>
            <p>
              Our <strong>e-learning platforms in Odisha</strong> are designed to be intuitive for both teachers and students. We combine content delivery, student assessment, and administrative management into unified portals that enhance the learning experience and institutional efficiency.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our EdTech Offerings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <GraduationCap className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Custom LMS Platforms</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Feature-rich Learning Management Systems with course builders, quizzes, and certificate generation.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Video className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Virtual Classrooms</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Integrated video conferencing and collaborative whiteboards for real-time online teaching.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <BookOpen className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">School Management ERP</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Comprehensive tools for managing admissions, attendance, fees, and examination results.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Monitor className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Student Success Portals</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Personalized dashboards where students can track their progress and access resource libraries.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Built for Scale and Engagement</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Mobile Accessibility:</strong> Ensuring all learning materials are accessible on-the-go via smartphones.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Interactive Assessments:</strong> Automated grading and detailed student performance analytics.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Scalable Hosting:</strong> Capable of handling thousands of concurrent students during peak class hours.</span>
              </li>
            </ul>

            <p className="mt-12">
               Ready to take your coaching center or school to the next level? Partner with the leading <strong>EdTech solution provider in Bhubaneswar</strong>. Let VELIX build the platform that inspires the next generation of learners.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Modernize Your Teaching</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Unlock the potential of digital learning with a custom-built e-learning platform for your institute.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Book a Demo
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdTechPage;
