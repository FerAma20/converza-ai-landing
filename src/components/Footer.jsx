import Logo from './Logo.jsx';

const COLS = [
  {
    title: 'Producto',
    links: [
      { label: 'Capacidades', href: '#capacidades' },
      { label: 'Cómo funciona', href: '#funciona' },
      { label: 'Precios', href: '#precios' },
      { label: 'Integraciones', href: '#' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Clientes', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contacto', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
      { label: 'Seguridad', href: '#' },
      { label: 'DPA', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <a href="#" className="brand brand--footer">
              <Logo />
              <span>
                Converza<span className="ai">&nbsp;AI</span>
              </span>
            </a>
            <p className="foot-tagline">
              Conversaciones que resuelven. Atención al cliente con voz humana, escala de máquina.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h5>{c.title}</h5>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 Converza AI · Todos los derechos reservados</span>
          <span>Hecho con cuidado en GT · Guatemala</span>
        </div>
      </div>
    </footer>
  );
}
