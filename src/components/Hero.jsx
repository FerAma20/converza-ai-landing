import { useModal } from '../context/ModalContext.jsx';
import ArrowRight from './icons/ArrowRight.jsx';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Agente conversacional para cualquier industria</div>
          <h1 className="hero-title">
            Un agente que <em>habla con tus sistemas</em> y resuelve por tus clientes.
          </h1>
          <p className="hero-sub">
            Converza AI atiende, consulta y ejecuta — conectándose en vivo a las APIs de tu banco,
            hotel, restaurante, telco, retail o cualquier negocio. Saldos, reservas, pedidos,
            facturas: todo dentro de la conversación.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={openModal}>
              Solicitar demo
              <ArrowRight />
            </button>
            <a href="#capacidades" className="btn-ghost">
              Ver en acción
            </a>
          </div>
          <div className="hero-meta">
            <div className="item">
              <span className="label">Tiempo de respuesta</span>
              <span className="value">&lt; 2&nbsp;s</span>
            </div>
            <div className="item">
              <span className="label">Resolución autónoma</span>
              <span className="value">87%</span>
            </div>
            <div className="item">
              <span className="label">Industrias activas</span>
              <span className="value">12+</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-grid-bg" />
          <span className="corner tl">CONVERZA · AI</span>
          <span className="corner tr">v 4.2</span>
          <span className="corner bl">SYM · 01</span>
          <span className="corner br">SPEAK</span>
          <svg className="hero-mark" width="320" height="320" viewBox="0 0 200 200" fill="none">
            <path d="M 160 60 A 60 60 0 1 0 160 140" stroke="#FAFAFA" strokeWidth="14" strokeLinecap="square" fill="none" />
            <circle cx="155" cy="100" r="9" fill="#FAFAFA" />
          </svg>
        </div>
      </div>
    </section>
  );
}
