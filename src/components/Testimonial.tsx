import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

const reviews = [
  {
    name: "Diana Johnston",
    date: "29 Aug, 2017",
    rating: 4.9,
    text: "Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and Easy process.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Edward Alexander",
    date: "29 Aug, 2017",
    rating: 4.9,
    text: "Great experience working with the team. They were highly professional and delivered the product well within the timeline.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Lauren Contreras",
    date: "29 Aug, 2017",
    rating: 4.9,
    text: "Exceptional service and outstanding communication. The final output exceeded our expectations in every possible way.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "David Smith",
    date: "05 Sep, 2018",
    rating: 5.0,
    text: "The process was incredibly smooth. They really took the time to understand our needs and built a solution that fits perfectly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Jenkins",
    date: "12 Nov, 2019",
    rating: 4.8,
    text: "A truly transparent agency. I knew what was happening at every stage, and the developers went above and beyond to ensure quality.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chang",
    date: "02 Mar, 2021",
    rating: 5.0,
    text: "Top tier coding standards and an incredibly responsive design team. Our conversions increased by 40% after the rebuild.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const angleStep = 360 / reviews.length;
  const containerRotation = -currentIndex * angleStep;

  return (
    <section className="py-8 md:py-20 bg-white overflow-hidden relative border-t border-zinc-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="mb-16 md:mb-24">
          <div className="w-12 h-1 bg-green-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-sans tracking-tight">
            Customer Reviews
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side (Circle Arc) */}
          {/* Mobile height 400px to allow text below. Desktop height 600px. */}
          <div className="relative w-full lg:w-[45%] h-[400px] md:h-[600px] flex items-center justify-start flex-shrink-0">
             
             {/* The Arc Boundary. Centered vertically, shifted far left so only right edge shows. */}
             <motion.div 
               animate={{ rotate: containerRotation }}
               transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
               className="absolute left-[-200px] md:left-[-350px] lg:left-[-300px] xl:left-[-350px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border border-zinc-200"
             >
                {reviews.map((review, i) => {
                  const itemAngle = i * angleStep;
                  const isActive = i === currentIndex;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute left-1/2 top-1/2 w-0 h-0"
                      style={{ transform: `rotate(${itemAngle}deg)` }}
                    >
                      {/* Radius projection */}
                      <div className="absolute w-0 h-0 translate-x-[200px] md:translate-x-[350px]">
                        {/* Counter rotation wrapper */}
                        <motion.div 
                          animate={{ rotate: -(containerRotation + itemAngle) }}
                          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                          className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                        >
                           <div className="relative flex items-center z-10 cursor-pointer" onClick={() => setCurrentIndex(i)}>
                             {/* Avatar */}
                             <motion.div 
                               animate={{ 
                                 scale: isActive ? 1.2 : 0.8,
                                 opacity: isActive ? 1 : 0.7 
                               }}
                               className={cn(
                                 "w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-colors duration-500", 
                                 isActive ? "border-green-500 shadow-xl" : "border-transparent"
                               )}
                             >
                                <img src={review.image} className="w-full h-full object-cover rounded-full" alt={review.name} />
                             </motion.div>
                             
                             {/* Name and Rating */}
                             <motion.div 
                               animate={{ 
                                 opacity: isActive ? 1 : 0, 
                                 x: isActive ? 0 : -20,
                                 pointerEvents: isActive ? 'auto' : 'none'
                               }}
                               className="absolute left-full ml-4 md:ml-6 whitespace-nowrap"
                             >
                               <h4 className="font-bold text-zinc-900 text-base md:text-lg">
                                 {review.name}
                               </h4>
                               <div className="flex items-center gap-1 text-xs md:text-sm text-zinc-400 mt-0.5">
                                 <Star className="w-3 h-3 text-green-500 fill-green-500" />
                                 <span className="text-zinc-500">{review.rating} on {review.date}</span>
                               </div>
                             </motion.div>
                           </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
             </motion.div>
          </div>

          {/* Right Side (Review Quote) */}
          <div className="w-full lg:w-[50%] mt-8 lg:mt-0 pl-0 lg:pl-12 xl:pl-20 relative z-20">
             <span className="text-[6rem] md:text-[8rem] font-serif text-zinc-200 leading-none absolute -top-8 md:-top-16 left-0 lg:left-8 -z-10 select-none">
               “
             </span>
             <div className="min-h-[220px] md:min-h-[280px] pt-8">
               <AnimatePresence mode="wait">
                 <motion.p
                   key={currentIndex}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="text-lg md:text-2xl lg:text-[1.75rem] italic font-serif leading-relaxed text-zinc-700"
                 >
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-zinc-900 pr-[2px]">
                      {reviews[currentIndex].text.charAt(0)}
                    </span>
                    {reviews[currentIndex].text.slice(1)}
                 </motion.p>
               </AnimatePresence>
             </div>
             
             {/* Mobile Manual Controls (Optional, just indicators) */}
             <div className="flex gap-2 mt-8 lg:hidden">
               {reviews.map((_, i) => (
                 <button 
                   key={i} 
                   onClick={() => setCurrentIndex(i)}
                   className={cn("w-2 h-2 rounded-full transition-all", i === currentIndex ? "bg-green-500 w-6" : "bg-zinc-300")}
                 />
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
