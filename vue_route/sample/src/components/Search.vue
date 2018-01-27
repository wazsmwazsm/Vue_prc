<template>
  <div class="search">
    <h1>Search String: {{ query }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
      query: {
        type: String
      }
    }
}
</script>

<style scoped>
.search {
  padding:20px;
}
</style>
