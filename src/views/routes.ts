export const routes = [
  // 页面汇总
  {
    path: '/',
    name: 'home',
    meta: {
      title: '前端集中营',
      home: true,
    },
    component: () => import('@/views/homePage.vue'),
  },
  // 列表
  {
    path: '/qa',
    name: 'qa',
    meta: {
      title: '常见问题',
    },
    component: () => import('@/views/qaPage.vue'),
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
    path: '/detail/:page/:index',
    name: 'detail',
    meta: {
      title: '详情',
    },
    component: () => import('@/views/detailPage.vue'),
  },
  {
    path: '/city',
    name: 'city',
    meta: {
      title: '城市列表',
    },
    component: () => import('@/views/cityPage.vue'),
  },
  {
    path: '/weather/:adcode',
    name: 'weather',
    meta: {
      title: '天气预报',
    },
    component: () => import('@/views/weatherInfo.vue'),
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
      title: '组件库',
    },
    component: () => import('@/views/iframePage.vue'),
  },
]
