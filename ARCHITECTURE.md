# 🏗️ Architecture Documentation

## 📂 Project Structure

```
/src/app/
  ├── /components/          # React Components
  │   ├── HeroSection.tsx          # Hero section with profile intro
  │   ├── TrajetoriaSection.tsx    # Journey/trajectory section
  │   ├── FormacaoSection.tsx      # Education & certifications
  │   ├── IdiomasSection.tsx       # Languages section
  │   ├── CasesSection.tsx         # Success cases
  │   ├── DepoimentosSection.tsx   # Testimonials
  │   ├── ExperiencesSection.tsx   # Detailed work experiences
  │   ├── AccordionItem.tsx        # Reusable accordion component
  │   ├── Counter.tsx              # Animated counter component
  │   ├── DemoBadge.tsx            # Demo data badge
  │   ├── Footer.tsx               # Footer section
  │   ├── LanguageToggle.tsx       # PT/EN language switcher
  │   └── ScrollToTop.tsx          # Scroll to top button
  │
  ├── /data/               # Data & Configuration
  │   ├── types.ts                 # TypeScript type definitions
  │   ├── translations.ts          # All translations (PT/EN)
  │   └── experiences.ts           # Work experience data structure
  │
  └── App.tsx              # Main application orchestrator
```

## 🎯 Design Principles

### 1. **Separation of Concerns**
- **Components**: UI logic only
- **Data**: Separated in `/data` folder
- **Translations**: Centralized in single file
- **Types**: Explicit TypeScript interfaces

### 2. **Component Organization**
Each section is a **standalone component** with:
- Props interface (language parameter)
- Data fetching from translations
- Isolated rendering logic
- AOS animations support

### 3. **Type Safety**
All components use **TypeScript** with:
- Explicit prop interfaces
- Translation type definitions
- Language type unions (`'pt' | 'en'`)

### 4. **Reusability**
- `AccordionItem`: Reusable accordion UI
- `Counter`: Animated number counter
- `DemoBadge`: Consistent demo data indicator
- `LanguageToggle`: Language switcher

## 🌍 Translation System

### Structure
```typescript
translations = {
  pt: { hero, trajectory, sections, experiences, education, ... },
  en: { hero, trajectory, sections, experiences, education, ... }
}
```

### Usage Pattern
```tsx
import { Language, translations } from '../data/translations';

function Component({ language }: { language: Language }) {
  const t = translations[language].sectionName;
  return <div>{t.title}</div>;
}
```

### Benefits
- ✅ Single source of truth
- ✅ Type-safe translations
- ✅ Easy to add new languages
- ✅ Centralized management
- ✅ No missing translations (TypeScript enforces)

## 📊 Data Flow

```
App.tsx (state: language)
   ↓
Components (receive language prop)
   ↓
Translations (fetch translated content)
   ↓
Render (display translated UI)
```

## 🎨 Styling Architecture

- **Tailwind CSS v4**: Utility-first approach
- **Custom Classes**: Defined in `/src/styles/global.css`
  - `.glass-effect`: Glassmorphism cards
  - `.tech-glow`: Subtle glow effects
  - `.conquista-icon`: Achievement icons
  - `.timeline-*`: Timeline components
- **Responsive**: Mobile-first design
- **Animations**: AOS (Animate On Scroll)

## 🔧 Key Components

### App.tsx
**Role**: Main orchestrator
- Manages language state
- Initializes AOS animations
- Renders all sections in order
- Provides navigation

### HeroSection
- Profile introduction
- Contact information
- CTAs (Call-to-actions)
- Animated profile card

### ExperiencesSection
- Manages 6 company accordions
- Uses `AccordionItem` component
- Translates all content dynamically
- Supports complex multi-phase experiences (Shopee)

### TrajetoriaSection
- Big numbers with animated counters
- Professional profile text
- Bento grid (4 expertise cards)
- Timeline of companies

## 🚀 Performance Optimizations

1. **Lazy State Management**: Single language state at top level
2. **Component Splitting**: Each section is independent
3. **Reusable Components**: Reduced code duplication
4. **Type Safety**: Catches errors at compile time
5. **AOS Animations**: Efficient scroll-based animations

## 📝 Adding New Content

### Add New Translation
1. Edit `/src/app/data/translations.ts`
2. Add to both `pt` and `en` objects
3. TypeScript will enforce consistency

### Add New Section
1. Create component in `/components`
2. Import in `App.tsx`
3. Add translations
4. Render in main App

### Add New Language
1. Add language to `Language` type
2. Add translation object
3. Update `LanguageToggle` component

## 🎯 Maintenance Best Practices

- ✅ Keep translations in sync (PT/EN)
- ✅ Use TypeScript interfaces
- ✅ Follow component naming conventions
- ✅ Keep data separate from UI
- ✅ Document complex logic
- ✅ Test translation switches
- ✅ Maintain consistent styling

## 🔄 Future Improvements

- [ ] Add translation validation tests
- [ ] Implement lazy loading for sections
- [ ] Add more languages (ES, FR)
- [ ] Create translation management UI
- [ ] Add analytics tracking
- [ ] Implement dark/light theme toggle
- [ ] Add PDF download functionality
