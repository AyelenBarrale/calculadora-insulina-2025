const BlogPostSchema = ({ post }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "image": post.image,
    "publisher": {
      "@type": "Organization",
      "name": "Calculadora de Insulina",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tudosisdeinsulina.com/logo.png"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
