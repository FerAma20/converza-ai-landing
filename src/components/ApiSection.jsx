export default function ApiSection() {
  return (
    <section className="block">
      <div className="container">
        <div className="section-head">
          <h2>
            Tu API es <em>su superpoder.</em>
          </h2>
          <p>
            Converza llama a tus endpoints REST o GraphQL con autenticación OAuth, API key o JWT.
            Lee la respuesta, extrae lo importante y lo traduce al idioma del cliente.
          </p>
        </div>

        <div className="api-grid">
          <div className="api-code">
            <div className="api-label">CALL · YOUR_API · /v1/billing</div>
            <div>
              <span className="verb">GET</span> https://api.<span className="brand-c">tu-empresa</span>.com/billing/4821
            </div>
            <div className="auth">Authorization: Bearer ••••••</div>
            <div className="brace">{'{'}</div>
            <div className="indent">"customer": "Daniela R.",</div>
            <div className="indent">
              "balance": <span className="num-v">847.50</span>,
            </div>
            <div className="indent">"due_date": "2026-05-15",</div>
            <div className="indent">"plan": "Postpago 50GB"</div>
            <div className="brace">{'}'}</div>
            <div className="narration">
              <span className="arrow">Converza →</span> “Hola Daniela. Tu factura de mayo es de
              $847.50, vence el 15. ¿Quieres pagarla ahora?”
            </div>
          </div>

          <div className="api-side">
            <div className="api-card">
              <div className="label">Conexión segura</div>
              <p>OAuth 2.0, API keys, JWT, mTLS. Secrets encriptados, rotación automática.</p>
            </div>
            <div className="api-card">
              <div className="label">Acciones, no solo lecturas</div>
              <p>
                POST, PUT, DELETE — pagar factura, reagendar cita, cancelar pedido, todo con
                confirmación del usuario.
              </p>
            </div>
            <div className="api-card">
              <div className="label">Cumplimiento</div>
              <p>
                PCI-DSS, HIPAA, GDPR, SOC 2. Logs auditables y consentimiento explícito por acción
                crítica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
