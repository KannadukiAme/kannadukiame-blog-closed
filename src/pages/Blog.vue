<template>
  <Layout class="layout grid grid-rows-layout">
    <Articles />
  </Layout>
</template>

<script>
import Articles from "../components/Articles";

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
