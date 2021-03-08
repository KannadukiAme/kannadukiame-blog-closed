<template>
  <div>
    <Header />
    <div class="__height bg-gray-700 flex flex-col justify-center items-center">
      <img
        class="rounded-full self-center"
        :src="avatar"
        width="128"
        height="128"
        alt
        srcset
      />
      <div class="text-2xl text-white font-bold mt-4">
        {{ name }}
      </div>
      <div class="text-xl text-white font-bold mt-4">
        {{ description }}
      </div>
    </div>
    <Footer class="bg-gray-50"/>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import { usePageData } from 'vitepress'
import { computed } from 'vue'

const pageData = usePageData()
const frontmatter = computed(() => pageData.value.frontmatter)
const avatar = computed(() => frontmatter.value.avatar)
const name = computed(() => frontmatter.value.name)
const description = computed(() => frontmatter.value.description)
</script>

<style>
.__height {
  height: calc(100vh - 52px - 148px)
}
</style>
