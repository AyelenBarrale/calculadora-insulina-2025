import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }]
        ],
        providerImportSource: "@mdx-js/react",
      })
    },
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Calculadora de Insulina',
        short_name: 'Insulina Calc',
        description: 'Calcula tu dosis de insulina de forma precisa y segura',
        theme_color: '#ffffff',
        icons: [
          // Agrega tus iconos aquí
        ]
      }
    })
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Separar chunks para mejor caching
        }
      }
    }
  }
})
