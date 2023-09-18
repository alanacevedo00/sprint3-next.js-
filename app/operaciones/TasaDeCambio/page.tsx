import React, { useState, useRef, useEffect } from 'react';

function TasasDeCambio() {
  const [resultado, setResultado] = useState('');
  const [tasasDeCambio, setTasasDeCambio] = useState({});

  const montoInput = useRef(null);
  const monedaSelect = useRef(null);

  function convertir() {
    const montoValue = parseFloat(montoInput.current.value);
    const monedaValue = monedaSelect.current.value;
    let resultadoValue;

    if (tasasDeCambio[monedaValue]) {
      resultadoValue = (montoValue * tasasDeCambio[monedaValue]).toFixed(2) + ' ' + monedaValue;
    } else {
      resultadoValue = '';
    }

    setResultado(resultadoValue);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/USD`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTasasDeCambio(data.rates);
      })
      .catch(error => console.error('Error al obtener las tasas de cambio:', error));
  }, []);

  return (
    <div className="tasas-de-cambio">
      <h2>Tasas de Cambio</h2>
      <form>
        <label htmlFor="monto">Monto:</label>
        <input type="number" id="monto" ref={montoInput} />

        <label htmlFor="moneda">Moneda:</label>
        <select id="moneda" ref={monedaSelect}>
          {Object.keys(tasasDeCambio).map(moneda => (
            <option key={moneda} value={moneda}>
              {moneda}
            </option>
          ))}
        </select>

        <button type="button" id="convertirBtn" onClick={convertir}>
          Convertir
        </button>
      </form>

      <p id="resultado">Resultado: {resultado}</p>
    </div>
  );
}

export default TasasDeCambio;