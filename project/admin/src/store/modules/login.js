import { login } from "../../api/login"
import router, { resetRouter } from "../../router"

export default {
  namespaced: true,
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo') || "{}")
  },

  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },

  actions: {
    async login ({commit, dispatch}, user) {
      const res = await login(user)
      // 把数据存储到localStorage
      const userInfo = res.data

      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      commit('setUserInfo', res.data)
      // 登录成功后，触发对应的action
      await dispatch('createRoutes', userInfo.role, {root: true})
    },
    /* login ({commit}, user) {
      return login(user).then(res => {
        // 把数据存储到localStorage
        localStorage.setItem('userInfo', JSON.stringify(res.data))
        commit('setUserInfo', res.data)
      })
    } */

    logout ({commit}) {
      commit('setUserInfo', {})
      // 删除localstore中token
      localStorage.removeItem('userInfo')
      resetRouter()
      router.replace('/login')
      
    }
  }
}