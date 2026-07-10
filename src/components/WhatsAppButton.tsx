import React from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '../assets/whatsapp.svg';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/558189812396?text=Ol%C3%A1%20Hallerson%2C%20conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado.";

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Interactive button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center hover:scale-110 transition-all duration-300 drop-shadow-xl hover:drop-shadow-[0_0_15px_rgba(64,195,81,0.6)]"
        aria-label="Fale comigo no WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-12 h-12 object-contain"
        />
      </motion.a>
    </div>
  );
}
