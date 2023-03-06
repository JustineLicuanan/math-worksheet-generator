<template>
  <section class="flex flex-col items-center justify-center gap-5 py-5">
    <h2 class="text-lg">Choose an Arithmentic Operation:</h2>
    <div class="flex flex-wrap items-center justify-center gap-7">
      <button
        class="py-2"
        @click="worksheetStore.generate(worksheetStore.EOperations.ADDITION)"
      >
        <PlusIcon class="inline-block h-6 w-6 align-middle" />
      </button>
      <button
        class="py-2"
        @click="worksheetStore.generate(worksheetStore.EOperations.SUBTRACTION)"
      >
        <MinusIcon class="inline-block h-6 w-6 align-middle" />
      </button>
      <button
        class="py-2"
        @click="
          worksheetStore.generate(worksheetStore.EOperations.MULTIPLICATION)
        "
      >
        <XMarkIcon class="inline-block h-6 w-6 align-middle" />
      </button>
      <button
        class="py-2 px-5"
        @click="worksheetStore.generate(worksheetStore.EOperations.DIVISION)"
      >
        <span class="text-2xl leading-none">÷</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline";
  import { useWorksheet } from "@/composables/worksheet";

  const worksheetStore = useWorksheet();
</script>

<style scoped></style>
