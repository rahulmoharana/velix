import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, CheckCircle2, Code2, Globe, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Web Development Company in Bhubaneswar | Custom Responsive Websites"
        description="Premium web development services in Bhubaneswar, Odisha. We build lightning-fast, SEO-friendly React websites, corporate portals, and custom CMS solutions for global businesses."
        keywords="Web development company in Bhubaneswar, Website design services Odisha, React.js development Bhubaneswar, custom website development India, business website Bhubaneswar"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Services / Web Development</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Web <br /> Development <br /> <span className="text-zinc-400">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We build high-performance, visually stunning, and conversion-optimized websites that serve as the digital cornerstone for ambitious businesses in Bhubaneswar and beyond.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Bhubaneswar's Premier Web Development Agency
            </h2>
            <p>
              In the rapidly evolving digital landscape of 2026, your website is often the first point of contact between your brand and your potential customers. At VELIX, we don't just "build websites" — we engineer digital experiences that are fast, secure, and meticulously crafted to convert visitors into loyal clients. As a leading <strong>web development company in Bhubaneswar</strong>, we combine local market insights with global design standards to deliver results that matter.
            </p>
            <p>
              Our approach to web development is rooted in performance and scalability. We utilize modern frameworks like <strong>React.js, Next.js, and TypeScript</strong> to ensure that your platform is not only blazing fast but also future-proof. Whether you're a startup in Infocity or an established enterprise in Odisha, our custom web solutions are designed to scale alongside your business growth.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Why Your Business Needs Professional Web Development</h3>
            <p>
              Many businesses settle for generic templates that look the same and perform poorly. At VELIX, we believe your digital identity should be as unique as your business model. Our <strong>custom website design services in Odisha</strong> focus on eliminating the friction in user journeys. A well-developed website improves your search engine rankings, reduces bounce rates, and establishes authority in your industry.
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>SEO-First Architecture:</strong> We build with search engines in mind, ensuring your site ranks for key terms like "Digital solutions Bhubaneswar".</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Mobile-Responsive Design:</strong> Over 70% of traffic in Odisha comes from mobile devices. We ensure a flawless experience across all screens.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Lightning Fast Loading:</strong> We optimize every kilobyte, images, and script to ensure your site loads in under 2 seconds.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our Web Development Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Code2 className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Custom Web Apps</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Complex business logic transformed into intuitive dashboards and tools.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Globe className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Corporate Websites</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Refined digital presences for established firms seeking premium positioning.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Zap className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Landing Pages</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">High-conversion pages designed for specific marketing campaigns and ROI.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Rocket className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">CMS Integration</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Manage your content effortlessly with custom Headless CMS or WordPress setups.</p>
              </div>
            </div>

            <p className="mt-12">
              Ready to transform your digital presence? As the top <strong>web development agency in Bhubaneswar</strong>, we are here to help you navigate the complexities of the web. From initial wireframing to final deployment and maintenance, VELIX is your end-to-end partner for digital success.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Start Your Project Today</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Let's build a website that truly represents your brand and drives real business growth.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Book Free Consultation
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-mono">Modern Architecture</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-mono">SEO Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevPage;
