import { createRouter, createWebHashHistory } from "vue-router";

import AppView from "@/views/AppView.vue";

const routes = [
  {
    path: "/",
    component: AppView,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
