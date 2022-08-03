import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.use(router).mount('#app')

const global = window as any

router.beforeEach((to, from, next) => {
  const {
    meta: {
      title,
    },
    params: {
      title: linkTitle
    }
  } = to
  if (linkTitle || title) {
    global.document.title = linkTitle || title
    to.meta.title = linkTitle || title
  }
  next()
})
