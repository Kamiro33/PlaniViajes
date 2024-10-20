import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ReservaForm from './components/ReservaForm';
import ListaMesas from './components/ListaMesas';
import EditarMesa from './components/EditarMesa';
import Header from './components/Header';
import './styles.css';
import './App.css';

function ControladorRutasRoles() {
  const [rol, setRol] = useState('cliente'); // Cambia entre 'cliente' y 'admin'

  return (
    <Router>
      <div className="ControladorRutasRoles">
        <Header rol={rol} setRol={setRol} />
        <Routes>
          <Route path="/" element={<ReservaForm />} />
          <Route path="/mesas" element={<ListaMesas />} />
          {rol === 'admin' ? (
            <Route path="/editar-mesa/:id" element={<EditarMesa />} />
          ) : (
            <Route path="/" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default ControladorRutasRoles;