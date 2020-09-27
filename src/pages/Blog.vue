<template>
  <Layout class="layout grid grid-rows-layout">
    <Articles :list="$page.post.edges">
      <Pager :info="$page.post.pageInfo" linkClass="tag mx-1" activeLinkClass="tag--active"/>
    </Articles>
  </Layout>
</template>

<page-query>
query Post($page:Int) {
  post: allPost(perPage: 10, page: $page, order: DESC) @paginate  {
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
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    Articles,
    Pager
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
