import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      jsxRuntime: "automatic",
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,gltf,bin,pdf}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
        runtimeCaching: [
          {
            urlPattern: /.*\.(?:gltf|bin|glb|png|jpg|jpeg)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "3d-models",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      tiff: { quality: 80 },
      webp: { lossless: true },
      avif: { lossless: true },
      gifsicle: { optimizationLevel: 3 },
      svgo: true,
      disable: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/",
  build: {
    target: "esnext",
    minify: true,
    cssMinify: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router", "framer-motion"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.json"),
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    devSourcemap: true,
  },
  server: {
    open: true,
    port: 3000, // hardcoded port
    strictPort: true,
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router", "framer-motion"],
  },
  preview: {
    port: 5000,
    open: true,
  },
});
