import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.jpg';

export default function Hero() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background Image with dramatic overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Treinamento de Alta Performance"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Dark radial and linear gradients for deep cinematic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black/30"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-black/90"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-12 md:pt-44 md:pb-16 text-center flex flex-col items-center justify-center">


        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0.01, y: isMobile ? 15 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.1 : 0.4 }}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6 uppercase"
        >
          Supere Seus <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua to-cyan-400 text-glow-aqua font-black">
            Limites
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.6 : 1, delay: isMobile ? 0.3 : 0.7 }}
          className="max-w-xl text-sm md:text-base lg:text-lg text-brand-gray-light font-normal leading-relaxed mb-10"
        >
          Treinamento personalizado para quem busca resultado, performance e uma verdadeira transformação física.
        </motion.p>

        {/* Professional ID Subtext */}
        <motion.div
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.6 : 1, delay: isMobile ? 0.4 : 0.9 }}
          className="mb-8 flex flex-col items-center"
        >
          <p className="font-display font-bold text-xs tracking-[0.2em] text-white uppercase">
            Personal Trainer
          </p>
          <p className="text-[10px] tracking-wider text-brand-aqua/80 mt-1">
            Performance & Transformação Corporal
          </p>
        </motion.div>

        {/* Actions CTA Buttons */}
        <motion.div
          initial={{ opacity: 0.01, y: isMobile ? 15 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.5 : 1.1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/558189812396?text=Ol%C3%A1%20Hallerson%2C%20conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-aqua text-brand-black font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Começar Minha Transformação
          </a>
          <a
            href="#metodo"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white font-bold uppercase tracking-wider text-xs rounded-lg border border-brand-aqua/40 hover:border-brand-aqua hover:bg-brand-aqua/5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Conhecer o Método
          </a>
        </motion.div>
      </div>
    </section>
  );
}
