<template>
  <div class="grid grid-rows-layout">
    <Header />
    <Home v-if="route.path === '/'" />
    <Articles v-else-if="route.path === '/anime/'" />
    <Page v-else />
    <Footer />
  </div>
</template>

<script>
import { useRoute } from "vitepress";

import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Page from "./components/Page.vue";
import Articles from "./components/Articles.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Home,
    Page,
    Articles,
    Footer,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>
