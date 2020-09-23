<template>
  <div>
    <div class="bg-white fixed w-full">
      <div class="flex inset-x-0 container mx-auto justify-between z-10">
        <div class="flex px-2 py-2 space-x-6">
          <div class="text-gray-900 text-3xl font-bold">
            {{ $static.metadata.siteName }}
          </div>
        </div>
        <div class="flex px-2 py-2 space-x-6 items-center">
          <g-link
            class="text-gray-500 font-bold hover:text-sora"
            exact-active-class="text-sora"
            v-for="item in $static.metadata.nav"
            :to="item.link"
            :key="item.text"
            >{{ item.text }}</g-link
          >
        </div>
      </div>
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
