# Mejoras pendientes — Converza AI Landing Page

## Alta prioridad

- [x] **Formulario de demo — frontend** — crear modal con campos (nombre, empresa, email, industria, mensaje). Se abre desde los CTAs "Solicitar demo" y "Hablar con ventas". Validación client-side, estado de carga y confirmación visual.
- [ ] **Formulario de demo — backend** — conectar el formulario a un endpoint real. Opciones: Resend o Formspree para email, o endpoint propio. Incluye manejo de errores y protección anti-spam (honeypot o reCAPTCHA).
- [x] **Menú hamburguesa en mobile** — los links del nav se ocultan en pantallas chicas pero no hay alternativa táctil. Agregar menú colapsable.
- [x] **Open Graph meta tags** — sin estas tags, WhatsApp/LinkedIn/Twitter muestran preview vacío al compartir el link. Agregar `og:title`, `og:description`, `og:image`, `og:url`.

## Media prioridad

- [x] **Tokens CSS faltantes** — hay colores hardcodeados fuera de `:root`: `#161616` (chat bg), `#5cd47e` (verde online), `#2c2c2c` (body text). Agregarlos como `--surface-dark`, `--accent-green`, `--body`.
- [x] **Componente `<ArrowIcon />`** — el SVG de flecha está copiado en Hero, CTA y Showcase. Extraerlo a un componente.
- [x] **Estilos inline a CSS** — Industries y Pricing usan `style={{...}}` para background y border. Mover a clases en `global.css`.
- [x] **Scroll suave en anchor links** — agregar `scroll-behavior: smooth` en `:root` o manejar el scroll con JS para mejor UX en el nav.
- [ ] **Breakpoint intermedio** — solo hay un breakpoint en 880px. Tablets entre 700–900px pueden verse rotas. Agregar breakpoint en ~680px.

## Baja prioridad

- [ ] **Analytics** — no hay ningún script de tracking. Opciones: Plausible (liviano, sin cookies), PostHog (product analytics), o GA4.
- [ ] **`aria-label` en botones icono** — el nav y otros botones icono no tienen label accesible.
- [ ] **Structured data (schema.org)** — agregar `Organization` o `SoftwareApplication` para mejorar SEO en Google.
- [x] **Canonical link** — agregar `<link rel="canonical">` en `index.html`.
- [ ] **`<ArrowIcon />` y SVG icons de Capabilities** — los 6 íconos de Capabilities están definidos inline en el mismo archivo. Extraerlos a `components/icons/`.

## Funcionalidad futura (fuera del scope actual)

- [ ] **i18n** — si se vende en LATAM y US, migrar los arrays de copy a `es.json` / `en.json` con `react-i18next`. La estructura actual lo facilita.
- [ ] **CMS** — si marketing va a editar las tarjetas seguido, mover los arrays a Sanity o Contentful.
- [ ] **TypeScript** — agregar tipos para los arrays de datos (CAPS, PLANS, etc.) y props de componentes.
- [ ] **Tests** — al menos tests E2E con Playwright para el flujo del formulario de demo.
- [ ] **Chat interactivo en Showcase** — hoy es simulado con animación CSS. Podría conectarse a una demo real del agente.
