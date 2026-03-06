# ⚡ COMANDOS RÁPIDOS - COMECE AGORA!

## 🚀 START RÁPIDO (COPIE E COLE)

### **1. Inicie o Servidor:**
```bash
npm run dev
```
ou
```bash
pnpm dev
```

### **2. Abra no Navegador:**
```
http://localhost:5173
```

### **3. Ative o Modo Edição:**
- Procure botão **cyan flutuante** no canto direito inferior
- Clique em **"Ativar Modo Edição"**

### **4. Comece a Editar:**
- Passe mouse sobre **Hero Section** (topo)
- Clique em **"✏️ Editar"**
- Modifique os textos
- Clique **"Salvar"**
- Clique **"Salvar"** na barra superior

---

## 📂 ARQUIVOS IMPORTANTES

### **Para Desenvolver:**
```bash
# Context do Editor
/src/app/contexts/EditorContext.tsx

# Componentes do Editor
/src/app/components/editor/EditableWrapper.tsx
/src/app/components/editor/EditorModal.tsx
/src/app/components/editor/EditorToolbar.tsx

# Seções Editáveis (exemplos)
/src/app/components/editor/EditableHeroSection.tsx
/src/app/components/editor/EditableSkillsSection.tsx

# Main Portfolio
/src/app/Portfolio.tsx
```

### **Documentação:**
```bash
# Leia nesta ordem:
1. /FASE_1_COMPLETA_RESUMO.md      # Visão geral
2. /TESTAR_EDITOR_AGORA.md          # Como testar
3. /COMO_USAR_EDITOR.md             # Guia completo
4. /CHECKLIST_DESENVOLVIMENTO.md    # Próximos passos
```

---

## 🛠️ DESENVOLVIMENTO

### **Adicionar Nova Seção Editável:**

1. **Copie um exemplo:**
```bash
# Use EditableHeroSection como template
cp /src/app/components/editor/EditableHeroSection.tsx \
   /src/app/components/editor/EditableMinhaSecao.tsx
```

2. **Modifique os campos:**
```typescript
const fields = [
  { name: 'titulo', label: 'Título', type: 'text' },
  { name: 'descricao', label: 'Descrição', type: 'textarea' },
  { name: 'cor', label: 'Cor', type: 'color' },
];
```

3. **Use no Portfolio.tsx:**
```typescript
import { EditableMinhaSecao } from './components/editor/EditableMinhaSecao';

// No JSX:
<EditableMinhaSecao language={language} />
```

---

## 🎨 ESTRUTURA DE DADOS

### **LocalStorage:**
```javascript
// Ver dados salvos (Console do navegador F12):
console.log(JSON.parse(localStorage.getItem('portfolioData')));

// Limpar dados:
localStorage.removeItem('portfolioData');

// Limpar tudo:
localStorage.clear();
```

### **Estrutura do JSON:**
```json
{
  "hero": {
    "badge": "Sênior Operations Leader",
    "title1": "MARKETING",
    "title2": "360",
    "email": "fernando@g2g.org.br"
  },
  "skills": [
    {
      "id": "1",
      "name": "React",
      "level": 90,
      "category": "Frontend"
    }
  ]
}
```

---

## 🐛 DEBUG

### **Ver Logs no Console:**
```bash
# Abra DevTools (F12)
# Aba Console
# Veja erros em vermelho
```

### **Comandos Úteis no Console:**
```javascript
// Ver contexto do editor
localStorage.getItem('portfolioData')

// Forçar reload sem cache
// Ctrl + Shift + R (Windows)
// Cmd + Shift + R (Mac)
```

### **Problemas Comuns:**

**Modal não abre?**
```bash
# Verifique imports
# Veja console do navegador
# Recarregue a página (Ctrl+R)
```

**Dados não salvam?**
```bash
# 1. Salvou no modal? ✅
# 2. Salvou na barra? ✅
# 3. localStorage ativado? ✅
```

**Botão editar não aparece?**
```bash
# 1. Modo edição ativado? ✅
# 2. Passou mouse em cima? ✅
# 3. Componente tem EditableWrapper? ✅
```

---

## 📦 BUILD E DEPLOY

### **Build de Produção:**
```bash
npm run build
# ou
pnpm build
```

### **Preview do Build:**
```bash
npm run preview
# ou
pnpm preview
```

### **Deploy no Vercel:**
```bash
# 1. Instale Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Deploy em produção
vercel --prod
```

---

## 🎯 PRÓXIMAS TAREFAS

### **Hoje:**
```bash
✅ Testar editor básico
⏳ Implementar Sobre/Trajetória editável
⏳ Implementar Experiências editável
```

### **Esta Semana:**
```bash
[ ] Completar todas as seções
[ ] Adicionar upload de imagens
[ ] Testes de bugs
```

### **Próximas 2 Semanas:**
```bash
[ ] Autenticação
[ ] Landing page
[ ] Video tutorial
[ ] Primeira venda! 🎉
```

---

## 📚 RECURSOS ÚTEIS

### **Radix UI (Componentes):**
```
https://www.radix-ui.com/primitives/docs/components/dialog
```

### **Tailwind CSS:**
```
https://tailwindcss.com/docs
```

### **Lucide Icons:**
```
https://lucide.dev/icons
```

### **React Context API:**
```
https://react.dev/reference/react/useContext
```

---

## 💡 DICAS RÁPIDAS

### **Atalhos do VSCode:**
```
Ctrl + P         → Buscar arquivo
Ctrl + Shift + F → Buscar em todos os arquivos
Ctrl + D         → Selecionar próxima ocorrência
Alt + Click      → Múltiplos cursores
```

### **Git (Se usar):**
```bash
git add .
git commit -m "feat: implementar editor visual"
git push
```

### **NPM Scripts:**
```bash
npm run dev      # Desenvolvimento
npm run build    # Build
npm run preview  # Preview do build
```

---

## 🎉 COMANDOS DE CELEBRAÇÃO

### **Primeira Edição Bem-Sucedida:**
```bash
echo "🎉 FUNCIONOU! Editor no ar!"
```

### **Todas Seções Completas:**
```bash
echo "🚀 TODAS AS SEÇÕES EDITÁVEIS!"
```

### **Primeira Venda:**
```bash
echo "💰 PRIMEIRA VENDA! PARTIU ESCALAR!"
```

---

## 📞 AJUDA RÁPIDA

### **Dúvidas?**
1. Leia `/COMO_USAR_EDITOR.md`
2. Leia `/TESTAR_EDITOR_AGORA.md`
3. Veja `/CHECKLIST_DESENVOLVIMENTO.md`

### **Bugs?**
1. Abra DevTools (F12)
2. Veja Console
3. Anote o erro
4. Pesquise ou peça ajuda

### **Suporte:**
- 📧 Email: fernando@g2g.org.br
- 💬 GitHub Issues
- 📱 WhatsApp: [seu número]

---

## 🚀 VAMOS LÁ!

```bash
# COPIE E EXECUTE:
npm run dev

# Depois acesse:
# http://localhost:5173

# E clique em "Ativar Modo Edição"

# BOA SORTE! 🔥
```

---

**⚡ Made with speed and 💙 by Fernando Branco**

**AGORA É SÓ TESTAR! 🎊**
