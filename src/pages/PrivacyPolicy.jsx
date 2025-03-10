// src/pages/PrivacyPolicy.jsx
import React from 'react';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1>Política de Privacidad</h1>
      
      <section className={styles.section}>
        <h2>Introducción</h2>
        <p>Bienvenido a Calculadora de Insulina. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información.</p>
      </section>

      <section className={styles.section}>
        <h2>Información que Recopilamos</h2>
        <p>Recopilamos información básica de uso y cookies para mejorar nuestro servicio.</p>
      </section>

      <section className={styles.section}>
        <h2>Contacto</h2>
        <p>Email: ejemplo@dominio.com</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;