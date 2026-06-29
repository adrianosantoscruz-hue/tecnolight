import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye } from "lucide-react";

export function About() {
  const stats = [
    { value: "30", label: "Anos de História", suffix: "" },
    { value: "5", label: "Clientes Satisfeitos", suffix: "k+" },
    { value: "10", label: "Itens no Catálogo", suffix: "k" },
    { value: "100", label: "Índice de Qualidade", suffix: "%" }
  ];

  return (
    <section id="about" className="pt-24 bg-card relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading text-white mb-6"
          >
            Nossa <span className="text-primary">História</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Fundada com a missão de iluminar e energizar com total segurança, a Tecnolight cresceu de uma modesta loja para um dos maiores nomes em soluções elétricas integradas da região. Somos uma família que há 30 anos respira engenharia, garantindo que o seu projeto ganhe vida com eficiência e confiabilidade.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Target,
              title: "Missão",
              desc: "Fornecer materiais de altíssima qualidade e serviços de engenharia elétrica que garantam segurança e eficiência energética aos nossos clientes."
            },
            {
              icon: Eye,
              title: "Visão",
              desc: "Ser a referência nacional incontestável em infraestrutura elétrica comercial e industrial, inovando em tecnologia e atendimento."
            },
            {
              icon: Users,
              title: "Valores",
              desc: "Ética inegociável, comprometimento com prazos, segurança em primeiro lugar e respeito absoluto ao cliente e parceiros."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-heading text-white mb-4 tracking-wide">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl md:text-7xl font-heading font-bold mb-2 flex justify-center items-end">
                  {stat.value}<span className="text-3xl md:text-5xl mb-1 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
