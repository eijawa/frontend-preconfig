import { defineConfig } from "vite";

import { fileURLToPath, URL } from "url";

import viteCompression from "vite-plugin-compression";
import { ViteTips } from "vite-plugin-tips";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    origin: "http://localhost:3000/",
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
  plugins: [viteCompression(), ViteTips(), eslintPlugin()],
});
