import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://migracion.clarochilepromociones.com/claro-formulario-compensacion/Form/dist/',
  plugins: [react()],
})
