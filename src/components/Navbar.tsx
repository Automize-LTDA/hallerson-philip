import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['inicio', 'sobre', 'metodo', 'objetivos', 'resultados', 'planos', 'depoimentos'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio', id: 'inicio' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Método', href: '#metodo', id: 'metodo' },
    { name: 'Resultados', href: '#resultados', id: 'resultados' },
    { name: 'Planos', href: '#planos', id: 'planos' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] xl:w-[85%] max-w-6xl z-50 rounded-full transition-all duration-300 border ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-md border-brand-red/20 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.8)]'
          : 'bg-brand-black/40 backdrop-blur-sm border-brand-gray-dark/40 py-3'
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between flex-row flex-nowrap">
        {/* Logo */}
        <a href="#inicio" className="absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0 flex items-center gap-2 group flex-shrink-0">
          <img
            src={logoImg}
            alt="Hallerson Philip"
            className="h-16 md:h-20 xl:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
          />
        </a>

        <nav
          className="hidden xl:flex items-center gap-2 xl:gap-3 flex-nowrap flex-shrink-0 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative px-3.5 py-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors flex-shrink-0 group z-10 select-none ${
                activeSection === link.id ? 'text-brand-red' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.id ? (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-brand-red glow-red"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              ) : (
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="hoverIndicator"
                      className="absolute inset-0 bg-brand-red/10 border border-brand-red/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    />
                  )}
                </AnimatePresence>
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:block flex-shrink-0">
          <a
            href="#planos"
            className="relative px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider overflow-hidden group border border-brand-red/30 hover:border-brand-red text-white transition-colors duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            Começar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden ml-auto text-white hover:text-brand-red transition-colors focus:outline-none flex-shrink-0"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Floating Mobile Drawer Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[calc(100%+12px)] left-0 w-full bg-brand-black/95 backdrop-blur-md border border-brand-gray-dark/80 rounded-2xl p-6 shadow-2xl xl:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs uppercase tracking-widest font-bold transition-colors py-2 border-b border-brand-gray-dark/20 ${
                  activeSection === link.id ? 'text-brand-red' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#planos"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center py-3 bg-brand-red text-brand-black font-black uppercase tracking-wider text-[11px] rounded-lg hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              Começar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
