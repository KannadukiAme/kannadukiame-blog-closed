<template>
  <Layout class="layout grid grid-rows-post-layout">
    <div class="flex bg-no-repeat bg-cover px-4" :style="{ 'background-image': imageUrl }">
      <div class="flex flex-col container mx-auto self-center">
        <div class="text-4xl text-white font-bold md:text-6xl text-center">{{post.title}}</div>
        <div class="text-base text-white text-right font-bold mt-8">{{this.date}}</div>
        <div class="flex space-x-2 justify-center">
          <g-link
            class="tag--white text-base text-white font-bold"
            v-for="(item, index) in post.tags"
            :key="index"
            :to="`/tags/${item}`"
          >{{item}}</g-link>
        </div>
        <div class="text-white text-lg md:text-xl mt-12">{{post.description}}</div>
      </div>
    </div>
    <div class="flex flex-wrap items-start justify-start container mx-auto px-4 py-12">
      <div
        class="hidden z-0 w-full h-0 md:block sm:pl-4 md:order-2 md:sticky md:top-head md:w-1/4 md:pl-16"
      >
        <div class="mb-8 text-xl font-bold">目录</div>
        <ul>
          <li
            v-for="(heading) in headings"
            :key="`${post.path}${heading.anchor}`"
            :class="{
            [`depth-${heading.depth}`]: true,
          }"
          >
            <g-link
              :to="`${post.path}${heading.anchor}`"
              class="relative flex items-center py-1 text-sm text-gray-500 hover:text-sora"
              :class="{
              'pl-2': heading.depth === 3,
              'pl-3': heading.depth === 4,
              'pl-4': heading.depth === 5,
              'pl-5': heading.depth === 6,
              'font-bold text-sora': activeAnchor === heading.anchor
            }"
            >{{ heading.value }}</g-link>
          </li>
        </ul>
      </div>
      <VueRemarkContent class="markdown-body w-full md:order-1 md:w-3/4"></VueRemarkContent>
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
	post(id: $id) {
    title,
    description,
    path,
    date,
    tags,
    image_url,
    headings{
      depth,
      value,
      anchor
    }
  }
}
</page-query>

<script>
import * as dayjs from "dayjs";

export default {
  metaInfo() {
    return {
      title: this.post.title,
    };
  },
  data() {
    return {
      activeAnchor: "",
      observer: null,
    };
  },
  computed: {
    post() {
      return this.$page.post;
    },
    imageUrl() {
      return `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${this.post.image_url}')`;
    },
    date() {
      return dayjs(this.post.date).format("YYYY 年 M月 D日");
    },
    headings() {
      return this.post.headings;
    },
  },
  watch: {
    $route: function () {
      setImmediate(() => {
        if (process.isClient && window.location.hash) {
          this.activeAnchor = decodeURIComponent(window.location.hash);
        }
        // Clear the current observer.
        if (this.observe) {
          this.observer.disconnect();
        }
        // And create another one for the next page.
        this.$nextTick(this.initObserver);
      });
    },
  },
  mounted() {
    if (process.isClient) {
      setImmediate(() => {
        if (window.location.hash) {
          this.activeAnchor = decodeURIComponent(window.location.hash);
        }
        this.initObserver();
      });
    }
  },
  methods: {
    observerCallback(entries, observer) {
      // This early return fixes the jumping
      // of the bubble active state when we click on a link.
      // There should be only one intersecting element anyways.
      if (entries.length > 1) {
        return;
      }
      const id = entries[0].target.id;
      // We want to give the link of the intersecting
      // headline active and add the hash to the url.
      if (id) {
        this.activeAnchor = "#" + id;
        if (history.replaceState) {
          history.replaceState(null, null, "#" + id);
        }
      }
    },
    initObserver() {
      this.observer = new IntersectionObserver(this.observerCallback, {
        // This rootMargin should allow intersections at the top of the page.
        rootMargin: "0px 0px 99999px",
        threshold: 1,
      });
      const elements = document.querySelectorAll(
        ".markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6"
      );
      for (let i = 0; i < elements.length; i++) {
        this.observer.observe(elements[i]);
      }
    },
  },
};
</script>
