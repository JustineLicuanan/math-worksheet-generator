<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <h2 class="text-lg">Choose an Arithmentic Operation:</h2>
    <div class="flex flex-wrap items-center justify-center gap-7">
      <button class="py-2">
        <PlusIcon class="inline-block h-6 w-6 align-middle" />
      </button>
      <button class="py-2">
        <MinusIcon class="inline-block h-6 w-6 align-middle" />
      </button>
      <button class="py-2">
        <XMarkIcon class="inline-block h-6 w-6 align-middle" />
      </button>
      <button class="py-2 px-5">
        <span class="text-2xl leading-none">÷</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped></style>
