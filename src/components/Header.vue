<template>
  <div class="bg-gray-900">
    <div class="flex container mx-auto justify-between">
      <div class="flex px-2 py-2 space-x-6">
        <div class="text-3xl text-white">{{$static.metadata.siteName}}</div>
      </div>
      <div class="flex px-2 py-2 space-x-6">
        <a
          class="text-gray-500 font-bold hover:text-sora"
          v-for="(item) in $static.metadata.nav"
          :href="item.link"
          :key="item.text"
        >{{item.text}}</a>
      </div>
    </div>
    <div class="flex flex-col items-center container mx-auto mt-10">
      <div class="mb-3">
        <img
          class="rounded-full"
          :src="$static.metadata.me.avatar"
          width="128"
          height="128"
          alt
          srcset
        />
      </div>
      <div class="space-x-5 text-3xl">
        <a
          v-for="(item) in $static.metadata.externalLink"
          :href="item.link"
          :key="item.icon"
          target="_blank"
        >
          <i :class="[item.icon,'text-white', 'hover:text-sora']"></i>
        </a>
      </div>
      <div class="text-white text-5xl">{{$static.metadata.me.name}}</div>
      <div class="text-white text-base">{{$static.metadata.me.description}}</div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    me{
      avatar,
      name,
      description
    },
    nav{
      text,
      link
    },
    externalLink{
      icon,
      link
    }
  }
}
</static-query>

<script>
export default {
  name: "Header",
};
</script>
