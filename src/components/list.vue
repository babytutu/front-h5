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
<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['getData'])

let loading = ref(false)
let finished = ref(false)
let refreshing = ref(false)
let list = ref([] as Array<any>)
let page = ref(1)

/**
 * 渲染列表
 * @param {Array} data 数据
 * @param {Boolean} finish 是否加载完成
 */
function renderList(data: Array<any>, finish: boolean) {
  list.value = list.value.concat(data)
  finished.value = finish
  refreshing.value = false
  loading.value = false
  if (!finish) {
    page.value++
  }
}
/**
 * 加载列表
 */
function onLoad () {
  loading.value = true
  if (refreshing.value) {
    list.value = []
  }
  emit('getData', page.value)
}
/**
 * 刷新
 */
function onRefresh () {
  refreshing.value = true
  list.value = []
  page.value = 1
  onLoad()
}

defineExpose({
  renderList
})
</script>
