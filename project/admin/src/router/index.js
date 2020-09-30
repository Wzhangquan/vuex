import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './routes'

import store from '../store/index'
import { auth } from '../api/login'


Vue.use(VueRouter)

// import store from '../store'


const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export const resetRouter = () => {
  // 重置路由，会清除所有的addRoutes添加的路由
  router.matcher = createRouter().matcher
}

// 设置全局前置守卫
router.beforeEach(async (to, from, next) => {
  if (store.state.routes.length === 0) {
    await store.dispatch('createRoutes', store.state.login.userInfo.role)

    next(to.path)
  }

  // 将切换的路由，提取有用信息 meta.title path 组成对象
  /* const 
    path = to.path,
    title = to.meta.title
  
  const route = {
    path,
    title
  } */
  // store.commit('pushRouteToCacheRoutes', route)
  store.dispatch('formatRoute', to)

  // 做路由拦截
  if (to.path !== '/login') {
    // 被拦截
    // 判断token是否有效
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      // const token = JSON.parse(userInfo).token
      // 拿到token去进行验证
      auth().then(() => {
        // 验证成功时的操作
        next()
      })

    } else {
      next('/login')
    }
  } else {
    next()
  }

})

export default router
