<template>
  <div class="container mx-auto mt-8">
    <div class="h-80 flex bg-white mb-4 shadow-lg" v-for="(post, key) in posts" :key="key">
      <div class="w-1/3">
        <img class="h-full object-cover" :src="post.image_url">
      </div>
      <div class="w-2/3 px-8 py-8">
        <div class="mb-3"><a class="text-2xl hover:text-sora" :href="post.link">{{ post.title }}</a></div>
        <div class="mb-2 text-gray-400 text-lg"><i class="fas fa-calendar-alt mr-2"></i>{{ format(new Date(post.date), "yyyy-M-d") }}</div>
        <div class="leading-8 text-lg">{{ post.description }}</div>
      </div>
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
