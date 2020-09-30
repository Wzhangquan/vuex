<template>
  <el-container class="wrapper">
    <el-aside style="width: auto;background: #191a23">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header class="header-wrapper">
        <Header></Header>
      </el-header>
      <el-main class="admin-layout">
        <CacheRoutes></CacheRoutes>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/ecmascript-6">
import Menu from './Menu'
import Header from './Header'
import CacheRoutes from './CacheRoutes'
export default {
  name: "",
  data() {
      return {}
  },
  components: {
    Menu,
    Header,
    CacheRoutes
  },
  methods: {
   
  },

  created () {
  }
}
</script>

<style scoped>
.header-wrapper {
  padding: 0;
}

.admin-layout {
  background: #f5f7f9;
}

.wrapper {
  height: 100vh;
}
</style>
