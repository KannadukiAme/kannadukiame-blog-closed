<template>
  <Layout class="layout grid grid-rows-layout">
    <Articles :list="$page.post.edges" />
  </Layout>
</template>

<page-query>
query ContainTag($title: String) {
	post: allPost(filter:{tags:{contains:[$title]}}) {
    edges{
      node{
        title,
        path,
        date,
        description,
        tags
      }
    }
  }
}
</page-query>

<script>
import Articles from "../components/Articles"

export default {
  metaInfo: {
    title: "Tag",
  },
  components: {
    Articles,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
