import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame, Zap, Award } from 'lucide-react';

export default function Plans() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const plans = [
    {
      name: 'Start',
      icon: <Zap className="text-brand-gray-light" size={24} />,
      tagline: 'Ideal para quem deseja iniciar uma mudança consistente na rotina.',
      features: [
        'Planilha de treino mensal personalizada',
        'Acesso ao aplicativo de acompanhamento',
        'Suporte para tirar dúvidas via WhatsApp (1x por semana)',
        'Orientação técnica básica de execução',
        'Ajustes de treino a cada 30 dias',
      ],
      recommended: false,
      whatsappText: 'Olá Hallerson! Conheci seu site e tenho interesse em iniciar no plano START. Como funciona?',
    },
    {
      name: 'Performance',
      icon: <Flame className="text-brand-aqua" size={24} />,
      tagline: 'Acompanhamento completo, dinâmico e focado em evolução constante.',
      features: [
        'Treino personalizado completo (Musculação + Cardio)',
        'Análise biomecânica de execução via vídeo',
        'Suporte diário prioritário via WhatsApp',
        'Planilha dinâmica de progressão de cargas',
        'Ajustes quinzenais conforme desempenho',
        'Dicas e orientações de rotina de hábitos',
      ],
      recommended: true,
      whatsappText: 'Olá Hallerson! Quero elevar meus resultados no plano recomendado PERFORMANCE. Pode me passar os detalhes?',
    },
    {
      name: 'Elite HP',
      icon: <Award className="text-brand-aqua" size={24} />,
      tagline: 'Experiência premium individualizada com contato direto diário.',
      features: [
        'Todos os recursos do plano Performance',
        'Acompanhamento e suporte ultra-prioritário',
        'Vídeo-chamada mensal individual de alinhamento',
        'Ajustes rápidos de treino para viagens e imprevistos',
        'Feedback detalhado em todos os vídeos de execução',
        'Grupo exclusivo / Vagas extremamente limitadas',
      ],
      recommended: false,
      whatsappText: 'Olá Hallerson! Gostaria de consultar a disponibilidade e valores para o acompanhamento premium ELITE HP.',
    },
  ];

  return (
    <section id="planos" className="relative py-12 md:py-16 bg-brand-black border-t border-brand-gray-dark/30 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-aqua mb-3 block">
            Acompanhamento
          </span>
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-white uppercase">
            Planos de Acompanhamento
          </h2>
          <div className="w-16 h-[2px] bg-brand-aqua mx-auto mt-4 glow-aqua"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.01, y: isMobile ? 15 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.15 }}
              className={`relative rounded-2xl bg-brand-graphite p-8 flex flex-col justify-between border ${
                plan.recommended
                  ? 'border-brand-aqua border-glow-aqua lg:-translate-y-4 lg:shadow-[0_15px_40px_rgba(0,240,255,0.15)]'
                  : 'border-brand-gray-dark/70 hover:border-brand-aqua/30 shadow-[0_10px_25px_rgba(0,0,0,0.4)]'
              } transition-all duration-300 group safari-anim-fix`}
            >
              {/* Highlight Ribbon for Recommended */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-aqua text-brand-black text-[10px] uppercase font-black tracking-widest rounded-full shadow-lg">
                  Mais Recomendado
                </div>
              )}

              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl uppercase tracking-wider text-white">
                    {plan.name}
                  </span>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.recommended ? 'bg-brand-aqua/10' : 'bg-brand-gray-dark/50'}`}>
                    {plan.icon}
                  </div>
                </div>

                <p className="text-xs text-brand-gray-light leading-relaxed mb-6">
                  {plan.tagline}
                </p>

                <div className="h-[1px] bg-brand-gray-dark/60 w-full mb-6"></div>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-brand-aqua' : 'text-brand-gray-light'}`}
                      />
                      <span className="text-xs text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <a
                  href={`https://wa.me/558189812396?text=${encodeURIComponent(plan.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-lg font-bold uppercase tracking-wider text-xs flex items-center justify-center transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-brand-aqua text-brand-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'bg-transparent text-white border border-brand-gray-dark hover:border-brand-aqua hover:bg-brand-aqua/5'
                  }`}
                >
                  Quero Começar
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
