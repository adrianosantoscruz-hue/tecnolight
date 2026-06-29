import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "A Tecnolight atende projetos residenciais?",
      a: "Nosso foco principal são instalações e projetos comerciais, corporativos e industriais. No entanto, fornecemos materiais elétricos de alta qualidade para todos os tipos de obras, inclusive residenciais."
    },
    {
      q: "Vocês realizam a montagem de painéis elétricos (QDC/QGBT)?",
      a: "Sim! Somos especialistas na montagem de Quadros de Comando (QDC) e Quadros Gerais de Baixa Tensão (QGBT), desenvolvidos sob medida conforme a necessidade da sua indústria, com certificação e laudo."
    },
    {
      q: "Os materiais comercializados possuem garantia?",
      a: "Absolutamente. Trabalhamos exclusivamente com marcas consagradas e todos os produtos possuem garantia de fábrica. Além disso, oferecemos garantia integral sobre os serviços de instalação que executamos."
    },
    {
      q: "Vocês emitem Laudos Técnicos e ART?",
      a: "Sim. Nossos engenheiros elétricos estão capacitados para emitir Anotação de Responsabilidade Técnica (ART) e laudos de adequação às normas NR10, SPDA, e aterramento."
    },
    {
      q: "Qual o raio de atendimento da Tecnolight?",
      a: "Atendemos presencialmente projetos em todo o estado, com equipes de plantão. Para fornecimento de materiais, realizamos envios logísticos para todo o território nacional."
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HelpCircle className="text-primary w-5 h-5" />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Dúvidas Comuns</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-heading text-white mb-6"
          >
            Perguntas <span className="text-primary">Frequentes</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-white/10 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
