import React, { useState } from 'react';
import MensajeConfirmacion from './MensajeConfirmacion';

function ReservaForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    destino: '',
    personas: '',
  });

  const [confirmacion, setConfirmacion] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se haría la llamada a la API
    setConfirmacion(true);
  };

  return (
    <div className="reserva-form">
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destino"
          placeholder="Destino"
          value={formData.destino}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="personas"
          placeholder="Número de Personas"
          value={formData.personas}
          onChange={handleChange}
          required
        />
        <button type="submit">Reservar</button>
      </form>
      {confirmacion && <MensajeConfirmacion />}
    </div>
  );
}

export default ReservaForm;