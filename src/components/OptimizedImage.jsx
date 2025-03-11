const OptimizedImage = ({ src, alt, className }) => {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${src.replace(/\.(jpg|png)$/, '.webp')} 1x,
                ${src.replace(/\.(jpg|png)$/, '@2x.webp')} 2x`}
      />
      <source
        srcSet={`${src} 1x,
                ${src.replace(/\.(jpg|png)$/, '@2x.$1')} 2x`}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};
