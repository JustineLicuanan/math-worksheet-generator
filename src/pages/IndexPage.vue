<template>
  <q-page>
    <h4 class="text-center">Math Worksheet Generator</h4>
    <operation-buttons />
    <worksheet-list />
    <remove-worksheet />
  </q-page>
</template>

<script setup lang="ts">
import OperationButtons from 'src/components/OperationButtons.vue';
import RemoveWorksheet from 'src/components/RemoveWorksheet.vue';
import WorksheetList from 'src/components/WorksheetList.vue';
</script>
