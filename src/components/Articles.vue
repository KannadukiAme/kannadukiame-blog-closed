<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-5" v-for="(item, index) in $static.post.edges" :key="index">
      <div class="text-5xl font-bold hover:text-sora">
        <a :href="item.node.path">{{item.node.title}}</a>
      </div>
      <div class="text-base text-gray-500 mb-2">发表于 {{item.node.date}}</div>
      <div class="flex text-base space-x-2 mb-5">
        <div class="tag" v-for="(tag, index) in item.node.tags" :key="index">{{tag}}</div>
      </div>
      <div>{{item.node.description}}</div>
    </div>
  </div>
</template>

<static-query>
query Post($page:Int) {
  post: allPost(perPage: 6, page: $page, order: DESC, sortBy: "created_at") @paginate  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title,
        path,
        date,
        description,
        tags
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "Articles",
};
</script>
