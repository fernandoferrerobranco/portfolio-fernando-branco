# 🚀 GUIA DE DEPLOY - Portfolio Editável

Este guia ensina como fazer deploy do seu portfolio em diferentes plataformas.

---

## 📦 PRÉ-REQUISITOS

Antes de fazer deploy, você precisa fazer o **BUILD** do projeto:

```bash
# 1. Instalar dependências (primeira vez)
npm install

# 2. Fazer build (cria pasta /dist)
npm run build
```

✅ A pasta `/dist` será criada com todos os arquivos otimizados.

---

## 🌐 OPÇÃO 1: Vercel (RECOMENDADO)

### **Por quê Vercel?**
- ✅ 100% grátis
- ✅ Deploy automático
- ✅ SSL incluso
- ✅ CDN global
- ✅ Domínio próprio grátis

### **Passo a passo:**

1. **Criar conta:**
   - Acesse: https://vercel.com
   - Clique em "Sign Up"
   - Use sua conta GitHub (recomendado)

2. **Criar repositório no GitHub:**
   - Acesse: https://github.com
   - Clique em "New repository"
   - Nome: `meu-portfolio`
   - Público ou Privado
   - Clique em "Create repository"

3. **Upload do código:**
   ```bash
   # No seu terminal (pasta do projeto)
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/meu-portfolio.git
   git push -u origin main
   ```

4. **Importar no Vercel:**
   - Acesse: https://vercel.com/new
   - Clique em "Import Git Repository"
   - Selecione seu repositório
   - Clique em "Deploy"

5. **✅ PRONTO!**
   - Seu site estará em: `seu-projeto.vercel.app`
   - Configure domínio próprio se quiser

---

## 🌍 OPÇÃO 2: Netlify

### **Passo a passo:**

1. **Criar conta:**
   - Acesse: https://netlify.com
   - Sign up grátis

2. **Deploy manual (arrasta e solta):**
   - Faça build: `npm run build`
   - Arraste a pasta `/dist` para Netlify
   - ✅ Pronto!

3. **OU via GitHub:**
   - Conecte seu repositório
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## ☁️ OPÇÃO 3: Cloudflare Pages

### **Passo a passo:**

1. **Criar conta:**
   - Acesse: https://pages.cloudflare.com
   - Sign up grátis

2. **Conectar GitHub:**
   - Clique em "Create a project"
   - Conecte seu repositório
   - Build command: `npm run build`
   - Build output: `dist`

3. **✅ Deploy automático**

---

## 🖥️ OPÇÃO 4: cPanel / FTP (Hospedagem tradicional)

### **Passo a passo:**

1. **Fazer build:**
   ```bash
   npm run build
   ```

2. **Acessar cPanel:**
   - Login no painel da sua hospedagem
   - Acesse "Gerenciador de Arquivos"

3. **Upload:**
   - Vá para pasta `public_html`
   - Envie TODOS os arquivos de `/dist`
   - NÃO envie a pasta `/dist` inteira, apenas o CONTEÚDO

4. **Estrutura correta:**
   ```
   public_html/
   ├── index.html
   ├── assets/
   └── (outros arquivos)
   ```

5. **✅ Acesse seu domínio!**

---

## 📁 O QUE ENVIAR?

| Plataforma | O que enviar | Como |
|---|---|---|
| **Vercel** | Código fonte | Git push |
| **Netlify** | Pasta /dist OU código | Arrasta ou Git |
| **Cloudflare** | Código fonte | Git push |
| **cPanel/FTP** | Conteúdo de /dist | Upload manual |

---

## 🎨 EDITANDO O SITE

Depois do deploy:

1. Acesse: `seu-site.com/admin`
2. Edite o conteúdo
3. Clique em "Salvar"
4. ✅ Mudanças são INSTANTÂNEAS!

**OBS:** Os dados ficam salvos no navegador (localStorage). Se limpar cache, perde dados. Use o botão "Backup" para salvar JSON.

---

## 🔄 ATUALIZANDO O SITE

### **Se usou Vercel/Netlify/Cloudflare:**
```bash
# Faça mudanças no código
git add .
git commit -m "Atualização"
git push

# Deploy automático! ✅
```

### **Se usou cPanel:**
```bash
# Fazer novo build
npm run build

# Upload do conteúdo de /dist via FTP
```

---

## 🆘 PROBLEMAS COMUNS

### **Erro: "vite não é reconhecido"**
```bash
# Solução:
npm install
```

### **Erro 404 ao acessar /admin**
- Verifique se o build foi feito corretamente
- Em cPanel, pode precisar configurar .htaccess

### **Dados do admin não salvam**
- localStorage está habilitado?
- Modo anônimo/privado não salva dados

### **Site não atualiza após editar**
- Clique em "Salvar" no admin
- Recarregue a página (F5)
- Limpe cache se necessário

---

## 💡 DICAS PRO

1. **Sempre faça backup:**
   - Clique em "Backup" no admin
   - Salve o JSON em lugar seguro

2. **Teste localmente:**
   ```bash
   npm run dev
   ```

3. **Preview antes de deploy:**
   ```bash
   npm run build
   npm run preview
   ```

4. **Use domínio próprio:**
   - Compre em Registro.br
   - Configure DNS para apontar para Vercel/Netlify

---

## 🎯 PRÓXIMOS PASSOS

Agora que seu site está no ar:

1. ✅ Configure Google Analytics
2. ✅ Adicione SEO metadata
3. ✅ Conecte domínio próprio
4. ✅ Configure email profissional
5. ✅ Compartilhe nas redes sociais!

---

**Precisa de ajuda?**
- 📧 Email: suporte@seusite.com
- 💬 Suporte: [Link]
