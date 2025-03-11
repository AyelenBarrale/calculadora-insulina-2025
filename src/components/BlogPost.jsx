import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './BlogPost.module.scss';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Importación dinámica del archivo MDX
        const postModule = await import(`../content/blog/${slug}.mdx`);
        const Component = postModule.default;
        
        setPost({
          Component,
          title: postModule.frontmatter?.title || 'Sin título',
          date: postModule.frontmatter?.date,
          author: postModule.frontmatter?.author,
          metaDescription: postModule.frontmatter?.metaDescription,
        });
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    loadPost();
  }, [slug]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  const { Component, title, date, author, metaDescription } = post;

  return (
    <>
      <Helmet>
        <title>{title} | Calculadora de Insulina</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className={styles.backLinkContainer}>
        <div className={styles.backLinkWrapper}>
          <Link to="/blog" className={styles.backLink}>
            ← Volver al blog
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <article className={styles.blogPost}>
          <header className={styles.header}>
            <h1>{title}</h1>
            <div className={styles.meta}>
              {date && (
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {author && <span className={styles.author}>Por {author}</span>}
            </div>
          </header>

          <div className={styles.content}>
            <Component />
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
