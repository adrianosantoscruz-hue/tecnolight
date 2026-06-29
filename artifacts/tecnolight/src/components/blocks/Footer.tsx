import React from "react";
import { Zap, MessageCircle } from "lucide-react";

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
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <MessageCircle className="w-4 h-4 text-primary" />
              <a href="https://wa.me/5521972443666" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(21) 97244-3666</a>
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
