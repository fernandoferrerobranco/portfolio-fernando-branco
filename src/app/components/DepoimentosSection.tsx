import { Quote, Star } from 'lucide-react';
import { DemoBadge } from './DemoBadge';
import { Language, translations } from '../data/translations';

interface DepoimentosSectionProps {
  language: Language;
}

export function DepoimentosSection({ language }: DepoimentosSectionProps) {
  const t = translations[language].testimonials;
  
  const testimonials = [
    t.testimonial1,
    t.testimonial2,
    t.testimonial3,
  ];

  return (
    <section className="py-24 bg-slate-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-4 italic underline underline-offset-8 decoration-cyan-500/20">
            {t.title}
          </h2>
          <p className="text-slate-400 text-sm mb-4 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <DemoBadge language={language} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="group border border-slate-800 rounded-sm p-8 hover:border-cyan-500/30 hover:bg-slate-900/30 transition-all duration-300 relative"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-sm bg-slate-950 border border-cyan-500/20 flex items-center justify-center">
                <Quote className="text-cyan-400" size={20} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-cyan-400 fill-cyan-400" size={14} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-base font-black text-white mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-xs text-cyan-400 font-bold mb-1">
                  {testimonial.role}
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}