<template>
  <div>
    <NavBar />
    <MainSection />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, watch } from "vue";
  import MainSection from "./components/MainSection.vue";
  import NavBar from "./components/NavBar.vue";
  import { useWorksheet } from "./composables/worksheet";

  const worksheetStore = useWorksheet();

  onMounted(() => {
    if ("currentOperation" in localStorage && "worksheets" in localStorage) {
      worksheetStore.worksheets.value = JSON.parse(localStorage.worksheets);
      worksheetStore.currentOperation.value = JSON.parse(
        localStorage.currentOperation
      );
    }
  });

  watch(worksheetStore.currentOperation, () => {
    localStorage.setItem(
      "currentOperation",
      JSON.stringify(worksheetStore.currentOperation.value)
    );
  });

  watch(
    worksheetStore.worksheets,
    () => {
      localStorage.setItem(
        "worksheets",
        JSON.stringify(worksheetStore.worksheets.value)
      );
    },
    { deep: true }
  );
</script>

<style scoped></style>
