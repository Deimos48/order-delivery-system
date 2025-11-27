import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",                  // корень проекта = текущая папка
  publicDir: "public",        // если понадобится
  build: {
    outDir: "dist"
  },
  server: {
    port: 3000
  }
});
