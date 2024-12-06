import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  css: {
    postcss: './postcss.config.json', 
  },
  server: {
    open: true, 
    port: process.env.PORT, 
  },
});


