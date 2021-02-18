<template>
  <div>
    <div
      class="flex bg-no-repeat bg-cover px-4 __cover"
      :style="{ backgroundImage: imageUrl }"
    >
      <div class="flex flex-col container mx-auto self-center">
        <div class="text-4xl text-white font-bold text-center">
          {{ title }}
        </div>
        <div class="text-base text-white text-right font-bold mt-8">
          {{ date }}
        </div>
        <div class="text-white text-lg md:text-xl mt-12">
          {{ description }}
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-12">
      <Content class="markdown-body w-full"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from "date-fns"
import { usePageData } from 'vitepress'
import { computed } from 'vue'

const pageData = usePageData()
const frontMatter = computed(() => pageData.value.frontmatter)
const title = computed(() => frontMatter.value.title)
const date = computed(() => format(new Date(frontMatter.value.date), "yyyy-M-d"))
const imageUrl = computed(() => `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${frontMatter.value.image_url}')`)
const description = computed(() => frontMatter.value.description)

</script>

<style>
.__cover{
  height: calc(100vh - 100px);
}
</style>
