<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-5" v-for="(item, index) in list" :key="index">
      <div class="text-3xl font-bold">
        <g-link class="hover:text-sora" :to="item.node.path">
          {{ item.node.title }}
        </g-link>
      </div>
      <div class="text-base text-gray-500 mb-2">
        发表于 {{ item.node.date | formatDate }}
      </div>
      <div class="flex text-base space-x-2 mb-5">
        <g-link
          class="tag"
          v-for="(tag, index) in item.node.tags"
          :key="index"
          :to="`/tags/${tag}`"
        >
          {{ tag }}
        </g-link>
      </div>
      <div>{{ item.node.description }}</div>
    </div>
    <div class="flex justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns"

export default {
  name: "Articles",
  props: {
    list: Array,
  },
  filters: {
    formatDate: function (date) {
      return format(new Date(date), "yyyy 年 M月 d日")
    }
  }
};
</script>
