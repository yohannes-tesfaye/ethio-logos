# Ethio-Logos 🇪🇹

A premium collection of high-quality Ethiopian brand logos, hand-crafted and optimized as fully customizable, responsive React components with built-in TypeScript typings.

## ✨ Features
- ⚡ **React & Next.js ready**: Bundled cleanly as modern SVG components.
- 🎨 **Fully Customizable**: Control size, colors (`currentColor` fallback), styles, and classes instantly.
- 📐 **Scalable SVGs**: Hand-crafted vectors that look sharp at any resolution.
- 📦 **TypeScript Support**: Full autocomplete and type-suggestions out-of-the-box.
- 🪶 **Tree-shakeable**: Minimal bundle impact with clean exports.

---

## 🚀 Installation

Install using your preferred package manager:

```bash
npm install ethio-logos
# or
yarn add ethio-logos
# or
pnpm add ethio-logos
```

---

## 💻 Usage

Import the logos just like standard React components:

```tsx
import { AddisAbabaScienceAndTechnologyUniversity, Note } from 'ethio-logos';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      {/* Default layout: fits parent container */}
      <AddisAbabaScienceAndTechnologyUniversity />

      {/* Customizable sizing, colors, and accessibility */}
      <Note 
        size={48} 
        color="#0066cc" 
        alt="A decorative heart icon" 
        className="custom-logo"
      />
    </div>
  );
}
```

---

## 🎨 Styling and Customization
All components inherit from React's standard `SVGProps<SVGSVGElement>` with the following custom enhancements:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `undefined` | Shorthand to set both `width` and `height` to the same value (e.g., `48` or `"100px"`). |
| `width` | `number \| string` | `"100%"` (or original) | Sets the SVG width explicitly. Overridden by `size`. |
| `height` | `number \| string` | `"auto"` (or original) | Sets the SVG height explicitly. Overridden by `size`. |
| `alt` | `string` | `undefined` | Text description that acts as the `aria-label` for screen readers (highly recommended for accessibility). |
| `title` | `string` | `undefined` | Renders an SVG `<title>` tag inside the SVG for custom tooltip hovers. |
| `titleId` | `string` | `undefined` | Sets the `id` of the `<title>` tag and hooks it up to `aria-labelledby` for advanced accessibility. |

---

## 📄 License
Licensed under the [MIT License](LICENSE).
