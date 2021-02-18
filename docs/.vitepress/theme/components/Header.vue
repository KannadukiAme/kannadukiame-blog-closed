<template>
  <div class="w-full">
    <div class="flex inset-x-0 container mx-auto justify-between z-10">
      <div class="flex px-2 py-2 space-x-6">
        <div class="text-gray-900 text-3xl font-bold">
          {{ title }}
        </div>
      </div>
      <div class="flex px-2 py-2 space-x-6 items-center">
        <a
          class="text-gray-500 font-bold hover:text-sora"
          v-for="item in nav"
          :href="item.link"
          :key="item.text"
          >{{ item.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSiteData } from 'vitepress'
import { computed } from 'vue'

const siteData = useSiteData()
const theme = computed(() => siteData.value.themeConfig)
const title = computed(() => siteData.value.title)
const nav = computed(() => theme.value.nav)

</script>

<style>

</style>
