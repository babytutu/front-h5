export const routes = [
  // 页面汇总
  {
    path: '/',
    name: 'home',
    meta: {
      title: '自娱自乐',
      home: true,
    },
    component: () => import('@/views/homePage.vue'),
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: '列表',
    },
    component: () => import('@/views/listPage.vue'),
  },
  {
    path: '/counter',
    name: 'counter',
    meta: {
      title: '计数器',
    },
    component: () => import('@/views/counterPage.vue'),
  },
  {
    path: '/url/:url/:title',
    name: 'url',
    meta: {
      title: '',
    },
    component: () => import('@/views/iframePage.vue'),
  },
]
