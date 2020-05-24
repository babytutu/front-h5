import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from './router'

import 'vant/lib/icon/local.css'

// 加载工具
import './utils/index'

Vue.config.productionTip = false

// 页面跳转增加登录验证
router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
