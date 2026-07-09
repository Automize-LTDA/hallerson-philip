import React from 'react';
import { motion } from 'framer-motion';

export default function Method() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const stages = [
    {
      num: '01',
      title: 'Avaliação',
      description: 'Análise aprofundada do seu condicionamento físico, histórico de lesões, rotina diária, padrão de sono, nutrição e metas de curto/longo prazo.',
    },
    {
      num: '02',
      title: 'Estratégia',
      description: 'Desenvolvimento do seu cronograma de treinos e planilhas individuais. Ajuste exato das variáveis de volume, intensidade e periodização.',
    },
    {
      num: '03',
      title: 'Execução',
      description: 'Treinos estruturados com orientação técnica de execução, correção postural, controle de cadência e foco em alta performance.',
    },
    {
      num: '04',
      title: 'Evolução',
      description: 'Mapeamento frequente de bioimpedância ou dobras cutâneas. Ajustes e repactuação de metas para garantir resultados progressivos.',
    },
  ];

  return (
    <section id="metodo" className="relative py-12 md:py-16 bg-brand-black border-t border-brand-gray-dark/30">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-brand-aqua/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-aqua mb-3 block">
            A Metodologia
          </span>
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-white uppercase">
            Método HP
          </h2>
          <div className="w-16 h-[2px] bg-brand-aqua mx-auto mt-4 glow-aqua"></div>
        </div>

        {/* Stages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.01, y: isMobile ? 15 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-xl bg-brand-graphite border border-brand-gray-dark/60 transition-all duration-300 hover:border-brand-aqua/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] group overflow-hidden safari-anim-fix"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-aqua/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Large Number */}
              <div className="font-display font-black text-5xl md:text-6xl text-brand-aqua/20 group-hover:text-brand-aqua group-hover:text-glow-aqua transition-colors duration-300 mb-6">
                {stage.num}
              </div>

              {/* Card Title */}
              <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-aqua group-hover:scale-150 transition-transform duration-300"></span>
                {stage.title}
              </h3>

              {/* Card Description */}
              <p className="text-brand-gray-light text-sm leading-relaxed relative z-10">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
