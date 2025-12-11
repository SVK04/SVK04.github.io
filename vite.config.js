import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      tiff: {
        quality: 80,
      },
      // gif: {},
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
  base: '/',
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router', 'framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
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


