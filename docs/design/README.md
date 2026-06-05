# Brew & Co — Design System

A complete design language for a specialty coffee and craft beverage brand.
Built for **Next.js 16 + Tailwind CSS v4 + TypeScript**.

---

## Files

| File | Purpose |
|------|---------|
| `tokens.css` | All design tokens as CSS custom properties + Tailwind v4 `@theme` config |
| `style-guide.html` | Visual style guide — colors, typography, spacing, shadows, animation |
| `component-library.html` | Full component showcase with code examples and specs |
| `1.png` | Reference design image |

---

## Quick Start

### 1. Import the tokens

In `app/globals.css`, add the import **before** `@import "tailwindcss"`:

```css
@import "../docs/design/tokens.css";
@import "tailwindcss";
```

Or copy the `@theme { }` block from `tokens.css` directly into your `globals.css`.

### 2. Add the fonts

In `app/layout.tsx`, import Cormorant Garamond and Outfit from Next.js Google Fonts:

```tsx
import { Cormorant_Garamond, Outfit } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

// Apply to <html>:
<html className={`${cormorant.variable} ${outfit.variable} ${geistMono.variable}`}>
```

### 3. Use the tokens as Tailwind utilities

Every token in `@theme` becomes a Tailwind utility class automatically:

```tsx
// Colors
<div className="bg-caramel-500 text-cream-50">        // bg + text
<div className="border-caramel-400 ring-caramel-500"> // border + ring

// Typography
<h1 className="font-display text-7xl italic font-semibold">
<p  className="font-sans text-base text-espresso-600">

// Shadows
<div className="shadow-warm-md hover:shadow-warm-lg">

// Radius
<button className="rounded-full">
<div    className="rounded-xl">

// Animation
<div className="transition-all duration-normal ease-spring">
```

---

## Design Decisions

### Aesthetic Direction
**Editorial-Artisanal** — the brand occupies the intersection of a premium specialty roastery and a craft publication. Warm, confident, unhurried. Informed by the reference design's organic palette but elevated with a more sophisticated typographic voice.

### Color Philosophy
- **Espresso** (deep brown scale): Primary text, dark surfaces, brand identity
- **Caramel** (amber scale): Brand accent, CTAs, prices, interactive elements
- **Cream** (warm off-white scale): All backgrounds and surfaces — never pure white
- **Terracotta**: Secondary accent for urgency, promos, spicy tags
- **Honey**: Golden highlight for featured items and ratings
- **Sage**: Organic, fresh, vegan tags; success states

Always use semantic tokens (`--brand`, `--text-primary`, `--bg-surface`) in components — not raw palette tokens (`--color-caramel-500`). This makes future theme changes a one-file update.

### Typography Rules
- **Headings**: `font-display` (Cormorant Garamond) + `italic` + `font-semibold` — the italic gives it editorial warmth
- **Body copy**: `font-sans` (Outfit) + `text-base` + `font-normal`
- **Labels / eyebrows**: `font-sans` + `uppercase` + `tracking-widest` + `text-xs` + `font-bold`
- **Prices**: `font-display` + `font-bold` + `text-caramel-600`
- Never use bold display type without the italic for headings — the roman weight loses personality

### Spacing Rules
- Use the 4px grid (`p-1` = 4px, `p-2` = 8px, etc.)
- Card inner padding: `p-5` (20px) on mobile, `p-6` (24px) on desktop
- Section padding: `py-16` mobile, `py-24` desktop
- Page horizontal padding: `px-6` → `px-10 md:` → `px-16 xl:`

### Button Rules
- All buttons use `rounded-full` (pill shape) — no exceptions
- Primary CTA: `bg-caramel-500 text-cream-50` + spring easing hover lift + glow shadow
- Dark CTA: `bg-espresso-900 text-cream-50`
- Never use square or slightly-rounded buttons — they break the organic feel
- Always add `transition-all duration-normal ease-spring` for the physical bounce

### Shadow Rules
- All shadows use `rgba(26, 15, 10, α)` — espresso-tinted, never cold black
- Resting cards: `shadow-warm-sm`
- Hover cards: `shadow-warm-md`
- Modals / dropdowns: `shadow-warm-lg`
- Featured hero elements: `shadow-warm-xl`

---

## Component Inventory

### Interactive
| Component | Variants | File |
|-----------|----------|------|
| Button | Primary, Dark, Outline, Ghost, Destructive · sm/md/lg/xl | `component-library.html#buttons` |
| Input | Text, Search, Select, Textarea · default/focus/error/disabled | `component-library.html#forms` |
| Checkbox / Radio | Default checked state | `component-library.html#forms` |
| Quantity Stepper | Increment/decrement control | `component-library.html#stepper` |

### Display
| Component | Variants | File |
|-----------|----------|------|
| Product Card | Default, with discount | `component-library.html#cards` |
| Category Card | Default, active | `component-library.html#cards` |
| Feature Card | Dark editorial | `component-library.html#cards` |
| Testimonial Card | With rating + avatar | `component-library.html#cards` |
| Navbar | Light, Dark | `component-library.html#navigation` |
| Breadcrumb | Standard | `component-library.html#navigation` |
| Badge | Brand/New/Popular/Organic/Dark/Limited/Outline | `component-library.html#badges` |
| Dietary Tag | Vegan/GF/Hot/Dairy Free | `component-library.html#badges` |

### Feedback
| Component | Variants | File |
|-----------|----------|------|
| Alert | Success/Warning/Error/Info | `component-library.html#alerts` |
| Toast | Dark, Success | `component-library.html#alerts` |

### Data
| Component | Variants | File |
|-----------|----------|------|
| Price Display | Current, with original + discount | `component-library.html#stepper` |
| Rating | 3/4/5 star | `component-library.html#stepper` |
| Skeleton | Text, block | `component-library.html#stepper` |
| Menu Item Row | With/without badges | `component-library.html#menu` |
| Stat Card | Light, Caramel | `component-library.html#data` |
| Order Summary | With totals + promo | `component-library.html#data` |

---

## Accessibility

- All interactive elements have `:focus-visible` rings using `ring-caramel-500/15`
- Color contrast: `text-espresso-900` on `bg-cream-50` = 14:1 (AAA)
- Color contrast: `text-cream-50` on `bg-caramel-500` = 3.8:1 (AA for large text)
- Always include `aria-label` on icon-only buttons
- Wrap `input` elements in a `<label>` or use `htmlFor`/`id` pairs
- Respect `prefers-reduced-motion` — wrap animations in the media query

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Token Reference

### Key Color Tokens
```
--color-espresso-900   #1A0F0A   Primary text
--color-espresso-600   #5C3620   Secondary text
--color-caramel-500    #C4854A   Brand / primary accent
--color-caramel-600    #BC7835   Brand hover
--color-cream-50       #FAF6F2   Page background
--color-cream-100      #F5EDE3   Card/surface background
--color-cream-200      #EDE0D4   Hover/subtle background
--color-terracotta-500 #C96B46   Error / urgency
--color-honey-500      #D4A843   Warning / featured
--color-sage-500       #6B8C6B   Success / organic
```

### Key Animation Tokens
```
--ease-spring  cubic-bezier(0.34, 1.56, 0.64, 1)   Buttons, interactions
--ease-smooth  cubic-bezier(0.25, 0.46, 0.45, 0.94) Carousels, drawers
--duration-fast    150ms   Hover color changes
--duration-normal  250ms   Most transitions
--duration-slow    400ms   Reveals, enters
```
