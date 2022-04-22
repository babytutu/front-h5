import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { _axios } from './plugins/axios'
import { Divider, Button, Cell, CellGroup, Toast, PullRefresh, List, NavBar, Icon } from 'vant'

const app = createApp(App)

// 全局注册
app.use(Divider)
app.use(Button)
app.use(Cell).use(CellGroup)
app.use(Toast)
app.use(PullRefresh)
app.use(List)
app.use(NavBar)
app.use(Icon)

app.use(router).mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

app.config.globalProperties.$axios = _axios
app.config.globalProperties.$apis = {
  // 本地接口
  list: {
    list: 'data/list.json', // 列表
    qa: 'data/qa.json', // 列表
  },
  weather: {
    city: 'data/city.json', // 城市列表
  }
}
