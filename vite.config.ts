import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { fileURLToPath, URL } from "url";

import viteCompression from "vite-plugin-compression";
import { ViteTips } from "vite-plugin-tips";
import eslintPlugin from "vite-plugin-eslint";
import Components from "unplugin-vue-components/vite";
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers";

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
  plugins: [
    vue(),
    viteCompression(),
    ViteTips(),
    eslintPlugin(),
    Components({
      dts: true,
      resolvers: [
        HeadlessUiResolver({
          prefix: "",
        }),
      ],
    }),
  ],
});
