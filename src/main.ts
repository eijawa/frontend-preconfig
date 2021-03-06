import { createApp } from "vue";

import { router } from "@/router/router";

import { createPinia } from "pinia";
import App from "./App.vue";

import "./tailwindcss.css";

import InlineSvg from "vue-inline-svg";

createApp(App)
  .use(router)
  .use(createPinia())
  .component("InlineSvg", InlineSvg)
  .mount("#app");
