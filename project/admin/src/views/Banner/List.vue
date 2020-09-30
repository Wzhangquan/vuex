<template>
  <Main content="轮播列表" :data="banners" :cols="cols" :total="total" @current-change="currentChange"></Main>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Main from '@/components/Main'

export default {
  data () {
    return {
      cols: [
        {
          prop: 'title',
          label: '标题',
          width: 200
        }
      ]
    }
  },

  components: {
    Main
  },

  computed: {
    ...mapState('banner', ['banners', 'loading', 'total'])
  },

  methods: {
    ...mapActions('banner', ['getBanners']),

    currentChange () {
      
    }
  },

  created () {
    this.getBanners()
    // this.$store.dispatch('banner/getBanners')
  }
}
</script>

<style>

</style>