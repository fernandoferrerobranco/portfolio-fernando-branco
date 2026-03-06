# 📝 Como Personalizar Seu Portfólio

Este guia mostra onde você deve substituir os **dados fictícios** pelos seus **dados reais**.

---

## 🎯 Arquivos para Editar

### 1️⃣ **Formação Acadêmica** 
**Arquivo:** `/src/app/components/FormacaoSection.tsx`

Substitua as linhas **26-68** com suas informações:
- MBA/Pós-graduação
- Graduação (Universidade, curso, ano)
- Cursos de Extensão

---

### 2️⃣ **Certificações**
**Arquivo:** `/src/app/components/FormacaoSection.tsx`

Edite o array nas linhas **85-92**:
```tsx
{ name: 'Nome da Certificação', org: 'Instituição', year: '2024', color: 'cyan' }
```

---

### 3️⃣ **Idiomas**
**Arquivo:** `/src/app/components/IdiomasSection.tsx`

Edite o array `languages` (linhas **6-41**):
- Nome do idioma
- Emoji da bandeira
- Nível (Nativo/Fluente/Avançado/Intermediário/Básico)
- Skills com porcentagens (Leitura, Escrita, Conversação)
- Certificações (se houver)

---

### 4️⃣ **Cases de Sucesso**
**Arquivo:** `/src/app/components/CasesSection.tsx`

Substitua o array `cases` (linhas **6-54**):
- Título do projeto
- Empresa
- Desafio enfrentado
- Solução implementada
- Resultados quantificados (métricas)
- Impacto gerado

**Dica:** Use números reais! Ex: "Redução de 97% no tempo" ou "Aumento de 45% no engajamento"

---

### 5️⃣ **Depoimentos**
**Arquivo:** `/src/app/components/DepoimentosSection.tsx`

Edite o array `testimonials` (linhas **6-30**):
- Quote (texto do depoimento)
- Nome do autor
- Cargo
- Empresa
- Rating (1-5 estrelas)

**Importante:** Peça permissão antes de usar depoimentos reais!

---

### 6️⃣ **Links Sociais**
**Arquivo:** `/src/app/components/Footer.tsx`

Atualize as URLs nas linhas **8-25**:
- LinkedIn
- GitHub
- WhatsApp
- Email

---

### 7️⃣ **Download do CV (PDF)**
**Arquivo:** `/src/app/components/Footer.tsx`

Na linha **57-64**, substitua o `alert()` por um link real para seu CV:
```tsx
<a 
  href="/path/to/seu-cv.pdf"
  download="Fernando-Branco-CV.pdf"
  className="flex items-center gap-3..."
>
```

---

## 🌍 Sistema de Tradução (PT/EN)

### Como funciona:
- As bandeiras 🇧🇷 🇺🇸 no header alternam entre português e inglês
- Atualmente, apenas a navegação está traduzida
- Para expandir: edite `/src/app/translations.ts`

### Para adicionar mais traduções:
1. Abra `/src/app/translations.ts`
2. Adicione chaves no objeto `translations.pt` e `translations.en`
3. Use a função `getTranslation(language, 'chave')` nos componentes

**Exemplo:**
```tsx
import { getTranslation } from '../translations';

// No componente:
<h2>{getTranslation(language, 'sections.education')}</h2>
```

---

## 🎨 Remover Badge "Dados de Demonstração"

Quando substituir pelos dados reais, **remova** o componente `<DemoBadge />` de:
- `/src/app/components/FormacaoSection.tsx` (linha 15)
- `/src/app/components/IdiomasSection.tsx` (linha 50)
- `/src/app/components/CasesSection.tsx` (linha 70)
- `/src/app/components/DepoimentosSection.tsx` (linha 45)

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Substituí dados fictícios por informações reais
- [ ] Removi todos os `<DemoBadge />`
- [ ] Atualizei links do LinkedIn, GitHub, WhatsApp
- [ ] Testei o download do CV em PDF
- [ ] Revisei todas as métricas e números
- [ ] Pedi permissão para usar depoimentos
- [ ] Traduzi conteúdo para inglês (se necessário)

---

## 🚀 Dúvidas?

Qualquer modificação que precise, só me avisar! O portfólio está 100% personalizável.

**Boa sorte!** 🎯
