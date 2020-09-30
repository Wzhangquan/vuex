<template>
<div class="cache-routes">
  <el-tabs 
    @tab-click="go"
    @tab-remove="remove"
    :value="$route.path" 
    type="card">
    <el-tab-pane
      v-for="(route, index) in cacheRoutes"
      :key="route.path"
      :closable="index !== 0"
      :label="route.title"
      :name="route.path"
    ></el-tab-pane>
  </el-tabs>
</div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['cacheRoutes'])
  },

  methods: {
    go ({name}) {
      this.$router.push(name)
    },

    remove (name) {
      this.getRemoveRouteIndex({name, type: this.$route.path === name})
    },

    ...mapActions(['getRemoveRouteIndex'])
  }
}
</script>

<style>

</style>