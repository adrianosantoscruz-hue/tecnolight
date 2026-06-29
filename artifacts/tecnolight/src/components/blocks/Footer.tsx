import React from "react";
import { Zap, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 text-3xl font-heading tracking-widest text-white mb-6">
              TECN<Zap className="w-6 h-6 text-primary fill-primary -mx-0.5" />LIGHT
            </div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Soluções elétricas corporativas e industriais. 30 anos iluminando o futuro com segurança, agilidade e confiança. Energia que conecta.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary hover:-translate-y-1 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4">
              {["Início", "Serviços", "Diferenciais", "Quem Somos", "Portfólio"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-4 text-white/60">
              <li>Instalações Elétricas</li>
              <li>Comércio de Materiais</li>
              <li>Manutenção Preventiva</li>
              <li>Laudos e NR10</li>
              <li>Montagem de Painéis</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Tecnolight Comércio e Instalações Elétricas Ltda. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
