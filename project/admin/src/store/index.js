import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)


import routes, {asyncRoutes} from '../router/routes'

import banner from './modules/banner'
import lesson from './modules/lesson'
import login from './modules/login'

import { TOGGLE_COLLAPSE } from "./mutation-types";

import { filterRoutes } from "../utils/index";


const store = new Vuex.Store({
  state: {
    routes: [],
    cacheRoutes: [{
      path: '/dashboard/console',
      title: '控制台'
    }],
    isCollapse: false
  },


  mutations: {

    [TOGGLE_COLLAPSE] (state) {
      state.isCollapse = !state.isCollapse
    },

    pushRouteToCacheRoutes (state, route) {
      state.cacheRoutes.push(route)
    },

    removeRouteByIndex (state, index) {
      state.cacheRoutes.splice(index, 1)
    },

    setRoutes (state, routes) {
      state.routes = routes
    }
  },
  actions: {
    formatRoute ({commit, state}, route) {
      // 这个路由中包含了所有的信息， route.meta.title route.path
      

      // 判断state.cacheRoutes中是否有route
      if (!route.meta.noCache && route.meta.title) {
        if (!state.cacheRoutes.some(r => r.path === route.path)) {
          const _route = {
            title: route.meta.title,
            path: route.path
          }
          // 把_route添加到cacheRoutes
          commit('pushRouteToCacheRoutes', _route)
        }
      }
      
    },


    getRemoveRouteIndex ({commit, state}, {name, type}) {
      // 根据name找到对应route的index  name就是path
      const index = state.cacheRoutes.findIndex(route => route.path === name)
      commit('removeRouteByIndex', index)
      // 删除成功后，页面跳转到首页
      if (type) {
        router.replace(state.cacheRoutes[index - 1].path)
      }
    },

    async createRoutes ({commit}, role) {
      // 根据引入的routes去生成一个新的路由列表，用来渲染对应的菜单
      let _routes
      let aRoutes
      // routes 是引入的 代表全部的路由列表
      if (role === "admin") {
        // 如果角色是超级用户 则把所有路由都添加
        aRoutes = asyncRoutes
        _routes = [...routes, ...aRoutes]
      } else {
        // 如果是其他角色，则筛选asyncRoutes 未来只添加筛选后的路由
        aRoutes = filterRoutes(asyncRoutes, role)
        _routes = [...routes, ...aRoutes]
      }


      // 把生成的新的_routes 设置给state.routes
      commit('setRoutes', _routes)
      // _routes
      router.addRoutes(aRoutes)
    }
  },

  modules: {
    banner,
    lesson,
    login
  }
})

export default store