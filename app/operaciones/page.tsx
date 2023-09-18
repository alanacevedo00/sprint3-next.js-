import React from 'react';
import Link from 'next/link';

function Operaciones() {
  return (
    <div className="operaciones">
      <div className="content">
        <h2>Operaciones</h2>
        <div className="CalculadoraPrestamos">
            <Link href="/CalculadoraPrestamos">Calculadora de intereses</Link>
        </div>
        <div className="TasasDeCambio">
            <Link href="/TasaDeCambio">Divisas</Link>
        </div>
      </div>
    </div>
  );
}

export default Operaciones;