import { useModal } from '../context/ModalContext.jsx';

const PLANS = [
  {
    name: 'Starter',
    amount: '$0.50',
    unit: '/ minuto',
    feat: false,
    items: [
      '1 canal (web o WhatsApp)',
      'Cobro por minuto de conversación',
      'Métricas básicas',
      'Soporte estándar',
    ],
    cta: 'Solicitar acceso',
  },
  {
    name: 'Business',
    amount: '$0.50',
    unit: '/ minuto',
    feat: true,
    items: [
      'Todos los canales',
      'Integraciones CRM/helpdesk + APIs',
      'Métricas en tiempo real',
      'Soporte 24/7',
    ],
    cta: 'Solicitar demo',
  },
  {
    name: 'Enterprise',
    amount: 'A medida',
    unit: '',
    feat: false,
    items: ['SLA dedicado', 'Despliegue privado', 'Voz personalizada', 'CSM asignado'],
    cta: 'Hablar con ventas',
  },
];

export default function Pricing() {
  const { openModal } = useModal();

  return (
    <section className="block block--warm" id="precios">
      <div className="container">
        <div className="section-head">
          <h2>
            Precios claros. <em>Cobramos por minuto.</em>
          </h2>
          <p>
            Sin licencias, sin planes gratis. Pagas $0.50 USD por cada minuto de conversación — nada
            más.
          </p>
        </div>

        <div className="pricing">
          {PLANS.map((p) => (
            <div className={`price${p.feat ? ' feat' : ''}`} key={p.name}>
              <div className="price-name">{p.name}</div>
              <div className="price-amt">
                {p.amount}
                {p.unit && <small>{p.unit}</small>}
              </div>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <button className="price-cta" onClick={openModal}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
