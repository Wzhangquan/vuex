import { getBanners } from "../../api/banner"

import { setData } from '../mutations'

export default {
  namespaced: true,
  state () {
    return {
      total: 0,
      params: {
        _page: 1,
        _limit:10
      },

      banners: [],

      loading: false
    }
  },

  mutations: {
    /* setBanners (state, banners) {
      state.banners = banners
    }, */
    setBanners: setData,

    setLoading (state, status) {
      state.loading = status
    },

    setTotal (state, total) {
      state.total = total
    }
  },

  actions: {
    // 创建一个action用来请求banners数据
    async getBanners ({commit, state}) {
      // 请求开始前将loading设置为true
      commit('setLoading', true)
      const res = await getBanners(state.params)

      commit('setTotal', +res.headers['x-total-count'])
      // res.data
      commit('setBanners', {key: 'banners', data: res.data})
      commit('setLoading', false)
      /* getBanners(state.params).then(res => {
        // res.data 就是数据 把数据提交给mutation
        commit('setBanners', res.data)
         // 请求开始前将loading设置为false
        commit('setLoading', false)
      }) */
    }
  }
}