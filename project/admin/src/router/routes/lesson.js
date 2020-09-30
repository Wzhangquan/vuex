import Layout from '@/layout/index'

export default {
  path: '/lesson',
  redirect: '/lesson/list',
  meta: {
    title: '课程管理',
    icon: 'data-board',
    role: ['admin', 'edit']
  },
  component: Layout,
  children: [
    {
      path: 'list',
      component: () => import('@/views/Lesson/List'),
      meta: {
        title: '课程列表',
        icon: 'tickets',
        role: ['admin', 'edit']
      }
    }, {
      path: 'add',
      component: () => import('@/views/Lesson/Add'),
      meta: {
        title: '新增课程',
        icon: 'plus',
        role: ['admin', 'edit']
      }
    }
  ]
}