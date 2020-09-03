<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-5" v-for="(item, index) in list" :key="index">
      <div class="text-5xl font-bold">
        <g-link class="hover:text-sora" :to="item.node.path">{{item.node.title}}</g-link>
      </div>
      <div class="text-base text-gray-500 mb-2">发表于 {{item.node.date}}</div>
      <div class="flex text-base space-x-2 mb-5">
        <g-link
          class="tag"
          v-for="(tag, index) in item.node.tags"
          :key="index"
          :to="`/tags/${tag}`"
        >{{tag}}</g-link>
      </div>
      <div>{{item.node.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: {
    list: Array,
  },
  mounted(){
    console.log(this.list)
  }
};
</script>
