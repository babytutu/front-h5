import Vue from 'vue'
import { Button, Dialog, Toast, NavBar, ImagePreview, Icon, Cell, CellGroup, Loading, List, Popup, Image, DropdownMenu, DropdownItem, Tabbar, TabbarItem, PullRefresh, Sticky, Search, Lazyload, Tag, Empty, Tab, Tabs, Panel } from 'vant'

// 全局注册
Vue.use(Dialog) // 对话框
Vue.use(Button) // 按钮
Vue.use(Toast) // 弹出提示
Vue.use(NavBar) // 顶部导航
Vue.use(ImagePreview) // 图片预览
Vue.use(Icon) // 图标
Vue.use(Loading) // 加载
Vue.use(List) // 列表
Vue.use(Cell).use(CellGroup) // 列表格子
Vue.use(Popup) // 弹窗
Vue.use(Image) // 图片
Vue.use(DropdownMenu).use(DropdownItem) // 下拉菜单
Vue.use(Tabbar).use(TabbarItem)
Vue.use(PullRefresh) // 下拉刷新
Vue.use(Sticky) // 置顶
Vue.use(Search) // 搜索
Vue.use(Lazyload) // 图片懒加载
Vue.use(Tag) // 标签
Vue.use(Empty) // 数据为空
Vue.use(Tab) // 标签页
Vue.use(Tabs) // 标签页
Vue.use(Panel) // 面板
