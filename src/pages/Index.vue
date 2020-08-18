<template>
  <Layout>
    <Home />
  </Layout>
</template>

<script>
import Home from "../components/Home";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Home,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
