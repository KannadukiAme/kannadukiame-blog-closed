<template>
  <div class="container mx-auto mt-8">
    <div class="h-80 flex bg-white mb-4 shadow-lg" v-for="(post, key) in this.posts" :key="key">
      <div class="hidden md:block md:w-1/3">
        <img class="h-full object-cover" :src="post.node.image_url">
      </div>
      <div class="md:w-2/3 px-8 py-8">
        <div class="mb-3"><g-link class="text-xl font-bold md:text-2xl hover:text-sora" :to="post.node.path">{{ post.node.title }}</g-link></div>
        <div class="mb-2 text-gray-400 text-sm  md:text-base"><i class="fas fa-calendar-alt mr-2"></i>{{ post.node.date | formatDate }}</div>
        <div class="flex text-sm space-x-2 mb-5"><g-link class="tag" v-for="(tag, index) in post.node.tags" :key="index" :to="`/tags/${tag}`">{{ tag }}</g-link></div>
        <div class="text-base md:text-lg md:leading-8">{{ post.node.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns"

export default {
  name: "Articles",
  props: {
    posts: Array,
  },
  filters: {
    formatDate: function (date) {
      return format(new Date(date), "yyyy-MM-dd")
    }
  }
};
</script>
