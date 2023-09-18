"use client"

import React, { useState, useEffect } from 'react';

function Transferencias() {
  const [formValues, setFormValues] = useState({
    cuentaOrigen: '',
    cuentaDestino: '',
    monto: '',
    concepto: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const transferenciaExitosa = true;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (transferenciaExitosa) {
      setSuccessMessage('¡La transferencia fue exitosa!');

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else {
      setSuccessMessage('¡La transferencia falló!');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [successMessage]);

  function handleInputChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

  return (
    <div className="operaciones">
      <div className="content">
        <header>
          <h1>Transferencias</h1>
        </header>

        <main>
          <section className='transf'>
            <h2>Realizar Transferencia</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="cuenta-origen">Cuenta Origen:</label>
              <input
                type="text"
                id="cuenta-origen"
                name="cuentaOrigen"
                required
                placeholder="Ingrese cuenta"
                value={formValues.cuentaOrigen}
                onChange={handleInputChange}
              />

              <label htmlFor="cuenta-destino">Cuenta Destino:</label>
              <input
                type="text"
                id="cuenta-destino"
                name="cuentaDestino"
                required
                placeholder="Ingrese cuenta"
                value={formValues.cuentaDestino}
                onChange={handleInputChange}
              />

              <label htmlFor="monto">Monto:</label>
              <input
                type="number"
                id="monto"
                name="monto"
                required
                placeholder="Ingrese monto"
                value={formValues.monto}
                onChange={handleInputChange}
              />

              <label htmlFor="concepto">Concepto:</label>
              <input
                type="text"
                id="concepto"
                name="concepto"
                placeholder="Ingrese concepto"
                value={formValues.concepto}
                onChange={handleInputChange}
              />

              <button type="submit">Transferir</button>
            </form>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Transferencias;
