<template>
  <div>
    <button @click="toggleDark()">
      <MoonIcon class="inline-block h-5 w-5 align-middle" v-if="isDark" />
      <SunIcon class="inline-block h-5 w-5 align-middle" v-else />
      <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
