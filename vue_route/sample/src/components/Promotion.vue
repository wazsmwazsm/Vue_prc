<template>
  <div class="promotion">
    <!-- 这里为了解耦, 使用 props 传入 -->
    <h1>Promotion {{ newsletterPopup }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Promotion',
    props: {
      // 由路由直接传入
      newsletterPopup: {
        type: Boolean,
        default: true
      }
    }
}
</script>

<style scoped>
.promotion {
  padding:20px;
}
</style>
