<template>
  <div
    class="fixed right-4 bottom-4 text-4xl cursor-pointer text-gray-900 hover:text-sora"
    id="backToTop"
  >
    <i class="fas fa-chevron-up" @click="toTop"></i>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  mounted() {
    const backToTop = document.querySelector('#backToTop')
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block"
      } else {
        backToTop.style.display = "none"
      }
    })
  },
  methods: {
    toTop() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
  }
};
</script>
