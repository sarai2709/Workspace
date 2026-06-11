// ============================================================
//  WhyUs.jsx  (¿Por qué elegirnos?)
// ============================================================

// 🛠️ PASO 1: Array de razones
const razones = [
  {
    icono: "🏆",
    titulo: "Experiencia certificada",
    descripcion:
      "Contamos con profesionales capacitados y certificados en instalaciones eléctricas.",
  },
  {
    icono: "⚡",
    titulo: "Respuesta rápida",
    descripcion:
      "Atendemos emergencias y proyectos en el menor tiempo posible.",
  },
  {
    icono: "🛡️",
    titulo: "Seguridad garantizada",
    descripcion:
      "Trabajamos bajo normas técnicas para garantizar instalaciones seguras y confiables.",
  },
  {
    icono: "💰",
    titulo: "Precios competitivos",
    descripcion:
      "Ofrecemos soluciones de alta calidad con costos justos y transparentes.",
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="VoltTec"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">
              ¿Por qué elegirnos?
            </h2>

            <p className="text-muted">
              En VoltTec nos especializamos en brindar soluciones eléctricas
              seguras, modernas y eficientes para hogares, comercios e
              industrias. Nuestro compromiso es ofrecer un servicio de calidad
              que garantice la tranquilidad y satisfacción de nuestros clientes.
            </p>

            <p className="text-muted mb-4">
              Gracias a nuestra experiencia y al uso de tecnología actualizada,
              desarrollamos proyectos adaptados a cada necesidad, asegurando
              resultados duraderos, cumplimiento de normas técnicas y atención
              personalizada en cada etapa del proceso.
            </p>

            {/* Lista de razones */}
            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li key={index} className="d-flex mb-4">
                  <div className="fs-3 me-3">
                    {razon.icono}
                  </div>

                  <div>
                    <h5 className="mb-1">
                      {razon.titulo}
                    </h5>

                    <p className="text-muted mb-0">
                      {razon.descripcion}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
