import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Link to="/privacy-policy">Política de Privacidad</Link>
        </div>
        <div className={styles.rightContent}>
          <p className={styles.copyright}>
            Desarrollado por <a href="https://www.ayelenbarrale.com" target="_blank" rel="noopener noreferrer">Ayelen Barrale</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
