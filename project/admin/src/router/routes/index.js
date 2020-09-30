import banner from './banner'
import dashboard from './dashboard'
import lesson from './lesson'
import user from './user'

export const asyncRoutes = [
  banner,
  lesson,
  user,
  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true,
      noCache: true
    }
  }
]

// constantRoutes
export default [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      title: '首页',
      hidden: true
    }
  }, 
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      noCache: true,
      hidden: true
    }
  },
  {
    path: '/error',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: true,
      noCache: true,
      role: ['admin', 'edit']
    },
    children: [
      {
        path: '404',
        alias: '/404',
        component: () => import("@/views/404.vue"),
        meta: {
          hidden: true,
          noCache: true,
          role: ['admin', 'edit']
        }
      },
      {
        path: '403',
        alias: '/403',
        component: () => import("@/views/403.vue"),
        meta: {
          hidden: true,
          noCache: true,
        }
      }
    ]
  },
  dashboard
  
]