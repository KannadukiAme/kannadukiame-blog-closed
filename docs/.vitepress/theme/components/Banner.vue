<template>
  <div class="h-96 bg-center __banner" :style="{ backgroundImage: backgroundImage }">
    <div class="flex h-full __bg-text-color items-center">
      <div class="container mx-auto font-jp font-bold">
        <h1 class="text-4xl text-white text-center">
          これこそ人間の感情の極み、希望より熱く、絶望より深いもの、愛よ
        </h1>
        <p class="text-xl text-white mt-5 text-right">
          ——　暁美ほむら
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { usePageData } from 'vitepress'
import { ref, computed } from 'vue'

const imageUrl = ref('./img/banner.jpg')
const backgroundImage = computed(() => `url(${imageUrl.value})`)
</script>

<style>
.__banner {
  filter:blur(0);
}

.__bg-text-color {
  background-color:rgba(0,0,0,0.3)
}
</style>
