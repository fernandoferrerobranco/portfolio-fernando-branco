# 🎨 Portfolio Editável - Template Profissional

Um template de portfolio moderno, responsivo e **100% editável** através de um painel administrativo visual.

---

## ✨ CARACTERÍSTICAS

### 🎯 **Para o Usuário Final:**
- ✅ Design moderno tech/minimalista
- ✅ Paleta cyan/azul profissional
- ✅ 100% responsivo (mobile/tablet/desktop)
- ✅ Animações suaves
- ✅ Totalmente editável via painel admin
- ✅ Zero código necessário!

### 🛠️ **Tecnologias:**
- ⚡ **Vite** - Build ultra rápido
- ⚛️ **React 18** - Framework moderno
- 🎨 **Tailwind CSS v4** - Estilização
- 💾 **localStorage** - Armazenamento local
- 📦 **Shadcn/ui** - Componentes premium

---

## 🚀 COMEÇANDO

### **1. Instalação:**

```bash
# Instalar dependências
npm install
```

### **2. Desenvolvimento local:**

```bash
# Rodar servidor dev
npm run dev
```

Acesse:
- **Site:** http://localhost:5173
- **Admin:** http://localhost:5173/admin

### **3. Build para produção:**

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

A pasta `/dist` será criada com todos os arquivos prontos para deploy.

---

## 🎨 PAINEL ADMIN

### **Como acessar:**
```
seu-site.com/admin
```

### **O que você pode editar:**

#### 📝 **Hero Section:**
- Badge principal
- 5 títulos grandes
- Localização
- Email
- Informações do card lateral

#### 👤 **Sobre Mim:**
- Título
- Descrição completa
- Estatísticas (anos, projetos, clientes)

#### 💼 **Experiências:**
- ➕ Adicionar/remover experiências
- Empresa, cargo, período
- Descrição detalhada
- Tags editáveis
- Reordenar por drag & drop

#### 🎯 **Habilidades:**
- ➕ Adicionar/remover skills
- Nome da habilidade
- Categoria (Técnica/Negócio/Soft)
- Nível de 1 a 5

### **Recursos do Admin:**

| Recurso | Descrição |
|---|---|
| 💾 **Auto-save** | Indicador de mudanças não salvas |
| 👁️ **Preview** | Visualizar site em nova aba |
| 📥 **Backup** | Exportar dados em JSON |
| 📤 **Restore** | Importar backup JSON |
| 🔄 **Reset** | Restaurar dados padrão |

---

## 📂 ESTRUTURA DO PROJETO

```
portfolio-editavel/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes visuais
│   │   │   ├── ui/          # Shadcn components
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── data/
│   │   │   └── translations.ts  # Traduções PT/EN
│   │   ├── Admin.tsx        # Painel admin
│   │   ├── Portfolio.tsx    # Site principal
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── lib/
│   │   ├── storage.ts       # Sistema localStorage
│   │   └── utils.ts
│   └── styles/              # CSS global
├── DEPLOY.md               # Guia de deploy
└── README.md               # Este arquivo
```

---

## 🌐 DEPLOY

Veja o guia completo em **[DEPLOY.md](./DEPLOY.md)**

### **Opções recomendadas:**

1. 🥇 **Vercel** - Grátis, automático, SSL incluso
2. 🥈 **Netlify** - Grátis, drag & drop
3. 🥉 **Cloudflare Pages** - Grátis, super rápido
4. 💻 **cPanel** - Hospedagem tradicional

---

## 💾 ARMAZENAMENTO DE DADOS

### **Como funciona:**

Os dados são salvos no **localStorage** do navegador:

```javascript
// Chave única
localStorage: 'portfolio_data_v1'

// Estrutura
{
  hero: { ... },
  about: { ... },
  experiences: [ ... ],
  skills: [ ... ]
}
```

### **⚠️ IMPORTANTE:**

- Dados ficam NO navegador do usuário
- Limpar cache = perder dados
- **SEMPRE** faça backup via botão "Backup"
- Importar backup restaura tudo

### **Backup automático (futuro):**
- [ ] Sincronização em nuvem
- [ ] Multi-usuário
- [ ] Histórico de versões

---

## 🎨 CUSTOMIZAÇÃO

### **Cores:**

Edite `/src/styles/theme.css`:

```css
:root {
  --primary: #06b6d4;      /* Cyan */
  --secondary: #2563eb;    /* Blue */
  /* ... */
}
```

### **Fontes:**

Edite `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/...');
```

### **Componentes:**

Todos em `/src/app/components/`:
- Edite JSX/TSX diretamente
- Usa Tailwind CSS
- Totalmente customizável

---

## 🔒 SEGURANÇA

### **Dados locais:**
- ✅ Nunca saem do navegador
- ✅ Privacidade total
- ✅ Zero servidor/banco

### **Admin sem senha:**
- ⚠️ Qualquer pessoa com /admin pode editar
- 💡 **Solução:** Adicione autenticação (próxima versão)

---

## 🐛 TROUBLESHOOTING

### **Problema: Vite não encontrado**
```bash
npm install
```

### **Problema: Build falha**
```bash
rm -rf node_modules
npm install
npm run build
```

### **Problema: Dados não salvam**
- Verifique se localStorage está habilitado
- Desative modo anônimo/privado
- Limpe cache e tente novamente

### **Problema: 404 em /admin após deploy**
- Configure redirecionamento de rotas
- Veja DEPLOY.md para cada plataforma

---

## 📊 PERFORMANCE

### **Métricas:**

- ⚡ **Build size:** ~500KB (gzipped)
- 🚀 **Load time:** < 2s
- 📱 **Mobile-first:** 100% responsivo
- ♿ **Acessibilidade:** WCAG 2.1 AA

### **Otimizações:**

- ✅ Code splitting
- ✅ Lazy loading
- ✅ CSS minificado
- ✅ Assets otimizados
- ✅ Tree shaking

---

## 🗺️ ROADMAP

### **Versão Atual (1.0):**
- ✅ Hero editável
- ✅ About editável
- ✅ Experiências CRUD
- ✅ Skills CRUD
- ✅ Backup/Restore

### **Próximas versões:**

**v1.1:**
- [ ] Formação acadêmica
- [ ] Certificações
- [ ] Idiomas
- [ ] Depoimentos

**v1.2:**
- [ ] Upload de imagens
- [ ] Galeria de projetos
- [ ] Blog integrado

**v1.3:**
- [ ] Multi-templates
- [ ] Editor de cores
- [ ] Editor de fontes
- [ ] Theme switcher

**v2.0:**
- [ ] Backend opcional (Supabase)
- [ ] Multi-usuário
- [ ] Analytics integrado
- [ ] SEO automático

---

## 📄 LICENÇA

Este projeto é um **produto comercial**.

### **Uso permitido:**
- ✅ Uso pessoal ilimitado
- ✅ Uso comercial (1 site por licença)
- ✅ Modificar código

### **Uso NÃO permitido:**
- ❌ Revender o código fonte
- ❌ Redistribuir como template
- ❌ Usar em múltiplos sites (sem licença adicional)

---

## 💬 SUPORTE

**Precisa de ajuda?**

- 📧 Email: suporte@seusite.com
- 💬 WhatsApp: [Número]
- 📺 Vídeo tutoriais: [YouTube]
- 📚 Documentação completa: [Docs]

---

## 🙏 AGRADECIMENTOS

Construído com:
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Feito com ❤️ para profissionais que querem um portfolio incrível sem complicação!**
