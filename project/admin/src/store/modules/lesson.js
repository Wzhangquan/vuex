import { getLessons } from "../../api/lesson"

import { setData } from '../mutations'

export default {
  namespaced: true,
  state: {
    lessons: [],
    total: 0,
    // 参数存放在vuex中
    params: {
      _limit: 10,
      _page: 1,
    }
  },

  mutations: {
    /* setLessons (state, lessons) {
      state.lessons = lessons
    }, */
    setLessons: setData,

    setTotal (state, total) {
      state.total = total
    },

    setParams (state, params) {
      /* 
        {
          _page: 2
        }
      */
      state.params = {
        ...state.params,
        ...params
      }
    }
  },

  actions: {
    async getLessons ({commit, state}) {
      // 发起请求
      const res = await getLessons(state.params) 
      // res.headers['x-total-count']
      commit('setTotal', +res.headers['x-total-count'])
      commit('setLessons', {key: 'lessons', data: res.data})
    }
  }
}