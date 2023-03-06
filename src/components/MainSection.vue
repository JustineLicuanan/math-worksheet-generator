<template>
  <main class="container mx-auto p-5">
    <OperationButtons />
    <WorkSheet />
    <ClearWorksheet />
  </main>
</template>

<script setup lang="ts">
  import ClearWorksheet from "./ClearWorksheet.vue";
  import OperationButtons from "./OperationButtons.vue";
  import WorkSheet from "./WorkSheet.vue";
</script>

<style scoped></style>
