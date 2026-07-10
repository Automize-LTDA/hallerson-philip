import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Calendar, CheckCircle2 } from 'lucide-react';
import results1 from '../assets/results_1.webp';
import results2 from '../assets/results_2.webp';

export default function Results() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const scrollRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      name: 'Gustavo Silveira',
      image: results1,
      objective: 'Hipertrofia & Definição',
      duration: '6 Meses',
      result: '+8.5 kg de Massa Muscular e -5% de Gordura Corporal',
    },
    {
      name: 'Larissa Medeiros',
      image: results2,
      objective: 'Definição & Tonificação',
      duration: '4 Meses',
      result: '-11.2 kg de Gordura e melhora expressiva na postura',
    },
    {
      name: 'Rodrigo Fontes',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop',
      objective: 'Condicionamento & Performance',
      duration: '3 Meses',
      result: '-6.5 kg de Gordura, eliminação de dores articulares e ganho de força',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="resultados" className="relative py-12 md:py-16 bg-brand-black border-t border-brand-gray-dark/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red mb-3 block">
              Cases de Sucesso
            </span>
            <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-white uppercase">
              Resultados que Falam por Si
            </h2>
            <div className="w-16 h-[2px] bg-brand-red mt-4 glow-red"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border border-brand-gray-dark hover:border-brand-red bg-brand-graphite/40 flex items-center justify-center text-white hover:text-brand-red transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border border-brand-gray-dark hover:border-brand-red bg-brand-graphite/40 flex items-center justify-center text-white hover:text-brand-red transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.01, scale: isMobile ? 0.98 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }}
              className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start bg-brand-graphite rounded-xl overflow-hidden border border-brand-red/20 hover:border-brand-red/60 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col h-[540px] safari-anim-fix"
            >
              {/* Photo Area */}
              <div className="relative h-72 overflow-hidden bg-brand-black flex-shrink-0">
                <img
                  src={item.image}
                  alt={`Resultado de ${item.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-[1.05]"
                />
                {/* Visual Label */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-brand-black/80 backdrop-blur-sm border border-brand-red/30 rounded text-[10px] uppercase font-bold tracking-widest text-brand-red">
                  Acompanhamento HP
                </div>
                {/* Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Data/Text Area */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase mb-4 tracking-wide group-hover:text-brand-red transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  {/* Performance Details Grid */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Award size={16} className="text-brand-red flex-shrink-0" />
                      <div className="text-xs">
                        <span className="text-brand-gray-light block font-semibold uppercase tracking-wider text-[10px]">Objetivo</span>
                        <span className="text-white text-sm font-medium">{item.objective}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-brand-red flex-shrink-0" />
                      <div className="text-xs">
                        <span className="text-brand-gray-light block font-semibold uppercase tracking-wider text-[10px]">Tempo</span>
                        <span className="text-white text-sm font-medium">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Major Result highlight */}
                <div className="mt-4 pt-4 border-t border-brand-gray-dark/50">
                  <div className="flex items-start gap-2 bg-brand-red/5 border border-brand-red/10 p-3 rounded-lg">
                    <CheckCircle2 size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-brand-red font-bold text-[9px] uppercase tracking-widest block mb-1">Resultado</span>
                      <p className="text-xs text-white font-semibold leading-normal">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
