import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === "serve" ? "/" : "/etac-test/",
    // base: "/etac-test/",
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      rollupOptions: {
        input: {
          main: "src/main.jsx",
          index: "index.html",
        },
      },
    },
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
  };
});
