import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowUpRight, Calendar, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const allPosts = [
  {
    title: "Top 10 Web Development Trends in 2026",
    category: "Technology",
    date: "April 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "How to Choose a Software Development Company in Bhubaneswar",
    category: "Business",
    date: "April 10, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Complete Guide to E-commerce Website Development",
    category: "E-commerce",
    date: "April 05, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "React vs Angular: Which Framework for Your Project?",
    category: "Development",
    date: "March 28, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Transformation for Odisha Businesses",
    category: "Strategy",
    date: "March 20, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Building Scalable APIs with Node.js and TypeScript",
    category: "Technical",
    date: "March 15, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  }
];

const BlogPage = () => {
  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Blog & Insights | VELIX Digital Agency Bhubaneswar"
        description="Stay updated with the latest trends in web development, software engineering, and digital marketing. Expert insights from Bhubaneswar's top digital agency."
        keywords="Web development blog Bhubaneswar, software engineering insights Odisha, digital marketing trends 2026, tech tutorials Bhubaneswar"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Insights & Intelligence</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
            Digital <br /> Knowledge <br /> <span className="text-zinc-400">Base</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-8">
            <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
              Exploring the intersection of technology, design, and business strategy to help you navigate the digital landscape.
            </p>
            <div className="relative max-w-sm w-full">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
               <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zinc-900 transition-colors"
               />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {allPosts.map((post, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                {post.category}
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                 <div className="flex items-center gap-2">
                   <Calendar className="w-3 h-3" />
                   {post.date}
                 </div>
                 <div className="flex items-center gap-2">
                   <Clock className="w-3 h-3" />
                   {post.readTime}
                 </div>
              </div>
              <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-zinc-500 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                 Read Article <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pagination Placeholder */}
      <div className="mt-20 flex justify-center gap-4">
         <button className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold">1</button>
         <button className="w-12 h-12 rounded-xl bg-zinc-50 text-zinc-400 flex items-center justify-center font-bold hover:bg-zinc-100 transition-colors">2</button>
         <button className="w-12 h-12 rounded-xl bg-zinc-50 text-zinc-400 flex items-center justify-center font-bold hover:bg-zinc-100 transition-colors">3</button>
      </div>
    </div>
  );
};

export default BlogPage;
