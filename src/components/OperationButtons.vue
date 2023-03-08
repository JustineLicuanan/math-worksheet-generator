<template>
  <h6 class="text-center">Choose an Arithmetic Operation:</h6>
  <div class="row items-center justify-center">
    <q-btn
      v-for="(operationBtn, idx) in operationBtns"
      :key="idx"
      color="secondary"
      :icon="operationBtn.icon"
      class="q-mx-md"
      @click="worksheetStore.generate(operationBtn.operation)"
    />
    <q-btn color="secondary" class="q-mx-md" @click="worksheetStore.generate(EOperations.DIVISION)">
      <img src="../assets/baseline-divide-icon.svg" />
    </q-btn>
  </div>
  </template>

<script setup lang="ts">
import { EOperations, useWorksheetStore } from '../stores/worksheet-store';
import { IOperationBtns } from './models';

const worksheetStore = useWorksheetStore();
const operationBtns: IOperationBtns[] = [
  {
    icon: 'add',
    operation: EOperations.ADDITION,
  },
  {
    icon: 'remove',
    operation: EOperations.SUBTRACTION,
  },
  {
    icon: 'close',
    operation: EOperations.MULTIPLICATION,
  },
];
</script>
