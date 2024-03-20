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
    path: '/weather',
    name: 'weather',
    meta: {
      title: '天气预报',
    },
    component: () => import('@/views/cityPage.vue'),
  },
  {
    path: '/MacApps',
    name: 'Mac软件',
    meta: {
      title: 'MacApps',
    },
    component: () => import('@/views/MacApps.vue'),
  },
  {
    path: '/url/:url/:title',
    name: 'url',
    meta: {
      title: '',
    },
    component: () => import('@/views/iframePage.vue'),
  },
  {
    path: '/emojiLib',
    name: 'emojiLib',
    meta: {
      title: '表情合集',
    },
    component: () => import('@/views/emojiLib.vue'),
  },
  {
    path: '/yLibrary',
    name: 'yLibrary',
    meta: {
      title: '图书馆',
    },
    component: () => import('@/views/yLibrary.vue'),
  },
]
