<template>
  <Layout class="layout grid grid-rows-post-layout">
    <div class="flex bg-no-repeat bg-cover px-4" :style="{ 'background-image': imageUrl }">
      <div class="flex flex-col container mx-auto self-center">
        <div class="text-4xl text-white font-bold md:text-6xl text-center">{{this.$page.post.title}}</div>
        <div class="text-white text-lg md:text-xl mt-20">{{this.$page.post.description}}</div>
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
  },
};
</script>
