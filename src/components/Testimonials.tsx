import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Lucas Mendes',
      objective: 'Foco: Hipertrofia',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      comment: 'O acompanhamento com o Hallerson mudou totalmente a minha visão sobre treino. A correção biomecânica por vídeo evitou que eu me lesionasse e as planilhas de evolução de cargas fizeram meu rendimento dobrar em poucos meses. Profissional fora da curva!',
    },
    {
      name: 'Mariana Rocha',
      objective: 'Foco: Definição & Emagrecimento',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      comment: 'Estou no plano Performance há 4 meses e os resultados superaram qualquer expectativa. Consegui reduzir gordura corporal e finalmente ver definição no abdômen. O suporte diário dele via WhatsApp faz toda a diferença para manter a disciplina em alta.',
    },
    {
      name: 'Thiago Souza',
      objective: 'Foco: Performance & Condicionamento',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      comment: 'Treinava há anos, mas estava estagnado e sem motivação. Com a periodização personalizada do Método HP, consegui quebrar meus recordes pessoais de carga e melhorei muito meu condicionamento cardíaco. Vale cada centavo investido.',
    },
  ];

  return (
    <section id="depoimentos" className="relative py-24 bg-brand-black border-t border-brand-gray-dark/30 overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-aqua/3 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-aqua mb-3 block">
            Depoimentos
          </span>
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight text-white uppercase">
            Quem Treina Comprova
          </h2>
          <div className="w-16 h-[2px] bg-brand-aqua mx-auto mt-4 glow-aqua"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-brand-graphite border border-brand-gray-dark/60 hover:border-brand-aqua/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-8 text-brand-aqua/10 group-hover:text-brand-aqua/20 transition-colors duration-300 pointer-events-none">
                <Quote size={40} />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-aqua text-brand-aqua text-glow-aqua" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-brand-gray-light text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Student Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-gray-dark/50">
                <img
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  className="w-12 h-12 rounded-full object-cover object-center border border-brand-aqua/30 group-hover:border-brand-aqua transition-colors duration-300"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-brand-aqua font-medium tracking-wider uppercase block">
                    {item.objective}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
