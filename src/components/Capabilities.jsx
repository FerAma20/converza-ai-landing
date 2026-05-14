import Logo from './Logo.jsx';

function BarsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="9" width="3" height="6" fill="currentColor" />
      <rect x="8.5" y="5" width="3" height="14" fill="currentColor" />
      <rect x="14" y="10" width="3" height="4" fill="currentColor" />
      <rect x="19" y="11" width="2" height="2" fill="currentColor" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 17l6-6 4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const CAPS = [
  {
    icon: <Logo size={22} className="" />,
    num: '01 / Conversación',
    h: 'Diálogo natural en 42 idiomas, sin guion fijo.',
    p: 'El agente entiende intención, contexto y matices. Maneja interrupciones, cambios de tema y solicitudes ambiguas como un humano.',
  },
  {
    icon: <BarsIcon />,
    num: '02 / API · acciones',
    h: 'Consulta tus APIs y ejecuta procesos en vivo.',
    p: 'Saldo de factura, estatus de envío, reserva de hotel, disponibilidad de menú, pago de servicios. Converza llama a tus endpoints con seguridad y devuelve la respuesta en lenguaje natural.',
  },
  {
    icon: <TargetIcon />,
    num: '03 / Aprendizaje',
    h: 'Mejora con cada conversación, sin reentreno manual.',
    p: 'Converza identifica patrones de éxito y los aplica. Tu equipo solo afina lo que importa: el tono y los límites de marca.',
  },
  {
    icon: <GridIcon />,
    num: '04 / Multicanal · multi-industria',
    h: 'WhatsApp, web, email, voz. Banco, hotel, retail.',
    p: 'Un mismo motor que se adapta a cualquier vertical: cumple PCI para bancos, GDPR para salud, y conserva el contexto del cliente entre canales.',
  },
  {
    icon: <CheckIcon />,
    num: '05 / Escalado humano',
    h: 'Sabe cuándo callarse y pasar el bastón.',
    p: 'Detecta frustración, casos sensibles o solicitudes fuera de alcance, y transfiere al humano correcto con todo el contexto.',
  },
  {
    icon: <TrendIcon />,
    num: '06 / Métricas vivas',
    h: 'Cada conversación, una señal medible.',
    p: 'Dashboards en tiempo real: NPS, tiempo de resolución, intención por canal. Exportable, auditable, accionable.',
  },
];

export default function Capabilities() {
  return (
    <section className="block" id="capacidades">
      <div className="container">
        <div className="section-head">
          <h2>
            Un agente que <em>se conecta a tus sistemas.</em>
          </h2>
          <p>
            Converza AI no solo conversa: consume tus APIs en tiempo real para consultar saldos,
            estatus de pedidos, reservas, facturas — y ejecutar acciones como pagos, cambios de
            fecha o reagendamientos, dentro del mismo chat.
          </p>
        </div>

        <div className="caps">
          {CAPS.map((c) => (
            <div className="cap" key={c.num}>
              <div className="cap-icon">{c.icon}</div>
              <span className="num">{c.num}</span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
