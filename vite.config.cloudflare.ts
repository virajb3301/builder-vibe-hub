import { defineConfig } from "vite";
import path from "path";

// Cloudflare Worker build configuration
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "server/cloudflare-worker.ts"),
      name: "worker",
      fileName: "_worker",
      formats: ["es"],
    },
    outDir: "dist",
    emptyOutDir: false,
    target: "esnext",
    rollupOptions: {
      external: [],
      output: {
        format: "es",
        entryFileNames: "_worker.js",
      },
    },
    minify: true,
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
