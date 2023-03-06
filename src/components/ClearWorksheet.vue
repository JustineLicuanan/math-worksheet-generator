<template>
  <div
    class="py-5 text-center"
    v-if="worksheetStore.worksheets.value.length !== 0"
  >
    <button class="px-6 text-xl" @click="worksheetStore.clear">Clear</button>
  </div>
</template>

<script setup lang="ts">
  import { useWorksheet } from "@/composables/worksheet";

  const worksheetStore = useWorksheet();
</script>

<style scoped></style>
