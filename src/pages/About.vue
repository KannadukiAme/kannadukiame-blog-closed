<template>
  <div>
    <Header />
    <Me />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"
import Me from "../components/Me"
import Footer from "../components/Footer"

export default {
  metaInfo: {
    title: "关于",
  },
  components: {
    Header,
    Me,
    Footer
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
