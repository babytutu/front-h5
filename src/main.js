import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { _axios } from './plugins/axios'

const app = createApp(App)

app.use(router).mount('#app')

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
