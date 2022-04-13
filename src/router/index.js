import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 页面汇总
  {
    path: '/',
    name: 'home',
    meta: {
      title: '前端集中营',
      home: true
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/home.vue')
  },
  // 列表
  {
    path: '/qa',
    name: 'qa',
    meta: {
      title: '常见问题'
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/qa.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: '列表'
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/list.vue')
  },
  {
    path: '/detail/:page/:index',
    name: 'detail',
    meta: {
      title: '详情'
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/detail.vue')
  },
  {
    path: '/city',
    name: 'city',
    meta: {
      title: '城市列表'
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/city.vue')
  },
  {
    path: '/weather/:adcode',
    name: 'weather',
    meta: {
      title: '天气预报'
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/weather.vue')
  },
  {
    path: '/url/:url/:title',
    name: 'url',
    meta: {
      title: '组件库',
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/iframe.vue')
  },
  // 捕获 404 Not found 路由
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
