import { Linkedin, Send, Github } from 'lucide-react';
import { Language } from '../data/translations';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const title = language === 'pt' ? 'Vamos escalar' : "Let's scale";
  const titleHighlight = language === 'pt' ? 'Juntos?' : 'Together?';
  const copyright = `© ${new Date().getFullYear()} Fernando Branco • Ops Architecture`;

  return (
    <footer id="contato" className="py-32 bg-dark text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-12 italic uppercase tracking-tighter">
          {title}{' '}
          <span className="text-cyan-400 underline underline-offset-4 decoration-white/5">
            {titleHighlight}
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          <a
            href="mailto:fernando@g2g.org.br"
            className="text-slate-400 hover:text-white transition uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-3 bg-slate-950 px-6 py-3 border border-white/5"
          >
            <Send className="text-cyan-500" size={16} /> fernando@g2g.org.br
          </a>
          <a
            href="tel:11971550871"
            className="text-slate-400 hover:text-white transition uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-3 bg-slate-950 px-6 py-3 border border-white/5"
          >
            <svg
              className="text-cyan-500"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>{' '}
            (11) 97155-0871
          </a>
        </div>
        <div className="flex justify-center gap-12 text-3xl text-slate-600 mb-20">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all transform hover:scale-110"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://wa.me/5511971550871"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all transform hover:scale-110"
          >
            <svg
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 transition-all transform hover:scale-110"
          >
            <Github size={32} />
          </a>
        </div>
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.8em] font-medium">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
