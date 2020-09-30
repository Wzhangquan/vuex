import Layout from '@/layout/index'

export default {
  path: '/banner',
  redirect: '/banner/list',
  meta: {
    title: '轮播管理',
    icon: 'data-board',
    role: ['admin', 'edit']
  },
  component: Layout,
  children: [
    {
      path: 'list',
      component: () => import('@/views/Banner/List'),
      meta: {
        title: '轮播列表',
        icon: 'tickets',
        role: ['admin', 'edit']
      }
    }, {
      path: 'add',
      component: () => import('@/views/Banner/Add'),
      meta: {
        title: '新增轮播',
        icon: 'plus',
        role: ['admin']
      }
    }
  ]
}