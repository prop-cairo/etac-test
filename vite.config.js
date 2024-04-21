import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/wp-json": {
        target: "https://2023072020311210696095.onamaeweb.jp",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-json/, ""),
      },
    },
  },
});
