/**
 * 💾 SISTEMA DE STORAGE SIMPLES - localStorage
 * 
 * Gerencia TODOS os dados do portfolio de forma centralizada
 */

const STORAGE_KEY = 'portfolio_data_v1';

// ========================================
// TIPOS DE DADOS
// ========================================

// Estilos individuais para cada campo
export interface FieldStyle {
  fontFamily: string;
  fontSize: string; // Desktop
  fontSizeMobile?: string; // 📱 Mobile (opcional)
  fontWeight: string;
  fontWeightMobile?: string; // 📱 Mobile (opcional)
  color: string;
  backgroundColor?: string; // 🎨 Cor de fundo (para botões, badges, etc)
  borderColor?: string; // 🎨 Cor da borda (para botões bordados)
  lineHeight?: string;
  lineHeightMobile?: string; // 📱 Mobile (opcional)
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: string;
  letterSpacingMobile?: string; // 📱 Mobile (opcional)
  fontStyle?: 'normal' | 'italic'; // 🆕 Itálico
  textDecoration?: 'none' | 'underline' | 'line-through'; // 🆕 Sublinhado/Riscado
}

// 📦 ESTILOS DE CONTAINER
export interface ContainerStyle {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  // 📐 PADDING (4 lados individuais)
  paddingLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  // 🔙 BACKWARDS COMPATIBILITY (antigos X/Y ainda funcionam)
  paddingX?: string;
  paddingY?: string;
  // 📏 MARGIN (4 lados individuais)
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
}

// ✨ ESTILOS DE EFEITOS
export interface EffectsStyle {
  // 🌑 SOMBRAS
  boxShadow?: string;
  textShadow?: string;
  shadowColor?: string; // 🎨 Cor da sombra (separada para preservar ao mudar preset)
  shadowOffsetX?: string;
  shadowOffsetY?: string;
  shadowBlur?: string;
  shadowSpread?: string;
  
  // 💫 OPACIDADE
  opacity?: string;
  hoverOpacity?: string;
  
  // ⚡ TRANSIÇÕES
  transition?: string;
  transitionDuration?: string;
  transitionEasing?: string;
  transitionDelay?: string;
  
  // 🎬 ANIMAÇÕES DE SCROLL
  scrollAnimation?: 'none' | 'fadeIn' | 'slideBottom' | 'slideLeft' | 'slideRight' | 'slideTop' | 'scaleIn' | 'rotateIn' | 'bounceIn' | 'flipIn';
  scrollAnimationDuration?: string;
  scrollAnimationDelay?: string;
  
  // 🖱️ HOVER EFFECTS
  hoverEffect?: 'none' | 'scaleUp' | 'scaleDown' | 'lift' | 'rotate' | 'brightness' | 'blur';
  hoverScale?: string;
  hoverRotate?: string;
  hoverTranslateY?: string;
  hoverBrightness?: string; // 💡 Intensidade do brilho no hover (ex: '1.2')
  hoverBlur?: string; // 🌫️ Intensidade do desfoque no hover (ex: '2px')
  
  // 🎨 FILTROS CSS
  filterBlur?: string;
  filterGrayscale?: string;
  filterBrightness?: string;
  filterContrast?: string;
  filterSaturate?: string;
  filterHueRotate?: string;
  
  // 🔄 TRANSFORMAÇÕES
  scale?: string;
  rotate?: string;
  translateX?: string;
  translateY?: string;
  skewX?: string;
  skewY?: string;
  
  // 🔮 GLASSMORPHISM
  backdropBlur?: string; // Blur de fundo (ex: '10px')
  
  // 💫 GLOW NEON ANIMADO
  glowAnimation?: 'none' | 'pulse' | 'glow';
  glowAnimationColor?: string;
  glowAnimationDuration?: string;
  
  // 🎨 BORDA ANIMADA
  borderAnimation?: 'none' | 'rotate' | 'pulse';
  borderAnimationDuration?: string;
  
  // 🌈 BACKGROUND ANIMADO
  bgAnimation?: 'none' | 'gradient-shift' | 'shimmer';
  bgAnimationDuration?: string;
}

// 🎨 CORES DE CONTEÚDO (o que se vê/lê)
export interface ContentColors {
  textColor: string;        // Cor do texto principal
  textColorMobile?: string; // 📱 Mobile (opcional)
  textColorOpacity?: number; // 🆕 Opacidade do texto (0-1)
  textColorHover?: string;  // 🆕 Cor do texto no hover
  textColorHoverMobile?: string; // 📱 Mobile (opcional)
  textColorHoverOpacity?: number; // 🆕 Opacidade do texto hover (0-1)
  iconColor?: string;       // Cor dos ícones
  iconColorMobile?: string; // 📱 Mobile (opcional)
  iconColorOpacity?: number; // 🆕 Opacidade do ícone (0-1)
  iconBackgroundColor?: string; // 🆕 Cor do fundo do ícone (quadradinho)
  iconBackgroundColorMobile?: string; // 📱 Mobile (opcional)
  iconBackgroundColorOpacity?: number; // 🆕 Opacidade do fundo do ícone (0-1)
  bulletColor?: string;     // Cor dos bullets/separadores
  bulletColorMobile?: string; // 📱 Mobile (opcional)
  bulletColorOpacity?: number; // 🆕 Opacidade do bullet (0-1)
  accentColor?: string;     // Cor de destaque (ex: links, highlights)
  accentColorMobile?: string; // 📱 Mobile (opcional)
  accentColorOpacity?: number; // 🆕 Opacidade do accent (0-1)
}

// 🎨 CORES DE ELEMENTOS (estrutura visual)
export interface ElementColors {
  backgroundColor: string;   // Fundo dos cards/containers
  backgroundColorMobile?: string; // 📱 Mobile (opcional)
  backgroundColorOpacity?: number; // 🆕 Opacidade do background (0-1)
  borderColor: string;       // Bordas dos cards
  borderColorMobile?: string; // 📱 Mobile (opcional)
  borderColorOpacity?: number; // 🆕 Opacidade da borda (0-1)
  hoverBgColor?: string;     // Cor de fundo no hover
  hoverBgColorMobile?: string; // 📱 Mobile (opcional)
  hoverBgColorOpacity?: number; // 🆕 Opacidade do hover background (0-1)
  hoverBorderColor?: string; // Cor da borda no hover
  hoverBorderColorMobile?: string; // 📱 Mobile (opcional)
  hoverBorderColorOpacity?: number; // 🆕 Opacidade da hover borda (0-1)
}

export interface HeroData {
  // 🌍 CAMPOS BILÍNGUES - Cada texto tem versão PT e EN
  badge_pt: string;
  badge_en: string;
  title1_pt: string;
  title1_en: string;
  title2_pt: string;
  title2_en: string;
  title3_pt: string;
  title3_en: string;
  title4_pt: string;
  title4_en: string;
  location_pt: string;
  location_en: string;
  email: string; // Email não precisa tradução
  cardName_pt: string;
  cardName_en: string;
  cardRole_pt: string;
  cardRole_en: string;
  // Botões
  button1Text_pt: string;
  button1Text_en: string;
  button1Link: string;
  button2Text_pt: string;
  button2Text_en: string;
  button2Link: string;
  // Avatar/Foto
  avatarUrl: string;
  // Background
  backgroundColor: string;
  backgroundGradient: string;
  backgroundImage?: string; // Nova: imagem de fundo
}

export interface HeroStyles {
  badge: FieldStyle;
  badgeContent?: ContentColors;     // 🎨 CORES: conteúdo da badge (texto, ícone, etc)
  badgeElement?: ElementColors;     // 🎨 CORES: elemento da badge (background, border, hover)
  badgeContainer?: ContainerStyle;  // 📦 NOVO: Estilos de container da badge
  badgeEffects?: EffectsStyle;      // ✨ NOVO: Efeitos da badge
  title1: FieldStyle;
  title1Container?: ContainerStyle;  // 📦 Container do título 1
  title1Effects?: EffectsStyle;      // ✨ Efeitos do título 1
  title2: FieldStyle;
  title2Container?: ContainerStyle;  // 📦 Container do título 2
  title2Effects?: EffectsStyle;      // ✨ Efeitos do título 2
  title3: FieldStyle;
  title3Container?: ContainerStyle;  // 📦 Container do título 3
  title3Effects?: EffectsStyle;      // ✨ Efeitos do título 3
  title4: FieldStyle;
  title4Container?: ContainerStyle;  // 📦 Container do título 4
  title4Effects?: EffectsStyle;      // ✨ Efeitos do título 4
  location: FieldStyle;
  locationContent: ContentColors;  // 🆕 CORES: ícone + texto
  email: FieldStyle;
  emailContent: ContentColors;      // 🆕 CORES: ícone + texto
  cardName: FieldStyle;
  cardRole: FieldStyle;
  cardContainer: ElementColors;     // 🆕 CORES: background, border, hover do card
  button1: FieldStyle;
  button1Element: ElementColors;    // 🆕 CORES: background, border, hover do botão
  button2: FieldStyle;
  button2Element: ElementColors;    // 🆕 CORES: background, border, hover do botão
}

export interface AboutData {
  // Título da seção
  sectionTitle_pt: string;
  sectionTitle_en: string;
  sectionTitleHighlight_pt: string;
  sectionTitleHighlight_en: string;
  
  // Sobre Mim
  aboutTitle_pt: string;
  aboutTitle_en: string;
  aboutText_pt: string;
  aboutText_en: string;
  aboutIcon: string; // lucide icon name
  
  // Formação
  educationTitle_pt: string;
  educationTitle_en: string;
  educationIcon: string;
  educationItems: {
    id: string;
    degree_pt: string;
    degree_en: string;
    institution: string;
    year: string;
  }[];
  
  // Idiomas
  languagesTitle_pt: string;
  languagesTitle_en: string;
  languagesIcon: string;
  languageItems: {
    id: string;
    flag: string;
    name_pt: string;
    name_en: string;
    level_pt: string;
    level_en: string;
  }[];
  
  // Competências
  skillsTitle_pt: string;
  skillsTitle_en: string;
  skillsIcon: string;
  skillItems_pt: string[]; // array de skills em português
  skillItems_en: string[]; // array de skills em inglês
  
  // Certificações
  certificationsTitle_pt: string;
  certificationsTitle_en: string;
  certificationsIcon: string;
  certificationItems: {
    id: string;
    name_pt: string;
    name_en: string;
  }[];
  
  // 4 Pilares
  pilarsIcon1: string;
  pilarsIcon2: string;
  pilarsIcon3: string;
  pilarsIcon4: string;
  pilar1Title_pt: string;
  pilar1Title_en: string;
  pilar1Desc_pt: string;
  pilar1Desc_en: string;
  pilar2Title_pt: string;
  pilar2Title_en: string;
  pilar2Desc_pt: string;
  pilar2Desc_en: string;
  pilar3Title_pt: string;
  pilar3Title_en: string;
  pilar3Desc_pt: string;
  pilar3Desc_en: string;
  pilar4Title_pt: string;
  pilar4Title_en: string;
  pilar4Desc_pt: string;
  pilar4Desc_en: string;
  
  // Big Numbers
  bigNumbersIcon: string;
  bigNumbersTitle_pt: string;
  bigNumbersTitle_en: string;
  bigNumber1Value: string;
  bigNumber1Label_pt: string;
  bigNumber1Label_en: string;
  bigNumber2Value: string;
  bigNumber2Label_pt: string;
  bigNumber2Label_en: string;
  bigNumber3Value: string;
  bigNumber3Label_pt: string;
  bigNumber3Label_en: string;
  bigNumber4Value: string;
  bigNumber4Label_pt: string;
  bigNumber4Label_en: string;
  bigNumber5Value: string;
  bigNumber5Label_pt: string;
  bigNumber5Label_en: string;
  bigNumber6Value: string;
  bigNumber6Label_pt: string;
  bigNumber6Label_en: string;
  bigNumber7Value: string;
  bigNumber7Label_pt: string;
  bigNumber7Label_en: string;
  bigNumber8Value: string;
  bigNumber8Label_pt: string;
  bigNumber8Label_en: string;
  bigNumber9Value: string;
  bigNumber9Label_pt: string;
  bigNumber9Label_en: string;
  
  // Timeline
  timelineIcon: string;
  timelineTitle_pt: string;
  timelineTitle_en: string;
  timelineItems: {
    id: string;
    date: string;
    company: string;
  }[];
  
  // Cases de Sucesso
  casesIcon: string;
  casesTitle_pt: string;
  casesTitle_en: string;
  caseItems: {
    id: string;
    icon: string;
    color: 'orange' | 'cyan' | 'blue';
    image: string;
    title_pt: string;
    title_en: string;
    company: string;
    challenge_pt: string;
    challenge_en: string;
    solution_pt: string;
    solution_en: string;
    metric1: string;
    metric1Label_pt: string;
    metric1Label_en: string;
    metric2: string;
    metric2Label_pt: string;
    metric2Label_en: string;
    metric3: string;
    metric3Label_pt: string;
    metric3Label_en: string;
    finalImpact_pt: string;
    finalImpact_en: string;
  }[];
}

export interface AboutStyles {
  // Título da seção principal
  sectionTitle: FieldStyle;
  sectionTitleContainer: ContainerStyle;
  sectionTitleEffects: EffectsStyle;
  sectionTitleHighlight: FieldStyle;
  sectionTitleHighlightContainer: ContainerStyle;
  sectionTitleHighlightEffects: EffectsStyle;
  
  // Sobre Mim (About Text)
  aboutTitle: FieldStyle;
  aboutTitleContainer: ContainerStyle;
  aboutTitleEffects: EffectsStyle;
  aboutText: FieldStyle;
  aboutTextContainer: ContainerStyle;
  aboutTextEffects: EffectsStyle;
  aboutContent: ContentColors;  // 🎨 CORES DE CONTEÚDO
  aboutCard: ElementColors;     // 🎨 CORES DE ELEMENTOS
  
  // Formação
  educationTitle: FieldStyle;
  educationTitleContainer: ContainerStyle;
  educationTitleEffects: EffectsStyle;
  educationDegree: FieldStyle;
  educationDegreeContainer: ContainerStyle;
  educationDegreeEffects: EffectsStyle;
  educationInstitution: FieldStyle;
  educationInstitutionContainer: ContainerStyle;
  educationInstitutionEffects: EffectsStyle;
  educationPeriod: FieldStyle;
  educationPeriodContainer: ContainerStyle;
  educationPeriodEffects: EffectsStyle;
  
  // Idiomas
  languagesTitle: FieldStyle;
  languagesTitleContainer: ContainerStyle;
  languagesTitleEffects: EffectsStyle;
  languageFlag: FieldStyle;
  languageFlagContainer: ContainerStyle;
  languageFlagEffects: EffectsStyle;
  languageName: FieldStyle;
  languageNameContainer: ContainerStyle;
  languageNameEffects: EffectsStyle;
  languageLevel: FieldStyle;
  languageLevelContainer: ContainerStyle;
  languageLevelEffects: EffectsStyle;
  
  // Competências
  skillsTitle: FieldStyle;
  skillsTitleContainer: ContainerStyle;
  skillsTitleEffects: EffectsStyle;
  skillName: FieldStyle;
  skillNameContainer: ContainerStyle;
  skillNameEffects: EffectsStyle;
  skillCategory: FieldStyle;
  skillCategoryContainer: ContainerStyle;
  skillCategoryEffects: EffectsStyle;
  
  // Certificações
  certificationsTitle: FieldStyle;
  certificationsTitleContainer: ContainerStyle;
  certificationsTitleEffects: EffectsStyle;
  certificationName: FieldStyle;
  certificationNameContainer: ContainerStyle;
  certificationNameEffects: EffectsStyle;
  certificationIssuer: FieldStyle;
  certificationIssuerContainer: ContainerStyle;
  certificationIssuerEffects: EffectsStyle;
  certificationDate: FieldStyle;
  certificationDateContainer: ContainerStyle;
  certificationDateEffects: EffectsStyle;
  
  // 4 Pilares
  pilarIcon: FieldStyle;
  pilarIconContainer: ContainerStyle;
  pilarIconEffects: EffectsStyle;
  pilarTitle: FieldStyle;
  pilarTitleContainer: ContainerStyle;
  pilarTitleEffects: EffectsStyle;
  pilarDesc: FieldStyle;
  pilarDescContainer: ContainerStyle;
  pilarDescEffects: EffectsStyle;
  
  // Big Numbers
  bigNumbersTitle: FieldStyle;
  bigNumbersTitleContainer: ContainerStyle;
  bigNumbersTitleEffects: EffectsStyle;
  bigNumberValue: FieldStyle;
  bigNumberValueContainer: ContainerStyle;
  bigNumberValueEffects: EffectsStyle;
  bigNumberLabel: FieldStyle;
  bigNumberLabelContainer: ContainerStyle;
  bigNumberLabelEffects: EffectsStyle;
  
  // Timeline
  timelineTitle: FieldStyle;
  timelineTitleContainer: ContainerStyle;
  timelineTitleEffects: EffectsStyle;
  timelineDate: FieldStyle;
  timelineDateContainer: ContainerStyle;
  timelineDateEffects: EffectsStyle;
  timelineCompany: FieldStyle;
  timelineCompanyContainer: ContainerStyle;
  timelineCompanyEffects: EffectsStyle;
  
  // Cases de Sucesso
  casesTitle: FieldStyle;
  casesTitleContainer: ContainerStyle;
  casesTitleEffects: EffectsStyle;
  caseIcon: FieldStyle;
  caseIconContainer: ContainerStyle;
  caseIconEffects: EffectsStyle;
  caseTitle: FieldStyle;
  caseTitleContainer: ContainerStyle;
  caseTitleEffects: EffectsStyle;
  caseCompany: FieldStyle;
  caseCompanyContainer: ContainerStyle;
  caseCompanyEffects: EffectsStyle;
  caseChallenge: FieldStyle;
  caseChallengeContainer: ContainerStyle;
  caseChallengeEffects: EffectsStyle;
  caseSolution: FieldStyle;
  caseSolutionContainer: ContainerStyle;
  caseSolutionEffects: EffectsStyle;
  caseMetricValue: FieldStyle;
  caseMetricValueContainer: ContainerStyle;
  caseMetricValueEffects: EffectsStyle;
  caseMetricLabel: FieldStyle;
  caseMetricLabelContainer: ContainerStyle;
  caseMetricLabelEffects: EffectsStyle;
  caseFinalImpact: FieldStyle;
  caseFinalImpactContainer: ContainerStyle;
  caseFinalImpactEffects: EffectsStyle;
  
  // Stats (para quando adicionar)
  statsYears: FieldStyle;
  statsProjects: FieldStyle;
  statsClients: FieldStyle;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'business' | 'soft';
  level: number; // 1-5
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
}

export interface Language {
  id: string;
  name: string;
  level: 'basic' | 'intermediate' | 'advanced' | 'fluent' | 'native';
  certification?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo?: string;
  text: string;
  rating: number; // 1-5
}

export interface PortfolioData {
  hero: HeroData;
  heroStyles: HeroStyles;
  about: AboutData;
  aboutStyles: AboutStyles;
  experiences: Experience[];
  skills: Skill[];
  education: Education[];
  languages: Language[];
  testimonials: Testimonial[];
  // Futuro: projects, blog, etc.
}

// ========================================
// DADOS PADRÃO
// ========================================

const DEFAULT_HERO_STYLES: HeroStyles = {
  badge: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '14px',
    fontSizeMobile: '12px', // 📱 MOBILE
    fontWeight: '600',
    color: '#06b6d4',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  badgeContent: {
    textColor: '#06b6d4',
    textColorOpacity: 1, // 🆕 100%
    textColorHover: '#22d3ee', // 🎨 Texto cyan mais claro no hover
    textColorHoverOpacity: 1, // 🆕 100%
  },
  badgeElement: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    backgroundColorOpacity: 1, // 🆕 100%
    borderColor: '#06b6d4', // 🎨 Cor da borda
    borderColorOpacity: 1, // 🆕 100%
    hoverBgColor: 'rgba(6, 182, 212, 0.2)',
    hoverBgColorOpacity: 1, // 🆕 100%
    hoverBorderColor: '#22d3ee',
    hoverBorderColorOpacity: 1, // 🆕 100%
  },
  badgeContainer: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    borderColor: '#06b6d4', // 🎨 Cor da borda
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  badgeEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  title1: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '46px',
    fontSizeMobile: '28px', // 📱 MOBILE
    fontWeight: '900',
    color: '#ffffff', // 🎨 BRANCO
    lineHeight: '1',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
  },
  title1Container: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    borderColor: '#06b6d4', // 🎨 Cor da borda
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  title1Effects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  title2: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '46px',
    fontSizeMobile: '28px', // 📱 MOBILE
    fontWeight: '900',
    color: '#22d3ee', // 🎨 AZUL
    lineHeight: '1',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
  },
  title2Container: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    borderColor: '#06b6d4', // 🎨 Cor da borda
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  title2Effects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  title3: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '46px',
    fontSizeMobile: '28px', // 📱 MOBILE
    fontWeight: '900',
    color: '#ffffff', // 🎨 BRANCO
    lineHeight: '1',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
  },
  title3Container: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    borderColor: '#06b6d4', // 🎨 Cor da borda
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  title3Effects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  title4: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '46px',
    fontSizeMobile: '28px', // 📱 MOBILE
    fontWeight: '900',
    color: '#22d3ee', // 🎨 AZUL
    lineHeight: '1',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
  },
  title4Container: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    borderColor: '#06b6d4', // 🎨 Cor da borda
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  title4Effects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  location: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '14px',
    fontSizeMobile: '12px', // 📱 MOBILE
    fontWeight: '400',
    color: '#94a3b8',
  },
  locationContent: {
    textColor: '#94a3b8',
    iconColor: '#22d3ee',  // 🎨 Ícone cyan
    iconBackgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    bulletColor: '#22d3ee',
    accentColor: '#22d3ee',
  },
  email: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '14px',
    fontSizeMobile: '12px', // 📱 MOBILE
    fontWeight: '400',
    color: '#94a3b8',
  },
  emailContent: {
    textColor: '#94a3b8',
    iconColor: '#22d3ee',  // 🎨 Ícone cyan
    iconBackgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    bulletColor: '#22d3ee',
    accentColor: '#22d3ee',
  },
  cardName: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontSizeMobile: '16px', // 📱 MOBILE
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '0.1em',
  },
  cardRole: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '12px',
    fontSizeMobile: '10px', // 📱 MOBILE
    fontWeight: '400',
    color: '#94a3b8',
  },
  cardContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    hoverBgColor: 'rgba(6, 182, 212, 0.05)',
    hoverBorderColor: 'rgba(6, 182, 212, 0.3)',
  },
  button1: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '14px',
    fontSizeMobile: '12px', // 📱 MOBILE
    fontWeight: '600',
    color: '#0f172a', // 🎨 Texto escuro para contraste com fundo cyan
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: '#06b6d4', // 🎨 Fundo cyan
    borderColor: '#06b6d4', // 🎨 Cor da borda
  },
  button1Element: {
    backgroundColor: '#06b6d4', // 🎨 Fundo cyan
    borderColor: '#06b6d4', // 🎨 Cor da borda
    hoverBgColor: 'rgba(6, 182, 212, 0.05)',
    hoverBorderColor: 'rgba(6, 182, 212, 0.3)',
  },
  button2: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '14px',
    fontSizeMobile: '12px', // 📱 MOBILE
    fontWeight: '600',
    color: '#ffffff', // 🎨 Texto branco
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: 'transparent', // 🎨 Fundo transparente (bordado)
    borderColor: '#06b6d4', // 🎨 Cor da borda para botão bordado
  },
  button2Element: {
    backgroundColor: 'transparent', // 🎨 Fundo transparente (bordado)
    borderColor: '#06b6d4', // 🎨 Cor da borda para botão bordado
    hoverBgColor: 'rgba(6, 182, 212, 0.05)',
    hoverBorderColor: 'rgba(6, 182, 212, 0.3)',
  },
};

const DEFAULT_ABOUT_STYLES: AboutStyles = {
  // Título da seção principal
  sectionTitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '48px',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  sectionTitleHighlight: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '48px',
    fontWeight: '800',
    color: '#22d3ee',
    lineHeight: '1.2',
  },
  
  // Sobre Mim (About Text)
  aboutTitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '48px',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  aboutText: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '18px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.8',
  },
  aboutTextContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  aboutTextEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  aboutContent: {
    textColor: '#94a3b8',
    iconColor: '#22d3ee',  // 🎨 Ícone cyan
    iconBackgroundColor: 'rgba(6, 182, 212, 0.1)', // 🆕 Fundo do ícone cyan translúcido
    bulletColor: '#22d3ee',
    accentColor: '#22d3ee',
  },
  aboutCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    hoverBgColor: 'rgba(6, 182, 212, 0.05)',
    hoverBorderColor: 'rgba(6, 182, 212, 0.3)',
  },
  
  // Formação
  educationTitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  educationDegree: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  educationInstitution: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  educationInstitutionContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // �� Borda cyan suave
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  educationInstitutionEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  educationPeriod: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  educationPeriodContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  educationPeriodEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  
  // Idiomas
  languagesTitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  languageFlag: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  languageFlagContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  languageFlagEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  languageName: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  languageLevel: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  
  // Competências
  skillsTitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  skillName: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  skillNameContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  skillNameEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  skillCategory: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  
  // Certificações
  certificationsTitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  certificationName: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  certificationNameContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)', // 🎨 Fundo translúcido
    borderColor: 'rgba(6, 182, 212, 0.1)', // 🎨 Borda cyan suave
    borderWidth: '1px',
    borderRadius: '4px',
    paddingX: '8px',
    paddingY: '4px',
  },
  certificationNameEffects: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: '1',
    hoverOpacity: '0.8',
    transition: 'opacity 0.3s ease',
  },
  certificationIssuer: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  certificationDate: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  
  // Stats (para quando adicionar)
  statsYears: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '48px',
    fontWeight: '900',
    color: '#22d3ee',
  },
  statsProjects: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '48px',
    fontWeight: '900',
    color: '#22d3ee',
  },
  statsClients: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '48px',
    fontWeight: '900',
    color: '#22d3ee',
  },
};

const DEFAULT_DATA: PortfolioData = {
  hero: {
    // 🌍 Campos bilíngues - PT
    badge_pt: 'Gerente de Marketing',
    badge_en: 'Marketing Manager',
    title1_pt: 'Marketing 360',
    title1_en: 'Marketing 360',
    title2_pt: 'Inteligência Operacional',
    title2_en: 'Operational Intelligence',
    title3_pt: 'Go To Market',
    title3_en: 'Go To Market',
    title4_pt: 'Gestão de Stakeholders',
    title4_en: 'Stakeholder Management',
    location_pt: 'São Paulo, Brasil',
    location_en: 'São Paulo, Brazil',
    email: 'fernandoferrerobranco@gmail.com',
    cardName_pt: 'FERNANDO BRANCO',
    cardName_en: 'FERNANDO BRANCO',
    cardRole_pt: '36 anos, solteiro, brasileiro',
    cardRole_en: '36 years, single, brazilian',
    // Botões
    button1Text_pt: 'LinkedIn',
    button1Text_en: 'LinkedIn',
    button1Link: 'https://linkedin.com/in/fernandobranco',
    button2Text_pt: 'Download CV',
    button2Text_en: 'Download CV',
    button2Link: '#cv', // Não usado, botão 2 abre modal
    // Avatar/Foto
    avatarUrl: 'figma:asset/0e465f0946ecad4cff3e8f42683c0768576255ae.png',
    // Background - Gradiente azul escuro limpo
    backgroundColor: '',
    backgroundGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  heroStyles: DEFAULT_HERO_STYLES,
  about: {
    // Título da seção
    sectionTitle_pt: 'CONHEÇA MINHA',
    sectionTitle_en: 'DISCOVER MY',
    sectionTitleHighlight_pt: 'TRAJETÓRIA',
    sectionTitleHighlight_en: 'JOURNEY',
    
    // Sobre Mim
    aboutTitle_pt: 'SOBRE',
    aboutTitle_en: 'ABOUT',
    aboutText_pt: 'Especialista em orquestrar processos, dados e pessoas para viabilizar entregas de alto impacto, atuando como elo estratégico entre a visão de negócio e a execução técnica. Minha trajetória de 15 anos une a escala de Big Techs, a solidez de grandes corporações à agilidade do empreendedorismo, com atuação regional em 5 países da América Latina. Com foco em criar campanhas inovadoras, tirar projetos do papel e liderar estratégias de Go-to-Market de ponta a ponta, visando sempre a construção de operações escaláveis e sustentáveis.',
    aboutText_en: 'Specialist in orchestrating processes, data and people to enable high-impact deliveries, acting as the strategic link between business vision and technical execution. My 15-year journey combines Big Tech scale, the solidity of large corporations with entrepreneurial agility, with regional experience across 5 Latin American countries. Focused on creating innovative campaigns, bringing projects to life and leading end-to-end Go-to-Market strategies, always aiming to build scalable and sustainable operations.',
    aboutIcon: 'Award',
    
    // Formação
    educationTitle_pt: 'FORMAÇÃO',
    educationTitle_en: 'EDUCATION',
    educationIcon: 'GraduationCap',
    educationItems: [
      {
        id: '1',
        degree_pt: 'Ensino Fundamental',
        degree_en: 'Elementary School',
        institution: 'Escola Pueri Domus',
        year: '2007',
      },
      {
        id: '2',
        degree_pt: 'Administração com Ênfase em Marketing',
        degree_en: 'Business Administration with Marketing Focus',
        institution: 'Anhembi Morumbi',
        year: '2012',
      },
    ],
    
    // Idiomas
    languagesTitle_pt: 'IDIOMAS',
    languagesTitle_en: 'LANGUAGES',
    languagesIcon: 'Languages',
    languageItems: [
      {
        id: '1',
        flag: '🇧🇷',
        name_pt: 'Português',
        name_en: 'Portuguese',
        level_pt: 'Nativo',
        level_en: 'Native',
      },
      {
        id: '2',
        flag: '🇺🇸',
        name_pt: 'Inglês',
        name_en: 'English',
        level_pt: 'Fluente',
        level_en: 'Fluent',
      },
      {
        id: '3',
        flag: '🇪🇸',
        name_pt: 'Espanhol',
        name_en: 'Spanish',
        level_pt: 'Avançado',
        level_en: 'Advanced',
      },
    ],
    
    // Competências
    skillsTitle_pt: 'COMPETÊNCIAS',
    skillsTitle_en: 'SKILLS',
    skillsIcon: 'Lightbulb',
    skillItems_pt: [
      'Liderança', 'Criatividade', 'Inovação', 'Comunicação', 'Inteligência Emocional', 
      'Gestão do Tempo', 'Resolução de Problemas', 'Adaptabilidade', 'Trabalho em Equipe', 
      'Pensamento Crítico', 'Gestão de Projetos', 'Análise de Dados', 'Inteligência Artificial'
    ],
    skillItems_en: [
      'Leadership', 'Creativity', 'Innovation', 'Communication', 'Emotional Intelligence', 
      'Time Management', 'Problem Solving', 'Adaptability', 'Teamwork', 
      'Critical Thinking', 'Project Management', 'Data Analysis', 'Artificial Intelligence'
    ],
    
    // Certificações
    certificationsTitle_pt: 'CERTIFICAÇÕES',
    certificationsTitle_en: 'CERTIFICATIONS',
    certificationsIcon: 'FileCheck',
    certificationItems: [
      { id: '1', name_pt: 'Liderança - Conquer', name_en: 'Leadership - Conquer' },
      { id: '2', name_pt: 'Business Intelligence - Conquer', name_en: 'Business Intelligence - Conquer' },
      { id: '3', name_pt: 'Técnicas de Apresentação - Dale Carnegie', name_en: 'Presentation Techniques - Dale Carnegie' },
      { id: '4', name_pt: 'Inteligência Artificial - Cursiv', name_en: 'Artificial Intelligence - Cursiv' },
    ],
    
    // 4 Pilares
    pilarsIcon1: 'Target',
    pilarsIcon2: 'BarChart3',
    pilarsIcon3: 'Rocket',
    pilarsIcon4: 'Users',
    pilar1Title_pt: 'Marketing 360',
    pilar1Title_en: 'Marketing 360',
    pilar1Desc_pt: 'Branding e planejamento estratégico end-to-end, campanhas integradas e gestão de ecossistemas físicos e digitais completos.',
    pilar1Desc_en: 'Branding and end-to-end strategic planning, integrated campaigns and complete physical and digital ecosystem management.',
    pilar2Title_pt: 'Inteligência Operacional',
    pilar2Title_en: 'Operational Intelligence',
    pilar2Desc_pt: 'Automação de fluxos, governança de dados e arquitetura de sistemas escaláveis de alta performance.',
    pilar2Desc_en: 'Workflow automation, data governance and scalable high-performance systems architecture.',
    pilar3Title_pt: 'Go to Market',
    pilar3Title_en: 'Go to Market',
    pilar3Desc_pt: 'Estratégias de lançamento, growth hacking e otimização de jornadas para aquisição e retenção.',
    pilar3Desc_en: 'Launch strategies, growth hacking and journey optimization for acquisition and retention.',
    pilar4Title_pt: 'Gestão de Stakeholders',
    pilar4Title_en: 'Stakeholder Management',
    pilar4Desc_pt: 'Foco em garantir a fluidez de projetos através da gestão ativa de parceiros internos e externos, assegurando conformidade com SLAs e diretrizes globais.',
    pilar4Desc_en: 'Focus on ensuring project fluidity through active management of internal and external partners, ensuring compliance with SLAs and global guidelines.',
    
    // Big Numbers
    bigNumbersIcon: 'TrendingUp',
    bigNumbersTitle_pt: 'Big Numbers',
    bigNumbersTitle_en: 'Big Numbers',
    bigNumber1Value: '19+',
    bigNumber1Label_pt: 'Anos\nExperiência',
    bigNumber1Label_en: 'Years\nExperience',
    bigNumber2Value: '98%',
    bigNumber2Label_pt: 'Performance\nQuality',
    bigNumber2Label_en: 'Performance\nQuality',
    bigNumber3Value: '500+',
    bigNumber3Label_pt: 'Campanhas\nGerenciadas',
    bigNumber3Label_en: 'Campaigns\nManaged',
    bigNumber4Value: '3',
    bigNumber4Label_pt: 'Países\nLATAM',
    bigNumber4Label_en: 'Countries\nLATAM',
    bigNumber5Value: '500',
    bigNumber5Label_pt: 'Vouchers\nem 8min',
    bigNumber5Label_en: 'Vouchers\nin 8min',
    bigNumber6Value: '9+',
    bigNumber6Label_pt: 'Empresas\nLideradas',
    bigNumber6Label_en: 'Companies\nLed',
    bigNumber7Value: '15K+',
    bigNumber7Label_pt: 'Leads\nGerados',
    bigNumber7Label_en: 'Leads\nGenerated',
    bigNumber8Value: '300%',
    bigNumber8Label_pt: 'ROI\nMédio',
    bigNumber8Label_en: 'Average\nROI',
    bigNumber9Value: '50+',
    bigNumber9Label_pt: 'Campanhas\nLançadas',
    bigNumber9Label_en: 'Campaigns\nLaunched',
    
    // Timeline
    timelineIcon: 'TrendingUp',
    timelineTitle_pt: 'Overview Cronológico',
    timelineTitle_en: 'Chronological Overview',
    timelineItems: [
      { id: '1', date: '2024 - 2025', company: 'FictorPay' },
      { id: '2', date: '2022 - 2024', company: 'Shopee' },
      { id: '3', date: '2021 - 2022', company: 'Comgás' },
      { id: '4', date: '2020 - 2021', company: 'Be Arts' },
      { id: '5', date: '2019 - 2020', company: 'Baer-Mate' },
      { id: '6', date: '2019', company: 'Puff BR' },
      { id: '7', date: '2014 - 2019', company: 'Get2Gether' },
      { id: '8', date: '2013 - 2014', company: 'Future Group' },
      { id: '9', date: '2011 - 2012', company: 'TV Globo' },
    ],
    
    // Cases de Sucesso
    casesIcon: 'Award',
    casesTitle_pt: 'CASES DE SUCESSO',
    casesTitle_en: 'SUCCESS CASES',
    caseItems: [
      {
        id: '1',
        icon: 'Zap',
        color: 'orange' as const,
        image: 'https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wZWUlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzE2MjA2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title_pt: 'Automação de Vouchers em Massa',
        title_en: 'Mass Voucher Automation',
        company: 'Shopee',
        challenge_pt: 'Processo manual demorava horas para criar centenas de vouchers promocionais.',
        challenge_en: 'Manual process took hours to create hundreds of promotional vouchers.',
        solution_pt: 'Desenvolvi automação em Excel que criou 500 vouchers em apenas 8 minutos.',
        solution_en: 'Developed Excel automation that created 500 vouchers in just 8 minutes.',
        metric1: '500',
        metric1Label_pt: 'Vouchers',
        metric1Label_en: 'Vouchers',
        metric2: '8min',
        metric2Label_pt: 'Tempo',
        metric2Label_en: 'Time',
        metric3: '98%',
        metric3Label_pt: 'Qualidade',
        metric3Label_en: 'Quality',
        finalImpact_pt: 'Transformou processo de horas em minutos, liberando equipe para atividades estratégicas.',
        finalImpact_en: 'Transformed hours-long process into minutes, freeing team for strategic activities.',
      },
      {
        id: '2',
        icon: 'TrendingUp',
        color: 'cyan' as const,
        image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzcxNjIwNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title_pt: 'Qualidade 98% em Campanhas',
        title_en: '98% Campaign Quality',
        company: 'Shopee',
        challenge_pt: 'Manter alta qualidade em mais de 50 atividades de marketing simultâneas.',
        challenge_en: 'Maintain high quality across 50+ simultaneous marketing activities.',
        solution_pt: 'Implementei processos de QC rigorosos e auditorias automatizadas.',
        solution_en: 'Implemented rigorous QC processes and automated audits.',
        metric1: '98%',
        metric1Label_pt: 'Qualidade',
        metric1Label_en: 'Quality',
        metric2: '50+',
        metric2Label_pt: 'Atividades',
        metric2Label_en: 'Activities',
        metric3: '0',
        metric3Label_pt: 'Erros Críticos',
        metric3Label_en: 'Critical Errors',
        finalImpact_pt: 'Garantiu integridade de campanhas críticas e mitigou riscos jurídicos.',
        finalImpact_en: 'Ensured integrity of critical campaigns and mitigated legal risks.',
      },
      {
        id: '3',
        icon: 'Target',
        color: 'blue' as const,
        image: 'https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NzE1NDQ3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title_pt: 'Planning LATAM Regionalizado',
        title_en: 'Regional LATAM Planning',
        company: 'Shopee',
        challenge_pt: 'Coordenar planejamento de campanhas em 3 países simultaneamente.',
        challenge_en: 'Coordinate campaign planning across 3 countries simultaneously.',
        solution_pt: 'Estruturei processos regionalizados e gestão centralizada de budget.',
        solution_en: 'Structured regional processes and centralized budget management.',
        metric1: '3',
        metric1Label_pt: 'Países',
        metric1Label_en: 'Countries',
        metric2: '100%',
        metric2Label_pt: 'Alinhamento',
        metric2Label_en: 'Alignment',
        metric3: '$$$',
        metric3Label_pt: 'Budget',
        metric3Label_en: 'Budget',
        finalImpact_pt: 'Liderança de ciclo completo de Black Friday e Double Dates nos 3 países.',
        finalImpact_en: 'Led full cycle of Black Friday and Double Dates across 3 countries.',
      },
    ],
  },
  aboutStyles: DEFAULT_ABOUT_STYLES,
  experiences: [],
  skills: [
    { id: '1', name: 'Marketing Digital', category: 'business', level: 5 },
    { id: '2', name: 'Data Analysis', category: 'technical', level: 4 },
    { id: '3', name: 'Gestão de Projetos', category: 'business', level: 5 },
    { id: '4', name: 'Liderança', category: 'soft', level: 5 },
    { id: '5', name: 'Python', category: 'technical', level: 3 },
    { id: '6', name: 'SQL', category: 'technical', level: 4 },
  ],
  education: [
    {
      id: '1',
      institution: 'Universidade de São Paulo',
      degree: 'Mestrado',
      field: 'Engenharia de Software',
      period: '2015 - 2017',
      description: 'Especialização em desenvolvimento de software e sistemas distribuídos.',
    },
    {
      id: '2',
      institution: 'Instituto Tecnológico de Aeronáutica',
      degree: 'Graduação',
      field: 'Sistemas de Informação',
      period: '2010 - 2014',
      description: 'Formação em sistemas de informação com ênfase em gerenciamento de projetos.',
    },
  ],
  languages: [
    { id: '1', name: 'Português', level: 'native' },
    { id: '2', name: 'Inglês', level: 'fluent' },
    { id: '3', name: 'Espanhol', level: 'intermediate' },
  ],
  testimonials: [
    {
      id: '1',
      name: 'Maria Silva',
      role: 'Gerente de Marketing',
      company: 'Tech Corp',
      photo: 'https://via.placeholder.com/150',
      text: 'Fernando é um profissional altamente qualificado e dedicado. Seu conhecimento em marketing digital e análise de dados foi fundamental para o sucesso do nosso projeto.',
      rating: 5,
    },
    {
      id: '2',
      name: 'João Oliveira',
      role: 'Diretor de Operações',
      company: 'Startup XYZ',
      photo: 'https://via.placeholder.com/150',
      text: 'Fernando é um líder excepcional. Sua capacidade de gerenciar equipes multidisciplinares e implementar processos ágeis foi crucial para o crescimento da nossa empresa.',
      rating: 5,
    },
  ],
};

// ========================================
// FUNÇÕES DE STORAGE
// ========================================

/**
 * 🔄 Migração automática de dados antigos para novo formato bilíngue
 */
function migrateHeroData(oldHero: any): HeroData {
  // Se já tem campos _pt/_en, retornar como está (mas garantir todos os campos)
  if (oldHero.badge_pt !== undefined) {
    return { ...DEFAULT_DATA.hero, ...oldHero };
  }

  // 🔄 MIGRAÇÃO: Converter campos antigos para bilíngue
  console.log('🔄 Migrando dados do Hero para formato bilíngue...');
  
  return {
    // Migrar campos antigos para _pt e usar padrão para _en
    badge_pt: oldHero.badge || DEFAULT_DATA.hero.badge_pt,
    badge_en: DEFAULT_DATA.hero.badge_en,
    title1_pt: oldHero.title1 || DEFAULT_DATA.hero.title1_pt,
    title1_en: DEFAULT_DATA.hero.title1_en,
    title2_pt: oldHero.title2 || DEFAULT_DATA.hero.title2_pt,
    title2_en: DEFAULT_DATA.hero.title2_en,
    title3_pt: oldHero.title3 || DEFAULT_DATA.hero.title3_pt,
    title3_en: DEFAULT_DATA.hero.title3_en,
    title4_pt: oldHero.title4 || DEFAULT_DATA.hero.title4_pt,
    title4_en: DEFAULT_DATA.hero.title4_en,
    location_pt: oldHero.location || DEFAULT_DATA.hero.location_pt,
    location_en: DEFAULT_DATA.hero.location_en,
    email: oldHero.email || DEFAULT_DATA.hero.email,
    cardName_pt: oldHero.cardName || DEFAULT_DATA.hero.cardName_pt,
    cardName_en: DEFAULT_DATA.hero.cardName_en,
    cardRole_pt: oldHero.cardRole || DEFAULT_DATA.hero.cardRole_pt,
    cardRole_en: DEFAULT_DATA.hero.cardRole_en,
    button1Text_pt: oldHero.button1Text || DEFAULT_DATA.hero.button1Text_pt,
    button1Text_en: DEFAULT_DATA.hero.button1Text_en,
    button1Link: oldHero.button1Link || DEFAULT_DATA.hero.button1Link,
    button2Text_pt: oldHero.button2Text || DEFAULT_DATA.hero.button2Text_pt,
    button2Text_en: DEFAULT_DATA.hero.button2Text_en,
    button2Link: oldHero.button2Link || DEFAULT_DATA.hero.button2Link,
    avatarUrl: oldHero.avatarUrl || DEFAULT_DATA.hero.avatarUrl,
    backgroundColor: oldHero.backgroundColor || DEFAULT_DATA.hero.backgroundColor,
    backgroundGradient: oldHero.backgroundGradient || DEFAULT_DATA.hero.backgroundGradient,
    backgroundImage: oldHero.backgroundImage,
  };
}

export function loadData(): PortfolioData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return DEFAULT_DATA;
    }
    
    const parsed = JSON.parse(stored);
    
    // 🔄 Aplicar migração do Hero
    const migratedHero = migrateHeroData(parsed.hero || {});
    
    // 🔄 MIGRAÇÃO: Garantir que backgroundColor e borderColor existam nos botões
    const migrateButtonStyles = (button: any, defaultButton: any) => {
      return {
        ...defaultButton,
        ...button,
        // Garantir que backgroundColor e borderColor existam
        backgroundColor: button?.backgroundColor !== undefined ? button.backgroundColor : defaultButton.backgroundColor,
        borderColor: button?.borderColor !== undefined ? button.borderColor : defaultButton.borderColor,
      };
    };
    
    // Migração automática: mesclar com valores padrão para garantir que novos campos existam
    return {
      hero: migratedHero,
      heroStyles: {
        badge: { ...DEFAULT_HERO_STYLES.badge, ...parsed.heroStyles?.badge },
        badgeContent: parsed.heroStyles?.badgeContent || DEFAULT_HERO_STYLES.badgeContent,
        badgeElement: parsed.heroStyles?.badgeElement || DEFAULT_HERO_STYLES.badgeElement,
        badgeContainer: parsed.heroStyles?.badgeContainer || DEFAULT_HERO_STYLES.badgeContainer,
        badgeEffects: parsed.heroStyles?.badgeEffects || DEFAULT_HERO_STYLES.badgeEffects,
        title1: { ...DEFAULT_HERO_STYLES.title1, ...parsed.heroStyles?.title1 },
        title1Container: parsed.heroStyles?.title1Container || DEFAULT_HERO_STYLES.title1Container,
        title1Effects: parsed.heroStyles?.title1Effects || DEFAULT_HERO_STYLES.title1Effects,
        title2: { ...DEFAULT_HERO_STYLES.title2, ...parsed.heroStyles?.title2 },
        title2Container: parsed.heroStyles?.title2Container || DEFAULT_HERO_STYLES.title2Container,
        title2Effects: parsed.heroStyles?.title2Effects || DEFAULT_HERO_STYLES.title2Effects,
        title3: { ...DEFAULT_HERO_STYLES.title3, ...parsed.heroStyles?.title3 },
        title3Container: parsed.heroStyles?.title3Container || DEFAULT_HERO_STYLES.title3Container,
        title3Effects: parsed.heroStyles?.title3Effects || DEFAULT_HERO_STYLES.title3Effects,
        title4: { ...DEFAULT_HERO_STYLES.title4, ...parsed.heroStyles?.title4 },
        title4Container: parsed.heroStyles?.title4Container || DEFAULT_HERO_STYLES.title4Container,
        title4Effects: parsed.heroStyles?.title4Effects || DEFAULT_HERO_STYLES.title4Effects,
        location: { ...DEFAULT_HERO_STYLES.location, ...parsed.heroStyles?.location },
        locationContent: parsed.heroStyles?.locationContent || DEFAULT_HERO_STYLES.locationContent,
        email: { ...DEFAULT_HERO_STYLES.email, ...parsed.heroStyles?.email },
        emailContent: parsed.heroStyles?.emailContent || DEFAULT_HERO_STYLES.emailContent,
        cardName: { ...DEFAULT_HERO_STYLES.cardName, ...parsed.heroStyles?.cardName },
        cardRole: { ...DEFAULT_HERO_STYLES.cardRole, ...parsed.heroStyles?.cardRole },
        cardContainer: parsed.heroStyles?.cardContainer || DEFAULT_HERO_STYLES.cardContainer,
        button1: migrateButtonStyles(parsed.heroStyles?.button1, DEFAULT_HERO_STYLES.button1),
        button1Element: parsed.heroStyles?.button1Element || DEFAULT_HERO_STYLES.button1Element,
        button2: migrateButtonStyles(parsed.heroStyles?.button2, DEFAULT_HERO_STYLES.button2),
        button2Element: parsed.heroStyles?.button2Element || DEFAULT_HERO_STYLES.button2Element,
      },
      about: { 
        ...DEFAULT_DATA.about, 
        ...parsed.about,
        stats: { ...DEFAULT_DATA.about.stats, ...parsed.about?.stats },
      },
      aboutStyles: {
        // 🔄 Migração: garantir todos os campos novos
        // Se aboutStyles existir mas for do formato antigo (title/description), migrar para novos campos
        sectionTitle: parsed.aboutStyles?.sectionTitle || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.sectionTitle,
        sectionTitleHighlight: parsed.aboutStyles?.sectionTitleHighlight || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.sectionTitleHighlight,
        aboutTitle: parsed.aboutStyles?.aboutTitle || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.aboutTitle,
        aboutText: parsed.aboutStyles?.aboutText || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.aboutText,
        aboutTextContainer: parsed.aboutStyles?.aboutTextContainer || DEFAULT_ABOUT_STYLES.aboutTextContainer,
        aboutTextEffects: parsed.aboutStyles?.aboutTextEffects || DEFAULT_ABOUT_STYLES.aboutTextEffects,
        aboutContent: parsed.aboutStyles?.aboutContent || DEFAULT_ABOUT_STYLES.aboutContent,
        aboutCard: parsed.aboutStyles?.aboutCard || DEFAULT_ABOUT_STYLES.aboutCard,
        educationTitle: parsed.aboutStyles?.educationTitle || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.educationTitle,
        educationDegree: parsed.aboutStyles?.educationDegree || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.educationDegree,
        educationInstitution: parsed.aboutStyles?.educationInstitution || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.educationInstitution,
        educationInstitutionContainer: parsed.aboutStyles?.educationInstitutionContainer || DEFAULT_ABOUT_STYLES.educationInstitutionContainer,
        educationInstitutionEffects: parsed.aboutStyles?.educationInstitutionEffects || DEFAULT_ABOUT_STYLES.educationInstitutionEffects,
        educationPeriod: parsed.aboutStyles?.educationPeriod || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.educationPeriod,
        educationPeriodContainer: parsed.aboutStyles?.educationPeriodContainer || DEFAULT_ABOUT_STYLES.educationPeriodContainer,
        educationPeriodEffects: parsed.aboutStyles?.educationPeriodEffects || DEFAULT_ABOUT_STYLES.educationPeriodEffects,
        languagesTitle: parsed.aboutStyles?.languagesTitle || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.languagesTitle,
        languageFlag: parsed.aboutStyles?.languageFlag || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.languageFlag,
        languageFlagContainer: parsed.aboutStyles?.languageFlagContainer || DEFAULT_ABOUT_STYLES.languageFlagContainer,
        languageFlagEffects: parsed.aboutStyles?.languageFlagEffects || DEFAULT_ABOUT_STYLES.languageFlagEffects,
        languageName: parsed.aboutStyles?.languageName || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.languageName,
        languageLevel: parsed.aboutStyles?.languageLevel || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.languageLevel,
        skillsTitle: parsed.aboutStyles?.skillsTitle || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.skillsTitle,
        skillName: parsed.aboutStyles?.skillName || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.skillName,
        skillNameContainer: parsed.aboutStyles?.skillNameContainer || DEFAULT_ABOUT_STYLES.skillNameContainer,
        skillNameEffects: parsed.aboutStyles?.skillNameEffects || DEFAULT_ABOUT_STYLES.skillNameEffects,
        skillCategory: parsed.aboutStyles?.skillCategory || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.skillCategory,
        certificationsTitle: parsed.aboutStyles?.certificationsTitle || parsed.aboutStyles?.title || DEFAULT_ABOUT_STYLES.certificationsTitle,
        certificationName: parsed.aboutStyles?.certificationName || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.certificationName,
        certificationNameContainer: parsed.aboutStyles?.certificationNameContainer || DEFAULT_ABOUT_STYLES.certificationNameContainer,
        certificationNameEffects: parsed.aboutStyles?.certificationNameEffects || DEFAULT_ABOUT_STYLES.certificationNameEffects,
        certificationIssuer: parsed.aboutStyles?.certificationIssuer || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.certificationIssuer,
        certificationDate: parsed.aboutStyles?.certificationDate || parsed.aboutStyles?.description || DEFAULT_ABOUT_STYLES.certificationDate,
        statsYears: parsed.aboutStyles?.statsYears || DEFAULT_ABOUT_STYLES.statsYears,
        statsProjects: parsed.aboutStyles?.statsProjects || DEFAULT_ABOUT_STYLES.statsProjects,
        statsClients: parsed.aboutStyles?.statsClients || DEFAULT_ABOUT_STYLES.statsClients,
      },
      experiences: parsed.experiences || DEFAULT_DATA.experiences,
      skills: parsed.skills || DEFAULT_DATA.skills,
      education: parsed.education || DEFAULT_DATA.education,
      languages: parsed.languages || DEFAULT_DATA.languages,
      testimonials: parsed.testimonials || DEFAULT_DATA.testimonials,
    };
  } catch (error) {
    console.error('Erro ao carregar dados do storage:', error);
    return DEFAULT_DATA;
  }
}

/**
 * Salva TODOS os dados do portfolio
 */
export function saveData(data: PortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    throw new Error('Falha ao salvar dados. Verifique o espaço disponível.');
  }
}

/**
 * Atualiza apenas uma seção específica
 */
export function updateSection<K extends keyof PortfolioData>(
  section: K,
  data: PortfolioData[K]
): void {
  const current = loadData();
  current[section] = data;
  saveData(current);
}

/**
 * Restaura dados padrão
 */
export function resetData(): void {
  saveData(DEFAULT_DATA);
}

/**
 * Exporta dados como JSON (para backup)
 */
export function exportData(): string {
  const data = loadData();
  return JSON.stringify(data, null, 2);
}

/**
 * Importa dados de JSON (restaurar backup)
 */
export function importData(jsonString: string): void {
  try {
    const data = JSON.parse(jsonString);
    saveData(data);
  } catch (error) {
    console.error('Erro ao importar dados:', error);
    throw new Error('JSON inválido. Verifique o formato do arquivo.');
  }
}

/**
 * Verifica se há dados salvos
 */
export function hasCustomData(): boolean {
  return localStorage.getItem(STORAGE_KEY) !== null;
}

/**
 * ⚡ Atualiza dados E dispara evento para preview instantâneo
 * Usado para sincronizar admin → preview em tempo real
 */
export function updateDataInstant(data: PortfolioData): void {
  // Salva no localStorage
  saveData(data);
  
  // Dispara evento customizado para o preview escutar
  console.log('⚡ UPDATE INSTANT:', {
    aboutText: data.about.aboutText_pt?.substring(0, 30),
    educationItems: data.about.educationItems.length,
    hero: data.hero.title1_pt?.substring(0, 20)
  });
  
  window.dispatchEvent(
    new CustomEvent('admin-preview-update', { 
      detail: data 
    })
  );
}