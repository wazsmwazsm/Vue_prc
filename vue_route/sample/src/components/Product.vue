<template>
  <div class="product">
    <!-- 这里为了解耦, 使用 props 传入 -->
    <h1>Product {{ id }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Product',
    props: ['id'] // 传入 props
}
</script>

<style scoped>
.product {
  padding:20px;
}
</style>
