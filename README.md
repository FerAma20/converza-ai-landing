# Converza AI — Landing Page

Landing page comercial de **Converza AI**, un agente conversacional que se conecta a APIs de clientes (bancos, hoteles, restaurantes, telcos, retail, salud, etc.) para resolver consultas en tiempo real.

## Stack

- **React 18** + **Vite 5**
- **react-router-dom** — routing para `/login` y `/registro`
- CSS plano con variables (sin Tailwind, sin libs de UI)
- Fuentes: Inter, Inter Tight, JetBrains Mono (Google Fonts)

## Estructura

```
src/
├── main.jsx
├── App.jsx                     # rutas + layout
├── styles/
│   └── global.css              # tokens :root + estilos globales
├── context/
│   └── ModalContext.jsx        # estado del modal de demo
├── components/
│   ├── Logo.jsx
│   ├── Nav.jsx                 # sticky, blur, menú hamburguesa mobile
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── Capabilities.jsx
│   ├── Showcase.jsx
│   ├── Industries.jsx
│   ├── ApiSection.jsx
│   ├── Process.jsx
│   ├── Pricing.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   ├── DemoModal.jsx           # modal "Solicitar demo" con formulario
│   └── icons/
│       └── ArrowRight.jsx
└── pages/
    ├── Login.jsx               # página de inicio de sesión
    └── Register.jsx            # registro en 2 pasos
```

## Instalación

Requiere Node 18+.

```bash
npm install
npm run dev      # localhost:5173
```

## Build de producción

```bash
npm run build    # genera /dist
npm run preview  # sirve el build localmente
```

El contenido de `dist/` es estático — se puede subir a Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Landing page principal |
| `/login` | Inicio de sesión |
| `/registro` | Registro en 2 pasos (datos personales + empresa) |

## Personalización rápida

- **Colores** → `src/styles/global.css`, bloque `:root`
- **Copy** → arrays `CAPS`, `INDUSTRIES`, `STEPS`, `PLANS` en cada componente
- **Logo** → `src/components/Logo.jsx` (SVG inline, acepta prop `size`)

## Pendientes

Ver [`MEJORAS.md`](./MEJORAS.md) para el listado completo de mejoras implementadas y próximos pasos.

Los más relevantes antes de producción:

- Conectar el formulario de demo a un backend (Resend, Formspree, o endpoint propio)
- Conectar Login y Registro a autenticación real
- Reemplazar `og-image.svg` por un PNG 1200×630 y actualizar la URL en `index.html`
- Configurar dominio y actualizar `og:url` y `link[rel=canonical]`
