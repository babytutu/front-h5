import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Dialog, Toast, NavBar, ImagePreview, Icon, Cell, CellGroup, Loading, List, Popup, Image, DropdownMenu, DropdownItem, Tabbar, TabbarItem, PullRefresh, Sticky, Search, Lazyload, Tag, Empty, Tab, Tabs } from 'vant'
import { _axios } from './plugins/axios'

const app = createApp(App)

app.use(router)
// 全局注册组件
app.use(Dialog) // 对话框
app.use(Button) // 按钮
app.use(Toast) // 弹出提示
app.use(NavBar) // 顶部导航
app.use(ImagePreview) // 图片预览
app.use(Icon) // 图标
app.use(Loading) // 加载
app.use(List) // 列表
app.use(Cell).use(CellGroup) // 列表格子
app.use(Popup) // 弹窗
app.use(Image) // 图片
app.use(DropdownMenu).use(DropdownItem) // 下拉菜单
app.use(Tabbar).use(TabbarItem)
app.use(PullRefresh) // 下拉刷新
app.use(Sticky) // 置顶
app.use(Search) // 搜索
app.use(Lazyload) // 图片懒加载
app.use(Tag) // 标签
app.use(Empty) // 数据为空
app.use(Tab) // 标签页
app.use(Tabs) // 标签页
app.mount('#app')

app.config.globalProperties.$axios = _axios
app.config.globalProperties.$apis = {
  // 列表
  list: {
    list: 'data/list.json', // 列表
    qa: 'data/qa.json' // 列表
  }
}
