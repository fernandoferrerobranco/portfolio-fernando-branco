# 🚀 MANUAL COMPLETO - DEPLOY DO PORTFÓLIO FERNANDO BRANCO

**Data de criação:** 20/02/2026  
**Domínio:** fernandoferrerobranco.com.br  
**Desenvolvido em:** Figma Make  

---

## 📋 ÍNDICE

1. [FASE 1: Download e Preparação](#fase-1)
2. [FASE 2: GitHub - Backup e Versionamento](#fase-2)
3. [FASE 3: Deploy no Vercel](#fase-3)
4. [FASE 4: Configuração do Domínio](#fase-4)
5. [FASE 5: Backend com Supabase](#fase-5)
6. [FASE 6: Painel Admin](#fase-6)
7. [Edição de Conteúdo](#edicao)
8. [Troubleshooting](#troubleshooting)

---

<a name="fase-1"></a>
## 🗂️ FASE 1: DOWNLOAD E PREPARAÇÃO DOS ARQUIVOS

### 1.1 Estrutura do Projeto

```
portfolio-fernando-branco/
├── public/
│   └── (vazio por enquanto)
├── src/
│   ├── app/
│   │   ├── components/
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
│   │   │   ├── TrajetoriaSection.tsx
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   └── ui/ (50+ componentes shadcn/ui)
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
├── index.html
├── package.json
├── vite.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

### 1.2 Arquivos Essenciais para Download

**ARQUIVO POR ARQUIVO - BAIXAR TODOS:**

#### ✅ Raiz do Projeto (/)
- `package.json` - Dependências do projeto
- `vite.config.ts` - Configuração do Vite
- `postcss.config.mjs` - Configuração PostCSS
- `tsconfig.json` - Configuração TypeScript
- `index.html` - HTML principal

#### ✅ /src/app/
- `App.tsx` - Componente principal
- `main.tsx` - Entry point

#### ✅ /src/app/components/
- `AccordionItem.tsx`
- `Counter.tsx`
- `DemoBadge.tsx`
- `DepoimentosSection.tsx`
- `ExperiencesSection.tsx`
- `Footer.tsx`
- `HeroSection.tsx`
- `LanguageToggle.tsx`
- `ScrollToTop.tsx`
- `SkillsSection.tsx`
- `TrajetoriaSection.tsx`

#### ✅ /src/app/components/figma/
- `ImageWithFallback.tsx`

#### ✅ /src/app/components/ui/ (TODOS OS ARQUIVOS)
- Copiar toda a pasta `ui` com seus 50+ componentes

#### ✅ /src/app/data/
- `experiences.ts` - Dados das experiências
- `translations.ts` - Traduções PT/EN
- `types.ts` - TypeScript types

#### ✅ /src/styles/
- `custom.css`
- `fonts.css`
- `index.css`
- `tailwind.css`
- `theme.css`

### 1.3 Como Baixar no Figma Make

**Método 1: Via Interface**
1. Abra o explorador de arquivos no Figma Make
2. Clique em cada arquivo
3. Copie o conteúdo (Ctrl+A, Ctrl+C)
4. Cole em um editor de texto local
5. Salve com o mesmo nome e extensão

**Método 2: Download Direto (se disponível)**
- Procure por botão "Download" ou "Export" na interface

---

<a name="fase-2"></a>
## 🐙 FASE 2: GITHUB - BACKUP E VERSIONAMENTO

### 2.1 Criar Conta no GitHub (se não tiver)

1. Acesse: https://github.com
2. Clique em "Sign Up"
3. Crie sua conta (use um email profissional)
4. Verifique o email

### 2.2 Criar Novo Repositório

1. Clique no ícone "+" no canto superior direito
2. Selecione "New repository"
3. **Configurações:**
   - **Repository name:** `portfolio-fernando-branco`
   - **Description:** "Portfólio pessoal - Fernando Ferrero Branco"
   - **Visibility:** ✅ Public (para deploy grátis no Vercel)
   - **Initialize repository:**
     - ✅ Add a README file
     - ✅ Add .gitignore → Template: `Node`
     - ❌ Choose a license (pode adicionar depois)
4. Clique em "Create repository"

### 2.3 Upload dos Arquivos

**Opção A: Via Interface Web (Mais Fácil)**

1. No repositório criado, clique em "Add file" → "Upload files"
2. Arraste TODOS os arquivos e pastas que você baixou
3. **⚠️ IMPORTANTE:** Mantenha a estrutura de pastas!
4. Escreva a mensagem: `Initial commit - Portfólio completo`
5. Clique em "Commit changes"

**Opção B: Via Git CLI (Avançado)**

```bash
# 1. Instalar Git (se não tiver)
# Windows: https://git-scm.com/download/win
# Mac: brew install git
# Linux: sudo apt-get install git

# 2. Navegar até a pasta do projeto
cd caminho/para/portfolio-fernando-branco

# 3. Inicializar repositório
git init

# 4. Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/portfolio-fernando-branco.git

# 5. Adicionar todos os arquivos
git add .

# 6. Primeiro commit
git commit -m "Initial commit - Portfólio completo"

# 7. Enviar para GitHub
git branch -M main
git push -u origin main
```

### 2.4 Verificar Upload

✅ **Checklist:**
- [ ] Pasta `src` completa
- [ ] Pasta `public` (mesmo vazia)
- [ ] Arquivo `package.json`
- [ ] Arquivo `vite.config.ts`
- [ ] Arquivo `index.html`
- [ ] Todos os componentes em `src/app/components`

---

<a name="fase-3"></a>
## ☁️ FASE 3: DEPLOY NO VERCEL

### 3.1 Criar Conta no Vercel

1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. **IMPORTANTE:** Escolha "Continue with GitHub"
4. Autorize o Vercel a acessar sua conta GitHub

### 3.2 Importar Projeto

1. No dashboard da Vercel, clique em "Add New..." → "Project"
2. Você verá a lista de repositórios do GitHub
3. Procure por `portfolio-fernando-branco`
4. Clique em "Import"

### 3.3 Configurar Deploy

**Configurações:**

```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**⚠️ Variáveis de Ambiente (deixar vazio por enquanto)**

### 3.4 Deploy

1. Clique em "Deploy"
2. Aguarde 2-5 minutos (acompanhe o log)
3. ✅ Quando aparecer "🎉 Congratulations!", seu site está no ar!

### 3.5 Testar o Site

1. Copie a URL gerada (algo como: `portfolio-fernando-branco.vercel.app`)
2. Abra em uma nova aba
3. **Verifique:**
   - [ ] Site carrega corretamente
   - [ ] Seções aparecem
   - [ ] Troca de idioma funciona
   - [ ] Animações funcionam
   - [ ] Scroll suave funciona

---

<a name="fase-4"></a>
## 🌐 FASE 4: CONFIGURAÇÃO DO DOMÍNIO

### 4.1 Adicionar Domínio no Vercel

1. No projeto da Vercel, vá em "Settings"
2. Clique em "Domains"
3. Digite: `fernandoferrerobranco.com.br`
4. Clique em "Add"

### 4.2 Configurar DNS no cPanel/WHM

**A Vercel vai te dar as configurações de DNS. Geralmente são:**

**Opção 1: CNAME (Recomendado)**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Opção 2: A Record**
```
Type: A
Name: @
Value: 76.76.21.21
```

**No seu cPanel/WHM:**

1. Acesse o painel do seu domínio
2. Vá em "Zone Editor" ou "DNS Manager"
3. Adicione os registros conforme a Vercel indicou
4. **TTL:** 3600 (ou deixe padrão)
5. Salve as alterações

### 4.3 Aguardar Propagação

- **Tempo:** 5 minutos a 48 horas (geralmente 30 minutos)
- **Verificar:** https://www.whatsmydns.net

### 4.4 SSL/HTTPS Automático

✅ A Vercel gera certificado SSL automaticamente (grátis)
- Aguarde a configuração do DNS
- SSL será ativado em até 24h

### 4.5 Testar Domínio

Acesse: `https://fernandoferrerobranco.com.br`

✅ **Checklist:**
- [ ] Site abre com seu domínio
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Todas as páginas funcionam
- [ ] Redirecionamento de www funciona

---

<a name="fase-5"></a>
## 🗄️ FASE 5: BACKEND COM SUPABASE

### 5.1 Criar Conta no Supabase

1. Acesse: https://supabase.com
2. Clique em "Start your project"
3. Escolha "Continue with GitHub" (usar a mesma conta)

### 5.2 Criar Novo Projeto

1. Clique em "New Project"
2. **Configurações:**
   - **Name:** `portfolio-fernando-branco`
   - **Database Password:** Crie uma senha forte (ANOTE!)
   - **Region:** South America (São Paulo)
   - **Pricing Plan:** Free (até 500MB de dados)
3. Clique em "Create new project"
4. Aguarde 2-3 minutos

### 5.3 Estrutura do Banco de Dados

**Tabelas que vamos criar:**

#### **1. experiences** (Experiências Profissionais)
```sql
CREATE TABLE experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date_range TEXT NOT NULL,
  date_color TEXT NOT NULL,
  company TEXT NOT NULL,
  company_type TEXT NOT NULL,
  company_color TEXT NOT NULL,
  icon_color TEXT NOT NULL,
  role_pt TEXT NOT NULL,
  role_en TEXT NOT NULL,
  scope_pt TEXT NOT NULL,
  scope_en TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### **2. achievements** (Conquistas)
```sql
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
  title_pt TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_pt TEXT NOT NULL,
  description_en TEXT NOT NULL,
  icon TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### **3. skills** (Competências)
```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL,
  name_pt TEXT NOT NULL,
  name_en TEXT NOT NULL,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### **4. timeline_steps** (Timeline de promoções)
```sql
CREATE TABLE timeline_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
  position_pt TEXT NOT NULL,
  position_en TEXT NOT NULL,
  level_pt TEXT NOT NULL,
  level_en TEXT NOT NULL,
  region TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### **5. testimonials** (Depoimentos)
```sql
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role_pt TEXT NOT NULL,
  role_en TEXT NOT NULL,
  company TEXT NOT NULL,
  text_pt TEXT NOT NULL,
  text_en TEXT NOT NULL,
  avatar_url TEXT,
  linkedin_url TEXT,
  order_index INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### **6. admin_users** (Usuários Admin)
```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 5.4 Criar Tabelas no Supabase

1. No painel do Supabase, vá em "SQL Editor"
2. Clique em "New Query"
3. Cole o SQL de cada tabela (acima)
4. Clique em "Run" para cada uma
5. Verifique em "Table Editor" se todas foram criadas

### 5.5 Configurar RLS (Row Level Security)

**Habilitar RLS em todas as tabelas:**

```sql
-- Habilitar RLS
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura pública (qualquer um pode ler)
CREATE POLICY "Public read access" ON experiences FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON achievements FOR SELECT USING (true);
CREATE POLICY "Public read access" ON skills FOR SELECT USING (true);
CREATE POLICY "Public read access" ON timeline_steps FOR SELECT USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (is_active = true);

-- Políticas de escrita (apenas admin autenticado)
CREATE POLICY "Admin write access" ON experiences FOR ALL USING (
  auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin write access" ON achievements FOR ALL USING (
  auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin write access" ON skills FOR ALL USING (
  auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin write access" ON timeline_steps FOR ALL USING (
  auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin write access" ON testimonials FOR ALL USING (
  auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true)
);
```

### 5.6 Copiar Credenciais

No Supabase, vá em "Settings" → "API":

**Copie e guarde:**
- ✅ **Project URL:** `https://xxxxx.supabase.co`
- ✅ **anon/public key:** `eyJhbGc...` (chave longa)
- ✅ **service_role key:** `eyJhbGc...` (usar apenas no backend)

---

<a name="fase-6"></a>
## 🎨 FASE 6: PAINEL ADMIN

### 6.1 Instalar Dependências Supabase

No seu projeto local, adicione ao `package.json`:

```json
"dependencies": {
  "@supabase/supabase-js": "^2.39.0"
}
```

### 6.2 Criar Arquivo de Configuração

**Arquivo:** `src/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 6.3 Configurar Variáveis de Ambiente

**Criar arquivo:** `.env.local`

```env
VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_publica_aqui
```

**⚠️ IMPORTANTE:** Adicione `.env.local` ao `.gitignore`

### 6.4 Adicionar Variáveis no Vercel

1. No projeto da Vercel, vá em "Settings" → "Environment Variables"
2. Adicione:
   - `VITE_SUPABASE_URL` = sua URL
   - `VITE_SUPABASE_ANON_KEY` = sua chave pública
3. Clique em "Save"
4. Faça novo deploy

### 6.5 Estrutura do Painel Admin

**Páginas que serão criadas:**

```
/admin
├── /login (Autenticação)
├── /dashboard (Visão geral)
├── /experiences (Gerenciar experiências)
│   ├── /new (Nova experiência)
│   └── /edit/:id (Editar experiência)
├── /skills (Gerenciar skills)
├── /testimonials (Gerenciar depoimentos)
└── /settings (Configurações)
```

### 6.6 Componentes do Admin

**Recursos que terá:**

✅ **Autenticação**
- Login com email/senha
- Proteção de rotas
- Logout

✅ **CRUD de Experiências**
- Listar todas
- Adicionar nova
- Editar existente
- Remover
- Reordenar
- Alterar cores/ícones

✅ **CRUD de Conquistas**
- Adicionar conquistas a cada experiência
- Editar texto PT/EN
- Escolher ícones de uma lista
- Reordenar

✅ **CRUD de Skills**
- Organizar por categorias
- Escolher ícones
- Definir cores

✅ **CRUD de Depoimentos**
- Adicionar testemunhos
- Upload de avatar
- Link do LinkedIn
- Ativar/desativar

✅ **Editor de Traduções**
- Interface lado a lado PT | EN
- Preview em tempo real

✅ **Upload de Arquivos**
- Certificados (PDF)
- Imagens
- CV/Currículo

---

<a name="edicao"></a>
## ✏️ EDIÇÃO DE CONTEÚDO

### Método 1: Editar Arquivos Diretamente (Atual)

**Onde editar cada coisa:**

| O que editar | Arquivo | Linha/Seção |
|--------------|---------|-------------|
| Textos PT/EN | `/src/app/data/translations.ts` | Objeto `translations` |
| Cores empresas | `/src/app/data/experiences.ts` | Array `experiencesData` |
| Ícones conquistas | `/src/app/components/ExperiencesSection.tsx` | Arrays `icons` |
| Cores globais | `/src/styles/theme.css` | Variáveis CSS |

**Processo:**
1. Editar arquivo no GitHub (botão "Edit")
2. Fazer commit
3. Vercel faz deploy automático (2 min)
4. Site atualizado

### Método 2: Via Painel Admin (Após Fase 6)

**Acesse:** `https://fernandoferrerobranco.com.br/admin`

1. Faça login
2. Navegue até a seção desejada
3. Edite pelo formulário visual
4. Clique em "Salvar"
5. Mudanças aparecem instantaneamente

---

<a name="troubleshooting"></a>
## 🔧 TROUBLESHOOTING

### Problema: Site não carrega após deploy

**Soluções:**
1. Verificar logs no Vercel (aba "Deployments" → "View Build Logs")
2. Conferir se `package.json` tem todas as dependências
3. Verificar se `vite.config.ts` está correto
4. Fazer redeploy: Settings → Deployments → Redeploy

### Problema: Domínio não funciona

**Soluções:**
1. Aguardar propagação DNS (até 48h)
2. Verificar DNS em: https://www.whatsmydns.net
3. Conferir se adicionou os registros corretos no cPanel
4. Remover domínio e adicionar novamente na Vercel

### Problema: Erros de TypeScript

**Soluções:**
1. Verificar se todos os arquivos `.ts`/`.tsx` foram copiados
2. Conferir `tsconfig.json`
3. Rodar `npm install` localmente
4. Verificar imports/exports

### Problema: Estilos não aparecem

**Soluções:**
1. Verificar se todos os arquivos CSS foram copiados
2. Conferir imports no `App.tsx`
3. Verificar se Tailwind está configurado
4. Limpar cache do browser (Ctrl+Shift+R)

### Problema: Supabase não conecta

**Soluções:**
1. Verificar se variáveis de ambiente estão corretas
2. Conferir se adicionou as variáveis na Vercel
3. Verificar RLS (políticas de segurança)
4. Checar se projeto Supabase está ativo

---

## 📞 CONTATOS DE SUPORTE

### Vercel
- Documentação: https://vercel.com/docs
- Status: https://www.vercel-status.com
- Discord: https://vercel.com/discord

### Supabase
- Documentação: https://supabase.com/docs
- Discord: https://discord.supabase.com
- GitHub: https://github.com/supabase/supabase

### Figma Make
- Documentação oficial da Figma

---

## 📝 CHECKLIST GERAL

### ✅ Fase 1: Download
- [ ] Todos os arquivos baixados
- [ ] Estrutura de pastas mantida
- [ ] Arquivos salvos localmente

### ✅ Fase 2: GitHub
- [ ] Conta criada
- [ ] Repositório criado
- [ ] Arquivos enviados
- [ ] Estrutura verificada

### ✅ Fase 3: Vercel
- [ ] Conta criada (com GitHub)
- [ ] Projeto importado
- [ ] Deploy realizado com sucesso
- [ ] Site funcionando na URL temporária

### ✅ Fase 4: Domínio
- [ ] Domínio adicionado na Vercel
- [ ] DNS configurado no cPanel
- [ ] Propagação completa
- [ ] SSL ativo
- [ ] Site funcionando no domínio próprio

### ✅ Fase 5: Supabase
- [ ] Conta criada
- [ ] Projeto criado
- [ ] Todas as tabelas criadas
- [ ] RLS configurado
- [ ] Credenciais copiadas

### ✅ Fase 6: Admin
- [ ] Dependências instaladas
- [ ] Variáveis configuradas
- [ ] Painel admin criado
- [ ] Autenticação funcionando
- [ ] CRUD completo

---

## 🎯 PRÓXIMOS PASSOS RECOMENDADOS

1. **SEO**
   - Adicionar meta tags
   - Configurar sitemap.xml
   - Google Analytics

2. **Performance**
   - Otimizar imagens
   - Lazy loading
   - Code splitting

3. **Funcionalidades**
   - Formulário de contato
   - Blog/Artigos
   - Modo escuro

4. **Monitoramento**
   - Error tracking (Sentry)
   - Analytics
   - Uptime monitoring

---

## 📅 MANUTENÇÃO

### Semanal
- [ ] Verificar se site está no ar
- [ ] Checar emails de erro (se tiver monitoring)

### Mensal
- [ ] Atualizar dependências (`npm update`)
- [ ] Fazer backup do banco Supabase
- [ ] Verificar logs de acesso

### Trimestral
- [ ] Revisar conteúdo
- [ ] Atualizar experiências
- [ ] Adicionar novos cases/projetos

---

**FIM DO MANUAL** 🎉

**Última atualização:** 20/02/2026  
**Versão:** 1.0  
**Autor:** Desenvolvido com Figma Make
