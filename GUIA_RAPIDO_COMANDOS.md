# ⚡ GUIA RÁPIDO DE COMANDOS

**Referência rápida para deploy e manutenção**

---

## 🚀 SEQUÊNCIA COMPLETA DE DEPLOY

### 1️⃣ PREPARAÇÃO LOCAL

```bash
# Criar pasta do projeto
mkdir portfolio-fernando-branco
cd portfolio-fernando-branco

# (Colar todos os arquivos baixados aqui)

# Instalar dependências
npm install

# Testar localmente
npm run dev
# Abrir: http://localhost:5173
```

---

### 2️⃣ GITHUB - PRIMEIRA VEZ

```bash
# Inicializar Git
git init

# Adicionar remote (substituir SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/portfolio-fernando-branco.git

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit - Portfólio completo"

# Enviar para GitHub
git branch -M main
git push -u origin main
```

---

### 3️⃣ ATUALIZAÇÕES FUTURAS

```bash
# Ver o que mudou
git status

# Adicionar mudanças
git add .

# Commit com mensagem descritiva
git commit -m "Descrição da mudança"

# Enviar para GitHub (deploy automático)
git push
```

**Exemplos de mensagens:**
```bash
git commit -m "Adiciona nova experiência na Empresa X"
git commit -m "Atualiza skills de automação"
git commit -m "Corrige tradução em inglês"
git commit -m "Altera cores da seção de depoimentos"
```

---

## 🔧 COMANDOS NPM

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento (com hot-reload)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Atualização de Pacotes

```bash
# Verificar pacotes desatualizados
npm outdated

# Atualizar pacotes (cuidado!)
npm update

# Atualizar pacote específico
npm install nome-do-pacote@latest
```

---

## 🗄️ SUPABASE - QUERIES SQL

### Migração de Dados Atuais

**Inserir todas as experiências no banco:**

```sql
-- 1. FICTORPAY
INSERT INTO experiences (
  date_range, date_color, company, company_type, company_color, 
  icon_color, role_pt, role_en, scope_pt, scope_en, order_index
) VALUES (
  '2024 - Atual',
  'text-cyan-400',
  'FictorPay',
  'Fintech',
  'text-cyan-500',
  'text-cyan-500',
  'Analista de Operações Pleno',
  'Mid-Level Operations Analyst',
  'Revolucionando pagamentos digitais através de automação e processos eficientes.',
  'Revolutionizing digital payments through automation and efficient processes.',
  1
);

-- 2. SHOPEE
INSERT INTO experiences (
  date_range, date_color, company, company_type, company_color, 
  icon_color, role_pt, role_en, scope_pt, scope_en, order_index
) VALUES (
  '2022 - 2024',
  'text-orange-400',
  'Shopee',
  'E-commerce',
  'text-orange-500',
  'text-orange-500',
  'Analista de Marketing Sênior',
  'Senior Marketing Analyst',
  'Trajetória de ascensão no maior marketplace do Brasil, impactando milhões de sellers.',
  'Rising trajectory in Brazil''s largest marketplace, impacting millions of sellers.',
  2
);

-- Continuar para todas as outras empresas...
```

### Consultas Úteis

```sql
-- Ver todas as experiências
SELECT * FROM experiences ORDER BY order_index;

-- Ver conquistas de uma empresa
SELECT * FROM achievements 
WHERE experience_id = 'UUID_DA_EMPRESA'
ORDER BY order_index;

-- Ver todas as skills por categoria
SELECT * FROM skills 
ORDER BY category, order_index;

-- Contar total de experiências
SELECT COUNT(*) FROM experiences;

-- Buscar experiência por nome
SELECT * FROM experiences 
WHERE company ILIKE '%shopee%';
```

### Backup do Banco

```sql
-- Exportar todas as tabelas (fazer no Supabase SQL Editor)
COPY experiences TO '/tmp/experiences.csv' CSV HEADER;
COPY achievements TO '/tmp/achievements.csv' CSV HEADER;
COPY skills TO '/tmp/skills.csv' CSV HEADER;
```

---

## 🌐 VERCEL CLI (Opcional)

### Instalação

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Login
vercel login
```

### Comandos

```bash
# Deploy do diretório atual
vercel

# Deploy em produção
vercel --prod

# Ver logs
vercel logs

# Listar projetos
vercel list

# Ver informações do projeto
vercel inspect
```

---

## 🔐 VARIÁVEIS DE AMBIENTE

### Local (.env.local)

```bash
# Criar arquivo
touch .env.local

# Editar (adicionar suas credenciais)
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-aqui
```

### Vercel (via CLI)

```bash
# Adicionar variável
vercel env add VITE_SUPABASE_URL

# Listar variáveis
vercel env ls

# Remover variável
vercel env rm VITE_SUPABASE_URL
```

---

## 📊 DEBUGGING

### Ver logs em tempo real

```bash
# Desenvolvimento local
npm run dev
# Erros aparecem no terminal

# Vercel (via browser)
# Ir em: Deployments → View Function Logs
```

### Limpar cache

```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar build
rm -rf dist

# Limpar cache do Vite
rm -rf node_modules/.vite
```

### Verificar TypeScript

```bash
# Checar erros sem compilar
npx tsc --noEmit

# Ver versão do TypeScript
npx tsc --version
```

---

## 🔄 WORKFLOW COMPLETO

### Fluxo de trabalho diário

```bash
# 1. Atualizar do GitHub
git pull

# 2. Rodar projeto local
npm run dev

# 3. Fazer alterações nos arquivos

# 4. Testar localmente

# 5. Commit das mudanças
git add .
git commit -m "Descrição da mudança"

# 6. Enviar para GitHub
git push

# 7. Deploy automático no Vercel ✅
# Aguardar 2-3 minutos
# Site atualizado!
```

---

## 🎨 EDIÇÃO RÁPIDA DE CONTEÚDO

### Via GitHub (sem precisar clonar)

1. Ir em: https://github.com/SEU_USUARIO/portfolio-fernando-branco
2. Navegar até o arquivo (ex: `src/app/data/translations.ts`)
3. Clicar no ícone de lápis (Edit)
4. Fazer as mudanças
5. Scroll até o final
6. Escrever mensagem do commit
7. Clicar em "Commit changes"
8. Deploy automático! ✅

### Arquivos mais editados

```bash
# Textos PT/EN
src/app/data/translations.ts

# Cores das empresas
src/app/data/experiences.ts

# Cores globais
src/styles/theme.css

# Ícones das conquistas
src/app/components/ExperiencesSection.tsx
```

---

## 🚨 COMANDOS DE EMERGÊNCIA

### Site fora do ar?

```bash
# 1. Verificar se Vercel está online
# Ir em: https://www.vercel-status.com

# 2. Fazer redeploy
# Ir no painel da Vercel → Deployments → Redeploy

# 3. Se não funcionar, reverter para versão anterior
# Vercel → Deployments → Escolher versão que funcionava → Promote to Production
```

### Erro após push?

```bash
# Ver o que mudou
git diff HEAD~1

# Reverter último commit (CUIDADO!)
git revert HEAD
git push

# Ou voltar para commit específico
git log  # Ver histórico
git revert HASH_DO_COMMIT
git push
```

---

## 📱 ATALHOS ÚTEIS

### DNS

```bash
# Verificar propagação
# Abrir: https://www.whatsmydns.net
# Digitar: fernandoferrerobranco.com.br

# Flush DNS (Windows)
ipconfig /flushdns

# Flush DNS (Mac)
sudo dscacheutil -flushcache

# Flush DNS (Linux)
sudo systemd-resolve --flush-caches
```

### Performance

```bash
# Analisar bundle size
npm run build
# Ver pasta dist/ e tamanhos dos arquivos

# Lighthouse (no Chrome DevTools)
# F12 → Lighthouse → Generate Report
```

---

## 🎯 REFERÊNCIAS RÁPIDAS

| Preciso de | URL |
|------------|-----|
| Ver o site | https://fernandoferrerobranco.com.br |
| GitHub repo | https://github.com/SEU_USUARIO/portfolio-fernando-branco |
| Vercel dashboard | https://vercel.com/dashboard |
| Supabase dashboard | https://app.supabase.com |
| DNS check | https://www.whatsmydns.net |

---

## 📞 SUPORTE RÁPIDO

### Erro comum: "Module not found"
```bash
npm install
```

### Erro comum: "Port already in use"
```bash
# Mudar porta
npm run dev -- --port 3000
```

### Erro comum: Mudanças não aparecem
```bash
# Limpar cache e rebuild
rm -rf dist node_modules/.vite
npm run dev
```

### Erro comum: TypeScript errors
```bash
# Ignorar temporariamente (não recomendado)
# Comentar no arquivo a linha com erro:
// @ts-ignore
```

---

## 🎓 COMANDOS PARA COPIAR E COLAR

### Setup inicial completo

```bash
# 1. Clonar (se já estiver no GitHub)
git clone https://github.com/SEU_USUARIO/portfolio-fernando-branco.git
cd portfolio-fernando-branco

# 2. Instalar
npm install

# 3. Criar .env.local
echo "VITE_SUPABASE_URL=https://seu-projeto.supabase.co" > .env.local
echo "VITE_SUPABASE_ANON_KEY=sua-chave" >> .env.local

# 4. Rodar
npm run dev
```

### Deploy manual

```bash
# Build local
npm run build

# Preview
npm run preview

# Se OK, fazer push
git add .
git commit -m "Deploy manual"
git push
```

---

## ✅ CHECKLIST DE COMANDOS

### Diariamente
- [ ] `git pull` - Atualizar do repo
- [ ] `npm run dev` - Rodar local

### Antes de cada commit
- [ ] `git status` - Ver o que mudou
- [ ] Testar localmente
- [ ] `git add .` - Adicionar mudanças
- [ ] `git commit -m "mensagem"` - Commitar
- [ ] `git push` - Enviar

### Semanalmente
- [ ] `npm outdated` - Ver atualizações
- [ ] Verificar site no ar
- [ ] Backup do Supabase

### Mensalmente
- [ ] `npm update` - Atualizar pacotes
- [ ] Revisar dependências
- [ ] Testar em diferentes browsers

---

**FIM DO GUIA RÁPIDO** ⚡

**Use este guia como cola para comandos do dia a dia!**
