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
    path: '/imgList',
    name: 'imgList',
    meta: {
      title: '随便写写',
    },
    component: () => import('@/views/imgList.vue'),
  },
  {
    path: '/addItem',
    name: 'addItem',
    meta: {
      title: '新增',
    },
    component: () => import('@/views/addItem.vue'),
  },
  {
    path: '/emojiLib',
    name: 'emojiLib',
    meta: {
      title: '表情合集',
    },
    component: () => import('@/views/emojiLib.vue'),
  },
]
