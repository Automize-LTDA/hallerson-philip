import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Objectives() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);

  const objectives = [
    {
      title: 'Emagrecimento',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      description: 'Queima de gordura otimizada, aumento do metabolismo e recondicionamento metabólico.',
    },
    {
      title: 'Hipertrofia',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
      description: 'Ganho de massa muscular magra estruturado através de sobrecarga progressiva e periodização.',
    },
    {
      title: 'Condicionamento Físico',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop',
      description: 'Aumento da capacidade cardiorrespiratória, resistência muscular e energia para o dia a dia.',
    },
    {
      title: 'Definição Muscular',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop',
      description: 'Lapidação estética reduzindo o percentual de gordura e mantendo a densidade muscular.',
    },
    {
      title: 'Performance',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop',
      description: 'Desenvolvimento de força explosiva, agilidade e potência máxima para atletas e amadores.',
    },
    {
      title: 'Qualidade de Vida',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      description: 'Redução de dores articulares, melhora da postura, flexibilidade, qualidade do sono e saúde geral.',
    },
  ];

  const handlePurchaseRedirect = (title: string) => {
    const text = encodeURIComponent(`Olá Hallerson! Quero ter acesso ao Treino Rápido de ${title} pela taxa única de R$ 15,00.`);
    window.open(`https://wa.me/558189812396?text=${text}`, '_blank');
  };

  return (
    <section id="objetivos" className="relative py-12 md:py-16 bg-brand-black border-t border-brand-gray-dark/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red mb-3 block">
            Foco & Metas
          </span>
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-white uppercase">
            Objetivos de Treinamento
          </h2>
          <div className="w-16 h-[2px] bg-brand-red mx-auto mt-4 glow-red"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.01, y: isMobile ? 15 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }}
              onClick={() => setSelectedObjective(item.title)}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer border border-brand-gray-dark/40 shadow-2xl safari-anim-fix"
            >
              {/* Zooming Image Background */}
              <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Dark Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20 z-10 transition-opacity duration-300 group-hover:via-brand-black/80"></div>
              
              {/* Highlight Neon border indicator on card hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-brand-red/50 rounded-xl transition-all duration-300 z-20 pointer-events-none"></div>

              {/* Card Content */}
              <div className="absolute inset-0 z-25 p-8 flex flex-col justify-end">
                <span className="w-8 h-[2px] bg-brand-red mb-3 transition-all duration-300 group-hover:w-16 glow-red"></span>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-gray-light leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Premium Payment Modal */}
      <AnimatePresence>
        {selectedObjective && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedObjective(null)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 max-w-md w-full bg-brand-graphite/95 border border-brand-red/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] text-center overflow-hidden"
            >
              {/* Decorative Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-red/10 blur-xl rounded-full"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedObjective(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Fechar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Title & Tag */}
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-red mb-2 block">
                Treino Rápido HP
              </span>
              <h3 className="font-display font-black text-2xl tracking-tight text-white uppercase mb-2">
                {selectedObjective}
              </h3>
              
              <div className="w-12 h-[2px] bg-brand-red/40 mx-auto mb-6"></div>

              {/* Price Tag */}
              <div className="bg-brand-red/10 border border-brand-red/30 text-brand-red font-display font-black text-lg py-2 px-6 rounded-full inline-flex items-center gap-2 mb-6 glow-red select-none">
                <span className="text-xs font-semibold text-brand-red/75 uppercase tracking-wider">Acesso por:</span>
                R$ 15,00
              </div>

              {/* Notice text */}
              <p className="text-brand-gray-light text-xs md:text-sm leading-relaxed mb-6">
                Tenha acesso imediato a uma planilha completa de <strong className="text-white">Treino Rápido focado em {selectedObjective}</strong>, desenvolvida para entregar máxima eficiência metabólica e resultados consistentes em rotinas curtas de alta intensidade.
              </p>

              {/* Security info */}
              <div className="bg-brand-black/40 border border-brand-gray-dark/40 rounded-xl p-4 text-[10px] text-gray-400 text-left flex flex-col gap-2 mb-6 select-none">
                <div className="flex items-center gap-2 text-brand-red">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Taxa única, sem mensalidades recorrentes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>Acesso liberado de forma instantânea via WhatsApp.</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handlePurchaseRedirect(selectedObjective)}
                className="w-full py-4 bg-brand-red text-brand-black font-extrabold uppercase tracking-wider text-xs rounded-xl hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-pointer"
              >
                Liberar Meu Treino Rápido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
