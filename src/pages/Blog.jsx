import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blogPosts';
import styles from './Blog.module.scss';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    }
    loadPosts();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.blogContainer}>
      <h1>Blog de Salud y Diabetes</h1>
      <div className={styles.blogGrid}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.blogCard}>
            <img src={post.image} alt={post.title} />
            <div className={styles.cardContent}>
              <h2>{post.title}</h2>
              <p>{post.metaDescription}</p>
              <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
