import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 页面汇总
    {
      path: '/',
      name: 'home',
      meta: {
        title: '前端集中营',
        home: true
      },
      component: () => import('@/views/home.vue')
    },
    // 列表
    {
      path: '/qa',
      name: 'qa',
      meta: {
        title: '常见问题'
      },
      component: () => import('@/views/qa.vue')
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        title: '列表'
      },
      component: () => import('@/views/list.vue')
    },
    {
      path: '/detail/:page/:index',
      name: 'detail',
      meta: {
        title: '详情'
      },
      component: () => import('@/views/detail.vue')
    },
    {
      path: '/city',
      name: 'city',
      meta: {
        title: '城市列表'
      },
      component: () => import('@/views/city.vue')
    },
    {
      path: '/weather/:adcode',
      name: 'weather',
      meta: {
        title: '天气预报'
      },
      component: () => import('@/views/weather.vue')
    },
    {
      path: '/url/:url/:title',
      name: 'url',
      meta: {
        title: '组件库',
      },
      component: () => import('@/views/iframe.vue')
    },
    // 捕获 404 Not found 路由
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: '/'
    }
  ]
})

export default router
