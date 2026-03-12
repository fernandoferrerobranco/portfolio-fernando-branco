import { X, Download, FileText } from 'lucide-react';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'pt' | 'en';
}

const CV_LINKS = {
  pt: 'https://raw.githubusercontent.com/fernandoferrerobranco/portfolio-fernando-branco/main/public/Fernando%20Ferrero%20Branco%20-%20CV.pdf',
  en: 'https://raw.githubusercontent.com/fernandoferrerobranco/portfolio-fernando-branco/main/public/Fernando%20Ferrero%20Branco%20-%20CV%20-%20English.pdf',
};

export function CVDownloadModal({ isOpen, onClose, language }: CVDownloadModalProps) {
  console.log('🔵 CVDownloadModal renderizado:', { isOpen, language });
  
  if (!isOpen) return null;

  const translations = {
    pt: {
      title: 'Download do Currículo',
      subtitle: 'Escolha o idioma do seu CV',
      portuguese: 'Português',
      english: 'Inglês',
      downloadBtn: 'Download PDF',
    },
    en: {
      title: 'Resume Download',
      subtitle: 'Choose your CV language',
      portuguese: 'Portuguese',
      english: 'English',
      downloadBtn: 'Download PDF',
    },
  };

  const t = translations[language];

  const handleDownload = (lang: 'pt' | 'en') => {
    window.open(CV_LINKS[lang], '_blank');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md animate-in zoom-in-95 fade-in duration-200">
        <div className="bg-slate-900 border border-cyan-500/20 rounded-lg shadow-2xl shadow-cyan-500/10 mx-4">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-wide">
                {t.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition p-2 hover:bg-slate-800 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Portuguese CV */}
            <button
              onClick={() => handleDownload('pt')}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition">
                  <FileText className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-black text-white uppercase tracking-wide">
                    {t.portuguese}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">CV - Fernando Ferrero Branco</p>
                </div>
                <Download className="text-cyan-400 group-hover:translate-y-1 transition" size={20} />
              </div>
            </button>

            {/* English CV */}
            <button
              onClick={() => handleDownload('en')}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-black text-white uppercase tracking-wide">
                    {t.english}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Resume - Fernando Ferrero Branco</p>
                </div>
                <Download className="text-blue-400 group-hover:translate-y-1 transition" size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}