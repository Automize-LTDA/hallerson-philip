import React from 'react';
import { motion } from 'framer-motion';
import { Target, User, TrendingUp, Activity } from 'lucide-react';
import personalProfile from '../assets/personal_profile.webp';

export default function About() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const indicators = [
    {
      icon: <User className="text-brand-red" size={24} />,
      title: 'Treinamento Personalizado',
      description: 'Cada exercício e série são planejados especificamente para a sua estrutura biomecânica e nível atual.',
    },
    {
      icon: <Activity className="text-brand-red" size={24} />,
      title: 'Acompanhamento Individual',
      description: 'Suporte de perto para garantir execução perfeita, segurança total e alta intensidade.',
    },
    {
      icon: <Target className="text-brand-red" size={24} />,
      title: 'Estratégia baseada em objetivos',
      description: 'Montagem de rotinas focadas no que você deseja alcançar: seja estética, saúde ou performance.',
    },
    {
      icon: <TrendingUp className="text-brand-red" size={24} />,
      title: 'Evolução Constante',
      description: 'Ajustes semanais de carga e estímulos para evitar platôs e assegurar progresso contínuo.',
    },
  ];

  return (
    <section id="sobre" className="relative py-12 md:py-16 bg-brand-black overflow-hidden border-t border-brand-gray-dark/30">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Column (Image with Neon Details) */}
          <motion.div
            initial={{ opacity: 0.01, x: isMobile ? -20 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
            className="lg:col-span-5 relative safari-anim-fix"
          >
            {/* Background glowing frame */}
            <div className="absolute -inset-4 rounded-2xl border border-brand-red/20 scale-95 opacity-80 pointer-events-none"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-red/30 to-transparent blur-lg opacity-45 pointer-events-none"></div>
            
            {/* Visual corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-brand-red pointer-events-none"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-brand-red pointer-events-none"></div>

            {/* Profile Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-brand-graphite shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
              <img
                src={personalProfile}
                alt="Hallerson Philip Personal Trainer"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0.01, y: isMobile ? 15 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red mb-3 block">
                Sobre Mim
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight text-white mb-6 uppercase">
                Muito Além de um Treino
              </h2>
              <p className="text-brand-gray-light leading-relaxed mb-6 text-sm md:text-base">
                Eu me chamo <strong className="text-white">Hallerson Philip</strong>. Minha missão como treinador é guiar você até a sua melhor versão física e mental. Eu não acredito em fichas de treino genéricas ou soluções mágicas.
              </p>
              <p className="text-brand-gray-light leading-relaxed mb-10 text-sm">
                Desenvolvo estratégias de treinamento sob medida para a sua realidade. Analiso sua rotina, suas limitações e seus objetivos para construir um planejamento sustentável e extremamente eficiente.
              </p>
            </motion.div>

            {/* Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {indicators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.01, y: isMobile ? 15 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-brand-graphite/40 border border-brand-gray-dark/50 hover:border-brand-red/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-red/5 border border-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-gray-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
