export async function getAllPosts() {
  const mdxFiles = import.meta.glob('../content/blog/*.mdx')
  const posts = []

  for (const path in mdxFiles) {
    const module = await mdxFiles[path]()
    const slug = path.split('/').pop().replace('.mdx', '')
    
    posts.push({
      slug,
      ...module.frontmatter,
      Component: module.default
    })
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostBySlug(slug) {
  const mdxFiles = import.meta.glob('../content/blog/*.mdx')
  const path = `../content/blog/${slug}.mdx`
  
  if (!(path in mdxFiles)) {
    return null
  }

  try {
    const module = await mdxFiles[path]()
    
    // Asegurarnos de que frontmatter tenga valores por defecto
    const frontmatter = module.frontmatter || {}
    
    return {
      slug,
      title: frontmatter.title || '',
      date: frontmatter.date || '',
      author: frontmatter.author || '',
      metaDescription: frontmatter.metaDescription || '',
      keywords: Array.isArray(frontmatter.keywords) ? frontmatter.keywords : [],
      image: frontmatter.image || '',
      readingTime: frontmatter.readingTime || '',
      Component: module.default
    }
  } catch (error) {
    console.error('Error loading post:', error)
    return null
  }
}
