<template>
  <Layout class="layout grid grid-rows-post-layout">
    <div class="flex bg-no-repeat bg-cover px-4" :style="{ 'background-image': imageUrl }">
      <div class="flex flex-col container mx-auto self-center">
        <div class="text-4xl text-white font-bold md:text-6xl text-center">{{this.$page.post.title}}</div>
        <div class="text-base text-white text-right font-bold mt-8">{{this.date}}</div>
        <div class="flex space-x-2 justify-center">
          <g-link class="tag--white text-base text-white font-bold" v-for="(item, index) in this.$page.post.tags" :key="index" :to="`/tags/${item}`">{{item}}</g-link>
        </div>
        <div class="text-white text-lg md:text-xl mt-12">{{this.$page.post.description}}</div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-12">
      <VueRemarkContent class="markdown-body"></VueRemarkContent>
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
	post(id: $id) {
    title,
    description,
    date,
    tags,
    image_url
  }
}
</page-query>

<script>
import * as dayjs from "dayjs";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  computed: {
    imageUrl() {
      return `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${this.$page.post.image_url}')`;
    },
    date() {
      return dayjs(this.$page.post.date).format("YYYY 年 M月 D日");
    },
  },
};
</script>
