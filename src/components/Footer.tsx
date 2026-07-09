import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/558189812396?text=Ol%C3%A1%20Hallerson%2C%20conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado.";

  return (
    <footer className="bg-brand-black border-t border-brand-gray-dark/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top grid area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start pb-12 border-b border-brand-gray-dark/40">
          
          {/* Logo & ID */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#inicio" className="font-display font-black text-2xl tracking-tighter text-white">
              HALLERSON<span className="text-brand-aqua text-glow-aqua font-light">PHILIP</span>
            </a>
            <p className="text-xs text-brand-gray-light max-w-xs leading-relaxed">
              Desenvolvimento de programas de treinamento físico personalizados de alta performance voltados para transformação corporal e estética de elite.
            </p>
          </div>

          {/* Sitemap navigation links */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-aqua">Navegação</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#inicio" className="text-xs text-brand-gray-light hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="text-xs text-brand-gray-light hover:text-white transition-colors">Sobre</a>
              <a href="#metodo" className="text-xs text-brand-gray-light hover:text-white transition-colors">Método HP</a>
              <a href="#objetivos" className="text-xs text-brand-gray-light hover:text-white transition-colors">Objetivos</a>
              <a href="#resultados" className="text-xs text-brand-gray-light hover:text-white transition-colors">Resultados</a>
              <a href="#planos" className="text-xs text-brand-gray-light hover:text-white transition-colors">Planos</a>
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-aqua">Contato & Social</span>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-graphite border border-brand-gray-dark hover:border-brand-aqua text-brand-gray-light hover:text-brand-aqua flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-graphite border border-brand-gray-dark hover:border-brand-aqua text-brand-gray-light hover:text-brand-aqua flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                {/* SVG for WhatsApp */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
            <a
              href="mailto:contato@hallersonphilip.com.br"
              className="text-xs text-brand-gray-light hover:text-brand-aqua transition-colors mt-2 block"
            >
              contato@hallersonphilip.com.br
            </a>
          </div>

        </div>

        {/* Bottom copyright & core values banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] text-brand-gray-light/60">
              &copy; {currentYear} Hallerson Philip. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-brand-gray-light/40">
              Desenvolvido por {' '}
              <a
                href="https://automize-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-aqua hover:text-white transition-colors duration-300 font-semibold"
              >
                Automize
              </a>
            </p>
          </div>
          <div className="font-display font-black text-xs md:text-sm tracking-[0.35em] text-white/90">
            DISCIPLINA. <span className="text-brand-aqua text-glow-aqua">PERFORMANCE.</span> EVOLUÇÃO.
          </div>
        </div>

      </div>
    </footer>
  );
}
