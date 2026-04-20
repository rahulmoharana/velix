import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
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
    title: "React vs Angular: Which Framework for Your Project?",
    category: "Development",
    date: "March 28, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400">Insights & Articles</span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-zinc-900">
               The Blog
            </h2>
          </div>
          <Link to="/blog">
            <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-900 pb-2 hover:opacity-50 transition-all">
              View All Insights
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
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
                   Read More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
