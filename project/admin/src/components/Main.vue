<template>
  <el-row>
    <el-col>
      <el-card shadow="never" style="margin-bottom: 15px">
        <el-page-header @back="goBack" :content="content"></el-page-header>
      </el-card>
    </el-col>
    
    <el-col>
      <el-card shadow="never" style="height: calc(100vh - 230px)">
        <el-table :data="data" height="100%" v-if="data">
          <el-table-column type="selection" width="55"></el-table-column>

          <el-table-column v-for="col in cols" :key="col.prop" :prop="col.prop" :label="col.label" :width="col.width">
            <!-- 状态 -->
            <template v-if="col.prop === 'status'" v-slot="{row}">
              <el-tag
                size="mini"
                :type="row.status ? 'info' : ''"
                effect="dark">
                {{ row.status ? '锁定' : '启用' }}
              </el-tag>
            </template>

            <!-- 描述 -->
            <template v-else-if="col.prop === 'desc'" v-slot="{row}">
              <el-popover placement="top" :content="row.desc" width="250" trigger="hover">
                  <span slot="reference">
                    {{row.desc.slice(0, 20)}}……
                  </span>
              </el-popover>
            </template>

            <!-- 缩略图 -->
            <template v-else-if="col.prop === 'img_url'" v-slot="{row}">
              <img :src="row.img_url" width="100" alt="">
            </template>

          </el-table-column>
          <el-table-column fixed="right" width="90" label="操作">
            <template>
              <el-button size="mini" type="text">编辑</el-button>
              <el-button size="mini" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          layout="sizes, prev, pager, next"
          :page-size="pageSize"
          :page-sizes="[10, 20, 30]"
          :current-page="currentPage"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
          >
        </el-pagination>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '页头'
    },

    data: {
      type: Array
    },

    cols: {
      type: Array
    },

    total: {
      type: Number
    },

    currentPage: Number,
    pageSize: Number
  },
  
  methods: {
    goBack () {
      this.$router.back()
    },


    currentChange (currentPage) {
      console.log(currentPage)
      this.$emit('current-change', {value: currentPage, key: '_page'})
    },

    sizeChange (size) {
      console.log(size)
      this.$emit('size-change', {value: size, key: '_limit'})
    }
  }
}
</script>

<style>

</style>