import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Apple, ArrowUpRight, CheckCircle2, Smartphone, Tablet, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppsPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Mobile App Development Bhubaneswar | iOS & Android Solutions"
        description="Top-rated mobile app development in Bhubaneswar. We create high-performance iOS, Android, and cross-platform apps using React Native and Flutter for startups and enterprises."
        keywords="Mobile app development Bhubaneswar, Android app development Odisha, iOS app development Bhubaneswar, React Native developers Odisha, cross-platform apps India"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Services / Mobile App Development</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Intuitive <br /> Mobile <br /> <span className="text-zinc-400">Applications</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We build mobile experiences that users love. From native iOS and Android to high-performance cross-platform apps, we put your business in your customers' pockets.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Bhubaneswar's Trusted Mobile App Development Partner
            </h2>
            <p>
              With over 80% of digital time being spent on mobile devices, having a dedicated mobile app is no longer a luxury — it's a strategic necessity. At VELIX, we are recognized as the premier provider of <strong>mobile app development in Bhubaneswar</strong>. We help brands bridge the gap between their services and their mobile-first customers through high-performance, aesthetically pleasing mobile applications.
            </p>
            <p>
              Our development process is designed to deliver excellence at every stage. From conceptualization and UI/UX design to development, testing, and App Store/Play Store deployment, our <strong>Android and iOS developers in Odisha</strong> ensure your app meets the highest standards of quality and performance.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Technologies We Use</h3>
            <p>
              Choosing the right tech stack is critical for your app's success. We specialize in modern frameworks that offer the best balance of performance, development speed, and cost-effectiveness. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Smartphone className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">React Native</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">High-performance cross-platform apps with a single codebase for both iOS and Android.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Apple className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Native iOS</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Swift-based premium applications optimized for iPhone and Apple ecosystem devices.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Smartphone className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Native Android</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Kotlin-powered robust applications built to perform on the massive Android user base in India.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Tablet className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Progressive Web Apps</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Fast, installable web apps that provide an app-like experience without the friction of a store download.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Why Choose VELIX for Mobile Apps?</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>User-Centric Design:</strong> We prioritize intuitive navigation and engaging interfaces that keep users coming back.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Scalable Architecture:</strong> Our apps are built to handle thousands of concurrent users from day one.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Continuous Support:</strong> We provide ongoing maintenance and feature updates post-launch to ensure your app stays ahead.</span>
              </li>
            </ul>

            <p className="mt-12">
              Whether you're looking for <strong>"Mobile app development Bhubaneswar"</strong> for a startup MVP or an enterprise solution to manage internal logistics, VELIX is your trusted partner. Let's build something extraordinary together.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Launch Your Mobile Vision</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Experience the power of a custom mobile app designed and built for your specific business goals.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Get a Custom Quote
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">App Stores</span>
                <span className="text-sm font-bold">100% Approval</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Performance</span>
                <span className="text-sm font-bold">60 FPS Fluid</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppsPage;
