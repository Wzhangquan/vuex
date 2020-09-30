<template>
  <el-row>
    <el-col>
      <el-form :model="user">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="loginHandler">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  
  methods: {
    ...mapActions('login', ['login']),

    async loginHandler () {
      // this.user
      // 做相关验证
      await this.login(this.user)
      // 表示登录成功
      console.log(2)
      this.$router.replace('/')
      this.$message.success('登录成功')
    } 
    /* loginHandler () {
      // this.user
      // 做相关验证
      this.login(this.user).then(() => {
        console.log(1)
        // 表示登录成功
        this.$router.replace('/')
        this.$message.success('登录成功')
      })
      
    }  */
  }
}
</script>

<style>

</style>