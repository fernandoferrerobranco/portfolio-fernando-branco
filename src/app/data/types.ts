// Type definitions for the portfolio

export type Language = 'pt' | 'en';

export interface Achievement {
  title: string;
  desc: string;
}

export interface TimelineStep {
  position: string;
  level: string;
  region: string;
}

export interface Experience {
  id: string;
  dateRange: string;
  dateColor: string;
  company: string;
  companyType: string;
  companyColor: string;
  role: string;
  iconColor: string;
  scope: string;
  achievements?: Achievement[];
  phase1Title?: string;
  phase1Subtitle?: string;
  phase1Desc?: string;
  phase2Title?: string;
  phase2Items?: Achievement[];
  phase3Title?: string;
  phase3Items?: Achievement[];
}

export interface TranslationContent {
  nav: {
    profile: string;
    timeline: string;
    experience: string;
    skills: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    location: string;
    cta1: string;
    cta2: string;
    cardName: string;
    cardRole: string;
  };
  trajectory: {
    title: string;
    titleHighlight: string;
    about: string;
    profileText: string;
    bigNumbers: {
      label1: string;
      label2: string;
      label3: string;
      label4: string;
      label5: string;
      label6: string;
    };
    bento: {
      card1: { title: string; desc: string };
      card2: { title: string; desc: string };
      card3: { title: string; desc: string };
      card4: { title: string; desc: string };
    };
    timelineBadge: string;
    timelineTitle: string;
    timelineTitleHighlight: string;
  };
  sections: {
    detailedExp: string;
    education: string;
    languages: string;
    cases: string;
    testimonials: string;
  };
  experiences: {
    [key: string]: {
      role: string;
      scope: string;
      achievements?: Achievement[];
      timeline?: TimelineStep[];
      timelineTitle?: string;
      phase1Title?: string;
      phase1Subtitle?: string;
      phase1Desc?: string;
      phase2Title?: string;
      phase2Items?: Achievement[];
      phase3Title?: string;
      phase3Items?: Achievement[];
    };
  };
  education: any;
  languages: any;
  cases: any;
  testimonials: any;
  footer: any;
}

export type Translations = {
  [K in Language]: TranslationContent;
};
