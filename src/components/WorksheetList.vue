<template>
  <div class="q-mx-sm">
    <div
      class="q-pa-md q-my-xl q-mx-auto"
      :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-3'"
      style="max-width: 330px"
      >
      <q-list bordered separator style="max-width: 298px">
        <q-item
          clickable
          v-ripple
          v-for="(worksheet, idx) in worksheetStore.worksheets"
          :key="idx + 1"
        >
          <q-item-section class="text-center">
            {{ worksheet[0] }} {{ worksheetStore.currentOperation }} {{ worksheet[1] }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useWorksheetStore } from '../stores/worksheet-store';

const $q = useQuasar();
const worksheetStore = useWorksheetStore();
</script>
