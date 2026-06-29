import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Zap, Clock, Users, HardHat } from "lucide-react";
import brandImage from "@/assets/brand-image.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Differentials() {
  const points = [
    { icon: Shield, title: "Segurança Total", desc: "Conformidade rigorosa com normas técnicas (NR10, NBR5410). Risco zero para seu patrimônio." },
    { icon: CheckCircle, title: "Qualidade Comprovada", desc: "Fornecedores homologados e materiais de primeira linha para durabilidade máxima." },
    { icon: Zap, title: "Agilidade e Precisão", desc: "Resolução de problemas complexos com velocidade, sem comprometer os detalhes." },
    { icon: Users, title: "Equipe Especializada", desc: "Engenheiros e técnicos certificados com constante atualização." },
    { icon: Clock, title: "Prazos Cumpridos", desc: "Cronograma levado a sério. Entregamos a obra no tempo estipulado." },
    { icon: HardHat, title: "Supervisão Contínua", desc: "Acompanhamento de ponta a ponta em cada etapa da sua instalação." },
  ];

  return (
    <section id="differentials" className="py-24 bg-background relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-[80%] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-primary w-5 h-5" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Por que nós?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6">O Padrão <span className="text-primary">Tecnolight</span></h2>
            <p className="text-white/70 text-lg mb-10">A excelência não é uma promessa, é o resultado de três décadas de dedicação à engenharia elétrica comercial e industrial.</p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-card border border-white/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,193,7,0.1)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading text-white mb-2 tracking-wide">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} 
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={brandImage} alt="Tecnolight Brand Identity" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
