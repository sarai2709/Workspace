import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `¡Gracias ${formData.nombre}! Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.`
    );

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Solicita una cotización gratuita o déjanos tu consulta. Nuestro
            equipo está listo para ayudarte con cualquier proyecto eléctrico.
          </p>
        </div>

        <div className="row g-5">
          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>

            <ul className="list-unstyled">
              <li className="mb-3">
                📍 Calle 123 #45-67, Medellín, Colombia
              </li>

              <li className="mb-3">
                📞 +57 300 123 4567
              </li>

              <li className="mb-3">
                📧 contacto@volttec.com
              </li>

              <li className="mb-3">
                🕐 Lunes a Viernes: 8:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  {/* Nombre */}
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="form-control"
                      placeholder="Ingrese su nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="form-control"
                      placeholder="+57 300 123 4567"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Tipo de servicio */}
                  <div className="col-md-6">
                    <label htmlFor="servicio" className="form-label">
                      Tipo de servicio
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      className="form-select"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="instalaciones-residenciales">
                        Instalaciones Residenciales
                      </option>
                      <option value="instalaciones-comerciales">
                        Instalaciones Comerciales
                      </option>
                      <option value="mantenimiento">
                        Mantenimiento Eléctrico
                      </option>
                      <option value="iluminacion-led">
                        Iluminación LED
                      </option>
                      <option value="seguridad">
                        Sistemas de Seguridad
                      </option>
                      <option value="tableros">
                        Tableros Eléctricos
                      </option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      className="form-control"
                      placeholder="Escriba aquí su consulta..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Botón */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-warning px-4 fw-bold"
                    >
                      Enviar Solicitud
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
