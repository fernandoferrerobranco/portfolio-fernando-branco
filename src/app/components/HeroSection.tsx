import { useEffect, useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { loadData } from '../../lib/storage';
import { useAdmin } from '../context/AdminContext';
import { applyTextColor, applyBackgroundColor, applyFieldStyle } from '../utils/applyStyles';
import { CVDownloadModal } from './CVDownloadModal';
import avatarImg from 'figma:asset/0e465f0946ecad4cff3e8f42683c0768576255ae.png';

interface HeroSectionProps {
  language: Language;
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language].hero;
  const [data, setData] = useState(loadData());
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop'); // 📱 NOVO
  const [isCVModalOpen, setIsCVModalOpen] = useState(false); // 📄 Modal do CV
  const [animationKey, setAnimationKey] = useState(0); // 🎬 REPLAY de animações
  const { activeSection } = useAdmin(); // 🎯 Highlight

  console.log('🟢 HeroSection renderizado! isCVModalOpen:', isCVModalOpen);

  useEffect(() => {
    // Recarregar dados quando storage mudar
    const handleStorageChange = () => {
      setData(loadData());
    };

    // Listener para preview instantâneo (admin)
    const handleAdminPreview = (e: any) => {
      if (e.detail) {
        console.log('🎨 HeroSection recebeu evento:', {
          avatar: e.detail.hero.avatarUrl?.substring(0, 50) + '...',
          bgColor: e.detail.hero.backgroundColor,
          bgGradient: e.detail.hero.backgroundGradient,
          bgImage: e.detail.hero.backgroundImage?.substring(0, 50) + '...',
        });
        setData(e.detail);
      }
    };

    // 📱 Listener para modo de preview (desktop/mobile)
    const handlePreviewMode = (e: any) => {
      if (e.detail) {
        console.log('📱 Modo preview alterado:', e.detail);
        setPreviewMode(e.detail);
      }
    };

    // 🎬 Listener para replay de animações quando efeito muda
    const handleEffectChange = () => {
      console.log('🎬 Replay de animações!');
      setAnimationKey(prev => prev + 1); // Força re-render com key diferente
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('admin-preview-update', handleAdminPreview);
    window.addEventListener('admin-preview-mode', handlePreviewMode); // 📱 NOVO
    window.addEventListener('admin-effect-change', handleEffectChange); // 🎬 REPLAY
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('admin-preview-update', handleAdminPreview);
      window.removeEventListener('admin-preview-mode', handlePreviewMode); // 📱 NOVO
      window.removeEventListener('admin-effect-change', handleEffectChange); // 🎬 REPLAY
    };
  }, [language]); // 🌍 Re-executar quando o idioma mudar

  // Usar dados do storage
  const { hero, heroStyles } = data;

  // 🎯 Highlight visual quando componente está ativo
  const getHighlightClass = (componentId: string) => {
    const isActive = activeSection === componentId;
    if (componentId === 'hero-badge') {
      console.log('🎯 Badge highlight:', { activeSection, componentId, isActive });
    }
    return isActive
      ? 'ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
      : '';
  };

  // 📱 Helper: Retornar fontSize correto baseado no modo
  const getFontSize = (style: any) => {
    const result = previewMode === 'mobile' && style.fontSizeMobile 
      ? style.fontSizeMobile 
      : style.fontSize;
    
    // Debug detalhado
    if (style === heroStyles.title1) {
      console.log('🎯 getFontSize para title1:', {
        previewMode,
        fontSizeMobile: style.fontSizeMobile,
        fontSize: style.fontSize,
        result,
      });
    }
    
    return result;
  };

  // 🌍 Selecionar campos baseado no idioma atual
  const displayData = {
    badge: language === 'pt' ? hero.badge_pt : hero.badge_en,
    title1: language === 'pt' ? hero.title1_pt : hero.title1_en,
    title2: language === 'pt' ? hero.title2_pt : hero.title2_en,
    title3: language === 'pt' ? hero.title3_pt : hero.title3_en,
    title4: language === 'pt' ? hero.title4_pt : hero.title4_en,
    location: language === 'pt' ? hero.location_pt : hero.location_en,
    email: hero.email,
    button1Text: language === 'pt' ? hero.button1Text_pt : hero.button1Text_en,
    button2Text: language === 'pt' ? hero.button2Text_pt : hero.button2Text_en,
    cardName: language === 'pt' ? hero.cardName_pt : hero.cardName_en,
    cardRole: language === 'pt' ? hero.cardRole_pt : hero.cardRole_en,
  };

  // Determinar background (prioridade: imagem > gradiente OU cor > padrão)
  const backgroundStyle: React.CSSProperties = {};
  
  if (hero.backgroundImage) {
    // Se tem imagem, usar como background
    backgroundStyle.backgroundImage = `url(${hero.backgroundImage})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  } else if (hero.backgroundColor && hero.backgroundColor.trim() !== '') {
    // Se tem COR específica, usar (prioridade!)
    backgroundStyle.background = hero.backgroundColor;
  } else if (hero.backgroundGradient && hero.backgroundGradient.trim() !== '') {
    // Se tem gradiente, usar
    backgroundStyle.background = hero.backgroundGradient;
  } else {
    // Padrão: gradiente azul escuro
    backgroundStyle.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
  }

  return (
    <header 
      className="min-h-[600px] md:min-h-[700px] flex items-center pt-20 pb-16 md:pb-24 relative overflow-hidden"
      style={backgroundStyle}
      id="hero"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div data-aos="fade-right" className="order-2 md:order-1">
          {/* Badge - 📦✨ COM CONTAINER E EFFECTS */}
          <div 
            key={`badge-${animationKey}`} // 🎬 Key dinâmico para replay
            id="hero-badge"
            className={`inline-block transition-all ${getHighlightClass('hero-badge')}`}
            style={{
              // 📦 CONTAINER: Padding e Border Radius (primeiro)
              paddingLeft: heroStyles.badgeContainer?.paddingLeft || heroStyles.badgeContainer?.paddingX || '12px',
              paddingRight: heroStyles.badgeContainer?.paddingRight || heroStyles.badgeContainer?.paddingX || '12px',
              paddingTop: heroStyles.badgeContainer?.paddingTop || heroStyles.badgeContainer?.paddingY || '4px',
              paddingBottom: heroStyles.badgeContainer?.paddingBottom || heroStyles.badgeContainer?.paddingY || '4px',
              marginLeft: heroStyles.badgeContainer?.marginLeft || '0px',
              marginTop: heroStyles.badgeContainer?.marginTop || '0px',
              marginRight: heroStyles.badgeContainer?.marginRight || '0px',
              marginBottom: '20px', // ✅ ESPAÇAMENTO FIXO DOS TÍTULOS
              borderRadius: heroStyles.badgeContainer?.borderRadius || '0.125rem',
              // 🎨 BORDA: Cor ou Gradiente (ANTES do background!)
              ...(heroStyles.badgeElement?.borderColor?.includes('gradient') 
                ? {
                    // Gradiente: usar border-image
                    borderStyle: 'solid',
                    borderWidth: heroStyles.badgeContainer?.borderWidth || '1px',
                    borderImage: `${heroStyles.badgeElement.borderColor} 1`,
                    borderColor: 'transparent', // ✅ Limpar para não conflitar
                  }
                : {
                    // Cor sólida: usar borderColor normal
                    borderWidth: heroStyles.badgeContainer?.borderWidth || '1px',
                    borderStyle: 'solid',
                    borderColor: heroStyles.badgeElement?.borderColor || 'rgba(6, 182, 212, 0.2)',
                    borderImage: 'none', // ✅ Limpar border-image
                  }
              ),
              // 🎨 ELEMENTOS: Background (DEPOIS da borda!)
              ...applyBackgroundColor(heroStyles.badgeElement?.backgroundColor || 'rgba(6, 182, 212, 0.1)'),
              // ✨ EFFECTS STYLES
              boxShadow: heroStyles.badgeEffects?.boxShadow || 'none',
              opacity: heroStyles.badgeEffects?.opacity || '1',
              // ⚡ TRANSIÇÃO (usar propriedades individuais para evitar conflito)
              transitionProperty: 'all',
              transitionDuration: heroStyles.badgeEffects?.transitionDuration || '300ms',
              transitionTimingFunction: heroStyles.badgeEffects?.transitionEasing || 'ease',
              transitionDelay: heroStyles.badgeEffects?.transitionDelay || '0ms',
              // ✨ EFEITOS AVANÇADOS
              filter: [
                heroStyles.badgeEffects?.filterBlur ? `blur(${heroStyles.badgeEffects.filterBlur})` : '',
                heroStyles.badgeEffects?.filterBrightness ? `brightness(${heroStyles.badgeEffects.filterBrightness})` : '',
                heroStyles.badgeEffects?.filterGrayscale ? `grayscale(${heroStyles.badgeEffects.filterGrayscale})` : '',
              ].filter(Boolean).join(' ') || 'none',
              backdropFilter: heroStyles.badgeEffects?.backdropBlur 
                ? `blur(${heroStyles.badgeEffects.backdropBlur})` 
                : undefined,
              // 🔄 TRANSFORMAÇÕES
              transform: [
                heroStyles.badgeEffects?.scale && heroStyles.badgeEffects.scale !== '1' 
                  ? `scale(${heroStyles.badgeEffects.scale})` 
                  : '',
                heroStyles.badgeEffects?.rotate && heroStyles.badgeEffects.rotate !== '0deg' 
                  ? `rotate(${heroStyles.badgeEffects.rotate})` 
                  : '',
              ].filter(Boolean).join(' ') || 'none',
              // 🎬 ANIMAÇÃO DE ENTRADA
              animation: (() => {
                const animations = [];
                
                // Animação de scroll (entrada)
                if (heroStyles.badgeEffects?.scrollAnimation && heroStyles.badgeEffects.scrollAnimation !== 'none') {
                  animations.push(
                    `${heroStyles.badgeEffects.scrollAnimation} ${heroStyles.badgeEffects.scrollAnimationDuration || '600ms'} ${heroStyles.badgeEffects.scrollAnimationDelay || '0ms'} ease-out both`
                  );
                }
                
                return animations.length > 0 ? animations.join(', ') : undefined;
              })(),
              // 🌈 Background-size para gradient-shift funcionar
              ...(heroStyles.badgeEffects?.bgAnimation === 'gradient-shift' 
                ? { backgroundSize: '200% 200%' } 
                : {}),
              // ✨ Background-size para shimmer funcionar
              ...(heroStyles.badgeEffects?.bgAnimation === 'shimmer' 
                ? { backgroundSize: '200% 100%' } 
                : {}),
              // 💫 Color para glow animations
              ...(heroStyles.badgeEffects?.glowAnimation && heroStyles.badgeEffects.glowAnimation !== 'none'
                ? { color: heroStyles.badgeEffects.glowAnimationColor || 'rgba(6, 182, 212, 0.6)' }
                : {}),
              // 📝 TIPOGRAFIA (antes da cor do texto!)
              fontFamily: heroStyles.badge.fontFamily,
              fontSize: getFontSize(heroStyles.badge),
              fontWeight: heroStyles.badge.fontWeight,
              textTransform: heroStyles.badge.textTransform,
              letterSpacing: heroStyles.badge.letterSpacing,
              fontStyle: heroStyles.badge.fontStyle || 'normal', // 🆕 ITÁLICO
              textDecoration: heroStyles.badge.textDecoration || 'none', // 🆕 SUBLINHADO
              // 🎨 CONTEÚDO: Texto (POR ÚLTIMO para não ser sobrescrito!)
              ...applyTextColor(heroStyles.badgeContent?.textColor || heroStyles.badge.color),
            }}
            onMouseEnter={(e) => {
              // Aplicar hover effects na ORDEM CORRETA
              // 1. Background primeiro
              if (heroStyles.badgeElement?.hoverBgColor) {
                const bgStyles = applyBackgroundColor(heroStyles.badgeElement.hoverBgColor);
                Object.assign(e.currentTarget.style, bgStyles);
              }
              // 2. Borda
              if (heroStyles.badgeElement?.hoverBorderColor) {
                if (heroStyles.badgeElement.hoverBorderColor.includes('gradient')) {
                  e.currentTarget.style.borderImage = `${heroStyles.badgeElement.hoverBorderColor} 1`;
                } else {
                  e.currentTarget.style.borderColor = heroStyles.badgeElement.hoverBorderColor;
                  e.currentTarget.style.borderImage = 'none';
                }
              }
              // 3. Efeitos
              if (heroStyles.badgeEffects?.hoverOpacity) {
                e.currentTarget.style.opacity = heroStyles.badgeEffects.hoverOpacity;
              }
              // ✨ Aplicar hover effect (scale, lift, glow, etc)
              if (heroStyles.badgeEffects?.hoverEffect) {
                const effect = heroStyles.badgeEffects.hoverEffect;
                switch(effect) {
                  case 'scaleUp':
                    // ✅ Usar valor do slider ou padrão
                    const scaleUp = heroStyles.badgeEffects.hoverScale || '1.05';
                    e.currentTarget.style.transform = `scale(${scaleUp})`;
                    break;
                  case 'scaleDown':
                    // ✅ Usar valor do slider ou padrão
                    const scaleDown = heroStyles.badgeEffects.hoverScale || '0.95';
                    e.currentTarget.style.transform = `scale(${scaleDown})`;
                    break;
                  case 'lift':
                    // ✅ Usar valor do slider ou padrão
                    const translateY = heroStyles.badgeEffects.hoverTranslateY || '-4px';
                    e.currentTarget.style.transform = `translateY(${translateY})`;
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                    break;
                  case 'rotate':
                    // ✅ Usar valor do slider ou padrão
                    const rotate = heroStyles.badgeEffects.hoverRotate || '5deg';
                    e.currentTarget.style.transform = `rotate(${rotate})`;
                    break;
                  case 'brightness':
                    e.currentTarget.style.filter = `brightness(${heroStyles.badgeEffects.hoverBrightness || '1.2'})`;
                    break;
                  case 'blur':
                    e.currentTarget.style.filter = `blur(${heroStyles.badgeEffects.hoverBlur || '2px'})`;
                    break;
                }
              }
              // 4. Texto por último
              if (heroStyles.badgeContent?.textColorHover) {
                Object.assign(e.currentTarget.style, applyTextColor(heroStyles.badgeContent.textColorHover));
              }
            }}
            onMouseLeave={(e) => {
              // Restaurar na mesma ordem
              // 1. Background
              if (heroStyles.badgeElement?.backgroundColor) {
                const bgStyles = applyBackgroundColor(heroStyles.badgeElement.backgroundColor);
                Object.assign(e.currentTarget.style, bgStyles);
              }
              // 2. Borda
              if (heroStyles.badgeElement?.borderColor) {
                if (heroStyles.badgeElement.borderColor.includes('gradient')) {
                  e.currentTarget.style.borderImage = `${heroStyles.badgeElement.borderColor} 1`;
                } else {
                  e.currentTarget.style.borderColor = heroStyles.badgeElement.borderColor;
                  e.currentTarget.style.borderImage = 'none';
                }
              }
              // 3. Efeitos - RESTAURAR TRANSFORMAÇÕES PERMANENTES
              e.currentTarget.style.opacity = heroStyles.badgeEffects?.opacity || '1';
              // Reconstruir transform com transformaçes permanentes
              const transforms = [
                heroStyles.badgeEffects?.scale && heroStyles.badgeEffects.scale !== '1' 
                  ? `scale(${heroStyles.badgeEffects.scale})` 
                  : '',
                heroStyles.badgeEffects?.rotate && heroStyles.badgeEffects.rotate !== '0deg' 
                  ? `rotate(${heroStyles.badgeEffects.rotate})` 
                  : '',
              ].filter(Boolean);
              e.currentTarget.style.transform = transforms.length > 0 ? transforms.join(' ') : 'none';
              e.currentTarget.style.boxShadow = heroStyles.badgeEffects?.boxShadow || 'none';
              // 4. Texto por último
              if (heroStyles.badgeContent?.textColor) {
                Object.assign(e.currentTarget.style, applyTextColor(heroStyles.badgeContent.textColor));
              }
            }}
          >
            {displayData.badge}
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black leading-none mb-6 tracking-tight">
            {/* Title1 */}
            <div id="hero-title1" className={`transition-all ${getHighlightClass('hero-title1')}`}>
              <span 
                className="block"
                style={{
                  fontFamily: heroStyles.title1.fontFamily,
                  fontSize: getFontSize(heroStyles.title1),
                  fontWeight: heroStyles.title1.fontWeight,
                  ...applyTextColor(heroStyles.title1.color),
                  lineHeight: heroStyles.title1.lineHeight,
                  textTransform: heroStyles.title1.textTransform,
                  letterSpacing: heroStyles.title1.letterSpacing,
                  fontStyle: heroStyles.title1.fontStyle || 'normal', // 🆕 ITÁLICO
                  textDecoration: heroStyles.title1.textDecoration || 'none', // 🆕 SUBLINHADO
                }}
              >
                {displayData.title1}
              </span>
            </div>
            {/* Title2 */}
            <div id="hero-title2" className={`transition-all ${getHighlightClass('hero-title2')}`}>
              <span 
                className="block"
                style={{
                  fontFamily: heroStyles.title2.fontFamily,
                  fontSize: getFontSize(heroStyles.title2),
                  fontWeight: heroStyles.title2.fontWeight,
                  ...applyTextColor(heroStyles.title2.color),
                  lineHeight: heroStyles.title2.lineHeight,
                  textTransform: heroStyles.title2.textTransform,
                  letterSpacing: heroStyles.title2.letterSpacing,
                  fontStyle: heroStyles.title2.fontStyle || 'normal', // 🆕 ITÁLICO
                  textDecoration: heroStyles.title2.textDecoration || 'none', // 🆕 SUBLINHADO
                }}
              >
                {displayData.title2}
              </span>
            </div>
            {/* Title3 */}
            <div id="hero-title3" className={`italic transition-all ${getHighlightClass('hero-title3')}`}>
              <span 
                className="block"
                style={{
                  fontFamily: heroStyles.title3.fontFamily,
                  fontSize: getFontSize(heroStyles.title3),
                  fontWeight: heroStyles.title3.fontWeight,
                  ...applyTextColor(heroStyles.title3.color),
                  lineHeight: heroStyles.title3.lineHeight,
                  textTransform: heroStyles.title3.textTransform,
                  letterSpacing: heroStyles.title3.letterSpacing,
                  fontStyle: heroStyles.title3.fontStyle || 'normal', // 🆕 ITÁLICO
                  textDecoration: heroStyles.title3.textDecoration || 'none', // 🆕 SUBLINHADO
                }}
              >
                {displayData.title3}
              </span>
            </div>
            {/* Title4 */}
            <div id="hero-title4" className={`transition-all ${getHighlightClass('hero-title4')}`}>
              <span 
                className="block"
                style={{
                  fontFamily: heroStyles.title4.fontFamily,
                  fontSize: getFontSize(heroStyles.title4),
                  fontWeight: heroStyles.title4.fontWeight,
                  ...applyTextColor(heroStyles.title4.color),
                  lineHeight: heroStyles.title4.lineHeight,
                  textTransform: heroStyles.title4.textTransform,
                  letterSpacing: heroStyles.title4.letterSpacing,
                  fontStyle: heroStyles.title4.fontStyle || 'normal', // 🆕 ITLICO
                  textDecoration: heroStyles.title4.textDecoration || 'none', // 🆕 SUBLINHADO
                }}
              >
                {displayData.title4}
              </span>
            </div>
          </h1>
          
          <div className="flex flex-wrap gap-6 mb-10">
            <div id="hero-location" className={`flex items-center gap-3 transition-all ${getHighlightClass('hero-location')}`}>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                <MapPin className="text-cyan-400" size={18} />
              </div>
              <span 
                className="text-base md:text-lg font-medium"
                style={{
                  fontFamily: heroStyles.location.fontFamily,
                  fontSize: getFontSize(heroStyles.location),
                  fontWeight: heroStyles.location.fontWeight,
                  ...applyTextColor(heroStyles.location.color),
                }}
              >
                {displayData.location}
              </span>
            </div>
            <div id="hero-email" className={`flex items-center gap-3 transition-all ${getHighlightClass('hero-email')}`}>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                <Mail className="text-cyan-400" size={18} />
              </div>
              <span 
                className="text-base md:text-lg font-medium"
                style={{
                  fontFamily: heroStyles.email.fontFamily,
                  fontSize: getFontSize(heroStyles.email),
                  fontWeight: heroStyles.email.fontWeight,
                  ...applyTextColor(heroStyles.email.color),
                }}
              >
                {displayData.email}
              </span>
            </div>
          </div>
          
          <div id="hero-buttons" className={`flex flex-wrap gap-4 transition-all ${getHighlightClass('hero-buttons')}`}>
            {console.log('🟡 Renderizando botões. Button1:', displayData.button1Text, 'Button2:', displayData.button2Text)}
            {/* Botão 1 - LinkedIn (link externo) */}
            <a
              href={hero.button1Link || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-sm font-black hover:opacity-80 transition uppercase tracking-widest text-sm md:text-base border"
              style={{
                fontFamily: heroStyles.button1.fontFamily,
                fontSize: getFontSize(heroStyles.button1),
                fontWeight: heroStyles.button1.fontWeight,
                ...applyTextColor(heroStyles.button1.color),
                ...applyBackgroundColor(heroStyles.button1.backgroundColor || '#06b6d4'),
                borderColor: heroStyles.button1.borderColor || heroStyles.button1.backgroundColor || '#06b6d4',
                textTransform: heroStyles.button1.textTransform,
                letterSpacing: heroStyles.button1.letterSpacing,
              }}
            >
              {displayData.button1Text}
            </a>
            
            {/* Botão 2 - Download CV (abre modal) */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔥🔥 BOTÃO CV CLICADO!');
                setIsCVModalOpen(true);
                console.log('🔥🔥 Modal aberto!');
              }}
              type="button"
              className="px-8 py-4 rounded-sm font-black hover:opacity-80 transition uppercase tracking-widest text-sm md:text-base border cursor-pointer"
              style={{
                fontFamily: heroStyles.button2.fontFamily,
                fontSize: getFontSize(heroStyles.button2),
                fontWeight: heroStyles.button2.fontWeight,
                ...applyTextColor(heroStyles.button2.color),
                ...applyBackgroundColor(heroStyles.button2.backgroundColor || 'transparent'),
                borderColor: heroStyles.button2.borderColor || heroStyles.button2.color || '#06b6d4',
                textTransform: heroStyles.button2.textTransform,
                letterSpacing: heroStyles.button2.letterSpacing,
              }}
            >
              {displayData.button2Text}
            </button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end order-1 md:order-2" data-aos="zoom-in">
          <div 
            id="hero-card" 
            className={`relative group transition-all ${getHighlightClass('hero-card')}`}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-sm blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-950 ring-1 ring-white/10 rounded-sm p-12 flex flex-col items-center">
              <div 
                className="w-40 h-40 bg-slate-900 rounded-full flex items-center justify-center mb-8 border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)] bg-cover bg-center"
                style={{ backgroundImage: `url(${avatarImg})` }}
              >
                {false && (
                  <svg
                    className="text-cyan-400"
                    width="64"
                    height="64"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                )}
              </div>
              <div className="text-center">
                <h2 
                  className="text-3xl md:text-4xl font-black italic tracking-tight"
                  style={{
                    fontFamily: heroStyles.cardName.fontFamily,
                    fontSize: getFontSize(heroStyles.cardName),
                    fontWeight: heroStyles.cardName.fontWeight,
                    ...applyTextColor(heroStyles.cardName.color), // ✅ USAR HELPER!
                    letterSpacing: heroStyles.cardName.letterSpacing,
                  }}
                >
                  {displayData.cardName}
                </h2>
                <span 
                  className="font-bold text-xs md:text-sm uppercase tracking-[0.4em] mt-3 block"
                  style={{
                    fontFamily: heroStyles.cardRole.fontFamily,
                    fontSize: getFontSize(heroStyles.cardRole),
                    fontWeight: heroStyles.cardRole.fontWeight,
                    ...applyTextColor(heroStyles.cardRole.color), // ✅ USAR HELPER!
                  }}
                >
                  {displayData.cardRole}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CVDownloadModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} language={language} />
    </header>
  );
}