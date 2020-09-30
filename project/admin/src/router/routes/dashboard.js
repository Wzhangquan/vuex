import Layout from '@/layout'

export default {
  path: '/dashboard',
  meta: {
    title: 'Dashboard',
    icon: 'menu',
    role: ['admin']
  },
  redirect: '/dashboard/console',
  component: Layout,
  children: [
    {
      path: 'console',
      component: () => import('@/views/Dashboard/Console'),
      meta: {
        title: '控制台',
        icon: 'ice-cream-square',
        role: ['admin']
      }
    }
  ]
}