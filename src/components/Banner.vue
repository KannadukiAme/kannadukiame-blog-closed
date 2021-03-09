<template>
  <div class="h-96 bg-center" :style="{ backgroundImage: backgroundImage }">
    <div class="flex h-full __bg-text-color items-center">
      <div class="container mx-auto font-jp font-bold px-4">
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

<script>
export default {
  name: "Banner",
  data(){
    return {
      backgroundImage: 'url(/img/banner.jpg)'
    }
  }
};
</script>

<style>
.__bg-text-color {
  background-color:rgba(0,0,0,0.3)
}
</style>
