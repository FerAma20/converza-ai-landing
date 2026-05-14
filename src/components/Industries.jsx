const INDUSTRIES = [
  {
    num: '— Bancos & Finanzas',
    h: 'Saldos, transferencias, bloqueo de tarjeta.',
    p: 'Consulta saldo, últimos movimientos, factura del crédito; bloquea tarjeta o solicita reemplazo. Cumple PCI-DSS.',
  },
  {
    num: '— Telcos',
    h: 'Saldo, plan, recargas, reportes de falla.',
    p: 'Consulta saldo de prepago, factura de postpago, consumo de datos; recarga, cambia de plan o abre ticket de avería.',
  },
  {
    num: '— Hoteles & Viajes',
    h: 'Reservas, check-in, upgrades, amenities.',
    p: 'Buscar disponibilidad, modificar reserva, pedir late check-out, solicitar room service — todo dentro del chat.',
  },
  {
    num: '— Restaurantes',
    h: 'Menú, reservas, pedidos, delivery.',
    p: 'Mostrar carta, tomar pedido, agendar mesa, dar estatus de delivery — con stock y precio en vivo desde tu POS.',
  },
  {
    num: '— Supermercados & Retail',
    h: 'Stock, precio, pedidos, devoluciones.',
    p: 'Verificar disponibilidad por sucursal, ubicar producto, gestionar devoluciones y rastrear envíos en tiempo real.',
  },
  {
    num: '— Salud & Servicios',
    h: 'Citas, recetas, recordatorios, triaje.',
    p: 'Agendar consulta, reprogramar cita, consultar resultados, enviar recordatorios. Cumple HIPAA / GDPR.',
  },
];

export default function Industries() {
  return (
    <section className="block block--warm">
      <div className="container">
        <div className="section-head">
          <h2>
            Una plataforma. <em>Cada industria.</em>
          </h2>
          <p>
            El mismo agente, distintas integraciones. Converza se conecta a las APIs de cada cliente
            para entender su negocio y resolver consultas reales — no respuestas genéricas.
          </p>
        </div>

        <div className="caps">
          {INDUSTRIES.map((i) => (
            <div className="cap" key={i.num}>
              <span className="num">{i.num}</span>
              <h3>{i.h}</h3>
              <p>{i.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
