import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AdminContextType {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  scrollToComponent: (componentId: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Log apenas quando montar
  useEffect(() => {
    console.log('🏗️ AdminProvider montado!');
  }, []);

  // Log quando activeSection mudar
  useEffect(() => {
    console.log('📍 AdminProvider - activeSection mudou para:', activeSection);
  }, [activeSection]);

  const setActiveSectionWithLog = (section: string | null) => {
    console.log('🎯 AdminContext - setActiveSection chamado com:', section);
    setActiveSection(section);
  };

  /**
   * 🎯 Scroll automático DUPLO: Preview + Admin
   * Quando clica no ícone de âncora, rola TANTO o preview QUANTO o painel admin
   * 
   * SOLUÇÃO DEFINITIVA - Usa offsetParent para scroll não-acumulativo
   */
  const scrollToComponent = (componentId: string) => {
    console.log('🎯 AdminContext - scrollToComponent:', componentId);
    
    // 1️⃣ Ativar highlight no preview
    setActiveSectionWithLog(componentId);
    
    // 2️⃣ Scroll no PREVIEW (lado direito)
    setTimeout(() => {
      const previewElement = document.getElementById(componentId);
      if (!previewElement) {
        console.warn('⚠️ Elemento não encontrado no preview:', componentId);
        return;
      }
      
      console.log('✅ Encontrou elemento no preview:', componentId);
      
      // Encontrar o container de scroll do preview
      const scrollContainer = document.getElementById('preview-scroll-container');
      
      if (!scrollContainer) {
        console.warn('⚠️ Container de scroll não encontrado');
        return;
      }
      
      // 🎯 SOLUÇÃO: Calcular offset acumulativo do elemento até o container
      let offsetTop = 0;
      let element = previewElement as HTMLElement | null;
      
      console.log('🔍 INÍCIO - Calculando offset para:', componentId);
      console.log('  - previewElement.offsetTop:', previewElement.offsetTop);
      console.log('  - previewElement.offsetParent:', previewElement.offsetParent);
      
      // Somar offsets até chegar no container
      while (element && element !== scrollContainer) {
        console.log('  - Loop: element.offsetTop =', element.offsetTop, ', element =', element.tagName, element.id || element.className);
        offsetTop += element.offsetTop;
        element = element.offsetParent as HTMLElement | null;
      }
      
      console.log('🔍 FIM - offsetTop acumulado:', offsetTop);
      
      // 🎨 Margem do topo e bottom para "respiro" visual
      // 🔧 AUMENTADO: 150px garante que o elemento apareça BEM no topo
      const headerOffset = 150;
      
      // Scroll absoluto (não relativo!)
      const targetScroll = offsetTop - headerOffset;
      
      scrollContainer.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
      
      console.log('📍 Scroll calculado:', {
        componentId,
        offsetTop,
        targetScroll,
        finalScroll: Math.max(0, targetScroll),
        containerScrollTop: scrollContainer.scrollTop,
      });
    }, 100);
  };

  return (
    <AdminContext.Provider value={{ activeSection, setActiveSection: setActiveSectionWithLog, scrollToComponent }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}

// Hook seguro que retorna null se não estiver no AdminProvider
export function useAdminSafe() {
  const context = useContext(AdminContext);
  return context?.activeSection ?? null;
}