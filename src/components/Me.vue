<template>
  <div class="flex flex-col items-center container mx-auto px-4 py-32">
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
    <div class="mb-3 space-x-5 text-3xl">
      <g-link
        :to="item.link"
        v-for="item in $static.metadata.externalLink"
        :key="item.icon"
        target="_blank"
      >
        <i :class="[item.icon, 'text-gray-900', 'hover:text-sora']"></i>
      </g-link>
    </div>
    <div class="mb-2 text-gray-900 text-5xl">{{ $static.metadata.me.name }}</div>
    <div class="text-gray-900 text-xl font-jp">
      {{ $static.metadata.me.description }}
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
  name: "Me",
};
</script>
