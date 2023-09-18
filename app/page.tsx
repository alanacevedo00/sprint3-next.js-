import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="sidebar">
      <nav className="menu">
        <ul>
          <li><Link href="/LoginForm">Login</Link></li>
          <li><Link href="/cuentas">Cuentas</Link></li>
          <li><Link href="/transferencias">Transferencias</Link></li>
          <li><Link href="/operaciones">Operaciones</Link></li>
        </ul>
      </nav>
    </div>
  );
}
