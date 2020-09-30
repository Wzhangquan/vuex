import Layout from '@/layout/index'

export default {
  path: '/user',
  redirect: '/user/list',
  meta: {
    title: '用户管理',
    icon: 'data-board',
    role: ['admin']
  },
  component: Layout,
  children: [
    {
      path: 'list',
      component: () => import('@/views/User/List'),
      meta: {
        title: '用户列表',
        icon: 'tickets',
        role: ['admin']
      }
    }, {
      path: 'add',
      component: () => import('@/views/User/Add'),
      meta: {
        title: '新增用户',
        icon: 'plus',
        role: ['admin']
      }
    }
  ]
}