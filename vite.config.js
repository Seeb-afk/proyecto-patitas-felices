import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
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
})
