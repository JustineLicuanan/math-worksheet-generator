<template>
  <header>
    <nav
      class="container mx-auto flex flex-wrap items-center justify-between p-5"
    >
      <AppLogo />
      <ThemeSwitch />
    </nav>
  </header>
</template>

<script setup lang="ts">
  import AppLogo from "./AppLogo.vue";
  import ThemeSwitch from "./ThemeSwitch.vue";
</script>

<style scoped></style>
