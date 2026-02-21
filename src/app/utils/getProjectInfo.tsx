import { projectId, publicAnonKey } from '/utils/supabase/info';

/**
 * Componente helper para mostrar informações do projeto Supabase
 * Use em desenvolvimento para pegar o PROJECT_ID
 */
export function GetProjectInfo() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      background: '#0f172a',
      border: '2px solid #06b6d4',
      borderRadius: 12,
      padding: 20,
      color: 'white',
      fontFamily: 'monospace',
      fontSize: 12,
      zIndex: 9999,
      maxWidth: 400,
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#06b6d4', fontSize: 14, fontWeight: 'bold' }}>
        📋 INFORMAÇÕES DO PROJETO
      </h3>
      <div style={{ marginBottom: 10 }}>
        <strong style={{ color: '#22d3ee' }}>PROJECT_ID:</strong>
        <div style={{
          background: '#1e293b',
          padding: 8,
          borderRadius: 6,
          marginTop: 4,
          cursor: 'pointer',
          border: '1px solid #334155'
        }}
        onClick={() => {
          navigator.clipboard.writeText(projectId);
          alert('✅ PROJECT_ID copiado!');
        }}
        title="Clique para copiar"
        >
          {projectId}
        </div>
      </div>
      <div style={{ fontSize: 10, color: '#64748b', marginTop: 10 }}>
        💡 Clique para copiar o PROJECT_ID
      </div>
    </div>
  );
}

// Função para usar no console
export function showProjectInfo() {
  console.log('%c📋 INFORMAÇÕES DO PROJETO SUPABASE', 'color: #06b6d4; font-size: 16px; font-weight: bold');
  console.log('%cPROJECT_ID:', 'color: #22d3ee; font-weight: bold', projectId);
  console.log('%cPUBLIC_ANON_KEY:', 'color: #22d3ee; font-weight: bold', publicAnonKey);
  console.log('%c\n✅ PROJECT_ID copiado para você usar!', 'color: #10b981; font-weight: bold');
  return projectId;
}

// Disponibilizar globalmente para fácil acesso
if (typeof window !== 'undefined') {
  (window as any).showProjectInfo = showProjectInfo;
  (window as any).PROJECT_ID = projectId;
}
