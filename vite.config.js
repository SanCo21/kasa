import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main.scss', // Assurez-vous que le chemin est correct
      output: {
        entryFileNames: 'main.css',
      },
    },
    sourcemap: false, // Désactive la génération des fichiers .map
  },
})
