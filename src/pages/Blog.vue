<template>
  <Layout class="layout grid grid-rows-layout">
    <Articles :list="$page.post.edges" />
  </Layout>
</template>

<page-query>
query Post($page:Int) {
  post: allPost(perPage: 6, page: $page, order: DESC) @paginate  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
    title: "Blog",
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
