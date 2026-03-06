import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loadData, type PortfolioData } from './storage';

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: PortfolioData) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(loadData());

  // Sincronizar com localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setData(loadData());
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Listener customizado para mudanças internas (mesmo tab)
    window.addEventListener('portfolio-updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('portfolio-updated', handleStorageChange);
    };
  }, []);

  const updateData = (newData: PortfolioData) => {
    setData(newData);
    // Disparar evento customizado para preview instantâneo
    window.dispatchEvent(new Event('portfolio-updated'));
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
}
