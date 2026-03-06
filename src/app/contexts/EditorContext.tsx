import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PortfolioData {
  hero: {
    badge: string;
    name: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    location: string;
    email: string;
    cardName: string;
    cardRole: string;
  };
  about: {
    profileText: string;
  };
  experiences: Array<{
    id: string;
    company: string;
    role: string;
    period: string;
    scope: string;
    achievements: Array<{
      title: string;
      desc: string;
    }>;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: number;
    category: string;
  }>;
}

interface EditorContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  portfolioData: PortfolioData;
  updateData: (section: string, data: any) => void;
  saveData: () => void;
  loadData: () => void;
  exportData: () => void;
  importData: (data: PortfolioData) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

const DEFAULT_DATA: PortfolioData = {
  hero: {
    badge: 'Sênior Operations Leader',
    name: 'FERNANDO BRANCO',
    title1: 'MARKETING',
    title2: '360',
    title3: 'DATA & PROCESSOS',
    title4: 'GO TO MARKET',
    title5: 'GESTÃO DE STAKEHOLDERS',
    location: 'São Paulo, Brasil',
    email: 'fernando@g2g.org.br',
    cardName: 'FERNANDO BRANCO',
    cardRole: 'Operations Architect',
  },
  about: {
    profileText: 'Liderança estratégica com 19 anos de experiência em Marketing Operations...',
  },
  experiences: [],
  skills: [],
};

export function EditorProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(DEFAULT_DATA);

  // Carregar dados do localStorage ao montar
  useEffect(() => {
    loadData();
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const updateData = (section: string, data: any) => {
    setPortfolioData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const saveData = () => {
    try {
      localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      return false;
    }
  };

  const loadData = () => {
    try {
      const saved = localStorage.getItem('portfolioData');
      if (saved) {
        setPortfolioData(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = (data: PortfolioData) => {
    setPortfolioData(data);
    localStorage.setItem('portfolioData', JSON.stringify(data));
  };

  return (
    <EditorContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        portfolioData,
        updateData,
        saveData,
        loadData,
        exportData,
        importData,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within EditorProvider');
  }
  return context;
}
