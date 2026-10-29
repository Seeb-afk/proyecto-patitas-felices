import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const deployToGitHubPages = mode === 'pages'

  return {
    base: deployToGitHubPages ? '/proyecto-patitas-felices/' : '/',
    plugins: [tailwindcss()],
    build: {
      outDir: deployToGitHubPages ? 'docs' : 'dist',
      rollupOptions: {
        input: {
          home: 'index.html',
          servicios: 'servicios.html',
          consulta: 'consulta.html',
          equipo: 'equipo.html',
          contacto: 'contacto.html',
          agendar: 'agendar.html',
          notFound: '404.html',
        },
      },
    },
  }
})
