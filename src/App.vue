<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onBeforeMount, watch } from 'vue';
import { useDark } from './composables/useDark';

const $q = useQuasar();
const dark = useDark();

onBeforeMount(() => {
  dark.get();
});

watch(() => $q.dark.isActive, (val) => {
  dark.set(val);
});
</script>
