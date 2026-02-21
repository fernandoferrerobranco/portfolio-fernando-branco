# 📦 LISTA COMPLETA DE ARQUIVOS PARA DOWNLOAD

## 🎯 INSTRUÇÕES DE DOWNLOAD

**Copie cada arquivo listado abaixo do Figma Make para seu computador.**

Para cada arquivo:
1. Clique no arquivo no explorador do Figma Make
2. Selecione TODO o conteúdo (Ctrl+A)
3. Copie (Ctrl+C)
4. Cole em um editor de texto local
5. Salve com o MESMO nome e extensão
6. Mantenha a estrutura de pastas

---

## 📂 ARQUIVOS PRINCIPAIS (RAIZ)

### ✅ package.json
- **Descrição:** Dependências e scripts do projeto
- **Caminho:** `/package.json`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ vite.config.ts
- **Descrição:** Configuração do bundler Vite
- **Caminho:** `/vite.config.ts`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ tsconfig.json
- **Descrição:** Configuração do TypeScript
- **Caminho:** `/tsconfig.json`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ postcss.config.mjs
- **Descrição:** Configuração do PostCSS
- **Caminho:** `/postcss.config.mjs`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ index.html
- **Descrição:** HTML principal da aplicação
- **Caminho:** `/index.html`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ⚪ .gitignore (CRIAR MANUALMENTE)
- **Descrição:** Arquivos ignorados pelo Git
- **Caminho:** `/.gitignore`
- **Obrigatório:** ✅ Recomendado

**Conteúdo do .gitignore:**
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Dependencies
node_modules
dist
dist-ssr
*.local

# Editor directories
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production.local
.env.development.local
.env.test.local
```

### ⚪ README.md (CRIAR MANUALMENTE)
- **Descrição:** Documentação do projeto
- **Caminho:** `/README.md`
- **Obrigatório:** ✅ Recomendado

**Conteúdo do README.md:**
```markdown
# Portfólio Fernando Ferrero Branco

Portfólio pessoal desenvolvido com React, TypeScript, Tailwind CSS e Vite.

## 🚀 Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide Icons
- AOS (Animate On Scroll)
- Supabase (Backend)

## 📦 Instalação

\`\`\`bash
npm install
\`\`\`

## 🔧 Desenvolvimento

\`\`\`bash
npm run dev
\`\`\`

## 🏗️ Build

\`\`\`bash
npm run build
\`\`\`

## 🌐 Deploy

Deploy automático via Vercel.

## 📝 Licença

© 2026 Fernando Ferrero Branco. Todos os direitos reservados.
```

---

## 📂 PASTA: /src/app/

### ✅ App.tsx
- **Descrição:** Componente principal da aplicação
- **Caminho:** `/src/app/App.tsx`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ main.tsx
- **Descrição:** Entry point da aplicação
- **Caminho:** `/src/main.tsx`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

**⚠️ NOTA:** Verificar se `main.tsx` está em `/src/main.tsx` ou `/src/app/main.tsx`

---

## 📂 PASTA: /src/app/components/

**TODOS OBRIGATÓRIOS - Componentes principais:**

1. ✅ **AccordionItem.tsx** - Accordion reutilizável
2. ✅ **Counter.tsx** - Contador animado
3. ✅ **DemoBadge.tsx** - Badge de demonstração
4. ✅ **DepoimentosSection.tsx** - Seção de depoimentos
5. ✅ **ExperiencesSection.tsx** - Seção de experiências
6. ✅ **Footer.tsx** - Rodapé
7. ✅ **HeroSection.tsx** - Seção hero/topo
8. ✅ **LanguageToggle.tsx** - Botão de troca de idioma
9. ✅ **ScrollToTop.tsx** - Botão voltar ao topo
10. ✅ **SkillsSection.tsx** - Seção de skills
11. ✅ **TrajetoriaSection.tsx** - Seção de trajetória/timeline

---

## 📂 PASTA: /src/app/components/figma/

### ✅ ImageWithFallback.tsx
- **Descrição:** Componente de imagem com fallback
- **Caminho:** `/src/app/components/figma/ImageWithFallback.tsx`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

---

## 📂 PASTA: /src/app/components/ui/

**⚠️ ATENÇÃO: BAIXAR TODOS OS ARQUIVOS DESTA PASTA**

**Total de arquivos:** 50+

**Lista completa:**

1. ✅ accordion.tsx
2. ✅ alert-dialog.tsx
3. ✅ alert.tsx
4. ✅ aspect-ratio.tsx
5. ✅ avatar.tsx
6. ✅ badge.tsx
7. ✅ breadcrumb.tsx
8. ✅ button.tsx
9. ✅ calendar.tsx
10. ✅ card.tsx
11. ✅ carousel.tsx
12. ✅ chart.tsx
13. ✅ checkbox.tsx
14. ✅ collapsible.tsx
15. ✅ command.tsx
16. ✅ context-menu.tsx
17. ✅ dialog.tsx
18. ✅ drawer.tsx
19. ✅ dropdown-menu.tsx
20. ✅ form.tsx
21. ✅ hover-card.tsx
22. ✅ input-otp.tsx
23. ✅ input.tsx
24. ✅ label.tsx
25. ✅ menubar.tsx
26. ✅ navigation-menu.tsx
27. ✅ pagination.tsx
28. ✅ popover.tsx
29. ✅ progress.tsx
30. ✅ radio-group.tsx
31. ✅ resizable.tsx
32. ✅ scroll-area.tsx
33. ✅ select.tsx
34. ✅ separator.tsx
35. ✅ sheet.tsx
36. ✅ sidebar.tsx
37. ✅ skeleton.tsx
38. ✅ slider.tsx
39. ✅ sonner.tsx
40. ✅ switch.tsx
41. ✅ table.tsx
42. ✅ tabs.tsx
43. ✅ textarea.tsx
44. ✅ toggle-group.tsx
45. ✅ toggle.tsx
46. ✅ tooltip.tsx
47. ✅ use-mobile.ts
48. ✅ utils.ts

**Caminho base:** `/src/app/components/ui/`

---

## 📂 PASTA: /src/app/data/

**TODOS OBRIGATÓRIOS - Dados da aplicação:**

### ✅ experiences.ts
- **Descrição:** Dados estruturais das experiências (cores, datas)
- **Caminho:** `/src/app/data/experiences.ts`
- **Obrigatório:** ⭐ SIM - ESSENCIAL
- **Nota:** Contém cores e metadados das empresas

### ✅ translations.ts
- **Descrição:** Todas as traduções PT-BR e EN-US
- **Caminho:** `/src/app/data/translations.ts`
- **Obrigatório:** ⭐ SIM - ESSENCIAL
- **Nota:** ARQUIVO MAIS IMPORTANTE para edição de conteúdo

### ✅ types.ts
- **Descrição:** Definições de tipos TypeScript
- **Caminho:** `/src/app/data/types.ts`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

---

## 📂 PASTA: /src/styles/

**TODOS OBRIGATÓRIOS - Estilos da aplicação:**

### ✅ custom.css
- **Descrição:** Estilos customizados
- **Caminho:** `/src/styles/custom.css`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ fonts.css
- **Descrição:** Importação de fontes
- **Caminho:** `/src/styles/fonts.css`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ index.css
- **Descrição:** CSS principal
- **Caminho:** `/src/styles/index.css`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ tailwind.css
- **Descrição:** Configuração do Tailwind
- **Caminho:** `/src/styles/tailwind.css`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

### ✅ theme.css
- **Descrição:** Variáveis de tema (cores, fontes)
- **Caminho:** `/src/styles/theme.css`
- **Obrigatório:** ⭐ SIM - ESSENCIAL

---

## 📂 PASTA: /public/

**Conteúdo:** Vazia por enquanto (ou arquivos estáticos se houver)

**Criar a pasta mesmo vazia:**
- `/public/` (pasta vazia)

---

## 🗂️ ESTRUTURA FINAL

```
portfolio-fernando-branco/
│
├── public/ (vazia)
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/ (50+ arquivos)
│   │   │   ├── AccordionItem.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── DemoBadge.tsx
│   │   │   ├── DepoimentosSection.tsx
│   │   │   ├── ExperiencesSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LanguageToggle.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   └── TrajetoriaSection.tsx
│   │   ├── data/
│   │   │   ├── experiences.ts
│   │   │   ├── translations.ts
│   │   │   └── types.ts
│   │   └── App.tsx
│   ├── styles/
│   │   ├── custom.css
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx
│
├── .gitignore (criar)
├── index.html
├── package.json
├── postcss.config.mjs
├── README.md (criar)
├── tsconfig.json
└── vite.config.ts
```

---

## ✅ CHECKLIST DE DOWNLOAD

### Arquivos Raiz (7)
- [ ] package.json
- [ ] vite.config.ts
- [ ] tsconfig.json
- [ ] postcss.config.mjs
- [ ] index.html
- [ ] .gitignore (criar manualmente)
- [ ] README.md (criar manualmente)

### /src/app/ (2)
- [ ] App.tsx
- [ ] main.tsx (verificar localização)

### /src/app/components/ (11)
- [ ] AccordionItem.tsx
- [ ] Counter.tsx
- [ ] DemoBadge.tsx
- [ ] DepoimentosSection.tsx
- [ ] ExperiencesSection.tsx
- [ ] Footer.tsx
- [ ] HeroSection.tsx
- [ ] LanguageToggle.tsx
- [ ] ScrollToTop.tsx
- [ ] SkillsSection.tsx
- [ ] TrajetoriaSection.tsx

### /src/app/components/figma/ (1)
- [ ] ImageWithFallback.tsx

### /src/app/components/ui/ (50+)
- [ ] TODOS os arquivos .tsx e .ts

### /src/app/data/ (3)
- [ ] experiences.ts
- [ ] translations.ts
- [ ] types.ts

### /src/styles/ (5)
- [ ] custom.css
- [ ] fonts.css
- [ ] index.css
- [ ] tailwind.css
- [ ] theme.css

### /public/
- [ ] Criar pasta vazia

---

## 🎯 TOTAL DE ARQUIVOS

**Essenciais:** ~75 arquivos
**Opcionais mas recomendados:** 2 (.gitignore, README.md)
**Total:** ~77 arquivos

---

## ⚡ MÉTODO RÁPIDO DE DOWNLOAD

### Opção 1: Download Manual (Mais Seguro)
- Seguir a lista acima
- Copiar arquivo por arquivo
- ⏱️ Tempo estimado: 30-45 minutos

### Opção 2: Exportar do Figma Make (Se disponível)
- Procurar função "Export" ou "Download"
- Baixar como ZIP
- ⏱️ Tempo estimado: 2 minutos

### Opção 3: Eu posso listar o conteúdo
- Posso listar o conteúdo de cada arquivo aqui
- Você copia e cola
- ⏱️ Tempo estimado: 60-90 minutos

---

## 📝 NOTAS IMPORTANTES

1. **Manter estrutura de pastas:** CRÍTICO - Não mudar nomes ou localizações
2. **Extensões de arquivo:** Manter .tsx, .ts, .css exatamente como estão
3. **Codificação:** Salvar como UTF-8
4. **Line endings:** LF (Unix) preferível, mas CRLF (Windows) funciona
5. **Não editar ainda:** Apenas baixar, edições virão depois

---

## 🆘 AJUDA

Se tiver dificuldade em baixar algum arquivo específico, me avise que eu:
1. Listo o conteúdo completo aqui
2. Te ajudo a criar manualmente
3. Sugiro alternativas

---

**PRÓXIMO PASSO:** Após baixar todos os arquivos, volte ao MANUAL_DEPLOY_COMPLETO.md na **FASE 2: GitHub**
