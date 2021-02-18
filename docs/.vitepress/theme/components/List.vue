<template>
  <div class="container mx-auto">
    <div class="bg-white px-8 py-8 mb-4 shadow-lg" v-for="(post, key) in posts" :key="key">
      <div class="mb-2"><a class="text-2xl hover:text-sora" :href="post.link">{{ post.title }}</a></div>
      <div class="text-gray-400 text-sm">{{ format(new Date(post.date), "yyyy-M-d") }}</div>
      <div class="my-4 leading-8 text-lg">{{ post.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from "date-fns"
import { usePageData } from 'vitepress'
import { computed } from 'vue'

const pageData = usePageData()
const frontMatter = computed(() => pageData.value.frontmatter)
const posts = computed(() => frontMatter.value.posts)

</script>

<style>

</style>
