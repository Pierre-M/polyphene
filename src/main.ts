import "./core/theme/style.css";

import { setupLayouts } from "virtual:generated-layouts";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import generatedRoutes from "~pages";

const routes = setupLayouts(generatedRoutes);

import App from "./app.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
