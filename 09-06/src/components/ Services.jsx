// ============================================================
//  Services.jsx
// ============================================================

// 🛠️ PASO 1: Array de servicios
const servicios = [
  {
    icono: "⚡",
    titulo: "Instalaciones Residenciales",
    descripcion:
      "Realizamos instalaciones eléctricas seguras y eficientes para viviendas nuevas y remodelaciones.",
  },
  {
    icono: "🏢",
    titulo: "Instalaciones Comerciales",
    descripcion:
      "Diseñamos e instalamos sistemas eléctricos para oficinas, locales y empresas.",
  },
  {
    icono: "🔧",
    titulo: "Mantenimiento Eléctrico",
    descripcion:
      "Detectamos y solucionamos fallas para garantizar el correcto funcionamiento de tus sistemas.",
  },
  {
    icono: "💡",
    titulo: "Iluminación LED",
    descripcion:
      "Instalamos soluciones de iluminación modernas que reducen el consumo energético.",
  },
  {
    icono: "🛡️",
    titulo: "Sistemas de Seguridad",
    descripcion:
      "Implementamos cámaras, alarmas y sistemas de protección para hogares y negocios.",
  },
  {
    icono: "🔌",
    titulo: "Tableros Eléctricos",
    descripcion:
      "Montaje, reparación y actualización de tableros eléctricos con altos estándares de calidad.",
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            Ofrecemos soluciones eléctricas profesionales para hogares,
            empresas e industrias con calidad y seguridad garantizadas.
          </p>
        </div>

        {/* Renderizado dinámico con map */}
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">{servicio.icono}</div>
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text text-muted">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
