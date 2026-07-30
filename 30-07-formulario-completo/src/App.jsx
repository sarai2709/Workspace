import React, { useState } from 'react';

export default function RegistroEstudiante() {
  // 1. Estados para cada uno de los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nivelExperiencia, setNivelExperiencia] = useState(5);
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [lenguajes, setLenguajes] = useState([]);
  const [modalidad, setModalidad] = useState('presencial');
  const [pais, setPais] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [foto, setFoto] = useState(null);
  const [colorFavorito, setColorFavorito] = useState('#000000');

  // Estados auxiliares para la lógica de la aplicación
  const [resumen, setResumen] = useState(null);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorEdad, setErrorEdad] = useState('');

  // 2. Manejador para los checkboxes múltiples (Lenguajes)
  const handleLenguajesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLenguajes([...lenguajes, value]);
    } else {
      setLenguajes(lenguajes.filter((lang) => lang !== value));
    }
  };

  // 3. Manejador para el archivo (Foto de perfil)
  const handleFotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(e.target.files[0]);
    }
  };

  // 4. Envío del formulario y validaciones
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar Email (Expresión regular básica)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setErrorEmail('Por favor, ingresa un correo electrónico válido.');
      return;
    } else {
      setErrorEmail('');
    }

    // Validar Edad (Nivel extra: mayor a 0)
    if (Number(edad) <= 0) {
      setErrorEdad('La edad debe ser un número mayor a 0.');
      return;
    } else {
      setErrorEdad('');
    }

    // Si todo es válido, guardamos el resumen para mostrarlo
    setResumen({
      nombre,
      correo,
      contrasena, // En una app real no se mostraría así, pero cumple el propósito educativo
      edad,
      fechaNacimiento,
      nivelExperiencia,
      lenguajes,
      modalidad,
      pais,
      comentarios,
      foto: foto ? foto.name : 'Ninguna',
      colorFavorito,
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Registro de Estudiante</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Input: Text */}
        <label>
          <strong>Nombre completo:</strong>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>

        {/* Input: Email */}
        <label>
          <strong>Correo electrónico:</strong>
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          {errorEmail && <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{errorEmail}</p>}
        </label>

        {/* Input: Password */}
        <label>
          <strong>Contraseña:</strong>
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>

        {/* Input: Number */}
        <label>
          <strong>Edad:</strong>
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          {errorEdad && <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '14px' }}>{errorEdad}</p>}
        </label>

        {/* Input: Date */}
        <label>
          <strong>Fecha de nacimiento:</strong>
          <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>

        {/* Input: Range (Muestra valor en tiempo real) */}
        <label>
          <strong>Nivel de experiencia (1 al 10): {nivelExperiencia}</strong>
          <input type="range" min="1" max="10" value={nivelExperiencia} onChange={(e) => setNivelExperiencia(e.target.value)} style={{ width: '100%', marginTop: '5px' }} />
        </label>

        {/* Input: Radio (Grupo) */}
        <div>
          <strong>Modalidad de estudio:</strong>
          <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
            <label>
              <input type="radio" value="presencial" checked={modalidad === 'presencial'} onChange={(e) => setModalidad(e.target.value)} /> Presencial
            </label>
            <label>
              <input type="radio" value="virtual" checked={modalidad === 'virtual'} onChange={(e) => setModalidad(e.target.value)} /> Virtual
            </label>
          </div>
        </div>

        {/* Select con option */}
        <label>
          <strong>País de residencia:</strong>
          <select value={pais} onChange={(e) => setPais(e.target.value)} required style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
            <option value="">Selecciona un país</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Argentina">Argentina</option>
            <option value="España">España</option>
            <option value="Otro">Otro</option>
          </select>
        </label>

        {/* Input: Checkbox (Varios) */}
        <div>
          <strong>Lenguajes que conoce:</strong>
          <div style={{ display: 'flex', gap: '15px', marginTop: '5px', flexWrap: 'wrap' }}>
            <label><input type="checkbox" value="JavaScript" checked={lenguajes.includes('JavaScript')} onChange={handleLenguajesChange} /> JavaScript</label>
            <label><input type="checkbox" value="Python" checked={lenguajes.includes('Python')} onChange={handleLenguajesChange} /> Python</label>
            <label><input type="checkbox" value="Java" checked={lenguajes.includes('Java')} onChange={handleLenguajesChange} /> Java</label>
          </div>
        </div>

        {/* Textarea */}
        <label>
          <strong>Comentarios adicionales:</strong>
          <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} rows="3" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>

        {/* Input: File (Con vista previa en tiempo real - Nivel extra) */}
        <label>
          <strong>Foto de perfil:</strong>
          <input type="file" accept="image/*" onChange={handleFotoChange} style={{ display: 'block', marginTop: '5px' }} />
          {foto && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Vista previa:</p>
              <img src={URL.createObjectURL(foto)} alt="Vista previa" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          )}
        </label>

        {/* Input: Color */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <strong>Color favorito:</strong>
          <input type="color" value={colorFavorito} onChange={(e) => setColorFavorito(e.target.value)} style={{ cursor: 'pointer' }} />
        </label>

        {/* Input: Checkbox (Uno solo - Obligatorio) */}
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '10px' }}>
          <input type="checkbox" checked={aceptarTerminos} onChange={(e) => setAceptarTerminos(e.target.checked)} required />
          <span>Acepto los términos y condiciones del registro estudiantil.</span>
        </label>

        {/* Button: Submit (Deshabilitado si no se aceptan términos) */}
        <button type="submit" disabled={!aceptarTerminos} style={{ padding: '10px 20px', backgroundColor: aceptarTerminos ? '#007bff' : '#ccc', color: '#fff', border: 'none', borderRadius: '4px', cursor: aceptarTerminos ? 'pointer' : 'not-allowed', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
          Enviar Registro
        </button>

      </form>

      {/* Resumen de datos ingresados al hacer Submit */}
      {resumen && (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>📋 Resumen de Datos Registrados</h3>
          <p><strong>Nombre:</strong> {resumen.nombre}</p>
          <p><strong>Correo:</strong> {resumen.correo}</p>
          <p><strong>Contraseña:</strong> {'•'.repeat(resumen.contrasena.length)}</p>
          <p><strong>Edad:</strong> {resumen.edad} años</p>
          <p><strong>Fecha de Nacimiento:</strong> {resumen.fechaNacimiento}</p>
          <p><strong>Nivel de Experiencia:</strong> {resumen.nivelExperiencia} / 10</p>
          <p><strong>Modalidad:</strong> {resumen.modalidad}</p>
          <p><strong>País:</strong> {resumen.pais}</p>
          <p><strong>Lenguajes conocidos:</strong> {resumen.lenguajes.length > 0 ? resumen.lenguajes.join(', ') : 'Ninguno seleccionado'}</p>
          <p><strong>Comentarios:</strong> {resumen.comentarios || 'Sin comentarios'}</p>
          <p><strong>Archivo de foto:</strong> {resumen.foto}</p>
          <p>
            <strong>Color favorito: </strong> 
            <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: resumen.colorFavorito, verticalAlign: 'middle', marginLeft: '5px', borderRadius: '4px', border: '1px solid #ccc' }}></span> {resumen.colorFavorito}
          </p>
        </div>
      )}
    </div>
  );
}