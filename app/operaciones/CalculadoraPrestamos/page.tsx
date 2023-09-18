
import React, { useState } from 'react';
import './CalculadoraPrestamos.css';

function CalculadoraPrestamos() {
  const [monto, setMonto] = useState('');
  const [tasa, setTasa] = useState('');
  const [plazo, setPlazo] = useState('');
  const [cuotaMensual, setCuotaMensual] = useState(null);

  const calcularPrestamo = () => {

    const interesSimple = (monto * tasa * plazo) / 100;
    const cuota = (parseInt(monto) + interesSimple) / plazo;

    
    setCuotaMensual(cuota.toFixed(2));
  };

  return (
    <div className="calculadora-prestamos">
      <h2>Calculadora de Préstamos</h2>
      <form>
        <div className="input-group">
          <label htmlFor="monto">Monto:</label>
          <input
            type="number"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="tasa">Tasa de Interés (%):</label>
          <input
            type="number"
            id="tasa"
            value={tasa}
            onChange={(e) => setTasa(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="plazo">Plazo (meses):</label>
          <input
            type="number"
            id="plazo"
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
          />
        </div>
        <button type="button" onClick={calcularPrestamo}>
          Calcular
        </button>
      </form>
      {cuotaMensual && (
        <div className="resultado">
          <h3>Cuota Mensual:</h3>
          <p>${cuotaMensual}</p>
        </div>
      )}
    </div>
  );
}

export default CalculadoraPrestamos;
