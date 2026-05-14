const INDUSTRIES = [
  'Bancos',
  'Hoteles',
  'Restaurantes',
  'Supermercados',
  'Telcos',
  'Aerolíneas',
  'Salud',
  'Retail',
  'Logística',
  'Seguros',
];

export default function Marquee() {
  // Interleave with dot separators to mirror the original markup
  const items = [];
  INDUSTRIES.forEach((name, i) => {
    items.push(<span key={`n-${i}`}>{name}</span>);
    if (i < INDUSTRIES.length - 1) items.push(<span key={`d-${i}`}>·</span>);
  });

  return (
    <>
      <div className="container">
        <div className="marquee-label">Industrias que ya conversan con Converza AI</div>
      </div>
      <div className="marquee">
        <div className="container marquee-inner">{items}</div>
      </div>
    </>
  );
}
