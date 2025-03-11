import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Usamos 'instant' en lugar de 'smooth' para un scroll inmediato
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
