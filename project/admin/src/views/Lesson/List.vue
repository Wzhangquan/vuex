<template>
  <Main 
    content="课程列表" 
    :data="lessons" 
    :cols="cols" 
    :total="total"
    :current-page="params._page"
    :page-size="params._limit"
    @current-change="setParams"
    @size-change="setParams"
  ></Main>
</template>

<script>
import Main from '@/components/Main'
import { mapActions, mapMutations, mapState } from 'vuex'


export default {  
  data () {
    return {
      cols: [
        {
          prop: 'title',
          label: '标题',
          width: 200
        }, {
          prop: 'author',
          label: '作者',
          width: 100,
        }, {
          prop: 'desc',
          label: '描述',
          width: 300
        }, {
          prop: 'price',
          label: '价格',
          width: 100
        }, {
          prop: 'status',
          label: '状态',
          width: 100
        }, {
          prop: 'img_url',
          label: '缩略图',
          // width: 150
        }
      ]
    }
  },

  components: {
    Main
  },

  computed: {
    ...mapState('lesson', ['lessons', 'params', 'total'])
  },

  methods: {
    ...mapActions('lesson', ['getLessons']),
    ...mapMutations('lesson', {
      setParamsMutations: 'setParams'
    }),

    setParams (payload) {
      console.log(payload)
      /* const params = {
        [payload.key]: payload.value
      }

      if (payload.key === "_limit") {
        params._page = 1
      } */
      if (payload.key === "_page") {
        this.setParamsMutations({
          _page: payload.value
        })
      } else {
        this.setParamsMutations({
          _page: 1,
          _limit: payload.value
        })
      }


      // mutation修改数据后，重新请求数据
      this.getLessons()

    }
  },

  created () {
    // this.$store.dispatch('getLessons')
    this.getLessons()
  }
}
</script>

<style>

</style>