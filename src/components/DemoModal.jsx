import { useEffect, useRef, useState } from 'react';
import { useModal } from '../context/ModalContext.jsx';
import Logo from './Logo.jsx';

const INDUSTRIES = [
  'Banca & Finanzas', 'Telcos', 'Hoteles & Viajes', 'Restaurantes',
  'Retail', 'Salud', 'Logística', 'Seguros', 'Otro',
];

const EMPTY = { nombre: '', empresa: '', email: '', industria: '', mensaje: '' };

export default function DemoModal() {
  const { open, closeModal } = useModal();
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const firstInputRef = useRef(null);
  const overlayRef = useRef(null);

  // Foco al abrir, restaurar al cerrar
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleClose = () => {
    closeModal();
    // Resetear después de la transición
    setTimeout(() => { setFields(EMPTY); setStatus('idle'); }, 300);
  };

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const set = (field) => (e) => setFields(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: conectar con backend
    await new Promise(r => setTimeout(r, 1200)); // simula latencia
    setStatus('success');
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlay} role="dialog" aria-modal="true" aria-label="Solicitar demo">
      <div className="modal-card">
        <button className="modal-close" onClick={handleClose} aria-label="Cerrar">
          <CloseIcon />
        </button>

        {status === 'success' ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <Logo size={32} />
            </div>
            <h2>¡Listo! Te contactamos pronto.</h2>
            <p>Recibimos tu solicitud. Alguien del equipo se va a comunicar con vos en menos de 24 horas.</p>
            <button className="btn-primary" onClick={handleClose}>Cerrar</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <p className="auth-eyebrow">Demo personalizada</p>
              <h2 className="modal-title">Hablemos de tu caso.</h2>
              <p className="modal-sub">Completá el formulario y un especialista te arma una demo a medida para tu industria.</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="field-row-two">
                <div className="field">
                  <label htmlFor="dm-nombre">Nombre completo</label>
                  <input
                    id="dm-nombre"
                    ref={firstInputRef}
                    type="text"
                    placeholder="Ana García"
                    value={fields.nombre}
                    onChange={set('nombre')}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="dm-empresa">Empresa</label>
                  <input
                    id="dm-empresa"
                    type="text"
                    placeholder="Acme S.A."
                    value={fields.empresa}
                    onChange={set('empresa')}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="dm-email">Correo electrónico</label>
                <input
                  id="dm-email"
                  type="email"
                  placeholder="ana@empresa.com"
                  value={fields.email}
                  onChange={set('email')}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="dm-industria">Industria</label>
                <select
                  id="dm-industria"
                  value={fields.industria}
                  onChange={set('industria')}
                  required
                >
                  <option value="" disabled>Seleccioná una industria</option>
                  {INDUSTRIES.map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="dm-mensaje">
                  ¿Qué querés resolver? <span className="field-optional">(opcional)</span>
                </label>
                <textarea
                  id="dm-mensaje"
                  placeholder="Contanos brevemente el volumen de consultas, canales que usás, o el problema principal que querés atacar."
                  rows={3}
                  value={fields.mensaje}
                  onChange={set('mensaje')}
                />
              </div>

              {/* Honeypot anti-spam */}
              <input type="text" name="_trap" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true" />

              <button type="submit" className={`btn-primary auth-submit${status === 'loading' ? ' is-loading' : ''}`} disabled={status === 'loading'}>
                {status === 'loading' ? <Spinner /> : 'Solicitar demo →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="modal-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
    </svg>
  );
}
