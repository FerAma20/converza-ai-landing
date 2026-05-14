import { useModal } from '../context/ModalContext.jsx';
import ArrowRight from './icons/ArrowRight.jsx';

export default function CTA() {
  const { openModal } = useModal();

  return (
    <section className="cta-strip">
      <div className="container">
        <h2>
          Conversaciones <em>que resuelven.</em>
        </h2>
        <div className="cta-row">
          <button className="btn-primary" onClick={openModal}>
            Solicitar demo
            <ArrowRight />
          </button>
          <button className="btn-ghost" onClick={openModal}>
            Hablar con ventas
          </button>
        </div>
      </div>
    </section>
  );
}
