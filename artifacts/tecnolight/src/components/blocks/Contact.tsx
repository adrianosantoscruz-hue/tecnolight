import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img src={ctaBg} alt="Abstract Electrical Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="bg-card/50 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6 drop-shadow-md">Pronto para <span className="text-primary">Começar?</span></h2>
            <p className="text-white/80 mb-10 text-lg">Entre em contato hoje mesmo e descubra como a Tecnolight pode iluminar o futuro do seu projeto com segurança e eficiência máxima.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-bold">Telefone Fixo</div>
                  <div className="text-2xl font-heading tracking-wider text-white">(00) 0000-0000</div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-bold">WhatsApp</div>
                  <div className="text-2xl font-heading tracking-wider text-white">(00) 0000-0000</div>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-bold">E-mail</div>
                  <div className="text-xl font-heading tracking-wider text-white">contato@tecnolight.com.br</div>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-bold">Localização</div>
                  <div className="text-lg font-heading tracking-wider text-white">Cidade, Estado, Brasil</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-background p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
            
            <h3 className="text-3xl font-heading text-white mb-8 tracking-wide relative z-10">Envie uma Mensagem</h3>
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 block">Nome / Empresa</label>
                <input type="text" className="w-full bg-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Seu nome ou empresa" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 block">E-mail</label>
                  <input type="email" className="w-full bg-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 block">Telefone</label>
                  <input type="tel" className="w-full bg-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 block">Detalhes do Projeto ou Orçamento</label>
                <textarea className="w-full bg-card border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-32 resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <Button size="lg" className="w-full font-heading text-2xl h-16 tracking-wider mt-4 hover:scale-[1.02] transition-transform">
                Solicitar Contato
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
