<template>
  <q-layout view="lHr LpR lFr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-secondary">

        <q-toolbar-title>
          <span class="cursor-pointer">
            JustMath
          </span>
        </q-toolbar-title>

        <q-toggle
        v-model="$q.dark.isActive"
        color="dark"
        :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
        :label="$q.dark.isActive ? 'Dark Mode' : 'Light Mode'"
        @change="$q.dark.toggle"
      />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="text-center q-pt-xl">
      <p>
        &lt;/&gt; with ❤️ by
        <a
          href='//github.com/JustineLicuanan'
          target='_blank'
          rel='noopener noreferrer'
          class="text-secondary"
          style="text-decoration: none"
        >
          Justine Licuanan
        </a>
        &copy; {{ new Date().getFullYear() }}
      </p>
    </footer>

  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();
</script>
