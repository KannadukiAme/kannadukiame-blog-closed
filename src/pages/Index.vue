<template>
  <div>
    <Header />
    <Banner />
    <Articles :posts="$page.post.edges" />
    <Pager class="flex justify-center" :info="$page.post.pageInfo" linkClass="tag mx-1" activeLinkClass="tag--active" />
    <Footer />
  </div>
</template>

<page-query>
query Post($page:Int) {
  post: allPost(perPage: 5, page: $page, order: DESC) @paginate  {
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
        image_url,
        description,
        tags
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

import Header from "../components/Header"
import Banner from "../components/Banner"
import Articles from "../components/Articles"
import Footer from "../components/Footer"

export default {
  metaInfo: {
    title: "首页",
  },
  components: {
    Pager,
    Header,
    Banner,
    Articles,
    Footer
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
