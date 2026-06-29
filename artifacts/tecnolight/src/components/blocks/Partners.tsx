import React from "react";
import { motion } from "framer-motion";
import { Plug } from "lucide-react";

export function Partners() {
  const brands = [
    "Siemens", "Schneider Electric", "WEG", "Prysmian", "Sil Fios", "Steck", "Intelbras", "Philips", "Osram", "Tramontina"
  ];

  return (
    <section className="py-20 bg-background border-b border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Plug className="text-primary w-5 h-5" />
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Marcas Parceiras</span>
        </motion.div>
        <h2 className="text-4xl font-heading text-white">Trabalhamos com os Melhores</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap">
          {brands.map((brand, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-heading text-white/20 mx-8 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
          {/* Repeat for seamless loop */}
          {brands.map((brand, idx) => (
            <span key={idx + brands.length} className="text-3xl md:text-5xl font-heading text-white/20 mx-8 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap ml-8">
          {brands.map((brand, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-heading text-white/20 mx-8 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
          {/* Repeat for seamless loop */}
          {brands.map((brand, idx) => (
            <span key={idx + brands.length} className="text-3xl md:text-5xl font-heading text-white/20 mx-8 uppercase tracking-widest hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 35s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
