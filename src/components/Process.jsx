const STEPS = [
  {
    num: '01',
    h: 'Conecta',
    p: 'Integra tu CRM, helpdesk, base de conocimiento y canales en una sola interfaz.',
  },
  {
    num: '02',
    h: 'Entrena',
    p: 'Sube tus documentos, FAQs y políticas. Converza los lee y genera tu agente.',
  },
  {
    num: '03',
    h: 'Calibra',
    p: 'Ajusta el tono, los límites y los flujos de escalación con un editor visual.',
  },
  {
    num: '04',
    h: 'Despliega',
    p: 'Activa en producción. Mide, itera y deja que el agente aprenda solo.',
  },
];

export default function Process() {
  return (
    <section className="block" id="funciona">
      <div className="container">
        <div className="section-head">
          <h2>
            Listo en cuatro pasos. <em>Sin reescribir tu stack.</em>
          </h2>
          <p>
            Converza se conecta con tu CRM, base de conocimiento y canales en horas, no semanas. El
            equipo solo entrena el tono — la inteligencia ya viene incluida.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <span className="num">{s.num}</span>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
