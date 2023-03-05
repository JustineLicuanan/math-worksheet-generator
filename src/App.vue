<template>
  <div
    class="h-screen p-5 transition-colors duration-75 dark:bg-gray-900 dark:text-gray-200"
  >
    <ThemeSwitch />
    <h1 class="text-center text-3xl">Hello world!</h1>
  </div>
</template>

<script setup lang="ts">
  import ThemeSwitch from "./components/ThemeSwitch.vue";
</script>

<style scoped></style>
