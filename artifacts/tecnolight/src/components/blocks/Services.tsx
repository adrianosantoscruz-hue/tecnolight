import React from "react";
import { motion } from "framer-motion";
import { Settings, Lightbulb, PenTool, Wrench, Zap, ShieldCheck } from "lucide-react";
import serviceInst from "@/assets/service-installation.png";
import serviceComm from "@/assets/service-commerce.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Services() {
  const services = [
    {
      title: "Instalações Elétricas",
      desc: "Execução de projetos elétricos industriais e comerciais com rigoroso padrão de qualidade, segurança e conformidade técnica.",
      icon: Settings,
      image: serviceInst,
      colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Comércio de Materiais",
      desc: "Fornecimento de equipamentos e suprimentos das melhores marcas para a sua obra não parar.",
      icon: Lightbulb,
      image: serviceComm,
      colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Manutenção Preventiva",
      desc: "Evite paradas inesperadas com nossos planos de manutenção programada.",
      icon: Wrench,
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Laudos e Projetos",
      desc: "Emissão de laudos técnicos (NR10) e desenvolvimento de projetos elétricos completos.",
      icon: PenTool,
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Eficiência Energética",
      desc: "Análise e modernização de infraestruturas para reduzir o consumo de energia.",
      icon: Zap,
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Sistemas de Proteção",
      desc: "Projetos e instalação de SPDA (Para-raios) e aterramentos seguros.",
      icon: ShieldCheck,
      colSpan: "md:col-span-2 lg:col-span-1"
    }
  ];

  return (
    <section id="services" className="py-24 bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-primary w-5 h-5" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">O que fazemos</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6">Nossos <span className="text-primary">Serviços</span></h2>
            <p className="text-white/70 text-lg">Soluções completas ponta a ponta, desde a venda dos melhores materiais até a execução especializada da sua infraestrutura elétrica.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-xl bg-background border border-white/5 flex flex-col ${service.colSpan}`}
            >
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20"></div>
                </div>
              )}
              <div className="relative z-10 p-8 flex flex-col h-full min-h-[280px]">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-auto shadow-lg shadow-primary/20">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl font-heading text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.desc}</p>
                  <a href="#contact" className="text-primary font-bold tracking-wider uppercase text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Saber Mais <Zap className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
