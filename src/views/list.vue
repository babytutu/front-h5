<template>
  <section>
    <!--判断是否有结果，总页数0的时候说明没结果-->
    <template v-if="!totalPage">
      <!-- @see https://youzan.github.io/vant/#/zh-CN/empty -->
      <van-empty description="未找到结果" :image="imagePath" />
    </template>
    <template v-else>
      <!-- @see https://youzan.github.io/vant/#/zh-CN/pull-refresh -->
      <van-pull-refresh v-model="isLoading" @refresh="getList(1)">
        <!--@see https://youzan.github.io/vant/#/zh-CN/list -->
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getList">
          <!--@see https://youzan.github.io/vant/#/zh-CN/cell -->
          <van-cell-group :title="i.title"
            v-for="i in list"
            :key="i.id">
            <van-cell
              v-for="item in i.list"
              :key="item.id"
              icon="question-o"
              :title="item.title"
              :label="item.content"
              @click="clickListItem(item)">
            </van-cell>
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </template>
    <van-popup
      v-model="showContent"
      closeable
      position="bottom"
      :style="{ height: '100%' }"
    >
      <div class="popup-content" v-html="content"></div>
    </van-popup>
  </section>
</template>
<script>
export default {
  data () {
    return {
      imagePath: 'static/img/empty-image-default.png',
      list: [],
      searchForm: {
        currentPage: 1, // 当前页
      },
      totalPage: 1, // 总页数
      isLoading: false, // 下拉刷新 https://youzan.github.io/vant/#/zh-CN/pull-refresh
      loading: false, // 上拉加载 https://youzan.github.io/vant/#/zh-CN/list
      finished: false, // 没有更多
      showContent: false, // 富文本弹窗
      content: '', // 富文本内容
    }
  },
  methods: {
    /**
     * 请求接口获取列表数据
     * @param {string} page 指定当前页
     */
    getList (page) {
      if (page) {
        this.searchForm.currentPage = 1
        this.list = []
      }
      this.$axios.get(this.$apis.list.qa, this.searchForm).then(res => this.renderList(res))
    },
    /**
     * 渲染列表
     * @param {object} res 数据
     */
    renderList (res) {
      const {
        totalPage = 0,
        data = []
      } = res
      this.isLoading = false // 重置加载状态
      this.loading = false // 重置加载状态
      this.totalPage = totalPage // 赋值总页数
      // 没有数据或到了最后一页，就停止加载
      this.finished = this.searchForm.currentPage >= this.totalPage
      // 第一页数据直接赋值，第二页开始数据做拼接
      this.list = this.searchForm.currentPage === 1 ? data : this.list.concat(data)
      // 当前页数自增
      if (!this.finished) {
        this.searchForm.currentPage++
      }
    },
    /**
     * 如果有跳转链接，直接跳转页面，如果有content，弹窗展示html代码
     * @param {*} item 信息
     */
    clickListItem (item) {
      // 如果有跳转链接，直接跳转
      if (item.redirectUrl) {
        window.location.href = item.redirectUrl
      } else if (item.content) {
        // 如果有content，弹窗展示html代码
        this.content = item.content
        this.showContent = true
      }
    },
  },
}
</script>
