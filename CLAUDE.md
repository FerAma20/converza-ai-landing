# Converza AI — Landing Page

Landing page comercial de **Converza AI**, un agente conversacional que se conecta a APIs de clientes (bancos, hoteles, restaurantes, telcos, retail, salud, etc.) para resolver consultas en tiempo real.

## Stack

- **React 18** + **Vite 5** (sin SSR, sin router — es una sola página con anclas)
- **CSS plano** con variables (sin Tailwind, sin styled-components, sin libs de UI)
- **Fuentes**: Inter, Inter Tight, JetBrains Mono — cargadas desde Google Fonts en `index.html`
- **Sin estado global, sin data fetching** — todo es presentacional. Lo que faltaría: formularios, analítica, CMS, i18n.

## Estructura

```
src/
├── main.jsx                # bootstrap React
├── App.jsx                 # compone las secciones, en orden
├── styles/
│   └── global.css          # variables :root + estilos de todas las secciones
└── components/
    ├── Logo.jsx            # SVG inline (arco abierto + punto). Aceptar `size`.
    ├── Nav.jsx             # sticky con blur
    ├── Hero.jsx
    ├── Marquee.jsx         # tira de industrias
    ├── Capabilities.jsx    # 6 tarjetas, arrays CAPS
    ├── Showcase.jsx        # bloque oscuro + chat preview
    ├── Industries.jsx      # mismo grid que Capabilities, fondo cálido
    ├── ApiSection.jsx      # bloque de código + 3 tarjetas
    ├── Process.jsx         # 4 pasos en línea
    ├── Pricing.jsx         # 3 planes, "Business" es el destacado (`feat: true`)
    ├── CTA.jsx
    └── Footer.jsx
```

## Convenciones

### CSS
- **Tokens** viven en `:root` dentro de `global.css`. Si necesitas un color o espaciado nuevo, añádelo ahí antes de hardcodear.
- Tokens actuales:
  - `--ink: #0A0A0A` (negro de marca)
  - `--paper: #FAFAFA` (fondo claro)
  - `--paper-warm: #F4F2EE` (fondo secciones alternas)
  - `--line: #E6E4DF`, `--line-2: #D4D1CB` (bordes)
  - `--mute: #6E6B66`, `--mute-2: #97938C` (texto secundario)
- **Tipografía**: `Inter Tight` para títulos/números, `Inter` para texto, `JetBrains Mono` para el bloque API.
- **Eyebrow / micro-label**: `font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--mute);` — patrón repetido en toda la página.
- **Botones**: `.btn-primary` (sólido negro) y `.btn-ghost` (outline). Pill shape (`border-radius: 999px`).
- **Tarjetas con grid de 1px**: `Capabilities` e `Industries` usan `gap: 1px` sobre fondo `var(--line)` para simular bordes internos sin doblar bordes.

### Componentes
- Cada sección expone su contenido como un **array de objetos arriba del componente** (`CAPS`, `INDUSTRIES`, `STEPS`, `PLANS`). Editar copy = editar el array.
- Los íconos son SVGs inline, no librerías. Si necesitas un set grande, considera `lucide-react`.
- `<Logo />` acepta `size` (default 28) — úsalo siempre que necesites el logo.

### Estilo de marca
- El **arco abierto + punto** es el símbolo principal. No reemplazarlo sin discusión.
- **Voz**: directa, técnica, en español rioplatense neutro. Mezcla inglés solo en términos técnicos (API, CRM, helpdesk).
- **Tono visual**: editorial-fintech. Espaciado generoso, negro profundo, sin gradientes saturados.

## Scripts

```bash
npm run dev      # localhost:5173
npm run build    # genera /dist
npm run preview  # sirve el build
```

## Próximos pasos sugeridos

1. **Conectar formulario "Solicitar demo"** a un backend (Resend, Formspree, o un endpoint propio).
2. **Analítica**: añadir GA4, Plausible o PostHog en `main.jsx`.
3. **i18n**: si se vende en LATAM y US, considerar `react-i18next` con archivos `es.json` / `en.json`. Las copies ya están en arrays — fácil de migrar.
4. **CMS opcional**: si el equipo de marketing va a editar las tarjetas seguido, mover los arrays a Sanity o Contentful.
5. **Responsive**: el breakpoint actual es `880px`. Probar en tablets entre 700–900px; puede necesitar un breakpoint intermedio.
6. **Accesibilidad**: añadir `aria-label` a los botones-icono, revisar contraste de `--mute` sobre `--paper-warm`.

## Lo que **NO** hacer

- No instalar Tailwind ni una lib de componentes — el diseño está construido sobre CSS plano deliberadamente.
- No cambiar las fuentes sin probar — los `letter-spacing` y `clamp()` de los títulos están calibrados para Inter Tight.
- No meter animaciones agresivas. El único movimiento intencional es el `pulse` del símbolo del hero y el `typing` del chat.
