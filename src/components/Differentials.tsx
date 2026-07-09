import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Trophy, Sliders, Activity, Flame } from 'lucide-react';

export default function Differentials() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const diffs = [
    {
      icon: <Sparkles className="text-brand-aqua" size={24} />,
      title: 'Treino desenvolvido para você',
      description: 'Prescrição baseada em sua biomecânica e nível, maximizando resultados e evitando lesões.',
    },
    {
      icon: <Eye className="text-brand-aqua" size={24} />,
      title: 'Correção técnica dos exercícios',
      description: 'Orientações precisas de execução, postura e respiração para que cada repetição realmente conte.',
    },
    {
      icon: <Activity className="text-brand-aqua" size={24} />,
      title: 'Acompanhamento próximo',
      description: 'Canal de comunicação direta para sanar dúvidas diárias sobre execução, dores ou adaptação de rotina.',
    },
    {
      icon: <Trophy className="text-brand-aqua" size={24} />,
      title: 'Estratégia de evolução',
      description: 'Planejamento periodizado que evolui de acordo com sua adaptação física, mantendo o estímulo sempre alto.',
    },
    {
      icon: <Flame className="text-brand-aqua" size={24} />,
      title: 'Motivação e disciplina',
      description: 'Estímulo ao foco mental e constância. A cobrança positiva necessária para você manter a consistência.',
    },
    {
      icon: <Sliders className="text-brand-aqua" size={24} />,
      title: 'Ajustes conforme sua evolução',
      description: 'Modificações frequentes de cargas, métodos de treino e metas com base em avaliações periódicas.',
    },
  ];

  return (
    <section id="diferenciais" className="relative py-12 md:py-16 bg-brand-black border-t border-brand-gray-dark/30 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-aqua/3 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-aqua mb-3 block">
            Diferenciais de Elite
          </span>
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-white uppercase">
            Por que treinar com Hallerson Philip?
          </h2>
          <div className="w-16 h-[2px] bg-brand-aqua mx-auto mt-4 glow-aqua"></div>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((item, index) => (
            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-brand-graphite/60 border border-brand-gray-dark/50 hover:border-brand-aqua/40 transition-all duration-300 group safari-anim-fix"
            >
              {/* Icon Container with subtle glow */}
              <div className="w-12 h-12 rounded-lg bg-brand-aqua/5 border border-brand-aqua/10 flex items-center justify-center mb-6 group-hover:bg-brand-aqua/10 group-hover:border-brand-aqua/30 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-display font-bold text-base uppercase tracking-wider mb-3 group-hover:text-brand-aqua transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-brand-gray-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
