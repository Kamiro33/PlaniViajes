import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditarMesa() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mesa, setMesa] = useState({ numero: '', capacidad: 0, disponible: true });

  useEffect(() => {
    // Simular carga de datos de la mesa
    axios.get(`/api/mesas/${id}`)
      .then(response => setMesa(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setMesa({ ...mesa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/mesas/${id}`, mesa)
      .then(() => navigate('/mesas'))
      .catch(error => console.error(error));
  };

  return (
    <div className="editar-mesa">
      <h2> Editar Mesa </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="numero"
          value={mesa.numero}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacidad"
          value={mesa.capacidad}
          onChange={handleChange}
          required
        />
        <select
          name="disponible"
          value={mesa.disponible}
          onChange={(e) => setMesa({ ...mesa, disponible: e.target.value === 'true' })}
        >
          <option value="true">Disponible</option>
          <option value="false">Ocupada</option>
        </select>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarMesa;
