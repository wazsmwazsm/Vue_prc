<template>
  <div class="login">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item>
                <el-input v-model="username" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('用户名: ' + this.username + '密码: ' + this.password)
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
   background-color: #B3C0D1;
   color: #333;
   text-align: center;
   line-height: 60px;
 }

 .el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   line-height: 160px;
 }

 body > .el-container {
   margin-bottom: 40px;
 }
</style>
