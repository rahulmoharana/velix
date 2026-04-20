import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, BarChart3, CheckCircle2, Megaphone, Search, Share2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketingPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Digital Marketing Agency Bhubaneswar | SEO, SEM & Growth Strategy"
        description="Bhubaneswar's data-driven digital marketing agency. We specialize in SEO, local marketing, content strategy, and social media management for Odisha-based businesses."
        keywords="Digital marketing Bhubaneswar, SEO services Odisha, Content marketing Bhubaneswar, Social media management Odisha, Digital agency Bhubaneswar, Local SEO Odisha"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Services / Digital Marketing</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Strategic <br /> Growth <br /> <span className="text-zinc-400">& Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mt-4">
            We don't just generate noise; we generate revenue. Our data-driven marketing strategies are designed to put your brand in front of the right audience at the right time.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-zinc prose-lg max-w-none text-zinc-700 space-y-8">
            <h2 className="text-3xl font-display font-bold text-zinc-900 border-l-4 border-zinc-900 pl-6 py-2">
              Accelerate Your Business in the Bhubaneswar Market
            </h2>
            <p>
              In today's hyper-connected world, simply having a website is not enough. To truly succeed, your business needs to be visible where your customers are. At VELIX, we are recognized as a results-oriented <strong>digital marketing agency in Bhubaneswar</strong>. We combine technical expertise with creative strategies to help Odisha-based businesses dominate their local and global markets.
            </p>
            <p>
              Our approach to digital marketing is centered around ROI. We don't care about vanity metrics like "likes" and "shares" unless they contribute to your bottom line. Whether you're looking for <strong>SEO services in Bhubaneswar</strong> or a complete digital transformation, our team provides the insights and execution needed to achieve sustainable growth.
            </p>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Our Integrated Marketing Approach</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose my-12">
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Search className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Search Engine Optimization (SEO)</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Boost your organic rankings with local SEO, technical audits, and high-quality link building focused on "Bhubaneswar" keywords.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Target className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">PPC & Paid Search</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Laser-targeted Google Ads and Social Media advertising designed to deliver immediate leads and conversions.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Megaphone className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Content Marketing</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Authority-building articles, blogs, and case studies that educate your audience and establish your brand as an industry leader.</p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Share2 className="w-8 h-8 mb-4 text-zinc-900" />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Social Media Strategy</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Authentic engagement and brand storytelling across Instagram, LinkedIn, and Facebook tailored to the Odisha demographic.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">Local SEO Specialist in Odisha</h3>
            <p>
              For businesses serving the local Bhubaneswar community, <strong>Local SEO</strong> is the most important marketing investment you can make. We optimize your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across directories, and manage your local reviews to ensure you appear at the top of "near me" searches.
            </p>

            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Data-Driven Decisions:</strong> Every campaign is backed by thorough market research and competitor analysis.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Transparent Reporting:</strong> Regular, detailed reports showing exactly how your marketing budget is performing.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span><strong>Holistic Growth:</strong> We don't just run ads; we help optimize your entire conversion funnel.</span>
              </li>
            </ul>

            <p className="mt-12">
              Ready to grow your business with a <strong>digital solutions partner in Bhubaneswar</strong>? Let VELIX craft a marketing strategy that separates you from the competition and unlocks new revenue streams.
            </p>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Scale Your Brand Today</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Stop guessing. Start growing. Get a comprehensive digital marketing audit for your business.
            </p>
            <Link to="/contact">
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors">
                Request Growth Audit
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-6">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono block mb-2">Analysis</span>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-emerald-500" />
                </div>
                <div className="flex justify-between mt-1 text-[10px] font-mono">
                  <span>ROI Optimization</span>
                  <span>85%</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono block mb-2">Execution</span>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-blue-500" />
                </div>
                <div className="flex justify-between mt-1 text-[10px] font-mono">
                  <span>Campaign Scale</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
