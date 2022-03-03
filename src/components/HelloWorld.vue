<script setup lang="ts">
import { ref } from "vue";

import LittleSwitch from "@/components/LittleSwitch.vue";

import BxsLemonIcon from "@/assets/icons/bxs-lemon.svg";

defineProps({
  msg: {
    type: String,
    default: "",
  },
});

const count = ref(0);
</script>

<template>
  <h1 class="text-3xl font-bold text-blue-600 underline">
    {{ msg }}
  </h1>

  <little-switch />

  <inline-svg
    :src="BxsLemonIcon"
    width="150"
    height="150"
    class="fill-orange-300"
  />

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
