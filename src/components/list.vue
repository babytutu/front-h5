<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template v-for="item in list" :key="item.id">
        <slot :data="item">
          <van-cell :title="item.title" :value="item.value" :label="item.label" :is-link="item.link" :to="item.to" />
        </slot>
      </template>
    </van-list>
  </van-pull-refresh>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: 'listModel',
  emits: ['getData'],
  expose: ['renderList'],
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      list: [] as Array<any>,
      page: 1
    }
  },
  methods: {
    /**
     * 渲染列表
     * @param {Array} data 数据
     * @param {Boolean} finished 是否加载完成
     */
    renderList (data: Array<any>, finished: boolean) {
      this.list = this.list.concat(data)
      this.finished = finished
      this.refreshing = false
      this.loading = false
      if (!this.finished) {
        this.page++
      }
    },
    /**
     * 加载列表
     */
    onLoad () {
      this.loading = true
      if (this.refreshing) {
        this.list = []
      }
      this.$emit('getData', this.page)
    },
    /**
     * 刷新
     */
    onRefresh () {
      this.refreshing = true
      this.list = []
      this.page = 1
      this.onLoad()
    }
  }
})
</script>
