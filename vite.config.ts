import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/deploy-test/', // Reemplaza con el nombre de tu repositorio
  plugins: [react()],
})
