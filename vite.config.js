import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel needs this config
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: "dist"
  }
});
