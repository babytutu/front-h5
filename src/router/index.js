import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 页面汇总
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '前端集中营',
      home: true
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/home.vue')
  },
  // 列表
  {
    path: '/list',
    name: 'list',
    meta: {
      title: '常见问题'
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/list.vue')
  },
  {
    path: '/url/:url/:title',
    name: 'url',
    meta: {
      title: '组件库',
    },
    component: () => import(/* webpackChunkName: "docs" */'../views/iframe.vue')
  },
  // 默认
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
