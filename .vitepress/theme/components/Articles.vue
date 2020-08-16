<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-5" v-for="(item) in pageData.frontmatter.list">
      <div class="text-5xl font-bold hover:text-sora">
        <a :href="item.link">{{item.title}}</a>
      </div>
      <div class="text-base text-gray-500 mb-2">发表于 {{item.date}}</div>
      <div class="flex text-base space-x-2 mb-5">
        <div class="tag" v-for="(tag) in item.tags">{{tag}}</div>
      </div>
      <div>{{item.description}}</div>
    </div>
  </div>
</template>

<script>
import { usePageData } from "vitepress";

export default {
  name: "Articles",
  setup() {
    const pageData = usePageData();

    return {
      pageData,
    };
  },
};
</script>
