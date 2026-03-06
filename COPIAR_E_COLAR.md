# 🎯 GUIA DEFINITIVO - COPIAR E COLAR

## ⚠️ INSTRUÇÕES IMPORTANTES

1. **Crie as pastas primeiro** (se não existirem)
2. **Copie cada arquivo na ordem mostrada**
3. **Não pule nenhum arquivo**
4. **Teste no final**

---

## 📁 ESTRUTURA DE PASTAS

Crie estas pastas se não existirem:

```
src/
├── app/
│   ├── admin/          ← CRIAR ESTA PASTA!
│   └── components/
├── lib/                ← CRIAR ESTA PASTA!
└── ...
```

---

## 🔵 ARQUIVO 1/9 - `/src/lib/supabase.ts`

**Ação:** ✅ CRIAR arquivo novo  
**Pasta:** Crie a pasta `/src/lib/` primeiro!

```typescript
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Create Supabase client for frontend
export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

// API base URL
export const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-67983b2b`;

// Helper function to make authenticated requests
export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const session = await supabase.auth.getSession();
  const accessToken = session.data.session?.access_token;

  const headers = {
    'Content-Type': 'application/json',
    ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `Request failed with status ${response.status}`);
  }

  return response.json();
}
```

**✅ FEITO! Próximo →**

---

## 🔵 ARQUIVO 2/9 - `/src/app/components/Counter.tsx`

**Ação:** ✅ CRIAR arquivo novo

```typescript
import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}-${suffix}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end, hasAnimated, suffix]);

  useEffect(() => {
    if (!isVisible) return;

    const step = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}-${suffix}`} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
```

**✅ FEITO! Próximo →**

---

## 🔵 ARQUIVO 3/9 - `/src/app/App.tsx`

**Ação:** ⚠️ SUBSTITUIR arquivo existente

```typescript
import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        toastOptions={{
          classNames: {
            toast: 'bg-slate-900 border-cyan-500/20',
            title: 'text-white',
            description: 'text-slate-400',
          },
        }}
      />
    </>
  );
}
```

**✅ FEITO! Próximo →**

---

## 🔵 ARQUIVO 4/9 - `/src/app/routes.tsx`

**Ação:** ⚠️ SUBSTITUIR arquivo existente

```typescript
import { createBrowserRouter } from "react-router";
import Portfolio from "./Portfolio";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import AdminSetup from "./admin/AdminSetup";
import AdminDashboard from "./admin/AdminDashboard";
import AdminEditor from "./admin/AdminEditor";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/admin/setup",
    Component: AdminSetup,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      {
        path: "editor/:section",
        Component: AdminEditor,
      },
    ],
  },
]);
```

**✅ FEITO! Próximo →**

---

## 🚨 ATENÇÃO - PRÓXIMOS 5 ARQUIVOS

Os próximos arquivos são **GRANDES** (100-300 linhas cada).

Vou fornecer links diretos do Figma Make para você copiar!

---

## 🔵 ARQUIVO 5/9 - `/src/app/admin/AdminLogin.tsx`

**Ação:** ✅ CRIAR arquivo novo  
**Tamanho:** 140 linhas

**📋 COPIE DESTE LINK:**

https://www.figma.com/make/41HYqOifzkdC6hXmmXeF13/Fernando-Ferrero-Branco?p=f&t=wnHzijH4IiUs2EhF-0

**OU copie direto do código:**

[VER CÓDIGO COMPLETO ABAIXO - Role para baixo ⬇️]

