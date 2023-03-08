<template>
  <div class="q-mx-auto q-my-xl q-px-sm" style="max-width: 346px">
    <q-btn
      color="negative"
      class="full-width"
      label="Remove"
      :disable="worksheetStore.worksheets.length === 0"
      @click="worksheetStore.remove"
    />
  </div>
</template>

<script setup lang="ts">
import { useWorksheetStore } from '../stores/worksheet-store';

const worksheetStore = useWorksheetStore();
</script>
