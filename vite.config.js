import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // O build SSR (src/entry-server.jsx) só serve para o pré-render; não precisa da pasta public.
    copyPublicDir: !isSsrBuild,
  },
}))
