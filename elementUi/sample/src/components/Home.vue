<template>
  <div class="home">
    <h1>Home</h1>
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return { visible: false }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
