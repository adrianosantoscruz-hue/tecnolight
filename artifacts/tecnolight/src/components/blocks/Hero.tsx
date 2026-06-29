import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import the generated hero image (assume we moved or alias it, here we use relative to src if it was put there, or we just use absolute if in public)
// According to tool result, it's at `artifacts/tecnolight/src/assets/hero-bg.png`
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Industrial Electrical Installation" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Zap className="w-3 h-3 fill-primary" /> 30 Anos de Experiência
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-[0.85] mb-6 drop-shadow-2xl"
          >
            Energia que <span className="text-primary block mt-2">Conecta.</span>
            Confiança que <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Ilumina.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed"
          >
            A Tecnolight é especialista em comércio e instalações elétricas de alta complexidade. 
            Soluções robustas, seguras e definitivas para o seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto font-heading text-2xl h-14 px-8 tracking-wider hover:scale-105 transition-transform group">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-heading text-2xl h-14 px-8 tracking-wider bg-white/5 border-white/20 text-white hover:bg-white/10">
                Nossos Serviços
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-card flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
              ))}
            </div>
            <div className="text-sm text-white/60">
              <strong className="text-white block text-lg font-heading tracking-wider">+500 Projetos</strong>
              Entregues com excelência
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
