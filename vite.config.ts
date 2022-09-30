/// <reference types="vitest" />

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [vue(), Pages()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
