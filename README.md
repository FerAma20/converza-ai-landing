# Converza AI — Landing (React + Vite)

Landing page de Converza AI portada a React con Vite. Componentes pequeños, CSS global con variables, listo para producción.

## Stack

- **React 18**
- **Vite 5** (dev server + build)
- CSS plano con variables (sin Tailwind / sin libs de estilos)
- Fuentes: Inter, Inter Tight, JetBrains Mono (vía Google Fonts)

## Estructura

```
converza-react/
├── index.html              # entry HTML (fuentes + #root)
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # bootstrap React
    ├── App.jsx             # compone las secciones
    ├── styles/
    │   └── global.css      # variables + estilos de todas las secciones
    └── components/
        ├── Logo.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Capabilities.jsx
        ├── Showcase.jsx
        ├── Industries.jsx
        ├── ApiSection.jsx
        ├── Process.jsx
        ├── Pricing.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## Instalación

Requiere Node 18+ (recomendado 20+).

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build       # genera /dist
npm run preview     # sirve el build localmente
```

El contenido de `dist/` es estático: puedes subirlo a Vercel, Netlify, Cloudflare Pages, S3+CloudFront, GitHub Pages, etc.

## Personalización rápida

- **Colores y tipografía** → `src/styles/global.css`, bloque `:root`.
- **Copy** → arrays `CAPS`, `INDUSTRIES`, `STEPS`, `PLANS` en cada componente.
- **Logo** → `src/components/Logo.jsx` (SVG inline).

## Notas

- No usa router; es una sola página con anclas (`#capacidades`, `#funciona`, `#precios`).
- No usa estado global; todo es componentes presentacionales.
- Pensado para que un equipo de desarrollo lo tome como base y le conecte formularios, analítica y CMS.
