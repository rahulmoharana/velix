import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-xl mb-12 origin-center scale-x-105">LET'S BUILD</h2>
        <p className="text-2xl md:text-4xl text-zinc-400 font-light mb-16 leading-tight">
          Ready to elevate your digital presence? Join forces with <span className="text-white font-bold uppercase tracking-tighter">VELIX</span> and define the future of your industry.
        </p>
        <a 
          href="mailto:velixtechsolutions@gmail.com" 
          className="inline-block text-[8vw] md:text-3xl font-display font-bold uppercase tracking-tighter border-b-4 border-white pb-4 hover:opacity-50 transition-opacity break-all"
        >
          velixtechsolutions@gmail.com
        </a>
        <div className="mt-12 flex justify-center">
          <a 
            href="https://wa.me/918249040033" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-500 text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-green-400 transition-all shadow-2xl shadow-green-500/20"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
