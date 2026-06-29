import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";

export function Portfolio() {
  const projects = [
    {
      title: "Iluminação Industrial",
      category: "Projeto e Execução",
      image: p1
    },
    {
      title: "Quadros de Comando",
      category: "Montagem de Painéis",
      image: p2
    },
    {
      title: "Substação de Energia",
      category: "Alta Tensão",
      image: p3
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-primary w-5 h-5" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Nosso Portfólio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading text-white mb-6">Energia em <span className="text-primary">Ação</span></h2>
          <p className="text-white/70 text-lg">Confira alguns dos projetos robustos que executamos com precisão e segurança para nossos clientes corporativos e industriais.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary font-bold uppercase tracking-wider text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.category}</span>
                <h3 className="text-3xl font-heading text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
