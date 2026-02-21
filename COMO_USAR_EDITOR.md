# 🎨 GUIA DO EDITOR VISUAL

## 🚀 Como Usar o Editor

### 1️⃣ **Ativar Modo Edição**

1. Abra seu portfólio no navegador
2. Procure o botão **"Ativar Modo Edição"** no canto inferior direito
3. Clique nele para entrar no modo de edição

### 2️⃣ **Editar Componentes**

Quando o modo edição está ativo:

- ✨ **Passe o mouse** sobre qualquer seção editável
- 🔲 Uma **borda pontilhada cyan** aparecerá
- ✏️ Um **botão "Editar"** surgirá no canto superior direito
- 🖱️ **Clique no botão** para abrir o editor

### 3️⃣ **Modificar Conteúdo**

No modal de edição você pode:

- ✍️ **Editar textos** - títulos, descrições, etc.
- 🎨 **Escolher cores** - com color picker visual
- 📏 **Ajustar tamanhos** - níveis de skills, etc.
- 📝 **Selecionar categorias** - dropdowns pré-configurados

### 4️⃣ **Salvar Alterações**

Após editar:

1. Clique em **"Salvar"** no modal
2. Clique em **"Salvar"** na barra superior (para persistir no navegador)
3. Pronto! Suas mudanças estão salvas no localStorage

---

## 🛠️ Funcionalidades Disponíveis

### **Barra Superior de Edição**

Quando o modo edição está ativo, você verá:

| Botão | Função |
|-------|--------|
| 💾 **Salvar** | Salva todas as alterações no navegador |
| 📥 **Exportar** | Baixa um arquivo JSON com todos os dados |
| 📤 **Importar** | Carrega dados de um arquivo JSON |
| ❌ **Sair** | Desativa o modo edição |

---

## 📦 Seções Editáveis (Fase 1)

### ✅ **Hero Section** (Topo)
- Badge/Etiqueta
- Títulos (5 linhas)
- Localização
- Email
- Nome e cargo no card

### ✅ **Skills Section**
- ➕ Adicionar novas skills
- ✏️ Editar skills existentes
- 🗑️ Deletar skills
- 📊 Ajustar nível (%)
- 🏷️ Categorizar

---

## 💾 Como Funciona o Armazenamento

### **LocalStorage (Fase 1)**

- ✅ Dados salvos no navegador
- ✅ Persistem mesmo após fechar a página
- ✅ Específicos para cada domínio
- ⚠️ Limitado a ~5MB
- ⚠️ Perdidos se limpar cache do navegador

### **Backup e Recuperação**

**Para fazer backup:**
1. Ative o modo edição
2. Clique em **"Exportar"**
3. Salve o arquivo JSON em local seguro

**Para restaurar backup:**
1. Ative o modo edição
2. Clique em **"Importar"**
3. Selecione o arquivo JSON

---

## 🎯 Próximas Seções (Em Desenvolvimento)

- [ ] Experiências Profissionais
- [ ] Sobre Mim
- [ ] Formação e Certificações
- [ ] Idiomas
- [ ] Cases de Sucesso
- [ ] Depoimentos
- [ ] Footer/Links Sociais

---

## 🔒 Segurança

### **Autenticação (Implementar depois)**

Por padrão, **qualquer pessoa** que acessar o site pode editar.

Para proteger:
1. Adicione senha no código
2. Ou configure autenticação Supabase
3. Ou hospede em domínio privado

---

## 🐛 Solução de Problemas

### **"Minhas alterações não salvaram"**
- ✅ Certifique-se de clicar em "Salvar" no modal
- ✅ E depois em "Salvar" na barra superior

### **"Perdi minhas alterações"**
- Se limpou o cache: restaure do backup JSON
- Se não tem backup: os dados padrão voltarão

### **"O botão de editar não aparece"**
- Verifique se o modo edição está ativado
- Passe o mouse bem sobre o componente

---

## 🎨 Dicas de Uso

### **Boas Práticas**

1. 📥 **Exporte regularmente** - faça backups
2. 🧪 **Teste antes** - veja como fica no preview
3. 📱 **Veja no mobile** - use DevTools para simular
4. 🎨 **Mantenha consistência** - use cores da paleta

### **Atalhos Mentais**

- Hover = Ver se é editável
- Borda pontilhada = Pode editar
- Cyan = Cor de destaque do tema
- Salvar 2x = Modal + Barra superior

---

## 🚀 Evoluções Futuras

### **Fase 2 (Em Breve)**
- 🎨 Seletor de fontes visual
- 🖼️ Upload de imagens
- 🔄 Drag & Drop para reordenar
- 📋 Duplicar componentes
- 👁️ Preview em tempo real

### **Fase 3 (SaaS)**
- ☁️ Backup automático em nuvem
- 🔐 Autenticação segura
- 📊 Analytics integrado
- 🌐 Domínio customizado
- 🤝 Múltiplos usuários

---

## 📞 Suporte

Dúvidas? Entre em contato:
- 📧 Email: fernando@g2g.org.br
- 💬 GitHub Issues: [criar issue]

---

**Feito com 💙 por Fernando Branco**
