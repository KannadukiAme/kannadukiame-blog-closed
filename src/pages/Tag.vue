<template>
  <div>
    <Header />
    <Banner />
    <Articles :posts="$page.post.edges" />
    <Footer />
  </div>

</template>

<page-query>
query ContainTag($title: String) {
	post: allPost(filter:{tags:{contains:[$title]}}) {
    edges{
      node{
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
import Header from "../components/Header"
import Banner from "../components/Banner"
import Articles from "../components/Articles"
import Footer from "../components/Footer"

export default {
  metaInfo: {
    title: "标签",
  },
  components: {
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
