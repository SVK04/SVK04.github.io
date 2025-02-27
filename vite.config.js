import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',          
  build: {
    chunkSizeWarningLimit: 100000,
    rollupOptions: {
      input: "index.html",
    },
  },
  css: {
    postcss: './postcss.config.json',
  },
  server: {
    open: true,
    port: import.meta?.env?.VITE_PORT || 3000
  },
});


