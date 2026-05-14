import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useModal } from '../context/ModalContext.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { openModal } = useModal();
  const isHome = pathname === '/';

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  const handleDemo = () => { close(); openModal(); };

  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <Logo />
          <span>Converza<span className="ai">&nbsp;AI</span></span>
        </Link>

        <div className="nav-links">
          {isHome && (
            <>
              <a href="#capacidades">Capacidades</a>
              <a href="#funciona">Cómo funciona</a>
              <a href="#precios">Precios</a>
            </>
          )}
          <Link to="/login" className="nav-login">Iniciar sesión</Link>
          <button className="nav-cta" onClick={handleDemo}>Solicitar demo →</button>
        </div>

        <button
          className={`nav-burger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {isHome && (
          <>
            <a href="#capacidades" onClick={close}>Capacidades</a>
            <a href="#funciona" onClick={close}>Cómo funciona</a>
            <a href="#precios" onClick={close}>Precios</a>
          </>
        )}
        <Link to="/login" onClick={close}>Iniciar sesión</Link>
        <button className="nav-cta nav-cta-mobile" onClick={handleDemo}>Solicitar demo →</button>
      </div>
    </nav>
  );
}
