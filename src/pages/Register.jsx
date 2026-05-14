import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.jsx';

const INDUSTRIES = [
  'Banca & Finanzas', 'Telcos', 'Hoteles & Viajes', 'Restaurantes',
  'Retail', 'Salud', 'Logística', 'Seguros', 'Otro',
];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    // TODO: conectar con backend
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <Logo size={28} />
            <span>Converza<span className="ai">&nbsp;AI</span></span>
          </Link>
          <p className="auth-eyebrow">Paso {step} de 2</p>
          <h1 className="auth-title">
            {step === 1 ? 'Creá tu cuenta.' : 'Contanos sobre tu empresa.'}
          </h1>
        </div>

        <div className="auth-steps">
          <div className={`auth-step-dot${step >= 1 ? ' active' : ''}`} />
          <div className="auth-step-line" />
          <div className={`auth-step-dot${step >= 2 ? ' active' : ''}`} />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="field-row-two">
                <div className="field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" type="text" placeholder="Ana" required />
                </div>
                <div className="field">
                  <label htmlFor="apellido">Apellido</label>
                  <input id="apellido" type="text" placeholder="García" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password">Contraseña</label>
                <div className="input-wrap">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Mínimo 8 caracteres"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    className="input-toggle"
                    onClick={() => setShowPassword(v => !v)}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-primary auth-submit">
                Continuar →
              </button>

              <div className="auth-divider"><span>o registrate con</span></div>

              <button type="button" className="btn-social">
                <GoogleIcon />
                Google
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="field">
                <label htmlFor="empresa">Nombre de la empresa</label>
                <input id="empresa" type="text" placeholder="Acme S.A." required />
              </div>

              <div className="field">
                <label htmlFor="industria">Industria</label>
                <select id="industria" required defaultValue="">
                  <option value="" disabled>Seleccioná una industria</option>
                  {INDUSTRIES.map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="tamano">Tamaño del equipo</label>
                <select id="tamano" required defaultValue="">
                  <option value="" disabled>Seleccioná una opción</option>
                  <option>1 – 10 personas</option>
                  <option>11 – 50 personas</option>
                  <option>51 – 200 personas</option>
                  <option>200+ personas</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="telefono">Teléfono <span className="field-optional">(opcional)</span></label>
                <input id="telefono" type="tel" placeholder="+54 9 11 0000-0000" />
              </div>

              <div className="auth-terms">
                <input id="terms" type="checkbox" required />
                <label htmlFor="terms">
                  Acepto los <a href="#">Términos de servicio</a> y la <a href="#">Política de privacidad</a>
                </label>
              </div>

              <div className="auth-form-actions">
                <button type="button" className="btn-ghost" onClick={() => setStep(1)}>
                  ← Atrás
                </button>
                <button type="submit" className="btn-primary">
                  Crear cuenta
                </button>
              </div>
            </>
          )}
        </form>

        <p className="auth-footer">
          ¿Ya tenés cuenta?{' '}
          <Link to="/login">Iniciá sesión</Link>
        </p>
      </div>

      <div className="auth-aside">
        <blockquote className="auth-quote">
          <p>"En dos días teníamos el agente respondiendo consultas de reservas. Sin tocar el backend."</p>
          <cite>
            <span className="cite-name">Martín Solano</span>
            <span className="cite-role">CTO · Hotel Aura Boutique</span>
          </cite>
        </blockquote>
        <div className="auth-aside-stat">
          <span className="stat-num">&lt; 2s</span>
          <span className="stat-label">tiempo de respuesta promedio</span>
        </div>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
