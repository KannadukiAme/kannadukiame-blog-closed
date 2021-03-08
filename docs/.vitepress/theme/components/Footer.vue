<template>
  <div class="flex flex-col justify-center items-center py-8">
    <div class="space-x-5 text-3xl mb-2">
      <a
        v-for="item in externalLink"
        :href="item.link"
        :key="item.icon"
        target="_blank"
      >
        <i :class="[item.icon, 'text-gray-500', 'hover:text-sora']"></i>
      </a>
    </div>
    <div class="text-gray-500 text-sm">
      Powered by
      <a class="hover:text-sora" target="_blank" href="https://vitepress.vuejs.org/">
        VitePress
        <i class="fas fa-external-link-alt ml-1"></i>
      </a>
    </div>
    <div class="text-gray-500 text-sm">
      {{ footer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSiteData } from 'vitepress'
import { computed } from 'vue'

const sideData = useSiteData()
const themeConfig = computed(() => sideData.value.themeConfig)
const externalLink = computed(() => themeConfig.value.externalLink)
const footer = computed(() => themeConfig.value.footer)

</script>

<style>

</style>
