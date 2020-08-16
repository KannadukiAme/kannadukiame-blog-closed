<template>
  <div class="bg-gray-900">
    <div class="flex container mx-auto justify-between">
      <div class="flex px-2 py-2 space-x-6">
        <div class="text-3xl text-white">{{siteData.title}}</div>
      </div>
      <div class="flex px-2 py-2 space-x-6">
        <a
          class="text-gray-500 font-bold hover:text-sora"
          v-for="(item) in siteData.themeConfig.nav"
          :href="item.link"
        >{{item.text}}</a>
      </div>
    </div>
    <div class="flex flex-col items-center container mx-auto mt-10">
      <div class="mb-3">
        <img
          class="rounded-full"
          :src="siteData.themeConfig.me.avatar"
          width="128"
          height="128"
          alt
          srcset
        />
      </div>
      <div class="space-x-5 text-3xl">
        <a v-for="(item) in siteData.themeConfig.externalLink" :href="item.link" target="_blank">
          <i :class="[item.icon,'text-white', 'hover:text-sora']"></i>
        </a>
      </div>
      <div class="text-white text-5xl">{{siteData.themeConfig.me.name}}</div>
      <div class="text-white text-base">{{siteData.themeConfig.me.description}}</div>
    </div>
  </div>
</template>

<script>
import { useSiteData } from "vitepress";

export default {
  name: "Header",
  setup() {
    const siteData = useSiteData();

    return {
      siteData,
    };
  },
};
</script>
