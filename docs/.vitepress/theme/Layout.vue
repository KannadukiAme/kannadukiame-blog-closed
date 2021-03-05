<template>
  <div class="bg-gray-50">
    <Header />
    <Banner v-if="isHome" />
    <List v-if="isHome"/>
    <Page v-else />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'

import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import List from './components/List.vue'
import Page from './components/Page.vue'
import Footer from './components/Footer.vue'

const router = useRoute()
const isHome = computed(() => router.path === '/' || router.path === '/index.html')

</script>

<style>

</style>
