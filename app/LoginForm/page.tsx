import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    console.log('Datos de inicio de sesión:', formData);
    setError('');

    navigate('/home');
  };

  return (
    <div className={styles['login-form-container']}>
      <h2 className={styles['login-header']}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className={styles['custom-label']}>Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className={styles['custom-text-input']}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles['custom-label']}>Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles['custom-password-input']}
          />
        </div>
        {error && <p className={styles['error-message']} style={{ color: 'red' }}>{error}</p>}
        <div>
          <button type="submit" className={styles['custom-button']}>Iniciar Sesión</button>
        </div>
      </form>
      <div className={styles['registro']}>
        <p>¿No tienes una cuenta? <Link to="/registro" className={styles['registro-link']}>Regístrate</Link></p>
      </div>
    </div>
  );
}

export default LoginForm;
