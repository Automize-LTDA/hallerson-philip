import React from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '../assets/whatsapp.svg';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/558189812396?text=Ol%C3%A1%20Hallerson%2C%20conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado.";

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Outer pulsing glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-brand-red/30 pointer-events-none"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
      
      {/* Interactive button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 bg-brand-black border border-brand-red rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:border-brand-red transition-all duration-300"
        aria-label="Fale comigo no WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-8 h-8 object-contain"
        />
      </motion.a>
    </div>
  );
}
