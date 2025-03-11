// src/pages/PrivacyPolicy.jsx
import React from 'react';
import SEO from '../components/SEO';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de la Calculadora de Insulina."
        url="/privacy-policy"
      />
      <div className={styles.privacyContainer}>
        <h1>Política de Privacidad</h1>

        <p>En www.tudosisdeinsulina.com, estamos comprometidos con la protección de tu privacidad y la seguridad de tus datos personales. A continuación, te explicamos cómo gestionamos la información que se recopila cuando accedes y utilizas nuestro sitio web.</p>

        <section className={styles.section}>
          <h2>1. Información que recopilamos</h2>
          <p>Actualmente, en www.tudosisdeinsulina.com no recopilamos información personal identificable, como nombres, direcciones de correo electrónico o cualquier otro dato que permita identificar a los usuarios de manera directa. La única información que recolectamos está relacionada con el acceso y la interacción con nuestro sitio web de manera general, como los datos de navegación, los cuales no permiten identificar a los usuarios de forma individual.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Uso de cookies</h2>
          <p>En www.tudosisdeinsulina.com, no utilizamos cookies ni otras tecnologías de seguimiento para la recopilación de datos. No se almacenan ni procesan datos de navegación mediante el uso de cookies u otros mecanismos similares.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Seguridad del sitio</h2>
          <p>Nos comprometemos a implementar medidas razonables de seguridad para proteger la información que pueda ser almacenada en nuestros servidores, así como la integridad y confidencialidad de los datos durante la transmisión. No obstante, es importante señalar que ningún sistema de transmisión de datos por internet ni almacenamiento electrónico es completamente seguro. Aunque tomamos medidas adecuadas para proteger la información, no podemos garantizar una seguridad absoluta.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Enlaces a sitios de terceros</h2>
          <p>Nuestro sitio puede contener enlaces a otros sitios web externos que no están bajo nuestro control. No somos responsables de las políticas de privacidad ni del contenido de estos sitios web. Te recomendamos revisar las políticas de privacidad de cada sitio web que visites desde nuestro enlace.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Actualizaciones de la política de privacidad</h2>
          <p>Nos reservamos el derecho de modificar y actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será reflejado en esta página, y la fecha de la última actualización se indicará en la parte superior de este documento. Te recomendamos revisar periódicamente esta política para estar al tanto de cualquier modificación.</p>
        </section>

        <section className={styles.section}>
          <p>Si tienes alguna duda o inquietud sobre nuestra política de privacidad, no dudes en ponerte en contacto con nosotros a través de info@tudosisdeinsulina.com</p>
          <p>Última actualización: 11 de Marzo 2025</p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;