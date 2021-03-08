<template>
  <div>
    <Home v-if="isHome"/>
    <About v-else-if="isAbout" />
    <Template v-else/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Template from './views/Template.vue'

const router = useRoute()
const isHome = computed(() => router.path === '/' || router.path === '/index.html')
const isAbout = computed(() => router.path === '/about.html')

</script>

<style>

</style>
