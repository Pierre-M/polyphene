/// <reference types="vitest" />

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      exclude: ["**/_layouts/**"],
    }),
    Layouts({
      layoutsDirs: "./src/pages/_layouts",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
