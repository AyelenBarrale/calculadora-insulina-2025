import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogPost.module.scss';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Aquí podrías tener una función que obtiene el contenido del artículo
  // basado en el slug desde una API o archivo local
  
  return (
    <article className={styles.blogPost}>
      <div className={styles.header}>
        <h1>Título del Artículo</h1>
        <img src="/path-to-image.jpg" alt="Título del artículo" />
      </div>
      
      <div className={styles.content}>
        <p>Contenido del artículo...</p>
      </div>
    </article>
  );
};

export default BlogPost;
