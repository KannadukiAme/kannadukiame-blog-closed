<template>
  <Layout>
    <Articles />
  </Layout>
</template>

<script>
import Articles from "../components/Articles";

export default {
  metaInfo: {
    title: "Anime",
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
