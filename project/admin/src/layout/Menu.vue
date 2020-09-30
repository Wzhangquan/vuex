<template>
  <el-menu
    style="border-right: none"
    :collapse="isCollapse "
    router
    :default-active="defaultActive"
    class="el-menu-vertical"
    background-color="#191a23"
    text-color="#fff"
    active-text-color="#ffd04b">
    <template v-for="parentRoute in routes">
      <el-submenu style="background: #101117" :index="parentRoute.path" :key="parentRoute.path" v-if="parentRoute.meta && !parentRoute.meta.hidden">
        <template slot="title">
          <i :class="['el-icon-' + parentRoute.meta.icon || 'question']"></i>
          <span>{{parentRoute.meta.title}}</span>
        </template>
        
        <template v-for="childRoute in parentRoute.children">
          <el-menu-item :index="parentRoute.path + '/' + childRoute.path" :key="childRoute.path" v-if="childRoute.meta && !childRoute.meta.hidden">
            <i v-if="childRoute.meta.title" :class="['el-icon-' + childRoute.meta.icon || 'question']"></i>
            <span>{{childRoute.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['routes', 'isCollapse']),
    ...mapState('login', ['userInfo']),
    
    defaultActive () {
      return this.$route.path
    }
  },

  methods: {
    // ...mapActions(['createRoutes']),
  },

  created () {
    // dispatch对应的createRoutes 
    /* if (this.routes.length === 0) {
      this.createRoutes(this.userInfo.role)
    } */
  }
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>