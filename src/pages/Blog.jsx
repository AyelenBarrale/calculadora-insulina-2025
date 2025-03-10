import React from 'react';
import styles from './Blog.module.scss';

const blogPosts = [
  {
    id: 1,
    title: "Control de la glucosa durante el ejercicio",
    excerpt: "Aprende cómo mantener niveles seguros de glucosa mientras haces ejercicio...",
    image: "/images/ejercicio-diabetes.jpg",
    slug: "control-glucosa-ejercicio"
  },
  {
    id: 2,
    title: "Alimentación balanceada para diabéticos",
    excerpt: "Guía completa sobre cómo planificar tus comidas...",
    image: "/images/alimentacion-diabetes.jpg",
    slug: "alimentacion-balanceada"
  },
  // Más artículos...
];

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <h1>Blog de Salud y Diabetes</h1>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <img src={post.image} alt={post.title} />
            <div className={styles.cardContent}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className={styles.readMore}>
                Leer más →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
