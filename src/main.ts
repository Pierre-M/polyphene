import "./core/theme/style.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import routes from "~pages";

import App from "./app.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
