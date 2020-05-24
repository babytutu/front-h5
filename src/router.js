import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 页面汇总
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '前端集中营',
        home: true
      },
      component: () => import('./views/home.vue')
    },
    // 列表
    {
      path: '/list',
      name: 'list',
      meta: {
        title: '常见问题'
      },
      component: () => import('./views/list.vue')
    },
    {
      path: '/url/:url/:title',
      name: 'url',
      meta: {
        title: '组件库',
      },
      component: () => import('./views/iframe.vue')
    },
    // 默认
    {
      path: '*',
      redirect: '/home'
    },
  ]
})
