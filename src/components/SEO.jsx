import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) => {
  const siteTitle = 'Calculadora de Insulina';
  const defaultDescription = 'Calcula tu dosis de insulina de forma precisa y segura. Herramienta gratuita para personas con diabetes.';
  const defaultImage = '/og-image.jpg'; // Imagen por defecto para compartir
  const siteUrl = 'https://www.tudosisdeinsulina.com'; // Tu dominio

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${image || defaultImage}`} />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image || defaultImage}`} />
      
      {/* Metadatos adicionales */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${siteUrl}${url}`} />
    </Helmet>
  );
};

export default SEO;
