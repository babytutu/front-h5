import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import log from 'tui-vue-log'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.use(router).mount('#app')

app.use(log, {
  background: ['#303133', '#F56C6C'],
  style: 'padding: 4px 8px; color: #fff',
  border: '10px',
})

const global = window as any

router.beforeEach((to, from, next) => {
  const {
    meta: { title },
    params: { title: linkTitle },
  } = to
  // 更新标题
  if (linkTitle || title) {
    global.document.title = linkTitle || title
  }
  next()
})
