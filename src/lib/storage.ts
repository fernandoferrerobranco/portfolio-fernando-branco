/**
 * 💾 SISTEMA DE STORAGE SIMPLES - localStorage
 * 
 * Gerencia TODOS os dados do portfolio de forma centralizada
 */

const STORAGE_KEY = 'portfolio_data_v1';

// ========================================
// TIPOS DE DADOS
// ========================================

export interface HeroData {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  location: string;
  email: string;
  cardName: string;
  cardRole: string;
}

export interface AboutData {
  title: string;
  description: string;
  stats: {
    years: string;
    projects: string;
    clients: string;
  };
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

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experiences: Experience[];
  skills: Skill[];
  // Futuro: education, languages, testimonials, etc.
}

// ========================================
// DADOS PADRÃO
// ========================================

const DEFAULT_DATA: PortfolioData = {
  hero: {
    badge: 'Sênior Operations Leader',
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
    title: 'Transformo ideias em resultados mensuráveis',
    description: 'Com mais de 10 anos de experiência em operações e marketing, especializo-me em estruturar processos escaláveis e impulsionar crescimento sustentável.',
    stats: {
      years: '10+',
      projects: '50+',
      clients: '100+',
    },
  },
  experiences: [
    {
      id: '1',
      company: 'Tech Corp',
      role: 'Operations Director',
      period: '2020 - Presente',
      description: 'Liderança de equipes multidisciplinares e implementação de processos ágeis.',
      tags: ['Gestão', 'Processos', 'Agile'],
    },
    {
      id: '2',
      company: 'Startup XYZ',
      role: 'Marketing Manager',
      period: '2018 - 2020',
      description: 'Crescimento de 300% em MRR através de estratégias data-driven.',
      tags: ['Growth', 'Marketing', 'Data'],
    },
  ],
  skills: [
    { id: '1', name: 'Marketing Digital', category: 'business', level: 5 },
    { id: '2', name: 'Data Analysis', category: 'technical', level: 4 },
    { id: '3', name: 'Gestão de Projetos', category: 'business', level: 5 },
    { id: '4', name: 'Liderança', category: 'soft', level: 5 },
    { id: '5', name: 'Python', category: 'technical', level: 3 },
    { id: '6', name: 'SQL', category: 'technical', level: 4 },
  ],
};

// ========================================
// FUNÇÕES DE STORAGE
// ========================================

/**
 * Carrega TODOS os dados do portfolio
 */
export function loadData(): PortfolioData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return DEFAULT_DATA;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
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
