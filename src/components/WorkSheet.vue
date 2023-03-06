<template>
  <div class="py-5">
    <ul class="text-center text-3xl">
      <li
        v-for="(worksheet, idx) in worksheetStore.worksheets.value"
        :key="idx + 1"
      >
        {{ worksheet[0] }} {{ worksheetStore.currentOperation.value }}
        {{ worksheet[1] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useWorksheet } from "@/composables/worksheet";

  const worksheetStore = useWorksheet();
</script>

<style scoped></style>
