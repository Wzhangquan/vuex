<template>
  <el-row type="flex" justify="space-between">
    <el-col>
      <div class="ctrl collapse" @click="TOGGLE_COLLAPSE">
        <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
      </div>
    </el-col>

    <el-col class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link user-info-panel" >
          <el-avatar icon="el-icon-user-solid"></el-avatar> 
          <span class="name">{{userInfo.username}}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { TOGGLE_COLLAPSE } from "../store/mutation-types";

export default {
  methods: {
    ...mapMutations([TOGGLE_COLLAPSE]),
    ...mapActions('login', ['logout'])
  },
  
  computed: {
    ...mapState(['isCollapse']),
    ...mapState('login', ['userInfo'])
  }
}
</script>

<style scoped>
.ctrl {
  height: 60px;
  line-height: 60px;
  padding: 0 12px;
  color: #515a6e;
  width: 18px;
  text-align: center;
}

.ctrl:hover {
  background: #f8f8f9;
}

.user-info {
  width: 100px;
}

.user-info-panel {
  display: flex;
  align-items: center;
  height: 60px;
}

.user-info-panel .name {
  margin-left: 10px;
}
</style>