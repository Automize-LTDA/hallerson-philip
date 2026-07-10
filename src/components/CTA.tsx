import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const whatsappLink = "https://wa.me/558189812396?text=Ol%C3%A1%20Hallerson%2C%20conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado.";

  return (
    <section id="contato" className="relative py-14 md:py-20 bg-brand-black border-t border-brand-gray-dark/30 overflow-hidden flex items-center justify-center">
      {/* Abstract graphics - light beams and glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] opacity-50"></div>
        
        {/* Futuristic grids or lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0.01, scale: isMobile ? 0.95 : 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-brand-red border border-brand-red/30 bg-brand-red/5 px-4 py-1.5 rounded-full">
            Vagas Limitadas
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0.01, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0 : 0.1 }}
          className="font-display font-black text-2xl md:text-4xl lg:text-5xl tracking-tight text-white uppercase mb-6 leading-tight"
        >
          Seu Próximo Nível <br />
          <span className="text-white">
            Começa Agora
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0.01 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0 : 0.2 }}
          className="max-w-xl text-brand-gray-light text-sm md:text-base leading-relaxed mb-10"
        >
          Pare de adiar seus objetivos. Comece uma estratégia de treinamento criada para transformar sua performance e seus resultados.
        </motion.p>

        {/* Large Button */}
        <motion.div
          initial={{ opacity: 0.01, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0 : 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-brand-red text-brand-black font-black uppercase tracking-widest text-sm rounded-lg hover:bg-white hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300 block"
          >
            Começar Minha Transformação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
