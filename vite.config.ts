import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // make all assets load from the root
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: process.env.BUILD_TARGET === "cloudflare" ? "dist" : "docs",
  },
  plugins: [
    react(), // your React/SWC plugin
    expressPlugin(), // your dev-only Express middleware
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only on `vite` (dev)
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
