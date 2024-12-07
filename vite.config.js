import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SVK04.github.io/',
  build: {
    chunkSizeWarningLimit: 100000000,
    rollupOptions: {
      input: 'src/main.jsx',
    },
    
  },
  css: {
    postcss: './postcss.config.json',
  },
  server: {
    open: true,
    port: process.env.PORT,
  },
});


