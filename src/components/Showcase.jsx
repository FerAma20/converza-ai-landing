import Logo from './Logo.jsx';

export default function Showcase() {
  return (
    <section className="block block--no-top">
      <div className="container">
        <div className="showcase">
          <div>
            <h2>
              Una conversación. <em>Una solución.</em>
            </h2>
            <p>
              Converza AI atiende, identifica al cliente, consulta su pedido y propone una salida —
              todo en segundos, todo en su idioma, todo con la voz de tu marca.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="v">2.1×</div>
                <div className="l">CSAT vs. baseline</div>
              </div>
              <div className="stat">
                <div className="v">−68%</div>
                <div className="l">tickets a humano</div>
              </div>
              <div className="stat">
                <div className="v">24/7</div>
                <div className="l">disponibilidad</div>
              </div>
            </div>
          </div>

          <div className="chat">
            <div className="chat-head">
              <div className="agent-dot">
                <Logo size={20} className="" />
              </div>
              <div className="meta">
                <span className="name">Converza · Agente</span>
                <span className="status">en línea</span>
              </div>
              <span className="live">LIVE · ES</span>
            </div>

            <div className="msg user">Hola, mi pedido #4821 no llegó ayer.</div>
            <div className="msg bot">
              <div className="from">Converza</div>
              Hola Daniela. Veo tu pedido #4821 con estado “en tránsito”. La paquetería tuvo un
              retraso en CDMX. ¿Quieres que lo reprograme para mañana sin costo o prefieres
              reembolso?
            </div>
            <div className="msg user">Reprograma para mañana.</div>
            <div className="typing">
              <span />
              <span />
              <span />
            </div>
            <div className="chat-input">
              Escribe un mensaje
              <span className="send">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
